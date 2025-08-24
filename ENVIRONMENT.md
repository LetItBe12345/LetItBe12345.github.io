# 🌍 环境配置说明

本项目采用环境判断的方式来管理不同环境下的配置，让本地开发更方便，部署时自动适配。

## 📁 配置文件结构

```
项目根目录/
├── .env.development     # 开发环境配置
├── .env.production      # 生产环境配置
├── .env.example         # 环境变量示例
├── config/
│   └── env.mjs          # 环境配置工具函数
└── astro.config.mjs     # Astro配置（自动根据环境加载）
```

## 🛠️ 环境变量说明

### 开发环境 (.env.development)
```bash
NODE_ENV=development
ASTRO_SITE=http://localhost:4321      # 本地开发地址
ASTRO_BASE=/                          # 本地开发无需基础路径
ASTRO_BUILD_FORMAT=file               # 开发构建格式
```

### 生产环境 (.env.production)
```bash
NODE_ENV=production
ASTRO_SITE=https://LetItBe12345.github.io    # GitHub Pages 域名
ASTRO_BASE=/academic-website                  # GitHub Pages 仓库路径
ASTRO_BUILD_FORMAT=directory                  # 生产构建格式
```

## 🚀 使用方法

### 开发环境
```bash
# 标准开发模式（自动加载开发环境配置）
npm run dev

# 使用生产环境配置进行本地开发（用于测试）
npm run dev:prod

# 查看当前环境配置信息
npm run env:info
```

### 构建和部署
```bash
# 生产环境构建（默认）
npm run build

# 开发环境构建（用于调试）
npm run build:dev

# 预览生产构建
npm run preview

# 使用生产配置预览
npm run preview:prod
```

## 🔧 自定义配置

如果需要覆盖默认配置，可以创建 `.env.local` 文件：

```bash
# 复制示例文件
cp .env.example .env.local

# 编辑自定义配置
nano .env.local
```

`.env.local` 文件会被 git 忽略，适合存放个人或敏感配置。

## 📝 配置优先级

1. `.env.local` (最高优先级，git忽略)
2. `.env.development` / `.env.production`
3. 默认值 (在 config/env.mjs 中定义)

## 🌟 优势特性

### ✅ 本地开发友好
- 自动使用本地地址 `http://localhost:4321`
- 无需设置基础路径，直接访问根路径
- 开发时显示环境配置信息

### ✅ 部署自动适配
- 生产构建自动使用 GitHub Pages 配置
- 正确设置站点 URL 和基础路径
- 优化的构建格式

### ✅ 灵活配置
- 支持多种环境配置
- 可通过环境变量覆盖
- 支持个人自定义配置

## 🔍 调试信息

在开发模式下，启动项目时会显示当前环境配置：

```
🌍 环境配置信息:
   环境: development
   站点: http://localhost:4321
   基础路径: /
   构建格式: file
```

## 📋 常见问题

**Q: 为什么本地开发时页面404？**
A: 确保使用 `npm run dev` 启动开发服务器，这会自动加载开发环境配置。

**Q: 如何测试生产环境配置？**
A: 使用 `npm run dev:prod` 可以在本地使用生产环境配置进行开发。

**Q: 部署到 GitHub Pages 后页面不显示？**
A: 确保 `.env.production` 中的 `ASTRO_SITE` 和 `ASTRO_BASE` 配置正确。

**Q: 如何添加新的环境变量？**
A: 在对应的 `.env.*` 文件中添加，然后在 `config/env.mjs` 中处理。
