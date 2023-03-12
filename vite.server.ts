export default {
  // 服务配置
  port: 3000, // 类型： number 指定服务器端口;
  cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
  proxy: {
    '/api': {
      target: "http://10.28.87.33:30717",
      changeOrigin: true,
      secure: false,
      // eslint-disable-next-line no-shadow
      rewrite: (path) => path.replace('/api', '')
    }
  }
}