/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __extends, __metadata, __param } from "tslib";
import { DOCUMENT, ɵgetDOM as getDOM } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { ɵSharedStylesHost as SharedStylesHost, ɵTRANSITION_ID } from '@angular/platform-browser';
var ServerStylesHost = /** @class */ (function (_super) {
    __extends(ServerStylesHost, _super);
    function ServerStylesHost(doc, transitionId) {
        var _this = _super.call(this) || this;
        _this.doc = doc;
        _this.transitionId = transitionId;
        _this.head = null;
        _this.head = doc.getElementsByTagName('head')[0];
        return _this;
    }
    ServerStylesHost.prototype._addStyle = function (style) {
        var adapter = getDOM();
        var el = adapter.createElement('style');
        el.textContent = style;
        if (!!this.transitionId) {
            el.setAttribute('ng-transition', this.transitionId);
        }
        this.head.appendChild(el);
    };
    ServerStylesHost.prototype.onStylesAdded = function (additions) {
        var _this = this;
        additions.forEach(function (style) { return _this._addStyle(style); });
    };
    ServerStylesHost = __decorate([
        Injectable(),
        __param(0, Inject(DOCUMENT)),
        __param(1, Optional()), __param(1, Inject(ɵTRANSITION_ID)),
        __metadata("design:paramtypes", [Object, String])
    ], ServerStylesHost);
    return ServerStylesHost;
}(SharedStylesHost));
export { ServerStylesHost };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzX2hvc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1zZXJ2ZXIvc3JjL3N0eWxlc19ob3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFFLE9BQU8sSUFBSSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLGlCQUFpQixJQUFJLGdCQUFnQixFQUFFLGNBQWMsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBR2hHO0lBQXNDLG9DQUFnQjtJQUdwRCwwQkFDOEIsR0FBUSxFQUNVLFlBQW9CO1FBRnBFLFlBR0UsaUJBQU8sU0FFUjtRQUo2QixTQUFHLEdBQUgsR0FBRyxDQUFLO1FBQ1Usa0JBQVksR0FBWixZQUFZLENBQVE7UUFKNUQsVUFBSSxHQUFRLElBQUksQ0FBQztRQU12QixLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFDbEQsQ0FBQztJQUVPLG9DQUFTLEdBQWpCLFVBQWtCLEtBQWE7UUFDN0IsSUFBSSxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUM7UUFDdkIsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLEVBQUUsQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCx3Q0FBYSxHQUFiLFVBQWMsU0FBc0I7UUFBcEMsaUJBRUM7UUFEQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUF0QlUsZ0JBQWdCO1FBRDVCLFVBQVUsRUFBRTtRQUtOLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2hCLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQTs7T0FMNUIsZ0JBQWdCLENBdUI1QjtJQUFELHVCQUFDO0NBQUEsQUF2QkQsQ0FBc0MsZ0JBQWdCLEdBdUJyRDtTQXZCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RE9DVU1FTlQsIMm1Z2V0RE9NIGFzIGdldERPTX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge8m1U2hhcmVkU3R5bGVzSG9zdCBhcyBTaGFyZWRTdHlsZXNIb3N0LCDJtVRSQU5TSVRJT05fSUR9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmVyU3R5bGVzSG9zdCBleHRlbmRzIFNoYXJlZFN0eWxlc0hvc3Qge1xuICBwcml2YXRlIGhlYWQ6IGFueSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgICAgQE9wdGlvbmFsKCkgQEluamVjdCjJtVRSQU5TSVRJT05fSUQpIHByaXZhdGUgdHJhbnNpdGlvbklkOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGVhZCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkU3R5bGUoc3R5bGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBhZGFwdGVyID0gZ2V0RE9NKCk7XG4gICAgY29uc3QgZWwgPSBhZGFwdGVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgZWwudGV4dENvbnRlbnQgPSBzdHlsZTtcbiAgICBpZiAoISF0aGlzLnRyYW5zaXRpb25JZCkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCduZy10cmFuc2l0aW9uJywgdGhpcy50cmFuc2l0aW9uSWQpO1xuICAgIH1cbiAgICB0aGlzLmhlYWQuYXBwZW5kQ2hpbGQoZWwpO1xuICB9XG5cbiAgb25TdHlsZXNBZGRlZChhZGRpdGlvbnM6IFNldDxzdHJpbmc+KSB7XG4gICAgYWRkaXRpb25zLmZvckVhY2goc3R5bGUgPT4gdGhpcy5fYWRkU3R5bGUoc3R5bGUpKTtcbiAgfVxufVxuIl19