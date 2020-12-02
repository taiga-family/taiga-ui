/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Inject, InjectionToken, Optional, ViewContainerRef, } from '@angular/core';
/**
 * Injection token used to provide a `CdkTreeNode` to its outlet.
 * Used primarily to avoid circular imports.
 * @docs-private
 */
export var CDK_TREE_NODE_OUTLET_NODE = new InjectionToken('CDK_TREE_NODE_OUTLET_NODE');
/**
 * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */
var CdkTreeNodeOutlet = /** @class */ (function () {
    function CdkTreeNodeOutlet(viewContainer, _node) {
        this.viewContainer = viewContainer;
        this._node = _node;
    }
    CdkTreeNodeOutlet.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkTreeNodeOutlet]'
                },] }
    ];
    /** @nocollapse */
    CdkTreeNodeOutlet.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Inject, args: [CDK_TREE_NODE_OUTLET_NODE,] }, { type: Optional }] }
    ]; };
    return CdkTreeNodeOutlet;
}());
export { CdkTreeNodeOutlet };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90cmVlL291dGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixjQUFjLEVBQ2QsUUFBUSxFQUNSLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2Qjs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQUcsSUFBSSxjQUFjLENBQUssMkJBQTJCLENBQUMsQ0FBQztBQUU3Rjs7O0dBR0c7QUFDSDtJQUlFLDJCQUNXLGFBQStCLEVBQ2dCLEtBQVc7UUFEMUQsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQ2dCLFVBQUssR0FBTCxLQUFLLENBQU07SUFBRyxDQUFDOztnQkFOMUUsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2hDOzs7O2dCQWhCQyxnQkFBZ0I7Z0RBb0JYLE1BQU0sU0FBQyx5QkFBeUIsY0FBRyxRQUFROztJQUNsRCx3QkFBQztDQUFBLEFBUEQsSUFPQztTQUpZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbmplY3QsXG4gIEluamVjdGlvblRva2VuLFxuICBPcHRpb25hbCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW5qZWN0aW9uIHRva2VuIHVzZWQgdG8gcHJvdmlkZSBhIGBDZGtUcmVlTm9kZWAgdG8gaXRzIG91dGxldC5cbiAqIFVzZWQgcHJpbWFyaWx5IHRvIGF2b2lkIGNpcmN1bGFyIGltcG9ydHMuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBDREtfVFJFRV9OT0RFX09VVExFVF9OT0RFID0gbmV3IEluamVjdGlvblRva2VuPHt9PignQ0RLX1RSRUVfTk9ERV9PVVRMRVRfTk9ERScpO1xuXG4vKipcbiAqIE91dGxldCBmb3IgbmVzdGVkIENka05vZGUuIFB1dCBgW2Nka1RyZWVOb2RlT3V0bGV0XWAgb24gYSB0YWcgdG8gcGxhY2UgY2hpbGRyZW4gZGF0YU5vZGVzXG4gKiBpbnNpZGUgdGhlIG91dGxldC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka1RyZWVOb2RlT3V0bGV0XSdcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVHJlZU5vZGVPdXRsZXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgQEluamVjdChDREtfVFJFRV9OT0RFX09VVExFVF9OT0RFKSBAT3B0aW9uYWwoKSBwdWJsaWMgX25vZGU/OiBhbnkpIHt9XG59XG4iXX0=