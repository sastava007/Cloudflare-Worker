# Cloudflare Workers Internship Application: Full-Stack

## What's this?
It's a serverless web application built using Cloudflare Workers that distribute the incoming request to one of the two variants of application both of which are equally likely to get selected. Once a user visits a site, then that URL will persists and will be stored as a cookie so that they always see the same variant when they return to the application. This can be verified by clearning the cookies or launching the application in Incognito mode. 

Deployed URL: https://cf-worker.sastava007.workers.dev/


## Folder Structure
I believe that a good project is one which can be tuned as per the user needs, so irrespective of whether it's a large enterprise level software or a challenge assignment like this we should always follow *best practices* which increases the life cycle of entire product and easy to maintain further. 
That's why I decided to follow a modular approach while deciding the folder structure of this project:

**./config** - It stores the information about commonly accessed items like `SITE_URL` to fetch and `COOKIE` to look after in the coming request which is imported wherever required. 

**./util/index.js** - It stores all the utility helper functions which is supporting our application by running behind the scenes. 

**./util/element_handler.js** - It owns all the classes that are used for modifying the content of webpage and will be passed to HTML Rewriter API. 


## About Me
I'm a Computer Science undergraduate student at the Indian Institute of Information Technolgy(IIIT) Gwalior who's passionate about open-source software development. In past, I have worked with several organizations such as Codeuino, Wikimedia Foundation and Postman and currently looking for opportunities as a Software Engineering(SWE) Intern for upcoming summers. 
To know more about me and my projects please consider visiting my [portfolio](https://sastava007.github.io/) site. 