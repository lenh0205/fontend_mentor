### run probject:
```
npm run dev
```
### directory
#### working directory
* src - contain all the .js file for javascript logic
* all this file will be bundle to `bundle.js`
#### server
* server.js
#### output:
* index.html , bundle.js, index.css

### .env file
- `Installation:`
```
npm i dotenv
```
- `Usage:`
```
require('dotenv').config();
```

### nodemon
- `npm install -D nodemon`
- `default watch`:  _.js, .coffee, .litcoffee, and .json_
- `use config file`: **nodemon.json**`
- `use command line`:
```only js and html
nodemon -e js,html server.js
```
- `use in NodeJS code:`
```
nodemon({
  script: 'server.js',
  ext: 'js html css',
  watch: ['src'],
  delay: 500,
  stdout: false
});
```

### browser-sync
- `Installation:`
```
npm install -D browser-sync
```
- `use config file`: **browser_sync.js**

### babel
- Installation:
```
npm install @babel/core
```
- `use config file`: **babel.rc**, **babel.config.json**
- `output`: /build

### watchify
- using to bundle module through `require()`
- `output`: bundle.js

### dangerouslySetInnerHTML - attribute in JSX to add string as react element
```
<div dangerouslySetInnerHTML={{ __html: svg }}></div>
```