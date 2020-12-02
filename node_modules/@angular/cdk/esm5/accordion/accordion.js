/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, Input } from '@angular/core';
import { Subject } from 'rxjs';
/** Used to generate unique ID for each accordion. */
var nextId = 0;
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
var CdkAccordion = /** @class */ (function () {
    function CdkAccordion() {
        /** Emits when the state of the accordion changes */
        this._stateChanges = new Subject();
        /** Stream that emits true/false when openAll/closeAll is triggered. */
        this._openCloseAllActions = new Subject();
        /** A readonly id value to use for unique selection coordination. */
        this.id = "cdk-accordion-" + nextId++;
        this._multi = false;
    }
    Object.defineProperty(CdkAccordion.prototype, "multi", {
        /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
        get: function () { return this._multi; },
        set: function (multi) { this._multi = coerceBooleanProperty(multi); },
        enumerable: true,
        configurable: true
    });
    /** Opens all enabled accordion items in an accordion where multi is enabled. */
    CdkAccordion.prototype.openAll = function () {
        this._openCloseAll(true);
    };
    /** Closes all enabled accordion items in an accordion where multi is enabled. */
    CdkAccordion.prototype.closeAll = function () {
        this._openCloseAll(false);
    };
    CdkAccordion.prototype.ngOnChanges = function (changes) {
        this._stateChanges.next(changes);
    };
    CdkAccordion.prototype.ngOnDestroy = function () {
        this._stateChanges.complete();
    };
    CdkAccordion.prototype._openCloseAll = function (expanded) {
        if (this.multi) {
            this._openCloseAllActions.next(expanded);
        }
    };
    CdkAccordion.decorators = [
        { type: Directive, args: [{
                    selector: 'cdk-accordion, [cdkAccordion]',
                    exportAs: 'cdkAccordion',
                },] }
    ];
    CdkAccordion.propDecorators = {
        multi: [{ type: Input }]
    };
    return CdkAccordion;
}());
export { CdkAccordion };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9hY2NvcmRpb24vYWNjb3JkaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBZSxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFzQyxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRTdCLHFEQUFxRDtBQUNyRCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFFZjs7R0FFRztBQUNIO0lBQUE7UUFLRSxvREFBb0Q7UUFDM0Msa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBaUIsQ0FBQztRQUV0RCx1RUFBdUU7UUFDOUQseUJBQW9CLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFFekUsb0VBQW9FO1FBQzNELE9BQUUsR0FBRyxtQkFBaUIsTUFBTSxFQUFJLENBQUM7UUFNbEMsV0FBTSxHQUFZLEtBQUssQ0FBQztJQTJCbEMsQ0FBQztJQTlCQyxzQkFDSSwrQkFBSztRQUZULDJGQUEyRjthQUMzRixjQUN1QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzVDLFVBQVUsS0FBYyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FEN0I7SUFJNUMsZ0ZBQWdGO0lBQ2hGLDhCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxpRkFBaUY7SUFDakYsK0JBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVPLG9DQUFhLEdBQXJCLFVBQXNCLFFBQWlCO1FBQ3JDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDOztnQkExQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7O3dCQVlFLEtBQUs7O0lBOEJSLG1CQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7U0F6Q1ksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG4vKiogVXNlZCB0byBnZW5lcmF0ZSB1bmlxdWUgSUQgZm9yIGVhY2ggYWNjb3JkaW9uLiAqL1xubGV0IG5leHRJZCA9IDA7XG5cbi8qKlxuICogRGlyZWN0aXZlIHdob3NlIHB1cnBvc2UgaXMgdG8gbWFuYWdlIHRoZSBleHBhbmRlZCBzdGF0ZSBvZiBDZGtBY2NvcmRpb25JdGVtIGNoaWxkcmVuLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdjZGstYWNjb3JkaW9uLCBbY2RrQWNjb3JkaW9uXScsXG4gIGV4cG9ydEFzOiAnY2RrQWNjb3JkaW9uJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQWNjb3JkaW9uIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvKiogRW1pdHMgd2hlbiB0aGUgc3RhdGUgb2YgdGhlIGFjY29yZGlvbiBjaGFuZ2VzICovXG4gIHJlYWRvbmx5IF9zdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDxTaW1wbGVDaGFuZ2VzPigpO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB0cnVlL2ZhbHNlIHdoZW4gb3BlbkFsbC9jbG9zZUFsbCBpcyB0cmlnZ2VyZWQuICovXG4gIHJlYWRvbmx5IF9vcGVuQ2xvc2VBbGxBY3Rpb25zOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAvKiogQSByZWFkb25seSBpZCB2YWx1ZSB0byB1c2UgZm9yIHVuaXF1ZSBzZWxlY3Rpb24gY29vcmRpbmF0aW9uLiAqL1xuICByZWFkb25seSBpZCA9IGBjZGstYWNjb3JkaW9uLSR7bmV4dElkKyt9YDtcblxuICAvKiogV2hldGhlciB0aGUgYWNjb3JkaW9uIHNob3VsZCBhbGxvdyBtdWx0aXBsZSBleHBhbmRlZCBhY2NvcmRpb24gaXRlbXMgc2ltdWx0YW5lb3VzbHkuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX211bHRpOyB9XG4gIHNldCBtdWx0aShtdWx0aTogYm9vbGVhbikgeyB0aGlzLl9tdWx0aSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShtdWx0aSk7IH1cbiAgcHJpdmF0ZSBfbXVsdGk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogT3BlbnMgYWxsIGVuYWJsZWQgYWNjb3JkaW9uIGl0ZW1zIGluIGFuIGFjY29yZGlvbiB3aGVyZSBtdWx0aSBpcyBlbmFibGVkLiAqL1xuICBvcGVuQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuX29wZW5DbG9zZUFsbCh0cnVlKTtcbiAgfVxuXG4gIC8qKiBDbG9zZXMgYWxsIGVuYWJsZWQgYWNjb3JkaW9uIGl0ZW1zIGluIGFuIGFjY29yZGlvbiB3aGVyZSBtdWx0aSBpcyBlbmFibGVkLiAqL1xuICBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLl9vcGVuQ2xvc2VBbGwoZmFsc2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuX3N0YXRlQ2hhbmdlcy5uZXh0KGNoYW5nZXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuQ2xvc2VBbGwoZXhwYW5kZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tdWx0aSkge1xuICAgICAgdGhpcy5fb3BlbkNsb3NlQWxsQWN0aW9ucy5uZXh0KGV4cGFuZGVkKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbXVsdGk6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==