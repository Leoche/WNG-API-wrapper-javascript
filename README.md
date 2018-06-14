# WNG-API-wrapper-javascript

A JS wrapper for wng api

## Documentation

[See here a documentation of classes](docs/DOCUMENTATION.md)

## Development

#### First things

- Run one of these commands in project's root to set up dependencies:
```
npm i
```
  or
```
yarn install
```

#### Hot Compiling project (Dev mode)

1. Just modify `/src/` and run:
```
$ npm run dev
```

> This will open up un hot reload server, and go to http://localhost:8080 (It will be opened automaticaly anyway...)

#### Compiling project (Prod mode)

1. Just modify `/src/` and run:
```
$ npm run build
```

> Compiled project will be in `/dist/`

#### Compiling Docs

1. Just modify `/src/lib/` files and be sure to use JSDoc when coding and run:
```
$ npm run docs
```

> Compiled project will be in `docs/DOCUMENTATION.MD`