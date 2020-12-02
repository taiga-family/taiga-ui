/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken, NgModuleFactory } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { LoadedRouterConfig, standardizeConfig } from './config';
import { flatten, wrapIntoObservable } from './utils/collection';
/**
 * The [DI token](guide/glossary/#di-token) for a router configuration.
 * @see `ROUTES`
 * @publicApi
 */
export var ROUTES = new InjectionToken('ROUTES');
var RouterConfigLoader = /** @class */ (function () {
    function RouterConfigLoader(loader, compiler, onLoadStartListener, onLoadEndListener) {
        this.loader = loader;
        this.compiler = compiler;
        this.onLoadStartListener = onLoadStartListener;
        this.onLoadEndListener = onLoadEndListener;
    }
    RouterConfigLoader.prototype.load = function (parentInjector, route) {
        var _this = this;
        if (this.onLoadStartListener) {
            this.onLoadStartListener(route);
        }
        var moduleFactory$ = this.loadModuleFactory(route.loadChildren);
        return moduleFactory$.pipe(map(function (factory) {
            if (_this.onLoadEndListener) {
                _this.onLoadEndListener(route);
            }
            var module = factory.create(parentInjector);
            return new LoadedRouterConfig(flatten(module.injector.get(ROUTES)).map(standardizeConfig), module);
        }));
    };
    RouterConfigLoader.prototype.loadModuleFactory = function (loadChildren) {
        var _this = this;
        if (typeof loadChildren === 'string') {
            return from(this.loader.load(loadChildren));
        }
        else {
            return wrapIntoObservable(loadChildren()).pipe(mergeMap(function (t) {
                if (t instanceof NgModuleFactory) {
                    return of(t);
                }
                else {
                    return from(_this.compiler.compileModuleAsync(t));
                }
            }));
        }
    };
    return RouterConfigLoader;
}());
export { RouterConfigLoader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX2NvbmZpZ19sb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9yb3V0ZXIvc3JjL3JvdXRlcl9jb25maWdfbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBVyxjQUFjLEVBQVksZUFBZSxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUMsSUFBSSxFQUFjLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUMsR0FBRyxFQUFFLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBZSxrQkFBa0IsRUFBUyxpQkFBaUIsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNwRixPQUFPLEVBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFL0Q7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBWSxRQUFRLENBQUMsQ0FBQztBQUU5RDtJQUNFLDRCQUNZLE1BQTZCLEVBQVUsUUFBa0IsRUFDekQsbUJBQXdDLEVBQ3hDLGlCQUFzQztRQUZ0QyxXQUFNLEdBQU4sTUFBTSxDQUF1QjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDekQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFCO0lBQUcsQ0FBQztJQUV0RCxpQ0FBSSxHQUFKLFVBQUssY0FBd0IsRUFBRSxLQUFZO1FBQTNDLGlCQWlCQztRQWhCQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFlBQWEsQ0FBQyxDQUFDO1FBRW5FLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxPQUE2QjtZQUMzRCxJQUFJLEtBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDMUIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1lBRUQsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUU5QyxPQUFPLElBQUksa0JBQWtCLENBQ3pCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRU8sOENBQWlCLEdBQXpCLFVBQTBCLFlBQTBCO1FBQXBELGlCQVlDO1FBWEMsSUFBSSxPQUFPLFlBQVksS0FBSyxRQUFRLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsT0FBTyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBQyxDQUFNO2dCQUM3RCxJQUFJLENBQUMsWUFBWSxlQUFlLEVBQUU7b0JBQ2hDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNkO3FCQUFNO29CQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbEQ7WUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBdENELElBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVyLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IsIE5nTW9kdWxlRmFjdG9yeSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ZnJvbSwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIG1lcmdlTWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7TG9hZENoaWxkcmVuLCBMb2FkZWRSb3V0ZXJDb25maWcsIFJvdXRlLCBzdGFuZGFyZGl6ZUNvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtmbGF0dGVuLCB3cmFwSW50b09ic2VydmFibGV9IGZyb20gJy4vdXRpbHMvY29sbGVjdGlvbic7XG5cbi8qKlxuICogVGhlIFtESSB0b2tlbl0oZ3VpZGUvZ2xvc3NhcnkvI2RpLXRva2VuKSBmb3IgYSByb3V0ZXIgY29uZmlndXJhdGlvbi5cbiAqIEBzZWUgYFJPVVRFU2BcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IFJPVVRFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxSb3V0ZVtdW10+KCdST1VURVMnKTtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckNvbmZpZ0xvYWRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBsb2FkZXI6IE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgcHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIsXG4gICAgICBwcml2YXRlIG9uTG9hZFN0YXJ0TGlzdGVuZXI/OiAocjogUm91dGUpID0+IHZvaWQsXG4gICAgICBwcml2YXRlIG9uTG9hZEVuZExpc3RlbmVyPzogKHI6IFJvdXRlKSA9PiB2b2lkKSB7fVxuXG4gIGxvYWQocGFyZW50SW5qZWN0b3I6IEluamVjdG9yLCByb3V0ZTogUm91dGUpOiBPYnNlcnZhYmxlPExvYWRlZFJvdXRlckNvbmZpZz4ge1xuICAgIGlmICh0aGlzLm9uTG9hZFN0YXJ0TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25Mb2FkU3RhcnRMaXN0ZW5lcihyb3V0ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgbW9kdWxlRmFjdG9yeSQgPSB0aGlzLmxvYWRNb2R1bGVGYWN0b3J5KHJvdXRlLmxvYWRDaGlsZHJlbiEpO1xuXG4gICAgcmV0dXJuIG1vZHVsZUZhY3RvcnkkLnBpcGUobWFwKChmYWN0b3J5OiBOZ01vZHVsZUZhY3Rvcnk8YW55PikgPT4ge1xuICAgICAgaWYgKHRoaXMub25Mb2FkRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5vbkxvYWRFbmRMaXN0ZW5lcihyb3V0ZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1vZHVsZSA9IGZhY3RvcnkuY3JlYXRlKHBhcmVudEluamVjdG9yKTtcblxuICAgICAgcmV0dXJuIG5ldyBMb2FkZWRSb3V0ZXJDb25maWcoXG4gICAgICAgICAgZmxhdHRlbihtb2R1bGUuaW5qZWN0b3IuZ2V0KFJPVVRFUykpLm1hcChzdGFuZGFyZGl6ZUNvbmZpZyksIG1vZHVsZSk7XG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkTW9kdWxlRmFjdG9yeShsb2FkQ2hpbGRyZW46IExvYWRDaGlsZHJlbik6IE9ic2VydmFibGU8TmdNb2R1bGVGYWN0b3J5PGFueT4+IHtcbiAgICBpZiAodHlwZW9mIGxvYWRDaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmcm9tKHRoaXMubG9hZGVyLmxvYWQobG9hZENoaWxkcmVuKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB3cmFwSW50b09ic2VydmFibGUobG9hZENoaWxkcmVuKCkpLnBpcGUobWVyZ2VNYXAoKHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAodCBpbnN0YW5jZW9mIE5nTW9kdWxlRmFjdG9yeSkge1xuICAgICAgICAgIHJldHVybiBvZih0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZnJvbSh0aGlzLmNvbXBpbGVyLmNvbXBpbGVNb2R1bGVBc3luYyh0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==