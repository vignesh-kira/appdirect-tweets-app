const twitterProxyServer = require("twitter-proxy");
twitterProxyServer({
  consumerKey: "9lfkMVjRPJbfqDiXwgjJ33Q18",
  consumerSecret: "ZpyzEbfsxeEIJ3a4MMWC1ueWHHfEpA1HhzcPHGaH2JjbnxsfkV",
  port: "8080"
});



console.log(
  "Twitter API is requested using: http://localhost:8080/1.1/statuses/user_timeline.json?count=30&screen_name=appdirect"
);
