# Final ITI project part 2

## Build and deploy app using Jenkins
### Create Dockerfile for Node.JS app
[./Dockerfile](Dockerfile)
```
FROM node:12
COPY nodeapp /node_app
WORKDIR /node_app
RUN npm install
CMD ["node", "/node_app/app.js"]

```
### Create deploy and service files

[./app-deploy.yml](app-deploy.yml)

[./svc.yml](svc.yml)

### Now for Jenkins
We previously created [GKE](https://github.com/KeroAyad/ITI-Final-Infra) cluster
and deployed [jenkins](https://github.com/KeroAyad/ITI-Final-Infra/tree/master/Jenkins-deploy) on it.
### ssh to private instance
>$ gcloud compute ssh --zone "us-central1-a" "management-vm"  --tunnel-through-iap --project "ancient-jigsaw-366112"

### Cluster role for Jenkins
>$ kubectl create clusterrolebinding jenkins --clusterrole cluster-admin --serviceaccount=jenkins:default
### Create a Jenkinsfile
[./Jenkinsfile](Jenkinsfile)

### To find jenkins password
>$ kubectl logs jenkins -n jenkins

### Create jenkins pipline
- Go to jenkins IP and create the pipline

- Make sure Git and Docker plugins are installed

- Enter dockerhub credentials

- Create and configure the pipline
  
- Manually hit the build button or commit to the git repo