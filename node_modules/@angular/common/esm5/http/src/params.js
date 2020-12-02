/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __read } from "tslib";
/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */
var HttpUrlEncodingCodec = /** @class */ (function () {
    function HttpUrlEncodingCodec() {
    }
    /**
     * Encodes a key name for a URL parameter or query-string.
     * @param key The key name.
     * @returns The encoded key name.
     */
    HttpUrlEncodingCodec.prototype.encodeKey = function (key) {
        return standardEncoding(key);
    };
    /**
     * Encodes the value of a URL parameter or query-string.
     * @param value The value.
     * @returns The encoded value.
     */
    HttpUrlEncodingCodec.prototype.encodeValue = function (value) {
        return standardEncoding(value);
    };
    /**
     * Decodes an encoded URL parameter or query-string key.
     * @param key The encoded key name.
     * @returns The decoded key name.
     */
    HttpUrlEncodingCodec.prototype.decodeKey = function (key) {
        return decodeURIComponent(key);
    };
    /**
     * Decodes an encoded URL parameter or query-string value.
     * @param value The encoded value.
     * @returns The decoded value.
     */
    HttpUrlEncodingCodec.prototype.decodeValue = function (value) {
        return decodeURIComponent(value);
    };
    return HttpUrlEncodingCodec;
}());
export { HttpUrlEncodingCodec };
function paramParser(rawParams, codec) {
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = __read(eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))], 2), key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
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
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */
var HttpParams = /** @class */ (function () {
    function HttpParams(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error("Cannot specify both fromString and fromObject.");
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(function (key) {
                var value = options.fromObject[key];
                _this.map.set(key, Array.isArray(value) ? value : [value]);
            });
        }
        else {
            this.map = null;
        }
    }
    /**
     * Reports whether the body includes one or more values for a given parameter.
     * @param param The parameter name.
     * @returns True if the parameter has one or more values,
     * false if it has no value or is not present.
     */
    HttpParams.prototype.has = function (param) {
        this.init();
        return this.map.has(param);
    };
    /**
     * Retrieves the first value for a parameter.
     * @param param The parameter name.
     * @returns The first value of the given parameter,
     * or `null` if the parameter is not present.
     */
    HttpParams.prototype.get = function (param) {
        this.init();
        var res = this.map.get(param);
        return !!res ? res[0] : null;
    };
    /**
     * Retrieves all values for a  parameter.
     * @param param The parameter name.
     * @returns All values in a string array,
     * or `null` if the parameter not present.
     */
    HttpParams.prototype.getAll = function (param) {
        this.init();
        return this.map.get(param) || null;
    };
    /**
     * Retrieves all the parameters for this body.
     * @returns The parameter names in a string array.
     */
    HttpParams.prototype.keys = function () {
        this.init();
        return Array.from(this.map.keys());
    };
    /**
     * Appends a new value to existing values for a parameter.
     * @param param The parameter name.
     * @param value The new value to add.
     * @return A new body with the appended value.
     */
    HttpParams.prototype.append = function (param, value) {
        return this.clone({ param: param, value: value, op: 'a' });
    };
    /**
     * Replaces the value for a parameter.
     * @param param The parameter name.
     * @param value The new value.
     * @return A new body with the new value.
     */
    HttpParams.prototype.set = function (param, value) {
        return this.clone({ param: param, value: value, op: 's' });
    };
    /**
     * Removes a given value or all values from a parameter.
     * @param param The parameter name.
     * @param value The value to remove, if provided.
     * @return A new body with the given value removed, or with all values
     * removed if no value is specified.
     */
    HttpParams.prototype.delete = function (param, value) {
        return this.clone({ param: param, value: value, op: 'd' });
    };
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    HttpParams.prototype.toString = function () {
        var _this = this;
        this.init();
        return this.keys()
            .map(function (key) {
            var eKey = _this.encoder.encodeKey(key);
            // `a: ['1']` produces `'a=1'`
            // `b: []` produces `''`
            // `c: ['1', '2']` produces `'c=1&c=2'`
            return _this.map.get(key).map(function (value) { return eKey + '=' + _this.encoder.encodeValue(value); })
                .join('&');
        })
            // filter out empty values because `b: []` produces `''`
            // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
            .filter(function (param) { return param !== ''; })
            .join('&');
    };
    HttpParams.prototype.clone = function (update) {
        var clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    };
    HttpParams.prototype.init = function () {
        var _this = this;
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(function (key) { return _this.map.set(key, _this.cloneFrom.map.get(key)); });
            this.updates.forEach(function (update) {
                switch (update.op) {
                    case 'a':
                    case 's':
                        var base = (update.op === 'a' ? _this.map.get(update.param) : undefined) || [];
                        base.push(update.value);
                        _this.map.set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            var base_1 = _this.map.get(update.param) || [];
                            var idx = base_1.indexOf(update.value);
                            if (idx !== -1) {
                                base_1.splice(idx, 1);
                            }
                            if (base_1.length > 0) {
                                _this.map.set(update.param, base_1);
                            }
                            else {
                                _this.map.delete(update.param);
                            }
                        }
                        else {
                            _this.map.delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = this.updates = null;
        }
    };
    return HttpParams;
}());
export { HttpParams };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2h0dHAvc3JjL3BhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBaUJIOzs7Ozs7Ozs7R0FTRztBQUNIO0lBQUE7SUFvQ0EsQ0FBQztJQW5DQzs7OztPQUlHO0lBQ0gsd0NBQVMsR0FBVCxVQUFVLEdBQVc7UUFDbkIsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDBDQUFXLEdBQVgsVUFBWSxLQUFhO1FBQ3ZCLE9BQU8sZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCx3Q0FBUyxHQUFULFVBQVUsR0FBVztRQUNuQixPQUFPLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsMENBQVcsR0FBWCxVQUFZLEtBQWE7UUFDdkIsT0FBTyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDOztBQUdELFNBQVMsV0FBVyxDQUFDLFNBQWlCLEVBQUUsS0FBeUI7SUFDL0QsSUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7SUFDeEMsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN4QixJQUFNLE1BQU0sR0FBYSxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFhO1lBQzNCLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBQTs7dUdBRWlGLEVBRmhGLFdBQUcsRUFBRSxX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S0FBSyxDQUFDLENBQUMsRUFBRTtnQ0FDZCxNQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs2QkFDckI7NEJBQ0QsSUFBSSxNQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQ0FDbkIsS0FBSSxDQUFDLEdBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFJLENBQUMsQ0FBQzs2QkFDbkM7aUNBQU07Z0NBQ0wsS0FBSSxDQUFDLEdBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDOzZCQUNoQzt5QkFDRjs2QkFBTTs0QkFDTCxLQUFJLENBQUMsR0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQy9CLE1BQU07eUJBQ1A7aUJBQ0o7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBbEtELElBa0tDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEEgY29kZWMgZm9yIGVuY29kaW5nIGFuZCBkZWNvZGluZyBwYXJhbWV0ZXJzIGluIFVSTHMuXG4gKlxuICogVXNlZCBieSBgSHR0cFBhcmFtc2AuXG4gKlxuICogQHB1YmxpY0FwaVxuICoqL1xuZXhwb3J0IGludGVyZmFjZSBIdHRwUGFyYW1ldGVyQ29kZWMge1xuICBlbmNvZGVLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmc7XG4gIGVuY29kZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgZGVjb2RlS2V5KGtleTogc3RyaW5nKTogc3RyaW5nO1xuICBkZWNvZGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGVuY29kaW5nIGFuZCBkZWNvZGluZyBvZiBVUkwgcGFyYW1ldGVyIGFuZCBxdWVyeS1zdHJpbmcgdmFsdWVzLlxuICpcbiAqIFNlcmlhbGl6ZXMgYW5kIHBhcnNlcyBVUkwgcGFyYW1ldGVyIGtleXMgYW5kIHZhbHVlcyB0byBlbmNvZGUgYW5kIGRlY29kZSB0aGVtLlxuICogSWYgeW91IHBhc3MgVVJMIHF1ZXJ5IHBhcmFtZXRlcnMgd2l0aG91dCBlbmNvZGluZyxcbiAqIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIGNhbiBiZSBtaXNpbnRlcnByZXRlZCBhdCB0aGUgcmVjZWl2aW5nIGVuZC5cbiAqXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgSHR0cFVybEVuY29kaW5nQ29kZWMgaW1wbGVtZW50cyBIdHRwUGFyYW1ldGVyQ29kZWMge1xuICAvKipcbiAgICogRW5jb2RlcyBhIGtleSBuYW1lIGZvciBhIFVSTCBwYXJhbWV0ZXIgb3IgcXVlcnktc3RyaW5nLlxuICAgKiBAcGFyYW0ga2V5IFRoZSBrZXkgbmFtZS5cbiAgICogQHJldHVybnMgVGhlIGVuY29kZWQga2V5IG5hbWUuXG4gICAqL1xuICBlbmNvZGVLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdGFuZGFyZEVuY29kaW5nKGtleSk7XG4gIH1cblxuICAvKipcbiAgICogRW5jb2RlcyB0aGUgdmFsdWUgb2YgYSBVUkwgcGFyYW1ldGVyIG9yIHF1ZXJ5LXN0cmluZy5cbiAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZS5cbiAgICogQHJldHVybnMgVGhlIGVuY29kZWQgdmFsdWUuXG4gICAqL1xuICBlbmNvZGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RhbmRhcmRFbmNvZGluZyh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRGVjb2RlcyBhbiBlbmNvZGVkIFVSTCBwYXJhbWV0ZXIgb3IgcXVlcnktc3RyaW5nIGtleS5cbiAgICogQHBhcmFtIGtleSBUaGUgZW5jb2RlZCBrZXkgbmFtZS5cbiAgICogQHJldHVybnMgVGhlIGRlY29kZWQga2V5IG5hbWUuXG4gICAqL1xuICBkZWNvZGVLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNvZGVzIGFuIGVuY29kZWQgVVJMIHBhcmFtZXRlciBvciBxdWVyeS1zdHJpbmcgdmFsdWUuXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgZW5jb2RlZCB2YWx1ZS5cbiAgICogQHJldHVybnMgVGhlIGRlY29kZWQgdmFsdWUuXG4gICAqL1xuICBkZWNvZGVWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBwYXJhbVBhcnNlcihyYXdQYXJhbXM6IHN0cmluZywgY29kZWM6IEh0dHBQYXJhbWV0ZXJDb2RlYyk6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gIGNvbnN0IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcbiAgaWYgKHJhd1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcGFyYW1zOiBzdHJpbmdbXSA9IHJhd1BhcmFtcy5zcGxpdCgnJicpO1xuICAgIHBhcmFtcy5mb3JFYWNoKChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBlcUlkeCA9IHBhcmFtLmluZGV4T2YoJz0nKTtcbiAgICAgIGNvbnN0IFtrZXksIHZhbF06IHN0cmluZ1tdID0gZXFJZHggPT0gLTEgP1xuICAgICAgICAgIFtjb2RlYy5kZWNvZGVLZXkocGFyYW0pLCAnJ10gOlxuICAgICAgICAgIFtjb2RlYy5kZWNvZGVLZXkocGFyYW0uc2xpY2UoMCwgZXFJZHgpKSwgY29kZWMuZGVjb2RlVmFsdWUocGFyYW0uc2xpY2UoZXFJZHggKyAxKSldO1xuICAgICAgY29uc3QgbGlzdCA9IG1hcC5nZXQoa2V5KSB8fCBbXTtcbiAgICAgIGxpc3QucHVzaCh2YWwpO1xuICAgICAgbWFwLnNldChrZXksIGxpc3QpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5mdW5jdGlvbiBzdGFuZGFyZEVuY29kaW5nKHY6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodilcbiAgICAgIC5yZXBsYWNlKC8lNDAvZ2ksICdAJylcbiAgICAgIC5yZXBsYWNlKC8lM0EvZ2ksICc6JylcbiAgICAgIC5yZXBsYWNlKC8lMjQvZ2ksICckJylcbiAgICAgIC5yZXBsYWNlKC8lMkMvZ2ksICcsJylcbiAgICAgIC5yZXBsYWNlKC8lM0IvZ2ksICc7JylcbiAgICAgIC5yZXBsYWNlKC8lMkIvZ2ksICcrJylcbiAgICAgIC5yZXBsYWNlKC8lM0QvZ2ksICc9JylcbiAgICAgIC5yZXBsYWNlKC8lM0YvZ2ksICc/JylcbiAgICAgIC5yZXBsYWNlKC8lMkYvZ2ksICcvJyk7XG59XG5cbmludGVyZmFjZSBVcGRhdGUge1xuICBwYXJhbTogc3RyaW5nO1xuICB2YWx1ZT86IHN0cmluZztcbiAgb3A6ICdhJ3wnZCd8J3MnO1xufVxuXG4vKipcbiAqIE9wdGlvbnMgdXNlZCB0byBjb25zdHJ1Y3QgYW4gYEh0dHBQYXJhbXNgIGluc3RhbmNlLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIdHRwUGFyYW1zT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIEhUVFAgcGFyYW1ldGVycyBpbiBVUkwtcXVlcnktc3RyaW5nIGZvcm1hdC5cbiAgICogTXV0dWFsbHkgZXhjbHVzaXZlIHdpdGggYGZyb21PYmplY3RgLlxuICAgKi9cbiAgZnJvbVN0cmluZz86IHN0cmluZztcblxuICAvKiogT2JqZWN0IG1hcCBvZiB0aGUgSFRUUCBwYXJhbWV0ZXJzLiBNdXR1YWxseSBleGNsdXNpdmUgd2l0aCBgZnJvbVN0cmluZ2AuICovXG4gIGZyb21PYmplY3Q/OiB7W3BhcmFtOiBzdHJpbmddOiBzdHJpbmd8UmVhZG9ubHlBcnJheTxzdHJpbmc+fTtcblxuICAvKiogRW5jb2RpbmcgY29kZWMgdXNlZCB0byBwYXJzZSBhbmQgc2VyaWFsaXplIHRoZSBwYXJhbWV0ZXJzLiAqL1xuICBlbmNvZGVyPzogSHR0cFBhcmFtZXRlckNvZGVjO1xufVxuXG4vKipcbiAqIEFuIEhUVFAgcmVxdWVzdC9yZXNwb25zZSBib2R5IHRoYXQgcmVwcmVzZW50cyBzZXJpYWxpemVkIHBhcmFtZXRlcnMsXG4gKiBwZXIgdGhlIE1JTUUgdHlwZSBgYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkYC5cbiAqXG4gKiBUaGlzIGNsYXNzIGlzIGltbXV0YWJsZTsgYWxsIG11dGF0aW9uIG9wZXJhdGlvbnMgcmV0dXJuIGEgbmV3IGluc3RhbmNlLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIEh0dHBQYXJhbXMge1xuICBwcml2YXRlIG1hcDogTWFwPHN0cmluZywgc3RyaW5nW10+fG51bGw7XG4gIHByaXZhdGUgZW5jb2RlcjogSHR0cFBhcmFtZXRlckNvZGVjO1xuICBwcml2YXRlIHVwZGF0ZXM6IFVwZGF0ZVtdfG51bGwgPSBudWxsO1xuICBwcml2YXRlIGNsb25lRnJvbTogSHR0cFBhcmFtc3xudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBIdHRwUGFyYW1zT3B0aW9ucyA9IHt9IGFzIEh0dHBQYXJhbXNPcHRpb25zKSB7XG4gICAgdGhpcy5lbmNvZGVyID0gb3B0aW9ucy5lbmNvZGVyIHx8IG5ldyBIdHRwVXJsRW5jb2RpbmdDb2RlYygpO1xuICAgIGlmICghIW9wdGlvbnMuZnJvbVN0cmluZykge1xuICAgICAgaWYgKCEhb3B0aW9ucy5mcm9tT2JqZWN0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNwZWNpZnkgYm90aCBmcm9tU3RyaW5nIGFuZCBmcm9tT2JqZWN0LmApO1xuICAgICAgfVxuICAgICAgdGhpcy5tYXAgPSBwYXJhbVBhcnNlcihvcHRpb25zLmZyb21TdHJpbmcsIHRoaXMuZW5jb2Rlcik7XG4gICAgfSBlbHNlIGlmICghIW9wdGlvbnMuZnJvbU9iamVjdCkge1xuICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG4gICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmZyb21PYmplY3QpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAob3B0aW9ucy5mcm9tT2JqZWN0IGFzIGFueSlba2V5XTtcbiAgICAgICAgdGhpcy5tYXAhLnNldChrZXksIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlcG9ydHMgd2hldGhlciB0aGUgYm9keSBpbmNsdWRlcyBvbmUgb3IgbW9yZSB2YWx1ZXMgZm9yIGEgZ2l2ZW4gcGFyYW1ldGVyLlxuICAgKiBAcGFyYW0gcGFyYW0gVGhlIHBhcmFtZXRlciBuYW1lLlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBwYXJhbWV0ZXIgaGFzIG9uZSBvciBtb3JlIHZhbHVlcyxcbiAgICogZmFsc2UgaWYgaXQgaGFzIG5vIHZhbHVlIG9yIGlzIG5vdCBwcmVzZW50LlxuICAgKi9cbiAgaGFzKHBhcmFtOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICByZXR1cm4gdGhpcy5tYXAhLmhhcyhwYXJhbSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBmaXJzdCB2YWx1ZSBmb3IgYSBwYXJhbWV0ZXIuXG4gICAqIEBwYXJhbSBwYXJhbSBUaGUgcGFyYW1ldGVyIG5hbWUuXG4gICAqIEByZXR1cm5zIFRoZSBmaXJzdCB2YWx1ZSBvZiB0aGUgZ2l2ZW4gcGFyYW1ldGVyLFxuICAgKiBvciBgbnVsbGAgaWYgdGhlIHBhcmFtZXRlciBpcyBub3QgcHJlc2VudC5cbiAgICovXG4gIGdldChwYXJhbTogc3RyaW5nKTogc3RyaW5nfG51bGwge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIGNvbnN0IHJlcyA9IHRoaXMubWFwIS5nZXQocGFyYW0pO1xuICAgIHJldHVybiAhIXJlcyA/IHJlc1swXSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGFsbCB2YWx1ZXMgZm9yIGEgIHBhcmFtZXRlci5cbiAgICogQHBhcmFtIHBhcmFtIFRoZSBwYXJhbWV0ZXIgbmFtZS5cbiAgICogQHJldHVybnMgQWxsIHZhbHVlcyBpbiBhIHN0cmluZyBhcnJheSxcbiAgICogb3IgYG51bGxgIGlmIHRoZSBwYXJhbWV0ZXIgbm90IHByZXNlbnQuXG4gICAqL1xuICBnZXRBbGwocGFyYW06IHN0cmluZyk6IHN0cmluZ1tdfG51bGwge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHJldHVybiB0aGlzLm1hcCEuZ2V0KHBhcmFtKSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhbGwgdGhlIHBhcmFtZXRlcnMgZm9yIHRoaXMgYm9keS5cbiAgICogQHJldHVybnMgVGhlIHBhcmFtZXRlciBuYW1lcyBpbiBhIHN0cmluZyBhcnJheS5cbiAgICovXG4gIGtleXMoKTogc3RyaW5nW10ge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMubWFwIS5rZXlzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBuZXcgdmFsdWUgdG8gZXhpc3RpbmcgdmFsdWVzIGZvciBhIHBhcmFtZXRlci5cbiAgICogQHBhcmFtIHBhcmFtIFRoZSBwYXJhbWV0ZXIgbmFtZS5cbiAgICogQHBhcmFtIHZhbHVlIFRoZSBuZXcgdmFsdWUgdG8gYWRkLlxuICAgKiBAcmV0dXJuIEEgbmV3IGJvZHkgd2l0aCB0aGUgYXBwZW5kZWQgdmFsdWUuXG4gICAqL1xuICBhcHBlbmQocGFyYW06IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IEh0dHBQYXJhbXMge1xuICAgIHJldHVybiB0aGlzLmNsb25lKHtwYXJhbSwgdmFsdWUsIG9wOiAnYSd9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgdmFsdWUgZm9yIGEgcGFyYW1ldGVyLlxuICAgKiBAcGFyYW0gcGFyYW0gVGhlIHBhcmFtZXRlciBuYW1lLlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIG5ldyB2YWx1ZS5cbiAgICogQHJldHVybiBBIG5ldyBib2R5IHdpdGggdGhlIG5ldyB2YWx1ZS5cbiAgICovXG4gIHNldChwYXJhbTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogSHR0cFBhcmFtcyB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoe3BhcmFtLCB2YWx1ZSwgb3A6ICdzJ30pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBnaXZlbiB2YWx1ZSBvciBhbGwgdmFsdWVzIGZyb20gYSBwYXJhbWV0ZXIuXG4gICAqIEBwYXJhbSBwYXJhbSBUaGUgcGFyYW1ldGVyIG5hbWUuXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmVtb3ZlLCBpZiBwcm92aWRlZC5cbiAgICogQHJldHVybiBBIG5ldyBib2R5IHdpdGggdGhlIGdpdmVuIHZhbHVlIHJlbW92ZWQsIG9yIHdpdGggYWxsIHZhbHVlc1xuICAgKiByZW1vdmVkIGlmIG5vIHZhbHVlIGlzIHNwZWNpZmllZC5cbiAgICovXG4gIGRlbGV0ZShwYXJhbTogc3RyaW5nLCB2YWx1ZT86IHN0cmluZyk6IEh0dHBQYXJhbXMge1xuICAgIHJldHVybiB0aGlzLmNsb25lKHtwYXJhbSwgdmFsdWUsIG9wOiAnZCd9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIHRoZSBib2R5IHRvIGFuIGVuY29kZWQgc3RyaW5nLCB3aGVyZSBrZXktdmFsdWUgcGFpcnMgKHNlcGFyYXRlZCBieSBgPWApIGFyZVxuICAgKiBzZXBhcmF0ZWQgYnkgYCZgcy5cbiAgICovXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgcmV0dXJuIHRoaXMua2V5cygpXG4gICAgICAgIC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICBjb25zdCBlS2V5ID0gdGhpcy5lbmNvZGVyLmVuY29kZUtleShrZXkpO1xuICAgICAgICAgIC8vIGBhOiBbJzEnXWAgcHJvZHVjZXMgYCdhPTEnYFxuICAgICAgICAgIC8vIGBiOiBbXWAgcHJvZHVjZXMgYCcnYFxuICAgICAgICAgIC8vIGBjOiBbJzEnLCAnMiddYCBwcm9kdWNlcyBgJ2M9MSZjPTInYFxuICAgICAgICAgIHJldHVybiB0aGlzLm1hcCEuZ2V0KGtleSkhLm1hcCh2YWx1ZSA9PiBlS2V5ICsgJz0nICsgdGhpcy5lbmNvZGVyLmVuY29kZVZhbHVlKHZhbHVlKSlcbiAgICAgICAgICAgICAgLmpvaW4oJyYnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gZmlsdGVyIG91dCBlbXB0eSB2YWx1ZXMgYmVjYXVzZSBgYjogW11gIHByb2R1Y2VzIGAnJ2BcbiAgICAgICAgLy8gd2hpY2ggcmVzdWx0cyBpbiBgYT0xJiZjPTEmYz0yYCBpbnN0ZWFkIG9mIGBhPTEmYz0xJmM9MmAgaWYgd2UgZG9uJ3RcbiAgICAgICAgLmZpbHRlcihwYXJhbSA9PiBwYXJhbSAhPT0gJycpXG4gICAgICAgIC5qb2luKCcmJyk7XG4gIH1cblxuICBwcml2YXRlIGNsb25lKHVwZGF0ZTogVXBkYXRlKTogSHR0cFBhcmFtcyB7XG4gICAgY29uc3QgY2xvbmUgPSBuZXcgSHR0cFBhcmFtcyh7ZW5jb2RlcjogdGhpcy5lbmNvZGVyfSBhcyBIdHRwUGFyYW1zT3B0aW9ucyk7XG4gICAgY2xvbmUuY2xvbmVGcm9tID0gdGhpcy5jbG9uZUZyb20gfHwgdGhpcztcbiAgICBjbG9uZS51cGRhdGVzID0gKHRoaXMudXBkYXRlcyB8fCBbXSkuY29uY2F0KFt1cGRhdGVdKTtcbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgaWYgKHRoaXMubWFwID09PSBudWxsKSB7XG4gICAgICB0aGlzLm1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2xvbmVGcm9tICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNsb25lRnJvbS5pbml0KCk7XG4gICAgICB0aGlzLmNsb25lRnJvbS5rZXlzKCkuZm9yRWFjaChrZXkgPT4gdGhpcy5tYXAhLnNldChrZXksIHRoaXMuY2xvbmVGcm9tIS5tYXAhLmdldChrZXkpISkpO1xuICAgICAgdGhpcy51cGRhdGVzIS5mb3JFYWNoKHVwZGF0ZSA9PiB7XG4gICAgICAgIHN3aXRjaCAodXBkYXRlLm9wKSB7XG4gICAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICBjb25zdCBiYXNlID0gKHVwZGF0ZS5vcCA9PT0gJ2EnID8gdGhpcy5tYXAhLmdldCh1cGRhdGUucGFyYW0pIDogdW5kZWZpbmVkKSB8fCBbXTtcbiAgICAgICAgICAgIGJhc2UucHVzaCh1cGRhdGUudmFsdWUhKTtcbiAgICAgICAgICAgIHRoaXMubWFwIS5zZXQodXBkYXRlLnBhcmFtLCBiYXNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgaWYgKHVwZGF0ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGxldCBiYXNlID0gdGhpcy5tYXAhLmdldCh1cGRhdGUucGFyYW0pIHx8IFtdO1xuICAgICAgICAgICAgICBjb25zdCBpZHggPSBiYXNlLmluZGV4T2YodXBkYXRlLnZhbHVlKTtcbiAgICAgICAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBiYXNlLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChiYXNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcCEuc2V0KHVwZGF0ZS5wYXJhbSwgYmFzZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXAhLmRlbGV0ZSh1cGRhdGUucGFyYW0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLm1hcCEuZGVsZXRlKHVwZGF0ZS5wYXJhbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2xvbmVGcm9tID0gdGhpcy51cGRhdGVzID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==