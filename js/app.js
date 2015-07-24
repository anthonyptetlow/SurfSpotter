"use strict";angular.module("surfspotter",["ngResource","ngStorage","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(t,e){e.otherwise("/"),t.state("app",{url:"/"}).state("forecast",{url:"/forecast/:spotId",templateUrl:"./modules/Surf/partials/Forecast.html",controller:"ForecastController as Forecast",resolve:{forecast:function(t,e){return t.getForecast(e.spotId)}}}).state("signIn",{url:"/signIn",templateUrl:"./modules/Authentication/partials/SignIn.html",controller:"SignInController as SignIn"}).state("signUp",{url:"/signUp",templateUrl:"./modules/Authentication/partials/SignUp.html",controller:"SignUpController as SignUp"})}]),angular.module("surfspotter").directive("hideOnLoad",[function(){return{priority:-1e3,link:function(t,e){t.$on("$viewContentLoaded",function(){e.addClass("hide")})}}}]),angular.module("surfspotter").directive("navigationBar",["$state","AuthService","NotificationService",function(t,e,r){return{controller:function(){var o=this;o.isUserAuthenticated=e.isAuthenticated,o.signOut=function(){e.clearToken(),r.addToNextState("You are now signed out","success",2e3),t.go("app",{},{reload:!0})},o.getUser=e.getUser},controllerAs:"NavigationBar",restrict:"A",templateUrl:"/modules/Navigation/partials/NavigationBar.html",replace:!0,link:function(){}}}]),angular.module("surfspotter").factory("RequestInteceptor",["$q",function(t){return{request:function(t){return 0===t.url.indexOf("/api/")&&"GET"===t.method&&(t.url+=(t.url.indexOf("?")>0?"&":"?")+(new Date).getTime()),t},response:function(e){return e||t.when(e)},responseError:function(e){return t.reject(e)}}}]),angular.module("surfspotter").config(["$httpProvider",function(t){t.interceptors.push("RequestInteceptor")}]),angular.module("surfspotter").controller("AuthController",["AuthService",function(t){var e=this;e.isSignedin=function(){return t.isAuthenticated()}}]),angular.module("surfspotter").controller("SignInController",["$state","AuthService","UserService","NotificationService",function(t,e,r,o){var n=this;n.authenticate=function(n,i){r.authenticate({username:n,password:i}).$promise.then(function(t){return r.checkToken({token:t.token}).$promise}).then(function(r){e.storeUser(r),o.addToNextState("You are now logged in, have a great time :)","success",2e3),t.go("app")})}}]),angular.module("surfspotter").controller("SignUpController",["$state","UserService",function(t,e){var r=this;r.register=function(o){if(r.error={},angular.isUndefined(o))r.error.user="Please input information into the fields.";else if(o.password!==o.confirmedPassword)r.error.password="Passwords Don't Match.";else{var n=angular.copy(o);delete n.confirmedPassword,e.save(n).$promise.then(function(){t.go("signIn")})}}}]),angular.module("surfspotter").factory("TokenInterceptor",["$q","$injector","AuthService","NotificationService",function(t,e,r,o){return{request:function(t){return t.headers=t.headers||{},r.isAuthenticated()&&0===t.url.indexOf("/api/")&&(t.url+=(t.url.indexOf("?")>0?"&":"?")+"token="+r.getToken()),t},requestError:function(e){return t.reject(e)},responseError:function(n){return null!=n&&401===n.status&&r.isAuthenticated()&&(r.clearToken(),o.addToNextState("You are not logged in or your sesison has expired. Please login again.","danger",null),e.get("$state").go("signIn")),t.reject(n)}}}]),angular.module("surfspotter").config(["$httpProvider",function(t){t.interceptors.push("TokenInterceptor")}]),angular.module("surfspotter").service("AuthService",["$q","$sessionStorage",function(t,e){function r(t){e.token=t}function o(t){e.user=t,t.token&&r(t.token)}function n(){return e.token}function i(){return e.user}function a(){delete e.token}function s(){a(),delete e.user}function u(){return angular.isDefined(e.token)}return{storeToken:r,storeUser:o,isAuthenticated:u,getToken:n,getUser:i,clearToken:a,clearUser:s}}]),angular.module("surfspotter").service("UserService",["$resource",function(t){return t("/api/user/:username",{},{authenticate:{method:"POST",url:"/api/user/auth",isArray:!1},checkToken:{method:"GET",url:"/api/token/:token",isArray:!1}})}]),angular.module("surfspotter").directive("notification",["$timeout","NotificationService",function(t,e){return{controller:function(){var t=this;t.removeNotification=function(e){t.list.splice(e,1)}},controllerAs:"Notifications",templateUrl:"/modules/Notifications/partials/Notification.html",link:function(r,o,n,i){i.list=[],r.$on("$stateChangeSuccess",function(){var r=e.shiftAllNotifications();r.forEach(function(e){angular.isDefined(e.type)?e[e.type]=!0:e.info=!0,i.list.push(e),null!==e.timeout&&t(function(){var t=i.list.indexOf(e);i.list.splice(t,1)},e.timeout?e.timeout:4e3)})})}}}]),angular.module("surfspotter").service("NotificationService",["$localStorage",function(t){function e(e,r,o){t.notifications.push({message:e,type:r,timeout:o})}function r(){return t.notifications.shift()}function o(){var e=t.notifications;return t.notifications=[],e}return angular.isUndefined(t.notifications)&&(t.notifications=[]),{addToNextState:e,shiftNotification:r,shiftAllNotifications:o}}]),angular.module("surfspotter").controller("ForecastController",["$state","SurfService","forecast",function(t,e,r){var o=this;o.place=r.place,o.forecast=r.forecast,o.setFavorite=function(r){r?e.saveFavourite(o.place.id).then(function(){t.reload()}):e.removeFavourite(o.place.id).then(function(){t.reload()})}}]),angular.module("surfspotter").controller("LocationController",["$timeout","$rootScope","SurfService",function(t,e,r){var o,n=this;n.findLocations=function(e){o&&t.cancel(o),e.length>0?o=t(function(){r.findLocations(e).then(function(t){n.locations=t})},300):n.locations=[]},e.$on("$stateChangeSuccess",function(){delete n.locationQuery,delete n.locations})}]),angular.module("surfspotter").directive("locationSearch",[function(){return{scope:{},controller:"LocationController",controllerAs:"Location",restrict:"A",templateUrl:"./modules/Surf/partials/Locations.html",link:function(){}}}]),angular.module("surfspotter").service("SurfService",["$http","$q","$resource",function(t,e,r){function o(t){return u.get({spotId:t}).$promise}function n(t){return c.find({partial:t}).$promise}function i(t){return c.setFavourite({locationId:t}).$promise}function a(){return c.getFavourites().$promise}function s(t){return c.removeFavourite({locationId:t}).$promise}var u=r("/api/msw/forecast/:spotId",{}),c=r("/api/msw/locations",{},{find:{method:"GET",url:"/api/msw/locations/find/:partial",isArray:!0},getFavourite:{method:"GET",url:"/api/msw/locations/favourite/",isArray:!0},setFavourite:{method:"POST",url:"/api/msw/locations/favourite/"},removeFavourite:{method:"DELETE",url:"/api/msw/locations/favourite/"}});return{getForecast:o,findLocations:n,getFavourites:a,saveFavourite:i,removeFavourite:s}}]);