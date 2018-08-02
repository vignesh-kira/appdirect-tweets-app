const express = require("express");

const twitterProxyServer = require("twitter-proxy");
twitterProxyServer({
  consumerKey: "",
  consumerSecret: ""
});
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

console.log(
  "Request the Twitter API using: http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=appdirect"
);
