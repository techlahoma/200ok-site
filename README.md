# [200ok.us](https://200ok.us/) source files

[![Netlify Status](https://api.netlify.com/api/v1/badges/7da7c697-e5d6-4844-9800-3594f046313e/deploy-status)](https://app.netlify.com/sites/200ok/deploys)

This is a static website deployed on [Netlify](https://www.netlify.com/), built with [Eleventy](https://www.11ty.dev/).

### Working locally on the site

```console
$ git clone git@github.com:techlahoma/200ok-site.git
$ cd 200ok-site
$ npm install
$ make dev
```

Then go to http://localhost:8888

### File Structure

- `archive/` static captures of previous versions of the website
- `assets/` file resources for the site like images and logos
  - `css/` is generated from tailwindcss (see package.json)
- `content/` [input directory for content](https://www.11ty.dev/docs/config/#input-directory)
  - `_data/` [directory for global data files](https://www.11ty.dev/docs/config/#directory-for-global-data-files)
  - `_includes/` [directory for icludes](https://www.11ty.dev/docs/config/#directory-for-includes)
  - `_layouts/` [directory for layouts](https://www.11ty.dev/docs/config/#directory-for-layouts-(optional))
- `src/` directory for source code to be compiled (e.g. TailwindCSS source)

### Deploy Changes

The `main` branch is automatically deployed to [200ok.us](https://200ok.us/) with [Netlify site deploys](https://docs.netlify.com/site-deploys/overview/). See [netlify.toml](netlify.toml).

## Code of Conduct

This repository is governed by [Techlahoma’s Code of Conduct](https://www.techlahoma.org/code-of-conduct).

## License

This software is licensed under the MIT License. For more information, read this repository’s [LICENSE](LICENSE).
