/**
 * Description:
 *     removes white space from text. useful for html values that cannot have spaces
 * Usage:
 *   {{some_text | nospace}}
 */
angular.module('surfspotter').filter('spaceToDash', function () {
    return function (value) {
        return (!value) ? '' : value.trim().replace(/ /g, '-').replace('\'', '-');
    };
});
