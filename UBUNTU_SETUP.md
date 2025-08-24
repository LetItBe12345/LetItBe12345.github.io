# Ubuntu 开发环境配置指南

## 🚀 系统要求
- Ubuntu 18.04+ (推荐 20.04 或 22.04)
- 至少 4GB RAM
- 2GB 可用磁盘空间

## 📦 必需依赖安装

### 1. 更新系统包
```bash
sudo apt update && sudo apt upgrade -y
```

### 2. 安装 Node.js 和 npm
```bash
# 方法1: 使用 NodeSource 官方仓库 (推荐)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 方法2: 使用 Ubuntu 默认仓库
sudo apt install nodejs npm

# 验证安装
node --version  # 应该显示 v18.x.x 或更高
npm --version   # 应该显示 9.x.x 或更高
```

### 3. 安装 Git
```bash
sudo apt install git

# 配置 Git (替换为你的信息)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 4. 安装 VS Code
```bash
# 方法1: 使用 Snap (推荐)
sudo snap install --classic code

# 方法2: 使用官方 deb 包
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update
sudo apt install code
```

### 5. 安装构建工具 (可选但推荐)
```bash
sudo apt install build-essential curl
```

## 🛠️ 项目设置

### 1. 克隆项目
```bash
# 如果你已经有 GitHub 仓库
git clone https://github.com/LetItBe12345/your-repo-name.git
cd your-repo-name

# 或者创建新项目目录
mkdir academic-website
cd academic-website
```

### 2. 安装项目依赖
```bash
# 安装所有依赖包
npm install

# 如果遇到权限问题，可以配置 npm
npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### 3. 启动开发服务器
```bash
# 启动开发服务器
npm run dev

# 服务器将在 http://localhost:4321 运行
```

### 4. 构建生产版本
```bash
# 构建静态文件
npm run build

# 预览构建结果
npm run preview
```

## 🔧 VS Code 配置

### 推荐扩展
在 VS Code 中安装以下扩展：

```bash
# 通过命令行安装扩展
code --install-extension astro-build.astro-vscode
code --install-extension bradlc.vscode-tailwindcss
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension esbenp.prettier-vscode
code --install-extension ms-vscode.vscode-json
```

### VS Code 设置
创建 `.vscode/settings.json`：
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "astro": "html"
  },
  "files.associations": {
    "*.astro": "astro"
  }
}
```

## 🚨 常见问题解决

### Node.js 版本问题
```bash
# 如果 Node.js 版本太旧，使用 n 版本管理器
sudo npm install -g n
sudo n stable
```

### 权限问题
```bash
# 修复 npm 权限
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

### 端口占用
```bash
# 查看端口占用
sudo lsof -i :4321

# 杀死占用进程
sudo kill -9 <PID>
```

### 内存不足
```bash
# 增加 Node.js 内存限制
export NODE_OPTIONS="--max-old-space-size=4096"
```

## 📝 开发工作流

### 1. 日常开发
```bash
# 启动开发服务器
npm run dev

# 在另一个终端窗口进行 Git 操作
git add .
git commit -m "Update content"
git push origin main
```

### 2. 内容更新
- 编辑 `src/content/papers.bib` 添加论文
- 编辑 `src/content/projects.json` 添加项目
- 编辑 `src/content/news.json` 添加新闻
- 修改 `src/pages/` 中的页面内容

### 3. 部署到 GitHub Pages
```bash
# 确保配置正确
# 1. 更新 astro.config.mjs 中的 base 路径
# 2. 推送到 GitHub
git push origin main

# GitHub Actions 会自动构建和部署
```

## 🎯 性能优化建议

### 1. 开发环境
```bash
# 使用 SSD 硬盘
# 确保至少 4GB RAM
# 关闭不必要的应用程序
```

### 2. 构建优化
```bash
# 清理 node_modules
rm -rf node_modules package-lock.json
npm install

# 清理构建缓存
rm -rf dist .astro
```

## 🔍 调试技巧

### 1. 查看构建日志
```bash
npm run build -- --verbose
```

### 2. 检查依赖
```bash
npm list
npm outdated
```

### 3. 网络问题
```bash
# 使用国内镜像
npm config set registry https://registry.npmmirror.com/
```

现在你的 Ubuntu 环境就配置好了！运行 `npm run dev` 就可以开始开发你的学术网站了。