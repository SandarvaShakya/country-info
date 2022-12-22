## Country Detail App

Get country details in one go :zap:

## Usage

Search for any country names on the search bar to get its details.

## Setting up Locally

This project uses two APIs:

- [rest countries API](https://restcountries.com/) (free | No Sign Up)
- openweather API (API key required | Sign Up)

API keys will be sent to your inbox after[ you sign up](https://home.openweathermap.org/users/sign_up).

Add the key to the `.env` file:

```bash
cp .env.example .env
```

Install dependencies :star2:

```bash
npm install
```

Run the server :rocket:

```bash
npm start
```

## Deployment

This app is hosted using [vercel](https://vercel.com/). :stars:

## Roadmap

- [ ] Fuzzy match search countries
- [ ] Debounce on search form
