angular.module('surfspotter').run(['$templateCache', function($templateCache) {
  $templateCache.put('Home.html',
    '<div class="grid">\n' +
    '	<div class="row">\n' +
    '		<div class="column-6">\n' +
    '			<h1>Currently In Pre-Beta</h1>\n' +
    '			<p>I am currently experimenting with different sources of data for the forecast. So any of the forecast data may be incorrect or out of date.</p>\n' +
    '			<p>Your account details will not be altered during this experimental time but your favourite spots may be removed.</p>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('surfspotter').run(['$templateCache', function($templateCache) {
  $templateCache.put('index.grid.html',
    '<html ng-app="surfspotter" class="ng-scope" hola_ext_inject="disabled"><head>\n' +
    '		<title>SurfSpotter</title>\n' +
    '		<meta http-equiv="Content-Type" content="text/html">\n' +
    '		<meta charset="utf-8">\n' +
    '		<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '		<meta name="description" content="Get notifications or emails about your favourite surf spots when the surf is good.">\n' +
    '		<meta name="author" content="Anthony P Tetlow">\n' +
    '		<meta name="keywords" content="surf report, surf forecast, surfing, surf notification">\n' +
    '\n' +
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700" media="all"><link rel="stylesheet" href="/styles/core.css" media="all"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700" media="all"><link rel="stylesheet" href="/styles/core.css" media="all"><script>\n' +
    '(function(u){function loadCSS(e,t,n){"use strict";function r(){for(var t,i=0;i<d.length;i++)d[i].href&&d[i].href.indexOf(e)>-1&&(t=!0);t?o.media=n||"all":setTimeout(r)}var o=window.document.createElement("link"),i=t||window.document.getElementsByTagName("script")[0],d=window.document.styleSheets;return o.rel="stylesheet",o.href=e,o.media="only x",i.parentNode.insertBefore(o,i),r(),o}for(var i in u){loadCSS(u[i]);}}([\'https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700\',\'/styles/core.css\']));\n' +
    '</script>\n' +
    '<noscript>\n' +
    '&amp;lt;link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700" rel="stylesheet" type="text/css"&amp;gt;\n' +
    '&amp;lt;link rel="stylesheet" href="/styles/core.css"&amp;gt;\n' +
    '</noscript>\n' +
    '\n' +
    '\n' +
    '	    <base href="/">\n' +
    '	<script type="text/javascript" src="chrome-extension://aadgmnobpdmgmigaicncghmmoeflnamj/ng-inspector.js"></script><meta name="chromesniffer" id="chromesniffer_meta" content="{}"><script type="text/javascript" src="chrome-extension://fhhdlnnepfjhlhilgmeepgkhjmhhhjkh/js/detector.js"></script><style type="text/css"></style><style type="text/css"></style><script type="text/javascript" src="chrome-extension://aadgmnobpdmgmigaicncghmmoeflnamj/ng-inspector.js"></script><meta name="chromesniffer" id="chromesniffer_meta"><script type="text/javascript" src="chrome-extension://fhhdlnnepfjhlhilgmeepgkhjmhhhjkh/js/detector.js"></script><style type="text/css"></style></head>\n' +
    '	<body class="body ng-scope" data-ng-controller="AuthController as Auth" style="">\n' +
    '		<nav class="navbar navbar-default navbar-fixed-top" data-navigation-bar="">\n' +
    '	<div class="container">\n' +
    '\n' +
    '		<div class="row">\n' +
    '\n' +
    '\n' +
    '			<a class="navbar-brand logo" data-ui-sref="app" href="/">Surf Spotter</a>\n' +
    '\n' +
    '\n' +
    '\n' +
    '			<div class="nav-auth clearfix">\n' +
    '				<!-- ngIf: !NavigationBar.isUserAuthenticated() --><ul data-ng-if="!NavigationBar.isUserAuthenticated()" class="nav navbar-nav navbar-right ng-scope">\n' +
    '			        <!-- <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li> -->\n' +
    '					<li data-ui-sref-active="hide" class=""><a data-ui-sref="signIn" href="/signIn">Sign In</a></li>\n' +
    '			        <li data-ui-sref-active="hide" class=""><a data-ui-sref="signUp" href="/signUp">Sign Up</a></li>\n' +
    '				</ul><!-- end ngIf: !NavigationBar.isUserAuthenticated() -->\n' +
    '				<!-- ngIf: NavigationBar.isUserAuthenticated() -->\n' +
    '			</div>\n' +
    '\n' +
    '\n' +
    '			<div data-location-search="" class="ng-isolate-scope"><!-- <div class="col-md-8 col-md-offset-2"> -->\n' +
    '<div class="nav-search location-search" data-ng-class="{\'expanded\': Locations.locations.length > 0}">\n' +
    '	<input type="text" class="form-control ng-pristine ng-untouched ng-valid" data-ng-model="Locations.locationQuery" ng-model-options="{debounce: 300}" data-ng-change="Locations.findLocations(Locations.locationQuery)" placeholder="Search for location">\n' +
    '\n' +
    '	<div class="locations-list">\n' +
    '		<!-- ngRepeat: location in Locations.locations | orderBy:\'name\' -->\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '<!-- </div> -->\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</nav>\n' +
    '		<div data-notification=""><div class="alert-container animate-container">\n' +
    '	<!-- ngRepeat: notification in Notifications.list -->\n' +
    '</div>\n' +
    '</div>\n' +
    '		<!-- uiView: content --><div style="\n' +
    '    background-image: url(\'/assets/images/dunbar.jpg\');\n' +
    '    background-repeat: no-repeat;\n' +
    '    background-size: cover;\n' +
    '    padding: 140px;\n' +
    '    color: white;\n' +
    '    background-position-y: -440px;\n' +
    '    text-shadow: 1px 1px 1px rgba(0,0,0,0.5);\n' +
    '"><div class="container content ng-scope" data-ui-view="content"><div class="row>">\n' +
    '	<h1 data-ng-bind="Location.name" class="ng-binding">Belhaven Bay (Dunbar)</h1>\n' +
    '	<p>\n' +
    '		Coordinates: (<span data-ng-bind="Location.coordinate.latitude" class="ng-binding">-2.5189516</span>, <span data-ng-bind="Location.coordinate.longitude" class="ng-binding">55.9974389</span>)\n' +
    '	</p>\n' +
    '</div>\n' +
    '\n' +
    '  </div></div><div class="container" style="\n' +
    '    margin-top: 40px;\n' +
    '">\n' +
    '<div class="row">\n' +
    '  <div class="col-sm-12">\n' +
    '\n' +
    '<div class="row"><div class="col-sm-8"><div class="card"><!-- ngRepeat: day in Forecast.forecast --><div class="section"><h2 style="\n' +
    '    margin: 0;\n' +
    '">Forecast</h2></div>\n' +
    '\n' +
    '<div class="forecast section ng-scope expanded" ng-class="{expanded: day.expanded }" data-ng-repeat="day in Forecast.forecast" style="\n' +
    '"><div class="date"><span data-ng-bind="$first ? \'Today\' : (day.date | date:\'EEE\')" class="ng-binding">Today</span> <span class="extra ng-binding" data-ng-bind="day.date | date:\'dd/MM/yyyy\'">07/09/2015</span></div><span class="expander pull-right" data-ng-click="day.expanded = !day.expanded;"></span><div class="rating ng-pristine ng-untouched ng-valid ng-isolate-scope" star-rating="" ng-model="day.weather.rating"><ul class="star-rating">  <!-- ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope filled" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --></ul></div><div class="details animate-slide"><div class="row"><div class="col-sm-6 horizontal-section"><h5>Swell:</h5><div class="row"><div class="col-xs-6">Height: <span data-ng-bind="day.weather.swell.height" class="ng-binding">3</span>m</div><div class="col-xs-6">Period: <span data-ng-bind="day.weather.swell.period" class="ng-binding">8</span>s</div></div></div><div class="col-sm-6 horizontal-section"><h5>Wind:</h5><div class="row"><div class="col-xs-6">Speed: <span data-ng-bind="day.weather.wind.speed" class="ng-binding">5</span>mph</div><div class="col-xs-6">Direction: <span data-ng-bind="day.weather.wind.direction" class="ng-binding">ENE</span></div></div></div></div></div></div><!-- end ngRepeat: day in Forecast.forecast --><div class="forecast section ng-scope" ng-class="{expanded: day.expanded }" data-ng-repeat="day in Forecast.forecast"><div class="date"><span data-ng-bind="$first ? \'Today\' : (day.date | date:\'EEE\')" class="ng-binding">Tue</span> <span class="extra ng-binding" data-ng-bind="day.date | date:\'dd/MM/yyyy\'">08/09/2015</span></div><span class="expander pull-right" data-ng-click="day.expanded = !day.expanded;"></span><div class="rating ng-pristine ng-untouched ng-valid ng-isolate-scope" star-rating="" ng-model="day.weather.rating"><ul class="star-rating">  <!-- ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --></ul></div><div class="details animate-slide"><div class="row"><div class="col-sm-6 horizontal-section"><h5>Swell:</h5><div class="row"><div class="col-xs-6">Height: <span data-ng-bind="day.weather.swell.height" class="ng-binding">2</span>m</div><div class="col-xs-6">Period: <span data-ng-bind="day.weather.swell.period" class="ng-binding">7</span>s</div></div></div><div class="col-sm-6 horizontal-section"><h5>Wind:</h5><div class="row"><div class="col-xs-6">Speed: <span data-ng-bind="day.weather.wind.speed" class="ng-binding">10</span>mph</div><div class="col-xs-6">Direction: <span data-ng-bind="day.weather.wind.direction" class="ng-binding">ESE</span></div></div></div></div></div></div><!-- end ngRepeat: day in Forecast.forecast --><div class="forecast section ng-scope" ng-class="{expanded: day.expanded }" data-ng-repeat="day in Forecast.forecast"><div class="date"><span data-ng-bind="$first ? \'Today\' : (day.date | date:\'EEE\')" class="ng-binding">Wed</span> <span class="extra ng-binding" data-ng-bind="day.date | date:\'dd/MM/yyyy\'">09/09/2015</span></div><span class="expander pull-right" data-ng-click="day.expanded = !day.expanded;"></span><div class="rating ng-pristine ng-untouched ng-valid ng-isolate-scope" star-rating="" ng-model="day.weather.rating"><ul class="star-rating">  <!-- ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --></ul></div><div class="details animate-slide"><div class="row"><div class="col-sm-6 horizontal-section"><h5>Swell:</h5><div class="row"><div class="col-xs-6">Height: <span data-ng-bind="day.weather.swell.height" class="ng-binding">1</span>m</div><div class="col-xs-6">Period: <span data-ng-bind="day.weather.swell.period" class="ng-binding">8</span>s</div></div></div><div class="col-sm-6 horizontal-section"><h5>Wind:</h5><div class="row"><div class="col-xs-6">Speed: <span data-ng-bind="day.weather.wind.speed" class="ng-binding">16</span>mph</div><div class="col-xs-6">Direction: <span data-ng-bind="day.weather.wind.direction" class="ng-binding">SE</span></div></div></div></div></div></div><!-- end ngRepeat: day in Forecast.forecast --><div class="forecast section ng-scope" ng-class="{expanded: day.expanded }" data-ng-repeat="day in Forecast.forecast"><div class="date"><span data-ng-bind="$first ? \'Today\' : (day.date | date:\'EEE\')" class="ng-binding">Thu</span> <span class="extra ng-binding" data-ng-bind="day.date | date:\'dd/MM/yyyy\'">10/09/2015</span></div><span class="expander pull-right" data-ng-click="day.expanded = !day.expanded;"></span><div class="rating ng-pristine ng-untouched ng-valid ng-isolate-scope" star-rating="" ng-model="day.weather.rating"><ul class="star-rating">  <!-- ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --></ul></div><div class="details animate-slide"><div class="row"><div class="col-sm-6 horizontal-section"><h5>Swell:</h5><div class="row"><div class="col-xs-6">Height: <span data-ng-bind="day.weather.swell.height" class="ng-binding">4</span>m</div><div class="col-xs-6">Period: <span data-ng-bind="day.weather.swell.period" class="ng-binding">5</span>s</div></div></div><div class="col-sm-6 horizontal-section"><h5>Wind:</h5><div class="row"><div class="col-xs-6">Speed: <span data-ng-bind="day.weather.wind.speed" class="ng-binding">19</span>mph</div><div class="col-xs-6">Direction: <span data-ng-bind="day.weather.wind.direction" class="ng-binding">SE</span></div></div></div></div></div></div><!-- end ngRepeat: day in Forecast.forecast --><div class="forecast section ng-scope" ng-class="{expanded: day.expanded }" data-ng-repeat="day in Forecast.forecast"><div class="date"><span data-ng-bind="$first ? \'Today\' : (day.date | date:\'EEE\')" class="ng-binding">Fri</span> <span class="extra ng-binding" data-ng-bind="day.date | date:\'dd/MM/yyyy\'">11/09/2015</span></div><span class="expander pull-right" data-ng-click="day.expanded = !day.expanded;"></span><div class="rating ng-pristine ng-untouched ng-valid ng-isolate-scope" star-rating="" ng-model="day.weather.rating"><ul class="star-rating">  <!-- ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" class="star ng-scope" ng-class="{filled: star.filled}">  </li><!-- end ngRepeat: star in stars --></ul></div><div class="details animate-slide"><div class="row"><div class="col-sm-6 horizontal-section"><h5>Swell:</h5><div class="row"><div class="col-xs-6">Height: <span data-ng-bind="day.weather.swell.height" class="ng-binding">4</span>m</div><div class="col-xs-6">Period: <span data-ng-bind="day.weather.swell.period" class="ng-binding">6</span>s</div></div></div><div class="col-sm-6 horizontal-section"><h5>Wind:</h5><div class="row"><div class="col-xs-6">Speed: <span data-ng-bind="day.weather.wind.speed" class="ng-binding">19</span>mph</div><div class="col-xs-6">Direction: <span data-ng-bind="day.weather.wind.direction" class="ng-binding">SE</span></div></div></div></div></div></div><!-- end ngRepeat: day in Forecast.forecast --></div></div>\n' +
    '\n' +
    '<div class="col-sm-4">\n' +
    '  <div class="card">\n' +
    '  <div class="section"><h3>Coast to Coast Surf School\n' +
    '</h3></div>\n' +
    '\n' +
    '<div class="section">\n' +
    '  <div class="row ctas">\n' +
    '  <div class="col-sm-4">\n' +
    '    <a>Book Lessons</a>\n' +
    '  </div><div class="col-sm-4">\n' +
    '    <a>Hire Kit</a>\n' +
    '  </div>\n' +
    '<div class="col-sm-4">\n' +
    '    <a>Buy Kit</a>\n' +
    '  </div>\n' +
    '  </div>\n' +
    '</div><div class="section rowclearfix">\n' +
    '\n' +
    '<div class="row">\n' +
    '<div class="col-sm-4"><img class="img-responsive" src="http://www.c2csurfschool.com/wp-content/themes/organic_natural/images/c2c-logo-90x100.png" style="\n' +
    '    float: left;\n' +
    '    /* margin-right: 10px; */\n' +
    '  "></div><div class="col-sm-8"><a href="http://www.c2csurfschool.com/">http://www.c2csurfschool.com/</a><p>Linkfield car park<br>\n' +
    'John Muir Country Park<br>\n' +
    'Belhaven<br>\n' +
    'Dunbar<br>\n' +
    'EH42 1XF</p></div>\n' +
    '\n' +
    '    </div></div>\n' +
    '</div><div class="card">\n' +
    '  <div class="section"> <h3>Belhaven Bay Caravan and Camping Park</h3></div><div class="section picture"></div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '</div></div>\n' +
    '  </div></div></div>\n' +
    '\n' +
    '\n' +
    '		<div class="preload hide" data-hide-on-load="">\n' +
    '			<div class="message">\n' +
    '				<h1>\n' +
    '					SurfSpotter\n' +
    '				</h1>\n' +
    '				<div class="spinner-wave">\n' +
    '				    <div></div>\n' +
    '				    <div></div>\n' +
    '				    <div></div>\n' +
    '				    <div></div>\n' +
    '				    <div></div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '\n' +
    '		</div>\n' +
    '\n' +
    '	<script>\n' +
    '	if (document.domain === \'surfspotter.eu\') {\n' +
    '	  (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n' +
    '	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n' +
    '	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n' +
    '	  })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n' +
    '\n' +
    '	  ga(\'create\', \'UA-61456361-3\', \'auto\');\n' +
    '	}\n' +
    '\n' +
    '	</script>\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '<div id="window-resizer-tooltip" style="display: none;"><a href="#" title="Edit settings"></a><span class="tooltipTitle">Window size: </span><span class="tooltipWidth" id="winWidth">1676</span> x <span class="tooltipHeight" id="winHeight">1027</span><br><span class="tooltipTitle">Viewport size: </span><span class="tooltipWidth" id="vpWidth">1676</span> x <span class="tooltipHeight" id="vpHeight">527</span></div>\n' +
    '<div id="window-resizer-tooltip"><a href="#" title="Edit settings"></a><span class="tooltipTitle">Window size: </span><span class="tooltipWidth" id="winWidth"></span> x <span class="tooltipHeight" id="winHeight"></span><br><span class="tooltipTitle">Viewport size: </span><span class="tooltipWidth" id="vpWidth"></span> x <span class="tooltipHeight" id="vpHeight"></span></div></body></html>\n' +
    '');
}]);

angular.module('surfspotter').run(['$templateCache', function($templateCache) {
  $templateCache.put('index.html',
    '<html ng-app="surfspotter">\n' +
    '	<head>\n' +
    '		<title>SurfSpotter</title>\n' +
    '		<meta http-equiv="Content-Type" content="text/html">\n' +
    '		<meta charset="utf-8">\n' +
    '		<meta name=viewport content="width=device-width, initial-scale=1">\n' +
    '		<meta name="description" content="Get notifications or emails about your favourite surf spots when the surf is good.">\n' +
    '		<meta name="author" content="Anthony P Tetlow">\n' +
    '		<meta name="keywords" content="surf report, surf forecast, surfing, surf notification">\n' +
    '		<link href=\'https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700\' rel=\'stylesheet\' type=\'text/css\'>\n' +
    '		<link rel="stylesheet" href="/styles/core.css">\n' +
    '\n' +
    '	    <base href="/">\n' +
    '	</head>\n' +
    '	<body class="body" data-ng-controller="AuthController as Auth">\n' +
    '		<div class="content__wrapper">\n' +
    '\n' +
    '			<div data-navigation-bar></div>\n' +
    '			<div data-notification></div>\n' +
    '\n' +
    '			<!-- <div class="alerts">\n' +
    '				<div class="alert alert--success">\n' +
    '					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio saepe minima iste eligendi\n' +
    '				<span class="alert__close"></span>\n' +
    '				</div>\n' +
    '				<div class="alert alert--success">\n' +
    '					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio saepe minima iste eligendi\n' +
    '				<span class="alert__close"></span>\n' +
    '				</div>\n' +
    '				<div class="alert alert--success">\n' +
    '					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio saepe minima iste eligendi\n' +
    '				<span class="alert__close"></span>\n' +
    '				</div>\n' +
    '			</div> -->\n' +
    '\n' +
    '			<div data-ui-view="content"></div>\n' +
    '			<div class="push"></div>\n' +
    '		</div>\n' +
    '		<!-- <div found-bug></div> -->\n' +
    '		<!-- <div class="preload" data-hide-on-load>\n' +
    '			<div class="message">\n' +
    '				<h1>\n' +
    '					SurfSpotter\n' +
    '				</h1>\n' +
    '				<div class="spinner-wave">\n' +
    '				    <div></div>\n' +
    '				    <div></div>\n' +
    '				    <div></div>\n' +
    '				    <div></div>\n' +
    '				    <div></div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '\n' +
    '		</div> -->\n' +
    '		<footer class="footer">\n' +
    '			Built by <a class="footer__link" href="http://anthonyptetlow.com">this guy</a>\n' +
    '			with <a class="footer__link" href="http://www.worldweatheronline.com/">World Weather Online</a>\n' +
    '		</footer>\n' +
    '	</body>\n' +
    '	<script>\n' +
    '	if (document.domain === \'surfspotter.eu\') {\n' +
    '	  (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n' +
    '	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n' +
    '	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n' +
    '	  })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n' +
    '\n' +
    '	  ga(\'create\', \'UA-61456361-3\', \'auto\');\n' +
    '	}\n' +
    '	</script>\n' +
    '	<script src="./js/app.js"></script>\n' +
    '</html>\n' +
    '');
}]);

angular.module('surfspotter').run(['$templateCache', function($templateCache) {
  $templateCache.put('index.static.html',
    '<html ng-app="surfspotter" class="ng-scope" hola_ext_inject="disabled"><head>\n' +
    '		<title>SurfSpotter</title>\n' +
    '		<meta http-equiv="Content-Type" content="text/html">\n' +
    '		<meta charset="utf-8">\n' +
    '		<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '		<meta name="description" content="Get notifications or emails about your favourite surf spots when the surf is good.">\n' +
    '		<meta name="author" content="Anthony P Tetlow">\n' +
    '		<meta name="keywords" content="surf report, surf forecast, surfing, surf notification">\n' +
    '\n' +
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700" media="all"><link rel="stylesheet" href="/styles/core.css" media="all"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700" media="all"><link rel="stylesheet" href="/styles/core.css" media="all">\n' +
    '<script>\n' +
    '(function(u){function loadCSS(e,t,n){"use strict";function r(){for(var t,i=0;i<d.length;i++)d[i].href&&d[i].href.indexOf(e)>-1&&(t=!0);t?o.media=n||"all":setTimeout(r)}var o=window.document.createElement("link"),i=t||window.document.getElementsByTagName("script")[0],d=window.document.styleSheets;return o.rel="stylesheet",o.href=e,o.media="only x",i.parentNode.insertBefore(o,i),r(),o}for(var i in u){loadCSS(u[i]);}}([\'https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700\',\'/styles/core.css\']));\n' +
    '</script>\n' +
    '	<noscript>\n' +
    '	&amp;lt;link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700" rel="stylesheet" type="text/css"&amp;gt;\n' +
    '	&amp;lt;link rel="stylesheet" href="/styles/core.css"&amp;gt;\n' +
    '	</noscript>\n' +
    '\n' +
    '\n' +
    '    <base href="/">\n' +
    '	</head>\n' +
    '	<body>\n' +
    '		<div class="grid">\n' +
    '			<div class="column-6">\n' +
    '				<h1>Grid</h1>\n' +
    '				<h2>Columns</h2>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '\n' +
    '		<div class="grid">\n' +
    '			<div class="column-1"><div class="card tall"></div></div>\n' +
    '			<div class="column-5"><div class="card tall"></div></div>\n' +
    '		</div>\n' +
    '\n' +
    '			<div class="grid">\n' +
    '			<div class="column-2"><div class="card tall"></div></div>\n' +
    '			<div class="column-4"><div class="card tall"></div></div>\n' +
    '		</div>\n' +
    '\n' +
    '		<div class="grid">\n' +
    '			<div class="column-3"><div class="card tall"></div></div>\n' +
    '			<div class="column-3"><div class="card tall"></div></div>\n' +
    '		</div>\n' +
    '		<div class="grid">\n' +
    '			<div class="column-4"><div class="card tall"></div></div>\n' +
    '			<div class="column-2"><div class="card tall"></div></div>\n' +
    '		</div>\n' +
    '		<div class="grid">\n' +
    '			<div class="column-5"><div class="card tall"></div></div>\n' +
    '			<div class="column-1"><div class="card tall"></div></div>\n' +
    '		</div>\n' +
    '\n' +
    '\n' +
    '		<div class="grid">\n' +
    '			<h2>Offsets</h2>\n' +
    '		</div>\n' +
    '		<div class="grid">\n' +
    '			<div class="column-5 offset-1"><div class="card tall"></div></div>\n' +
    '		</div>\n' +
    '\n' +
    '			<div class="grid">\n' +
    '			<div class="column-4 offset-2"><div class="card tall"></div></div>\n' +
    '		</div>\n' +
    '\n' +
    '		<div class="grid">\n' +
    '			<div class="column-3 offset-3"><div class="card tall"></div></div>\n' +
    '		</div>\n' +
    '		<div class="grid">\n' +
    '			<div class="column-2 offset-4"><div class="card tall"></div></div>\n' +
    '		</div>\n' +
    '		<div class="grid">\n' +
    '			<div class="column-1 offset-5"><div class="card tall"></div></div>\n' +
    '		</div>\n' +
    '\n' +
    '\n' +
    '	</body></html>\n' +
    '');
}]);
