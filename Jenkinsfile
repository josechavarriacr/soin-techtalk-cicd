node {
   try {   
     stage('Checkout') {
        checkout scm
      }
      stage('Fetching the lastest code') {
        sh 'git pull origin master -f'
      }
      stage('Installing node_modules') {
        sh 'yarn install'
      }
      stage('Applying Unit Test') {
        sh 'yarn test'
      }
      stage('Applying End-To-End Test') {
        sh 'yarn test:e2e'
      }
      stage('Building project') {
        sh 'yarn build'
      }
      stage('Restarting project') {
        sh 'BUILD_ID=dontKillMe yarn start:prod'
      }
    }
   catch (err) {
    throw err
  }
 }