/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/tree/tree-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
import { CdkTreeNodeOutlet } from './outlet';
import { CdkTreeNodePadding } from './padding';
import { CdkTreeNodeToggle } from './toggle';
import { CdkTree, CdkTreeNode } from './tree';
import { CdkTreeNodeDef } from './node';
import { CdkNestedTreeNode } from './nested-node';
/** @type {?} */
const EXPORTED_DECLARATIONS = [
    CdkNestedTreeNode,
    CdkTreeNodeDef,
    CdkTreeNodePadding,
    CdkTreeNodeToggle,
    CdkTree,
    CdkTreeNode,
    CdkTreeNodeOutlet,
];
export class CdkTreeModule {
}
CdkTreeModule.decorators = [
    { type: NgModule, args: [{
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS,
                providers: [FocusMonitor, CdkTreeNodeDef]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3RyZWUvdHJlZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDM0MsT0FBTyxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUN0QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7O01BRTFDLHFCQUFxQixHQUFHO0lBQzVCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsV0FBVztJQUNYLGlCQUFpQjtDQUNsQjtBQU9ELE1BQU0sT0FBTyxhQUFhOzs7WUFMekIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxxQkFBcUI7Z0JBQzlCLFlBQVksRUFBRSxxQkFBcUI7Z0JBQ25DLFNBQVMsRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUM7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtGb2N1c01vbml0b3J9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtUcmVlTm9kZU91dGxldH0gZnJvbSAnLi9vdXRsZXQnO1xuaW1wb3J0IHtDZGtUcmVlTm9kZVBhZGRpbmd9IGZyb20gJy4vcGFkZGluZyc7XG5pbXBvcnQge0Nka1RyZWVOb2RlVG9nZ2xlfSBmcm9tICcuL3RvZ2dsZSc7XG5pbXBvcnQge0Nka1RyZWUsIENka1RyZWVOb2RlfSBmcm9tICcuL3RyZWUnO1xuaW1wb3J0IHtDZGtUcmVlTm9kZURlZn0gZnJvbSAnLi9ub2RlJztcbmltcG9ydCB7Q2RrTmVzdGVkVHJlZU5vZGV9IGZyb20gJy4vbmVzdGVkLW5vZGUnO1xuXG5jb25zdCBFWFBPUlRFRF9ERUNMQVJBVElPTlMgPSBbXG4gIENka05lc3RlZFRyZWVOb2RlLFxuICBDZGtUcmVlTm9kZURlZixcbiAgQ2RrVHJlZU5vZGVQYWRkaW5nLFxuICBDZGtUcmVlTm9kZVRvZ2dsZSxcbiAgQ2RrVHJlZSxcbiAgQ2RrVHJlZU5vZGUsXG4gIENka1RyZWVOb2RlT3V0bGV0LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogRVhQT1JURURfREVDTEFSQVRJT05TLFxuICBkZWNsYXJhdGlvbnM6IEVYUE9SVEVEX0RFQ0xBUkFUSU9OUyxcbiAgcHJvdmlkZXJzOiBbRm9jdXNNb25pdG9yLCBDZGtUcmVlTm9kZURlZl1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrVHJlZU1vZHVsZSB7fVxuIl19