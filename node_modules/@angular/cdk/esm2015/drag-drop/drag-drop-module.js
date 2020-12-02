/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-drop-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { CdkDropList } from './directives/drop-list';
import { CdkDropListGroup } from './directives/drop-list-group';
import { CdkDrag } from './directives/drag';
import { CdkDragHandle } from './directives/drag-handle';
import { CdkDragPreview } from './directives/drag-preview';
import { CdkDragPlaceholder } from './directives/drag-placeholder';
import { DragDrop } from './drag-drop';
export class DragDropModule {
}
DragDropModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    CdkDropList,
                    CdkDropListGroup,
                    CdkDrag,
                    CdkDragHandle,
                    CdkDragPreview,
                    CdkDragPlaceholder,
                ],
                exports: [
                    CdkScrollableModule,
                    CdkDropList,
                    CdkDropListGroup,
                    CdkDrag,
                    CdkDragHandle,
                    CdkDragPreview,
                    CdkDragPlaceholder,
                ],
                providers: [
                    DragDrop,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvZHJhZy1kcm9wL2RyYWctZHJvcC1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQXdCckMsTUFBTSxPQUFPLGNBQWM7OztZQXRCMUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixXQUFXO29CQUNYLGdCQUFnQjtvQkFDaEIsT0FBTztvQkFDUCxhQUFhO29CQUNiLGNBQWM7b0JBQ2Qsa0JBQWtCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO29CQUNuQixXQUFXO29CQUNYLGdCQUFnQjtvQkFDaEIsT0FBTztvQkFDUCxhQUFhO29CQUNiLGNBQWM7b0JBQ2Qsa0JBQWtCO2lCQUNuQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsUUFBUTtpQkFDVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtTY3JvbGxhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7Q2RrRHJvcExpc3R9IGZyb20gJy4vZGlyZWN0aXZlcy9kcm9wLWxpc3QnO1xuaW1wb3J0IHtDZGtEcm9wTGlzdEdyb3VwfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJvcC1saXN0LWdyb3VwJztcbmltcG9ydCB7Q2RrRHJhZ30gZnJvbSAnLi9kaXJlY3RpdmVzL2RyYWcnO1xuaW1wb3J0IHtDZGtEcmFnSGFuZGxlfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJhZy1oYW5kbGUnO1xuaW1wb3J0IHtDZGtEcmFnUHJldmlld30gZnJvbSAnLi9kaXJlY3RpdmVzL2RyYWctcHJldmlldyc7XG5pbXBvcnQge0Nka0RyYWdQbGFjZWhvbGRlcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2RyYWctcGxhY2Vob2xkZXInO1xuaW1wb3J0IHtEcmFnRHJvcH0gZnJvbSAnLi9kcmFnLWRyb3AnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDZGtEcm9wTGlzdCxcbiAgICBDZGtEcm9wTGlzdEdyb3VwLFxuICAgIENka0RyYWcsXG4gICAgQ2RrRHJhZ0hhbmRsZSxcbiAgICBDZGtEcmFnUHJldmlldyxcbiAgICBDZGtEcmFnUGxhY2Vob2xkZXIsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDZGtTY3JvbGxhYmxlTW9kdWxlLFxuICAgIENka0Ryb3BMaXN0LFxuICAgIENka0Ryb3BMaXN0R3JvdXAsXG4gICAgQ2RrRHJhZyxcbiAgICBDZGtEcmFnSGFuZGxlLFxuICAgIENka0RyYWdQcmV2aWV3LFxuICAgIENka0RyYWdQbGFjZWhvbGRlcixcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRHJhZ0Ryb3AsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BNb2R1bGUge31cbiJdfQ==