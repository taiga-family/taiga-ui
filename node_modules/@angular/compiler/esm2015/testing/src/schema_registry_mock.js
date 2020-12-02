/**
 * @fileoverview added by tsickle
 * Generated from: packages/compiler/testing/src/schema_registry_mock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { core } from '@angular/compiler';
export class MockSchemaRegistry {
    /**
     * @param {?} existingProperties
     * @param {?} attrPropMapping
     * @param {?} existingElements
     * @param {?} invalidProperties
     * @param {?} invalidAttributes
     */
    constructor(existingProperties, attrPropMapping, existingElements, invalidProperties, invalidAttributes) {
        this.existingProperties = existingProperties;
        this.attrPropMapping = attrPropMapping;
        this.existingElements = existingElements;
        this.invalidProperties = invalidProperties;
        this.invalidAttributes = invalidAttributes;
    }
    /**
     * @param {?} tagName
     * @param {?} property
     * @param {?} schemas
     * @return {?}
     */
    hasProperty(tagName, property, schemas) {
        /** @type {?} */
        const value = this.existingProperties[property];
        return value === void 0 ? true : value;
    }
    /**
     * @param {?} tagName
     * @param {?} schemaMetas
     * @return {?}
     */
    hasElement(tagName, schemaMetas) {
        /** @type {?} */
        const value = this.existingElements[tagName.toLowerCase()];
        return value === void 0 ? true : value;
    }
    /**
     * @return {?}
     */
    allKnownElementNames() {
        return Object.keys(this.existingElements);
    }
    /**
     * @param {?} selector
     * @param {?} property
     * @param {?} isAttribute
     * @return {?}
     */
    securityContext(selector, property, isAttribute) {
        return core.SecurityContext.NONE;
    }
    /**
     * @param {?} attrName
     * @return {?}
     */
    getMappedPropName(attrName) {
        return this.attrPropMapping[attrName] || attrName;
    }
    /**
     * @return {?}
     */
    getDefaultComponentElementName() {
        return 'ng-component';
    }
    /**
     * @param {?} name
     * @return {?}
     */
    validateProperty(name) {
        if (this.invalidProperties.indexOf(name) > -1) {
            return { error: true, msg: `Binding to property '${name}' is disallowed for security reasons` };
        }
        else {
            return { error: false };
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    validateAttribute(name) {
        if (this.invalidAttributes.indexOf(name) > -1) {
            return {
                error: true,
                msg: `Binding to attribute '${name}' is disallowed for security reasons`
            };
        }
        else {
            return { error: false };
        }
    }
    /**
     * @param {?} propName
     * @return {?}
     */
    normalizeAnimationStyleProperty(propName) {
        return propName;
    }
    /**
     * @param {?} camelCaseProp
     * @param {?} userProvidedProp
     * @param {?} val
     * @return {?}
     */
    normalizeAnimationStyleValue(camelCaseProp, userProvidedProp, val) {
        return { error: (/** @type {?} */ (null)), value: val.toString() };
    }
}
if (false) {
    /** @type {?} */
    MockSchemaRegistry.prototype.existingProperties;
    /** @type {?} */
    MockSchemaRegistry.prototype.attrPropMapping;
    /** @type {?} */
    MockSchemaRegistry.prototype.existingElements;
    /** @type {?} */
    MockSchemaRegistry.prototype.invalidProperties;
    /** @type {?} */
    MockSchemaRegistry.prototype.invalidAttributes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hX3JlZ2lzdHJ5X21vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci90ZXN0aW5nL3NyYy9zY2hlbWFfcmVnaXN0cnlfbW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsSUFBSSxFQUF3QixNQUFNLG1CQUFtQixDQUFDO0FBRTlELE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7O0lBQzdCLFlBQ1csa0JBQTRDLEVBQzVDLGVBQXdDLEVBQ3hDLGdCQUEwQyxFQUFTLGlCQUFnQyxFQUNuRixpQkFBZ0M7UUFIaEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEwQjtRQUM1QyxvQkFBZSxHQUFmLGVBQWUsQ0FBeUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUEwQjtRQUFTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBZTtRQUNuRixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWU7SUFBRyxDQUFDOzs7Ozs7O0lBRS9DLFdBQVcsQ0FBQyxPQUFlLEVBQUUsUUFBZ0IsRUFBRSxPQUE4Qjs7Y0FDckUsS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7UUFDL0MsT0FBTyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxPQUFlLEVBQUUsV0FBa0M7O2NBQ3RELEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFELE9BQU8sS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7O0lBRUQsZUFBZSxDQUFDLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxXQUFvQjtRQUN0RSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsUUFBZ0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsOEJBQThCO1FBQzVCLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsSUFBWTtRQUMzQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDN0MsT0FBTyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLHdCQUF3QixJQUFJLHNDQUFzQyxFQUFDLENBQUM7U0FDL0Y7YUFBTTtZQUNMLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLElBQVk7UUFDNUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzdDLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsR0FBRyxFQUFFLHlCQUF5QixJQUFJLHNDQUFzQzthQUN6RSxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVELCtCQUErQixDQUFDLFFBQWdCO1FBQzlDLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7SUFDRCw0QkFBNEIsQ0FBQyxhQUFxQixFQUFFLGdCQUF3QixFQUFFLEdBQWtCO1FBRTlGLE9BQU8sRUFBQyxLQUFLLEVBQUUsbUJBQUEsSUFBSSxFQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRjs7O0lBekRLLGdEQUFtRDs7SUFDbkQsNkNBQStDOztJQUMvQyw4Q0FBaUQ7O0lBQUUsK0NBQXVDOztJQUMxRiwrQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Y29yZSwgRWxlbWVudFNjaGVtYVJlZ2lzdHJ5fSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5cbmV4cG9ydCBjbGFzcyBNb2NrU2NoZW1hUmVnaXN0cnkgaW1wbGVtZW50cyBFbGVtZW50U2NoZW1hUmVnaXN0cnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBleGlzdGluZ1Byb3BlcnRpZXM6IHtba2V5OiBzdHJpbmddOiBib29sZWFufSxcbiAgICAgIHB1YmxpYyBhdHRyUHJvcE1hcHBpbmc6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9LFxuICAgICAgcHVibGljIGV4aXN0aW5nRWxlbWVudHM6IHtba2V5OiBzdHJpbmddOiBib29sZWFufSwgcHVibGljIGludmFsaWRQcm9wZXJ0aWVzOiBBcnJheTxzdHJpbmc+LFxuICAgICAgcHVibGljIGludmFsaWRBdHRyaWJ1dGVzOiBBcnJheTxzdHJpbmc+KSB7fVxuXG4gIGhhc1Byb3BlcnR5KHRhZ05hbWU6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZywgc2NoZW1hczogY29yZS5TY2hlbWFNZXRhZGF0YVtdKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmV4aXN0aW5nUHJvcGVydGllc1twcm9wZXJ0eV07XG4gICAgcmV0dXJuIHZhbHVlID09PSB2b2lkIDAgPyB0cnVlIDogdmFsdWU7XG4gIH1cblxuICBoYXNFbGVtZW50KHRhZ05hbWU6IHN0cmluZywgc2NoZW1hTWV0YXM6IGNvcmUuU2NoZW1hTWV0YWRhdGFbXSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5leGlzdGluZ0VsZW1lbnRzW3RhZ05hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgcmV0dXJuIHZhbHVlID09PSB2b2lkIDAgPyB0cnVlIDogdmFsdWU7XG4gIH1cblxuICBhbGxLbm93bkVsZW1lbnROYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXhpc3RpbmdFbGVtZW50cyk7XG4gIH1cblxuICBzZWN1cml0eUNvbnRleHQoc2VsZWN0b3I6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZywgaXNBdHRyaWJ1dGU6IGJvb2xlYW4pOiBjb3JlLlNlY3VyaXR5Q29udGV4dCB7XG4gICAgcmV0dXJuIGNvcmUuU2VjdXJpdHlDb250ZXh0Lk5PTkU7XG4gIH1cblxuICBnZXRNYXBwZWRQcm9wTmFtZShhdHRyTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyUHJvcE1hcHBpbmdbYXR0ck5hbWVdIHx8IGF0dHJOYW1lO1xuICB9XG5cbiAgZ2V0RGVmYXVsdENvbXBvbmVudEVsZW1lbnROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICduZy1jb21wb25lbnQnO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wZXJ0eShuYW1lOiBzdHJpbmcpOiB7ZXJyb3I6IGJvb2xlYW4sIG1zZz86IHN0cmluZ30ge1xuICAgIGlmICh0aGlzLmludmFsaWRQcm9wZXJ0aWVzLmluZGV4T2YobmFtZSkgPiAtMSkge1xuICAgICAgcmV0dXJuIHtlcnJvcjogdHJ1ZSwgbXNnOiBgQmluZGluZyB0byBwcm9wZXJ0eSAnJHtuYW1lfScgaXMgZGlzYWxsb3dlZCBmb3Igc2VjdXJpdHkgcmVhc29uc2B9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge2Vycm9yOiBmYWxzZX07XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVBdHRyaWJ1dGUobmFtZTogc3RyaW5nKToge2Vycm9yOiBib29sZWFuLCBtc2c/OiBzdHJpbmd9IHtcbiAgICBpZiAodGhpcy5pbnZhbGlkQXR0cmlidXRlcy5pbmRleE9mKG5hbWUpID4gLTEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICBtc2c6IGBCaW5kaW5nIHRvIGF0dHJpYnV0ZSAnJHtuYW1lfScgaXMgZGlzYWxsb3dlZCBmb3Igc2VjdXJpdHkgcmVhc29uc2BcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7ZXJyb3I6IGZhbHNlfTtcbiAgICB9XG4gIH1cblxuICBub3JtYWxpemVBbmltYXRpb25TdHlsZVByb3BlcnR5KHByb3BOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuICBub3JtYWxpemVBbmltYXRpb25TdHlsZVZhbHVlKGNhbWVsQ2FzZVByb3A6IHN0cmluZywgdXNlclByb3ZpZGVkUHJvcDogc3RyaW5nLCB2YWw6IHN0cmluZ3xudW1iZXIpOlxuICAgICAge2Vycm9yOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9IHtcbiAgICByZXR1cm4ge2Vycm9yOiBudWxsISwgdmFsdWU6IHZhbC50b1N0cmluZygpfTtcbiAgfVxufVxuIl19