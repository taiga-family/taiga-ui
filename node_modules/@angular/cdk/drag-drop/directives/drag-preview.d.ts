/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TemplateRef } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CdkDragPreview<T = any> {
    templateRef: TemplateRef<T>;
    /** Context data to be added to the preview template instance. */
    data: T;
    /** Whether the preview should preserve the same size as the item that is being dragged. */
    get matchSize(): boolean;
    set matchSize(value: boolean);
    private _matchSize;
    constructor(templateRef: TemplateRef<T>);
    static ngAcceptInputType_matchSize: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkDragPreview<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkDragPreview<any>, "ng-template[cdkDragPreview]", never, { "matchSize": "matchSize"; "data": "data"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1wcmV2aWV3LmQudHMiLCJzb3VyY2VzIjpbImRyYWctcHJldmlldy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG4vKipcbiAqIEVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMgYSB0ZW1wbGF0ZSBmb3IgdGhlIHByZXZpZXdcbiAqIG9mIGEgQ2RrRHJhZyB3aGVuIGl0IGlzIGJlaW5nIGRyYWdnZWQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka0RyYWdQcmV2aWV3PFQgPSBhbnk+IHtcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8VD47XG4gICAgLyoqIENvbnRleHQgZGF0YSB0byBiZSBhZGRlZCB0byB0aGUgcHJldmlldyB0ZW1wbGF0ZSBpbnN0YW5jZS4gKi9cbiAgICBkYXRhOiBUO1xuICAgIC8qKiBXaGV0aGVyIHRoZSBwcmV2aWV3IHNob3VsZCBwcmVzZXJ2ZSB0aGUgc2FtZSBzaXplIGFzIHRoZSBpdGVtIHRoYXQgaXMgYmVpbmcgZHJhZ2dlZC4gKi9cbiAgICBnZXQgbWF0Y2hTaXplKCk6IGJvb2xlYW47XG4gICAgc2V0IG1hdGNoU2l6ZSh2YWx1ZTogYm9vbGVhbik7XG4gICAgcHJpdmF0ZSBfbWF0Y2hTaXplO1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxUPik7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21hdGNoU2l6ZTogQm9vbGVhbklucHV0O1xufVxuIl19