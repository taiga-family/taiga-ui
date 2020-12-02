/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
/**
 * Creates a token that can be used in a DI Provider.
 *
 * ### Example ([live demo](http://plnkr.co/edit/Ys9ezXpj2Mnoy3Uc8KBp?p=preview))
 *
 * ```typescript
 * var t = new OpaqueToken("value");
 *
 * var injector = Injector.resolveAndCreate([
 *   {provide: t, useValue: "bindingValue"}
 * ]);
 *
 * expect(injector.get(t)).toEqual("bindingValue");
 * ```
 *
 * Using an `OpaqueToken` is preferable to using strings as tokens because of possible collisions
 * caused by multiple providers using the same string as two different tokens.
 *
 * Using an `OpaqueToken` is preferable to using an `Object` as tokens because it provides better
 * error messages.
 * @deprecated since v4.0.0 because it does not support type information, use `InjectionToken<?>`
 * instead.
 */
var OpaqueToken = /** @class */ (function () {
    function OpaqueToken(_desc) {
        this._desc = _desc;
    }
    OpaqueToken.prototype.toString = function () {
        return "Token " + this._desc;
    };
    return OpaqueToken;
}());
export { OpaqueToken };
/**
 * Creates a token that can be used in a DI Provider.
 *
 * Use an `InjectionToken` whenever the type you are injecting is not reified (does not have a
 * runtime representation) such as when injecting an interface, callable type, array or
 * parametrized type.
 *
 * `InjectionToken` is parameterized on `T` which is the type of object which will be returned by
 * the `Injector`. This provides additional level of type safety.
 *
 * ```
 * interface MyInterface {...}
 * var myInterface = injector.get(new InjectionToken<MyInterface>('SomeToken'));
 * // myInterface is inferred to be MyInterface.
 * ```
 *
 * ### Example
 *
 * {@example core/di/ts/injector_spec.ts region='InjectionToken'}
 *
 * @stable
 */
var InjectionToken = /** @class */ (function (_super) {
    __extends(InjectionToken, _super);
    function InjectionToken(desc) {
        return _super.call(this, desc) || this;
    }
    InjectionToken.prototype.toString = function () {
        return "InjectionToken " + this._desc;
    };
    return InjectionToken;
}(OpaqueToken));
export { InjectionToken };
//# sourceMappingURL=injection_token.js.map