// xhs-proxy.js - 本地小红书搜索代理
// 运行方式：node xhs-proxy.js
// 然后在 TripMate 页面搜索城市，真实小红书数据会自动加载

const http = require('http');
const { execSync } = require('child_process');

const PORT = 19826;

const server = http.createServer((req, res) => {
  // 允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://localhost:${PORT}`);
  const query = url.searchParams.get('q') || '旅行攻略';

  console.log(`[搜索] ${query}`);

  try {
    const cmd = `npx @jackwener/opencli xiaohongshu search "${query}" -n 8 -f json`;
    const output = execSync(cmd, { timeout: 15000, encoding: 'utf8' });
    
    // 解析输出
    let results = [];
    try {
      results = JSON.parse(output);
    } catch(e) {
      // 尝试从输出中提取 JSON
      const match = output.match(/\[[\s\S]*\]/);
      if (match) results = JSON.parse(match[0]);
    }

    console.log(`[结果] 找到 ${results.length} 篇笔记`);
    res.writeHead(200);
    res.end(JSON.stringify(results));
  } catch(e) {
    console.error(`[错误] ${e.message}`);
    res.writeHead(500);
    res.end(JSON.stringify({ error: e.message }));
  }
});

server.listen(PORT, () => {
  console.log(`✅ 小红书代理已启动：http://localhost:${PORT}`);
  console.log(`   搜索示例：http://localhost:${PORT}/?q=大理旅行攻略`);
  console.log(`   TripMate 页面搜索时会自动调用此代理`);
});
