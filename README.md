# cicd-cloud-services

This is a simple business cloud services application written using nodejs. 

It used Jenkins for Continuous Integration and Continuous Deployment.

It uses containerization and orchestration tools like Docker and Kubernetes.

Jenkins uses the code in Github and builds the jobs whenever there is an update in the code, and it deploys the application in the kubernetes.

## Running the app

You need a Java JDK 7 or later to run the build. You can run the build like this:

    ./gradlew build

You can run the app with:

    ./gradlew npm_start

Once it is running, you can access it in a browser at http://localhost:8080
