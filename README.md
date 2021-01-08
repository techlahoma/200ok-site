# [200ok.us](https://200ok.us/) source files

This is a static website deployed on [GitHub Pages](https://pages.github.com/), built with [Hexo](https://hexo.io/).

### Installing

```console
$ git clone git@github.com:techlahoma/200ok-site.git
$ cd 200ok-site
$ npm install
```

### File Structure

All the copy documents are in `/source`, the theme is `/themes/200ok`, and the original front-end theme is located in `/wrapbootstrap` for reference. Run `hexo new page` to automatically generate a new page if you need more content. All of the `/source` files should be markdown. Posts aren't currently being used.

### Working locally on the site

```console
$ npm run start
```

Then go to http://localhost:4000

### Deploy Changes

The `main` branch is automatically deployed to [200ok.us](https://200ok.us/) via [GitHub Actions](https://github.com/features/actions). See [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
