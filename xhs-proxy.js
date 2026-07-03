const http = require('http');
const { exec } = require('child_process');

const PORT = 19826;
const cache = {};

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const url = new URL(req.url, 'http://localhost:' + PORT);
  const query = url.searchParams.get('q') || '旅行攻略';

  if (cache[query]) {
    console.log('[缓存] ' + query);
    res.writeHead(200);
    res.end(JSON.stringify(cache[query]));
    return;
  }

  console.log('[搜索] ' + query);
  const cmd = 'npx @jackwener/opencli xiaohongshu search "' + query + '" -f json';

  exec(cmd, { timeout: 120000 }, function(err, stdout, stderr) {
    if (err) {
      console.error('[错误] ' + err.message);
      res.writeHead(500);
      res.end(JSON.stringify({ error: err.message }));
      return;
    }

    let results = [];
    try {
      results = JSON.parse(stdout);
    } catch(e) {
      const start = stdout.indexOf('[');
      const end = stdout.lastIndexOf(']');
      if (start !== -1 && end !== -1) {
        try { results = JSON.parse(stdout.slice(start, end + 1)); } catch(e2) {}
      }
    }

    console.log('[结果] 找到 ' + results.length + ' 篇笔记');
    cache[query] = results;
    res.writeHead(200);
    res.end(JSON.stringify(results));
  });
});

server.listen(PORT, function() {
  console.log('小红书代理已启动：http://localhost:' + PORT);
});
