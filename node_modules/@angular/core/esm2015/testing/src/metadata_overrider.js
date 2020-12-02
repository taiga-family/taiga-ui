/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/testing/src/metadata_overrider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵstringify as stringify } from '@angular/core';
/** @type {?} */
let _nextReferenceId = 0;
export class MetadataOverrider {
    constructor() {
        this._references = new Map();
    }
    /**
     * Creates a new instance for the given metadata class
     * based on an old instance and overrides.
     * @template C, T
     * @param {?} metadataClass
     * @param {?} oldMetadata
     * @param {?} override
     * @return {?}
     */
    overrideMetadata(metadataClass, oldMetadata, override) {
        /** @type {?} */
        const props = {};
        if (oldMetadata) {
            _valueProps(oldMetadata).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            (prop) => props[prop] = ((/** @type {?} */ (oldMetadata)))[prop]));
        }
        if (override.set) {
            if (override.remove || override.add) {
                throw new Error(`Cannot set and add/remove ${stringify(metadataClass)} at the same time!`);
            }
            setMetadata(props, override.set);
        }
        if (override.remove) {
            removeMetadata(props, override.remove, this._references);
        }
        if (override.add) {
            addMetadata(props, override.add);
        }
        return new metadataClass((/** @type {?} */ (props)));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MetadataOverrider.prototype._references;
}
/**
 * @param {?} metadata
 * @param {?} remove
 * @param {?} references
 * @return {?}
 */
function removeMetadata(metadata, remove, references) {
    /** @type {?} */
    const removeObjects = new Set();
    for (const prop in remove) {
        /** @type {?} */
        const removeValue = remove[prop];
        if (Array.isArray(removeValue)) {
            removeValue.forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                removeObjects.add(_propHashKey(prop, value, references));
            }));
        }
        else {
            removeObjects.add(_propHashKey(prop, removeValue, references));
        }
    }
    for (const prop in metadata) {
        /** @type {?} */
        const propValue = metadata[prop];
        if (Array.isArray(propValue)) {
            metadata[prop] = propValue.filter((/**
             * @param {?} value
             * @return {?}
             */
            (value) => !removeObjects.has(_propHashKey(prop, value, references))));
        }
        else {
            if (removeObjects.has(_propHashKey(prop, propValue, references))) {
                metadata[prop] = undefined;
            }
        }
    }
}
/**
 * @param {?} metadata
 * @param {?} add
 * @return {?}
 */
function addMetadata(metadata, add) {
    for (const prop in add) {
        /** @type {?} */
        const addValue = add[prop];
        /** @type {?} */
        const propValue = metadata[prop];
        if (propValue != null && Array.isArray(propValue)) {
            metadata[prop] = propValue.concat(addValue);
        }
        else {
            metadata[prop] = addValue;
        }
    }
}
/**
 * @param {?} metadata
 * @param {?} set
 * @return {?}
 */
function setMetadata(metadata, set) {
    for (const prop in set) {
        metadata[prop] = set[prop];
    }
}
/**
 * @param {?} propName
 * @param {?} propValue
 * @param {?} references
 * @return {?}
 */
