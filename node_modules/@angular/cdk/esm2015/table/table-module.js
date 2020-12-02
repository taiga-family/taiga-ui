/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/table-module.ts
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
import { HeaderRowOutlet, DataRowOutlet, CdkTable, FooterRowOutlet } from './table';
import { CdkCellOutlet, CdkFooterRow, CdkFooterRowDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef } from './row';
import { CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCell, CdkCellDef, CdkFooterCellDef, CdkFooterCell } from './cell';
import { CdkTextColumn } from './text-column';
/** @type {?} */
const EXPORTED_DECLARATIONS = [
    CdkTable,
    CdkRowDef,
    CdkCellDef,
    CdkCellOutlet,
    CdkHeaderCellDef,
    CdkFooterCellDef,
    CdkColumnDef,
    CdkCell,
    CdkRow,
    CdkHeaderCell,
    CdkFooterCell,
    CdkHeaderRow,
    CdkHeaderRowDef,
    CdkFooterRow,
    CdkFooterRowDef,
    DataRowOutlet,
    HeaderRowOutlet,
    FooterRowOutlet,
    CdkTextColumn,
];
export class CdkTableModule {
}
CdkTableModule.decorators = [
    { type: NgModule, args: [{
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90YWJsZS90YWJsZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ2xGLE9BQU8sRUFDTCxhQUFhLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFDbkYsU0FBUyxFQUNWLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUNMLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFDbEUsZ0JBQWdCLEVBQUUsYUFBYSxFQUNoQyxNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZUFBZSxDQUFDOztNQUV0QyxxQkFBcUIsR0FBRztJQUM1QixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osT0FBTztJQUNQLE1BQU07SUFDTixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0NBQ2Q7QUFPRCxNQUFNLE9BQU8sY0FBYzs7O1lBTDFCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUscUJBQXFCO2dCQUM5QixZQUFZLEVBQUUscUJBQXFCO2FBRXBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIZWFkZXJSb3dPdXRsZXQsIERhdGFSb3dPdXRsZXQsIENka1RhYmxlLCBGb290ZXJSb3dPdXRsZXR9IGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IHtcbiAgQ2RrQ2VsbE91dGxldCwgQ2RrRm9vdGVyUm93LCBDZGtGb290ZXJSb3dEZWYsIENka0hlYWRlclJvdywgQ2RrSGVhZGVyUm93RGVmLCBDZGtSb3csXG4gIENka1Jvd0RlZlxufSBmcm9tICcuL3Jvdyc7XG5pbXBvcnQge1xuICBDZGtDb2x1bW5EZWYsIENka0hlYWRlckNlbGxEZWYsIENka0hlYWRlckNlbGwsIENka0NlbGwsIENka0NlbGxEZWYsXG4gIENka0Zvb3RlckNlbGxEZWYsIENka0Zvb3RlckNlbGxcbn0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7Q2RrVGV4dENvbHVtbn0gZnJvbSAnLi90ZXh0LWNvbHVtbic7XG5cbmNvbnN0IEVYUE9SVEVEX0RFQ0xBUkFUSU9OUyA9IFtcbiAgQ2RrVGFibGUsXG4gIENka1Jvd0RlZixcbiAgQ2RrQ2VsbERlZixcbiAgQ2RrQ2VsbE91dGxldCxcbiAgQ2RrSGVhZGVyQ2VsbERlZixcbiAgQ2RrRm9vdGVyQ2VsbERlZixcbiAgQ2RrQ29sdW1uRGVmLFxuICBDZGtDZWxsLFxuICBDZGtSb3csXG4gIENka0hlYWRlckNlbGwsXG4gIENka0Zvb3RlckNlbGwsXG4gIENka0hlYWRlclJvdyxcbiAgQ2RrSGVhZGVyUm93RGVmLFxuICBDZGtGb290ZXJSb3csXG4gIENka0Zvb3RlclJvd0RlZixcbiAgRGF0YVJvd091dGxldCxcbiAgSGVhZGVyUm93T3V0bGV0LFxuICBGb290ZXJSb3dPdXRsZXQsXG4gIENka1RleHRDb2x1bW4sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBFWFBPUlRFRF9ERUNMQVJBVElPTlMsXG4gIGRlY2xhcmF0aW9uczogRVhQT1JURURfREVDTEFSQVRJT05TXG5cbn0pXG5leHBvcnQgY2xhc3MgQ2RrVGFibGVNb2R1bGUgeyB9XG4iXX0=