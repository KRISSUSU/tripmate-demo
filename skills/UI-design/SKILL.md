---
name: ui-design
description: 76 个知名品牌的设计系统参考文档（DESIGN.md）。当用户需要创建 UI、设计界面、生成网页时，使用这些设计系统作为参考。每个品牌包含完整的颜色、排版、组件、布局规范。
---

# UI Design Systems Reference

这是一个包含 74 个知名品牌设计系统的参考文档集合。每个品牌都有独立的 DESIGN.md 文件，详细定义了该品牌的设计语言。

## 使用场景

当用户要求：
- 创建某个品牌的 UI 页面（如"创建 Apple 风格的首页"）
- 生成特定设计风格的网页
- 需要参考某个品牌的设计系统

## 可用品牌

### AI & LLM
- **claude** - 温暖的编辑界面，奶油色画布 + 赤陶色 CTA
- **cohere** - 企业 AI 平台，丰富的数据可视化
- **elevenlabs** - AI 语音平台，深色电影质感
- **minimax** - 深色霓虹风格
- **mistral.ai** - 法式极简，紫色调
- **ollama** - 终端优先，单色简约
- **opencode.ai** - 开发者工具，现代极简
- **replicate** - AI 模型平台，简洁现代
- **runwayml** - 电影级全出血摄影，单字体系统
- **together.ai** - AI 基础设施，清晰专业
- **x.ai** - Grok/X 风格，极简黑白

### 开发者工具
- **airtable** - 数据库平台，彩色标签系统
- **clickhouse** - 数据分析，深色专业
- **composio** - 自动化工具，现代渐变
- **cursor** - AI 代码编辑器，深色极简
- **expo** - React Native 框架，蓝色专业
- **hashicorp** - 基础设施工具，紫色专业
- **mintlify** - 文档平台，清新现代
- **mongodb** - 数据库，绿色品牌色
- **posthog** - 产品分析，刺猬吉祥物
- **raycast** - 效率工具，紫色强调
- **resend** - 邮件 API，现代极简
- **sanity** - CMS 平台，紫色渐变
- **sentry** - 错误监控，紫色深夜画布 + 电光绿强调
- **supabase** - BaaS 平台，绿色专业
- **warp** - 终端工具，现代开发者
- **zapier** - 自动化工具，橙色品牌色

### 设计工具
- **dribbble** - 设计师社区，纯白画布 + 热粉色强调 + 圆角卡片瀑布流
- **figma** - 设计工具，黑白编辑 + 彩色色块
- **framer** - 网站构建器，现代渐变
- **lovable** - AI 构建工具，友好现代
- **miro** - 白板工具，黄色品牌色
- **notion** - 工作空间，紫色药丸 CTA + 海军蓝英雄区
- **webflow** - 无代码平台，蓝色专业

### 基础设施
- **clay** - 数据平台，现代专业
- **vercel** - 部署平台，黑白 + 网格渐变

### 金融 & 加密
- **binance** - 加密货币交易所，黄色品牌色
- **coinbase** - 加密交易，蓝色信任感
- **kraken** - 加密平台，深色数据密集
- **mastercard** - 支付网络，温暖奶油色
- **revolut** - 数字银行，钴紫色品牌色 + 黑色画布
- **stripe** - 支付基础设施，标志紫色渐变
- **wise** - 国际转账，亮绿色友好

### 电商 & 零售
- **airbnb** - 旅行市场，温暖珊瑚色 + 圆角
- **meta** - 科技零售，摄影优先
- **nike** - 运动零售，单色 + 大号 Futura
- **shopify** - 电商平台，深色电影感
- **starbucks** - 咖啡零售，四层绿色系统
- **travel-app** - 旅行预订，橄榄绿 + 奶油色画布 + 圆润卡片

### 媒体 & 消费科技
- **apple** - 消费电子，高级留白 + SF Pro
- **dell-1996** - 复古 Dell 风格
- **hp** - PC 制造商，纯白画布
- **ibm** - 企业技术，Carbon 设计系统
- **nintendo-2001** - 复古任天堂风格
- **nvidia** - GPU 计算，绿黑能量
- **pinterest** - 视觉发现，红色 + 瀑布流
- **playstation** - 游戏零售，青色悬停交互
- **spacex** - 太空技术，纯黑白
- **spotify** - 音乐流媒体，鲜艳绿 + 深色
- **theverge** - 科技媒体，酸薄荷 + 紫外线
- **uber** - 出行平台，纯黑白 + 药丸按钮
- **vodafone** - 电信品牌，纪念碑式大写
- **wired** - 科技杂志，报纸密度
- **x.ai** - AI 平台，极简黑白

### 汽车
- **bmw** - 豪华汽车，深色高级表面
- **bmw-m** - 性能汽车，赛车灵感对比
- **bugatti** - 超级跑车，电影黑色
- **ferrari** - 超级跑车，意大利赛车红
- **lamborghini** - 超级跑车，棱角分明
- **renault** - 汽车制造商，现代法式
- **tesla** - 电动汽车，极简未来主义

## 如何使用

### 1. 查看品牌设计系统

```bash
# 查看某个品牌的完整设计系统
cat ~/.openclaw/workspace/skills/UI-design/references/{brand}/DESIGN.md
```

### 2. 创建 UI 时引用

当用户要求创建某个品牌的 UI 时：

1. **读取对应品牌的 DESIGN.md**
2. **提取关键信息**：
   - 颜色系统（primary, canvas, ink 等）
   - 排版规范（字体、字号、字重）
   - 组件样式（按钮、卡片、表单等）
   - 布局原则（间距、网格、留白）
3. **按照规范生成代码**

### 3. 示例对话

**用户**: "帮我创建一个 Linear 风格的登录页面"

**你的操作**:
1. 读取 `~/.openclaw/workspace/skills/UI-design/references/linear.app/DESIGN.md`
2. 提取 Linear 的设计特点：
   - 深色画布 `#010102`
   - 薰衣草蓝强调色 `#5e6ad2`
   - SF Pro Display 字体
   - 紧凑的负字距
3. 生成符合 Linear 风格的登录页面代码

## 文件位置

所有设计系统文档位于：
```
~/.openclaw/workspace/skills/UI-design/references/{brand}/DESIGN.md
```

## 品牌总数

**76 个品牌**，覆盖：
- AI & LLM: 11 个
- 开发者工具: 16 个
- 设计工具: 7 个
- 基础设施: 2 个
- 金融 & 加密: 7 个
- 电商 & 零售: 6 个
- 媒体 & 消费科技: 16 个
- 汽车: 7 个

## 注意事项

1. 每个 DESIGN.md 都是完整的设计系统文档，包含颜色、排版、组件、布局等全部规范
2. 品牌风格各异，从极简黑白到丰富彩色都有
3. 有些品牌使用专有字体（如 Apple 的 SF Pro），生成代码时需要提供替代方案
4. 设计系统是参考而非强制，可以根据用户需求适当调整
