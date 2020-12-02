/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/directives/router_link_active.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ContentChildren, Directive, ElementRef, Input, Optional, QueryList, Renderer2 } from '@angular/core';
import { NavigationEnd } from '../events';
import { Router } from '../router';
import { RouterLink, RouterLinkWithHref } from './router_link';
/**
 *
 * \@description
 *
 * Lets you add a CSS class to an element when the link's route becomes active.
 *
 * This directive lets you add a CSS class to an element when the link's route
 * becomes active.
 *
 * Consider the following example:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
 * ```
 *
 * When the url is either '/user' or '/user/bob', the active-link class will
 * be added to the `a` tag. If the url changes, the class will be removed.
 *
 * You can set more than one class, as follows:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a>
 * <a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
 * ```
 *
 * You can configure RouterLinkActive by passing `exact: true`. This will add the classes
 * only when the url matches the link exactly.
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
 * true}">Bob</a>
 * ```
 *
 * You can assign the RouterLinkActive instance to a template variable and directly check
 * the `isActive` status.
 * ```
 * <a routerLink="/user/bob" routerLinkActive #rla="routerLinkActive">
 *   Bob {{ rla.isActive ? '(already open)' : ''}}
 * </a>
 * ```
 *
 * Finally, you can apply the RouterLinkActive directive to an ancestor of a RouterLink.
 *
 * ```
 * <div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
 *   <a routerLink="/user/jim">Jim</a>
 *   <a routerLink="/user/bob">Bob</a>
 * </div>
 * ```
 *
 * This will set the active-link class on the div tag if the url is either '/user/jim' or
 * '/user/bob'.
 *
 * \@ngModule RouterModule
 *
 * \@publicApi
 */
