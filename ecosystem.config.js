module.exports = {
    apps: [
      {
        name: 'soin-techtalk-cicd',
        script: 'node ./dist/main',
        watch: false,
        env: {
          NODE_ENV: 'prod',
        },
      },
    ],
  }