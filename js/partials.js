angular.module('surfspotter').run(['$templateCache', function($templateCache) {
  $templateCache.put('Home.html',
    '<div class=grid><div class=row><div class="column-2 column-desktop-right"><h1>We are Prelaunch</h1><div class="card card__section"><p>I am experimenting with different sources of data for the surfing forecast. So any of the forecast data may be incorrect or out of date.</p><p>Your account details will not be altered during this time but your favourite spots may be removed.</p></div></div><div class=column-4><h1>Surf Spots</h1></div><div class=column-2><div data-location-link-card data-location=location data-ng-repeat="location in LocationList.locations | limitTo : LocationList.locations.length / 2"></div></div><div class=column-2><div data-location-link-card data-location=location data-ng-repeat="location in LocationList.locations | limitTo : LocationList.locations.length / 2: LocationList.locations.length / 2 | orderBy: \'name\': true"></div></div></div></div>');
}]);

angular.module('surfspotter').run(['$templateCache', function($templateCache) {
  $templateCache.put('index.grid.html',
    '<html ng-app=surfspotter class=ng-scope hola_ext_inject=disabled><head><title>SurfSpotter</title><meta http-equiv=Content-Type content=text/html><meta charset=utf-8><meta name=viewport content="width=device-width, initial-scale=1"><meta name=description content="Get notifications or emails about your favourite surf spots when the surf is good."><meta name=author content="Anthony P Tetlow"><meta name=keywords content="surf report, surf forecast, surfing, surf notification"><link rel=stylesheet href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700" media=all><link rel=stylesheet href=/styles/core.css media=all><link rel=stylesheet href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700" media=all><link rel=stylesheet href=/styles/core.css media=all><script>\n' +
    '(function(u){function loadCSS(e,t,n){"use strict";function r(){for(var t,i=0;i<d.length;i++)d[i].href&&d[i].href.indexOf(e)>-1&&(t=!0);t?o.media=n||"all":setTimeout(r)}var o=window.document.createElement("link"),i=t||window.document.getElementsByTagName("script")[0],d=window.document.styleSheets;return o.rel="stylesheet",o.href=e,o.media="only x",i.parentNode.insertBefore(o,i),r(),o}for(var i in u){loadCSS(u[i]);}}([\'https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700\',\'/styles/core.css\']));\n' +
    '</script><noscript>&amp;lt;link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700" rel="stylesheet" type="text/css"&amp;gt; &amp;lt;link rel="stylesheet" href="/styles/core.css"&amp;gt;</noscript><base href="/"><script type=text/javascript src=chrome-extension://aadgmnobpdmgmigaicncghmmoeflnamj/ng-inspector.js></script><meta name=chromesniffer id=chromesniffer_meta content={}><script type=text/javascript src=chrome-extension://fhhdlnnepfjhlhilgmeepgkhjmhhhjkh/js/detector.js></script><style type=text/css></style><style type=text/css></style><script type=text/javascript src=chrome-extension://aadgmnobpdmgmigaicncghmmoeflnamj/ng-inspector.js></script><meta name=chromesniffer id=chromesniffer_meta><script type=text/javascript src=chrome-extension://fhhdlnnepfjhlhilgmeepgkhjmhhhjkh/js/detector.js></script><style type=text/css></style></head><body class="body ng-scope" data-ng-controller="AuthController as Auth"><nav class="navbar navbar-default navbar-fixed-top" data-navigation-bar><div class=container><div class=row><a class="navbar-brand logo" data-ui-sref=app href="/">Surf Spotter</a><div class="nav-auth clearfix"><ul data-ng-if=!NavigationBar.isUserAuthenticated() class="nav navbar-nav navbar-right ng-scope"><li data-ui-sref-active=hide><a data-ui-sref=signIn href=/signIn>Sign In</a></li><li data-ui-sref-active=hide><a data-ui-sref=signUp href=/signUp>Sign Up</a></li></ul></div><div data-location-search class=ng-isolate-scope><div class="nav-search location-search" data-ng-class="{\'expanded\': Locations.locations.length > 0}"><input type=text class="form-control ng-pristine ng-untouched ng-valid" data-ng-model=Locations.locationQuery ng-model-options="{debounce: 300}" data-ng-change=Locations.findLocations(Locations.locationQuery) placeholder="Search for location"><div class=locations-list></div></div></div></div></div></nav><div data-notification><div class="alert-container animate-container"></div></div><div style="background-image: url(\'/assets/images/dunbar.jpg\'); background-repeat: no-repeat; background-size: cover; padding: 140px; color: white; background-position-y: -440px; text-shadow: 1px 1px 1px rgba(0,0,0,0.5);"><div class="container content ng-scope" data-ui-view=content><div class=row>><h1 data-ng-bind=Location.name class=ng-binding>Belhaven Bay (Dunbar)</h1><p>Coordinates: (<span data-ng-bind=Location.coordinate.latitude class=ng-binding>-2.5189516</span>, <span data-ng-bind=Location.coordinate.longitude class=ng-binding>55.9974389</span>)</p></div></div></div><div class=container style="margin-top: 40px;"><div class=row><div class=col-sm-12><div class=row><div class=col-sm-8><div class=card><div class=section><h2 style="margin: 0;">Forecast</h2></div><div class="forecast section ng-scope expanded" ng-class="{expanded: day.expanded }" data-ng-repeat="day in Forecast.forecast" style=""><div class=date><span data-ng-bind="$first ? \'Today\' : (day.date | date:\'EEE\')" class=ng-binding>Today</span> <span class="extra ng-binding" data-ng-bind="day.date | date:\'dd/MM/yyyy\'">07/09/2015</span></div><span class="expander pull-right" data-ng-click="day.expanded = !day.expanded;"></span><div class="rating ng-pristine ng-untouched ng-valid ng-isolate-scope" star-rating ng-model=day.weather.rating><ul class=star-rating><li ng-repeat="star in stars" class="star ng-scope filled" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li></ul></div><div class="details animate-slide"><div class=row><div class="col-sm-6 horizontal-section"><h5>Swell:</h5><div class=row><div class=col-xs-6>Height: <span data-ng-bind=day.weather.swell.height class=ng-binding>3</span>m</div><div class=col-xs-6>Period: <span data-ng-bind=day.weather.swell.period class=ng-binding>8</span>s</div></div></div><div class="col-sm-6 horizontal-section"><h5>Wind:</h5><div class=row><div class=col-xs-6>Speed: <span data-ng-bind=day.weather.wind.speed class=ng-binding>5</span>mph</div><div class=col-xs-6>Direction: <span data-ng-bind=day.weather.wind.direction class=ng-binding>ENE</span></div></div></div></div></div></div><div class="forecast section ng-scope" ng-class="{expanded: day.expanded }" data-ng-repeat="day in Forecast.forecast"><div class=date><span data-ng-bind="$first ? \'Today\' : (day.date | date:\'EEE\')" class=ng-binding>Tue</span> <span class="extra ng-binding" data-ng-bind="day.date | date:\'dd/MM/yyyy\'">08/09/2015</span></div><span class="expander pull-right" data-ng-click="day.expanded = !day.expanded;"></span><div class="rating ng-pristine ng-untouched ng-valid ng-isolate-scope" star-rating ng-model=day.weather.rating><ul class=star-rating><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li></ul></div><div class="details animate-slide"><div class=row><div class="col-sm-6 horizontal-section"><h5>Swell:</h5><div class=row><div class=col-xs-6>Height: <span data-ng-bind=day.weather.swell.height class=ng-binding>2</span>m</div><div class=col-xs-6>Period: <span data-ng-bind=day.weather.swell.period class=ng-binding>7</span>s</div></div></div><div class="col-sm-6 horizontal-section"><h5>Wind:</h5><div class=row><div class=col-xs-6>Speed: <span data-ng-bind=day.weather.wind.speed class=ng-binding>10</span>mph</div><div class=col-xs-6>Direction: <span data-ng-bind=day.weather.wind.direction class=ng-binding>ESE</span></div></div></div></div></div></div><div class="forecast section ng-scope" ng-class="{expanded: day.expanded }" data-ng-repeat="day in Forecast.forecast"><div class=date><span data-ng-bind="$first ? \'Today\' : (day.date | date:\'EEE\')" class=ng-binding>Wed</span> <span class="extra ng-binding" data-ng-bind="day.date | date:\'dd/MM/yyyy\'">09/09/2015</span></div><span class="expander pull-right" data-ng-click="day.expanded = !day.expanded;"></span><div class="rating ng-pristine ng-untouched ng-valid ng-isolate-scope" star-rating ng-model=day.weather.rating><ul class=star-rating><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li></ul></div><div class="details animate-slide"><div class=row><div class="col-sm-6 horizontal-section"><h5>Swell:</h5><div class=row><div class=col-xs-6>Height: <span data-ng-bind=day.weather.swell.height class=ng-binding>1</span>m</div><div class=col-xs-6>Period: <span data-ng-bind=day.weather.swell.period class=ng-binding>8</span>s</div></div></div><div class="col-sm-6 horizontal-section"><h5>Wind:</h5><div class=row><div class=col-xs-6>Speed: <span data-ng-bind=day.weather.wind.speed class=ng-binding>16</span>mph</div><div class=col-xs-6>Direction: <span data-ng-bind=day.weather.wind.direction class=ng-binding>SE</span></div></div></div></div></div></div><div class="forecast section ng-scope" ng-class="{expanded: day.expanded }" data-ng-repeat="day in Forecast.forecast"><div class=date><span data-ng-bind="$first ? \'Today\' : (day.date | date:\'EEE\')" class=ng-binding>Thu</span> <span class="extra ng-binding" data-ng-bind="day.date | date:\'dd/MM/yyyy\'">10/09/2015</span></div><span class="expander pull-right" data-ng-click="day.expanded = !day.expanded;"></span><div class="rating ng-pristine ng-untouched ng-valid ng-isolate-scope" star-rating ng-model=day.weather.rating><ul class=star-rating><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li></ul></div><div class="details animate-slide"><div class=row><div class="col-sm-6 horizontal-section"><h5>Swell:</h5><div class=row><div class=col-xs-6>Height: <span data-ng-bind=day.weather.swell.height class=ng-binding>4</span>m</div><div class=col-xs-6>Period: <span data-ng-bind=day.weather.swell.period class=ng-binding>5</span>s</div></div></div><div class="col-sm-6 horizontal-section"><h5>Wind:</h5><div class=row><div class=col-xs-6>Speed: <span data-ng-bind=day.weather.wind.speed class=ng-binding>19</span>mph</div><div class=col-xs-6>Direction: <span data-ng-bind=day.weather.wind.direction class=ng-binding>SE</span></div></div></div></div></div></div><div class="forecast section ng-scope" ng-class="{expanded: day.expanded }" data-ng-repeat="day in Forecast.forecast"><div class=date><span data-ng-bind="$first ? \'Today\' : (day.date | date:\'EEE\')" class=ng-binding>Fri</span> <span class="extra ng-binding" data-ng-bind="day.date | date:\'dd/MM/yyyy\'">11/09/2015</span></div><span class="expander pull-right" data-ng-click="day.expanded = !day.expanded;"></span><div class="rating ng-pristine ng-untouched ng-valid ng-isolate-scope" star-rating ng-model=day.weather.rating><ul class=star-rating><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}"></li></ul></div><div class="details animate-slide"><div class=row><div class="col-sm-6 horizontal-section"><h5>Swell:</h5><div class=row><div class=col-xs-6>Height: <span data-ng-bind=day.weather.swell.height class=ng-binding>4</span>m</div><div class=col-xs-6>Period: <span data-ng-bind=day.weather.swell.period class=ng-binding>6</span>s</div></div></div><div class="col-sm-6 horizontal-section"><h5>Wind:</h5><div class=row><div class=col-xs-6>Speed: <span data-ng-bind=day.weather.wind.speed class=ng-binding>19</span>mph</div><div class=col-xs-6>Direction: <span data-ng-bind=day.weather.wind.direction class=ng-binding>SE</span></div></div></div></div></div></div></div></div><div class=col-sm-4><div class=card><div class=section><h3>Coast to Coast Surf School</h3></div><div class=section><div class="row ctas"><div class=col-sm-4><a>Book Lessons</a></div><div class=col-sm-4><a>Hire Kit</a></div><div class=col-sm-4><a>Buy Kit</a></div></div></div><div class="section rowclearfix"><div class=row><div class=col-sm-4><img class=img-responsive src=http://www.c2csurfschool.com/wp-content/themes/organic_natural/images/c2c-logo-90x100.png style="float: left; /* margin-right: 10px; */"></div><div class=col-sm-8><a href="http://www.c2csurfschool.com/">http://www.c2csurfschool.com/</a><p>Linkfield car park<br>John Muir Country Park<br>Belhaven<br>Dunbar<br>EH42 1XF</p></div></div></div></div><div class=card><div class=section><h3>Belhaven Bay Caravan and Camping Park</h3></div><div class="section picture"></div></div></div></div></div></div></div><div class="preload hide" data-hide-on-load><div class=message><h1>SurfSpotter</h1><div class=spinner-wave><div></div><div></div><div></div><div></div><div></div></div></div></div><script>\n' +
    '	if (document.domain === \'surfspotter.eu\') {\n' +
    '	  (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n' +
    '	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n' +
    '	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n' +
    '	  })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n' +
    '\n' +
    '	  ga(\'create\', \'UA-61456361-3\', \'auto\');\n' +
    '	}\n' +
    '\n' +
    '	</script><div id=window-resizer-tooltip style="display: none;"><a href=# title="Edit settings"></a><span class=tooltipTitle>Window size:</span><span class=tooltipWidth id=winWidth>1676</span> x <span class=tooltipHeight id=winHeight>1027</span><br><span class=tooltipTitle>Viewport size:</span><span class=tooltipWidth id=vpWidth>1676</span> x <span class=tooltipHeight id=vpHeight>527</span></div><div id=window-resizer-tooltip><a href=# title="Edit settings"></a><span class=tooltipTitle>Window size:</span><span class=tooltipWidth id=winWidth></span> x <span class=tooltipHeight id=winHeight></span><br><span class=tooltipTitle>Viewport size:</span><span class=tooltipWidth id=vpWidth></span> x <span class=tooltipHeight id=vpHeight></span></div></body></html>');
}]);

