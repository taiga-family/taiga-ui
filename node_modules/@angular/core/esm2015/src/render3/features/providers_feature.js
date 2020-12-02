/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/features/providers_feature.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { providersResolver } from '../di_setup';
/**
 * This feature resolves the providers of a directive (or component),
 * and publish them into the DI system, making it visible to others for injection.
 *
 * For example:
 * ```ts
 * class ComponentWithProviders {
 *   constructor(private greeter: GreeterDE) {}
 *
 *   static ɵcmp = defineComponent({
 *     type: ComponentWithProviders,
 *     selectors: [['component-with-providers']],
 *    factory: () => new ComponentWithProviders(directiveInject(GreeterDE as any)),
 *    decls: 1,
 *    vars: 1,
 *    template: function(fs: RenderFlags, ctx: ComponentWithProviders) {
 *      if (fs & RenderFlags.Create) {
 *        ɵɵtext(0);
 *      }
 *      if (fs & RenderFlags.Update) {
 *        ɵɵtextInterpolate(ctx.greeter.greet());
 *      }
 *    },
 *    features: [ProvidersFeature([GreeterDE])]
 *  });
 * }
 * ```
 *
 * \@codeGenApi
 * @template T
 * @param {?} providers
 * @param {?=} viewProviders
 * @return {?}
 */
export function ɵɵProvidersFeature(providers, viewProviders = []) {
    return (/**
     * @param {?} definition
     * @return {?}
     */
    (definition) => {
        definition.providersResolver =
            (/**
             * @param {?} def
             * @param {?=} processProvidersFn
             * @return {?}
             */
            (def, processProvidersFn) => {
                return providersResolver(def, //
                processProvidersFn ? processProvidersFn(providers) : providers, //
                viewProviders);
            });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJzX2ZlYXR1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2ZlYXR1cmVzL3Byb3ZpZGVyc19mZWF0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBUUEsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DOUMsTUFBTSxVQUFVLGtCQUFrQixDQUFJLFNBQXFCLEVBQUUsZ0JBQTRCLEVBQUU7SUFDekY7Ozs7SUFBTyxDQUFDLFVBQTJCLEVBQUUsRUFBRTtRQUNyQyxVQUFVLENBQUMsaUJBQWlCOzs7Ozs7WUFDeEIsQ0FBQyxHQUFvQixFQUFFLGtCQUE2QyxFQUFFLEVBQUU7Z0JBQ3RFLE9BQU8saUJBQWlCLENBQ3BCLEdBQUcsRUFBOEQsRUFBRTtnQkFDbkUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUcsRUFBRTtnQkFDbkUsYUFBYSxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFBLENBQUM7SUFDUixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtQcm9jZXNzUHJvdmlkZXJzRnVuY3Rpb24sIFByb3ZpZGVyfSBmcm9tICcuLi8uLi9kaS9pbnRlcmZhY2UvcHJvdmlkZXInO1xuaW1wb3J0IHtwcm92aWRlcnNSZXNvbHZlcn0gZnJvbSAnLi4vZGlfc2V0dXAnO1xuaW1wb3J0IHtEaXJlY3RpdmVEZWZ9IGZyb20gJy4uL2ludGVyZmFjZXMvZGVmaW5pdGlvbic7XG5cbi8qKlxuICogVGhpcyBmZWF0dXJlIHJlc29sdmVzIHRoZSBwcm92aWRlcnMgb2YgYSBkaXJlY3RpdmUgKG9yIGNvbXBvbmVudCksXG4gKiBhbmQgcHVibGlzaCB0aGVtIGludG8gdGhlIERJIHN5c3RlbSwgbWFraW5nIGl0IHZpc2libGUgdG8gb3RoZXJzIGZvciBpbmplY3Rpb24uXG4gKlxuICogRm9yIGV4YW1wbGU6XG4gKiBgYGB0c1xuICogY2xhc3MgQ29tcG9uZW50V2l0aFByb3ZpZGVycyB7XG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JlZXRlcjogR3JlZXRlckRFKSB7fVxuICpcbiAqICAgc3RhdGljIMm1Y21wID0gZGVmaW5lQ29tcG9uZW50KHtcbiAqICAgICB0eXBlOiBDb21wb25lbnRXaXRoUHJvdmlkZXJzLFxuICogICAgIHNlbGVjdG9yczogW1snY29tcG9uZW50LXdpdGgtcHJvdmlkZXJzJ11dLFxuICogICAgZmFjdG9yeTogKCkgPT4gbmV3IENvbXBvbmVudFdpdGhQcm92aWRlcnMoZGlyZWN0aXZlSW5qZWN0KEdyZWV0ZXJERSBhcyBhbnkpKSxcbiAqICAgIGRlY2xzOiAxLFxuICogICAgdmFyczogMSxcbiAqICAgIHRlbXBsYXRlOiBmdW5jdGlvbihmczogUmVuZGVyRmxhZ3MsIGN0eDogQ29tcG9uZW50V2l0aFByb3ZpZGVycykge1xuICogICAgICBpZiAoZnMgJiBSZW5kZXJGbGFncy5DcmVhdGUpIHtcbiAqICAgICAgICDJtcm1dGV4dCgwKTtcbiAqICAgICAgfVxuICogICAgICBpZiAoZnMgJiBSZW5kZXJGbGFncy5VcGRhdGUpIHtcbiAqICAgICAgICDJtcm1dGV4dEludGVycG9sYXRlKGN0eC5ncmVldGVyLmdyZWV0KCkpO1xuICogICAgICB9XG4gKiAgICB9LFxuICogICAgZmVhdHVyZXM6IFtQcm92aWRlcnNGZWF0dXJlKFtHcmVldGVyREVdKV1cbiAqICB9KTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBkZWZpbml0aW9uXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVQcm92aWRlcnNGZWF0dXJlPFQ+KHByb3ZpZGVyczogUHJvdmlkZXJbXSwgdmlld1Byb3ZpZGVyczogUHJvdmlkZXJbXSA9IFtdKSB7XG4gIHJldHVybiAoZGVmaW5pdGlvbjogRGlyZWN0aXZlRGVmPFQ+KSA9PiB7XG4gICAgZGVmaW5pdGlvbi5wcm92aWRlcnNSZXNvbHZlciA9XG4gICAgICAgIChkZWY6IERpcmVjdGl2ZURlZjxUPiwgcHJvY2Vzc1Byb3ZpZGVyc0ZuPzogUHJvY2Vzc1Byb3ZpZGVyc0Z1bmN0aW9uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByb3ZpZGVyc1Jlc29sdmVyKFxuICAgICAgICAgICAgICBkZWYsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIHByb2Nlc3NQcm92aWRlcnNGbiA/IHByb2Nlc3NQcm92aWRlcnNGbihwcm92aWRlcnMpIDogcHJvdmlkZXJzLCAgLy9cbiAgICAgICAgICAgICAgdmlld1Byb3ZpZGVycyk7XG4gICAgICAgIH07XG4gIH07XG59XG4iXX0=