node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('install') {
     nodejs(nodeJSInstallationName: 'Node 16') {
       sh 'npm install'
     }
   }
   stage('docker build/push to aws ecr') {
     docker.withRegistry('https://909422022653.dkr.ecr.us-east-1.amazonaws.com/ssr-react', 'AWS creds') {
       def app = docker.build("node-docker-demo-aws:${commit_id}", '.').push()
     }
   }
}