angular.module('surfspotter').run(['$templateCache', function($templateCache) {
  $templateCache.put('index.html',
    '<html ng-app=surfspotter><head data-ng-controller="MetadataController as Metadata"><link rel=icon type=image/png href=/assets/wave2.png><meta http-equiv=Content-Type content=text/html><meta charset=utf-8><meta name=viewport content="width=device-width, initial-scale=1, user-scalable=0"><meta name=author content="Anthony P Tetlow"><title data-ng-bind=Metadata.title()>Surf Spotter</title><meta name=description content={{Metadata.description()}}><meta name=keywords content={{Metadata.keywords()}}><meta property=og:type content=website><meta property=og:site_name content="Surf Spotter"><meta property=og:title content={{Metadata.title()}}><meta property=og:description content={{Metadata.description()}}><meta property=og:url content={{Metadata.path()}}><meta property=og:image content={{Metadata.image()}}><meta name=twitter:card content=summary_large_image><meta name=twitter:site content=@Surf_Spotter><meta name=twitter:creator content=@Surf_Spotter><meta name=twitter:title content={{Metadata.title()}}><meta name=twitter:description content={{Metadata.description()}}><meta name=twitter:image content={{Metadata.image()}}><link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700" rel=stylesheet type=text/css><link rel=stylesheet href=/styles/core.css><base href="/"></head><body class=body data-ng-controller="AuthController as Auth"><div class=content__wrapper><div data-navigation-bar></div><div data-notification></div><div data-ui-view=content></div><div class=push></div></div><footer class=footer>Built by <a class=footer__link href=http://anthonyptetlow.com>this guy</a> with <a class=footer__link href="http://www.worldweatheronline.com/">World Weather Online</a></footer></body><script>\n' +
    '	if (document.domain === \'surfspotter.eu\' && document.documentURI.indexOf(\'no-tracking\') <= -1) {\n' +
    '\n' +
    '	  (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n' +
    '	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n' +
    '	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n' +
    '	  })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n' +
    '\n' +
    '	  ga(\'create\', \'UA-61456361-3\', \'auto\');\n' +
    '	}\n' +
    '	</script><script src=./js/app.js></script><script type=application/ld+json>{ "@context": "http://schema.org", "@type": "Organization", "name": "Surf Spotter", "url": "http://surfspotter.eu", "logo": "http://surfspotter.eu/assets/wave2.png", "sameAs" : [ "https://www.facebook.com/SurfSpotter-1630841030490571", "https://www.twitter.com/Surf_Spotter", "https://plus.google.com/+SurfspotterEu1" ] }</script></html>');
}]);

