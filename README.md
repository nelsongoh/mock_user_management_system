# User Management System
This repository contains a simple implementation of a user management system. This was built using React and Material UI design on the frontend, and a simple Express server as the backend. The frontend Javascript code is bundled and served using webpack.

## Running the project

To start the project:
1. ```npm install``` to install the necessary project dependencies
2. ```npm run start``` to run the server and serve the files

## Project structure
The project is largely split into 2 main parts:

```
/server
  ...

/src
  ...
```

The backend-related server components are placed in the ```/server``` folder, while the frontend-related ones are placed in the ```/src``` folder.

### Frontend
The frontend has been organised into 4 main folders, namely ```/components```, ```/models```, ```/scenes```, and ```/services```.

```
/src
  /components
  /config
  /models
  /scenes
  /services
  index.jsx
```

```/components``` contains the individual components which are meant to be modular and re-usable in the application. For example, the HeaderBar component contains the code and relevant styles for the header bar in the web application. Components are only allowed to import other components or services, but strictly cannot import scenes.

```/config``` contains the relevant configuration files such as language-specific content for the website, defined model object keys, constants etc.

```/models``` contains the different model objects for the business logic of the application. For example, the UserDetails object contains the structure which maps to the details of the user, such as their name, email address, etc. This helps us to maintain a single source of information structure used in the application.

```/scenes``` contains components that make up the structure of the pages in the web application. Scene components can make use of the other modular components in ```/components```.

```/services``` contains the service-related functions, such as utility functions, or API calls that are used by other components.

The ```index.jsx``` file is the entrypoint for the single-page application.

### Backend
The backend is organised into 3 main folders, namely: ```/controllers```, ```/routes```, and ```/views```.

```
/server
  /controllers
  /routes
  /views
  server.js
```

```/controllers``` contains the logic which handles the incoming HTTP requests to the server and the subsequent HTTP responses. In the case of this project, this was simply handled within the controller.

```/routes``` contains the backend routes which map to the relevant controller for further processing.

```/views``` contains the HTML (or PUG-file in our case) file which is served by the server.

```server.js``` contains the server set-up code, such as the initialisation of our Express server, routing to use, etc.

