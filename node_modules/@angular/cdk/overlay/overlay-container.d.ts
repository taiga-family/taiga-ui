/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken, OnDestroy, Optional } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
/** Container inside which all overlays will render. */
import * as ɵngcc0 from '@angular/core';
export declare class OverlayContainer implements OnDestroy {
    /**
     * @deprecated `platform` parameter to become required.
     * @breaking-change 10.0.0
     */
    protected _platform?: Platform | undefined;
    protected _containerElement: HTMLElement;
    protected _document: Document;
    constructor(document: any, 
    /**
     * @deprecated `platform` parameter to become required.
     * @breaking-change 10.0.0
     */
    _platform?: Platform | undefined);
    ngOnDestroy(): void;
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    getContainerElement(): HTMLElement;
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    protected _createContainer(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OverlayContainer, never>;
}
/** @docs-private @deprecated @breaking-change 8.0.0 */
export declare function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer: OverlayContainer, _document: any): OverlayContainer;
/** @docs-private @deprecated @breaking-change 8.0.0 */
export declare const OVERLAY_CONTAINER_PROVIDER: {
    provide: typeof OverlayContainer;
    deps: (Optional[] | InjectionToken<any>)[];
    useFactory: typeof OVERLAY_CONTAINER_PROVIDER_FACTORY;
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1jb250YWluZXIuZC50cyIsInNvdXJjZXMiOlsib3ZlcmxheS1jb250YWluZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuLyoqIENvbnRhaW5lciBpbnNpZGUgd2hpY2ggYWxsIG92ZXJsYXlzIHdpbGwgcmVuZGVyLiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3ZlcmxheUNvbnRhaW5lciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgYHBsYXRmb3JtYCBwYXJhbWV0ZXIgdG8gYmVjb21lIHJlcXVpcmVkLlxuICAgICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9wbGF0Zm9ybT86IFBsYXRmb3JtIHwgdW5kZWZpbmVkO1xuICAgIHByb3RlY3RlZCBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQ7XG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQ6IGFueSwgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgYHBsYXRmb3JtYCBwYXJhbWV0ZXIgdG8gYmVjb21lIHJlcXVpcmVkLlxuICAgICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAgICovXG4gICAgX3BsYXRmb3JtPzogUGxhdGZvcm0gfCB1bmRlZmluZWQpO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgb3ZlcmxheSBjb250YWluZXIgZWxlbWVudC4gSXQgd2lsbCBsYXppbHlcbiAgICAgKiBjcmVhdGUgdGhlIGVsZW1lbnQgdGhlIGZpcnN0IHRpbWUgIGl0IGlzIGNhbGxlZCB0byBmYWNpbGl0YXRlIHVzaW5nXG4gICAgICogdGhlIGNvbnRhaW5lciBpbiBub24tYnJvd3NlciBlbnZpcm9ubWVudHMuXG4gICAgICogQHJldHVybnMgdGhlIGNvbnRhaW5lciBlbGVtZW50XG4gICAgICovXG4gICAgZ2V0Q29udGFpbmVyRWxlbWVudCgpOiBIVE1MRWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdGhlIG92ZXJsYXkgY29udGFpbmVyIGVsZW1lbnQsIHdoaWNoIGlzIHNpbXBseSBhIGRpdlxuICAgICAqIHdpdGggdGhlICdjZGstb3ZlcmxheS1jb250YWluZXInIGNsYXNzIG9uIHRoZSBkb2N1bWVudCBib2R5LlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfY3JlYXRlQ29udGFpbmVyKCk6IHZvaWQ7XG59XG4vKiogQGRvY3MtcHJpdmF0ZSBAZGVwcmVjYXRlZCBAYnJlYWtpbmctY2hhbmdlIDguMC4wICovXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBPVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUl9GQUNUT1JZKHBhcmVudENvbnRhaW5lcjogT3ZlcmxheUNvbnRhaW5lciwgX2RvY3VtZW50OiBhbnkpOiBPdmVybGF5Q29udGFpbmVyO1xuLyoqIEBkb2NzLXByaXZhdGUgQGRlcHJlY2F0ZWQgQGJyZWFraW5nLWNoYW5nZSA4LjAuMCAqL1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVI6IHtcbiAgICBwcm92aWRlOiB0eXBlb2YgT3ZlcmxheUNvbnRhaW5lcjtcbiAgICBkZXBzOiAoT3B0aW9uYWxbXSB8IEluamVjdGlvblRva2VuPGFueT4pW107XG4gICAgdXNlRmFjdG9yeTogdHlwZW9mIE9WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSX0ZBQ1RPUlk7XG59O1xuIl19