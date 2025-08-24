import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { getAstroConfig, logEnvironmentInfo } from './config/env.mjs';

// 获取环境配置
const envConfig = getAstroConfig();

// 在开发模式下显示环境信息
if (process.env.NODE_ENV !== 'production') {
  logEnvironmentInfo();
}

export default defineConfig({
  integrations: [tailwind(), react()],
  site: envConfig.site,
  base: envConfig.base,
  build: envConfig.build,
  vite: envConfig.vite
});
