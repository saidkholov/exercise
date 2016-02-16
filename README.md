# Front-end test 
The purpose if the project is to test applicants front-end coding abilities.

| Requirements        | Tools                              |
| ---------------------	| --------------------------- |
| Mark up  		| HTML                             |
| Styling  		        |  Sass, Bourbon, Neat    |
| Functionality	        | JavaScript, AngularJS   |
| Task Automation   | GruntJS                          |
| Package control    | npm                                | 

## Installation

Download NodeJs [here](https://nodejs.org/en/).  

We use Grunt for as an automatic task runner. For reference: http://gruntjs.com
Automation instructions are in `GrunFile.js` file. 
Project dependencies are listed in `package.json`.

#### **OS X**

### Installing grunt-cli

```
$ npm install -g grunt-cli
```

### Install all node packages.

```
$ npm install
```

It installs all the dependencies listed in the `package.json`. 

## Operating
You can use: 

```
grunt --help
```
to see the list of grunt commands available.

`Livereload` npm module is used to run application on a node server. To use this feature please download [chrome extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei). Alternatively, you can include:

```
<script src="//localhost:8800/livereload.js"></script>
``` 
at the bottom of your page. For more information refer [here](https://github.com/gruntjs/grunt-contrib-watch/blob/master/docs/watch-examples.md#enabling-live-reload-in-your-html).
  
```
$ grunt server
```

Starts a server and watches changes in static files and subsequently compiles, minifies and uglifies them if necessary.

```
$ grunt jshint
```

or

```
$ grunt test
```

Lints all Javascript.

P.S

If you need to add CORS to chrome here is an [extension link](https://chrome.google.com/webstore/category/apps?hl=en), otherwise CORS requests(ex. places api) won't work.


