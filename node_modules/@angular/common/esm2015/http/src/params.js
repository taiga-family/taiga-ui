/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/src/params.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A codec for encoding and decoding parameters in URLs.
 *
 * Used by `HttpParams`.
 *
 * \@publicApi
 *
 * @record
 */
export function HttpParameterCodec() { }
if (false) {
    /**
     * @param {?} key
     * @return {?}
     */
    HttpParameterCodec.prototype.encodeKey = function (key) { };
    /**
     * @param {?} value
     * @return {?}
     */
    HttpParameterCodec.prototype.encodeValue = function (value) { };
    /**
     * @param {?} key
     * @return {?}
     */
    HttpParameterCodec.prototype.decodeKey = function (key) { };
    /**
     * @param {?} value
     * @return {?}
     */
    HttpParameterCodec.prototype.decodeValue = function (value) { };
}
/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * \@publicApi
 */
export class HttpUrlEncodingCodec {
    /**
     * Encodes a key name for a URL parameter or query-string.
     * @param {?} key The key name.
     * @return {?} The encoded key name.
     */
    encodeKey(key) {
        return standardEncoding(key);
    }
    /**
     * Encodes the value of a URL parameter or query-string.
     * @param {?} value The value.
     * @return {?} The encoded value.
     */
    encodeValue(value) {
        return standardEncoding(value);
    }
    /**
     * Decodes an encoded URL parameter or query-string key.
     * @param {?} key The encoded key name.
     * @return {?} The decoded key name.
     */
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    /**
     * Decodes an encoded URL parameter or query-string value.
     * @param {?} value The encoded value.
     * @return {?} The decoded value.
     */
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}
/**
 * @param {?} rawParams
 * @param {?} codec
 * @return {?}
 */
function paramParser(rawParams, codec) {
    /** @type {?} */
    const map = new Map();
    if (rawParams.length > 0) {
        /** @type {?} */
        const params = rawParams.split('&');
        params.forEach((/**
         * @param {?} param
         * @return {?}
         */
        (param) => {
            /** @type {?} */
            const eqIdx = param.indexOf('=');
            const [key, val] = eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
            /** @type {?} */
            const list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        }));
    }
    return map;
}
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * @record
 */
function Update() { }
if (false) {
    /** @type {?} */
    Update.prototype.param;
    /** @type {?|undefined} */
    Update.prototype.value;
    /** @type {?} */
    Update.prototype.op;
}
/**
 * Options used to construct an `HttpParams` instance.
 *
 * \@publicApi
 * @record
 */
