'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var EsriGenerator = module.exports = function EsriGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  // setup the test-framework property, Gruntfile template will need this
  this.testFramework = options['test-framework'] || 'mocha';

  // for hooks to resolve on mocha by default
  if (!options['test-framework']) {
    options['test-framework'] = 'mocha';
  }

  // resolved to mocha by default (could be switched to jasmine for instance)
  this.hookFor('test-framework', {
    as: 'app'
  });

  this.on('end', function() {
    this.installDependencies({
      skipInstall: options['skip-install']
    });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(EsriGenerator, yeoman.generators.Base);

EsriGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
      name: 'appName',
      message: 'What should I call your app?',
      default: 'myApp'
    }
  ];

  this.prompt(prompts, function(props) {
    this.appName = props.appName;

    cb();
  }.bind(this));
};

EsriGenerator.prototype.gruntfile = function gruntfile() {
  this.copy('Gruntfile.js');
};

EsriGenerator.prototype.packageJSON = function packageJSON() {
  this.copy('_package.json', 'package.json');
};

EsriGenerator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
};

EsriGenerator.prototype.bower = function bower() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('_bower.json', 'bower.json');
};

EsriGenerator.prototype.jshint = function jshint() {
  this.copy('jshintrc', '.jshintrc');
};

EsriGenerator.prototype.editorConfig = function editorConfig() {
  this.copy('editorconfig', '.editorconfig');
};

EsriGenerator.prototype.h5bp = function h5bp() {
  this.copy('favicon.ico', 'app/favicon.ico');
  this.copy('404.html', 'app/404.html');
  this.copy('robots.txt', 'app/robots.txt');
  this.copy('htaccess', 'app/.htaccess');
};

EsriGenerator.prototype.images = function images() {
  this.copy('glyphicons-halflings.png', 'app/images/glyphicons-halflings.png');
  this.copy('glyphicons-halflings-white.png', 'app/images/glyphicons-halflings-white.png');
  this.copy('retina_wood.png', 'app/images/bg_patterns/retina_wood.png')
  this.copy('grey_wash_wall.png', 'app/images/bg_patterns/grey_wash_wall.png')
};

EsriGenerator.prototype.bootstrapJs = function bootstrapJs() {
  // TODO: create a Bower component for this
  this.copy('bootstrap.js', 'app/scripts/vendor/bootstrap.js');
};

EsriGenerator.prototype.mainStylesheet = function mainStylesheet() {
  this.copy('main.scss', 'app/styles/main.scss');
};

// TODO(mklabs): to be put in a subgenerator like rjs:app
EsriGenerator.prototype.requirejs = function requirejs() {
  this.indexFile = this.appendScripts(this.indexFile, 'scripts/main.js', ['bower_components/requirejs/require.js'], {
    'data-main': 'scripts/main'
  });

  this.template('require_main.js', 'app/scripts/main.js');
  this.copy('esri_controller.js', 'app/scripts/' + this.appName + '/Controller.js');
  this.copy('esri_config.js', 'app/scripts/' + this.appName + '/config.js');
  this.copy('esri_layoutview.js', 'app/scripts/' + this.appName + '/views/LayoutView.js');
  this.copy('esri_layoutviewtemplate.html', 'app/scripts/' + this.appName + '/views/templates/LayoutViewTemplate.html');
};


EsriGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/scripts');
  this.mkdir('app/scripts/' + this.appName)
  this.mkdir('app/scripts/' + this.appName + '/views')
  this.mkdir('app/scripts/' + this.appName + '/views/templates')
  this.mkdir('app/styles');
  this.mkdir('app/images');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

EsriGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('index.html', 'app/index.html')
};