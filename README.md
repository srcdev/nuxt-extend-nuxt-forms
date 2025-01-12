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

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

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
