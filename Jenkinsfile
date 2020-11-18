def server="ubuntu@ec2-52-55-21-45.compute-1.amazonaws.com"

pipeline {
  agent any
  stages {
    stage('Notify') {
      when { branch 'master' }
        steps {
          slackSend( channel: "#test-rafa", color: '#FFFF00', message: ":crossed_fingers::skin-tone-5: STARTED: Build ${env.JOB_NAME} [${env.BUILD_NUMBER}] (<${env.RUN_DISPLAY_URL}|Open>)")
        }
      }
    stage('Test') {
      agent {
          docker {
              image 'node:10-alpine'
          }
      }
      stages {
        stage('Install') {
          steps {
            sh 'yarn install'
          }
        }
        stage('Lint') {
          steps {
            sh 'yarn lint'
          }
        }
        stage('Unit Test') {
          steps {
            sh 'yarn test'
          }
        }
        stage('End-To-End Test') {
          steps {
            sh 'yarn test:e2e'
          }
        }
      }
    }
    stage('Deploying') {
      when { branch 'master' }
      stages {
        stage('Build & Deploy') {
          agent any
          steps {
            sshagent(credentials : ['user-jenkins']) {
              sh """ssh -tt -o StrictHostKeyChecking=no $server << EOF 
              sh /srv/node/soin-techtalk-cicd/deploy.sh && exit
              EOF"""
            }
          }
        }
      }
    }
  }
  post {
    success {
        script { 
            if (env.BRANCH_NAME == 'master') {
                slackSend( channel: "#test-rafa", color: '#00FF00', message: "<!here> :smiley: SUCCESSFUL: Build ${env.JOB_NAME} [${env.BUILD_NUMBER}] (${env.RUN_DISPLAY_URL})")
            }
        }
    }
    failure {
        script { 
            if (env.BRANCH_NAME == 'master') {
                slackSend( channel: "#test-rafa", color: '#FF0000', message: "<!here> :scream: FAILED: Build ${env} [${env.BUILD_NUMBER}] (${env.RUN_DISPLAY_URL})")
            }
        }
    }
    unstable { 
        script {
            if (env.BRANCH_NAME == 'master') {
                slackSend( channel: "#test-rafa", color: '#FF0000', message: "<!here> :grimacing: UNSTABLE: Build ${env} [${env.BUILD_NUMBER}] (${env.RUN_DISPLAY_URL})")
            }
        }
    }
  }
}