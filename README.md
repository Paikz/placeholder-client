[![Build Status](https://travis-ci.org/Paikz/scenery.svg?branch=master)](https://travis-ci.org/Paikz/scenery)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Paikz/scenery/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Paikz/scenery/?branch=master)
[![codecov](https://codecov.io/gh/Paikz/scenery/branch/master/graph/badge.svg)](https://codecov.io/gh/Paikz/scenery)

# Scenery

A social media application where users can share their scenery with each other.

### How to use

Due to the application not being 100% complete a guide on how to access things is useful.  

* The first thing you should do is to create an account.
* The default route shows the posts of the users you follow. This page is currently blank for new users. Follow another user with posts to fill this page.
* There is currently no way to search for other users. Use usernames as a parameter in the url to find a specific user. Example: `/testuser1`

### Linked Repositories

Server repository can be found [here](https://github.com/Paikz/scenery_server)

### Technology Used

**Client:**  
`Angular`  
A clientside JavaScript / Typescript framework used for developing web applications. I've used Angular in the past which made the choice easier. Angular's CLI is a fast and efficient way to start a project with most necessities included right from the start.

**Server:**    
`Node Express`  
The framework we started out with and learned throughout the course. I saw no point in switching it out. It works perfectly with Angular and mongodb. I use the server as a REST API which Express functions very well as.

`Mongodb & Mongoose`  
Mongodb and Mongoose, Node Express and Angular goes hand in hand. This is what is called a MEAN stack. With mongoose we create schemas which works as models for the objects we want to put in the database. This makes the process of CRUD using the models easy. As we tend to use objects and models in Angular, Mongodb and Mongoose is a good fit.

**Opinions & Experiences:**  
Due to being familiar with angular before, I already knew what to expect coming into it. It's not the fastest framework to kickstart a project in for fast results but the bigger the project gets the more you appreciate the structure and efficiency Angular brings. Especially when working in a group.  

Node Express has been very easy to work with for the first time. Everything I wanted to do had already been done so it was no problem solving problems that came up.  

Mongoose was the biggest surprise of this project. I have never worked with a database this easy to use. Forget relational databases, if you work with Angular you want noSql. It takes a while to read up on the different functions features in both Mongodb and Mongoose but when you know how to do something, it's efficient.  


### Requirements Specification

The basic requirements Scenery have specified.

| #  | Name                 | Description                                                                   |
|----|----------------------|-------------------------------------------------------------------------------|
| 1  | Register             | A user must be able to register a new account                                 |
| 2  | Login                | A user must be able to login to their created accounts                        |
| 3  | Logout               | A user must be able to logout from their created accounts                     |
| 4  | Jwt                  | JWT must be implemented to protect unauthorized users from using              |
|    |                      | both the REST API and the client                                              |
| 5  | Upload Image         | A user must be able to upload an image to their profile                       |
| 6  | Upload Avatar        | A user must be able to upload an avatar to their profile                      |
| 7  | Delete Image         | A user must be able to delete an image on their profile                       |
| 8  | Inspect Image        | A user must be able to inspect an image on any profile                        |
| 9  | Responsive Design    | The design of the client should adapt to fit the screen size                  |
| 10 | Follow user          | A user must be able to follow another user                                    |
| 11 | Unfollow user        | A user must be able to unfollow another user if already followed              |
| 12 | Private message user | A user must be able to private message another user                           |
| 13 | Search for users     | A user must be able to search for other users                                 |

Not yet implemented: Requirement #12 & #13

### Installation and starting up a server

Clone the repo and run `npm install` to download dependencies.  
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  
Run `npm build` to build a production ready build.

### Starting up a server in a docker container

For a dev server in a docker container, run `npm run start-docker` and navigate to `http://localhost:4200/`.  
To stop the docker container, run `npm run stop-docker`.  

### Unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).  

Running above command will create a `/coverage` folder in the root project. Use the `/coverage/index.html` file to view the code coverage report.

**Client tech used:**  
* Karma
* Jasmine
* Istanbul

**Server tech used:**  
* Mocha
* Supertest

The client side tech for testing is installed and configured when creating a new project with the Angular CLI. This made it very easy to start unit testing right off the bat. Due to time constraints not a lot of time has been spent unit testing. I found it particularly hard to test websockets and http service calls. On the server side I decided to use Mocha as test framework. Supertest is used to make HTTP assertions. Due to the big amount of code on the client side my goal was 50% coverage. I did not have the time to focus on unit testing the backend.


### Running unit tests with different node versions in docker

Run following commands to run tests using specified node versions via docker (needs sudo on linux):  
`npm run test-node9`  
`npm run test-node8`  
`npm run test-node6`  


### Continuous Integration

This repo uses `travis-ci` for builds, `scrutinizer-ci` for code quality and `codecov` for code coverage. Travis both keeps us updated if a build has passed on different versions of our system as well as running our tests. If the tests go through, the result report is sent to codecov where we can view the coverage in detail. We use scrutinizer-ci for code quality but I'm not sure about the accuracy of the analysis on the client side. On the server side though it works perfectly and is helpful to hold the project to a high standard in means of code.  

The most helpful of the three is definitely travis combined with codecov. Scrutinizer is helpful when coding in a group or when you are going to share the code in some sort. But personally, coding alone code quality is not that important. It teaches good practices though so there is no downside using it.  

### Real-time feature

Due to the scale of this project requirement #12 was not completely implemented. There is a real-time aspect in the route `/chat` but it is a global chat room for now. The thought was to be able to send private messages to other users in real-time and be able to see previous messages sent.

The current chat implemented is built with Angulars native websockets. The backend uses ws for the websocket. Ws and Angular's native websocket are fairly similar. The principle behind using them are simple enough to get into quickly and I see the potential there is to use them for real-time components. The tech is stable and works well. The only flaw I've noticed so far is the difficulty of unit testing the components.

### Database implementation

This project uses mongodb as database. Using Angular and Express, using Mongoose has been very smooth. Instead of working with JSON, Mongoose works with objects from models called Schemes. This project uses the database to store users and their posts. Naturally we have mongoose schemes to be able to insert these objects in the database. This structure fits Angular perfectly. The only obstacle has been to read and find the functions and features needed to complete a task.  

Relational databases has their time and place as well even if it is not used in this project. Personally I think they would fit this project pretty well, but using another front end framework. Angular works hand in hand with mongodb and there is probably a framework working well with relational databases. You just have to choose the right tech for the right job.

### Modules

[express-jwt-verify-middleware](https://github.com/Paikz/express-jwt-verify-middleware) is a middleware component used on the backend Express server. It verifies if incoming requests has a jwt token or not and if it is valid. If the token is valid the decoded information will be forwarded for further use in the route with the `.decoded` property.  

npm is a necessity when using Angular but even if I could use another package manager I would still use npm. It is easy to understand, fast and reliable. Being able to install a package local or global is handy and publishing your own modules only takes a few minutes.

### Articles

I've written an article on this projects use of JWT tokens and how to implement them yourself with Angular + Express.  
[Link to article](https://docs.google.com/document/d/1cuP1ehnfkpFnzAmsi8Q3Un-19gesXRt-r5rGBzvYcHs/edit?usp=sharing)
