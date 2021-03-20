# Fun quotes API
A simple Node.js server because I wanted to put some of my favorite quotes from APIs I've played around with in a single place.
Credits: Andrew Jazbec for kanye.rest, gillescoolen for taylor.rest, jamesseanwright for the Ron Swanson quotes API, and Alty,Inc. for Forismatic.

## Routes

### `GET /kanye`
https://fun-quotes.herokuapp.com/kanye  
Returns a javascript object with a Kanye West quote.
```json
{
  "quote": "I'm nice at ping pong",
  "author": "Kanye West"
}
```

### `GET /taylor`
https://fun-quotes.herokuapp.com/taylor  
Returns a javascript object with a Taylor Swift quote.
```json
{
  "quote": "And if I get burned, at least we were electrified",
  "author": "Taylor Swift"
}
```

### `GET /ron`
https://fun-quotes.herokuapp.com/ron  
Returns a javascript object with a Ron Swanson quote.
```json
{
  "quote": "There must be a mistake, you've accidentally given me the food that my food eats.",
  "author": "Ron Swanson"
}
```

### `GET /inspirational`
https://fun-quotes.herokuapp.com/inspirational  
Returns a javascript object with an inspirational quote and the author of that quote.
```json
{
  "quote": "If you cannot do great things, do small things in a great way.",
  "author": "Napolean Hill"
}
```

### `GET /random`
https://fun-quotes.herokuapp.com/random  
Returns a javascript object with a random quote and the author of that quote. Random quotes have an
equal chance of being a Kanye, Taylor, Ron, or inspirational quote.

### Local development
After cloning this repo, run `npm install` or `npm i` to install the required dependencies.
Then, run `npm start` to run the server.
