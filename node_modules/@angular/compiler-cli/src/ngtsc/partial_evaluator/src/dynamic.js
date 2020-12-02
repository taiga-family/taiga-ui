/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/dynamic", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Represents a value which cannot be determined statically.
     */
    var DynamicValue = /** @class */ (function () {
        function DynamicValue(node, reason, code) {
            this.node = node;
            this.reason = reason;
            this.code = code;
        }
        DynamicValue.fromDynamicInput = function (node, input) {
            return new DynamicValue(node, input, 0 /* DYNAMIC_INPUT */);
        };
        DynamicValue.fromDynamicString = function (node) {
            return new DynamicValue(node, undefined, 1 /* DYNAMIC_STRING */);
        };
        DynamicValue.fromExternalReference = function (node, ref) {
            return new DynamicValue(node, ref, 2 /* EXTERNAL_REFERENCE */);
        };
        DynamicValue.fromUnsupportedSyntax = function (node) {
            return new DynamicValue(node, undefined, 3 /* UNSUPPORTED_SYNTAX */);
        };
        DynamicValue.fromUnknownIdentifier = function (node) {
            return new DynamicValue(node, undefined, 4 /* UNKNOWN_IDENTIFIER */);
        };
        DynamicValue.fromInvalidExpressionType = function (node, value) {
            return new DynamicValue(node, value, 5 /* INVALID_EXPRESSION_TYPE */);
        };
        DynamicValue.fromUnknown = function (node) {
            return new DynamicValue(node, undefined, 6 /* UNKNOWN */);
        };
        DynamicValue.prototype.isFromDynamicInput = function () {
            return this.code === 0 /* DYNAMIC_INPUT */;
        };
        DynamicValue.prototype.isFromDynamicString = function () {
            return this.code === 1 /* DYNAMIC_STRING */;
        };
        DynamicValue.prototype.isFromExternalReference = function () {
            return this.code === 2 /* EXTERNAL_REFERENCE */;
        };
        DynamicValue.prototype.isFromUnsupportedSyntax = function () {
            return this.code === 3 /* UNSUPPORTED_SYNTAX */;
        };
        DynamicValue.prototype.isFromUnknownIdentifier = function () {
            return this.code === 4 /* UNKNOWN_IDENTIFIER */;
        };
        DynamicValue.prototype.isFromInvalidExpressionType = function () {
            return this.code === 5 /* INVALID_EXPRESSION_TYPE */;
        };
        DynamicValue.prototype.isFromUnknown = function () {
            return this.code === 6 /* UNKNOWN */;
        };
        return DynamicValue;
    }());
    exports.DynamicValue = DynamicValue;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvcGFydGlhbF9ldmFsdWF0b3Ivc3JjL2R5bmFtaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUF5REg7O09BRUc7SUFDSDtRQUNFLHNCQUNhLElBQWEsRUFBVyxNQUFTLEVBQVUsSUFBd0I7WUFBbkUsU0FBSSxHQUFKLElBQUksQ0FBUztZQUFXLFdBQU0sR0FBTixNQUFNLENBQUc7WUFBVSxTQUFJLEdBQUosSUFBSSxDQUFvQjtRQUFHLENBQUM7UUFFN0UsNkJBQWdCLEdBQXZCLFVBQXdCLElBQWEsRUFBRSxLQUFtQjtZQUN4RCxPQUFPLElBQUksWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLHdCQUFtQyxDQUFDO1FBQ3pFLENBQUM7UUFFTSw4QkFBaUIsR0FBeEIsVUFBeUIsSUFBYTtZQUNwQyxPQUFPLElBQUksWUFBWSxDQUFDLElBQUksRUFBRSxTQUFTLHlCQUFvQyxDQUFDO1FBQzlFLENBQUM7UUFFTSxrQ0FBcUIsR0FBNUIsVUFBNkIsSUFBYSxFQUFFLEdBQThCO1lBRXhFLE9BQU8sSUFBSSxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsNkJBQXdDLENBQUM7UUFDNUUsQ0FBQztRQUVNLGtDQUFxQixHQUE1QixVQUE2QixJQUFhO1lBQ3hDLE9BQU8sSUFBSSxZQUFZLENBQUMsSUFBSSxFQUFFLFNBQVMsNkJBQXdDLENBQUM7UUFDbEYsQ0FBQztRQUVNLGtDQUFxQixHQUE1QixVQUE2QixJQUFtQjtZQUM5QyxPQUFPLElBQUksWUFBWSxDQUFDLElBQUksRUFBRSxTQUFTLDZCQUF3QyxDQUFDO1FBQ2xGLENBQUM7UUFFTSxzQ0FBeUIsR0FBaEMsVUFBaUMsSUFBYSxFQUFFLEtBQWM7WUFDNUQsT0FBTyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxrQ0FBNkMsQ0FBQztRQUNuRixDQUFDO1FBRU0sd0JBQVcsR0FBbEIsVUFBbUIsSUFBYTtZQUM5QixPQUFPLElBQUksWUFBWSxDQUFDLElBQUksRUFBRSxTQUFTLGtCQUE2QixDQUFDO1FBQ3ZFLENBQUM7UUFFRCx5Q0FBa0IsR0FBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLDBCQUFxQyxDQUFDO1FBQ3hELENBQUM7UUFFRCwwQ0FBbUIsR0FBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLDJCQUFzQyxDQUFDO1FBQ3pELENBQUM7UUFFRCw4Q0FBdUIsR0FBdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLCtCQUEwQyxDQUFDO1FBQzdELENBQUM7UUFFRCw4Q0FBdUIsR0FBdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLCtCQUEwQyxDQUFDO1FBQzdELENBQUM7UUFFRCw4Q0FBdUIsR0FBdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLCtCQUEwQyxDQUFDO1FBQzdELENBQUM7UUFFRCxrREFBMkIsR0FBM0I7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLG9DQUErQyxDQUFDO1FBQ2xFLENBQUM7UUFFRCxvQ0FBYSxHQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxvQkFBK0IsQ0FBQztRQUNsRCxDQUFDO1FBQ0gsbUJBQUM7SUFBRCxDQUFDLEFBNURELElBNERDO0lBNURZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gJy4uLy4uL2ltcG9ydHMnO1xuXG4vKipcbiAqIFRoZSByZWFzb24gd2h5IGEgdmFsdWUgY2Fubm90IGJlIGRldGVybWluZWQgc3RhdGljYWxseS5cbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gRHluYW1pY1ZhbHVlUmVhc29uIHtcbiAgLyoqXG4gICAqIEEgdmFsdWUgY291bGQgbm90IGJlIGRldGVybWluZWQgc3RhdGljYWxseSwgYmVjYXVzZSBpdCBjb250YWlucyBhIHRlcm0gdGhhdCBjb3VsZCBub3QgYmVcbiAgICogZGV0ZXJtaW5lZCBzdGF0aWNhbGx5LlxuICAgKiAoRS5nLiBhIHByb3BlcnR5IGFzc2lnbm1lbnQgb3IgY2FsbCBleHByZXNzaW9uIHdoZXJlIHRoZSBsaHMgaXMgYSBgRHluYW1pY1ZhbHVlYCwgYSB0ZW1wbGF0ZVxuICAgKiBsaXRlcmFsIHdpdGggYSBkeW5hbWljIGV4cHJlc3Npb24sIGFuIG9iamVjdCBsaXRlcmFsIHdpdGggYSBzcHJlYWQgYXNzaWdubWVudCB3aGljaCBjb3VsZCBub3RcbiAgICogYmUgZGV0ZXJtaW5lZCBzdGF0aWNhbGx5LCBldGMuKVxuICAgKi9cbiAgRFlOQU1JQ19JTlBVVCxcblxuICAvKipcbiAgICogQSBzdHJpbmcgY291bGQgbm90IGJlIHN0YXRpY2FsbHkgZXZhbHVhdGVkLlxuICAgKiAoRS5nLiBhIGR5bmFtaWNhbGx5IGNvbnN0cnVjdGVkIG9iamVjdCBwcm9wZXJ0eSBuYW1lIG9yIGEgdGVtcGxhdGUgbGl0ZXJhbCBleHByZXNzaW9uIHRoYXRcbiAgICogY291bGQgbm90IGJlIHN0YXRpY2FsbHkgcmVzb2x2ZWQgdG8gYSBwcmltaXRpdmUgdmFsdWUuKVxuICAgKi9cbiAgRFlOQU1JQ19TVFJJTkcsXG5cbiAgLyoqXG4gICAqIEFuIGV4dGVybmFsIHJlZmVyZW5jZSBjb3VsZCBub3QgYmUgcmVzb2x2ZWQgdG8gYSB2YWx1ZSB3aGljaCBjYW4gYmUgZXZhbHVhdGVkLlxuICAgKiBGb3IgZXhhbXBsZSBhIGNhbGwgZXhwcmVzc2lvbiBmb3IgYSBmdW5jdGlvbiBkZWNsYXJlZCBpbiBgLmQudHNgLCBvciBhY2Nlc3NpbmcgbmF0aXZlIGdsb2JhbHNcbiAgICogc3VjaCBhcyBgd2luZG93YC5cbiAgICovXG4gIEVYVEVSTkFMX1JFRkVSRU5DRSxcblxuICAvKipcbiAgICogU3ludGF4IHRoYXQgYFN0YXRpY0ludGVycHJldGVyYCBkb2Vzbid0IGtub3cgaG93IHRvIGV2YWx1YXRlLCBmb3IgZXhhbXBsZSBhIHR5cGUgb2ZcbiAgICogYHRzLkV4cHJlc3Npb25gIHRoYXQgaXMgbm90IHN1cHBvcnRlZC5cbiAgICovXG4gIFVOU1VQUE9SVEVEX1NZTlRBWCxcblxuICAvKipcbiAgICogQSBkZWNsYXJhdGlvbiBvZiBhIGB0cy5JZGVudGlmaWVyYCBjb3VsZCBub3QgYmUgZm91bmQuXG4gICAqL1xuICBVTktOT1dOX0lERU5USUZJRVIsXG5cbiAgLyoqXG4gICAqIEEgdmFsdWUgY291bGQgYmUgcmVzb2x2ZWQsIGJ1dCBpcyBub3QgYW4gYWNjZXB0YWJsZSB0eXBlIGZvciB0aGUgb3BlcmF0aW9uIGJlaW5nIHBlcmZvcm1lZC5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsIGF0dGVtcHRpbmcgdG8gY2FsbCBhIG5vbi1jYWxsYWJsZSBleHByZXNzaW9uLlxuICAgKi9cbiAgSU5WQUxJRF9FWFBSRVNTSU9OX1RZUEUsXG5cbiAgLyoqXG4gICAqIEEgdmFsdWUgY291bGQgbm90IGJlIGRldGVybWluZWQgc3RhdGljYWxseSBmb3IgYW55IHJlYXNvbiBvdGhlciB0aGUgYWJvdmUuXG4gICAqL1xuICBVTktOT1dOLFxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSB2YWx1ZSB3aGljaCBjYW5ub3QgYmUgZGV0ZXJtaW5lZCBzdGF0aWNhbGx5LlxuICovXG5leHBvcnQgY2xhc3MgRHluYW1pY1ZhbHVlPFIgPSB1bmtub3duPiB7XG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgICByZWFkb25seSBub2RlOiB0cy5Ob2RlLCByZWFkb25seSByZWFzb246IFIsIHByaXZhdGUgY29kZTogRHluYW1pY1ZhbHVlUmVhc29uKSB7fVxuXG4gIHN0YXRpYyBmcm9tRHluYW1pY0lucHV0KG5vZGU6IHRzLk5vZGUsIGlucHV0OiBEeW5hbWljVmFsdWUpOiBEeW5hbWljVmFsdWU8RHluYW1pY1ZhbHVlPiB7XG4gICAgcmV0dXJuIG5ldyBEeW5hbWljVmFsdWUobm9kZSwgaW5wdXQsIER5bmFtaWNWYWx1ZVJlYXNvbi5EWU5BTUlDX0lOUFVUKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRHluYW1pY1N0cmluZyhub2RlOiB0cy5Ob2RlKTogRHluYW1pY1ZhbHVlIHtcbiAgICByZXR1cm4gbmV3IER5bmFtaWNWYWx1ZShub2RlLCB1bmRlZmluZWQsIER5bmFtaWNWYWx1ZVJlYXNvbi5EWU5BTUlDX1NUUklORyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4dGVybmFsUmVmZXJlbmNlKG5vZGU6IHRzLk5vZGUsIHJlZjogUmVmZXJlbmNlPHRzLkRlY2xhcmF0aW9uPik6XG4gICAgICBEeW5hbWljVmFsdWU8UmVmZXJlbmNlPHRzLkRlY2xhcmF0aW9uPj4ge1xuICAgIHJldHVybiBuZXcgRHluYW1pY1ZhbHVlKG5vZGUsIHJlZiwgRHluYW1pY1ZhbHVlUmVhc29uLkVYVEVSTkFMX1JFRkVSRU5DRSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVVuc3VwcG9ydGVkU3ludGF4KG5vZGU6IHRzLk5vZGUpOiBEeW5hbWljVmFsdWUge1xuICAgIHJldHVybiBuZXcgRHluYW1pY1ZhbHVlKG5vZGUsIHVuZGVmaW5lZCwgRHluYW1pY1ZhbHVlUmVhc29uLlVOU1VQUE9SVEVEX1NZTlRBWCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVVua25vd25JZGVudGlmaWVyKG5vZGU6IHRzLklkZW50aWZpZXIpOiBEeW5hbWljVmFsdWUge1xuICAgIHJldHVybiBuZXcgRHluYW1pY1ZhbHVlKG5vZGUsIHVuZGVmaW5lZCwgRHluYW1pY1ZhbHVlUmVhc29uLlVOS05PV05fSURFTlRJRklFUik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUludmFsaWRFeHByZXNzaW9uVHlwZShub2RlOiB0cy5Ob2RlLCB2YWx1ZTogdW5rbm93bik6IER5bmFtaWNWYWx1ZTx1bmtub3duPiB7XG4gICAgcmV0dXJuIG5ldyBEeW5hbWljVmFsdWUobm9kZSwgdmFsdWUsIER5bmFtaWNWYWx1ZVJlYXNvbi5JTlZBTElEX0VYUFJFU1NJT05fVFlQRSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVVua25vd24obm9kZTogdHMuTm9kZSk6IER5bmFtaWNWYWx1ZSB7XG4gICAgcmV0dXJuIG5ldyBEeW5hbWljVmFsdWUobm9kZSwgdW5kZWZpbmVkLCBEeW5hbWljVmFsdWVSZWFzb24uVU5LTk9XTik7XG4gIH1cblxuICBpc0Zyb21EeW5hbWljSW5wdXQodGhpczogRHluYW1pY1ZhbHVlPFI+KTogdGhpcyBpcyBEeW5hbWljVmFsdWU8RHluYW1pY1ZhbHVlPiB7XG4gICAgcmV0dXJuIHRoaXMuY29kZSA9PT0gRHluYW1pY1ZhbHVlUmVhc29uLkRZTkFNSUNfSU5QVVQ7XG4gIH1cblxuICBpc0Zyb21EeW5hbWljU3RyaW5nKHRoaXM6IER5bmFtaWNWYWx1ZTxSPik6IHRoaXMgaXMgRHluYW1pY1ZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5jb2RlID09PSBEeW5hbWljVmFsdWVSZWFzb24uRFlOQU1JQ19TVFJJTkc7XG4gIH1cblxuICBpc0Zyb21FeHRlcm5hbFJlZmVyZW5jZSh0aGlzOiBEeW5hbWljVmFsdWU8Uj4pOiB0aGlzIGlzIER5bmFtaWNWYWx1ZTxSZWZlcmVuY2U8dHMuRGVjbGFyYXRpb24+PiB7XG4gICAgcmV0dXJuIHRoaXMuY29kZSA9PT0gRHluYW1pY1ZhbHVlUmVhc29uLkVYVEVSTkFMX1JFRkVSRU5DRTtcbiAgfVxuXG4gIGlzRnJvbVVuc3VwcG9ydGVkU3ludGF4KHRoaXM6IER5bmFtaWNWYWx1ZTxSPik6IHRoaXMgaXMgRHluYW1pY1ZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5jb2RlID09PSBEeW5hbWljVmFsdWVSZWFzb24uVU5TVVBQT1JURURfU1lOVEFYO1xuICB9XG5cbiAgaXNGcm9tVW5rbm93bklkZW50aWZpZXIodGhpczogRHluYW1pY1ZhbHVlPFI+KTogdGhpcyBpcyBEeW5hbWljVmFsdWUge1xuICAgIHJldHVybiB0aGlzLmNvZGUgPT09IER5bmFtaWNWYWx1ZVJlYXNvbi5VTktOT1dOX0lERU5USUZJRVI7XG4gIH1cblxuICBpc0Zyb21JbnZhbGlkRXhwcmVzc2lvblR5cGUodGhpczogRHluYW1pY1ZhbHVlPFI+KTogdGhpcyBpcyBEeW5hbWljVmFsdWU8dW5rbm93bj4ge1xuICAgIHJldHVybiB0aGlzLmNvZGUgPT09IER5bmFtaWNWYWx1ZVJlYXNvbi5JTlZBTElEX0VYUFJFU1NJT05fVFlQRTtcbiAgfVxuXG4gIGlzRnJvbVVua25vd24odGhpczogRHluYW1pY1ZhbHVlPFI+KTogdGhpcyBpcyBEeW5hbWljVmFsdWUge1xuICAgIHJldHVybiB0aGlzLmNvZGUgPT09IER5bmFtaWNWYWx1ZVJlYXNvbi5VTktOT1dOO1xuICB9XG59XG4iXX0=