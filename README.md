# Vue simple boilerplate
This project has a unique purpose: turn simple starting a project with [Vue.js](https://vuejs.org/)

## Features
- [SASS](https://sass-lang.com)
- [Vue Router](https://router.vuejs.org)

## Project stucture
- [config](#config)
- [static](#static)
- [src](#src)
    - [assets](#assets)
    - [components](#components)
    - [layouts](#layouts)
    - [router](#router)
    - [scss](#scss)
    - [views](#views)
    - [App.vue](#App.vue)
    - [main.js](#main.js)

### config
Where we keep configurations of [webpack](https://webpack.js.org/)

### static
Pure static assets (directly copied)

### src
Source folder

### assets
Where we keep images, fonts and others media stuff.
> PS: This folder will be processed by [webpack](https://webpack.js.org/)

### components
Shared components folder

### layouts
Where we keep all layouts used in project
- `header`, `footer` components and main layout wrapper

### router
Router instance and routing declaration
- `index` - router initialization.

### scss
Global style folder (partials, variables, mixins, reset)

### views
Page folders (components that are routed)

### App.vue
Main app component

### main.js
Root app initialization file.

## Project setup

``` bash
# clone repo
git clone https://github.com/paulodsn/vue-simple-boilerplate.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Repos that can help
- https://github.com/FortAwesome/vue-fontawesome
- https://github.com/bootstrap-vue/bootstrap-vue
