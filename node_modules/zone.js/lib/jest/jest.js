/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
'use strict';
Zone.__load_patch('jest', function (context, Zone) {
    if (typeof jest === 'undefined' || jest['__zone_patch__']) {
        return;
    }
    jest['__zone_patch__'] = true;
    if (typeof Zone === 'undefined') {
        throw new Error('Missing Zone.js');
    }
    var ProxyZoneSpec = Zone['ProxyZoneSpec'];
    var SyncTestZoneSpec = Zone['SyncTestZoneSpec'];
    if (!ProxyZoneSpec) {
        throw new Error('Missing ProxyZoneSpec');
    }
    var rootZone = Zone.current;
    var syncZone = rootZone.fork(new SyncTestZoneSpec('jest.describe'));
    var proxyZone = rootZone.fork(new ProxyZoneSpec());
    function wrapDescribeFactoryInZone(originalJestFn) {
        return function () {
            var tableArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                tableArgs[_i] = arguments[_i];
            }
            var originalDescribeFn = originalJestFn.apply(this, tableArgs);
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                args[1] = wrapDescribeInZone(args[1]);
                return originalDescribeFn.apply(this, args);
            };
        };
    }
    function wrapTestFactoryInZone(originalJestFn) {
        return function () {
            var tableArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                tableArgs[_i] = arguments[_i];
            }
            var testFn = originalJestFn.apply(this, tableArgs);
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                args[1] = wrapTestInZone(args[1]);
                return testFn.apply(this, args);
            };
        };
    }
    /**
     * Gets a function wrapping the body of a jest `describe` block to execute in a
     * synchronous-only zone.
     */
    function wrapDescribeInZone(describeBody) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return syncZone.run(describeBody, this, args);
        };
    }
    /**
     * Gets a function wrapping the body of a jest `it/beforeEach/afterEach` block to
     * execute in a ProxyZone zone.
     * This will run in the `testProxyZone`.
     */
    function wrapTestInZone(testBody) {
        if (typeof testBody !== 'function') {
            return testBody;
        }
        // The `done` callback is only passed through if the function expects at least one argument.
        // Note we have to make a function with correct number of arguments, otherwise jest will
        // think that all functions are sync or async.
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return proxyZone.run(testBody, this, args);
        };
    }
    ['describe', 'xdescribe', 'fdescribe'].forEach(function (methodName) {
        var originalJestFn = context[methodName];
        if (context[Zone.__symbol__(methodName)]) {
            return;
        }
        context[Zone.__symbol__(methodName)] = originalJestFn;
        context[methodName] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args[1] = wrapDescribeInZone(args[1]);
            return originalJestFn.apply(this, args);
        };
        context[methodName].each = wrapDescribeFactoryInZone(originalJestFn.each);
    });
    context.describe.only = context.fdescribe;
    context.describe.skip = context.xdescribe;
    ['it', 'xit', 'fit', 'test', 'xtest'].forEach(function (methodName) {
        var originalJestFn = context[methodName];
        if (context[Zone.__symbol__(methodName)]) {
            return;
        }
        context[Zone.__symbol__(methodName)] = originalJestFn;
        context[methodName] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args[1] = wrapTestInZone(args[1]);
            return originalJestFn.apply(this, args);
        };
        context[methodName].each = wrapTestFactoryInZone(originalJestFn.each);
        context[methodName].todo = originalJestFn.todo;
    });
    context.it.only = context.fit;
    context.it.skip = context.xit;
    context.test.only = context.fit;
    context.test.skip = context.xit;
    ['beforeEach', 'afterEach', 'beforeAll', 'afterAll'].forEach(function (methodName) {
        var originalJestFn = context[methodName];
        if (context[Zone.__symbol__(methodName)]) {
            return;
        }
        context[Zone.__symbol__(methodName)] = originalJestFn;
        context[methodName] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args[0] = wrapTestInZone(args[0]);
            return originalJestFn.apply(this, args);
        };
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3pvbmUuanMvbGliL2plc3QvamVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxZQUFZLENBQUM7QUFFYixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFDLE9BQVksRUFBRSxJQUFjO0lBQ3JELElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1FBQ3pELE9BQU87S0FDUjtJQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUc5QixJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsRUFBRTtRQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFNLGFBQWEsR0FBSSxJQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDckQsSUFBTSxnQkFBZ0IsR0FBSSxJQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUUzRCxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUMxQztJQUVELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDOUIsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDdEUsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFFckQsU0FBUyx5QkFBeUIsQ0FBQyxjQUF3QjtRQUN6RCxPQUFPO1lBQXdCLG1CQUFtQjtpQkFBbkIsVUFBbUIsRUFBbkIscUJBQW1CLEVBQW5CLElBQW1CO2dCQUFuQiw4QkFBbUI7O1lBQ2hELElBQU0s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QyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBRWhDLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTtRQUNyRSxJQUFJLGNBQWMsR0FBYSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO1lBQ3hDLE9BQU87U0FDUjtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRztZQUF3QixjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O1lBQzFELElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblpvbmUuX19sb2FkX3BhdGNoKCdqZXN0JywgKGNvbnRleHQ6IGFueSwgWm9uZTogWm9uZVR5cGUpID0+IHtcbiAgaWYgKHR5cGVvZiBqZXN0ID09PSAndW5kZWZpbmVkJyB8fCBqZXN0WydfX3pvbmVfcGF0Y2hfXyddKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgamVzdFsnX196b25lX3BhdGNoX18nXSA9IHRydWU7XG5cblxuICBpZiAodHlwZW9mIFpvbmUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFpvbmUuanMnKTtcbiAgfVxuXG4gIGNvbnN0IFByb3h5Wm9uZVNwZWMgPSAoWm9uZSBhcyBhbnkpWydQcm94eVpvbmVTcGVjJ107XG4gIGNvbnN0IFN5bmNUZXN0Wm9uZVNwZWMgPSAoWm9uZSBhcyBhbnkpWydTeW5jVGVzdFpvbmVTcGVjJ107XG5cbiAgaWYgKCFQcm94eVpvbmVTcGVjKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFByb3h5Wm9uZVNwZWMnKTtcbiAgfVxuXG4gIGNvbnN0IHJvb3Rab25lID0gWm9uZS5jdXJyZW50O1xuICBjb25zdCBzeW5jWm9uZSA9IHJvb3Rab25lLmZvcmsobmV3IFN5bmNUZXN0Wm9uZVNwZWMoJ2plc3QuZGVzY3JpYmUnKSk7XG4gIGNvbnN0IHByb3h5Wm9uZSA9IHJvb3Rab25lLmZvcmsobmV3IFByb3h5Wm9uZVNwZWMoKSk7XG5cbiAgZnVuY3Rpb24gd3JhcERlc2NyaWJlRmFjdG9yeUluWm9uZShvcmlnaW5hbEplc3RGbjogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odGhpczogdW5rbm93biwgLi4udGFibGVBcmdzOiBhbnlbXSkge1xuICAgICAgY29uc3Qgb3JpZ2luYWxEZXNjcmliZUZuID0gb3JpZ2luYWxKZXN0Rm4uYXBwbHkodGhpcywgdGFibGVBcmdzKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbih0aGlzOiB1bmtub3duLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBhcmdzWzFdID0gd3JhcERlc2NyaWJlSW5ab25lKGFyZ3NbMV0pO1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxEZXNjcmliZUZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgfTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcFRlc3RGYWN0b3J5SW5ab25lKG9yaWdpbmFsSmVzdEZuOiBGdW5jdGlvbikge1xuICAgIHJldHVybiBmdW5jdGlvbih0aGlzOiB1bmtub3duLCAuLi50YWJsZUFyZ3M6IGFueVtdKSB7XG4gICAgICBjb25zdCB0ZXN0Rm4gPSBvcmlnaW5hbEplc3RGbi5hcHBseSh0aGlzLCB0YWJsZUFyZ3MpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRoaXM6IHVua25vd24sIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGFyZ3NbMV0gPSB3cmFwVGVzdEluWm9uZShhcmdzWzFdKTtcbiAgICAgICAgcmV0dXJuIHRlc3RGbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgZnVuY3Rpb24gd3JhcHBpbmcgdGhlIGJvZHkgb2YgYSBqZXN0IGBkZXNjcmliZWAgYmxvY2sgdG8gZXhlY3V0ZSBpbiBhXG4gICAqIHN5bmNocm9ub3VzLW9ubHkgem9uZS5cbiAgICovXG4gIGZ1bmN0aW9uIHdyYXBEZXNjcmliZUluWm9uZShkZXNjcmliZUJvZHk6IEZ1bmN0aW9uKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiBmdW5jdGlvbih0aGlzOiB1bmtub3duLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgcmV0dXJuIHN5bmNab25lLnJ1bihkZXNjcmliZUJvZHksIHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGZ1bmN0aW9uIHdyYXBwaW5nIHRoZSBib2R5IG9mIGEgamVzdCBgaXQvYmVmb3JlRWFjaC9hZnRlckVhY2hgIGJsb2NrIHRvXG4gICAqIGV4ZWN1dGUgaW4gYSBQcm94eVpvbmUgem9uZS5cbiAgICogVGhpcyB3aWxsIHJ1biBpbiB0aGUgYHRlc3RQcm94eVpvbmVgLlxuICAgKi9cbiAgZnVuY3Rpb24gd3JhcFRlc3RJblpvbmUodGVzdEJvZHk6IEZ1bmN0aW9uKTogRnVuY3Rpb24ge1xuICAgIGlmICh0eXBlb2YgdGVzdEJvZHkgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0ZXN0Qm9keTtcbiAgICB9XG4gICAgLy8gVGhlIGBkb25lYCBjYWxsYmFjayBpcyBvbmx5IHBhc3NlZCB0aHJvdWdoIGlmIHRoZSBmdW5jdGlvbiBleHBlY3RzIGF0IGxlYXN0IG9uZSBhcmd1bWVudC5cbiAgICAvLyBOb3RlIHdlIGhhdmUgdG8gbWFrZSBhIGZ1bmN0aW9uIHdpdGggY29ycmVjdCBudW1iZXIgb2YgYXJndW1lbnRzLCBvdGhlcndpc2UgamVzdCB3aWxsXG4gICAgLy8gdGhpbmsgdGhhdCBhbGwgZnVuY3Rpb25zIGFyZSBzeW5jIG9yIGFzeW5jLlxuICAgIHJldHVybiBmdW5jdGlvbih0aGlzOiB1bmtub3duLCAuLi5hcmdzOiBhbnlbXSkgeyByZXR1cm4gcHJveHlab25lLnJ1bih0ZXN0Qm9keSwgdGhpcywgYXJncyk7IH07XG4gIH1cblxuICBbJ2Rlc2NyaWJlJywgJ3hkZXNjcmliZScsICdmZGVzY3JpYmUnXS5mb3JFYWNoKG1ldGhvZE5hbWUgPT4ge1xuICAgIGxldCBvcmlnaW5hbEplc3RGbjogRnVuY3Rpb24gPSBjb250ZXh0W21ldGhvZE5hbWVdO1xuICAgIGlmIChjb250ZXh0W1pvbmUuX19zeW1ib2xfXyhtZXRob2ROYW1lKV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29udGV4dFtab25lLl9fc3ltYm9sX18obWV0aG9kTmFtZSldID0gb3JpZ2luYWxKZXN0Rm47XG4gICAgY29udGV4dFttZXRob2ROYW1lXSA9IGZ1bmN0aW9uKHRoaXM6IHVua25vd24sIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBhcmdzWzFdID0gd3JhcERlc2NyaWJlSW5ab25lKGFyZ3NbMV0pO1xuICAgICAgcmV0dXJuIG9yaWdpbmFsSmVzdEZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gICAgY29udGV4dFttZXRob2ROYW1lXS5lYWNoID0gd3JhcERlc2NyaWJlRmFjdG9yeUluWm9uZSgob3JpZ2luYWxKZXN0Rm4gYXMgYW55KS5lYWNoKTtcbiAgfSk7XG4gIGNvbnRleHQuZGVzY3JpYmUub25seSA9IGNvbnRleHQuZmRlc2NyaWJlO1xuICBjb250ZXh0LmRlc2NyaWJlLnNraXAgPSBjb250ZXh0LnhkZXNjcmliZTtcblxuICBbJ2l0JywgJ3hpdCcsICdmaXQnLCAndGVzdCcsICd4dGVzdCddLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XG4gICAgbGV0IG9yaWdpbmFsSmVzdEZuOiBGdW5jdGlvbiA9IGNvbnRleHRbbWV0aG9kTmFtZV07XG4gICAgaWYgKGNvbnRleHRbWm9uZS5fX3N5bWJvbF9fKG1ldGhvZE5hbWUpXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb250ZXh0W1pvbmUuX19zeW1ib2xfXyhtZXRob2ROYW1lKV0gPSBvcmlnaW5hbEplc3RGbjtcbiAgICBjb250ZXh0W21ldGhvZE5hbWVdID0gZnVuY3Rpb24odGhpczogdW5rbm93biwgLi4uYXJnczogYW55W10pIHtcbiAgICAgIGFyZ3NbMV0gPSB3cmFwVGVzdEluWm9uZShhcmdzWzFdKTtcbiAgICAgIHJldHVybiBvcmlnaW5hbEplc3RGbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICAgIGNvbnRleHRbbWV0aG9kTmFtZV0uZWFjaCA9IHdyYXBUZXN0RmFjdG9yeUluWm9uZSgob3JpZ2luYWxKZXN0Rm4gYXMgYW55KS5lYWNoKTtcbiAgICBjb250ZXh0W21ldGhvZE5hbWVdLnRvZG8gPSAob3JpZ2luYWxKZXN0Rm4gYXMgYW55KS50b2RvO1xuICB9KTtcblxuICBjb250ZXh0Lml0Lm9ubHkgPSBjb250ZXh0LmZpdDtcbiAgY29udGV4dC5pdC5za2lwID0gY29udGV4dC54aXQ7XG4gIGNvbnRleHQudGVzdC5vbmx5ID0gY29udGV4dC5maXQ7XG4gIGNvbnRleHQudGVzdC5za2lwID0gY29udGV4dC54aXQ7XG5cbiAgWydiZWZvcmVFYWNoJywgJ2FmdGVyRWFjaCcsICdiZWZvcmVBbGwnLCAnYWZ0ZXJBbGwnXS5mb3JFYWNoKG1ldGhvZE5hbWUgPT4ge1xuICAgIGxldCBvcmlnaW5hbEplc3RGbjogRnVuY3Rpb24gPSBjb250ZXh0W21ldGhvZE5hbWVdO1xuICAgIGlmIChjb250ZXh0W1pvbmUuX19zeW1ib2xfXyhtZXRob2ROYW1lKV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29udGV4dFtab25lLl9fc3ltYm9sX18obWV0aG9kTmFtZSldID0gb3JpZ2luYWxKZXN0Rm47XG4gICAgY29udGV4dFttZXRob2ROYW1lXSA9IGZ1bmN0aW9uKHRoaXM6IHVua25vd24sIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBhcmdzWzBdID0gd3JhcFRlc3RJblpvbmUoYXJnc1swXSk7XG4gICAgICByZXR1cm4gb3JpZ2luYWxKZXN0Rm4uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfSk7XG59KTtcbiJdfQ==