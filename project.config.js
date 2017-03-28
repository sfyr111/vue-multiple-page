var rapHost = "'http://rap.taobao.org/mockjsdata/15659'"

var sftpConfig = {
  host: 'https://github.com/tonyfree',
  port: 22,
  user: 'tony',
  pass: '123',
  remotePath: '/opt/html/projectName'
} // 公司的ip，端口，用户名

module.exports = {
  rapHost: rapHost,
  sftpConfig: sftpConfig
}

// 对整个项目做配置