# Course: Udacity - Cloud Developer
### Section: Full-Stack Apps on AWS
### Project: 'Udagram' Image-Filtering Microservice on AWS

## Student Developer: Roman Chuyan
The focus of this project was engineering full-stack apps in the cloud, focusing on server-side development and deployment on AWS. It included the following areas:
- Process engineering
- Server-side development using NodeJS/Express
- AWS deployment on Elastic Beanstalk
See Concepts Practiced below.

## Functionality
The app is an image-filtering microservice. I receives endpoint requests with a HTTP query including any piblic image URL, processes the image and returns the URL to the processed image.
The endpoint URL for a running elastic beanstalk deployment (EB_URL) is: http://udacity-c2-project-dev.us-east-1.elasticbeanstalk.com
An example request is: http://udacity-c2-project-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://modelcapital.com/wp-content/uploads/2014/01/Light_heceta_head_Oregon_US.png

## Setup/Dependencies
NodeJS environment v12 is utilized in this project. If not installed, install the dependencies by running `npm install` in the project root, which creates a `node_modules` directory.  
If running locally, run the development server with `npm run dev` then access the endpoint at `http://localhost:8082/filteredimage?image_url={{URL}}`.

## Concepts Practiced

### Process Engineering
Demonstrate an understanding of a good cloud git process and ability to use TypesCript and NodeJs.

### Server Development
Demonstrate the ability to develop using the NodeJS framework, understanding of RESTFUL design, and understanding of HTTP status codes.

### Elastic Beanstalk Deployment
Demonstrate the ability to create functional cloud deployments; use AWS Elastic Beanstalk’s CLI and Console Dashboard to deploy an environent and app.