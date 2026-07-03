const http = require('http');
const { exec } = require('child_process');

const PORT = 19826;
const cache = {};

// 执行命令的 Promise 包装
function run(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, { timeout: 60000, encoding: 'utf8' }, (err, stdout) => {
      if (err) reject(err);
      else resolve(stdout);
    });
  });
}

// 解析 JSON 输出
function parseJson(str) {
  try { return JSON.parse(str); } catch(e) {
    const s = str.indexOf('['), e2 = str.lastIndexOf(']');
    if (s !== -1 && e2 !== -1) try { return JSON.parse(str.slice(s, e2+1)); } catch(e3) {}
    const s2 = str.indexOf('{'), e3 = str.lastIndexOf('}');
    if (s2 !== -1 && e3 !== -1) try { return JSON.parse(str.slice(s2, e3+1)); } catch(e4) {}
  }
  return null;
}

// 从正文提炼结构化数据
function extractFromContent(notes, dest) {
  const spots = new Set(), foods = new Set(), hotels = new Set(), tips = [];

  notes.forEach(n => {
    const text = (n.content || n.value || '');
    // 景点提取
    const spotPatterns = [/鼓浪屿|日光岩|南普陀|曾厝垵|环岛路|厦大|集美|土楼|沙坡尾|中山路|白城|黄厝|五缘湾/g,
      /古城|洱海|苍山|崇圣寺|喜洲|双廊|大理古城/g,
      /宽窄巷|锦里|武侯祠|都江堰|青城山|九寨沟|乐山/g,
      /西湖|灵隐寺|断桥|雷峰塔|龙井|乌镇|西溪/g,
      /兵马俑|华清池|大雁塔|回民街|城墙|碑林|钟楼/g,
      /鼓浪屿|日光岩|南普陀|曾厝垵/g];
    spotPatterns.forEach(p => { const m = text.match(p); if(m) m.forEach(s => spots.add(s)); });

    // 美食提取
    const foodPatterns = [/沙茶面|海蛎煎|土笋冻|花生汤|薄饼|烧肉粽/g,
      /乳扇|烤饵块|过桥米线|汽锅鸡|云腿月饼/g,
      /火锅|串串|担担面|钟水饺|赖汤圆|夫妻肺片/g,
      /西湖醋鱼|龙井虾仁|东坡肉|叫花鸡/g,
      /肉夹馍|羊肉泡馍|凉皮|biangbiang面/g];
    foodPatterns.forEach(p => { const m = text.match(p); if(m) m.forEach(f => foods.add(f)); });

    // 住宿提取
    const hotelMatch = text.match(/住[在|了]?([^\n，。]{2,15}[酒店|民宿|客栈|青旅|旅馆])/g);
    if (hotelMatch) hotelMatch.slice(0,3).forEach(h => hotels.add(h.replace(/^住[在了]?/, '')));

    // 提示
    if (text.includes('提前') || text.includes('避坑') || text.includes('注意')) {
      const lines = text.split('\n').filter(l => l.includes('提前') || l.includes('避坑') || l.includes('注意'));
      lines.slice(0,2).forEach(l => tips.push(l.slice(0, 40)));
    }
  });

  return {
    spots: [...spots].slice(0, 8),
    foods: [...foods].slice(0, 6),
    hotels: [...hotels].slice(0, 3),
    tips: tips.slice(0, 3)
  };
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  const url = new URL(req.url, 'http://localhost:' + PORT);
  const query = url.searchParams.get('q') || '旅行攻略';
  const mode = url.searchParams.get('mode') || 'search'; // search | deep
  const dest = url.searchParams.get('dest') || query.replace('旅行攻略', '');

  // 缓存命中
  const cacheKey = mode + ':' + query;
  if (cache[cacheKey]) {
    console.log('[缓存命中] ' + cacheKey);
    res.writeHead(200);
    res.end(JSON.stringify(cache[cacheKey]));
    return;
  }

  console.log('[' + mode + '] 搜索: ' + query);

  try {
    // Step1: 搜索笔记列表
    const searchOut = await run('npx @jackwener/opencli xiaohongshu search "' + query + '" -f json');
    const notes = parseJson(searchOut) || [];
    console.log('[搜索] 找到 ' + notes.length + ' 篇笔记');

    if (mode === 'search') {
      // 普通模式：只返回列表
      const result = notes.slice(0, 20).map(n => ({
        title: n.title || '旅行攻略',
        author: n.author || '旅行达人',
        likes: n.likes || '热门',
        url: n.url || '#',
        published_at: n.published_at || '',
        cover: 'https://picsum.photos/seed/' + encodeURIComponent((n.title||'').slice(0,8)) + '/300/400'
      }));
      cache[cacheKey] = result;
      res.writeHead(200);
      res.end(JSON.stringify(result));
      return;
    }

    // Deep 模式：读取前3篇正文，提炼结构化数据
    console.log('[深度] 读取前3篇正文...');
    const top3 = notes.filter(n => n.url).slice(0, 3);
    const noteContents = [];

    for (const n of top3) {
      try {
        const noteOut = await run('npx @jackwener/opencli xiaohongshu note "' + n.url + '" -f json');
        const parsed = parseJson(noteOut);
        if (parsed) {
          // parsed 可能是数组格式 [{field, value}]
          const obj = {};
          if (Array.isArray(parsed)) {
            parsed.forEach(item => { if(item.field) obj[item.field] = item.value; });
          } else { Object.assign(obj, parsed); }
          noteContents.push(obj);
          console.log('[正文] 读取成功: ' + (obj.title || n.title));
        }
      } catch(e) {
        console.log('[正文] 跳过: ' + e.message);
      }
    }

    // 提炼结构化数据
    const extracted = extractFromContent(noteContents, dest);
    console.log('[提炼] 景点:' + extracted.spots.length + ' 美食:' + extracted.foods.length);

    // 组合结果：笔记列表 + 提炼数据 + 原始正文摘要
    const result = {
      notes: notes.slice(0, 20).map(n => ({
        title: n.title || '旅行攻略',
        author: n.author || '旅行达人',
        likes: n.likes || '热门',
        url: n.url || '#',
        published_at: n.published_at || '',
        cover: 'https://picsum.photos/seed/' + encodeURIComponent((n.title||'').slice(0,8)) + '/300/400'
      })),
      extracted,
      summaries: noteContents.slice(0,3).map(n => ({
        title: n.title,
        content: (n.content || '').slice(0, 200)
      }))
    };

    cache[cacheKey] = result;
    res.writeHead(200);
    res.end(JSON.stringify(result));

  } catch(e) {
    console.error('[错误] ' + e.message);
    res.writeHead(500);
    res.end(JSON.stringify({ error: e.message }));
  }
});

server.listen(PORT, () => {
  console.log('✅ 小红书代理 v2.0 已启动: http://localhost:' + PORT);
  console.log('   模式: ?mode=search（快速）| ?mode=deep（深度读正文）');
});
