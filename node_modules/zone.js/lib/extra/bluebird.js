"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('bluebird', function (global, Zone, api) {
    // TODO: @JiaLiPassion, we can automatically patch bluebird
    // if global.Promise = Bluebird, but sometimes in nodejs,
    // global.Promise is not Bluebird, and Bluebird is just be
    // used by other libraries such as sequelize, so I think it is
    // safe to just expose a method to patch Bluebird explicitly
    var BLUEBIRD = 'bluebird';
    Zone[Zone.__symbol__(BLUEBIRD)] = function patchBluebird(Bluebird) {
        // patch method of Bluebird.prototype which not using `then` internally
        var bluebirdApis = ['then', 'spread', 'finally'];
        bluebirdApis.forEach(function (bapi) {
            api.patchMethod(Bluebird.prototype, bapi, function (delegate) { return function (self, args) {
                var zone = Zone.current;
                var _loop_1 = function (i) {
                    var func = args[i];
                    if (typeof func === 'function') {
                        args[i] = function () {
                            var argSelf = this;
                            var argArgs = arguments;
                            return new Bluebird(function (res, rej) {
                                zone.scheduleMicroTask('Promise.then', function () {
                                    try {
                                        res(func.apply(argSelf, argArgs));
                                    }
                                    catch (error) {
                                        rej(error);
                                    }
                                });
                            });
                        };
                    }
                };
                for (var i = 0; i < args.length; i++) {
                    _loop_1(i);
                }
                return delegate.apply(self, args);
            }; });
        });
        if (typeof window !== 'undefined') {
            window.addEventListener('unhandledrejection', function (event) {
                var error = event.detail && event.detail.reason;
                if (error && error.isHandledByZone) {
                    event.preventDefault();
                    if (typeof event.stopImmediatePropagation === 'function') {
                        event.stopImmediatePropagation();
                    }
                }
            });
        }
        else if (typeof process !== 'undefined') {
            process.on('unhandledRejection', function (reason, p) {
                if (reason && reason.isHandledByZone) {
                    var listeners_1 = process.listeners('unhandledRejection');
                    if (listeners_1) {
                        // remove unhandledRejection listeners so the callback
                        // will not be triggered.
                        process.removeAllListeners('unhandledRejection');
                        process.nextTick(function () {
                            listeners_1.forEach(function (listener) { return process.on('unhandledRejection', listener); });
                        });
                    }
                }
            });
        }
        Bluebird.onPossiblyUnhandledRejection(function (e, promise) {
            try {
                Zone.current.runGuarded(function () {
                    e.isHandledByZone = true;
                    throw e;
                });
            }
            catch (err) {
                err.isHandledByZone = false;
                api.onUnhandledError(err);
            }
        });
        // override global promise
        global[api.symbol('ZoneAwarePromise')] = Bluebird;
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmx1ZWJpcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy96b25lLmpzL2xpYi9leHRyYS9ibHVlYmlyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBQyxNQUFXLEVBQUUsSUFBYyxFQUFFLEdBQWlCO0lBQzNFLDJEQUEyRDtJQUMzRCx5REFBeUQ7SUFDekQsMERBQTBEO0lBQzFELDhEQUE4RDtJQUM5RCw0REFBNEQ7SUFDNUQsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzNCLElBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsU0FBUyxhQUFhLENBQUMsUUFBYTtRQUM3RSx1RUFBdUU7UUFDdkUsSUFBTSxZQUFZLEdBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzdELFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ3ZCLEdBQUcsQ0FBQyxXQUFXLENBQ1gsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBQyxRQUFrQixJQUFLLE9BQUEsVUFBQyxJQUFTLEVBQUUsSUFBVztnQkFDdkUsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3Q0FDakIsQ0FBQztvQkFDUixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLElBQUksT0FBTyxJQUFJLEtBQUssVUFBVSxFQUFFO3dCQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUc7NEJBQ1IsSUFBTSxPQUFPLEdBQVEsSUFBSSxDQUFDOzRCQUMxQixJQUFNLE9BQU8sR0FBUSxTQUFTLENBQUM7NEJBQy9CLE9BQU8sSUFBSSxRQUFRLENBQUMsVUFBQyxHQUFRLEVBQUUsR0FBUTtnQ0FDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRTtvQ0FDckMsSUFBSTt3Q0FDRixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztxQ0FDbkM7b0NBQUMsT0FBTyxLQUFLLEVBQUU7d0NBQ2QsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FDQUNaO2dDQUNILENBQUMsQ0FBQyxDQUFDOzRCQUNMLENBQUMsQ0FBQyxDQUFDO3dCQUNMLENBQUMsQ0FBQztxQkFDSDs7Z0JBaEJILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTs0QkFBM0IsQ0FBQztpQkFpQlQ7Z0JBQ0QsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwQyxDQUFDLEVBckJpRCxDQXFCakQsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNqQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxLQUFVO2dCQUMvRCxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNsRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsZUFBZSxFQUFFO29CQUNsQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksT0FBTyxLQUFLLENBQUMsd0JBQXdCLEtBQUssVUFBVSxFQUFFO3dCQUN4RCxLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztxQkFDbEM7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDekMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLE1BQVcsRUFBRSxDQUFNO2dCQUNuRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsZUFBZSxFQUFFO29CQUNwQyxJQUFNLFdBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7b0JBQzFELElBQUksV0FBUyxFQUFFO3dCQUNiLHNEQUFzRDt3QkFDdEQseUJBQXlCO3dCQUN6QixPQUFPLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQzt3QkFDakQsT0FBTyxDQUFDLFFBQVEsQ0FBQzs0QkFDZixXQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsT0FBTyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFDO3dCQUM1RSxDQUFDLENBQUMsQ0FBQztxQkFDSjtpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxRQUFRLENBQUMsNEJBQTRCLENBQUMsVUFBUyxDQUFNLEVBQUUsT0FBWTtZQUNqRSxJQUFJO2dCQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO29CQUN0QixDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztvQkFDekIsTUFBTSxDQUFDLENBQUM7Z0JBQ1YsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLEdBQUcsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0I7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILDBCQUEwQjtRQUMxQixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQ3BELENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuWm9uZS5fX2xvYWRfcGF0Y2goJ2JsdWViaXJkJywgKGdsb2JhbDogYW55LCBab25lOiBab25lVHlwZSwgYXBpOiBfWm9uZVByaXZhdGUpID0+IHtcbiAgLy8gVE9ETzogQEppYUxpUGFzc2lvbiwgd2UgY2FuIGF1dG9tYXRpY2FsbHkgcGF0Y2ggYmx1ZWJpcmRcbiAgLy8gaWYgZ2xvYmFsLlByb21pc2UgPSBCbHVlYmlyZCwgYnV0IHNvbWV0aW1lcyBpbiBub2RlanMsXG4gIC8vIGdsb2JhbC5Qcm9taXNlIGlzIG5vdCBCbHVlYmlyZCwgYW5kIEJsdWViaXJkIGlzIGp1c3QgYmVcbiAgLy8gdXNlZCBieSBvdGhlciBsaWJyYXJpZXMgc3VjaCBhcyBzZXF1ZWxpemUsIHNvIEkgdGhpbmsgaXQgaXNcbiAgLy8gc2FmZSB0byBqdXN0IGV4cG9zZSBhIG1ldGhvZCB0byBwYXRjaCBCbHVlYmlyZCBleHBsaWNpdGx5XG4gIGNvbnN0IEJMVUVCSVJEID0gJ2JsdWViaXJkJztcbiAgKFpvbmUgYXMgYW55KVtab25lLl9fc3ltYm9sX18oQkxVRUJJUkQpXSA9IGZ1bmN0aW9uIHBhdGNoQmx1ZWJpcmQoQmx1ZWJpcmQ6IGFueSkge1xuICAgIC8vIHBhdGNoIG1ldGhvZCBvZiBCbHVlYmlyZC5wcm90b3R5cGUgd2hpY2ggbm90IHVzaW5nIGB0aGVuYCBpbnRlcm5hbGx5XG4gICAgY29uc3QgYmx1ZWJpcmRBcGlzOiBzdHJpbmdbXSA9IFsndGhlbicsICdzcHJlYWQnLCAnZmluYWxseSddO1xuICAgIGJsdWViaXJkQXBpcy5mb3JFYWNoKGJhcGkgPT4ge1xuICAgICAgYXBpLnBhdGNoTWV0aG9kKFxuICAgICAgICAgIEJsdWViaXJkLnByb3RvdHlwZSwgYmFwaSwgKGRlbGVnYXRlOiBGdW5jdGlvbikgPT4gKHNlbGY6IGFueSwgYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgZnVuYyA9IGFyZ3NbaV07XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFyZ1NlbGY6IGFueSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhcmdBcmdzOiBhbnkgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJsdWViaXJkKChyZXM6IGFueSwgcmVqOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgem9uZS5zY2hlZHVsZU1pY3JvVGFzaygnUHJvbWlzZS50aGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMoZnVuYy5hcHBseShhcmdTZWxmLCBhcmdBcmdzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlaihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGZ1bmN0aW9uKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBldmVudC5kZXRhaWwgJiYgZXZlbnQuZGV0YWlsLnJlYXNvbjtcbiAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmlzSGFuZGxlZEJ5Wm9uZSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHByb2Nlc3Mub24oJ3VuaGFuZGxlZFJlamVjdGlvbicsIChyZWFzb246IGFueSwgcDogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLmlzSGFuZGxlZEJ5Wm9uZSkge1xuICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHByb2Nlc3MubGlzdGVuZXJzKCd1bmhhbmRsZWRSZWplY3Rpb24nKTtcbiAgICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgdW5oYW5kbGVkUmVqZWN0aW9uIGxpc3RlbmVycyBzbyB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgIC8vIHdpbGwgbm90IGJlIHRyaWdnZXJlZC5cbiAgICAgICAgICAgIHByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzKCd1bmhhbmRsZWRSZWplY3Rpb24nKTtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiBwcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCBsaXN0ZW5lcikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBCbHVlYmlyZC5vblBvc3NpYmx5VW5oYW5kbGVkUmVqZWN0aW9uKGZ1bmN0aW9uKGU6IGFueSwgcHJvbWlzZTogYW55KSB7XG4gICAgICB0cnkge1xuICAgICAgICBab25lLmN1cnJlbnQucnVuR3VhcmRlZCgoKSA9PiB7XG4gICAgICAgICAgZS5pc0hhbmRsZWRCeVpvbmUgPSB0cnVlO1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVyci5pc0hhbmRsZWRCeVpvbmUgPSBmYWxzZTtcbiAgICAgICAgYXBpLm9uVW5oYW5kbGVkRXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIG92ZXJyaWRlIGdsb2JhbCBwcm9taXNlXG4gICAgZ2xvYmFsW2FwaS5zeW1ib2woJ1pvbmVBd2FyZVByb21pc2UnKV0gPSBCbHVlYmlyZDtcbiAgfTtcbn0pO1xuIl19