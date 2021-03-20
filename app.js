const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// Parse the request body into an JavaScript object and assign it to req.body
app.use(bodyParser.json());

//https://api.kanye.rest/
//https://api.taylor.rest/
//http://ron-swanson-quotes.herokuapp.com/v2/quotes
//http://api.forismatic.com/api/1.0/?lang=en&method=getQuote&format=json

const Quote = function(quote, author) {
  this.quote = quote;
  this.author = author;
}

app.get('/kanye', cors(), function(req, res) {
  request("https://api.kanye.rest/", {json: true}, function(err, result, body) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      res.send(new Quote(body.quote, "Kanye West"));
    }
  });
});

app.get('/taylor', cors(), function(req, res) {
  request("https://api.taylor.rest/", {json: true}, function(err, result, body) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      res.send(new Quote(body.quote, "Taylor Swift"));
    }
  });
});

app.get('/ron', cors(), function(req, res) {
  request("http://ron-swanson-quotes.herokuapp.com/v2/quotes", {json: true}, function(err, result, body) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      res.send(new Quote(body[0], "Ron Swanson"));
    }
  });
});

app.get('/inspirational', cors(), function(req, res) {
  request("http://api.forismatic.com/api/1.0/?lang=en&method=getQuote&format=json", {json: true}, function(err, result, body) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      res.send(new Quote(body.quoteText, body.quoteAuthor);
    }
  });
});

app.get('/random', cors(), function(req, res) {
  let url = "";
  const source = Math.floor(Math.random() * Math.floor(4));
  if (source === 0) url = "https://api.kanye.rest/";
  else if (source === 1) url = "https://api.taylor.rest/";
  else if (source === 2) url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
  else url = "http://api.forismatic.com/api/1.0/?lang=en&method=getQuote&format=json";

  request(url, {json: true}, function(err, result, body) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      if (source === 0) res.send(new Quote(body.quote, "Kanye West"));
      else if (source === 1) res.send(new Quote(body.quote, "Taylor Swift"));
      else if (source === 2) res.send(new Quote(body[0], "Ron Swanson"));
      else res.send(new Quote(body.quoteText, body.quoteAuthor);
    }
  });
});


// Listen on port
app.listen(port, function() {
  console.log("Server started.");
});
