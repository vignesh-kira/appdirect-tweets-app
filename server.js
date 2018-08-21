const express = require("express");

const twitterProxyServer = require("twitter-proxy");
twitterProxyServer({
  consumerKey: "9lfkMVjRPJbfqDiXwgjJ33Q18",
  consumerSecret: "ZpyzEbfsxeEIJ3a4MMWC1ueWHHfEpA1HhzcPHGaH2JjbnxsfkV"
});
const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));

console.log(
  "Request the Twitter API using: http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=appdirect"
);
