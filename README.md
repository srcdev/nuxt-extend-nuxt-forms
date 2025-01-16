# Nuxt Layer Example - Extends Nuxt Forms as npm package

A barebones Nuxt project to demostrate the use of a Nuxt layer distributed as an npm package

## Layer repo

Checkout the repo [SRCDEV Nuxt Forms](https://github.com/srcdev/nuxt-forms)

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `https://localhost:3000`:

```bash
# npm
npm run dev
```

## Browser https error

If you do not get a proceed to site ssl error, then you need to reset HSTS settings in browser

- Clearing all data for the site
- Click on the button to the left of the address bar
- Site settings
- Delete data
- Go to chrome://net-internals/#hsts and enter localhost into Delete domain security policies (or whichever domain you're having trouble with)
- Restart your browser

## Production

Build the application for production:

```bash
# npm
npm run build
```

### Generate for static deployment

First create the files, the will be available at location `.output/public/` for deplyment to static server.

````bash
npm run generate
``
Then can be tested with
First create the files
```bash
npx serve dist
```

Locally preview production build:

```bash
````

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
