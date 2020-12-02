/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __assign, __awaiter, __extends, __generator } from "tslib";
import { HarnessEnvironment } from '@angular/cdk/testing';
import { by, element as protractorElement } from 'protractor';
import { ProtractorElement } from './protractor-element';
/** The default environment options. */
var defaultEnvironmentOptions = {
    queryFn: function (selector, root) { return root.all(by.css(selector)); }
};
/** A `HarnessEnvironment` implementation for Protractor. */
var ProtractorHarnessEnvironment = /** @class */ (function (_super) {
    __extends(ProtractorHarnessEnvironment, _super);
    function ProtractorHarnessEnvironment(rawRootElement, options) {
        var _this = _super.call(this, rawRootElement) || this;
        _this._options = __assign(__assign({}, defaultEnvironmentOptions), options);
        return _this;
    }
    /** Creates a `HarnessLoader` rooted at the document root. */
    ProtractorHarnessEnvironment.loader = function (options) {
        return new ProtractorHarnessEnvironment(protractorElement(by.css('body')), options);
    };
    ProtractorHarnessEnvironment.prototype.forceStabilize = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    ProtractorHarnessEnvironment.prototype.waitForTasksOutsideAngular = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ProtractorHarnessEnvironment.prototype.getDocumentRoot = function () {
        return protractorElement(by.css('body'));
    };
    ProtractorHarnessEnvironment.prototype.createTestElement = function (element) {
        return new ProtractorElement(element);
    };
    ProtractorHarnessEnvironment.prototype.createEnvironment = function (element) {
        return new ProtractorHarnessEnvironment(element, this._options);
    };
    ProtractorHarnessEnvironment.prototype.getAllRawElements = function (selector) {
        return __awaiter(this, void 0, void 0, function () {
            var elementArrayFinder, length, elements, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        elementArrayFinder = this._options.queryFn(selector, this.rawRootElement);
                        return [4 /*yield*/, elementArrayFinder.count()];
                    case 1:
                        length = _a.sent();
                        elements = [];
                        for (i = 0; i < length; i++) {
                            elements.push(elementArrayFinder.get(i));
                        }
                        return [2 /*return*/, elements];
                }
            });
        });
    };
    return ProtractorHarnessEnvironment;
}(HarnessEnvironment));
export { ProtractorHarnessEnvironment };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci1oYXJuZXNzLWVudmlyb25tZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90ZXN0aW5nL3Byb3RyYWN0b3IvcHJvdHJhY3Rvci1oYXJuZXNzLWVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBQUMsa0JBQWtCLEVBQTZCLE1BQU0sc0JBQXNCLENBQUM7QUFDcEYsT0FBTyxFQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksaUJBQWlCLEVBQW9DLE1BQU0sWUFBWSxDQUFDO0FBQy9GLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBUXZELHVDQUF1QztBQUN2QyxJQUFNLHlCQUF5QixHQUF3QztJQUNyRSxPQUFPLEVBQUUsVUFBQyxRQUFnQixFQUFFLElBQW1CLElBQUssT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBMUIsQ0FBMEI7Q0FDL0UsQ0FBQztBQUVGLDREQUE0RDtBQUM1RDtJQUFrRCxnREFBaUM7SUFJakYsc0NBQ0ksY0FBNkIsRUFBRSxPQUE2QztRQURoRixZQUVFLGtCQUFNLGNBQWMsQ0FBQyxTQUV0QjtRQURDLEtBQUksQ0FBQyxRQUFRLHlCQUFPLHlCQUF5QixHQUFLLE9BQU8sQ0FBQyxDQUFDOztJQUM3RCxDQUFDO0lBRUQsNkRBQTZEO0lBQ3RELG1DQUFNLEdBQWIsVUFBYyxPQUE2QztRQUN6RCxPQUFPLElBQUksNEJBQTRCLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFSyxxREFBYyxHQUFwQjs7OztLQUF3QztJQUVsQyxpRUFBMEIsR0FBaEM7Ozs7OztLQUdDO0lBRVMsc0RBQWUsR0FBekI7UUFDRSxPQUFPLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRVMsd0RBQWlCLEdBQTNCLFVBQTRCLE9BQXNCO1FBQ2hELE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRVMsd0RBQWlCLEdBQTNCLFVBQTRCLE9BQXNCO1FBQ2hELE9BQU8sSUFBSSw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFZSx3REFBaUIsR0FBakMsVUFBa0MsUUFBZ0I7Ozs7Ozt3QkFDMUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzt3QkFDakUscUJBQU0sa0JBQWtCLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUF6QyxNQUFNLEdBQUcsU0FBZ0M7d0JBQ3pDLFFBQVEsR0FBb0IsRUFBRSxDQUFDO3dCQUNyQyxLQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDMUM7d0JBQ0Qsc0JBQU8sUUFBUSxFQUFDOzs7O0tBQ2pCO0lBQ0gsbUNBQUM7QUFBRCxDQUFDLEFBM0NELENBQWtELGtCQUFrQixHQTJDbkUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtIYXJuZXNzRW52aXJvbm1lbnQsIEhhcm5lc3NMb2FkZXIsIFRlc3RFbGVtZW50fSBmcm9tICdAYW5ndWxhci9jZGsvdGVzdGluZyc7XG5pbXBvcnQge2J5LCBlbGVtZW50IGFzIHByb3RyYWN0b3JFbGVtZW50LCBFbGVtZW50QXJyYXlGaW5kZXIsIEVsZW1lbnRGaW5kZXJ9IGZyb20gJ3Byb3RyYWN0b3InO1xuaW1wb3J0IHtQcm90cmFjdG9yRWxlbWVudH0gZnJvbSAnLi9wcm90cmFjdG9yLWVsZW1lbnQnO1xuXG4vKiogT3B0aW9ucyB0byBjb25maWd1cmUgdGhlIGVudmlyb25tZW50LiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcm90cmFjdG9ySGFybmVzc0Vudmlyb25tZW50T3B0aW9ucyB7XG4gIC8qKiBUaGUgcXVlcnkgZnVuY3Rpb24gdXNlZCB0byBmaW5kIERPTSBlbGVtZW50cy4gKi9cbiAgcXVlcnlGbjogKHNlbGVjdG9yOiBzdHJpbmcsIHJvb3Q6IEVsZW1lbnRGaW5kZXIpID0+IEVsZW1lbnRBcnJheUZpbmRlcjtcbn1cblxuLyoqIFRoZSBkZWZhdWx0IGVudmlyb25tZW50IG9wdGlvbnMuICovXG5jb25zdCBkZWZhdWx0RW52aXJvbm1lbnRPcHRpb25zOiBQcm90cmFjdG9ySGFybmVzc0Vudmlyb25tZW50T3B0aW9ucyA9IHtcbiAgcXVlcnlGbjogKHNlbGVjdG9yOiBzdHJpbmcsIHJvb3Q6IEVsZW1lbnRGaW5kZXIpID0+IHJvb3QuYWxsKGJ5LmNzcyhzZWxlY3RvcikpXG59O1xuXG4vKiogQSBgSGFybmVzc0Vudmlyb25tZW50YCBpbXBsZW1lbnRhdGlvbiBmb3IgUHJvdHJhY3Rvci4gKi9cbmV4cG9ydCBjbGFzcyBQcm90cmFjdG9ySGFybmVzc0Vudmlyb25tZW50IGV4dGVuZHMgSGFybmVzc0Vudmlyb25tZW50PEVsZW1lbnRGaW5kZXI+IHtcbiAgLyoqIFRoZSBvcHRpb25zIGZvciB0aGlzIGVudmlyb25tZW50LiAqL1xuICBwcml2YXRlIF9vcHRpb25zOiBQcm90cmFjdG9ySGFybmVzc0Vudmlyb25tZW50T3B0aW9ucztcblxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG4gICAgICByYXdSb290RWxlbWVudDogRWxlbWVudEZpbmRlciwgb3B0aW9ucz86IFByb3RyYWN0b3JIYXJuZXNzRW52aXJvbm1lbnRPcHRpb25zKSB7XG4gICAgc3VwZXIocmF3Um9vdEVsZW1lbnQpO1xuICAgIHRoaXMuX29wdGlvbnMgPSB7Li4uZGVmYXVsdEVudmlyb25tZW50T3B0aW9ucywgLi4ub3B0aW9uc307XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIGBIYXJuZXNzTG9hZGVyYCByb290ZWQgYXQgdGhlIGRvY3VtZW50IHJvb3QuICovXG4gIHN0YXRpYyBsb2FkZXIob3B0aW9ucz86IFByb3RyYWN0b3JIYXJuZXNzRW52aXJvbm1lbnRPcHRpb25zKTogSGFybmVzc0xvYWRlciB7XG4gICAgcmV0dXJuIG5ldyBQcm90cmFjdG9ySGFybmVzc0Vudmlyb25tZW50KHByb3RyYWN0b3JFbGVtZW50KGJ5LmNzcygnYm9keScpKSwgb3B0aW9ucyk7XG4gIH1cblxuICBhc3luYyBmb3JjZVN0YWJpbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHt9XG5cbiAgYXN5bmMgd2FpdEZvclRhc2tzT3V0c2lkZUFuZ3VsYXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gVE9ETzogZmlndXJlIG91dCBob3cgd2UgY2FuIGRvIHRoaXMgZm9yIHRoZSBwcm90cmFjdG9yIGVudmlyb25tZW50LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvaXNzdWVzLzE3NDEyXG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RG9jdW1lbnRSb290KCk6IEVsZW1lbnRGaW5kZXIge1xuICAgIHJldHVybiBwcm90cmFjdG9yRWxlbWVudChieS5jc3MoJ2JvZHknKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlVGVzdEVsZW1lbnQoZWxlbWVudDogRWxlbWVudEZpbmRlcik6IFRlc3RFbGVtZW50IHtcbiAgICByZXR1cm4gbmV3IFByb3RyYWN0b3JFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUVudmlyb25tZW50KGVsZW1lbnQ6IEVsZW1lbnRGaW5kZXIpOiBIYXJuZXNzRW52aXJvbm1lbnQ8RWxlbWVudEZpbmRlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvdHJhY3Rvckhhcm5lc3NFbnZpcm9ubWVudChlbGVtZW50LCB0aGlzLl9vcHRpb25zKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBnZXRBbGxSYXdFbGVtZW50cyhzZWxlY3Rvcjogc3RyaW5nKTogUHJvbWlzZTxFbGVtZW50RmluZGVyW10+IHtcbiAgICBjb25zdCBlbGVtZW50QXJyYXlGaW5kZXIgPSB0aGlzLl9vcHRpb25zLnF1ZXJ5Rm4oc2VsZWN0b3IsIHRoaXMucmF3Um9vdEVsZW1lbnQpO1xuICAgIGNvbnN0IGxlbmd0aCA9IGF3YWl0IGVsZW1lbnRBcnJheUZpbmRlci5jb3VudCgpO1xuICAgIGNvbnN0IGVsZW1lbnRzOiBFbGVtZW50RmluZGVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnRBcnJheUZpbmRlci5nZXQoaSkpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH1cbn1cbiJdfQ==