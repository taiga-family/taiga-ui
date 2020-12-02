/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A codec for encoding and decoding URL parts.
 *
 * @publicApi
 **/
var UrlCodec = /** @class */ (function () {
    function UrlCodec() {
    }
    return UrlCodec;
}());
export { UrlCodec };
/**
 * A `UrlCodec` that uses logic from AngularJS to serialize and parse URLs
 * and URL parameters.
 *
 * @publicApi
 */
var AngularJSUrlCodec = /** @class */ (function () {
    function AngularJSUrlCodec() {
    }
    // https://github.com/angular/angular.js/blob/864c7f0/src/ng/location.js#L15
    AngularJSUrlCodec.prototype.encodePath = function (path) {
        var segments = path.split('/');
        var i = segments.length;
        while (i--) {
            // decode forward slashes to prevent them from being double encoded
            segments[i] = encodeUriSegment(segments[i].replace(/%2F/g, '/'));
        }
        path = segments.join('/');
        return _stripIndexHtml((path && path[0] !== '/' && '/' || '') + path);
    };
    // https://github.com/angular/angular.js/blob/864c7f0/src/ng/location.js#L42
    AngularJSUrlCodec.prototype.encodeSearch = function (search) {
        if (typeof search === 'string') {
            search = parseKeyValue(search);
        }
        search = toKeyValue(search);
        return search ? '?' + search : '';
    };
    // https://github.com/angular/angular.js/blob/864c7f0/src/ng/location.js#L44
    AngularJSUrlCodec.prototype.encodeHash = function (hash) {
        hash = encodeUriSegment(hash);
        return hash ? '#' + hash : '';
    };
    // https://github.com/angular/angular.js/blob/864c7f0/src/ng/location.js#L27
    AngularJSUrlCodec.prototype.decodePath = function (path, html5Mode) {
        if (html5Mode === void 0) { html5Mode = true; }
        var segments = path.split('/');
        var i = segments.length;
        while (i--) {
            segments[i] = decodeURIComponent(segments[i]);
            if (html5Mode) {
                // encode forward slashes to prevent them from being mistaken for path separators
                segments[i] = segments[i].replace(/\//g, '%2F');
            }
        }
        return segments.join('/');
    };
    // https://github.com/angular/angular.js/blob/864c7f0/src/ng/location.js#L72
    AngularJSUrlCodec.prototype.decodeSearch = function (search) {
        return parseKeyValue(search);
    };
    // https://github.com/angular/angular.js/blob/864c7f0/src/ng/location.js#L73
    AngularJSUrlCodec.prototype.decodeHash = function (hash) {
        hash = decodeURIComponent(hash);
        return hash[0] === '#' ? hash.substring(1) : hash;
    };
    AngularJSUrlCodec.prototype.normalize = function (pathOrHref, search, hash, baseUrl) {
        if (arguments.length === 1) {
            var parsed = this.parse(pathOrHref, baseUrl);
            if (typeof parsed === 'string') {
                return parsed;
            }
            var serverUrl = parsed.protocol + "://" + parsed.hostname + (parsed.port ? ':' + parsed.port : '');
            return this.normalize(this.decodePath(parsed.pathname), this.decodeSearch(parsed.search), this.decodeHash(parsed.hash), serverUrl);
        }
        else {
            var encPath = this.encodePath(pathOrHref);
            var encSearch = search && this.encodeSearch(search) || '';
            var encHash = hash && this.encodeHash(hash) || '';
            var joinedPath = (baseUrl || '') + encPath;
            if (!joinedPath.length || joinedPath[0] !== '/') {
                joinedPath = '/' + joinedPath;
            }
            return joinedPath + encSearch + encHash;
        }
    };
    AngularJSUrlCodec.prototype.areEqual = function (valA, valB) {
        return this.normalize(valA) === this.normalize(valB);
    };
    // https://github.com/angular/angular.js/blob/864c7f0/src/ng/urlUtils.js#L60
    AngularJSUrlCodec.prototype.parse = function (url, base) {
        try {
            // Safari 12 throws an error when the URL constructor is called with an undefined base.
            var parsed = !base ? new URL(url) : new URL(url, base);
            return {
                href: parsed.href,
                protocol: parsed.protocol ? parsed.protocol.replace(/:$/, '') : '',
                host: parsed.host,
                search: parsed.search ? parsed.search.replace(/^\?/, '') : '',
                hash: parsed.hash ? parsed.hash.replace(/^#/, '') : '',
                hostname: parsed.hostname,
                port: parsed.port,
                pathname: (parsed.pathname.charAt(0) === '/') ? parsed.pathname : '/' + parsed.pathname
            };
        }
        catch (e) {
            throw new Error("Invalid URL (" + url + ") with base (" + base + ")");
        }
    };
    return AngularJSUrlCodec;
}());
export { AngularJSUrlCodec };
function _stripIndexHtml(url) {
    return url.replace(/\/index.html$/, '');
}
/**
 * Tries to decode the URI component without throwing an exception.
 *
 * @param str value potential URI component to check.
 * @returns the decoded URI if it can be decoded or else `undefined`.
 */
function tryDecodeURIComponent(value) {
    try {
        return decodeURIComponent(value);
    }
    catch (e) {
        // Ignore any invalid uri component.
        return undefined;
    }
}
/**
 * Parses an escaped url query string into key-value pairs. Logic taken from
 * https://github.com/angular/angular.js/blob/864c7f0/src/Angular.js#L1382
 */
function parseKeyValue(keyValue) {
    var obj = {};
    (keyValue || '').split('&').forEach(function (keyValue) {
        var splitPoint, key, val;
        if (keyValue) {
            key = keyValue = keyValue.replace(/\+/g, '%20');
            splitPoint = keyValue.indexOf('=');
            if (splitPoint !== -1) {
                key = keyValue.substring(0, splitPoint);
                val = keyValue.substring(splitPoint + 1);
            }
            key = tryDecodeURIComponent(key);
            if (typeof key !== 'undefined') {
                val = typeof val !== 'undefined' ? tryDecodeURIComponent(val) : true;
                if (!obj.hasOwnProperty(key)) {
                    obj[key] = val;
                }
                else if (Array.isArray(obj[key])) {
                    obj[key].push(val);
                }
                else {
                    obj[key] = [obj[key], val];
                }
            }
        }
    });
    return obj;
}
/**
 * Serializes into key-value pairs. Logic taken from
 * https://github.com/angular/angular.js/blob/864c7f0/src/Angular.js#L1409
 */
function toKeyValue(obj) {
    var parts = [];
    var _loop_1 = function (key) {
        var value = obj[key];
        if (Array.isArray(value)) {
            value.forEach(function (arrayValue) {
                parts.push(encodeUriQuery(key, true) +
                    (arrayValue === true ? '' : '=' + encodeUriQuery(arrayValue, true)));
            });
        }
        else {
            parts.push(encodeUriQuery(key, true) +
                (value === true ? '' : '=' + encodeUriQuery(value, true)));
        }
    };
    for (var key in obj) {
        _loop_1(key);
    }
    return parts.length ? parts.join('&') : '';
}
/**
 * We need our custom method because encodeURIComponent is too aggressive and doesn't follow
 * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set (pchar) allowed in path
 * segments:
 *    segment       = *pchar
 *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
 *    pct-encoded   = "%" HEXDIG HEXDIG
 *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
 *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
 *                     / "*" / "+" / "," / ";" / "="
 *
 * Logic from https://github.com/angular/angular.js/blob/864c7f0/src/Angular.js#L1437
 */
function encodeUriSegment(val) {
    return encodeUriQuery(val, true)
        .replace(/%26/gi, '&')
        .replace(/%3D/gi, '=')
        .replace(/%2B/gi, '+');
}
/**
 * This method is intended for encoding *key* or *value* parts of query component. We need a custom
 * method because encodeURIComponent is too aggressive and encodes stuff that doesn't have to be
 * encoded per http://tools.ietf.org/html/rfc3986:
 *    query         = *( pchar / "/" / "?" )
 *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
 *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
 *    pct-encoded   = "%" HEXDIG HEXDIG
 *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
 *                     / "*" / "+" / "," / ";" / "="
 *
 * Logic from https://github.com/angular/angular.js/blob/864c7f0/src/Angular.js#L1456
 */
function encodeUriQuery(val, pctEncodeSpaces) {
    if (pctEncodeSpaces === void 0) { pctEncodeSpaces = false; }
    return encodeURIComponent(val)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3VwZ3JhZGUvc3JjL3BhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSDs7OztJQUlJO0FBQ0o7SUFBQTtJQXFGQSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFyRkQsSUFxRkM7O0FBRUQ7Ozs7O0dBS0c7QUFDSDtJQUFBO0lBa0hBLENBQUM7SUFqSEMsNEVBQTRFO0lBQzVFLHNDQUFVLEdBQVYsVUFBVyxJQUFZO1FBQ3JCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUV4QixPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ1YsbUVBQW1FO1lBQ25FLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsT0FBTyxlQUFlLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELDRFQUE0RTtJQUM1RSx3Q0FBWSxHQUFaLFVBQWEsTUFBcUM7UUFDaEQsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsTUFBTSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoQztRQUVELE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFD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QUNILFNBQVMsY0FBYyxDQUFDLEdBQVcsRUFBRSxlQUFnQztJQUFoQyxnQ0FBQSxFQUFBLHVCQUFnQztJQUNuRSxPQUFPLGtCQUFrQixDQUFDLEdBQUcsQ0FBQztTQUN6QixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztTQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztTQUNyQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztTQUNwQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztTQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztTQUNyQixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDeEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBBIGNvZGVjIGZvciBlbmNvZGluZyBhbmQgZGVjb2RpbmcgVVJMIHBhcnRzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVcmxDb2RlYyB7XG4gIC8qKlxuICAgKiBFbmNvZGVzIHRoZSBwYXRoIGZyb20gdGhlIHByb3ZpZGVkIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gcGF0aCBUaGUgcGF0aCBzdHJpbmdcbiAgICovXG4gIGFic3RyYWN0IGVuY29kZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWNvZGVzIHRoZSBwYXRoIGZyb20gdGhlIHByb3ZpZGVkIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gcGF0aCBUaGUgcGF0aCBzdHJpbmdcbiAgICovXG4gIGFic3RyYWN0IGRlY29kZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFbmNvZGVzIHRoZSBzZWFyY2ggc3RyaW5nIGZyb20gdGhlIHByb3ZpZGVkIHN0cmluZyBvciBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggc3RyaW5nIG9yIG9iamVjdFxuICAgKi9cbiAgYWJzdHJhY3QgZW5jb2RlU2VhcmNoKHNlYXJjaDogc3RyaW5nfHtbazogc3RyaW5nXTogdW5rbm93bn0pOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlY29kZXMgdGhlIHNlYXJjaCBvYmplY3RzIGZyb20gdGhlIHByb3ZpZGVkIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gcGF0aCBUaGUgcGF0aCBzdHJpbmdcbiAgICovXG4gIGFic3RyYWN0IGRlY29kZVNlYXJjaChzZWFyY2g6IHN0cmluZyk6IHtbazogc3RyaW5nXTogdW5rbm93bn07XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgdGhlIGhhc2ggZnJvbSB0aGUgcHJvdmlkZWQgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIFRoZSBoYXNoIHN0cmluZ1xuICAgKi9cbiAgYWJzdHJhY3QgZW5jb2RlSGFzaChoYXNoOiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlY29kZXMgdGhlIGhhc2ggZnJvbSB0aGUgcHJvdmlkZWQgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIFRoZSBoYXNoIHN0cmluZ1xuICAgKi9cbiAgYWJzdHJhY3QgZGVjb2RlSGFzaChoYXNoOiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZXMgdGhlIFVSTCBmcm9tIHRoZSBwcm92aWRlZCBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHBhdGggVGhlIFVSTCBzdHJpbmdcbiAgICovXG4gIGFic3RyYWN0IG5vcm1hbGl6ZShocmVmOiBzdHJpbmcpOiBzdHJpbmc7XG5cblxuICAvKipcbiAgICogTm9ybWFsaXplcyB0aGUgVVJMIGZyb20gdGhlIHByb3ZpZGVkIHN0cmluZywgc2VhcmNoLCBoYXNoLCBhbmQgYmFzZSBVUkwgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAcGFyYW0gcGF0aCBUaGUgVVJMIHBhdGhcbiAgICogQHBhcmFtIHNlYXJjaCBUaGUgc2VhcmNoIG9iamVjdFxuICAgKiBAcGFyYW0gaGFzaCBUaGUgaGFzIHN0cmluZ1xuICAgKiBAcGFyYW0gYmFzZVVybCBUaGUgYmFzZSBVUkwgZm9yIHRoZSBVUkxcbiAgICovXG4gIGFic3RyYWN0IG5vcm1hbGl6ZShwYXRoOiBzdHJpbmcsIHNlYXJjaDoge1trOiBzdHJpbmddOiB1bmtub3dufSwgaGFzaDogc3RyaW5nLCBiYXNlVXJsPzogc3RyaW5nKTpcbiAgICAgIHN0cmluZztcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHR3byBzdHJpbmdzIGFyZSBlcXVhbFxuICAgKiBAcGFyYW0gdmFsQSBGaXJzdCBzdHJpbmcgZm9yIGNvbXBhcmlzb25cbiAgICogQHBhcmFtIHZhbEIgU2Vjb25kIHN0cmluZyBmb3IgY29tcGFyaXNvblxuICAgKi9cbiAgYWJzdHJhY3QgYXJlRXF1YWwodmFsQTogc3RyaW5nLCB2YWxCOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIFVSTCBzdHJpbmcgYmFzZWQgb24gdGhlIGJhc2UgVVJMXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgVGhlIGZ1bGwgVVJMIHN0cmluZ1xuICAgKiBAcGFyYW0gYmFzZSBUaGUgYmFzZSBmb3IgdGhlIFVSTFxuICAgKi9cbiAgYWJzdHJhY3QgcGFyc2UodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpOiB7XG4gICAgaHJlZjogc3RyaW5nLFxuICAgIHByb3RvY29sOiBzdHJpbmcsXG4gICAgaG9zdDogc3RyaW5nLFxuICAgIHNlYXJjaDogc3RyaW5nLFxuICAgIGhhc2g6IHN0cmluZyxcbiAgICBob3N0bmFtZTogc3RyaW5nLFxuICAgIHBvcnQ6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nXG4gIH07XG59XG5cbi8qKlxuICogQSBgVXJsQ29kZWNgIHRoYXQgdXNlcyBsb2dpYyBmcm9tIEFuZ3VsYXJKUyB0byBzZXJpYWxpemUgYW5kIHBhcnNlIFVSTHNcbiAqIGFuZCBVUkwgcGFyYW1ldGVycy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBBbmd1bGFySlNVcmxDb2RlYyBpbXBsZW1lbnRzIFVybENvZGVjIHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iLzg2NGM3ZjAvc3JjL25nL2xvY2F0aW9uLmpzI0wxNVxuICBlbmNvZGVQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJyk7XG4gICAgbGV0IGkgPSBzZWdtZW50cy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAvLyBkZWNvZGUgZm9yd2FyZCBzbGFzaGVzIHRvIHByZXZlbnQgdGhlbSBmcm9tIGJlaW5nIGRvdWJsZSBlbmNvZGVkXG4gICAgICBzZWdtZW50c1tpXSA9IGVuY29kZVVyaVNlZ21lbnQoc2VnbWVudHNbaV0ucmVwbGFjZSgvJTJGL2csICcvJykpO1xuICAgIH1cblxuICAgIHBhdGggPSBzZWdtZW50cy5qb2luKCcvJyk7XG4gICAgcmV0dXJuIF9zdHJpcEluZGV4SHRtbCgocGF0aCAmJiBwYXRoWzBdICE9PSAnLycgJiYgJy8nIHx8ICcnKSArIHBhdGgpO1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iLzg2NGM3ZjAvc3JjL25nL2xvY2F0aW9uLmpzI0w0MlxuICBlbmNvZGVTZWFyY2goc2VhcmNoOiBzdHJpbmd8e1trOiBzdHJpbmddOiB1bmtub3dufSk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBzZWFyY2ggPT09ICdzdHJpbmcnKSB7XG4gICAgICBzZWFyY2ggPSBwYXJzZUtleVZhbHVlKHNlYXJjaCk7XG4gICAgfVxuXG4gICAgc2VhcmNoID0gdG9LZXlWYWx1ZShzZWFyY2gpO1xuICAgIHJldHVybiBzZWFyY2ggPyAnPycgKyBzZWFyY2ggOiAnJztcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi84NjRjN2YwL3NyYy9uZy9sb2NhdGlvbi5qcyNMNDRcbiAgZW5jb2RlSGFzaChoYXNoOiBzdHJpbmcpIHtcbiAgICBoYXNoID0gZW5jb2RlVXJpU2VnbWVudChoYXNoKTtcbiAgICByZXR1cm4gaGFzaCA/ICcjJyArIGhhc2ggOiAnJztcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi84NjRjN2YwL3NyYy9uZy9sb2NhdGlvbi5qcyNMMjdcbiAgZGVjb2RlUGF0aChwYXRoOiBzdHJpbmcsIGh0bWw1TW9kZSA9IHRydWUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpO1xuICAgIGxldCBpID0gc2VnbWVudHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgc2VnbWVudHNbaV0gPSBkZWNvZGVVUklDb21wb25lbnQoc2VnbWVudHNbaV0pO1xuICAgICAgaWYgKGh0bWw1TW9kZSkge1xuICAgICAgICAvLyBlbmNvZGUgZm9yd2FyZCBzbGFzaGVzIHRvIHByZXZlbnQgdGhlbSBmcm9tIGJlaW5nIG1pc3Rha2VuIGZvciBwYXRoIHNlcGFyYXRvcnNcbiAgICAgICAgc2VnbWVudHNbaV0gPSBzZWdtZW50c1tpXS5yZXBsYWNlKC9cXC8vZywgJyUyRicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWdtZW50cy5qb2luKCcvJyk7XG4gIH1cblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvODY0YzdmMC9zcmMvbmcvbG9jYXRpb24uanMjTDcyXG4gIGRlY29kZVNlYXJjaChzZWFyY2g6IHN0cmluZykge1xuICAgIHJldHVybiBwYXJzZUtleVZhbHVlKHNlYXJjaCk7XG4gIH1cblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvODY0YzdmMC9zcmMvbmcvbG9jYXRpb24uanMjTDczXG4gIGRlY29kZUhhc2goaGFzaDogc3RyaW5nKSB7XG4gICAgaGFzaCA9IGRlY29kZVVSSUNvbXBvbmVudChoYXNoKTtcbiAgICByZXR1cm4gaGFzaFswXSA9PT0gJyMnID8gaGFzaC5zdWJzdHJpbmcoMSkgOiBoYXNoO1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iLzg2NGM3ZjAvc3JjL25nL2xvY2F0aW9uLmpzI0wxNDlcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iLzg2NGM3ZjAvc3JjL25nL2xvY2F0aW9uLmpzI0w0MlxuICBub3JtYWxpemUoaHJlZjogc3RyaW5nKTogc3RyaW5nO1xuICBub3JtYWxpemUocGF0aDogc3RyaW5nLCBzZWFyY2g6IHtbazogc3RyaW5nXTogdW5rbm93bn0sIGhhc2g6IHN0cmluZywgYmFzZVVybD86IHN0cmluZyk6IHN0cmluZztcbiAgbm9ybWFsaXplKHBhdGhPckhyZWY6IHN0cmluZywgc2VhcmNoPzoge1trOiBzdHJpbmddOiB1bmtub3dufSwgaGFzaD86IHN0cmluZywgYmFzZVVybD86IHN0cmluZyk6XG4gICAgICBzdHJpbmcge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlKHBhdGhPckhyZWYsIGJhc2VVcmwpO1xuXG4gICAgICBpZiAodHlwZW9mIHBhcnNlZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2VydmVyVXJsID1cbiAgICAgICAgICBgJHtwYXJzZWQucHJvdG9jb2x9Oi8vJHtwYXJzZWQuaG9zdG5hbWV9JHtwYXJzZWQucG9ydCA/ICc6JyArIHBhcnNlZC5wb3J0IDogJyd9YDtcblxuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKFxuICAgICAgICAgIHRoaXMuZGVjb2RlUGF0aChwYXJzZWQucGF0aG5hbWUpLCB0aGlzLmRlY29kZVNlYXJjaChwYXJzZWQuc2VhcmNoKSxcbiAgICAgICAgICB0aGlzLmRlY29kZUhhc2gocGFyc2VkLmhhc2gpLCBzZXJ2ZXJVcmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbmNQYXRoID0gdGhpcy5lbmNvZGVQYXRoKHBhdGhPckhyZWYpO1xuICAgICAgY29uc3QgZW5jU2VhcmNoID0gc2VhcmNoICYmIHRoaXMuZW5jb2RlU2VhcmNoKHNlYXJjaCkgfHwgJyc7XG4gICAgICBjb25zdCBlbmNIYXNoID0gaGFzaCAmJiB0aGlzLmVuY29kZUhhc2goaGFzaCkgfHwgJyc7XG5cbiAgICAgIGxldCBqb2luZWRQYXRoID0gKGJhc2VVcmwgfHwgJycpICsgZW5jUGF0aDtcblxuICAgICAgaWYgKCFqb2luZWRQYXRoLmxlbmd0aCB8fCBqb2luZWRQYXRoWzBdICE9PSAnLycpIHtcbiAgICAgICAgam9pbmVkUGF0aCA9ICcvJyArIGpvaW5lZFBhdGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gam9pbmVkUGF0aCArIGVuY1NlYXJjaCArIGVuY0hhc2g7XG4gICAgfVxuICB9XG5cbiAgYXJlRXF1YWwodmFsQTogc3RyaW5nLCB2YWxCOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUodmFsQSkgPT09IHRoaXMubm9ybWFsaXplKHZhbEIpO1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iLzg2NGM3ZjAvc3JjL25nL3VybFV0aWxzLmpzI0w2MFxuICBwYXJzZSh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAvLyBTYWZhcmkgMTIgdGhyb3dzIGFuIGVycm9yIHdoZW4gdGhlIFVSTCBjb25zdHJ1Y3RvciBpcyBjYWxsZWQgd2l0aCBhbiB1bmRlZmluZWQgYmFzZS5cbiAgICAgIGNvbnN0IHBhcnNlZCA9ICFiYXNlID8gbmV3IFVSTCh1cmwpIDogbmV3IFVSTCh1cmwsIGJhc2UpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogcGFyc2VkLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiBwYXJzZWQucHJvdG9jb2wgPyBwYXJzZWQucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogcGFyc2VkLmhvc3QsXG4gICAgICAgIHNlYXJjaDogcGFyc2VkLnNlYXJjaCA/IHBhcnNlZC5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiBwYXJzZWQuaGFzaCA/IHBhcnNlZC5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiBwYXJzZWQuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHBhcnNlZC5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHBhcnNlZC5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgPyBwYXJzZWQucGF0aG5hbWUgOiAnLycgKyBwYXJzZWQucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFVSTCAoJHt1cmx9KSB3aXRoIGJhc2UgKCR7YmFzZX0pYCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9zdHJpcEluZGV4SHRtbCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvXFwvaW5kZXguaHRtbCQvLCAnJyk7XG59XG5cbi8qKlxuICogVHJpZXMgdG8gZGVjb2RlIHRoZSBVUkkgY29tcG9uZW50IHdpdGhvdXQgdGhyb3dpbmcgYW4gZXhjZXB0aW9uLlxuICpcbiAqIEBwYXJhbSBzdHIgdmFsdWUgcG90ZW50aWFsIFVSSSBjb21wb25lbnQgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB0aGUgZGVjb2RlZCBVUkkgaWYgaXQgY2FuIGJlIGRlY29kZWQgb3IgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gdHJ5RGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmd8dW5kZWZpbmVkIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElnbm9yZSBhbnkgaW52YWxpZCB1cmkgY29tcG9uZW50LlxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG4vKipcbiAqIFBhcnNlcyBhbiBlc2NhcGVkIHVybCBxdWVyeSBzdHJpbmcgaW50byBrZXktdmFsdWUgcGFpcnMuIExvZ2ljIHRha2VuIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi84NjRjN2YwL3NyYy9Bbmd1bGFyLmpzI0wxMzgyXG4gKi9cbmZ1bmN0aW9uIHBhcnNlS2V5VmFsdWUoa2V5VmFsdWU6IHN0cmluZyk6IHtbazogc3RyaW5nXTogdW5rbm93bn0ge1xuICBjb25zdCBvYmo6IHtbazogc3RyaW5nXTogdW5rbm93bn0gPSB7fTtcbiAgKGtleVZhbHVlIHx8ICcnKS5zcGxpdCgnJicpLmZvckVhY2goKGtleVZhbHVlKSA9PiB7XG4gICAgbGV0IHNwbGl0UG9pbnQsIGtleSwgdmFsO1xuICAgIGlmIChrZXlWYWx1ZSkge1xuICAgICAga2V5ID0ga2V5VmFsdWUgPSBrZXlWYWx1ZS5yZXBsYWNlKC9cXCsvZywgJyUyMCcpO1xuICAgICAgc3BsaXRQb2ludCA9IGtleVZhbHVlLmluZGV4T2YoJz0nKTtcbiAgICAgIGlmIChzcGxpdFBvaW50ICE9PSAtMSkge1xuICAgICAgICBrZXkgPSBrZXlWYWx1ZS5zdWJzdHJpbmcoMCwgc3BsaXRQb2ludCk7XG4gICAgICAgIHZhbCA9IGtleVZhbHVlLnN1YnN0cmluZyhzcGxpdFBvaW50ICsgMSk7XG4gICAgICB9XG4gICAgICBrZXkgPSB0cnlEZWNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YWwgPSB0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJyA/IHRyeURlY29kZVVSSUNvbXBvbmVudCh2YWwpIDogdHJ1ZTtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tleV0pKSB7XG4gICAgICAgICAgKG9ialtrZXldIGFzIHVua25vd25bXSkucHVzaCh2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ialtrZXldID0gW29ialtrZXldLCB2YWxdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemVzIGludG8ga2V5LXZhbHVlIHBhaXJzLiBMb2dpYyB0YWtlbiBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvODY0YzdmMC9zcmMvQW5ndWxhci5qcyNMMTQwOVxuICovXG5mdW5jdGlvbiB0b0tleVZhbHVlKG9iajoge1trOiBzdHJpbmddOiB1bmtub3dufSkge1xuICBjb25zdCBwYXJ0czogdW5rbm93bltdID0gW107XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGxldCB2YWx1ZSA9IG9ialtrZXldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoYXJyYXlWYWx1ZSkgPT4ge1xuICAgICAgICBwYXJ0cy5wdXNoKFxuICAgICAgICAgICAgZW5jb2RlVXJpUXVlcnkoa2V5LCB0cnVlKSArXG4gICAgICAgICAgICAoYXJyYXlWYWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJz0nICsgZW5jb2RlVXJpUXVlcnkoYXJyYXlWYWx1ZSwgdHJ1ZSkpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0cy5wdXNoKFxuICAgICAgICAgIGVuY29kZVVyaVF1ZXJ5KGtleSwgdHJ1ZSkgK1xuICAgICAgICAgICh2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJz0nICsgZW5jb2RlVXJpUXVlcnkodmFsdWUgYXMgYW55LCB0cnVlKSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFydHMubGVuZ3RoID8gcGFydHMuam9pbignJicpIDogJyc7XG59XG5cblxuLyoqXG4gKiBXZSBuZWVkIG91ciBjdXN0b20gbWV0aG9kIGJlY2F1c2UgZW5jb2RlVVJJQ29tcG9uZW50IGlzIHRvbyBhZ2dyZXNzaXZlIGFuZCBkb2Vzbid0IGZvbGxvd1xuICogaHR0cDovL3d3dy5pZXRmLm9yZy9yZmMvcmZjMzk4Ni50eHQgd2l0aCByZWdhcmRzIHRvIHRoZSBjaGFyYWN0ZXIgc2V0IChwY2hhcikgYWxsb3dlZCBpbiBwYXRoXG4gKiBzZWdtZW50czpcbiAqICAgIHNlZ21lbnQgICAgICAgPSAqcGNoYXJcbiAqICAgIHBjaGFyICAgICAgICAgPSB1bnJlc2VydmVkIC8gcGN0LWVuY29kZWQgLyBzdWItZGVsaW1zIC8gXCI6XCIgLyBcIkBcIlxuICogICAgcGN0LWVuY29kZWQgICA9IFwiJVwiIEhFWERJRyBIRVhESUdcbiAqICAgIHVucmVzZXJ2ZWQgICAgPSBBTFBIQSAvIERJR0lUIC8gXCItXCIgLyBcIi5cIiAvIFwiX1wiIC8gXCJ+XCJcbiAqICAgIHN1Yi1kZWxpbXMgICAgPSBcIiFcIiAvIFwiJFwiIC8gXCImXCIgLyBcIidcIiAvIFwiKFwiIC8gXCIpXCJcbiAqICAgICAgICAgICAgICAgICAgICAgLyBcIipcIiAvIFwiK1wiIC8gXCIsXCIgLyBcIjtcIiAvIFwiPVwiXG4gKlxuICogTG9naWMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvODY0YzdmMC9zcmMvQW5ndWxhci5qcyNMMTQzN1xuICovXG5mdW5jdGlvbiBlbmNvZGVVcmlTZWdtZW50KHZhbDogc3RyaW5nKSB7XG4gIHJldHVybiBlbmNvZGVVcmlRdWVyeSh2YWwsIHRydWUpXG4gICAgICAucmVwbGFjZSgvJTI2L2dpLCAnJicpXG4gICAgICAucmVwbGFjZSgvJTNEL2dpLCAnPScpXG4gICAgICAucmVwbGFjZSgvJTJCL2dpLCAnKycpO1xufVxuXG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgaW50ZW5kZWQgZm9yIGVuY29kaW5nICprZXkqIG9yICp2YWx1ZSogcGFydHMgb2YgcXVlcnkgY29tcG9uZW50LiBXZSBuZWVkIGEgY3VzdG9tXG4gKiBtZXRob2QgYmVjYXVzZSBlbmNvZGVVUklDb21wb25lbnQgaXMgdG9vIGFnZ3Jlc3NpdmUgYW5kIGVuY29kZXMgc3R1ZmYgdGhhdCBkb2Vzbid0IGhhdmUgdG8gYmVcbiAqIGVuY29kZWQgcGVyIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODY6XG4gKiAgICBxdWVyeSAgICAgICAgID0gKiggcGNoYXIgLyBcIi9cIiAvIFwiP1wiIClcbiAqICAgIHBjaGFyICAgICAgICAgPSB1bnJlc2VydmVkIC8gcGN0LWVuY29kZWQgLyBzdWItZGVsaW1zIC8gXCI6XCIgLyBcIkBcIlxuICogICAgdW5yZXNlcnZlZCAgICA9IEFMUEhBIC8gRElHSVQgLyBcIi1cIiAvIFwiLlwiIC8gXCJfXCIgLyBcIn5cIlxuICogICAgcGN0LWVuY29kZWQgICA9IFwiJVwiIEhFWERJRyBIRVhESUdcbiAqICAgIHN1Yi1kZWxpbXMgICAgPSBcIiFcIiAvIFwiJFwiIC8gXCImXCIgLyBcIidcIiAvIFwiKFwiIC8gXCIpXCJcbiAqICAgICAgICAgICAgICAgICAgICAgLyBcIipcIiAvIFwiK1wiIC8gXCIsXCIgLyBcIjtcIiAvIFwiPVwiXG4gKlxuICogTG9naWMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvODY0YzdmMC9zcmMvQW5ndWxhci5qcyNMMTQ1NlxuICovXG5mdW5jdGlvbiBlbmNvZGVVcmlRdWVyeSh2YWw6IHN0cmluZywgcGN0RW5jb2RlU3BhY2VzOiBib29sZWFuID0gZmFsc2UpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpXG4gICAgICAucmVwbGFjZSgvJTQwL2dpLCAnQCcpXG4gICAgICAucmVwbGFjZSgvJTNBL2dpLCAnOicpXG4gICAgICAucmVwbGFjZSgvJTI0L2csICckJylcbiAgICAgIC5yZXBsYWNlKC8lMkMvZ2ksICcsJylcbiAgICAgIC5yZXBsYWNlKC8lM0IvZ2ksICc7JylcbiAgICAgIC5yZXBsYWNlKC8lMjAvZywgKHBjdEVuY29kZVNwYWNlcyA/ICclMjAnIDogJysnKSk7XG59XG4iXX0=