'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var semver = require('semver');
var regex = {
    condition: /^([<=>]+)?/,
    majorVersion: /\d+/,
    minMax: /^>=([\d]+\.[\d]+\.[\d]+(?:-[\w.]+)?) <=?([\d]+\.[\d]+\.[\d]+)$/,
    version: /([\d]+\.[\d]+\.[\d]+(?:-[\w.]+)?)$/,
    whitespace: /\s+/
};

function createShorthand(range) {
    var match = regex.minMax.exec(range);
    if (!match) {
        return range;
    }

    var _match$slice = match.slice(1),
        _match$slice2 = _slicedToArray(_match$slice, 2),
        min = _match$slice2[0],
        max = _match$slice2[1];

    if (min === max) {
        // Exact range
        return min;
    }

    // Stable range with an inclusive max version
    if (range.includes('<=')) {
        return `${min} - ${max}`;
    }

    // Special handling for major version 0
    if (semver.major(min) === 0 && semver.major(max) === 0) {
        // ^0.0.5
        if (semver.minor(min) === 0 && semver.minor(max) === 0) {
            return `^${min}`;
        }

        // ~0.0.5
        if (semver.minor(min) === 0) {
            return `~${min}`;
        }

        // ^0.5.0
        return `^${min}`;
    }

    if (semver.major(min) !== semver.major(max)) {
        if (semver.major(min) === 0) {
            return '0';
        }

        return `^${min}`;
    }

    return `~${min}`;
}

function ensureCompatible(range) {
    var _parseRange = parseRange(range),
        prerelease = _parseRange.prerelease,
        version = _parseRange.version;

    for (var _len = arguments.length, bounds = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        bounds[_key - 1] = arguments[_key];
    }

    bounds.forEach(function (bound) {
        if (!bound) {
            return;
        }

        if (semver.satisfies(version, bound) && semver.intersects(range, bound)) {
            return;
        }

        if (prerelease) {
            if (parseRange(bound).prerelease) {
                // If both bounds are pre-release versions, either can satisfy the other
                if (semver.satisfies(parseRange(bound).version, range)) {
                    return;
                }
            } else if (semver.satisfies(version, `${range} ${bound}`)) {
                // If only our version is a pre-release version, don't fail on 1.0.0-a <2.0.0
                return;
            }
        }

        throw new Error(`Range ${range} is not compatible with ${bound}`);
    });
}

function expandRanges() {
    for (var _len2 = arguments.length, ranges = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        ranges[_key2] = arguments[_key2];
    }

    return ranges.reduce(function (result, range) {
        var validRange = semver.validRange(range);
        var validRanges = validRange.split(regex.whitespace);
        return union(result, validRanges);
    }, []);
}

function formatIntersection(_ref) {
    var _ref$lowerBound = _ref.lowerBound,
        lowerBound = _ref$lowerBound === undefined ? '' : _ref$lowerBound,
        _ref$upperBound = _ref.upperBound,
        upperBound = _ref$upperBound === undefined ? '' : _ref$upperBound;

    if (lowerBound === upperBound) {
        return lowerBound;
    }

    return `${lowerBound} ${upperBound}`.trim();
}

function intersect() {
    for (var _len3 = arguments.length, ranges = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        ranges[_key3] = arguments[_key3];
    }

    ranges = expandRanges.apply(undefined, _toConsumableArray(ranges));

    var bounds = ranges.reduce(function (_ref2, range) {
        var lowerBound = _ref2.lowerBound,
            upperBound = _ref2.upperBound;

        var _parseRange2 = parseRange(range),
            condition = _parseRange2.condition,
            prerelease = _parseRange2.prerelease;

        if (prerelease) {
            ensureCompatible(range, lowerBound, upperBound);
        }

        // Exact version number specified, must be compatible with both bounds
        if (condition === '=') {
            ensureCompatible(range, lowerBound, upperBound);
            lowerBound = '>=' + range;
            upperBound = '<=' + range;
        }

        // New lower bound must be less than existing upper bound
        if (condition.startsWith('>')) {
            ensureCompatible(range, upperBound);
            lowerBound = mergeBounds(range, lowerBound);
        }

        // And vice versa
        if (condition.startsWith('<')) {
            ensureCompatible(range, lowerBound);
            upperBound = mergeBounds(range, upperBound);
        }

        return { lowerBound, upperBound };
    }, {});

    var range = formatIntersection(bounds);
    var shorthand = createShorthand(range);

    return shorthand;
}

function mergeBounds(range, bound) {
    if (!bound) {
        return range;
    }

    var _parseRange3 = parseRange(range),
        condition = _parseRange3.condition,
        version = _parseRange3.version;

    var boundingVersion = parseRange(bound).version;
    var comparator = condition.startsWith('<') ? semver.lt : semver.gt;
    var strict = condition === '<' || condition === '>';

    if (comparator(version, boundingVersion)) {
        return range;
    } else if (strict && semver.eq(version, boundingVersion)) {
        return range;
    } else {
        return bound;
    }
}

function parseRange(range) {
    var condition = regex.condition.exec(range)[1] || '=';
    var version = regex.version.exec(range)[1];
    var prerelease = semver.prerelease(version);
    return { condition, prerelease, version };
}

function union(a, b) {
    return b.reduce(function (result, value) {
        if (result.indexOf(value) === -1) {
            result.push(value);
        }
        return result;
    }, a);
}

module.exports.default = intersect;

module.exports.createShorthand = createShorthand;
module.exports.ensureCompatible = ensureCompatible;
module.exports.expandRanges = expandRanges;
module.exports.formatIntersection = formatIntersection;
module.exports.intersect = intersect;
module.exports.mergeBounds = mergeBounds;
module.exports.parseRange = parseRange;
module.exports.union = union;