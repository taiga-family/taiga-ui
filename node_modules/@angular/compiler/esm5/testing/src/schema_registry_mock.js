/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { core } from '@angular/compiler';
var MockSchemaRegistry = /** @class */ (function () {
    function MockSchemaRegistry(existingProperties, attrPropMapping, existingElements, invalidProperties, invalidAttributes) {
        this.existingProperties = existingProperties;
        this.attrPropMapping = attrPropMapping;
        this.existingElements = existingElements;
        this.invalidProperties = invalidProperties;
        this.invalidAttributes = invalidAttributes;
    }
    MockSchemaRegistry.prototype.hasProperty = function (tagName, property, schemas) {
        var value = this.existingProperties[property];
        return value === void 0 ? true : value;
    };
    MockSchemaRegistry.prototype.hasElement = function (tagName, schemaMetas) {
        var value = this.existingElements[tagName.toLowerCase()];
        return value === void 0 ? true : value;
    };
    MockSchemaRegistry.prototype.allKnownElementNames = function () {
        return Object.keys(this.existingElements);
    };
    MockSchemaRegistry.prototype.securityContext = function (selector, property, isAttribute) {
        return core.SecurityContext.NONE;
    };
    MockSchemaRegistry.prototype.getMappedPropName = function (attrName) {
        return this.attrPropMapping[attrName] || attrName;
    };
    MockSchemaRegistry.prototype.getDefaultComponentElementName = function () {
        return 'ng-component';
    };
    MockSchemaRegistry.prototype.validateProperty = function (name) {
        if (this.invalidProperties.indexOf(name) > -1) {
            return { error: true, msg: "Binding to property '" + name + "' is disallowed for security reasons" };
        }
        else {
            return { error: false };
        }
    };
    MockSchemaRegistry.prototype.validateAttribute = function (name) {
        if (this.invalidAttributes.indexOf(name) > -1) {
            return {
                error: true,
                msg: "Binding to attribute '" + name + "' is disallowed for security reasons"
            };
        }
        else {
            return { error: false };
        }
    };
    MockSchemaRegistry.prototype.normalizeAnimationStyleProperty = function (propName) {
        return propName;
    };
    MockSchemaRegistry.prototype.normalizeAnimationStyleValue = function (camelCaseProp, userProvidedProp, val) {
        return { error: null, value: val.toString() };
    };
    return MockSchemaRegistry;
}());
export { MockSchemaRegistry };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hX3JlZ2lzdHJ5X21vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci90ZXN0aW5nL3NyYy9zY2hlbWFfcmVnaXN0cnlfbW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsSUFBSSxFQUF3QixNQUFNLG1CQUFtQixDQUFDO0FBRTlEO0lBQ0UsNEJBQ1csa0JBQTRDLEVBQzVDLGVBQXdDLEVBQ3hDLGdCQUEwQyxFQUFTLGlCQUFnQyxFQUNuRixpQkFBZ0M7UUFIaEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEwQjtRQUM1QyxvQkFBZSxHQUFmLGVBQWUsQ0FBeUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUEwQjtRQUFTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBZTtRQUNuRixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWU7SUFBRyxDQUFDO0lBRS9DLHdDQUFXLEdBQVgsVUFBWSxPQUFlLEVBQUUsUUFBZ0IsRUFBRSxPQUE4QjtRQUMzRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsT0FBTyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3pDLENBQUM7SUFFRCx1Q0FBVSxHQUFWLFVBQVcsT0FBZSxFQUFFLFdBQWtDO1FBQzVELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMzRCxPQUFPLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUVELGlEQUFvQixHQUFwQjtRQUNFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsNENBQWUsR0FBZixVQUFnQixRQUFnQixFQUFFLFFBQWdCLEVBQUUsV0FBb0I7UUFDdEUsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsOENBQWlCLEdBQWpCLFVBQWtCLFFBQWdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUM7SUFDcEQsQ0FBQztJQUVELDJEQUE4QixHQUE5QjtRQUNFLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDN0MsT0FBTyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLDBCQUF3QixJQUFJLHlDQUFzQyxFQUFDLENBQUM7U0FDL0Y7YUFBTTtZQUNMLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQsOENBQWlCLEdBQWpCLFVBQWtCLElBQVk7UUFDNUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzdDLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsR0FBRyxFQUFFLDJCQUF5QixJQUFJLHlDQUFzQzthQUN6RSxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQsNERBQStCLEdBQS9CLFVBQWdDLFFBQWdCO1FBQzlDLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFDRCx5REFBNEIsR0FBNUIsVUFBNkIsYUFBcUIsRUFBRSxnQkFBd0IsRUFBRSxHQUFrQjtRQUU5RixPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtjb3JlLCBFbGVtZW50U2NoZW1hUmVnaXN0cnl9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcblxuZXhwb3J0IGNsYXNzIE1vY2tTY2hlbWFSZWdpc3RyeSBpbXBsZW1lbnRzIEVsZW1lbnRTY2hlbWFSZWdpc3RyeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGV4aXN0aW5nUHJvcGVydGllczoge1trZXk6IHN0cmluZ106IGJvb2xlYW59LFxuICAgICAgcHVibGljIGF0dHJQcm9wTWFwcGluZzoge1trZXk6IHN0cmluZ106IHN0cmluZ30sXG4gICAgICBwdWJsaWMgZXhpc3RpbmdFbGVtZW50czoge1trZXk6IHN0cmluZ106IGJvb2xlYW59LCBwdWJsaWMgaW52YWxpZFByb3BlcnRpZXM6IEFycmF5PHN0cmluZz4sXG4gICAgICBwdWJsaWMgaW52YWxpZEF0dHJpYnV0ZXM6IEFycmF5PHN0cmluZz4pIHt9XG5cbiAgaGFzUHJvcGVydHkodGFnTmFtZTogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nLCBzY2hlbWFzOiBjb3JlLlNjaGVtYU1ldGFkYXRhW10pOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXhpc3RpbmdQcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgICByZXR1cm4gdmFsdWUgPT09IHZvaWQgMCA/IHRydWUgOiB2YWx1ZTtcbiAgfVxuXG4gIGhhc0VsZW1lbnQodGFnTmFtZTogc3RyaW5nLCBzY2hlbWFNZXRhczogY29yZS5TY2hlbWFNZXRhZGF0YVtdKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmV4aXN0aW5nRWxlbWVudHNbdGFnTmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgICByZXR1cm4gdmFsdWUgPT09IHZvaWQgMCA/IHRydWUgOiB2YWx1ZTtcbiAgfVxuXG4gIGFsbEtub3duRWxlbWVudE5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5leGlzdGluZ0VsZW1lbnRzKTtcbiAgfVxuXG4gIHNlY3VyaXR5Q29udGV4dChzZWxlY3Rvcjogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nLCBpc0F0dHJpYnV0ZTogYm9vbGVhbik6IGNvcmUuU2VjdXJpdHlDb250ZXh0IHtcbiAgICByZXR1cm4gY29yZS5TZWN1cml0eUNvbnRleHQuTk9ORTtcbiAgfVxuXG4gIGdldE1hcHBlZFByb3BOYW1lKGF0dHJOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmF0dHJQcm9wTWFwcGluZ1thdHRyTmFtZV0gfHwgYXR0ck5hbWU7XG4gIH1cblxuICBnZXREZWZhdWx0Q29tcG9uZW50RWxlbWVudE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ25nLWNvbXBvbmVudCc7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BlcnR5KG5hbWU6IHN0cmluZyk6IHtlcnJvcjogYm9vbGVhbiwgbXNnPzogc3RyaW5nfSB7XG4gICAgaWYgKHRoaXMuaW52YWxpZFByb3BlcnRpZXMuaW5kZXhPZihuYW1lKSA+IC0xKSB7XG4gICAgICByZXR1cm4ge2Vycm9yOiB0cnVlLCBtc2c6IGBCaW5kaW5nIHRvIHByb3BlcnR5ICcke25hbWV9JyBpcyBkaXNhbGxvd2VkIGZvciBzZWN1cml0eSByZWFzb25zYH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7ZXJyb3I6IGZhbHNlfTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZUF0dHJpYnV0ZShuYW1lOiBzdHJpbmcpOiB7ZXJyb3I6IGJvb2xlYW4sIG1zZz86IHN0cmluZ30ge1xuICAgIGlmICh0aGlzLmludmFsaWRBdHRyaWJ1dGVzLmluZGV4T2YobmFtZSkgPiAtMSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgIG1zZzogYEJpbmRpbmcgdG8gYXR0cmlidXRlICcke25hbWV9JyBpcyBkaXNhbGxvd2VkIGZvciBzZWN1cml0eSByZWFzb25zYFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtlcnJvcjogZmFsc2V9O1xuICAgIH1cbiAgfVxuXG4gIG5vcm1hbGl6ZUFuaW1hdGlvblN0eWxlUHJvcGVydHkocHJvcE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG4gIG5vcm1hbGl6ZUFuaW1hdGlvblN0eWxlVmFsdWUoY2FtZWxDYXNlUHJvcDogc3RyaW5nLCB1c2VyUHJvdmlkZWRQcm9wOiBzdHJpbmcsIHZhbDogc3RyaW5nfG51bWJlcik6XG4gICAgICB7ZXJyb3I6IHN0cmluZywgdmFsdWU6IHN0cmluZ30ge1xuICAgIHJldHVybiB7ZXJyb3I6IG51bGwhLCB2YWx1ZTogdmFsLnRvU3RyaW5nKCl9O1xuICB9XG59XG4iXX0=