---
name: tripmate-xhs
version: 1.0.0
description: TripMate 旅行规划 App + 真实小红书数据接入，本地运行版
triggers:
  - tripmate
  - 旅行规划
  - 小红书旅行
  - xhs proxy
  - 启动tripmate
---

# TripMate × 小红书 Skill

TripMate 旅行规划 App，接入真实小红书笔记数据。用户搜索城市，自动抓取小红书高赞攻略填充到页面。

---

## 前置条件

1. **Node.js** 已安装（v18+）
2. **OpenCLI** 已安装并连接 Chrome 扩展（`opencli doctor` 显示全绿）
3. **小红书** 在 Chrome 里已登录

---

## 文件说明

| 文件 | 作用 |
|---|---|
| `xhs-proxy.js` | 本地代理服务，监听 19826 端口，调用 OpenCLI 搜小红书 |
| `index.html` | TripMate 旅行规划 App 主页面 |

---

## 启动方式

每次使用需要开**两个 PowerShell 窗口**：

**窗口1 — 启动小红书代理：**
```bash
node xhs-proxy.js
```
看到 `小红书代理已启动：http://localhost:19826` 即可

**窗口2 — 启动页面服务：**
```bash
npx serve .
```
看到端口号，用 Chrome 打开对应地址（如 `http://localhost:3000`）

---

## 使用方式

1. Chrome 打开 `http://localhost:3000`（或 serve 显示的端口）
2. 输入城市名，点「AI 规划」
3. 等待 30-60 秒（第一次搜索需要调用 OpenCLI）
4. 「参考笔记」标签出现真实小红书笔记 ✅

---

## 支持城市

内置数据：大理、三亚、成都、厦门、西安、杭州

任意城市：直接输入城市名，自动从小红书抓取该城市旅行攻略

---

## 数据字段说明

OpenCLI 小红书搜索返回字段：
- `title` — 笔记标题
- `author` — 作者昵称
- `likes` — 点赞数
- `url` — 笔记链接
- `published_at` — 发布时间

注意：封面图（cover）小红书不返回，使用随机占位图

---

## 当我说这些时，提示用户启动步骤

- 「启动 TripMate」
- 「用 TripMate 规划旅行」
- 「小红书旅行攻略」

---

## 常见问题

**Q: 笔记还是假数据？**
A: 检查 proxy 窗口有没有 `[搜索]` 日志。没有说明页面没连上代理，检查端口是否是 19826。

**Q: 搜索超时？**
A: 第一次调用 npx 需要时间，耐心等 60 秒。第二次搜索同城市会走缓存，秒出。

**Q: opencli 找不到？**
A: 用 `npx @jackwener/opencli` 替代 `opencli`，proxy 里已自动处理。

**Q: 只显示5个笔记？**
A: 代码里 `slice(0, 20)` 最多显示20个，如果只有5个说明小红书只返回了5个结果。
