# Acend Website

This website is built with [Victor Hugo](https://github.com/netlify-templates/victor-hugo), a boilerplate for using 
[Hugo](https://gohugo.io/) as a static site generator and [Webpack](https://webpack.js.org/) as your asset pipeline. 
Victor Hugo uses [PostCSS](http://postcss.org/) and [Babel](https://babeljs.io/) for CSS and JavaScript 
compiling/transpiling.

## Usage

### Prerequisites

You need to have the latest/LTS [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) versions installed in order to use Victor Hugo.

Next step, clone this repository and run:

```bash
npm install
```

This will take some time and will install all packages necessary to run Victor Hugo and its tasks.

### Development

While developing your website, use:

```bash
npm start
```

or for developing your website with `hugo server --buildDrafts --buildFuture`, use:

```bash
npm run preview
```

Then visit http://localhost:3000/ _- or a new browser windows popped-up already -_ to preview your new website. Webpack Dev Server will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

### Static build

To build a static version of the website inside the `/dist` folder, run:

```bash
npm run build
```

To get a preview of posts or articles not yet published, run:

```bash
npm run build:preview
```

See [package.json](package.json#L8) for all tasks.

## Structure

```
|--site                // Everything in here will be built with hugo
|  |--content          // Pages and collections - ask if you need extra pages
|  |--data             // YAML data files with any data for use in examples
|  |--layouts          // This is where all templates go
|  |  |--partials      // This is where includes live
|  |  |--index.html    // The index page
|  |--static           // Files in here ends up in the public folder
|--src                 // Files that will pass through the asset pipeline
|  |--css              // Webpack will bundle imported css separately
|  |--index.js         // index.js is the webpack entry for your css & js assets
```

## Deployment

### Pull Request (PR)

Upon each PR, a GitHub Action [pull_request.yaml](.github/workflows/pull_request.yaml) is triggered which builds a 
Docker image and pushes it to `acend/website-hugo:staging` on Docker Hub. The push to Docker Hub will trigger a 
deployment to <https://staging.acend.ch> by using a Webhook for Keel.

### Push to Master

Once a PR gets accepted and merged to master, a similar GitHub Action [push.yaml](.github/workflows/pull_request.yaml) 
will trigger with a push to `acend/website-hugo:latest` and a deployment to <https://acend.ch>.
