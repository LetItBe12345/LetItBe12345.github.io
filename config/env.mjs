/**
 * 环境配置工具函数
 * 根据当前环境动态加载配置
 */
import { loadEnv } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

/**
 * 获取当前环境
 */
export function getCurrentEnv() {
  return process.env.NODE_ENV || 'development';
}

/**
 * 加载环境变量
 */
export function getEnvConfig() {
  const env = getCurrentEnv();
  const envVars = loadEnv(env, projectRoot, '');
  
  return {
    NODE_ENV: env,
    ASTRO_SITE: envVars.ASTRO_SITE || 'http://localhost:4321',
    ASTRO_BASE: envVars.ASTRO_BASE || '/',
    ASTRO_BUILD_FORMAT: envVars.ASTRO_BUILD_FORMAT || 'file',
    IS_DEVELOPMENT: env === 'development',
    IS_PRODUCTION: env === 'production'
  };
}

/**
 * 获取 Astro 配置
 */
export function getAstroConfig() {
  const config = getEnvConfig();
  
  return {
    site: config.ASTRO_SITE,
    base: config.ASTRO_BASE,
    build: {
      format: config.ASTRO_BUILD_FORMAT,
      assets: '_astro'
    },
    vite: {
      define: {
        __DEV__: config.IS_DEVELOPMENT,
        __PROD__: config.IS_PRODUCTION
      }
    }
  };
}

/**
 * 调试信息
 */
export function logEnvironmentInfo() {
  const config = getEnvConfig();
  console.log('🌍 环境配置信息:');
  console.log(`   环境: ${config.NODE_ENV}`);
  console.log(`   站点: ${config.ASTRO_SITE}`);
  console.log(`   基础路径: ${config.ASTRO_BASE}`);
  console.log(`   构建格式: ${config.ASTRO_BUILD_FORMAT}`);
}
