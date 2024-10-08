interface Config {
  openPassport: {
    appName: string
    devMode: boolean
    requirements: [[string, string]]
    scope: string
    size: number
  }
  cookie: { name: string; expiresAfterDays: number }
}

export const config: Config = {
  openPassport: {
    appName: 'Hello OpenPassport',
    requirements: [['older_than', '18']],
    devMode: process.env.NODE_ENV === 'development',
    scope: '@hello_openpassport',
    size: 300,
  },
  cookie: { expiresAfterDays: 1, name: 'authorized' },
}
