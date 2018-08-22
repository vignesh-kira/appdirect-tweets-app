# appdirect-tweets-app

Display tweets using React JS and Node JS

## About:

This React app displays tweets from twitter users. It comes with other features as in summary below. This is responsive on mobile phone and tablet as well.

## Technologies Used:

Frontend - React JS with Bootstrap4 and other helper libraries

Backend - Node JS (to fetch make twitter api call)

Note: The UI code is inside the "client" folder.

### Summary of Requirements covered:

- Using twitter-proxy tweets fetched from 3 users and displayed in separate columns.
- UI is built on Bootstrap4 and scripts are implemented based on ES6.
- The Time is formatted using MomentJS.
- The tweet is parsed using a Twitter parser.
- The settings layout is a Bootstrap modal and the following 3 features are provided:
  1.  We can adjust the number of tweets for the three columns.
  2.  Reorder columns using Drag Drop: We can reorder the column using Drag & Drop feature.
  3.  The skin of page can be changed(For now its for body element. It can be extended for other elements as well).
- It uses localstorage to persist and load the layout settings.

## Pre-requisite:

1.  npm
2.  node
3.  yarn

## Steps to install:

1.  First clone this repository.
2.  Inside the folder appdirect-tweets-app and then do:
    npm install
3.  Naviage to client folder and then do:
    npm install
4.  Go to root of the folder and do:
    yarn-dev

    The app will run in http://localhost:3000/

    Note: I have provided my twitter api keys in the server.js file since its a demo. I will change the key in a week.
