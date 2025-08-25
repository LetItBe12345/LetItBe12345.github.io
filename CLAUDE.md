# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目架构

这是一个基于Astro框架的学术个人网站，结构如下：
- **框架**: Astro 5.x + React + Tailwind CSS
- **部署**: GitHub Pages
- **内容管理**: JSON文件 + BibTeX文件管理学术内容
- **样式**: 支持深色/浅色模式的响应式设计

核心目录结构：
```
src/
├── components/     # 可复用组件（Navigation, Footer, ThemeToggle）
├── layouts/        # 页面布局模板
├── pages/          # 路由页面（index, publications, cv等）
└── content/        # 数据文件（papers.bib, news.json）
```

## 常用命令

**开发和构建**：
```bash
npm run dev              # 开发服务器（localhost:4321）
npm run dev:prod         # 生产环境模式开发
npm run build            # 生产构建
npm run build:dev        # 开发环境构建
npm run preview          # 预览构建结果
npm run preview:prod     # 生产模式预览
```

**实用工具**：
```bash
npm run env:info         # 查看环境配置信息
npm run astro            # Astro CLI命令
```

## 环境配置系统

项目使用 `config/env.mjs` 进行环境配置，支持：
- 开发/生产环境自动切换
- GitHub Pages 部署配置
- Vite构建优化设置

环境变量通过 NODE_ENV 控制，支持 `development` 和 `production` 模式。

## 内容管理

**论文数据**: `src/content/papers.bib` - BibTeX格式，使用citation-js解析
**新闻动态**: `src/content/news.json` - 结构化JSON数据
**项目信息**: 直接在页面中管理或可扩展为JSON文件

## React组件

仅 `src/components/ThemeToggle.jsx` 使用React，用于深色模式切换功能。其他组件均使用Astro组件格式(.astro)。

## 样式系统

- 使用Tailwind CSS实现响应式设计
- 支持深色模式（dark:）
- 主题色彩通过CSS变量定义
- 移动端优先设计方案

## 部署说明

### GitHub Pages 用户页面部署
项目配置为部署到 `https://letitbe12345.github.io/`（根域名）：

**要求**:
- 必须使用 `LetItBe12345` GitHub 账户
- 仓库名必须是 `LetItBe12345.github.io`
- 使用 `main` 分支自动部署

**环境配置**: 自动根据生产/开发环境切换站点URL和基础路径。