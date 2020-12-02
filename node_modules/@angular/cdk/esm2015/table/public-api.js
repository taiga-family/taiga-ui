/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export { DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CDK_TABLE_TEMPLATE, CdkTable } from './table';
export { CdkCellDef, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, BaseCdkCell, CdkHeaderCell, CdkFooterCell, CdkCell } from './cell';
export { CDK_ROW_TEMPLATE, BaseRowDef, CdkHeaderRowDef, CdkFooterRowDef, CdkRowDef, CdkCellOutlet, CdkHeaderRow, CdkFooterRow, CdkRow } from './row';
export { CdkTableModule } from './table-module';
export { STICKY_DIRECTIONS, StickyStyler } from './sticky-styler';
export { mixinHasStickyInput } from './can-stick';
export { CdkTextColumn } from './text-column';
export { CDK_TABLE, TEXT_COLUMN_OPTIONS } from './tokens';
/** Re-export DataSource for a more intuitive experience for users of just the table. */
export { DataSource } from '@angular/cdk/collections';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdGFibGUvcHVibGljLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSw4RkFBYyxTQUFTLENBQUM7QUFDeEIsaUlBQWMsUUFBUSxDQUFDO0FBQ3ZCLDZJQUFjLE9BQU8sQ0FBQztBQUN0QiwrQkFBYyxnQkFBZ0IsQ0FBQztBQUMvQixnREFBYyxpQkFBaUIsQ0FBQztBQUNoQyxvQ0FBYyxhQUFhLENBQUM7QUFDNUIsOEJBQWMsZUFBZSxDQUFDO0FBQzlCLCtDQUFjLFVBQVUsQ0FBQzs7QUFHekIsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vdGFibGUnO1xuZXhwb3J0ICogZnJvbSAnLi9jZWxsJztcbmV4cG9ydCAqIGZyb20gJy4vcm93JztcbmV4cG9ydCAqIGZyb20gJy4vdGFibGUtbW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vc3RpY2t5LXN0eWxlcic7XG5leHBvcnQgKiBmcm9tICcuL2Nhbi1zdGljayc7XG5leHBvcnQgKiBmcm9tICcuL3RleHQtY29sdW1uJztcbmV4cG9ydCAqIGZyb20gJy4vdG9rZW5zJztcblxuLyoqIFJlLWV4cG9ydCBEYXRhU291cmNlIGZvciBhIG1vcmUgaW50dWl0aXZlIGV4cGVyaWVuY2UgZm9yIHVzZXJzIG9mIGp1c3QgdGhlIHRhYmxlLiAqL1xuZXhwb3J0IHtEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuIl19