/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __assign } from "tslib";
import { getCompilerFacade } from '../../compiler/compiler_facade';
import { reflectDependencies } from '../../di/jit/util';
import { NG_FACTORY_DEF, NG_PIPE_DEF } from '../fields';
import { angularCoreEnv } from './environment';
export function compilePipe(type, meta) {
    var ngPipeDef = null;
    var ngFactoryDef = null;
    Object.defineProperty(type, NG_FACTORY_DEF, {
        get: function () {
            if (ngFactoryDef === null) {
                var metadata = getPipeMetadata(type, meta);
                var compiler = getCompilerFacade();
                ngFactoryDef = compiler.compileFactory(angularCoreEnv, "ng:///" + metadata.name + "/\u0275fac.js", __assign(__assign({}, metadata), { injectFn: 'directiveInject', target: compiler.R3FactoryTarget.Pipe }));
            }
            return ngFactoryDef;
        },
        // Make the property configurable in dev mode to allow overriding in tests
        configurable: !!ngDevMode,
    });
    Object.defineProperty(type, NG_PIPE_DEF, {
        get: function () {
            if (ngPipeDef === null) {
                var metadata = getPipeMetadata(type, meta);
                ngPipeDef = getCompilerFacade().compilePipe(angularCoreEnv, "ng:///" + metadata.name + "/\u0275pipe.js", metadata);
            }
            return ngPipeDef;
        },
        // Make the property configurable in dev mode to allow overriding in tests
        configurable: !!ngDevMode,
    });
}
function getPipeMetadata(type, meta) {
    return {
        type: type,
        typeArgumentCount: 0,
        name: type.name,
        deps: reflectDependencies(type),
        pipeName: meta.name,
        pure: meta.pure !== undefined ? meta.pure : true
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvaml0L3BpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQyxpQkFBaUIsRUFBdUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUd0RCxPQUFPLEVBQUMsY0FBYyxFQUFFLFdBQVcsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUV0RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdDLE1BQU0sVUFBVSxXQUFXLENBQUMsSUFBZSxFQUFFLElBQVU7SUFDckQsSUFBSSxTQUFTLEdBQVEsSUFBSSxDQUFDO0lBQzFCLElBQUksWUFBWSxHQUFRLElBQUksQ0FBQztJQUU3QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7UUFDMUMsR0FBRyxFQUFFO1lBQ0gsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUN6QixJQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxJQUFNLFFBQVEsR0FBRyxpQkFBaUIsRUFBRSxDQUFDO2dCQUNyQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDbEMsY0FBYyxFQUFFLFdBQVMsUUFBUSxDQUFDLElBQUksa0JBQVUsd0JBQzVDLFFBQVEsS0FBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFFLENBQUM7YUFDeEY7WUFDRCxPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDO1FBQ0QsMEVBQTBFO1FBQzFFLFlBQVksRUFBRSxDQUFDLENBQUMsU0FBUztLQUMxQixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUU7UUFDdkMsR0FBRyxFQUFFO1lBQ0gsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO2dCQUN0QixJQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxTQUFTLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQyxXQUFXLENBQ3ZDLGNBQWMsRUFBRSxXQUFTLFFBQVEsQ0FBQyxJQUFJLG1CQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDbEU7WUFDRCxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsMEVBQTBFO1FBQzFFLFlBQVksRUFBRSxDQUFDLENBQUMsU0FBUztLQUMxQixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsSUFBZSxFQUFFLElBQVU7SUFDbEQsT0FBTztRQUNMLElBQUksRUFBRSxJQUFJO1FBQ1YsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixJQUFJLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1FBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7S0FDakQsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Z2V0Q29tcGlsZXJGYWNhZGUsIFIzUGlwZU1ldGFkYXRhRmFjYWRlfSBmcm9tICcuLi8uLi9jb21waWxlci9jb21waWxlcl9mYWNhZGUnO1xuaW1wb3J0IHtyZWZsZWN0RGVwZW5kZW5jaWVzfSBmcm9tICcuLi8uLi9kaS9qaXQvdXRpbCc7XG5pbXBvcnQge1R5cGV9IGZyb20gJy4uLy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7UGlwZX0gZnJvbSAnLi4vLi4vbWV0YWRhdGEvZGlyZWN0aXZlcyc7XG5pbXBvcnQge05HX0ZBQ1RPUllfREVGLCBOR19QSVBFX0RFRn0gZnJvbSAnLi4vZmllbGRzJztcblxuaW1wb3J0IHthbmd1bGFyQ29yZUVudn0gZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlUGlwZSh0eXBlOiBUeXBlPGFueT4sIG1ldGE6IFBpcGUpOiB2b2lkIHtcbiAgbGV0IG5nUGlwZURlZjogYW55ID0gbnVsbDtcbiAgbGV0IG5nRmFjdG9yeURlZjogYW55ID0gbnVsbDtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZSwgTkdfRkFDVE9SWV9ERUYsIHtcbiAgICBnZXQ6ICgpID0+IHtcbiAgICAgIGlmIChuZ0ZhY3RvcnlEZWYgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBnZXRQaXBlTWV0YWRhdGEodHlwZSwgbWV0YSk7XG4gICAgICAgIGNvbnN0IGNvbXBpbGVyID0gZ2V0Q29tcGlsZXJGYWNhZGUoKTtcbiAgICAgICAgbmdGYWN0b3J5RGVmID0gY29tcGlsZXIuY29tcGlsZUZhY3RvcnkoXG4gICAgICAgICAgICBhbmd1bGFyQ29yZUVudiwgYG5nOi8vLyR7bWV0YWRhdGEubmFtZX0vybVmYWMuanNgLFxuICAgICAgICAgICAgey4uLm1ldGFkYXRhLCBpbmplY3RGbjogJ2RpcmVjdGl2ZUluamVjdCcsIHRhcmdldDogY29tcGlsZXIuUjNGYWN0b3J5VGFyZ2V0LlBpcGV9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZ0ZhY3RvcnlEZWY7XG4gICAgfSxcbiAgICAvLyBNYWtlIHRoZSBwcm9wZXJ0eSBjb25maWd1cmFibGUgaW4gZGV2IG1vZGUgdG8gYWxsb3cgb3ZlcnJpZGluZyBpbiB0ZXN0c1xuICAgIGNvbmZpZ3VyYWJsZTogISFuZ0Rldk1vZGUsXG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBOR19QSVBFX0RFRiwge1xuICAgIGdldDogKCkgPT4ge1xuICAgICAgaWYgKG5nUGlwZURlZiA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IGdldFBpcGVNZXRhZGF0YSh0eXBlLCBtZXRhKTtcbiAgICAgICAgbmdQaXBlRGVmID0gZ2V0Q29tcGlsZXJGYWNhZGUoKS5jb21waWxlUGlwZShcbiAgICAgICAgICAgIGFuZ3VsYXJDb3JlRW52LCBgbmc6Ly8vJHttZXRhZGF0YS5uYW1lfS/JtXBpcGUuanNgLCBtZXRhZGF0YSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmdQaXBlRGVmO1xuICAgIH0sXG4gICAgLy8gTWFrZSB0aGUgcHJvcGVydHkgY29uZmlndXJhYmxlIGluIGRldiBtb2RlIHRvIGFsbG93IG92ZXJyaWRpbmcgaW4gdGVzdHNcbiAgICBjb25maWd1cmFibGU6ICEhbmdEZXZNb2RlLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0UGlwZU1ldGFkYXRhKHR5cGU6IFR5cGU8YW55PiwgbWV0YTogUGlwZSk6IFIzUGlwZU1ldGFkYXRhRmFjYWRlIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHR5cGVBcmd1bWVudENvdW50OiAwLFxuICAgIG5hbWU6IHR5cGUubmFtZSxcbiAgICBkZXBzOiByZWZsZWN0RGVwZW5kZW5jaWVzKHR5cGUpLFxuICAgIHBpcGVOYW1lOiBtZXRhLm5hbWUsXG4gICAgcHVyZTogbWV0YS5wdXJlICE9PSB1bmRlZmluZWQgPyBtZXRhLnB1cmUgOiB0cnVlXG4gIH07XG59XG4iXX0=