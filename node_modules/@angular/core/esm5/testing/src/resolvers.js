/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends, __read } from "tslib";
import { Component, Directive, NgModule, Pipe, ɵReflectionCapabilities as ReflectionCapabilities } from '@angular/core';
import { MetadataOverrider } from './metadata_overrider';
var reflection = new ReflectionCapabilities();
/**
 * Allows to override ivy metadata for tests (via the `TestBed`).
 */
var OverrideResolver = /** @class */ (function () {
    function OverrideResolver() {
        this.overrides = new Map();
        this.resolved = new Map();
    }
    OverrideResolver.prototype.addOverride = function (type, override) {
        var overrides = this.overrides.get(type) || [];
        overrides.push(override);
        this.overrides.set(type, overrides);
        this.resolved.delete(type);
    };
    OverrideResolver.prototype.setOverrides = function (overrides) {
        var _this = this;
        this.overrides.clear();
        overrides.forEach(function (_a) {
            var _b = __read(_a, 2), type = _b[0], override = _b[1];
            _this.addOverride(type, override);
        });
    };
    OverrideResolver.prototype.getAnnotation = function (type) {
        var annotations = reflection.annotations(type);
        // Try to find the nearest known Type annotation and make sure that this annotation is an
        // instance of the type we are looking for, so we can use it for resolution. Note: there might
        // be multiple known annotations found due to the fact that Components can extend Directives (so
        // both Directive and Component annotations would be present), so we always check if the known
        // annotation has the right type.
        for (var i = annotations.length - 1; i >= 0; i--) {
            var annotation = annotations[i];
            var isKnownType = annotation instanceof Directive || annotation instanceof Component ||
                annotation instanceof Pipe || annotation instanceof NgModule;
            if (isKnownType) {
                return annotation instanceof this.type ? annotation : null;
            }
        }
        return null;
    };
    OverrideResolver.prototype.resolve = function (type) {
        var _this = this;
        var resolved = this.resolved.get(type) || null;
        if (!resolved) {
            resolved = this.getAnnotation(type);
            if (resolved) {
                var overrides = this.overrides.get(type);
                if (overrides) {
                    var overrider_1 = new MetadataOverrider();
                    overrides.forEach(function (override) {
                        resolved = overrider_1.overrideMetadata(_this.type, resolved, override);
                    });
                }
            }
            this.resolved.set(type, resolved);
        }
        return resolved;
    };
    return OverrideResolver;
}());
var DirectiveResolver = /** @class */ (function (_super) {
    __extends(DirectiveResolver, _super);
    function DirectiveResolver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DirectiveResolver.prototype, "type", {
        get: function () {
            return Directive;
        },
        enumerable: true,
        configurable: true
    });
    return DirectiveResolver;
}(OverrideResolver));
export { DirectiveResolver };
var ComponentResolver = /** @class */ (function (_super) {
    __extends(ComponentResolver, _super);
    function ComponentResolver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ComponentResolver.prototype, "type", {
        get: function () {
            return Component;
        },
        enumerable: true,
        configurable: true
    });
    return ComponentResolver;
}(OverrideResolver));
export { ComponentResolver };
var PipeResolver = /** @class */ (function (_super) {
    __extends(PipeResolver, _super);
    function PipeResolver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PipeResolver.prototype, "type", {
        get: function () {
            return Pipe;
        },
        enumerable: true,
        configurable: true
    });
    return PipeResolver;
}(OverrideResolver));
export { PipeResolver };
var NgModuleResolver = /** @class */ (function (_super) {
    __extends(NgModuleResolver, _super);
    function NgModuleResolver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NgModuleResolver.prototype, "type", {
        get: function () {
            return NgModule;
        },
        enumerable: true,
        configurable: true
    });
    return NgModuleResolver;
}(OverrideResolver));
export { NgModuleResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS90ZXN0aW5nL3NyYy9yZXNvbHZlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQVEsdUJBQXVCLElBQUksc0JBQXNCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHNUgsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFdkQsSUFBTSxVQUFVLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO0FBV2hEOztHQUVHO0FBQ0g7SUFBQTtRQUNVLGNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBb0MsQ0FBQztRQUN4RCxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQXFCLENBQUM7SUF1RGxELENBQUM7SUFuREMsc0NBQVcsR0FBWCxVQUFZLElBQWUsRUFBRSxRQUE2QjtRQUN4RCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakQsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxTQUFrRDtRQUEvRCxpQkFLQztRQUpDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQWdCO2dCQUFoQixrQkFBZ0IsRUFBZixZQUFJLEVBQUUsZ0JBQVE7WUFDaEMs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cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgRGlyZWN0aXZlLCBOZ01vZHVsZSwgUGlwZSwgVHlwZSwgybVSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzIGFzIFJlZmxlY3Rpb25DYXBhYmlsaXRpZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge01ldGFkYXRhT3ZlcnJpZGV9IGZyb20gJy4vbWV0YWRhdGFfb3ZlcnJpZGUnO1xuaW1wb3J0IHtNZXRhZGF0YU92ZXJyaWRlcn0gZnJvbSAnLi9tZXRhZGF0YV9vdmVycmlkZXInO1xuXG5jb25zdCByZWZsZWN0aW9uID0gbmV3IFJlZmxlY3Rpb25DYXBhYmlsaXRpZXMoKTtcblxuLyoqXG4gKiBCYXNlIGludGVyZmFjZSB0byByZXNvbHZlIGBAQ29tcG9uZW50YCwgYEBEaXJlY3RpdmVgLCBgQFBpcGVgIGFuZCBgQE5nTW9kdWxlYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXNvbHZlcjxUPiB7XG4gIGFkZE92ZXJyaWRlKHR5cGU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8VD4pOiB2b2lkO1xuICBzZXRPdmVycmlkZXMob3ZlcnJpZGVzOiBBcnJheTxbVHlwZTxhbnk+LCBNZXRhZGF0YU92ZXJyaWRlPFQ+XT4pOiB2b2lkO1xuICByZXNvbHZlKHR5cGU6IFR5cGU8YW55Pik6IFR8bnVsbDtcbn1cblxuLyoqXG4gKiBBbGxvd3MgdG8gb3ZlcnJpZGUgaXZ5IG1ldGFkYXRhIGZvciB0ZXN0cyAodmlhIHRoZSBgVGVzdEJlZGApLlxuICovXG5hYnN0cmFjdCBjbGFzcyBPdmVycmlkZVJlc29sdmVyPFQ+IGltcGxlbWVudHMgUmVzb2x2ZXI8VD4ge1xuICBwcml2YXRlIG92ZXJyaWRlcyA9IG5ldyBNYXA8VHlwZTxhbnk+LCBNZXRhZGF0YU92ZXJyaWRlPFQ+W10+KCk7XG4gIHByaXZhdGUgcmVzb2x2ZWQgPSBuZXcgTWFwPFR5cGU8YW55PiwgVHxudWxsPigpO1xuXG4gIGFic3RyYWN0IGdldCB0eXBlKCk6IGFueTtcblxuICBhZGRPdmVycmlkZSh0eXBlOiBUeXBlPGFueT4sIG92ZXJyaWRlOiBNZXRhZGF0YU92ZXJyaWRlPFQ+KSB7XG4gICAgY29uc3Qgb3ZlcnJpZGVzID0gdGhpcy5vdmVycmlkZXMuZ2V0KHR5cGUpIHx8IFtdO1xuICAgIG92ZXJyaWRlcy5wdXNoKG92ZXJyaWRlKTtcbiAgICB0aGlzLm92ZXJyaWRlcy5zZXQodHlwZSwgb3ZlcnJpZGVzKTtcbiAgICB0aGlzLnJlc29sdmVkLmRlbGV0ZSh0eXBlKTtcbiAgfVxuXG4gIHNldE92ZXJyaWRlcyhvdmVycmlkZXM6IEFycmF5PFtUeXBlPGFueT4sIE1ldGFkYXRhT3ZlcnJpZGU8VD5dPikge1xuICAgIHRoaXMub3ZlcnJpZGVzLmNsZWFyKCk7XG4gICAgb3ZlcnJpZGVzLmZvckVhY2goKFt0eXBlLCBvdmVycmlkZV0pID0+IHtcbiAgICAgIHRoaXMuYWRkT3ZlcnJpZGUodHlwZSwgb3ZlcnJpZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0QW5ub3RhdGlvbih0eXBlOiBUeXBlPGFueT4pOiBUfG51bGwge1xuICAgIGNvbnN0IGFubm90YXRpb25zID0gcmVmbGVjdGlvbi5hbm5vdGF0aW9ucyh0eXBlKTtcbiAgICAvLyBUcnkgdG8gZmluZCB0aGUgbmVhcmVzdCBrbm93biBUeXBlIGFubm90YXRpb24gYW5kIG1ha2Ugc3VyZSB0aGF0IHRoaXMgYW5ub3RhdGlvbiBpcyBhblxuICAgIC8vIGluc3RhbmNlIG9mIHRoZSB0eXBlIHdlIGFyZSBsb29raW5nIGZvciwgc28gd2UgY2FuIHVzZSBpdCBmb3IgcmVzb2x1dGlvbi4gTm90ZTogdGhlcmUgbWlnaHRcbiAgICAvLyBiZSBtdWx0aXBsZSBrbm93biBhbm5vdGF0aW9ucyBmb3VuZCBkdWUgdG8gdGhlIGZhY3QgdGhhdCBDb21wb25lbnRzIGNhbiBleHRlbmQgRGlyZWN0aXZlcyAoc29cbiAgICAvLyBib3RoIERpcmVjdGl2ZSBhbmQgQ29tcG9uZW50IGFubm90YXRpb25zIHdvdWxkIGJlIHByZXNlbnQpLCBzbyB3ZSBhbHdheXMgY2hlY2sgaWYgdGhlIGtub3duXG4gICAgLy8gYW5ub3RhdGlvbiBoYXMgdGhlIHJpZ2h0IHR5cGUuXG4gICAgZm9yIChsZXQgaSA9IGFubm90YXRpb25zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBhbm5vdGF0aW9uID0gYW5ub3RhdGlvbnNbaV07XG4gICAgICBjb25zdCBpc0tub3duVHlwZSA9IGFubm90YXRpb24gaW5zdGFuY2VvZiBEaXJlY3RpdmUgfHwgYW5ub3RhdGlvbiBpbnN0YW5jZW9mIENvbXBvbmVudCB8fFxuICAgICAgICAgIGFubm90YXRpb24gaW5zdGFuY2VvZiBQaXBlIHx8IGFubm90YXRpb24gaW5zdGFuY2VvZiBOZ01vZHVsZTtcbiAgICAgIGlmIChpc0tub3duVHlwZSkge1xuICAgICAgICByZXR1cm4gYW5ub3RhdGlvbiBpbnN0YW5jZW9mIHRoaXMudHlwZSA/IGFubm90YXRpb24gOiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlc29sdmUodHlwZTogVHlwZTxhbnk+KTogVHxudWxsIHtcbiAgICBsZXQgcmVzb2x2ZWQgPSB0aGlzLnJlc29sdmVkLmdldCh0eXBlKSB8fCBudWxsO1xuXG4gICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgcmVzb2x2ZWQgPSB0aGlzLmdldEFubm90YXRpb24odHlwZSk7XG4gICAgICBpZiAocmVzb2x2ZWQpIHtcbiAgICAgICAgY29uc3Qgb3ZlcnJpZGVzID0gdGhpcy5vdmVycmlkZXMuZ2V0KHR5cGUpO1xuICAgICAgICBpZiAob3ZlcnJpZGVzKSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcnJpZGVyID0gbmV3IE1ldGFkYXRhT3ZlcnJpZGVyKCk7XG4gICAgICAgICAgb3ZlcnJpZGVzLmZvckVhY2gob3ZlcnJpZGUgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZWQgPSBvdmVycmlkZXIub3ZlcnJpZGVNZXRhZGF0YSh0aGlzLnR5cGUsIHJlc29sdmVkISwgb3ZlcnJpZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnJlc29sdmVkLnNldCh0eXBlLCByZXNvbHZlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZVJlc29sdmVyIGV4dGVuZHMgT3ZlcnJpZGVSZXNvbHZlcjxEaXJlY3RpdmU+IHtcbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIERpcmVjdGl2ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UmVzb2x2ZXIgZXh0ZW5kcyBPdmVycmlkZVJlc29sdmVyPENvbXBvbmVudD4ge1xuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQaXBlUmVzb2x2ZXIgZXh0ZW5kcyBPdmVycmlkZVJlc29sdmVyPFBpcGU+IHtcbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIFBpcGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5nTW9kdWxlUmVzb2x2ZXIgZXh0ZW5kcyBPdmVycmlkZVJlc29sdmVyPE5nTW9kdWxlPiB7XG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiBOZ01vZHVsZTtcbiAgfVxufVxuIl19