function _propHashKey(propName, propValue, references) {
    /** @type {?} */
    const replacer = (/**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    (key, value) => {
        if (typeof value === 'function') {
            value = _serializeReference(value, references);
        }
        return value;
    });
    return `${propName}:${JSON.stringify(propValue, replacer)}`;
}
/**
 * @param {?} ref
 * @param {?} references
 * @return {?}
 */
function _serializeReference(ref, references) {
    /** @type {?} */
    let id = references.get(ref);
    if (!id) {
        id = `${stringify(ref)}${_nextReferenceId++}`;
        references.set(ref, id);
    }
    return id;
}
/**
 * @param {?} obj
 * @return {?}
 */
function _valueProps(obj) {
    /** @type {?} */
    const props = [];
    // regular public props
    Object.keys(obj).forEach((/**
     * @param {?} prop
     * @return {?}
     */
    (prop) => {
        if (!prop.startsWith('_')) {
            props.push(prop);
        }
    }));
    // getters
    /** @type {?} */
    let proto = obj;
    while (proto = Object.getPrototypeOf(proto)) {
        Object.keys(proto).forEach((/**
         * @param {?} protoProp
         * @return {?}
         */
        (protoProp) => {
            /** @type {?} */
            const desc = Object.getOwnPropertyDescriptor(proto, protoProp);
            if (!protoProp.startsWith('_') && desc && 'get' in desc) {
                props.push(protoProp);
            }
        }));
    }
    return props;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGFfb3ZlcnJpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS90ZXN0aW5nL3NyYy9tZXRhZGF0YV9vdmVycmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7O0lBT2xELGdCQUFnQixHQUFHLENBQUM7QUFFeEIsTUFBTSxPQUFPLGlCQUFpQjtJQUE5QjtRQUNVLGdCQUFXLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztJQTBCL0MsQ0FBQzs7Ozs7Ozs7OztJQXJCQyxnQkFBZ0IsQ0FDWixhQUFvQyxFQUFFLFdBQWMsRUFBRSxRQUE2Qjs7Y0FDL0UsS0FBSyxHQUFjLEVBQUU7UUFDM0IsSUFBSSxXQUFXLEVBQUU7WUFDZixXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTzs7OztZQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBSyxXQUFXLEVBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7U0FDcEY7UUFFRCxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDaEIsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUU7Z0JBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLFNBQVMsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUM1RjtZQUNELFdBQVcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ25CLGNBQWMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDMUQ7UUFD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Q3ZELEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDdkI7UUFDSCxDQUFDLEVBQUMsQ0FBQztLQUNKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge8m1c3RyaW5naWZ5IGFzIHN0cmluZ2lmeX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01ldGFkYXRhT3ZlcnJpZGV9IGZyb20gJy4vbWV0YWRhdGFfb3ZlcnJpZGUnO1xuXG50eXBlIFN0cmluZ01hcCA9IHtcbiAgW2tleTogc3RyaW5nXTogYW55XG59O1xuXG5sZXQgX25leHRSZWZlcmVuY2VJZCA9IDA7XG5cbmV4cG9ydCBjbGFzcyBNZXRhZGF0YU92ZXJyaWRlciB7XG4gIHByaXZhdGUgX3JlZmVyZW5jZXMgPSBuZXcgTWFwPGFueSwgc3RyaW5nPigpO1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmb3IgdGhlIGdpdmVuIG1ldGFkYXRhIGNsYXNzXG4gICAqIGJhc2VkIG9uIGFuIG9sZCBpbnN0YW5jZSBhbmQgb3ZlcnJpZGVzLlxuICAgKi9cbiAgb3ZlcnJpZGVNZXRhZGF0YTxDIGV4dGVuZHMgVCwgVD4oXG4gICAgICBtZXRhZGF0YUNsYXNzOiB7bmV3KG9wdGlvbnM6IFQpOiBDO30sIG9sZE1ldGFkYXRhOiBDLCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxUPik6IEMge1xuICAgIGNvbnN0IHByb3BzOiBTdHJpbmdNYXAgPSB7fTtcbiAgICBpZiAob2xkTWV0YWRhdGEpIHtcbiAgICAgIF92YWx1ZVByb3BzKG9sZE1ldGFkYXRhKS5mb3JFYWNoKChwcm9wKSA9PiBwcm9wc1twcm9wXSA9ICg8YW55Pm9sZE1ldGFkYXRhKVtwcm9wXSk7XG4gICAgfVxuXG4gICAgaWYgKG92ZXJyaWRlLnNldCkge1xuICAgICAgaWYgKG92ZXJyaWRlLnJlbW92ZSB8fCBvdmVycmlkZS5hZGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc2V0IGFuZCBhZGQvcmVtb3ZlICR7c3RyaW5naWZ5KG1ldGFkYXRhQ2xhc3MpfSBhdCB0aGUgc2FtZSB0aW1lIWApO1xuICAgICAgfVxuICAgICAgc2V0TWV0YWRhdGEocHJvcHMsIG92ZXJyaWRlLnNldCk7XG4gICAgfVxuICAgIGlmIChvdmVycmlkZS5yZW1vdmUpIHtcbiAgICAgIHJlbW92ZU1ldGFkYXRhKHByb3BzLCBvdmVycmlkZS5yZW1vdmUsIHRoaXMuX3JlZmVyZW5jZXMpO1xuICAgIH1cbiAgICBpZiAob3ZlcnJpZGUuYWRkKSB7XG4gICAgICBhZGRNZXRhZGF0YShwcm9wcywgb3ZlcnJpZGUuYWRkKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBtZXRhZGF0YUNsYXNzKDxhbnk+cHJvcHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1ldGFkYXRhKG1ldGFkYXRhOiBTdHJpbmdNYXAsIHJlbW92ZTogYW55LCByZWZlcmVuY2VzOiBNYXA8YW55LCBzdHJpbmc+KSB7XG4gIGNvbnN0IHJlbW92ZU9iamVjdHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgZm9yIChjb25zdCBwcm9wIGluIHJlbW92ZSkge1xuICAgIGNvbnN0IHJlbW92ZVZhbHVlID0gcmVtb3ZlW3Byb3BdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJlbW92ZVZhbHVlKSkge1xuICAgICAgcmVtb3ZlVmFsdWUuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICByZW1vdmVPYmplY3RzLmFkZChfcHJvcEhhc2hLZXkocHJvcCwgdmFsdWUsIHJlZmVyZW5jZXMpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVPYmplY3RzLmFkZChfcHJvcEhhc2hLZXkocHJvcCwgcmVtb3ZlVmFsdWUsIHJlZmVyZW5jZXMpKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGNvbnN0IHByb3AgaW4gbWV0YWRhdGEpIHtcbiAgICBjb25zdCBwcm9wVmFsdWUgPSBtZXRhZGF0YVtwcm9wXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICBtZXRhZGF0YVtwcm9wXSA9IHByb3BWYWx1ZS5maWx0ZXIoXG4gICAgICAgICAgKHZhbHVlOiBhbnkpID0+ICFyZW1vdmVPYmplY3RzLmhhcyhfcHJvcEhhc2hLZXkocHJvcCwgdmFsdWUsIHJlZmVyZW5jZXMpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZW1vdmVPYmplY3RzLmhhcyhfcHJvcEhhc2hLZXkocHJvcCwgcHJvcFZhbHVlLCByZWZlcmVuY2VzKSkpIHtcbiAgICAgICAgbWV0YWRhdGFbcHJvcF0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZE1ldGFkYXRhKG1ldGFkYXRhOiBTdHJpbmdNYXAsIGFkZDogYW55KSB7XG4gIGZvciAoY29uc3QgcHJvcCBpbiBhZGQpIHtcbiAgICBjb25zdCBhZGRWYWx1ZSA9IGFkZFtwcm9wXTtcbiAgICBjb25zdCBwcm9wVmFsdWUgPSBtZXRhZGF0YVtwcm9wXTtcbiAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICBtZXRhZGF0YVtwcm9wXSA9IHByb3BWYWx1ZS5jb25jYXQoYWRkVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXRhZGF0YVtwcm9wXSA9IGFkZFZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRNZXRhZGF0YShtZXRhZGF0YTogU3RyaW5nTWFwLCBzZXQ6IGFueSkge1xuICBmb3IgKGNvbnN0IHByb3AgaW4gc2V0KSB7XG4gICAgbWV0YWRhdGFbcHJvcF0gPSBzZXRbcHJvcF07XG4gIH1cbn1cblxuZnVuY3Rpb24gX3Byb3BIYXNoS2V5KHByb3BOYW1lOiBhbnksIHByb3BWYWx1ZTogYW55LCByZWZlcmVuY2VzOiBNYXA8YW55LCBzdHJpbmc+KTogc3RyaW5nIHtcbiAgY29uc3QgcmVwbGFjZXIgPSAoa2V5OiBhbnksIHZhbHVlOiBhbnkpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YWx1ZSA9IF9zZXJpYWxpemVSZWZlcmVuY2UodmFsdWUsIHJlZmVyZW5jZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgcmV0dXJuIGAke3Byb3BOYW1lfToke0pTT04uc3RyaW5naWZ5KHByb3BWYWx1ZSwgcmVwbGFjZXIpfWA7XG59XG5cbmZ1bmN0aW9uIF9zZXJpYWxpemVSZWZlcmVuY2UocmVmOiBhbnksIHJlZmVyZW5jZXM6IE1hcDxhbnksIHN0cmluZz4pOiBzdHJpbmcge1xuICBsZXQgaWQgPSByZWZlcmVuY2VzLmdldChyZWYpO1xuICBpZiAoIWlkKSB7XG4gICAgaWQgPSBgJHtzdHJpbmdpZnkocmVmKX0ke19uZXh0UmVmZXJlbmNlSWQrK31gO1xuICAgIHJlZmVyZW5jZXMuc2V0KHJlZiwgaWQpO1xuICB9XG4gIHJldHVybiBpZDtcbn1cblxuXG5mdW5jdGlvbiBfdmFsdWVQcm9wcyhvYmo6IGFueSk6IHN0cmluZ1tdIHtcbiAgY29uc3QgcHJvcHM6IHN0cmluZ1tdID0gW107XG4gIC8vIHJlZ3VsYXIgcHVibGljIHByb3BzXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgIGlmICghcHJvcC5zdGFydHNXaXRoKCdfJykpIHtcbiAgICAgIHByb3BzLnB1c2gocHJvcCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBnZXR0ZXJzXG4gIGxldCBwcm90byA9IG9iajtcbiAgd2hpbGUgKHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSkge1xuICAgIE9iamVjdC5rZXlzKHByb3RvKS5mb3JFYWNoKChwcm90b1Byb3ApID0+IHtcbiAgICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBwcm90b1Byb3ApO1xuICAgICAgaWYgKCFwcm90b1Byb3Auc3RhcnRzV2l0aCgnXycpICYmIGRlc2MgJiYgJ2dldCcgaW4gZGVzYykge1xuICAgICAgICBwcm9wcy5wdXNoKHByb3RvUHJvcCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHByb3BzO1xufVxuIl19