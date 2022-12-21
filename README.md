# Webpack Template

This is a quick-start template for future projects.

## Purpose

Having learned how to use webpack and a few useful tools and packages like esLint and Prettier, I realized it is really time intensive to install all of the dev dependencies and configure everything. I decided to create a template that should be usable for the next few projects before the dependencies eventually become deprecated.

## Included

### Webpack

Primarily, this template includes webpack for the purpose hosting both a dev server for fast development, and a production environment for bundling files & assets.

### Webpack Loaders

I included multiple loaders for loading CSS, SASS, assets, and more.

### SASS or CSS

This was intended to be used with SASS, although CSS should work as well. 

### HTML Template

Webpack is configured to build an HTML file from a predefined template called `template.html`. This can be modified to whatever extent is required, but is intended to be modified on the DOM level by `index.js` or alternate modules.

### Multiple Entry Points

I configured this with the `runtimeChunk: 'single'` optimization so that multiple modules can be used. If a single module is used (such as only `index.html`), this is not necessary. 

### Webpack configurations

There are three configuration files in total. `webpack.common.js` serves as the common file which includes configuration common to the dev and production environment. `webpack-merge` is used to merge in configurations specific to the dev and production environment. 

#### Webpack dev server

The configuration `webpack.dev.js` creates a dev server when the following command is used in the root directory: 

`npm start`

The dev server generates assets in memory and does not hash asset names. It also opens up a browser page with the website. The SASS is converted into CSS and injected into the DOM rather than into a CSS file. 

#### Webpack production environment

The configuration `webpack.prod.js` creates a production build of the site when the following command is used in the root directory: 

`npm run build`

The production build includes hashed names for cache busting. The SASS is converted into CSS and into a new CSS file with a hashed name. Additionally, the html, js, and css are minified for optimization purposes. 