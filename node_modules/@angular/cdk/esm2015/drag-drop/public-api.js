/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export { DragDrop } from './drag-drop';
export { DragRef } from './drag-ref';
export { DropListRef } from './drop-list-ref';
export {} from './drag-events';
export { moveItemInArray, transferArrayItem, copyArrayItem } from './drag-utils';
export { DragDropModule } from './drag-drop-module';
export { DragDropRegistry } from './drag-drop-registry';
export { CdkDropList } from './directives/drop-list';
export { CDK_DRAG_CONFIG_FACTORY, CDK_DRAG_CONFIG } from './directives/config';
export { CdkDropListGroup } from './directives/drop-list-group';
export { CDK_DROP_LIST, CdkDrag } from './directives/drag';
export { CdkDragHandle } from './directives/drag-handle';
export { CdkDragPreview } from './directives/drag-preview';
export { CdkDragPlaceholder } from './directives/drag-placeholder';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvZHJhZy1kcm9wL3B1YmxpYy1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUMsT0FBTyxFQUF1QixNQUFNLFlBQVksQ0FBQztBQUN6RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFNUMsZUFBYyxlQUFlLENBQUM7QUFDOUIsa0VBQWMsY0FBYyxDQUFDO0FBQzdCLCtCQUFjLG9CQUFvQixDQUFDO0FBQ25DLGlDQUFjLHNCQUFzQixDQUFDO0FBRXJDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCx5REFBYyxxQkFBcUIsQ0FBQztBQUNwQyxpQ0FBYyw4QkFBOEIsQ0FBQztBQUM3Qyx1Q0FBYyxtQkFBbUIsQ0FBQztBQUNsQyw4QkFBYywwQkFBMEIsQ0FBQztBQUN6QywrQkFBYywyQkFBMkIsQ0FBQztBQUMxQyxtQ0FBYywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQge0RyYWdEcm9wfSBmcm9tICcuL2RyYWctZHJvcCc7XG5leHBvcnQge0RyYWdSZWYsIERyYWdSZWZDb25maWcsIFBvaW50fSBmcm9tICcuL2RyYWctcmVmJztcbmV4cG9ydCB7RHJvcExpc3RSZWZ9IGZyb20gJy4vZHJvcC1saXN0LXJlZic7XG5cbmV4cG9ydCAqIGZyb20gJy4vZHJhZy1ldmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9kcmFnLXV0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vZHJhZy1kcm9wLW1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL2RyYWctZHJvcC1yZWdpc3RyeSc7XG5cbmV4cG9ydCB7Q2RrRHJvcExpc3R9IGZyb20gJy4vZGlyZWN0aXZlcy9kcm9wLWxpc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmVzL2NvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZXMvZHJvcC1saXN0LWdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlcy9kcmFnJztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlcy9kcmFnLWhhbmRsZSc7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZXMvZHJhZy1wcmV2aWV3JztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlcy9kcmFnLXBsYWNlaG9sZGVyJztcbiJdfQ==