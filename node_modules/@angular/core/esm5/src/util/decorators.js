/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __read, __spread } from "tslib";
import { noSideEffects } from './closure';
export var ANNOTATIONS = '__annotations__';
export var PARAMETERS = '__parameters__';
export var PROP_METADATA = '__prop__metadata__';
/**
 * @suppress {globalThis}
 */
export function makeDecorator(name, props, parentClass, additionalProcessing, typeFn) {
    return noSideEffects(function () {
        var metaCtor = makeMetadataCtor(props);
        function DecoratorFactory() {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this instanceof DecoratorFactory) {
                metaCtor.call.apply(metaCtor, __spread([this], args));
                return this;
            }
            var annotationInstance = new ((_a = DecoratorFactory).bind.apply(_a, __spread([void 0], args)))();
            return function TypeDecorator(cls) {
                if (typeFn)
                    typeFn.apply(void 0, __spread([cls], args));
                // Use of Object.defineProperty is important since it creates non-enumerable property which
                // prevents the property is copied during subclassing.
                var annotations = cls.hasOwnProperty(ANNOTATIONS) ?
                    cls[ANNOTATIONS] :
                    Object.defineProperty(cls, ANNOTATIONS, { value: [] })[ANNOTATIONS];
                annotations.push(annotationInstance);
                if (additionalProcessing)
                    additionalProcessing(cls);
                return cls;
            };
        }
        if (parentClass) {
            DecoratorFactory.prototype = Object.create(parentClass.prototype);
        }
        DecoratorFactory.prototype.ngMetadataName = name;
        DecoratorFactory.annotationCls = DecoratorFactory;
        return DecoratorFactory;
    });
}
function makeMetadataCtor(props) {
    return function ctor() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (props) {
            var values = props.apply(void 0, __spread(args));
            for (var propName in values) {
                this[propName] = values[propName];
            }
        }
    };
}
export function makeParamDecorator(name, props, parentClass) {
    return noSideEffects(function () {
        var metaCtor = makeMetadataCtor(props);
        function ParamDecoratorFactory() {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this instanceof ParamDecoratorFactory) {
                metaCtor.apply(this, args);
                return this;
            }
            var annotationInstance = new ((_a = ParamDecoratorFactory).bind.apply(_a, __spread([void 0], args)))();
            ParamDecorator.annotation = annotationInstance;
            return ParamDecorator;
            function ParamDecorator(cls, unusedKey, index) {
                // Use of Object.defineProperty is important since it creates non-enumerable property which
                // prevents the property is copied during subclassing.
                var parameters = cls.hasOwnProperty(PARAMETERS) ?
                    cls[PARAMETERS] :
                    Object.defineProperty(cls, PARAMETERS, { value: [] })[PARAMETERS];
                // there might be gaps if some in between parameters do not have annotations.
                // we pad with nulls.
                while (parameters.length <= index) {
                    parameters.push(null);
                }
                (parameters[index] = parameters[index] || []).push(annotationInstance);
                return cls;
            }
        }
        if (parentClass) {
            ParamDecoratorFactory.prototype = Object.create(parentClass.prototype);
        }
        ParamDecoratorFactory.prototype.ngMetadataName = name;
        ParamDecoratorFactory.annotationCls = ParamDecoratorFactory;
        return ParamDecoratorFactory;
    });
}
export function makePropDecorator(name, props, parentClass, additionalProcessing) {
    return noSideEffects(function () {
        var metaCtor = makeMetadataCtor(props);
        function PropDecoratorFactory() {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this instanceof PropDecoratorFactory) {
                metaCtor.apply(this, args);
                return this;
            }
            var decoratorInstance = new ((_a = PropDecoratorFactory).bind.apply(_a, __spread([void 0], args)))();
            function PropDecorator(target, name) {
                var constructor = target.constructor;
                // Use of Object.defineProperty is important since it creates non-enumerable property which
                // prevents the property is copied during subclassing.
                var meta = constructor.hasOwnProperty(PROP_METADATA) ?
                    constructor[PROP_METADATA] :
                    Object.defineProperty(constructor, PROP_METADATA, { value: {} })[PROP_METADATA];
                meta[name] = meta.hasOwnProperty(name) && meta[name] || [];
                meta[name].unshift(decoratorInstance);
                if (additionalProcessing)
                    additionalProcessing.apply(void 0, __spread([target, name], args));
            }
            return PropDecorator;
        }
        if (parentClass) {
            PropDecoratorFactory.prototype = Object.create(parentClass.prototype);
        }
        PropDecoratorFactory.prototype.ngMetadataName = name;
        PropDecoratorFactory.annotationCls = PropDecoratorFactory;
        return PropDecoratorFactory;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3V0aWwvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBSUgsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQTRCeEMsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUFHLGlCQUFpQixDQUFDO0FBQzdDLE1BQU0sQ0FBQyxJQUFNLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztBQUMzQyxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQUcsb0JBQW9CLENBQUM7QUFFbEQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsYUFBYSxDQUN6QixJQUFZLEVBQUUsS0FBK0IsRUFBRSxXQUFpQixFQUNoRSxvQkFBOEMsRUFDOUMsTUFBZ0Q7SUFFbEQsT0FBTyxhQUFhLENBQUM7UUFDbkIsSUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekMsU0FBUyxnQkFBZ0I7O1lBQ2tCLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFDdkQsSUFBSSxJQUFJLFlBQVksZ0JBQWdCLEVBQUU7Z0JBQ3BDLFFBQVEsQ0FBQyxJQUFJLE9BQWIsUUFBUSxZQUFNLElBQUksR0FBSyxJQUFJLEdBQUU7Z0JBQzdCLE9BQU8sSUFBK0IsQ0FBQzthQUN4QztZQUVELElBQU0sa0JBQWtCLFFBQU8sQ0FBQSxLQUFDLGdCQUF3QixDQUFBLG1DQUFJLElBQUksS0FBQyxDQUFDO1lBQ2xFLE9BQU8sU0FBUyxhQUFhLENBQUMsR0FBWTtnQkFDeEMsSUFBSSxNQUFNO29CQUFFLE1BQU0seUJBQUMsR0FBRyxHQUFLLElBQUksR0FBRTtnQkFDakMsMkZBQTJGO2dCQUMzRixzREFBc0Q7Z0JBQ3RELElBQU0sV0FBVyxHQUFH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RUFBRSxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBRXRDLElBQUksb0JBQW9CO29CQUFFLG9CQUFvQix5QkFBQyxNQUFNLEVBQUUsSUFBSSxHQUFLLElBQUksR0FBRTtZQUN4RSxDQUFDO1lBRUQsT0FBTyxhQUFhLENBQUM7UUFDdkIsQ0FBQztRQUVELElBQUksV0FBVyxFQUFFO1lBQ2Ysb0JBQW9CLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsb0JBQW9CLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDL0Msb0JBQXFCLENBQUMsYUFBYSxHQUFHLG9CQUFvQixDQUFDO1FBQ2pFLE9BQU8sb0JBQW9CLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL2ludGVyZmFjZS90eXBlJztcblxuaW1wb3J0IHtub1NpZGVFZmZlY3RzfSBmcm9tICcuL2Nsb3N1cmUnO1xuXG5cblxuLyoqXG4gKiBBbiBpbnRlcmZhY2UgaW1wbGVtZW50ZWQgYnkgYWxsIEFuZ3VsYXIgdHlwZSBkZWNvcmF0b3JzLCB3aGljaCBhbGxvd3MgdGhlbSB0byBiZSB1c2VkIGFzXG4gKiBkZWNvcmF0b3JzIGFzIHdlbGwgYXMgQW5ndWxhciBzeW50YXguXG4gKlxuICogYGBgXG4gKiBAbmcuQ29tcG9uZW50KHsuLi59KVxuICogY2xhc3MgTXlDbGFzcyB7Li4ufVxuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFR5cGVEZWNvcmF0b3Ige1xuICAvKipcbiAgICogSW52b2tlIGFzIGRlY29yYXRvci5cbiAgICovXG4gIDxUIGV4dGVuZHMgVHlwZTxhbnk+Pih0eXBlOiBUKTogVDtcblxuICAvLyBNYWtlIFR5cGVEZWNvcmF0b3IgYXNzaWduYWJsZSB0byBidWlsdC1pbiBQYXJhbWV0ZXJEZWNvcmF0b3IgdHlwZS5cbiAgLy8gUGFyYW1ldGVyRGVjb3JhdG9yIGlzIGRlY2xhcmVkIGluIGxpYi5kLnRzIGFzIGEgYGRlY2xhcmUgdHlwZWBcbiAgLy8gc28gd2UgY2Fubm90IGRlY2xhcmUgdGhpcyBpbnRlcmZhY2UgYXMgYSBzdWJ0eXBlLlxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzM3OSNpc3N1ZWNvbW1lbnQtMTI2MTY5NDE3XG4gICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHlLZXk/OiBzdHJpbmd8c3ltYm9sLCBwYXJhbWV0ZXJJbmRleD86IG51bWJlcik6IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBBTk5PVEFUSU9OUyA9ICdfX2Fubm90YXRpb25zX18nO1xuZXhwb3J0IGNvbnN0IFBBUkFNRVRFUlMgPSAnX19wYXJhbWV0ZXJzX18nO1xuZXhwb3J0IGNvbnN0IFBST1BfTUVUQURBVEEgPSAnX19wcm9wX19tZXRhZGF0YV9fJztcblxuLyoqXG4gKiBAc3VwcHJlc3Mge2dsb2JhbFRoaXN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRGVjb3JhdG9yPFQ+KFxuICAgIG5hbWU6IHN0cmluZywgcHJvcHM/OiAoLi4uYXJnczogYW55W10pID0+IGFueSwgcGFyZW50Q2xhc3M/OiBhbnksXG4gICAgYWRkaXRpb25hbFByb2Nlc3Npbmc/OiAodHlwZTogVHlwZTxUPikgPT4gdm9pZCxcbiAgICB0eXBlRm4/OiAodHlwZTogVHlwZTxUPiwgLi4uYXJnczogYW55W10pID0+IHZvaWQpOlxuICAgIHtuZXcgKC4uLmFyZ3M6IGFueVtdKTogYW55OyAoLi4uYXJnczogYW55W10pOiBhbnk7ICguLi5hcmdzOiBhbnlbXSk6IChjbHM6IGFueSkgPT4gYW55O30ge1xuICByZXR1cm4gbm9TaWRlRWZmZWN0cygoKSA9PiB7XG4gICAgY29uc3QgbWV0YUN0b3IgPSBtYWtlTWV0YWRhdGFDdG9yKHByb3BzKTtcblxuICAgIGZ1bmN0aW9uIERlY29yYXRvckZhY3RvcnkoXG4gICAgICAgIHRoaXM6IHVua25vd258dHlwZW9mIERlY29yYXRvckZhY3RvcnksIC4uLmFyZ3M6IGFueVtdKTogKGNsczogVHlwZTxUPikgPT4gYW55IHtcbiAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgRGVjb3JhdG9yRmFjdG9yeSkge1xuICAgICAgICBtZXRhQ3Rvci5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcyBhcyB0eXBlb2YgRGVjb3JhdG9yRmFjdG9yeTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYW5ub3RhdGlvbkluc3RhbmNlID0gbmV3IChEZWNvcmF0b3JGYWN0b3J5IGFzIGFueSkoLi4uYXJncyk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gVHlwZURlY29yYXRvcihjbHM6IFR5cGU8VD4pIHtcbiAgICAgICAgaWYgKHR5cGVGbikgdHlwZUZuKGNscywgLi4uYXJncyk7XG4gICAgICAgIC8vIFVzZSBvZiBPYmplY3QuZGVmaW5lUHJvcGVydHkgaXMgaW1wb3J0YW50IHNpbmNlIGl0IGNyZWF0ZXMgbm9uLWVudW1lcmFibGUgcHJvcGVydHkgd2hpY2hcbiAgICAgICAgLy8gcHJldmVudHMgdGhlIHByb3BlcnR5IGlzIGNvcGllZCBkdXJpbmcgc3ViY2xhc3NpbmcuXG4gICAgICAgIGNvbnN0IGFubm90YXRpb25zID0gY2xzLmhhc093blByb3BlcnR5KEFOTk9UQVRJT05TKSA/XG4gICAgICAgICAgICAoY2xzIGFzIGFueSlbQU5OT1RBVElPTlNdIDpcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbHMsIEFOTk9UQVRJT05TLCB7dmFsdWU6IFtdfSlbQU5OT1RBVElPTlNdO1xuICAgICAgICBhbm5vdGF0aW9ucy5wdXNoKGFubm90YXRpb25JbnN0YW5jZSk7XG5cblxuICAgICAgICBpZiAoYWRkaXRpb25hbFByb2Nlc3NpbmcpIGFkZGl0aW9uYWxQcm9jZXNzaW5nKGNscyk7XG5cbiAgICAgICAgcmV0dXJuIGNscztcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudENsYXNzKSB7XG4gICAgICBEZWNvcmF0b3JGYWN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocGFyZW50Q2xhc3MucHJvdG90eXBlKTtcbiAgICB9XG5cbiAgICBEZWNvcmF0b3JGYWN0b3J5LnByb3RvdHlwZS5uZ01ldGFkYXRhTmFtZSA9IG5hbWU7XG4gICAgKERlY29yYXRvckZhY3RvcnkgYXMgYW55KS5hbm5vdGF0aW9uQ2xzID0gRGVjb3JhdG9yRmFjdG9yeTtcbiAgICByZXR1cm4gRGVjb3JhdG9yRmFjdG9yeSBhcyBhbnk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlTWV0YWRhdGFDdG9yKHByb3BzPzogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpOiBhbnkge1xuICByZXR1cm4gZnVuY3Rpb24gY3Rvcih0aGlzOiBhbnksIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBwcm9wcyguLi5hcmdzKTtcbiAgICAgIGZvciAoY29uc3QgcHJvcE5hbWUgaW4gdmFsdWVzKSB7XG4gICAgICAgIHRoaXNbcHJvcE5hbWVdID0gdmFsdWVzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUGFyYW1EZWNvcmF0b3IoXG4gICAgbmFtZTogc3RyaW5nLCBwcm9wcz86ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55LCBwYXJlbnRDbGFzcz86IGFueSk6IGFueSB7XG4gIHJldHVybiBub1NpZGVFZmZlY3RzKCgpID0+IHtcbiAgICBjb25zdCBtZXRhQ3RvciA9IG1ha2VNZXRhZGF0YUN0b3IocHJvcHMpO1xuICAgIGZ1bmN0aW9uIFBhcmFtRGVjb3JhdG9yRmFjdG9yeShcbiAgICAgICAgdGhpczogdW5rbm93bnx0eXBlb2YgUGFyYW1EZWNvcmF0b3JGYWN0b3J5LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG4gICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIFBhcmFtRGVjb3JhdG9yRmFjdG9yeSkge1xuICAgICAgICBtZXRhQ3Rvci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBjb25zdCBhbm5vdGF0aW9uSW5zdGFuY2UgPSBuZXcgKDxhbnk+UGFyYW1EZWNvcmF0b3JGYWN0b3J5KSguLi5hcmdzKTtcblxuICAgICAgKDxhbnk+UGFyYW1EZWNvcmF0b3IpLmFubm90YXRpb24gPSBhbm5vdGF0aW9uSW5zdGFuY2U7XG4gICAgICByZXR1cm4gUGFyYW1EZWNvcmF0b3I7XG5cbiAgICAgIGZ1bmN0aW9uIFBhcmFtRGVjb3JhdG9yKGNsczogYW55LCB1bnVzZWRLZXk6IGFueSwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgICAgIC8vIFVzZSBvZiBPYmplY3QuZGVmaW5lUHJvcGVydHkgaXMgaW1wb3J0YW50IHNpbmNlIGl0IGNyZWF0ZXMgbm9uLWVudW1lcmFibGUgcHJvcGVydHkgd2hpY2hcbiAgICAgICAgLy8gcHJldmVudHMgdGhlIHByb3BlcnR5IGlzIGNvcGllZCBkdXJpbmcgc3ViY2xhc3NpbmcuXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBjbHMuaGFzT3duUHJvcGVydHkoUEFSQU1FVEVSUykgP1xuICAgICAgICAgICAgKGNscyBhcyBhbnkpW1BBUkFNRVRFUlNdIDpcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbHMsIFBBUkFNRVRFUlMsIHt2YWx1ZTogW119KVtQQVJBTUVURVJTXTtcblxuICAgICAgICAvLyB0aGVyZSBtaWdodCBiZSBnYXBzIGlmIHNvbWUgaW4gYmV0d2VlbiBwYXJhbWV0ZXJzIGRvIG5vdCBoYXZlIGFubm90YXRpb25zLlxuICAgICAgICAvLyB3ZSBwYWQgd2l0aCBudWxscy5cbiAgICAgICAgd2hpbGUgKHBhcmFtZXRlcnMubGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgICAgcGFyYW1ldGVycy5wdXNoKG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgKHBhcmFtZXRlcnNbaW5kZXhdID0gcGFyYW1ldGVyc1tpbmRleF0gfHwgW10pLnB1c2goYW5ub3RhdGlvbkluc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIGNscztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmVudENsYXNzKSB7XG4gICAgICBQYXJhbURlY29yYXRvckZhY3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShwYXJlbnRDbGFzcy5wcm90b3R5cGUpO1xuICAgIH1cbiAgICBQYXJhbURlY29yYXRvckZhY3RvcnkucHJvdG90eXBlLm5nTWV0YWRhdGFOYW1lID0gbmFtZTtcbiAgICAoPGFueT5QYXJhbURlY29yYXRvckZhY3RvcnkpLmFubm90YXRpb25DbHMgPSBQYXJhbURlY29yYXRvckZhY3Rvcnk7XG4gICAgcmV0dXJuIFBhcmFtRGVjb3JhdG9yRmFjdG9yeTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHJvcERlY29yYXRvcihcbiAgICBuYW1lOiBzdHJpbmcsIHByb3BzPzogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnksIHBhcmVudENsYXNzPzogYW55LFxuICAgIGFkZGl0aW9uYWxQcm9jZXNzaW5nPzogKHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKTogYW55IHtcbiAgcmV0dXJuIG5vU2lkZUVmZmVjdHMoKCkgPT4ge1xuICAgIGNvbnN0IG1ldGFDdG9yID0gbWFrZU1ldGFkYXRhQ3Rvcihwcm9wcyk7XG5cbiAgICBmdW5jdGlvbiBQcm9wRGVjb3JhdG9yRmFjdG9yeSh0aGlzOiB1bmtub3dufHR5cGVvZiBQcm9wRGVjb3JhdG9yRmFjdG9yeSwgLi4uYXJnczogYW55W10pOiBhbnkge1xuICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBQcm9wRGVjb3JhdG9yRmFjdG9yeSkge1xuICAgICAgICBtZXRhQ3Rvci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRlY29yYXRvckluc3RhbmNlID0gbmV3ICg8YW55PlByb3BEZWNvcmF0b3JGYWN0b3J5KSguLi5hcmdzKTtcblxuICAgICAgZnVuY3Rpb24gUHJvcERlY29yYXRvcih0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICAgICAgICAvLyBVc2Ugb2YgT2JqZWN0LmRlZmluZVByb3BlcnR5IGlzIGltcG9ydGFudCBzaW5jZSBpdCBjcmVhdGVzIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5IHdoaWNoXG4gICAgICAgIC8vIHByZXZlbnRzIHRoZSBwcm9wZXJ0eSBpcyBjb3BpZWQgZHVyaW5nIHN1YmNsYXNzaW5nLlxuICAgICAgICBjb25zdCBtZXRhID0gY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoUFJPUF9NRVRBREFUQSkgP1xuICAgICAgICAgICAgKGNvbnN0cnVjdG9yIGFzIGFueSlbUFJPUF9NRVRBREFUQV0gOlxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnN0cnVjdG9yLCBQUk9QX01FVEFEQVRBLCB7dmFsdWU6IHt9fSlbUFJPUF9NRVRBREFUQV07XG4gICAgICAgIG1ldGFbbmFtZV0gPSBtZXRhLmhhc093blByb3BlcnR5KG5hbWUpICYmIG1ldGFbbmFtZV0gfHwgW107XG4gICAgICAgIG1ldGFbbmFtZV0udW5zaGlmdChkZWNvcmF0b3JJbnN0YW5jZSk7XG5cbiAgICAgICAgaWYgKGFkZGl0aW9uYWxQcm9jZXNzaW5nKSBhZGRpdGlvbmFsUHJvY2Vzc2luZyh0YXJnZXQsIG5hbWUsIC4uLmFyZ3MpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvcERlY29yYXRvcjtcbiAgICB9XG5cbiAgICBpZiAocGFyZW50Q2xhc3MpIHtcbiAgICAgIFByb3BEZWNvcmF0b3JGYWN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocGFyZW50Q2xhc3MucHJvdG90eXBlKTtcbiAgICB9XG5cbiAgICBQcm9wRGVjb3JhdG9yRmFjdG9yeS5wcm90b3R5cGUubmdNZXRhZGF0YU5hbWUgPSBuYW1lO1xuICAgICg8YW55PlByb3BEZWNvcmF0b3JGYWN0b3J5KS5hbm5vdGF0aW9uQ2xzID0gUHJvcERlY29yYXRvckZhY3Rvcnk7XG4gICAgcmV0dXJuIFByb3BEZWNvcmF0b3JGYWN0b3J5O1xuICB9KTtcbn1cbiJdfQ==