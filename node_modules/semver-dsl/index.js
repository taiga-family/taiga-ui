"use strict";
var semver = require("semver");
exports.SemVerDSL = function (target, lastPredicate) {
    if (lastPredicate === void 0) { lastPredicate = function () { return true; }; }
    function createBoundContext(lastPredicate) {
        return Object.create({}, {
            else: {
                value: function (callback) {
                    if (!lastPredicate())
                        callback();
                }
            },
            elseIf: {
                get: function () {
                    return exports.SemVerDSL(target, function () { return !lastPredicate(); });
                }
            }
        });
    }
    ;
    var dsl = {
        gte: function (version, callback) {
            var predicate = function () { return semver.gte(target, version) && lastPredicate(); };
            if (predicate())
                callback();
            return createBoundContext(predicate);
        },
        lte: function (version, callback) {
            var predicate = function () { return semver.lte(target, version) && lastPredicate(); };
            if (predicate())
                callback();
            return createBoundContext(predicate);
        },
        gt: function (version, callback) {
            var predicate = function () { return semver.gt(target, version) && lastPredicate(); };
            if (predicate())
                callback();
            return createBoundContext(predicate);
        },
        lt: function (version, callback) {
            var predicate = function () { return semver.lt(target, version) && lastPredicate(); };
            if (predicate())
                callback();
            return createBoundContext(predicate);
        },
        eq: function (version, callback) {
            var predicate = function () { return semver.eq(target, version) && lastPredicate(); };
            if (predicate())
                callback();
            return createBoundContext(predicate);
        },
        neq: function (version, callback) {
            var predicate = function () { return semver.neq(target, version) && lastPredicate(); };
            if (predicate())
                callback();
            return createBoundContext(predicate);
        },
        between: function (v1, v2, callback) {
            var predicate = function () { return semver.gte(target, v1) && semver.lte(target, v2) && lastPredicate(); };
            if (predicate())
                callback();
            return createBoundContext(predicate);
        }
    };
    return dsl;
};
//# sourceMappingURL=index.js.map