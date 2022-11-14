pipeline {
        agent {
            kubernetes {
              yaml '''
        apiVersion: v1
        kind: Pod
        metadata:
            name: docker-test
        spec:
            containers:
            - name: dockercontainer
            image: docker:latest
            command: ["echo", "Done!"]
            tty: true
            securityContext:
                privileged: true
            volumeMounts:
            - name: docker
                mountPath: /var/run/docker.sock
            volumes:
                - name: docker
                hostPath:
                    path: /var/run/docker.sock
        '''   
            }
        }        
        stages {
        stage('build') {
            steps {
                  withCredentials([usernamePassword(credentialsId: 'dockerhub_id', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')])
                {
                    sh "docker login -u kerolosayad -p ${PASSWORD}"
                    sh "docker build -t kerolosayad/nodeapp:latest ."
                    sh "docker push kerolosayad/nodeapp"
                    
                }
            }    
        }
//          stage ('deployment'){
//             steps {
            
//                     sh """
//                     kubectl apply -f app-deploy.yml -n app-deploy
//                     kubectl apply -f svc.yml -n app-deploy
//                     echo Done!
//                     """
//             }
        
//         }
    }
}