angular.module('surfspotter').run(['$templateCache', function($templateCache) {
  $templateCache.put('index.static.html',
    '<html ng-app=surfspotter class=ng-scope hola_ext_inject=disabled><head><title>SurfSpotter</title><meta http-equiv=Content-Type content=text/html><meta charset=utf-8><meta name=viewport content="width=device-width, initial-scale=1"><meta name=description content="Get notifications or emails about your favourite surf spots when the surf is good."><meta name=author content="Anthony P Tetlow"><meta name=keywords content="surf report, surf forecast, surfing, surf notification"><link rel=stylesheet href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700" media=all><link rel=stylesheet href=/styles/core.css media=all><link rel=stylesheet href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700" media=all><link rel=stylesheet href=/styles/core.css media=all><script>\n' +
    '(function(u){function loadCSS(e,t,n){"use strict";function r(){for(var t,i=0;i<d.length;i++)d[i].href&&d[i].href.indexOf(e)>-1&&(t=!0);t?o.media=n||"all":setTimeout(r)}var o=window.document.createElement("link"),i=t||window.document.getElementsByTagName("script")[0],d=window.document.styleSheets;return o.rel="stylesheet",o.href=e,o.media="only x",i.parentNode.insertBefore(o,i),r(),o}for(var i in u){loadCSS(u[i]);}}([\'https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700\',\'/styles/core.css\']));\n' +
    '</script><noscript>&amp;lt;link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700" rel="stylesheet" type="text/css"&amp;gt; &amp;lt;link rel="stylesheet" href="/styles/core.css"&amp;gt;</noscript><link rel=stylesheet href=/styles/core.css><base href="/"></head><body><div class=grid><div class=row><div class=column-6><h1>Styles</h1></div></div></div><div class=grid><div class=column-6><h2>Icons</h2></div><section><div class=column-6><h3>Social</h3></div><div class=column-1><span class=icon-facebook></span> icon-facebook</div><div class=column-1><span class=icon-instagram></span> icon-instagram</div><div class=column-1><span class=icon-gplus></span> icon-gplus</div><div class=column-1><span class=icon-twitter></span> icon-twitter</div><div class=column-1><span class=icon-mail></span> icon-mail</div></section><section><div class=column-6><h3>Brand</h3></div><div class=column-1><span class=icon-windows></span> icon-windows</div><div class=column-1><span class=icon-apple></span> icon-apple</div><div class=column-1><span class=icon-android></span> icon-android</div></section><section><div class=column-6><h3>Other</h3></div><div class=column-1><span class=icon-plus></span> icon-plus</div><div class=column-1><span class=icon-minus></span> icon-minus</div><div class=column-1><span class=icon-star></span> icon-star</div><div class=column-1><span class=icon-star-empty></span> icon-star-empty</div><div class=column-1><span class=icon-star-half></span> icon-star-half</div><div class=column-1><span class=icon-star-half-alt></span> icon-star-half-alt</div><div class=column-1><span class=icon-ok></span> icon-ok</div><div class=column-1><span class=icon-cancel></span> icon-cancel</div><div class=column-1><span class=icon-help></span> icon-help</div><div class=column-1><span class=icon-direction></span> icon-direction</div><div class=column-1><span class=icon-trash-empty></span> icon-trash-empty</div><div class=column-1><span class=icon-trash></span> icon-trash</div><div class=column-1><span class=icon-cog></span> icon-cog</div><div class=column-1><span class=icon-cog-alt></span> icon-cog-alt</div><div class=column-1><span class=icon-block></span> icon-block</div><div class=column-1><span class=icon-down-open></span> icon-down-open</div><div class=column-1><span class=icon-up-open></span> icon-up-open</div><div class=column-1><span class=icon-right-open></span> icon-right-open</div><div class=column-1><span class=icon-left-open></span> icon-left-open</div><div class=column-1><span class=icon-down-dir></span> icon-down-dir</div><div class=column-1><span class=icon-up-dir></span> icon-up-dir</div><div class=column-1><span class=icon-left-dir></span> icon-left-dir</div><div class=column-1><span class=icon-right-dir></span> icon-right-dir</div><div class=column-1><span class=icon-angle-left></span> icon-angle-left</div><div class=column-1><span class=icon-angle-right></span> icon-angle-right</div><div class=column-1><span class=icon-angle-up></span> icon-angle-up</div><div class=column-1><span class=icon-angle-down></span> icon-angle-down</div></section></div><div class=grid><div class=column-6><h1>Grid</h1><h2>Columns</h2></div></div><div class=grid><div class=column-1><div class="card tall"></div></div><div class=column-5><div class="card tall"></div></div></div><div class=grid><div class=column-2><div class="card tall"></div></div><div class=column-4><div class="card tall"></div></div></div><div class=grid><div class=column-3><div class="card tall"></div></div><div class=column-3><div class="card tall"></div></div></div><div class=grid><div class=column-4><div class="card tall"></div></div><div class=column-2><div class="card tall"></div></div></div><div class=grid><div class=column-5><div class="card tall"></div></div><div class=column-1><div class="card tall"></div></div></div><div class=grid><h2>Offsets</h2></div><div class=grid><div class="column-5 offset-1"><div class="card tall"></div></div></div><div class=grid><div class="column-4 offset-2"><div class="card tall"></div></div></div><div class=grid><div class="column-3 offset-3"><div class="card tall"></div></div></div><div class=grid><div class="column-2 offset-4"><div class="card tall"></div></div></div><div class=grid><div class="column-1 offset-5"><div class="card tall"></div></div></div></body></html>');
}]);