export function HttpParamsOptions() { }
if (false) {
    /**
     * String representation of the HTTP parameters in URL-query-string format.
     * Mutually exclusive with `fromObject`.
     * @type {?|undefined}
     */
    HttpParamsOptions.prototype.fromString;
    /**
     * Object map of the HTTP parameters. Mutually exclusive with `fromString`.
     * @type {?|undefined}
     */
    HttpParamsOptions.prototype.fromObject;
    /**
     * Encoding codec used to parse and serialize the parameters.
     * @type {?|undefined}
     */
    HttpParamsOptions.prototype.encoder;
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * \@publicApi
 */
export class HttpParams {
    /**
     * @param {?=} options
     */
    constructor(options = (/** @type {?} */ ({}))) {
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error(`Cannot specify both fromString and fromObject.`);
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                /** @type {?} */
                const value = ((/** @type {?} */ (options.fromObject)))[key];
                (/** @type {?} */ (this.map)).set(key, Array.isArray(value) ? value : [value]);
            }));
        }
        else {
            this.map = null;
        }
    }
    /**
     * Reports whether the body includes one or more values for a given parameter.
     * @param {?} param The parameter name.
     * @return {?} True if the parameter has one or more values,
     * false if it has no value or is not present.
     */
    has(param) {
        this.init();
        return (/** @type {?} */ (this.map)).has(param);
    }
    /**
     * Retrieves the first value for a parameter.
     * @param {?} param The parameter name.
     * @return {?} The first value of the given parameter,
     * or `null` if the parameter is not present.
     */
    get(param) {
        this.init();
        /** @type {?} */
        const res = (/** @type {?} */ (this.map)).get(param);
        return !!res ? res[0] : null;
    }
    /**
     * Retrieves all values for a  parameter.
     * @param {?} param The parameter name.
     * @return {?} All values in a string array,
     * or `null` if the parameter not present.
     */
    getAll(param) {
        this.init();
        return (/** @type {?} */ (this.map)).get(param) || null;
    }
    /**
     * Retrieves all the parameters for this body.
     * @return {?} The parameter names in a string array.
     */
    keys() {
        this.init();
        return Array.from((/** @type {?} */ (this.map)).keys());
    }
    /**
     * Appends a new value to existing values for a parameter.
     * @param {?} param The parameter name.
     * @param {?} value The new value to add.
     * @return {?} A new body with the appended value.
     */
    append(param, value) {
        return this.clone({ param, value, op: 'a' });
    }
    /**
     * Replaces the value for a parameter.
     * @param {?} param The parameter name.
     * @param {?} value The new value.
     * @return {?} A new body with the new value.
     */
    set(param, value) {
        return this.clone({ param, value, op: 's' });
    }
    /**
     * Removes a given value or all values from a parameter.
     * @param {?} param The parameter name.
     * @param {?=} value The value to remove, if provided.
     * @return {?} A new body with the given value removed, or with all values
     * removed if no value is specified.
     */
    delete(param, value) {
        return this.clone({ param, value, op: 'd' });
    }
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     * @return {?}
     */
    toString() {
        this.init();
        return this.keys()
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const eKey = this.encoder.encodeKey(key);
            // `a: ['1']` produces `'a=1'`
            // `b: []` produces `''`
            // `c: ['1', '2']` produces `'c=1&c=2'`
            return (/** @type {?} */ ((/** @type {?} */ (this.map)).get(key))).map((/**
             * @param {?} value
             * @return {?}
             */
            value => eKey + '=' + this.encoder.encodeValue(value)))
                .join('&');
        }))
            // filter out empty values because `b: []` produces `''`
            // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
            .filter((/**
         * @param {?} param
         * @return {?}
         */
        param => param !== ''))
            .join('&');
    }
    /**
     * @private
     * @param {?} update
     * @return {?}
     */
    clone(update) {
        /** @type {?} */
        const clone = new HttpParams((/** @type {?} */ ({ encoder: this.encoder })));
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => (/** @type {?} */ (this.map)).set(key, (/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ (this.cloneFrom)).map)).get(key))))));
            (/** @type {?} */ (this.updates)).forEach((/**
             * @param {?} update
             * @return {?}
             */
            update => {
                switch (update.op) {
                    case 'a':
                    case 's':
                        /** @type {?} */
                        const base = (update.op === 'a' ? (/** @type {?} */ (this.map)).get(update.param) : undefined) || [];
                        base.push((/** @type {?} */ (update.value)));
                        (/** @type {?} */ (this.map)).set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            /** @type {?} */
                            let base = (/** @type {?} */ (this.map)).get(update.param) || [];
                            /** @type {?} */
                            const idx = base.indexOf(update.value);
                            if (idx !== -1) {
                                base.splice(idx, 1);
                            }
                            if (base.length > 0) {
                                (/** @type {?} */ (this.map)).set(update.param, base);
                            }
                            else {
                                (/** @type {?} */ (this.map)).delete(update.param);
                            }
                        }
                        else {
                            (/** @type {?} */ (this.map)).delete(update.param);
                            break;
                        }
                }
            }));
            this.cloneFrom = this.updates = null;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpParams.prototype.map;
    /**
     * @type {?}
     * @private
     */
    HttpParams.prototype.encoder;
    /**
     * @type {?}
     * @private
     */
    HttpParams.prototype.updates;
    /**
     * @type {?}
     * @private
     */
    HttpParams.prototype.cloneFrom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2h0dHAvc3JjL3BhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSx3Q0FNQzs7Ozs7O0lBTEMsNERBQStCOzs7OztJQUMvQixnRUFBbUM7Ozs7O0lBRW5DLDREQUErQjs7Ozs7SUFDL0IsZ0VBQW1DOzs7Ozs7Ozs7Ozs7QUFhckMsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBTS9CLFNBQVMsQ0FBQyxHQUFXO1FBQ25CLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBT0QsV0FBVyxDQUFDLEtBQWE7UUFDdkIsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFPRCxTQUFTLENBQUMsR0FBVztRQUNuQixPQUFPLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQU9ELFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLE9BQU8sa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUNGOzs7Ozs7QUFHRCxTQUFTLFdBQVcsQ0FBQyxTQUFpQixFQUFFLEtBQXlCOztVQUN6RCxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQW9CO0lBQ3ZDLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2NBQ2xCLE1BQU0sR0FBYSxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM3QyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7O2tCQUN6QixLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7a0JBQzFCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFhLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxD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KiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogQSBjb2RlYyBmb3IgZW5jb2RpbmcgYW5kIGRlY29kaW5nIHBhcmFtZXRlcnMgaW4gVVJMcy5cbiAqXG4gKiBVc2VkIGJ5IGBIdHRwUGFyYW1zYC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKiovXG5leHBvcnQgaW50ZXJmYWNlIEh0dHBQYXJhbWV0ZXJDb2RlYyB7XG4gIGVuY29kZUtleShrZXk6IHN0cmluZyk6IHN0cmluZztcbiAgZW5jb2RlVmFsdWUodmFsdWU6IHN0cmluZyk6IHN0cmluZztcblxuICBkZWNvZGVLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmc7XG4gIGRlY29kZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgZW5jb2RpbmcgYW5kIGRlY29kaW5nIG9mIFVSTCBwYXJhbWV0ZXIgYW5kIHF1ZXJ5LXN0cmluZyB2YWx1ZXMuXG4gKlxuICogU2VyaWFsaXplcyBhbmQgcGFyc2VzIFVSTCBwYXJhbWV0ZXIga2V5cyBhbmQgdmFsdWVzIHRvIGVuY29kZSBhbmQgZGVjb2RlIHRoZW0uXG4gKiBJZiB5b3UgcGFzcyBVUkwgcXVlcnkgcGFyYW1ldGVycyB3aXRob3V0IGVuY29kaW5nLFxuICogdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgY2FuIGJlIG1pc2ludGVycHJldGVkIGF0IHRoZSByZWNlaXZpbmcgZW5kLlxuICpcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBIdHRwVXJsRW5jb2RpbmdDb2RlYyBpbXBsZW1lbnRzIEh0dHBQYXJhbWV0ZXJDb2RlYyB7XG4gIC8qKlxuICAgKiBFbmNvZGVzIGEga2V5IG5hbWUgZm9yIGEgVVJMIHBhcmFtZXRlciBvciBxdWVyeS1zdHJpbmcuXG4gICAqIEBwYXJhbSBrZXkgVGhlIGtleSBuYW1lLlxuICAgKiBAcmV0dXJucyBUaGUgZW5jb2RlZCBrZXkgbmFtZS5cbiAgICovXG4gIGVuY29kZUtleShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0YW5kYXJkRW5jb2Rpbmcoa2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmNvZGVzIHRoZSB2YWx1ZSBvZiBhIFVSTCBwYXJhbWV0ZXIgb3IgcXVlcnktc3RyaW5nLlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlLlxuICAgKiBAcmV0dXJucyBUaGUgZW5jb2RlZCB2YWx1ZS5cbiAgICovXG4gIGVuY29kZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdGFuZGFyZEVuY29kaW5nKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNvZGVzIGFuIGVuY29kZWQgVVJMIHBhcmFtZXRlciBvciBxdWVyeS1zdHJpbmcga2V5LlxuICAgKiBAcGFyYW0ga2V5IFRoZSBlbmNvZGVkIGtleSBuYW1lLlxuICAgKiBAcmV0dXJucyBUaGUgZGVjb2RlZCBrZXkgbmFtZS5cbiAgICovXG4gIGRlY29kZUtleShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY29kZXMgYW4gZW5jb2RlZCBVUkwgcGFyYW1ldGVyIG9yIHF1ZXJ5LXN0cmluZyB2YWx1ZS5cbiAgICogQHBhcmFtIHZhbHVlIFRoZSBlbmNvZGVkIHZhbHVlLlxuICAgKiBAcmV0dXJucyBUaGUgZGVjb2RlZCB2YWx1ZS5cbiAgICovXG4gIGRlY29kZVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHBhcmFtUGFyc2VyKHJhd1BhcmFtczogc3RyaW5nLCBjb2RlYzogSHR0cFBhcmFtZXRlckNvZGVjKTogTWFwPHN0cmluZywgc3RyaW5nW10+IHtcbiAgY29uc3QgbWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPigpO1xuICBpZiAocmF3UGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBwYXJhbXM6IHN0cmluZ1tdID0gcmF3UGFyYW1zLnNwbGl0KCcmJyk7XG4gICAgcGFyYW1zLmZvckVhY2goKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGVxSWR4ID0gcGFyYW0uaW5kZXhPZignPScpO1xuICAgICAgY29uc3QgW2tleSwgdmFsXTogc3RyaW5nW10gPSBlcUlkeCA9PSAtMSA/XG4gICAgICAgICAgW2NvZGVjLmRlY29kZUtleShwYXJhbSksICcnXSA6XG4gICAgICAgICAgW2NvZGVjLmRlY29kZUtleShwYXJhbS5zbGljZSgwLCBlcUlkeCkpLCBjb2RlYy5kZWNvZGVWYWx1ZShwYXJhbS5zbGljZShlcUlkeCArIDEpKV07XG4gICAgICBjb25zdCBsaXN0ID0gbWFwLmdldChrZXkpIHx8IFtdO1xuICAgICAgbGlzdC5wdXNoKHZhbCk7XG4gICAgICBtYXAuc2V0KGtleSwgbGlzdCk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cbmZ1bmN0aW9uIHN0YW5kYXJkRW5jb2Rpbmcodjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2KVxuICAgICAgLnJlcGxhY2UoLyU0MC9naSwgJ0AnKVxuICAgICAgLnJlcGxhY2UoLyUzQS9naSwgJzonKVxuICAgICAgLnJlcGxhY2UoLyUyNC9naSwgJyQnKVxuICAgICAgLnJlcGxhY2UoLyUyQy9naSwgJywnKVxuICAgICAgLnJlcGxhY2UoLyUzQi9naSwgJzsnKVxuICAgICAgLnJlcGxhY2UoLyUyQi9naSwgJysnKVxuICAgICAgLnJlcGxhY2UoLyUzRC9naSwgJz0nKVxuICAgICAgLnJlcGxhY2UoLyUzRi9naSwgJz8nKVxuICAgICAgLnJlcGxhY2UoLyUyRi9naSwgJy8nKTtcbn1cblxuaW50ZXJmYWNlIFVwZGF0ZSB7XG4gIHBhcmFtOiBzdHJpbmc7XG4gIHZhbHVlPzogc3RyaW5nO1xuICBvcDogJ2EnfCdkJ3wncyc7XG59XG5cbi8qKlxuICogT3B0aW9ucyB1c2VkIHRvIGNvbnN0cnVjdCBhbiBgSHR0cFBhcmFtc2AgaW5zdGFuY2UuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEh0dHBQYXJhbXNPcHRpb25zIHtcbiAgLyoqXG4gICAqIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgSFRUUCBwYXJhbWV0ZXJzIGluIFVSTC1xdWVyeS1zdHJpbmcgZm9ybWF0LlxuICAgKiBNdXR1YWxseSBleGNsdXNpdmUgd2l0aCBgZnJvbU9iamVjdGAuXG4gICAqL1xuICBmcm9tU3RyaW5nPzogc3RyaW5nO1xuXG4gIC8qKiBPYmplY3QgbWFwIG9mIHRoZSBIVFRQIHBhcmFtZXRlcnMuIE11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIGBmcm9tU3RyaW5nYC4gKi9cbiAgZnJvbU9iamVjdD86IHtbcGFyYW06IHN0cmluZ106IHN0cmluZ3xSZWFkb25seUFycmF5PHN0cmluZz59O1xuXG4gIC8qKiBFbmNvZGluZyBjb2RlYyB1c2VkIHRvIHBhcnNlIGFuZCBzZXJpYWxpemUgdGhlIHBhcmFtZXRlcnMuICovXG4gIGVuY29kZXI/OiBIdHRwUGFyYW1ldGVyQ29kZWM7XG59XG5cbi8qKlxuICogQW4gSFRUUCByZXF1ZXN0L3Jlc3BvbnNlIGJvZHkgdGhhdCByZXByZXNlbnRzIHNlcmlhbGl6ZWQgcGFyYW1ldGVycyxcbiAqIHBlciB0aGUgTUlNRSB0eXBlIGBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRgLlxuICpcbiAqIFRoaXMgY2xhc3MgaXMgaW1tdXRhYmxlOyBhbGwgbXV0YXRpb24gb3BlcmF0aW9ucyByZXR1cm4gYSBuZXcgaW5zdGFuY2UuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgSHR0cFBhcmFtcyB7XG4gIHByaXZhdGUgbWFwOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT58bnVsbDtcbiAgcHJpdmF0ZSBlbmNvZGVyOiBIdHRwUGFyYW1ldGVyQ29kZWM7XG4gIHByaXZhdGUgdXBkYXRlczogVXBkYXRlW118bnVsbCA9IG51bGw7XG4gIHByaXZhdGUgY2xvbmVGcm9tOiBIdHRwUGFyYW1zfG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEh0dHBQYXJhbXNPcHRpb25zID0ge30gYXMgSHR0cFBhcmFtc09wdGlvbnMpIHtcbiAgICB0aGlzLmVuY29kZXIgPSBvcHRpb25zLmVuY29kZXIgfHwgbmV3IEh0dHBVcmxFbmNvZGluZ0NvZGVjKCk7XG4gICAgaWYgKCEhb3B0aW9ucy5mcm9tU3RyaW5nKSB7XG4gICAgICBpZiAoISFvcHRpb25zLmZyb21PYmplY3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc3BlY2lmeSBib3RoIGZyb21TdHJpbmcgYW5kIGZyb21PYmplY3QuYCk7XG4gICAgICB9XG4gICAgICB0aGlzLm1hcCA9IHBhcmFtUGFyc2VyKG9wdGlvbnMuZnJvbVN0cmluZywgdGhpcy5lbmNvZGVyKTtcbiAgICB9IGVsc2UgaWYgKCEhb3B0aW9ucy5mcm9tT2JqZWN0KSB7XG4gICAgICB0aGlzLm1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuZnJvbU9iamVjdCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IChvcHRpb25zLmZyb21PYmplY3QgYXMgYW55KVtrZXldO1xuICAgICAgICB0aGlzLm1hcCEuc2V0KGtleSwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFwID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVwb3J0cyB3aGV0aGVyIHRoZSBib2R5IGluY2x1ZGVzIG9uZSBvciBtb3JlIHZhbHVlcyBmb3IgYSBnaXZlbiBwYXJhbWV0ZXIuXG4gICAqIEBwYXJhbSBwYXJhbSBUaGUgcGFyYW1ldGVyIG5hbWUuXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHBhcmFtZXRlciBoYXMgb25lIG9yIG1vcmUgdmFsdWVzLFxuICAgKiBmYWxzZSBpZiBpdCBoYXMgbm8gdmFsdWUgb3IgaXMgbm90IHByZXNlbnQuXG4gICAqL1xuICBoYXMocGFyYW06IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHJldHVybiB0aGlzLm1hcCEuaGFzKHBhcmFtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGZpcnN0IHZhbHVlIGZvciBhIHBhcmFtZXRlci5cbiAgICogQHBhcmFtIHBhcmFtIFRoZSBwYXJhbWV0ZXIgbmFtZS5cbiAgICogQHJldHVybnMgVGhlIGZpcnN0IHZhbHVlIG9mIHRoZSBnaXZlbiBwYXJhbWV0ZXIsXG4gICAqIG9yIGBudWxsYCBpZiB0aGUgcGFyYW1ldGVyIGlzIG5vdCBwcmVzZW50LlxuICAgKi9cbiAgZ2V0KHBhcmFtOiBzdHJpbmcpOiBzdHJpbmd8bnVsbCB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgY29uc3QgcmVzID0gdGhpcy5tYXAhLmdldChwYXJhbSk7XG4gICAgcmV0dXJuICEhcmVzID8gcmVzWzBdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYWxsIHZhbHVlcyBmb3IgYSAgcGFyYW1ldGVyLlxuICAgKiBAcGFyYW0gcGFyYW0gVGhlIHBhcmFtZXRlciBuYW1lLlxuICAgKiBAcmV0dXJucyBBbGwgdmFsdWVzIGluIGEgc3RyaW5nIGFycmF5LFxuICAgKiBvciBgbnVsbGAgaWYgdGhlIHBhcmFtZXRlciBub3QgcHJlc2VudC5cbiAgICovXG4gIGdldEFsbChwYXJhbTogc3RyaW5nKTogc3RyaW5nW118bnVsbCB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgcmV0dXJuIHRoaXMubWFwIS5nZXQocGFyYW0pIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGFsbCB0aGUgcGFyYW1ldGVycyBmb3IgdGhpcyBib2R5LlxuICAgKiBAcmV0dXJucyBUaGUgcGFyYW1ldGVyIG5hbWVzIGluIGEgc3RyaW5nIGFycmF5LlxuICAgKi9cbiAga2V5cygpOiBzdHJpbmdbXSB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5tYXAhLmtleXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIG5ldyB2YWx1ZSB0byBleGlzdGluZyB2YWx1ZXMgZm9yIGEgcGFyYW1ldGVyLlxuICAgKiBAcGFyYW0gcGFyYW0gVGhlIHBhcmFtZXRlciBuYW1lLlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIG5ldyB2YWx1ZSB0byBhZGQuXG4gICAqIEByZXR1cm4gQSBuZXcgYm9keSB3aXRoIHRoZSBhcHBlbmRlZCB2YWx1ZS5cbiAgICovXG4gIGFwcGVuZChwYXJhbTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogSHR0cFBhcmFtcyB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoe3BhcmFtLCB2YWx1ZSwgb3A6ICdhJ30pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSB2YWx1ZSBmb3IgYSBwYXJhbWV0ZXIuXG4gICAqIEBwYXJhbSBwYXJhbSBUaGUgcGFyYW1ldGVyIG5hbWUuXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgbmV3IHZhbHVlLlxuICAgKiBAcmV0dXJuIEEgbmV3IGJvZHkgd2l0aCB0aGUgbmV3IHZhbHVlLlxuICAgKi9cbiAgc2V0KHBhcmFtOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBIdHRwUGFyYW1zIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSh7cGFyYW0sIHZhbHVlLCBvcDogJ3MnfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGdpdmVuIHZhbHVlIG9yIGFsbCB2YWx1ZXMgZnJvbSBhIHBhcmFtZXRlci5cbiAgICogQHBhcmFtIHBhcmFtIFRoZSBwYXJhbWV0ZXIgbmFtZS5cbiAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byByZW1vdmUsIGlmIHByb3ZpZGVkLlxuICAgKiBAcmV0dXJuIEEgbmV3IGJvZHkgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUgcmVtb3ZlZCwgb3Igd2l0aCBhbGwgdmFsdWVzXG4gICAqIHJlbW92ZWQgaWYgbm8gdmFsdWUgaXMgc3BlY2lmaWVkLlxuICAgKi9cbiAgZGVsZXRlKHBhcmFtOiBzdHJpbmcsIHZhbHVlPzogc3RyaW5nKTogSHR0cFBhcmFtcyB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoe3BhcmFtLCB2YWx1ZSwgb3A6ICdkJ30pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgdGhlIGJvZHkgdG8gYW4gZW5jb2RlZCBzdHJpbmcsIHdoZXJlIGtleS12YWx1ZSBwYWlycyAoc2VwYXJhdGVkIGJ5IGA9YCkgYXJlXG4gICAqIHNlcGFyYXRlZCBieSBgJmBzLlxuICAgKi9cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICByZXR1cm4gdGhpcy5rZXlzKClcbiAgICAgICAgLm1hcChrZXkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVLZXkgPSB0aGlzLmVuY29kZXIuZW5jb2RlS2V5KGtleSk7XG4gICAgICAgICAgLy8gYGE6IFsnMSddYCBwcm9kdWNlcyBgJ2E9MSdgXG4gICAgICAgICAgLy8gYGI6IFtdYCBwcm9kdWNlcyBgJydgXG4gICAgICAgICAgLy8gYGM6IFsnMScsICcyJ11gIHByb2R1Y2VzIGAnYz0xJmM9MidgXG4gICAgICAgICAgcmV0dXJuIHRoaXMubWFwIS5nZXQoa2V5KSEubWFwKHZhbHVlID0+IGVLZXkgKyAnPScgKyB0aGlzLmVuY29kZXIuZW5jb2RlVmFsdWUodmFsdWUpKVxuICAgICAgICAgICAgICAuam9pbignJicpO1xuICAgICAgICB9KVxuICAgICAgICAvLyBmaWx0ZXIgb3V0IGVtcHR5IHZhbHVlcyBiZWNhdXNlIGBiOiBbXWAgcHJvZHVjZXMgYCcnYFxuICAgICAgICAvLyB3aGljaCByZXN1bHRzIGluIGBhPTEmJmM9MSZjPTJgIGluc3RlYWQgb2YgYGE9MSZjPTEmYz0yYCBpZiB3ZSBkb24ndFxuICAgICAgICAuZmlsdGVyKHBhcmFtID0+IHBhcmFtICE9PSAnJylcbiAgICAgICAgLmpvaW4oJyYnKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvbmUodXBkYXRlOiBVcGRhdGUpOiBIdHRwUGFyYW1zIHtcbiAgICBjb25zdCBjbG9uZSA9IG5ldyBIdHRwUGFyYW1zKHtlbmNvZGVyOiB0aGlzLmVuY29kZXJ9IGFzIEh0dHBQYXJhbXNPcHRpb25zKTtcbiAgICBjbG9uZS5jbG9uZUZyb20gPSB0aGlzLmNsb25lRnJvbSB8fCB0aGlzO1xuICAgIGNsb25lLnVwZGF0ZXMgPSAodGhpcy51cGRhdGVzIHx8IFtdKS5jb25jYXQoW3VwZGF0ZV0pO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5tYXAgPT09IG51bGwpIHtcbiAgICAgIHRoaXMubWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPigpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jbG9uZUZyb20gIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2xvbmVGcm9tLmluaXQoKTtcbiAgICAgIHRoaXMuY2xvbmVGcm9tLmtleXMoKS5mb3JFYWNoKGtleSA9PiB0aGlzLm1hcCEuc2V0KGtleSwgdGhpcy5jbG9uZUZyb20hLm1hcCEuZ2V0KGtleSkhKSk7XG4gICAgICB0aGlzLnVwZGF0ZXMhLmZvckVhY2godXBkYXRlID0+IHtcbiAgICAgICAgc3dpdGNoICh1cGRhdGUub3ApIHtcbiAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgIGNvbnN0IGJhc2UgPSAodXBkYXRlLm9wID09PSAnYScgPyB0aGlzLm1hcCEuZ2V0KHVwZGF0ZS5wYXJhbSkgOiB1bmRlZmluZWQpIHx8IFtdO1xuICAgICAgICAgICAgYmFzZS5wdXNoKHVwZGF0ZS52YWx1ZSEpO1xuICAgICAgICAgICAgdGhpcy5tYXAhLnNldCh1cGRhdGUucGFyYW0sIGJhc2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICBpZiAodXBkYXRlLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbGV0IGJhc2UgPSB0aGlzLm1hcCEuZ2V0KHVwZGF0ZS5wYXJhbSkgfHwgW107XG4gICAgICAgICAgICAgIGNvbnN0IGlkeCA9IGJhc2UuaW5kZXhPZih1cGRhdGUudmFsdWUpO1xuICAgICAgICAgICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGJhc2Uuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGJhc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwIS5zZXQodXBkYXRlLnBhcmFtLCBiYXNlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcCEuZGVsZXRlKHVwZGF0ZS5wYXJhbSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMubWFwIS5kZWxldGUodXBkYXRlLnBhcmFtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5jbG9uZUZyb20gPSB0aGlzLnVwZGF0ZXMgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19