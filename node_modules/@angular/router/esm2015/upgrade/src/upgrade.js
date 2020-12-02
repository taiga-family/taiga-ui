/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/upgrade/src/upgrade.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Location } from '@angular/common';
import { APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { Router } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';
const ɵ0 = (locationSyncBootstrapListener);
/**
 * Creates an initializer that sets up `ngRoute` integration
 * along with setting up the Angular router.
 *
 * \@usageNotes
 *
 * <code-example language="typescript">
 * \@NgModule({
 *  imports: [
 *   RouterModule.forRoot(SOME_ROUTES),
 *   UpgradeModule
 * ],
 * providers: [
 *   RouterUpgradeInitializer
 * ]
 * })
 * export class AppModule {
 *   ngDoBootstrap() {}
 * }
 * </code-example>
 *
 * \@publicApi
 * @type {?}
 */
export const RouterUpgradeInitializer = {
    provide: APP_BOOTSTRAP_LISTENER,
    multi: true,
    useFactory: (/** @type {?} */ (ɵ0)),
    deps: [UpgradeModule]
};
/**
 * \@internal
 * @param {?} ngUpgrade
 * @return {?}
 */
export function locationSyncBootstrapListener(ngUpgrade) {
    return (/**
     * @return {?}
     */
    () => {
        setUpLocationSync(ngUpgrade);
    });
}
/**
 * Sets up a location change listener to trigger `history.pushState`.
 * Works around the problem that `onPopState` does not trigger `history.pushState`.
 * Must be called *after* calling `UpgradeModule.bootstrap`.
 *
 * @see `HashLocationStrategy` / `PathLocationStrategy`
 *
 * \@publicApi
 * @param {?} ngUpgrade The upgrade NgModule.
 * @param {?=} urlType The location strategy.
 * @return {?}
 */
export function setUpLocationSync(ngUpgrade, urlType = 'path') {
    if (!ngUpgrade.$injector) {
        throw new Error(`
        RouterUpgradeInitializer can be used only after UpgradeModule.bootstrap has been called.
        Remove RouterUpgradeInitializer and call setUpLocationSync after UpgradeModule.bootstrap.
      `);
    }
    /** @type {?} */
    const router = ngUpgrade.injector.get(Router);
    /** @type {?} */
    const location = ngUpgrade.injector.get(Location);
    ngUpgrade.$injector.get('$rootScope')
        .$on('$locationChangeStart', (/**
     * @param {?} _
     * @param {?} next
     * @param {?} __
     * @return {?}
     */
    (_, next, __) => {
        /** @type {?} */
        let url;
        if (urlType === 'path') {
            url = resolveUrl(next);
        }
        else if (urlType === 'hash') {
            // Remove the first hash from the URL
            /** @type {?} */
            const hashIdx = next.indexOf('#');
            url = resolveUrl(next.substring(0, hashIdx) + next.substring(hashIdx + 1));
        }
        else {
            throw 'Invalid URLType passed to setUpLocationSync: ' + urlType;
        }
        /** @type {?} */
        const path = location.normalize(url.pathname);
        router.navigateByUrl(path + url.search + url.hash);
    }));
}
/**
 * Normalizes and parses a URL.
 *
 * - Normalizing means that a relative URL will be resolved into an absolute URL in the context of
 *   the application document.
 * - Parsing means that the anchor's `protocol`, `hostname`, `port`, `pathname` and related
 *   properties are all populated to reflect the normalized URL.
 *
 * While this approach has wide compatibility, it doesn't work as expected on IE. On IE, normalizing
 * happens similar to other browsers, but the parsed components will not be set. (E.g. if you assign
 * `a.href = 'foo'`, then `a.protocol`, `a.host`, etc. will not be correctly updated.)
 * We work around that by performing the parsing in a 2nd step by taking a previously normalized URL
 * and assigning it again. This correctly populates all properties.
 *
 * See
 * https://github.com/angular/angular.js/blob/2c7400e7d07b0f6cec1817dab40b9250ce8ebce6/src/ng/urlUtils.js#L26-L33
 * for more info.
 * @type {?}
 */
let anchor;
/**
 * @param {?} url
 * @return {?}
 */
function resolveUrl(url) {
    if (!anchor) {
        anchor = document.createElement('a');
    }
    anchor.setAttribute('href', url);
    anchor.setAttribute('href', anchor.href);
    return {
        // IE does not start `pathname` with `/` like other browsers.
        pathname: `/${anchor.pathname.replace(/^\//, '')}`,
        search: anchor.search,
        hash: anchor.hash
    };
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBncmFkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3JvdXRlci91cGdyYWRlL3NyYy91cGdyYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsc0JBQXNCLEVBQStCLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0seUJBQXlCLENBQUM7V0E0QnhDLENBQUEsNkJBQTZCLENBQTRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSHZGLE1BQU0sT0FBTyx3QkFBd0IsR0FBRztJQUN0QyxPQUFPLEVBQUUsc0JBQXNCO0lBQy9CLEtBQUssRUFBRSxJQUFJO0lBQ1gsVUFBVSxFQUFFLHVCQUF5RTtJQUNyRixJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUM7Q0FDdEI7Ozs7OztBQUtELE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxTQUF3QjtJQUNwRTs7O0lBQU8sR0FBRyxFQUFFO1FBQ1YsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7OztBQWNELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxTQUF3QixFQUFFLFVBQXlCLE1BQU07SUFDekYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQzs7O09BR2IsQ0FBQyxDQUFDO0tBQ047O1VBRUssTUFBTSxHQUFXLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQzs7VUFDL0MsUUFBUSxHQUFhLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUUzRCxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7U0FDaEMsR0FBRyxDQUFDLHNCQUFzQjs7Ozs7O0lBQUUsQ0FBQyxDQUFNLEVBQUUsSUFBWSxFQUFFLEVBQVUsRUFBRSxFQUFFOztZQUM1RCxHQUFHO1FBQ1AsSUFBSSxPQUFPLEtBQUssTUFBTSxFQUFFO1lBQ3RCLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7YUFBTSxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7OztrQkFFdkIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2pDLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1RTthQUFNO1lBQ0wsTUFBTSwrQ0FBK0MsR0FBRyxPQUFPLENBQUM7U0FDakU7O2NBQ0ssSUFBSSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUM3QyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDLEVBQUMsQ0FBQztBQUNULENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JHLE1BQW1DOzs7OztBQUN2QyxTQUFTLFVBQVUsQ0FBQyxHQUFXO0lBQzdCLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN0QztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV6QyxPQUFPOztRQUVMLFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNsRCxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07UUFDckIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO0tBQ2xCLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0xvY2F0aW9ufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtBUFBfQk9PVFNUUkFQX0xJU1RFTkVSLCBDb21wb25lbnRSZWYsIEluamVjdGlvblRva2VufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtVcGdyYWRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci91cGdyYWRlL3N0YXRpYyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpbml0aWFsaXplciB0aGF0IHNldHMgdXAgYG5nUm91dGVgIGludGVncmF0aW9uXG4gKiBhbG9uZyB3aXRoIHNldHRpbmcgdXAgdGhlIEFuZ3VsYXIgcm91dGVyLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogPGNvZGUtZXhhbXBsZSBsYW5ndWFnZT1cInR5cGVzY3JpcHRcIj5cbiAqIEBOZ01vZHVsZSh7XG4gKiAgaW1wb3J0czogW1xuICogICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChTT01FX1JPVVRFUyksXG4gKiAgIFVwZ3JhZGVNb2R1bGVcbiAqIF0sXG4gKiBwcm92aWRlcnM6IFtcbiAqICAgUm91dGVyVXBncmFkZUluaXRpYWxpemVyXG4gKiBdXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG4gKiAgIG5nRG9Cb290c3RyYXAoKSB7fVxuICogfVxuICogPC9jb2RlLWV4YW1wbGU+XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgUm91dGVyVXBncmFkZUluaXRpYWxpemVyID0ge1xuICBwcm92aWRlOiBBUFBfQk9PVFNUUkFQX0xJU1RFTkVSLFxuICBtdWx0aTogdHJ1ZSxcbiAgdXNlRmFjdG9yeTogbG9jYXRpb25TeW5jQm9vdHN0cmFwTGlzdGVuZXIgYXMgKG5nVXBncmFkZTogVXBncmFkZU1vZHVsZSkgPT4gKCkgPT4gdm9pZCxcbiAgZGVwczogW1VwZ3JhZGVNb2R1bGVdXG59O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9jYXRpb25TeW5jQm9vdHN0cmFwTGlzdGVuZXIobmdVcGdyYWRlOiBVcGdyYWRlTW9kdWxlKSB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgc2V0VXBMb2NhdGlvblN5bmMobmdVcGdyYWRlKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBTZXRzIHVwIGEgbG9jYXRpb24gY2hhbmdlIGxpc3RlbmVyIHRvIHRyaWdnZXIgYGhpc3RvcnkucHVzaFN0YXRlYC5cbiAqIFdvcmtzIGFyb3VuZCB0aGUgcHJvYmxlbSB0aGF0IGBvblBvcFN0YXRlYCBkb2VzIG5vdCB0cmlnZ2VyIGBoaXN0b3J5LnB1c2hTdGF0ZWAuXG4gKiBNdXN0IGJlIGNhbGxlZCAqYWZ0ZXIqIGNhbGxpbmcgYFVwZ3JhZGVNb2R1bGUuYm9vdHN0cmFwYC5cbiAqXG4gKiBAcGFyYW0gbmdVcGdyYWRlIFRoZSB1cGdyYWRlIE5nTW9kdWxlLlxuICogQHBhcmFtIHVybFR5cGUgVGhlIGxvY2F0aW9uIHN0cmF0ZWd5LlxuICogQHNlZSBgSGFzaExvY2F0aW9uU3RyYXRlZ3lgXG4gKiBAc2VlIGBQYXRoTG9jYXRpb25TdHJhdGVneWBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRVcExvY2F0aW9uU3luYyhuZ1VwZ3JhZGU6IFVwZ3JhZGVNb2R1bGUsIHVybFR5cGU6ICdwYXRoJ3wnaGFzaCcgPSAncGF0aCcpIHtcbiAgaWYgKCFuZ1VwZ3JhZGUuJGluamVjdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBcbiAgICAgICAgUm91dGVyVXBncmFkZUluaXRpYWxpemVyIGNhbiBiZSB1c2VkIG9ubHkgYWZ0ZXIgVXBncmFkZU1vZHVsZS5ib290c3RyYXAgaGFzIGJlZW4gY2FsbGVkLlxuICAgICAgICBSZW1vdmUgUm91dGVyVXBncmFkZUluaXRpYWxpemVyIGFuZCBjYWxsIHNldFVwTG9jYXRpb25TeW5jIGFmdGVyIFVwZ3JhZGVNb2R1bGUuYm9vdHN0cmFwLlxuICAgICAgYCk7XG4gIH1cblxuICBjb25zdCByb3V0ZXI6IFJvdXRlciA9IG5nVXBncmFkZS5pbmplY3Rvci5nZXQoUm91dGVyKTtcbiAgY29uc3QgbG9jYXRpb246IExvY2F0aW9uID0gbmdVcGdyYWRlLmluamVjdG9yLmdldChMb2NhdGlvbik7XG5cbiAgbmdVcGdyYWRlLiRpbmplY3Rvci5nZXQoJyRyb290U2NvcGUnKVxuICAgICAgLiRvbignJGxvY2F0aW9uQ2hhbmdlU3RhcnQnLCAoXzogYW55LCBuZXh0OiBzdHJpbmcsIF9fOiBzdHJpbmcpID0+IHtcbiAgICAgICAgbGV0IHVybDtcbiAgICAgICAgaWYgKHVybFR5cGUgPT09ICdwYXRoJykge1xuICAgICAgICAgIHVybCA9IHJlc29sdmVVcmwobmV4dCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXJsVHlwZSA9PT0gJ2hhc2gnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBoYXNoIGZyb20gdGhlIFVSTFxuICAgICAgICAgIGNvbnN0IGhhc2hJZHggPSBuZXh0LmluZGV4T2YoJyMnKTtcbiAgICAgICAgICB1cmwgPSByZXNvbHZlVXJsKG5leHQuc3Vic3RyaW5nKDAsIGhhc2hJZHgpICsgbmV4dC5zdWJzdHJpbmcoaGFzaElkeCArIDEpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyAnSW52YWxpZCBVUkxUeXBlIHBhc3NlZCB0byBzZXRVcExvY2F0aW9uU3luYzogJyArIHVybFR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGF0aCA9IGxvY2F0aW9uLm5vcm1hbGl6ZSh1cmwucGF0aG5hbWUpO1xuICAgICAgICByb3V0ZXIubmF2aWdhdGVCeVVybChwYXRoICsgdXJsLnNlYXJjaCArIHVybC5oYXNoKTtcbiAgICAgIH0pO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYW5kIHBhcnNlcyBhIFVSTC5cbiAqXG4gKiAtIE5vcm1hbGl6aW5nIG1lYW5zIHRoYXQgYSByZWxhdGl2ZSBVUkwgd2lsbCBiZSByZXNvbHZlZCBpbnRvIGFuIGFic29sdXRlIFVSTCBpbiB0aGUgY29udGV4dCBvZlxuICogICB0aGUgYXBwbGljYXRpb24gZG9jdW1lbnQuXG4gKiAtIFBhcnNpbmcgbWVhbnMgdGhhdCB0aGUgYW5jaG9yJ3MgYHByb3RvY29sYCwgYGhvc3RuYW1lYCwgYHBvcnRgLCBgcGF0aG5hbWVgIGFuZCByZWxhdGVkXG4gKiAgIHByb3BlcnRpZXMgYXJlIGFsbCBwb3B1bGF0ZWQgdG8gcmVmbGVjdCB0aGUgbm9ybWFsaXplZCBVUkwuXG4gKlxuICogV2hpbGUgdGhpcyBhcHByb2FjaCBoYXMgd2lkZSBjb21wYXRpYmlsaXR5LCBpdCBkb2Vzbid0IHdvcmsgYXMgZXhwZWN0ZWQgb24gSUUuIE9uIElFLCBub3JtYWxpemluZ1xuICogaGFwcGVucyBzaW1pbGFyIHRvIG90aGVyIGJyb3dzZXJzLCBidXQgdGhlIHBhcnNlZCBjb21wb25lbnRzIHdpbGwgbm90IGJlIHNldC4gKEUuZy4gaWYgeW91IGFzc2lnblxuICogYGEuaHJlZiA9ICdmb28nYCwgdGhlbiBgYS5wcm90b2NvbGAsIGBhLmhvc3RgLCBldGMuIHdpbGwgbm90IGJlIGNvcnJlY3RseSB1cGRhdGVkLilcbiAqIFdlIHdvcmsgYXJvdW5kIHRoYXQgYnkgcGVyZm9ybWluZyB0aGUgcGFyc2luZyBpbiBhIDJuZCBzdGVwIGJ5IHRha2luZyBhIHByZXZpb3VzbHkgbm9ybWFsaXplZCBVUkxcbiAqIGFuZCBhc3NpZ25pbmcgaXQgYWdhaW4uIFRoaXMgY29ycmVjdGx5IHBvcHVsYXRlcyBhbGwgcHJvcGVydGllcy5cbiAqXG4gKiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi8yYzc0MDBlN2QwN2IwZjZjZWMxODE3ZGFiNDBiOTI1MGNlOGViY2U2L3NyYy9uZy91cmxVdGlscy5qcyNMMjYtTDMzXG4gKiBmb3IgbW9yZSBpbmZvLlxuICovXG5sZXQgYW5jaG9yOiBIVE1MQW5jaG9yRWxlbWVudHx1bmRlZmluZWQ7XG5mdW5jdGlvbiByZXNvbHZlVXJsKHVybDogc3RyaW5nKToge3BhdGhuYW1lOiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nLCBoYXNoOiBzdHJpbmd9IHtcbiAgaWYgKCFhbmNob3IpIHtcbiAgICBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIH1cblxuICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsIGFuY2hvci5ocmVmKTtcblxuICByZXR1cm4ge1xuICAgIC8vIElFIGRvZXMgbm90IHN0YXJ0IGBwYXRobmFtZWAgd2l0aCBgL2AgbGlrZSBvdGhlciBicm93c2Vycy5cbiAgICBwYXRobmFtZTogYC8ke2FuY2hvci5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpfWAsXG4gICAgc2VhcmNoOiBhbmNob3Iuc2VhcmNoLFxuICAgIGhhc2g6IGFuY2hvci5oYXNoXG4gIH07XG59XG4iXX0=