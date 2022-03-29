pipeline {
   // agent linux OR
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:10'
    }
  }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Run all Tests') {
            steps {
                sh 'npm run runAllTests'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        post {
    always {
        email 'cypress/reports/index.html'
    }
}
    }
}