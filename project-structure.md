# 学术个人网站项目结构

```
academic-website/
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 deploy.yml                    # GitHub Actions 自动部署配置
│
├── 📁 .vscode/
│   ├── 📄 extensions.json                   # VS Code 推荐扩展
│   └── 📄 launch.json                       # 调试配置
│
├── 📁 .codesandbox/
│   └── 📄 Dockerfile                        # CodeSandbox 环境配置
│
├── 📁 public/
│   └── 📄 favicon.svg                       # 网站图标
│
├── 📁 src/
│   ├── 📁 layouts/
│   │   └── 📄 Layout.astro                  # 页面布局模板
│   │
│   ├── 📁 components/
│   │   ├── 📄 Navigation.astro              # 导航栏组件
│   │   ├── 📄 Footer.astro                  # 页脚组件
│   │   └── 📄 ThemeToggle.jsx               # 主题切换按钮 (React)
│   │
│   ├── 📁 pages/
│   │   ├── 📄 index.astro                   # 首页
│   │   ├── 📄 publications.astro            # 论文发表页面
│   │   ├── 📄 projects.astro                # 项目展示页面
│   │   ├── 📄 news.astro                    # 新闻动态页面
│   │   ├── 📄 cv.astro                      # 简历页面
│   │   └── 📄 repositories.astro            # GitHub 仓库页面
│   │
│   └── 📁 content/
│       ├── 📄 papers.bib                    # BibTeX 格式的论文数据
│       ├── 📄 projects.json                 # 项目信息 JSON 数据
│       └── 📄 news.json                     # 新闻动态 JSON 数据
│
├── 📄 astro.config.mjs                      # Astro 框架配置
├── 📄 tailwind.config.mjs                   # Tailwind CSS 配置
├── 📄 tsconfig.json                         # TypeScript 配置
├── 📄 package.json                          # 项目依赖和脚本
├── 📄 package-lock.json                     # 依赖版本锁定
├── 📄 README.md                             # 项目说明文档
└── 📄 .gitignore                            # Git 忽略文件配置
```

## 🏗️ 架构说明

### 📱 前端框架层
- **Astro**: 静态站点生成器，负责页面渲染和构建
- **React**: 用于交互式组件（主题切换器）
- **Tailwind CSS**: 样式框架，提供响应式设计

### 📄 页面结构
```
网站导航结构:
├── 🏠 首页 (/)
├── 📚 论文发表 (/publications)
├── 💼 项目展示 (/projects)
├── 📰 新闻动态 (/news)
├── 📋 个人简历 (/cv)
└── 💻 代码仓库 (/repositories)
```

### 📊 数据流向
```
数据源 → 构建时处理 → 静态页面
├── papers.bib → citation-js → 论文列表页面
├── projects.json → JSON 解析 → 项目展示页面
├── news.json → JSON 解析 → 新闻动态页面
└── GitHub API → 构建时获取 → 仓库展示页面
```

### 🎨 样式系统
```
Tailwind CSS 配置:
├── 🎨 主题色彩 (primary, secondary, accent)
├── 🌙 深色/浅色模式支持
├── 📱 响应式断点 (mobile, tablet, desktop)
├── 🔤 字体系统 (Inter 字体)
└── 📏 间距系统 (8px 基准)
```

### 🚀 部署流程
```
开发 → 构建 → 部署
├── 本地开发: npm run dev
├── 构建优化: npm run build
└── 自动部署: GitHub Actions → GitHub Pages
```

## 🔧 核心功能模块

### 1. **学术内容管理**
- BibTeX 论文解析
- 项目信息展示
- 新闻动态更新

### 2. **响应式设计**
- 移动端适配
- 深色模式支持
- 现代化 UI 设计

### 3. **SEO 优化**
- 静态 HTML 生成
- 元数据管理
- 搜索引擎友好

### 4. **开发体验**
- TypeScript 类型安全
- 热重载开发
- 自动化部署

这个结构设计让你可以轻松管理学术内容，同时保持代码的可维护性和扩展性。