export class RouterLinkActive {
    /**
     * @param {?} router
     * @param {?} element
     * @param {?} renderer
     * @param {?=} link
     * @param {?=} linkWithHref
     */
    constructor(router, element, renderer, link, linkWithHref) {
        this.router = router;
        this.element = element;
        this.renderer = renderer;
        this.link = link;
        this.linkWithHref = linkWithHref;
        this.classes = [];
        this.isActive = false;
        this.routerLinkActiveOptions = { exact: false };
        this.subscription = router.events.subscribe((/**
         * @param {?} s
         * @return {?}
         */
        (s) => {
            if (s instanceof NavigationEnd) {
                this.update();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.links.changes.subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.update()));
        this.linksWithHrefs.changes.subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.update()));
        this.update();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set routerLinkActive(data) {
        /** @type {?} */
        const classes = Array.isArray(data) ? data : data.split(' ');
        this.classes = classes.filter((/**
         * @param {?} c
         * @return {?}
         */
        c => !!c));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.update();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @private
     * @return {?}
     */
    update() {
        if (!this.links || !this.linksWithHrefs || !this.router.navigated)
            return;
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const hasActiveLinks = this.hasActiveLinks();
            if (this.isActive !== hasActiveLinks) {
                ((/** @type {?} */ (this))).isActive = hasActiveLinks;
                this.classes.forEach((/**
                 * @param {?} c
                 * @return {?}
                 */
                (c) => {
                    if (hasActiveLinks) {
                        this.renderer.addClass(this.element.nativeElement, c);
                    }
                    else {
                        this.renderer.removeClass(this.element.nativeElement, c);
                    }
                }));
            }
        }));
    }
    /**
     * @private
     * @param {?} router
     * @return {?}
     */
    isLinkActive(router) {
        return (/**
         * @param {?} link
         * @return {?}
         */
        (link) => router.isActive(link.urlTree, this.routerLinkActiveOptions.exact));
    }
    /**
     * @private
     * @return {?}
     */
    hasActiveLinks() {
        /** @type {?} */
        const isActiveCheckFn = this.isLinkActive(this.router);
        return this.link && isActiveCheckFn(this.link) ||
            this.linkWithHref && isActiveCheckFn(this.linkWithHref) ||
            this.links.some(isActiveCheckFn) || this.linksWithHrefs.some(isActiveCheckFn);
    }
}
RouterLinkActive.decorators = [
    { type: Directive, args: [{
                selector: '[routerLinkActive]',
                exportAs: 'routerLinkActive',
            },] }
];
/** @nocollapse */
RouterLinkActive.ctorParameters = () => [
    { type: Router },
    { type: ElementRef },
    { type: Renderer2 },
    { type: RouterLink, decorators: [{ type: Optional }] },
    { type: RouterLinkWithHref, decorators: [{ type: Optional }] }
];
RouterLinkActive.propDecorators = {
    links: [{ type: ContentChildren, args: [RouterLink, { descendants: true },] }],
    linksWithHrefs: [{ type: ContentChildren, args: [RouterLinkWithHref, { descendants: true },] }],
    routerLinkActiveOptions: [{ type: Input }],
    routerLinkActive: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RouterLinkActive.prototype.links;
    /** @type {?} */
    RouterLinkActive.prototype.linksWithHrefs;
    /**
     * @type {?}
     * @private
     */
    RouterLinkActive.prototype.classes;
    /**
     * @type {?}
     * @private
     */
    RouterLinkActive.prototype.subscription;
    /** @type {?} */
    RouterLinkActive.prototype.isActive;
    /** @type {?} */
    RouterLinkActive.prototype.routerLinkActiveOptions;
    /**
     * @type {?}
     * @private
     */
    RouterLinkActive.prototype.router;
    /**
     * @type {?}
     * @private
     */
    RouterLinkActive.prototype.element;
    /**
     * @type {?}
     * @private
     */
    RouterLinkActive.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    RouterLinkActive.prototype.link;
    /**
     * @type {?}
     * @private
     */
    RouterLinkActive.prototype.linkWithHref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX2xpbmtfYWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9kaXJlY3RpdmVzL3JvdXRlcl9saW5rX2FjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQW1CLGVBQWUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBd0IsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBR25LLE9BQU8sRUFBUSxhQUFhLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDL0MsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUVqQyxPQUFPLEVBQUMsVUFBVSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0U3RCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7OztJQWEzQixZQUNZLE1BQWMsRUFBVSxPQUFtQixFQUFVLFFBQW1CLEVBQzVELElBQWlCLEVBQ2pCLFlBQWlDO1FBRjdDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUM1RCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQVRqRCxZQUFPLEdBQWEsRUFBRSxDQUFDO1FBRWYsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUVqQyw0QkFBdUIsR0FBcUIsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFNbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQVEsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxZQUFZ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U0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7O1lBakVPLE1BQU07WUFKd0MsVUFBVTtZQUFvRCxTQUFTO1lBTXJILFVBQVUsdUJBK0VYLFFBQVE7WUEvRUssa0JBQWtCLHVCQWdGL0IsUUFBUTs7O29CQWRaLGVBQWUsU0FBQyxVQUFVLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDOzZCQUUvQyxlQUFlLFNBQUMsa0JBQWtCLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDO3NDQU92RCxLQUFLOytCQW9CTCxLQUFLOzs7O0lBN0JOLGlDQUFnRjs7SUFFaEYsMENBQytDOzs7OztJQUUvQyxtQ0FBK0I7Ozs7O0lBQy9CLHdDQUFtQzs7SUFDbkMsb0NBQTBDOztJQUUxQyxtREFBb0U7Ozs7O0lBR2hFLGtDQUFzQjs7Ozs7SUFBRSxtQ0FBMkI7Ozs7O0lBQUUsb0NBQTJCOzs7OztJQUNoRixnQ0FBcUM7Ozs7O0lBQ3JDLHdDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPcHRpb25hbCwgUXVlcnlMaXN0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge0V2ZW50LCBOYXZpZ2F0aW9uRW5kfSBmcm9tICcuLi9ldmVudHMnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJy4uL3JvdXRlcic7XG5cbmltcG9ydCB7Um91dGVyTGluaywgUm91dGVyTGlua1dpdGhIcmVmfSBmcm9tICcuL3JvdXRlcl9saW5rJztcblxuXG4vKipcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBMZXRzIHlvdSBhZGQgYSBDU1MgY2xhc3MgdG8gYW4gZWxlbWVudCB3aGVuIHRoZSBsaW5rJ3Mgcm91dGUgYmVjb21lcyBhY3RpdmUuXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgbGV0cyB5b3UgYWRkIGEgQ1NTIGNsYXNzIHRvIGFuIGVsZW1lbnQgd2hlbiB0aGUgbGluaydzIHJvdXRlXG4gKiBiZWNvbWVzIGFjdGl2ZS5cbiAqXG4gKiBDb25zaWRlciB0aGUgZm9sbG93aW5nIGV4YW1wbGU6XG4gKlxuICogYGBgXG4gKiA8YSByb3V0ZXJMaW5rPVwiL3VzZXIvYm9iXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZS1saW5rXCI+Qm9iPC9hPlxuICogYGBgXG4gKlxuICogV2hlbiB0aGUgdXJsIGlzIGVpdGhlciAnL3VzZXInIG9yICcvdXNlci9ib2InLCB0aGUgYWN0aXZlLWxpbmsgY2xhc3Mgd2lsbFxuICogYmUgYWRkZWQgdG8gdGhlIGBhYCB0YWcuIElmIHRoZSB1cmwgY2hhbmdlcywgdGhlIGNsYXNzIHdpbGwgYmUgcmVtb3ZlZC5cbiAqXG4gKiBZb3UgY2FuIHNldCBtb3JlIHRoYW4gb25lIGNsYXNzLCBhcyBmb2xsb3dzOlxuICpcbiAqIGBgYFxuICogPGEgcm91dGVyTGluaz1cIi91c2VyL2JvYlwiIHJvdXRlckxpbmtBY3RpdmU9XCJjbGFzczEgY2xhc3MyXCI+Qm9iPC9hPlxuICogPGEgcm91dGVyTGluaz1cIi91c2VyL2JvYlwiIFtyb3V0ZXJMaW5rQWN0aXZlXT1cIlsnY2xhc3MxJywgJ2NsYXNzMiddXCI+Qm9iPC9hPlxuICogYGBgXG4gKlxuICogWW91IGNhbiBjb25maWd1cmUgUm91dGVyTGlua0FjdGl2ZSBieSBwYXNzaW5nIGBleGFjdDogdHJ1ZWAuIFRoaXMgd2lsbCBhZGQgdGhlIGNsYXNzZXNcbiAqIG9ubHkgd2hlbiB0aGUgdXJsIG1hdGNoZXMgdGhlIGxpbmsgZXhhY3RseS5cbiAqXG4gKiBgYGBcbiAqIDxhIHJvdXRlckxpbms9XCIvdXNlci9ib2JcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlLWxpbmtcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVwie2V4YWN0OlxuICogdHJ1ZX1cIj5Cb2I8L2E+XG4gKiBgYGBcbiAqXG4gKiBZb3UgY2FuIGFzc2lnbiB0aGUgUm91dGVyTGlua0FjdGl2ZSBpbnN0YW5jZSB0byBhIHRlbXBsYXRlIHZhcmlhYmxlIGFuZCBkaXJlY3RseSBjaGVja1xuICogdGhlIGBpc0FjdGl2ZWAgc3RhdHVzLlxuICogYGBgXG4gKiA8YSByb3V0ZXJMaW5rPVwiL3VzZXIvYm9iXCIgcm91dGVyTGlua0FjdGl2ZSAjcmxhPVwicm91dGVyTGlua0FjdGl2ZVwiPlxuICogICBCb2Ige3sgcmxhLmlzQWN0aXZlID8gJyhhbHJlYWR5IG9wZW4pJyA6ICcnfX1cbiAqIDwvYT5cbiAqIGBgYFxuICpcbiAqIEZpbmFsbHksIHlvdSBjYW4gYXBwbHkgdGhlIFJvdXRlckxpbmtBY3RpdmUgZGlyZWN0aXZlIHRvIGFuIGFuY2VzdG9yIG9mIGEgUm91dGVyTGluay5cbiAqXG4gKiBgYGBcbiAqIDxkaXYgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZS1saW5rXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cIntleGFjdDogdHJ1ZX1cIj5cbiAqICAgPGEgcm91dGVyTGluaz1cIi91c2VyL2ppbVwiPkppbTwvYT5cbiAqICAgPGEgcm91dGVyTGluaz1cIi91c2VyL2JvYlwiPkJvYjwvYT5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogVGhpcyB3aWxsIHNldCB0aGUgYWN0aXZlLWxpbmsgY2xhc3Mgb24gdGhlIGRpdiB0YWcgaWYgdGhlIHVybCBpcyBlaXRoZXIgJy91c2VyL2ppbScgb3JcbiAqICcvdXNlci9ib2InLlxuICpcbiAqIEBuZ01vZHVsZSBSb3V0ZXJNb2R1bGVcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyb3V0ZXJMaW5rQWN0aXZlXScsXG4gIGV4cG9ydEFzOiAncm91dGVyTGlua0FjdGl2ZScsXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRlckxpbmtBY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmssIHtkZXNjZW5kYW50czogdHJ1ZX0pIGxpbmtzITogUXVlcnlMaXN0PFJvdXRlckxpbms+O1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rV2l0aEhyZWYsIHtkZXNjZW5kYW50czogdHJ1ZX0pXG4gIGxpbmtzV2l0aEhyZWZzITogUXVlcnlMaXN0PFJvdXRlckxpbmtXaXRoSHJlZj47XG5cbiAgcHJpdmF0ZSBjbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgcmVhZG9ubHkgaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSByb3V0ZXJMaW5rQWN0aXZlT3B0aW9uczoge2V4YWN0OiBib29sZWFufSA9IHtleGFjdDogZmFsc2V9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGxpbms/OiBSb3V0ZXJMaW5rLFxuICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBsaW5rV2l0aEhyZWY/OiBSb3V0ZXJMaW5rV2l0aEhyZWYpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChzOiBFdmVudCkgPT4ge1xuICAgICAgaWYgKHMgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxpbmtzLmNoYW5nZXMuc3Vic2NyaWJlKF8gPT4gdGhpcy51cGRhdGUoKSk7XG4gICAgdGhpcy5saW5rc1dpdGhIcmVmcy5jaGFuZ2VzLnN1YnNjcmliZShfID0+IHRoaXMudXBkYXRlKCkpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcm91dGVyTGlua0FjdGl2ZShkYXRhOiBzdHJpbmdbXXxzdHJpbmcpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBkYXRhLnNwbGl0KCcgJyk7XG4gICAgdGhpcy5jbGFzc2VzID0gY2xhc3Nlcy5maWx0ZXIoYyA9PiAhIWMpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5saW5rcyB8fCAhdGhpcy5saW5rc1dpdGhIcmVmcyB8fCAhdGhpcy5yb3V0ZXIubmF2aWdhdGVkKSByZXR1cm47XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYXNBY3RpdmVMaW5rcyA9IHRoaXMuaGFzQWN0aXZlTGlua3MoKTtcbiAgICAgIGlmICh0aGlzLmlzQWN0aXZlICE9PSBoYXNBY3RpdmVMaW5rcykge1xuICAgICAgICAodGhpcyBhcyBhbnkpLmlzQWN0aXZlID0gaGFzQWN0aXZlTGlua3M7XG4gICAgICAgIHRoaXMuY2xhc3Nlcy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgaWYgKGhhc0FjdGl2ZUxpbmtzKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBjKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNMaW5rQWN0aXZlKHJvdXRlcjogUm91dGVyKTogKGxpbms6IChSb3V0ZXJMaW5rfFJvdXRlckxpbmtXaXRoSHJlZikpID0+IGJvb2xlYW4ge1xuICAgIHJldHVybiAobGluazogUm91dGVyTGlua3xSb3V0ZXJMaW5rV2l0aEhyZWYpID0+XG4gICAgICAgICAgICAgICByb3V0ZXIuaXNBY3RpdmUobGluay51cmxUcmVlLCB0aGlzLnJvdXRlckxpbmtBY3RpdmVPcHRpb25zLmV4YWN0KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzQWN0aXZlTGlua3MoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNBY3RpdmVDaGVja0ZuID0gdGhpcy5pc0xpbmtBY3RpdmUodGhpcy5yb3V0ZXIpO1xuICAgIHJldHVybiB0aGlzLmxpbmsgJiYgaXNBY3RpdmVDaGVja0ZuKHRoaXMubGluaykgfHxcbiAgICAgICAgdGhpcy5saW5rV2l0aEhyZWYgJiYgaXNBY3RpdmVDaGVja0ZuKHRoaXMubGlua1dpdGhIcmVmKSB8fFxuICAgICAgICB0aGlzLmxpbmtzLnNvbWUoaXNBY3RpdmVDaGVja0ZuKSB8fCB0aGlzLmxpbmtzV2l0aEhyZWZzLnNvbWUoaXNBY3RpdmVDaGVja0ZuKTtcbiAgfVxufVxuIl19