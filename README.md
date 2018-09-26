# appdirect-tweets-app

Display tweets using React JS and Node JS

## Demo
https://vignesh-react-demo.com/

## About:

This React app displays tweets from twitter users. It comes with other features as in summary below. This is responsive on mobile phone and tablet as well.

## Technologies Used:

Frontend - React JS with Bootstrap4 and other helper libraries

Backend - Node JS (to fetch make twitter api call; Code has been separated from this branch. It is run as a separate service in server.) 

## Branches:

Client - Contains UI code

Server - Contains Backend code

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

## Steps to install: There are 3 branches: Client (It has the React code), Server (it has the backend), Master(Not in use anymore)

1. Branch Server: Pull from this branch and npm install and then npm run.
Client(React app) makes a fetch call to localhost:8080 in Server to retrieve tweets.

2.  Branch Client : Next clone the Client branh and npm install and npm run

    The app will run in http://localhost:3000/

    Note: I have provided my twitter api keys in the server.js file since its a demo. I will change the key in a week.
