pipeline {
    agent any
        stages {
        stage('build') {
            steps {
                  withCredentials([usernamePassword(credentialsId: 'dockerhub_id', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')])
                {
                    sh "echo ${PASSWORD} > my_password.txt"
                    sh "cat ~/my_password.txt | docker login --username ${USERNAME} --password-stdin"
                    // sh "docker login -u ${USERNAME} -p ${PASSWORD}"
                    sh "docker build -t kerolosayad/nodeapp:latest ."
                    sh "docker push kerolosayad/nodeapp"
                    
                }
            }    
        }
         stage ('deployment'){
            steps {
            
                    sh """
                    kubectl apply -f app-deploy.yml -n app-deploy
                    kubectl apply -f svc.yml -n app-deploy
                    echo Done!
                    """
            }
        
        }
    }
}