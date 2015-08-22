angular.module('surfspotter').run(['$templateCache', function($templateCache) {
  $templateCache.put('Home.html',
    '<div class="col-md-6 col-md-offset-3"></div>');
}]);

angular.module('surfspotter').run(['$templateCache', function($templateCache) {
  $templateCache.put('index.html',
    '<html ng-app=surfspotter><head><title>SurfSpotter</title><meta http-equiv=Content-Type content=text/html><meta charset=utf-8><meta name=viewport content="width=device-width, initial-scale=1"><meta name=description content="Get notifications or emails about your favourite surf spots when the surf is good."><meta name=author content="Anthony P Tetlow"><meta name=keywords content="surf report, surf forecast, surfing, surf notification"><link rel=stylesheet href=/styles/core.css><base href="/"></head><body class=body data-ng-controller="AuthController as Auth"><div data-navigation-bar></div><div data-notification></div><div class="container content" data-ui-view></div><div class=preload data-hide-on-load><div class=message><h1>SurfSpotter</h1><div class=spinner-wave><div></div><div></div><div></div><div></div><div></div></div></div></div></body><script>\n' +
    '	if (document.domain === \'surfspotter.eu\') {\n' +
    '	  (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n' +
    '	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n' +
    '	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n' +
    '	  })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n' +
    '\n' +
    '	  ga(\'create\', \'UA-61456361-3\', \'auto\');\n' +
    '	}\n' +
    '\n' +
    '	</script><script src=./js/app.js></script></html>');
}]);

angular.module('surfspotter').run(['$templateCache', function($templateCache) {
  $templateCache.put('index.mock.html',
    '<html><head><link rel=stylesheet type=text/css href=./styles/core.css><link rel=stylesheet href=./styles/lib/bootstrap.css></head><body class=body><div class=logo><h1><span class="glyphicon glyphicon-cloud"></span>Surf Spotter</h1></div><div class=container><div class="col-md-4 col-md-offset-4"><div class="panel panel-default"><div class=panel-heading><h3 class=panel-title>Sign In</h3></div><div class=panel-body><form class=form-signin role=form><div class=form-group><input type=email class=form-control id=exampleInputEmail1 placeholder="Enter email"></div><div class=form-group><input type=password class=form-control id=exampleInputPassword1 placeholder=Password></div><div class=form-group><label><input type=checkbox> Remember Me</label></div><button type=submit class="btn btn-default col-md-5"><a href=ratings.html>Submit</a></button> <button class="btn btn-default col-md-5 col-md-offset-2"><a href=signup.html>Sign Up</a></button></form></div></div></div></div></body></html>');
}]);

angular.module('surfspotter').run(['$templateCache', function($templateCache) {
  $templateCache.put('ratings.mock.html',
    '<html><head><link rel=stylesheet type=text/css href=./styles/core.css><link rel=stylesheet href=./styles/lib/bootstrap.css></head><body class=body><div class=conatiner><div class="col-md-6 col-md-offset-3"><div class=logo><h1><span class="glyphicon glyphicon-cloud"></span>Surf Spotter</h1></div><input type=text class=form-control placeholder="Type to search"><table class="table table-hover"><tr><th>Location</th><th>Current Quality of Surf</th><th>Quality of Spot</th><th>Swell Height</th><th>Swell Period</th><th>Distance</th></tr><tr><td>Isle of Arran</td><td>No Surfing</td><td><span class="glyphicon glyphicon-star star-faded"></span> <span class="glyphicon glyphicon-star star-faded"></span> <span class="glyphicon glyphicon-star star-faded"></span> <span class="glyphicon glyphicon-star star-faded"></span> <span class="glyphicon glyphicon-star star-faded"></span></td><td>0.3m</td><td>10s</td><td>10m</td></tr><tr><td>Dunbar</td><td>Good Surfing</td><td><span class="glyphicon glyphicon-star star-faded"></span> <span class="glyphicon glyphicon-star star-filled"></span> <span class="glyphicon glyphicon-star star-filled"></span> <span class="glyphicon glyphicon-star star-filled"></span> <span class="glyphicon glyphicon-star star-filled"></span></td><td>2m</td><td>30s</td><td>80km</td></tr><tr><td>machrihanish</td><td>Good Surfing</td><td><span class="glyphicon glyphicon-star star-filled"></span> <span class="glyphicon glyphicon-star star-filled"></span> <span class="glyphicon glyphicon-star star-filled"></span> <span class="glyphicon glyphicon-star star-filled"></span> <span class="glyphicon glyphicon-star star-filled"></span></td><td>5m</td><td>30s</td><td>15km</td></tr></table></div></div></body></html>');
}]);

angular.module('surfspotter').run(['$templateCache', function($templateCache) {
  $templateCache.put('signup.mock.html',
    '<html><head><link rel=stylesheet type=text/css href=./styles/core.css><link rel=stylesheet href=./styles/lib/bootstrap.css></head><body class=body><div class=logo><h1><span class="glyphicon glyphicon-cloud"></span>Surf Spotter</h1></div><div class=container><div class="col-md-4 col-md-offset-4"><div class="panel panel-default"><div class=panel-heading><h3 class=panel-title>Sign Up Details</h3></div><div class=panel-body><form class=form-signin role=form><label>User Acount Details:</label><hr><div class=form-group><input type=email class=form-control id=inputEmail1 placeholder="Enter email"></div><div class=form-group><input type=email class=form-control id=confirmInputEmail1 placeholder="Re-Enter email"></div><div class=form-group><input type=password class=form-control id=inputPassword placeholder=Password></div><div class=form-group><input type=password class=form-control id=confirmInputPassword placeholder="Re-Enter Password"></div><button type=submit class="btn btn-default col-md-5"><a href=ratings.html>Submit</a></button></form></div></div></div></div></body></html>');
}]);

angular.module('surfspotter').run(['$templateCache', function($templateCache) {
  $templateCache.put('style_guide/index.html',
    '<html><head><link rel=stylesheet href=/styles/core.css></head><body><div class=container><div class=column-3><div class=yellow></div></div><div class=column-3><div class=yellow></div></div><div class=column-12><div class=yellow></div></div><div class=column-12><div class=yellow></div></div><div class=column-12><div class=yellow></div></div><div class=column-12><div class=yellow></div></div></div></body></html>');
}]);
