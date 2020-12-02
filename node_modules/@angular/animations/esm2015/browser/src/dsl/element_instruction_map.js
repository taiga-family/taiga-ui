/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/element_instruction_map.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ElementInstructionMap {
    constructor() {
        this._map = new Map();
    }
    /**
     * @param {?} element
     * @return {?}
     */
    consume(element) {
        /** @type {?} */
        let instructions = this._map.get(element);
        if (instructions) {
            this._map.delete(element);
        }
        else {
            instructions = [];
        }
        return instructions;
    }
    /**
     * @param {?} element
     * @param {?} instructions
     * @return {?}
     */
    append(element, instructions) {
        /** @type {?} */
        let existingInstructions = this._map.get(element);
        if (!existingInstructions) {
            this._map.set(element, existingInstructions = []);
        }
        existingInstructions.push(...instructions);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    has(element) {
        return this._map.has(element);
    }
    /**
     * @return {?}
     */
    clear() {
        this._map.clear();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ElementInstructionMap.prototype._map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudF9pbnN0cnVjdGlvbl9tYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmltYXRpb25zL2Jyb3dzZXIvc3JjL2RzbC9lbGVtZW50X2luc3RydWN0aW9uX21hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLE1BQU0sT0FBTyxxQkFBcUI7SUFBbEM7UUFDVSxTQUFJLEdBQUcsSUFBSSxHQUFHLEVBQXVDLENBQUM7SUEyQmhFLENBQUM7Ozs7O0lBekJDLE9BQU8sQ0FBQyxPQUFZOztZQUNkLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDekMsSUFBSSxZQUFZLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0I7YUFBTTtZQUNMLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDbkI7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBWSxFQUFFLFlBQTRDOztZQUMzRCxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDakQsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUNuRDtRQUNELG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLE9BQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBQ0Y7Ozs7OztJQTNCQyxxQ0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0FuaW1hdGlvblRpbWVsaW5lSW5zdHJ1Y3Rpb259IGZyb20gJy4vYW5pbWF0aW9uX3RpbWVsaW5lX2luc3RydWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIEVsZW1lbnRJbnN0cnVjdGlvbk1hcCB7XG4gIHByaXZhdGUgX21hcCA9IG5ldyBNYXA8YW55LCBBbmltYXRpb25UaW1lbGluZUluc3RydWN0aW9uW10+KCk7XG5cbiAgY29uc3VtZShlbGVtZW50OiBhbnkpOiBBbmltYXRpb25UaW1lbGluZUluc3RydWN0aW9uW10ge1xuICAgIGxldCBpbnN0cnVjdGlvbnMgPSB0aGlzLl9tYXAuZ2V0KGVsZW1lbnQpO1xuICAgIGlmIChpbnN0cnVjdGlvbnMpIHtcbiAgICAgIHRoaXMuX21hcC5kZWxldGUoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RydWN0aW9ucyA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gaW5zdHJ1Y3Rpb25zO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQ6IGFueSwgaW5zdHJ1Y3Rpb25zOiBBbmltYXRpb25UaW1lbGluZUluc3RydWN0aW9uW10pIHtcbiAgICBsZXQgZXhpc3RpbmdJbnN0cnVjdGlvbnMgPSB0aGlzLl9tYXAuZ2V0KGVsZW1lbnQpO1xuICAgIGlmICghZXhpc3RpbmdJbnN0cnVjdGlvbnMpIHtcbiAgICAgIHRoaXMuX21hcC5zZXQoZWxlbWVudCwgZXhpc3RpbmdJbnN0cnVjdGlvbnMgPSBbXSk7XG4gICAgfVxuICAgIGV4aXN0aW5nSW5zdHJ1Y3Rpb25zLnB1c2goLi4uaW5zdHJ1Y3Rpb25zKTtcbiAgfVxuXG4gIGhhcyhlbGVtZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwLmhhcyhlbGVtZW50KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuX21hcC5jbGVhcigpO1xuICB9XG59XG4iXX0=