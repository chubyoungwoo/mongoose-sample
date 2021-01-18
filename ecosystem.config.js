//ecosystem.config.js
module.exports = {
    apps: [{
    name: 'app',
    script: './app.js',
    watch: true, // 파일이 변경되면 자동으로 재실행 (true || false)
    instances: 0,
    exec_mode: 'cluster'
    }]
  }