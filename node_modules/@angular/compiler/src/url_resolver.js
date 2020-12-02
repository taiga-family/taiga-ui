/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/url_resolver", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Create a {@link UrlResolver} with no package prefix.
     */
    function createUrlResolverWithoutPackagePrefix() {
        return new exports.UrlResolver();
    }
    exports.createUrlResolverWithoutPackagePrefix = createUrlResolverWithoutPackagePrefix;
    function createOfflineCompileUrlResolver() {
        return new exports.UrlResolver('.');
    }
    exports.createOfflineCompileUrlResolver = createOfflineCompileUrlResolver;
    exports.UrlResolver = /** @class */ (function () {
        function UrlResolverImpl(_packagePrefix) {
            if (_packagePrefix === void 0) { _packagePrefix = null; }
            this._packagePrefix = _packagePrefix;
        }
        /**
         * Resolves the `url` given the `baseUrl`:
         * - when the `url` is null, the `baseUrl` is returned,
         * - if `url` is relative ('path/to/here', './path/to/here'), the resolved url is a combination of
         * `baseUrl` and `url`,
         * - if `url` is absolute (it has a scheme: 'http://', 'https://' or start with '/'), the `url` is
         * returned as is (ignoring the `baseUrl`)
         */
        UrlResolverImpl.prototype.resolve = function (baseUrl, url) {
            var resolvedUrl = url;
            if (baseUrl != null && baseUrl.length > 0) {
                resolvedUrl = _resolveUrl(baseUrl, resolvedUrl);
            }
            var resolvedParts = _split(resolvedUrl);
            var prefix = this._packagePrefix;
            if (prefix != null && resolvedParts != null &&
                resolvedParts[_ComponentIndex.Scheme] == 'package') {
                var path = resolvedParts[_ComponentIndex.Path];
                prefix = prefix.replace(/\/+$/, '');
                path = path.replace(/^\/+/, '');
                return prefix + "/" + path;
            }
            return resolvedUrl;
        };
        return UrlResolverImpl;
    }());
    /**
     * Extract the scheme of a URL.
     */
    function getUrlScheme(url) {
        var match = _split(url);
        return (match && match[_ComponentIndex.Scheme]) || '';
    }
    exports.getUrlScheme = getUrlScheme;
    // The code below is adapted from Traceur:
    // https://github.com/google/traceur-compiler/blob/9511c1dafa972bf0de1202a8a863bad02f0f95a8/src/runtime/url.js
    /**
     * Builds a URI string from already-encoded parts.
     *
     * No encoding is performed.  Any component may be omitted as either null or
     * undefined.
     *
     * @param opt_scheme The scheme such as 'http'.
     * @param opt_userInfo The user name before the '@'.
     * @param opt_domain The domain such as 'www.google.com', already
     *     URI-encoded.
     * @param opt_port The port number.
     * @param opt_path The path, already URI-encoded.  If it is not
     *     empty, it must begin with a slash.
     * @param opt_queryData The URI-encoded query data.
     * @param opt_fragment The URI-encoded fragment identifier.
     * @return The fully combined URI.
     */
    function _buildFromEncodedParts(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_queryData, opt_fragment) {
        var out = [];
        if (opt_scheme != null) {
            out.push(opt_scheme + ':');
        }
        if (opt_domain != null) {
            out.push('//');
            if (opt_userInfo != null) {
                out.push(opt_userInfo + '@');
            }
            out.push(opt_domain);
            if (opt_port != null) {
                out.push(':' + opt_port);
            }
        }
        if (opt_path != null) {
            out.push(opt_path);
        }
        if (opt_queryData != null) {
            out.push('?' + opt_queryData);
        }
        if (opt_fragment != null) {
            out.push('#' + opt_fragment);
        }
        return out.join('');
    }
    /**
     * A regular expression for breaking a URI into its component parts.
     *
     * {@link http://www.gbiv.com/protocols/uri/rfc/rfc3986.html#RFC2234} says
     * As the "first-match-wins" algorithm is identical to the "greedy"
     * disambiguation method used by POSIX regular expressions, it is natural and
     * commonplace to use a regular expression for parsing the potential five
     * components of a URI reference.
     *
     * The following line is the regular expression for breaking-down a
     * well-formed URI reference into its components.
     *
     * <pre>
     * ^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?
     *  12            3  4          5       6  7        8 9
     * </pre>
     *
     * The numbers in the second line above are only to assist readability; they
     * indicate the reference points for each subexpression (i.e., each paired
     * parenthesis). We refer to the value matched for subexpression <n> as $<n>.
     * For example, matching the above expression to
     * <pre>
     *     http://www.ics.uci.edu/pub/ietf/uri/#Related
     * </pre>
     * results in the following subexpression matches:
     * <pre>
     *    $1 = http:
     *    $2 = http
     *    $3 = //www.ics.uci.edu
     *    $4 = www.ics.uci.edu
     *    $5 = /pub/ietf/uri/
     *    $6 = <undefined>
     *    $7 = <undefined>
     *    $8 = #Related
     *    $9 = Related
     * </pre>
     * where <undefined> indicates that the component is not present, as is the
     * case for the query component in the above example. Therefore, we can
     * determine the value of the five components as
     * <pre>
     *    scheme    = $2
     *    authority = $4
     *    path      = $5
     *    query     = $7
     *    fragment  = $9
     * </pre>
     *
     * The regular expression has been modified slightly to expose the
     * userInfo, domain, and port separately from the authority.
     * The modified version yields
     * <pre>
     *    $1 = http              scheme
     *    $2 = <undefined>       userInfo -\
     *    $3 = www.ics.uci.edu   domain     | authority
     *    $4 = <undefined>       port     -/
     *    $5 = /pub/ietf/uri/    path
     *    $6 = <undefined>       query without ?
     *    $7 = Related           fragment without #
     * </pre>
     * @internal
     */
    var _splitRe = new RegExp('^' +
        '(?:' +
        '([^:/?#.]+)' + // scheme - ignore special characters
        // used by other URL parts such as :,
        // ?, /, #, and .
        ':)?' +
        '(?://' +
        '(?:([^/?#]*)@)?' + // userInfo
        '([\\w\\d\\-\\u0100-\\uffff.%]*)' + // domain - restrict to letters,
        // digits, dashes, dots, percent
        // escapes, and unicode characters.
        '(?::([0-9]+))?' + // port
        ')?' +
        '([^?#]+)?' + // path
        '(?:\\?([^#]*))?' + // query
        '(?:#(.*))?' + // fragment
        '$');
    /**
     * The index of each URI component in the return value of goog.uri.utils.split.
     * @enum {number}
     */
    var _ComponentIndex;
    (function (_ComponentIndex) {
        _ComponentIndex[_ComponentIndex["Scheme"] = 1] = "Scheme";
        _ComponentIndex[_ComponentIndex["UserInfo"] = 2] = "UserInfo";
        _ComponentIndex[_ComponentIndex["Domain"] = 3] = "Domain";
        _ComponentIndex[_ComponentIndex["Port"] = 4] = "Port";
        _ComponentIndex[_ComponentIndex["Path"] = 5] = "Path";
        _ComponentIndex[_ComponentIndex["QueryData"] = 6] = "QueryData";
        _ComponentIndex[_ComponentIndex["Fragment"] = 7] = "Fragment";
    })(_ComponentIndex || (_ComponentIndex = {}));
    /**
     * Splits a URI into its component parts.
     *
     * Each component can be accessed via the component indices; for example:
     * <pre>
     * goog.uri.utils.split(someStr)[goog.uri.utils.CompontentIndex.QUERY_DATA];
     * </pre>
     *
     * @param uri The URI string to examine.
     * @return Each component still URI-encoded.
     *     Each component that is present will contain the encoded value, whereas
     *     components that are not present will be undefined or empty, depending
     *     on the browser's regular expression implementation.  Never null, since
     *     arbitrary strings may still look like path names.
     */
    function _split(uri) {
        return uri.match(_splitRe);
    }
    /**
     * Removes dot segments in given path component, as described in
     * RFC 3986, section 5.2.4.
     *
     * @param path A non-empty path component.
     * @return Path component with removed dot segments.
     */
    function _removeDotSegments(path) {
        if (path == '/')
            return '/';
        var leadingSlash = path[0] == '/' ? '/' : '';
        var trailingSlash = path[path.length - 1] === '/' ? '/' : '';
        var segments = path.split('/');
        var out = [];
        var up = 0;
        for (var pos = 0; pos < segments.length; pos++) {
            var segment = segments[pos];
            switch (segment) {
                case '':
                case '.':
                    break;
                case '..':
                    if (out.length > 0) {
                        out.pop();
                    }
                    else {
                        up++;
                    }
                    break;
                default:
                    out.push(segment);
            }
        }
        if (leadingSlash == '') {
            while (up-- > 0) {
                out.unshift('..');
            }
            if (out.length === 0)
                out.push('.');
        }
        return leadingSlash + out.join('/') + trailingSlash;
    }
    /**
     * Takes an array of the parts from split and canonicalizes the path part
     * and then joins all the parts.
     */
    function _joinAndCanonicalizePath(parts) {
        var path = parts[_ComponentIndex.Path];
        path = path == null ? '' : _removeDotSegments(path);
        parts[_ComponentIndex.Path] = path;
        return _buildFromEncodedParts(parts[_ComponentIndex.Scheme], parts[_ComponentIndex.UserInfo], parts[_ComponentIndex.Domain], parts[_ComponentIndex.Port], path, parts[_ComponentIndex.QueryData], parts[_ComponentIndex.Fragment]);
    }
    /**
     * Resolves a URL.
     * @param base The URL acting as the base URL.
     * @param to The URL to resolve.
     */
    function _resolveUrl(base, url) {
        var parts = _split(encodeURI(url));
        var baseParts = _split(base);
        if (parts[_ComponentIndex.Scheme] != null) {
            return _joinAndCanonicalizePath(parts);
        }
        else {
            parts[_ComponentIndex.Scheme] = baseParts[_ComponentIndex.Scheme];
        }
        for (var i = _ComponentIndex.Scheme; i <= _ComponentIndex.Port; i++) {
            if (parts[i] == null) {
                parts[i] = baseParts[i];
            }
        }
        if (parts[_ComponentIndex.Path][0] == '/') {
            return _joinAndCanonicalizePath(parts);
        }
        var path = baseParts[_ComponentIndex.Path];
        if (path == null)
            path = '/';
        var index = path.lastIndexOf('/');
        path = path.substring(0, index + 1) + parts[_ComponentIndex.Path];
        parts[_ComponentIndex.Path] = path;
        return _joinAndCanonicalizePath(parts);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsX3Jlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3VybF9yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVIOztPQUVHO0lBQ0gsU0FBZ0IscUNBQXFDO1FBQ25ELE9BQU8sSUFBSSxtQkFBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUZELHNGQUVDO0lBRUQsU0FBZ0IsK0JBQStCO1FBQzdDLE9BQU8sSUFBSSxtQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFGRCwwRUFFQztJQTBCWSxRQUFBLFdBQVc7UUFDdEIseUJBQW9CLGNBQWtDO1lBQWxDLCtCQUFBLEVBQUEscUJBQWtDO1lBQWxDLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUFHLENBQUM7UUFFMUQ7Ozs7Ozs7V0FPRztRQUNILGlDQUFPLEdBQVAsVUFBUSxPQUFlLEVBQUUsR0FBVztZQUNsQyxJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDdEIsSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QyxXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUNqRDtZQUNELElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMxQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2pDLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxhQUFhLElBQUksSUFBSTtnQkFDdkMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxTQUFTLEVBQUU7Z0JBQ3RELElBQUksSUFBSSxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9DLE1BQU0sR0FBRyxNQUFN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LE9BQU8sd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSB7QGxpbmsgVXJsUmVzb2x2ZXJ9IHdpdGggbm8gcGFja2FnZSBwcmVmaXguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmxSZXNvbHZlcldpdGhvdXRQYWNrYWdlUHJlZml4KCk6IFVybFJlc29sdmVyIHtcbiAgcmV0dXJuIG5ldyBVcmxSZXNvbHZlcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2ZmbGluZUNvbXBpbGVVcmxSZXNvbHZlcigpOiBVcmxSZXNvbHZlciB7XG4gIHJldHVybiBuZXcgVXJsUmVzb2x2ZXIoJy4nKTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IHRoZSB7QGxpbmsgQ29tcGlsZXJ9IHdoZW4gcmVzb2x2aW5nIEhUTUwgYW5kIENTUyB0ZW1wbGF0ZSBVUkxzLlxuICpcbiAqIFRoaXMgY2xhc3MgY2FuIGJlIG92ZXJyaWRkZW4gYnkgdGhlIGFwcGxpY2F0aW9uIGRldmVsb3BlciB0byBjcmVhdGUgY3VzdG9tIGJlaGF2aW9yLlxuICpcbiAqIFNlZSB7QGxpbmsgQ29tcGlsZXJ9XG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIHtAZXhhbXBsZSBjb21waWxlci90cy91cmxfcmVzb2x2ZXIvdXJsX3Jlc29sdmVyLnRzIHJlZ2lvbj0ndXJsX3Jlc29sdmVyJ31cbiAqXG4gKiBAc2VjdXJpdHkgIFdoZW4gY29tcGlsaW5nIHRlbXBsYXRlcyBhdCBydW50aW1lLCB5b3UgbXVzdFxuICogZW5zdXJlIHRoYXQgdGhlIGVudGlyZSB0ZW1wbGF0ZSBjb21lcyBmcm9tIGEgdHJ1c3RlZCBzb3VyY2UuXG4gKiBBdHRhY2tlci1jb250cm9sbGVkIGRhdGEgaW50cm9kdWNlZCBieSBhIHRlbXBsYXRlIGNvdWxkIGV4cG9zZSB5b3VyXG4gKiBhcHBsaWNhdGlvbiB0byBYU1Mgcmlza3MuIEZvciBtb3JlIGRldGFpbCwgc2VlIHRoZSBbU2VjdXJpdHkgR3VpZGVdKGh0dHA6Ly9nLmNvL25nL3NlY3VyaXR5KS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVcmxSZXNvbHZlciB7XG4gIHJlc29sdmUoYmFzZVVybDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcmxSZXNvbHZlckN0b3Ige1xuICBuZXcocGFja2FnZVByZWZpeD86IHN0cmluZ3xudWxsKTogVXJsUmVzb2x2ZXI7XG59XG5cbmV4cG9ydCBjb25zdCBVcmxSZXNvbHZlcjogVXJsUmVzb2x2ZXJDdG9yID0gY2xhc3MgVXJsUmVzb2x2ZXJJbXBsIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFja2FnZVByZWZpeDogc3RyaW5nfG51bGwgPSBudWxsKSB7fVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgYHVybGAgZ2l2ZW4gdGhlIGBiYXNlVXJsYDpcbiAgICogLSB3aGVuIHRoZSBgdXJsYCBpcyBudWxsLCB0aGUgYGJhc2VVcmxgIGlzIHJldHVybmVkLFxuICAgKiAtIGlmIGB1cmxgIGlzIHJlbGF0aXZlICgncGF0aC90by9oZXJlJywgJy4vcGF0aC90by9oZXJlJyksIHRoZSByZXNvbHZlZCB1cmwgaXMgYSBjb21iaW5hdGlvbiBvZlxuICAgKiBgYmFzZVVybGAgYW5kIGB1cmxgLFxuICAgKiAtIGlmIGB1cmxgIGlzIGFic29sdXRlIChpdCBoYXMgYSBzY2hlbWU6ICdodHRwOi8vJywgJ2h0dHBzOi8vJyBvciBzdGFydCB3aXRoICcvJyksIHRoZSBgdXJsYCBpc1xuICAgKiByZXR1cm5lZCBhcyBpcyAoaWdub3JpbmcgdGhlIGBiYXNlVXJsYClcbiAgICovXG4gIHJlc29sdmUoYmFzZVVybDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHJlc29sdmVkVXJsID0gdXJsO1xuICAgIGlmIChiYXNlVXJsICE9IG51bGwgJiYgYmFzZVVybC5sZW5ndGggPiAwKSB7XG4gICAgICByZXNvbHZlZFVybCA9IF9yZXNvbHZlVXJsKGJhc2VVcmwsIHJlc29sdmVkVXJsKTtcbiAgICB9XG4gICAgY29uc3QgcmVzb2x2ZWRQYXJ0cyA9IF9zcGxpdChyZXNvbHZlZFVybCk7XG4gICAgbGV0IHByZWZpeCA9IHRoaXMuX3BhY2thZ2VQcmVmaXg7XG4gICAgaWYgKHByZWZpeCAhPSBudWxsICYmIHJlc29sdmVkUGFydHMgIT0gbnVsbCAmJlxuICAgICAgICByZXNvbHZlZFBhcnRzW19Db21wb25lbnRJbmRleC5TY2hlbWVdID09ICdwYWNrYWdlJykge1xuICAgICAgbGV0IHBhdGggPSByZXNvbHZlZFBhcnRzW19Db21wb25lbnRJbmRleC5QYXRoXTtcbiAgICAgIHByZWZpeCA9IHByZWZpeC5yZXBsYWNlKC9cXC8rJC8sICcnKTtcbiAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL15cXC8rLywgJycpO1xuICAgICAgcmV0dXJuIGAke3ByZWZpeH0vJHtwYXRofWA7XG4gICAgfVxuICAgIHJldHVybiByZXNvbHZlZFVybDtcbiAgfVxufTtcblxuLyoqXG4gKiBFeHRyYWN0IHRoZSBzY2hlbWUgb2YgYSBVUkwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmxTY2hlbWUodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBtYXRjaCA9IF9zcGxpdCh1cmwpO1xuICByZXR1cm4gKG1hdGNoICYmIG1hdGNoW19Db21wb25lbnRJbmRleC5TY2hlbWVdKSB8fCAnJztcbn1cblxuLy8gVGhlIGNvZGUgYmVsb3cgaXMgYWRhcHRlZCBmcm9tIFRyYWNldXI6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL3RyYWNldXItY29tcGlsZXIvYmxvYi85NTExYzFkYWZhOTcyYmYwZGUxMjAyYThhODYzYmFkMDJmMGY5NWE4L3NyYy9ydW50aW1lL3VybC5qc1xuXG4vKipcbiAqIEJ1aWxkcyBhIFVSSSBzdHJpbmcgZnJvbSBhbHJlYWR5LWVuY29kZWQgcGFydHMuXG4gKlxuICogTm8gZW5jb2RpbmcgaXMgcGVyZm9ybWVkLiAgQW55IGNvbXBvbmVudCBtYXkgYmUgb21pdHRlZCBhcyBlaXRoZXIgbnVsbCBvclxuICogdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSBvcHRfc2NoZW1lIFRoZSBzY2hlbWUgc3VjaCBhcyAnaHR0cCcuXG4gKiBAcGFyYW0gb3B0X3VzZXJJbmZvIFRoZSB1c2VyIG5hbWUgYmVmb3JlIHRoZSAnQCcuXG4gKiBAcGFyYW0gb3B0X2RvbWFpbiBUaGUgZG9tYWluIHN1Y2ggYXMgJ3d3dy5nb29nbGUuY29tJywgYWxyZWFkeVxuICogICAgIFVSSS1lbmNvZGVkLlxuICogQHBhcmFtIG9wdF9wb3J0IFRoZSBwb3J0IG51bWJlci5cbiAqIEBwYXJhbSBvcHRfcGF0aCBUaGUgcGF0aCwgYWxyZWFkeSBVUkktZW5jb2RlZC4gIElmIGl0IGlzIG5vdFxuICogICAgIGVtcHR5LCBpdCBtdXN0IGJlZ2luIHdpdGggYSBzbGFzaC5cbiAqIEBwYXJhbSBvcHRfcXVlcnlEYXRhIFRoZSBVUkktZW5jb2RlZCBxdWVyeSBkYXRhLlxuICogQHBhcmFtIG9wdF9mcmFnbWVudCBUaGUgVVJJLWVuY29kZWQgZnJhZ21lbnQgaWRlbnRpZmllci5cbiAqIEByZXR1cm4gVGhlIGZ1bGx5IGNvbWJpbmVkIFVSSS5cbiAqL1xuZnVuY3Rpb24gX2J1aWxkRnJvbUVuY29kZWRQYXJ0cyhcbiAgICBvcHRfc2NoZW1lPzogc3RyaW5nLCBvcHRfdXNlckluZm8/OiBzdHJpbmcsIG9wdF9kb21haW4/OiBzdHJpbmcsIG9wdF9wb3J0Pzogc3RyaW5nLFxuICAgIG9wdF9wYXRoPzogc3RyaW5nLCBvcHRfcXVlcnlEYXRhPzogc3RyaW5nLCBvcHRfZnJhZ21lbnQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBvdXQ6IHN0cmluZ1tdID0gW107XG5cbiAgaWYgKG9wdF9zY2hlbWUgIT0gbnVsbCkge1xuICAgIG91dC5wdXNoKG9wdF9zY2hlbWUgKyAnOicpO1xuICB9XG5cbiAgaWYgKG9wdF9kb21haW4gIT0gbnVsbCkge1xuICAgIG91dC5wdXNoKCcvLycpO1xuXG4gICAgaWYgKG9wdF91c2VySW5mbyAhPSBudWxsKSB7XG4gICAgICBvdXQucHVzaChvcHRfdXNlckluZm8gKyAnQCcpO1xuICAgIH1cblxuICAgIG91dC5wdXNoKG9wdF9kb21haW4pO1xuXG4gICAgaWYgKG9wdF9wb3J0ICE9IG51bGwpIHtcbiAgICAgIG91dC5wdXNoKCc6JyArIG9wdF9wb3J0KTtcbiAgICB9XG4gIH1cblxuICBpZiAob3B0X3BhdGggIT0gbnVsbCkge1xuICAgIG91dC5wdXNoKG9wdF9wYXRoKTtcbiAgfVxuXG4gIGlmIChvcHRfcXVlcnlEYXRhICE9IG51bGwpIHtcbiAgICBvdXQucHVzaCgnPycgKyBvcHRfcXVlcnlEYXRhKTtcbiAgfVxuXG4gIGlmIChvcHRfZnJhZ21lbnQgIT0gbnVsbCkge1xuICAgIG91dC5wdXNoKCcjJyArIG9wdF9mcmFnbWVudCk7XG4gIH1cblxuICByZXR1cm4gb3V0LmpvaW4oJycpO1xufVxuXG4vKipcbiAqIEEgcmVndWxhciBleHByZXNzaW9uIGZvciBicmVha2luZyBhIFVSSSBpbnRvIGl0cyBjb21wb25lbnQgcGFydHMuXG4gKlxuICoge0BsaW5rIGh0dHA6Ly93d3cuZ2Jpdi5jb20vcHJvdG9jb2xzL3VyaS9yZmMvcmZjMzk4Ni5odG1sI1JGQzIyMzR9IHNheXNcbiAqIEFzIHRoZSBcImZpcnN0LW1hdGNoLXdpbnNcIiBhbGdvcml0aG0gaXMgaWRlbnRpY2FsIHRvIHRoZSBcImdyZWVkeVwiXG4gKiBkaXNhbWJpZ3VhdGlvbiBtZXRob2QgdXNlZCBieSBQT1NJWCByZWd1bGFyIGV4cHJlc3Npb25zLCBpdCBpcyBuYXR1cmFsIGFuZFxuICogY29tbW9ucGxhY2UgdG8gdXNlIGEgcmVndWxhciBleHByZXNzaW9uIGZvciBwYXJzaW5nIHRoZSBwb3RlbnRpYWwgZml2ZVxuICogY29tcG9uZW50cyBvZiBhIFVSSSByZWZlcmVuY2UuXG4gKlxuICogVGhlIGZvbGxvd2luZyBsaW5lIGlzIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gZm9yIGJyZWFraW5nLWRvd24gYVxuICogd2VsbC1mb3JtZWQgVVJJIHJlZmVyZW5jZSBpbnRvIGl0cyBjb21wb25lbnRzLlxuICpcbiAqIDxwcmU+XG4gKiBeKChbXjovPyNdKyk6KT8oLy8oW14vPyNdKikpPyhbXj8jXSopKFxcPyhbXiNdKikpPygjKC4qKSk/XG4gKiAgMTIgICAgICAgICAgICAzICA0ICAgICAgICAgIDUgICAgICAgNiAgNyAgICAgICAgOCA5XG4gKiA8L3ByZT5cbiAqXG4gKiBUaGUgbnVtYmVycyBpbiB0aGUgc2Vjb25kIGxpbmUgYWJvdmUgYXJlIG9ubHkgdG8gYXNzaXN0IHJlYWRhYmlsaXR5OyB0aGV5XG4gKiBpbmRpY2F0ZSB0aGUgcmVmZXJlbmNlIHBvaW50cyBmb3IgZWFjaCBzdWJleHByZXNzaW9uIChpLmUuLCBlYWNoIHBhaXJlZFxuICogcGFyZW50aGVzaXMpLiBXZSByZWZlciB0byB0aGUgdmFsdWUgbWF0Y2hlZCBmb3Igc3ViZXhwcmVzc2lvbiA8bj4gYXMgJDxuPi5cbiAqIEZvciBleGFtcGxlLCBtYXRjaGluZyB0aGUgYWJvdmUgZXhwcmVzc2lvbiB0b1xuICogPHByZT5cbiAqICAgICBodHRwOi8vd3d3Lmljcy51Y2kuZWR1L3B1Yi9pZXRmL3VyaS8jUmVsYXRlZFxuICogPC9wcmU+XG4gKiByZXN1bHRzIGluIHRoZSBmb2xsb3dpbmcgc3ViZXhwcmVzc2lvbiBtYXRjaGVzOlxuICogPHByZT5cbiAqICAgICQxID0gaHR0cDpcbiAqICAgICQyID0gaHR0cFxuICogICAgJDMgPSAvL3d3dy5pY3MudWNpLmVkdVxuICogICAgJDQgPSB3d3cuaWNzLnVjaS5lZHVcbiAqICAgICQ1ID0gL3B1Yi9pZXRmL3VyaS9cbiAqICAgICQ2ID0gPHVuZGVmaW5lZD5cbiAqICAgICQ3ID0gPHVuZGVmaW5lZD5cbiAqICAgICQ4ID0gI1JlbGF0ZWRcbiAqICAgICQ5ID0gUmVsYXRlZFxuICogPC9wcmU+XG4gKiB3aGVyZSA8dW5kZWZpbmVkPiBpbmRpY2F0ZXMgdGhhdCB0aGUgY29tcG9uZW50IGlzIG5vdCBwcmVzZW50LCBhcyBpcyB0aGVcbiAqIGNhc2UgZm9yIHRoZSBxdWVyeSBjb21wb25lbnQgaW4gdGhlIGFib3ZlIGV4YW1wbGUuIFRoZXJlZm9yZSwgd2UgY2FuXG4gKiBkZXRlcm1pbmUgdGhlIHZhbHVlIG9mIHRoZSBmaXZlIGNvbXBvbmVudHMgYXNcbiAqIDxwcmU+XG4gKiAgICBzY2hlbWUgICAgPSAkMlxuICogICAgYXV0aG9yaXR5ID0gJDRcbiAqICAgIHBhdGggICAgICA9ICQ1XG4gKiAgICBxdWVyeSAgICAgPSAkN1xuICogICAgZnJhZ21lbnQgID0gJDlcbiAqIDwvcHJlPlxuICpcbiAqIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gaGFzIGJlZW4gbW9kaWZpZWQgc2xpZ2h0bHkgdG8gZXhwb3NlIHRoZVxuICogdXNlckluZm8sIGRvbWFpbiwgYW5kIHBvcnQgc2VwYXJhdGVseSBmcm9tIHRoZSBhdXRob3JpdHkuXG4gKiBUaGUgbW9kaWZpZWQgdmVyc2lvbiB5aWVsZHNcbiAqIDxwcmU+XG4gKiAgICAkMSA9IGh0dHAgICAgICAgICAgICAgIHNjaGVtZVxuICogICAgJDIgPSA8dW5kZWZpbmVkPiAgICAgICB1c2VySW5mbyAtXFxcbiAqICAgICQzID0gd3d3Lmljcy51Y2kuZWR1ICAgZG9tYWluICAgICB8IGF1dGhvcml0eVxuICogICAgJDQgPSA8dW5kZWZpbmVkPiAgICAgICBwb3J0ICAgICAtL1xuICogICAgJDUgPSAvcHViL2lldGYvdXJpLyAgICBwYXRoXG4gKiAgICAkNiA9IDx1bmRlZmluZWQ+ICAgICAgIHF1ZXJ5IHdpdGhvdXQgP1xuICogICAgJDcgPSBSZWxhdGVkICAgICAgICAgICBmcmFnbWVudCB3aXRob3V0ICNcbiAqIDwvcHJlPlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IF9zcGxpdFJlID0gbmV3IFJlZ0V4cChcbiAgICAnXicgK1xuICAgICcoPzonICtcbiAgICAnKFteOi8/Iy5dKyknICsgIC8vIHNjaGVtZSAtIGlnbm9yZSBzcGVjaWFsIGNoYXJhY3RlcnNcbiAgICAgICAgICAgICAgICAgICAgIC8vIHVzZWQgYnkgb3RoZXIgVVJMIHBhcnRzIHN1Y2ggYXMgOixcbiAgICAgICAgICAgICAgICAgICAgIC8vID8sIC8sICMsIGFuZCAuXG4gICAgJzopPycgK1xuICAgICcoPzovLycgK1xuICAgICcoPzooW14vPyNdKilAKT8nICsgICAgICAgICAgICAgICAgICAvLyB1c2VySW5mb1xuICAgICcoW1xcXFx3XFxcXGRcXFxcLVxcXFx1MDEwMC1cXFxcdWZmZmYuJV0qKScgKyAgLy8gZG9tYWluIC0gcmVzdHJpY3QgdG8gbGV0dGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlnaXRzLCBkYXNoZXMsIGRvdHMsIHBlcmNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNjYXBlcywgYW5kIHVuaWNvZGUgY2hhcmFjdGVycy5cbiAgICAnKD86OihbMC05XSspKT8nICsgICAgICAgICAgICAgICAgICAgLy8gcG9ydFxuICAgICcpPycgK1xuICAgICcoW14/I10rKT8nICsgICAgICAgIC8vIHBhdGhcbiAgICAnKD86XFxcXD8oW14jXSopKT8nICsgIC8vIHF1ZXJ5XG4gICAgJyg/OiMoLiopKT8nICsgICAgICAgLy8gZnJhZ21lbnRcbiAgICAnJCcpO1xuXG4vKipcbiAqIFRoZSBpbmRleCBvZiBlYWNoIFVSSSBjb21wb25lbnQgaW4gdGhlIHJldHVybiB2YWx1ZSBvZiBnb29nLnVyaS51dGlscy5zcGxpdC5cbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbmVudW0gX0NvbXBvbmVudEluZGV4IHtcbiAgU2NoZW1lID0gMSxcbiAgVXNlckluZm8sXG4gIERvbWFpbixcbiAgUG9ydCxcbiAgUGF0aCxcbiAgUXVlcnlEYXRhLFxuICBGcmFnbWVudFxufVxuXG4vKipcbiAqIFNwbGl0cyBhIFVSSSBpbnRvIGl0cyBjb21wb25lbnQgcGFydHMuXG4gKlxuICogRWFjaCBjb21wb25lbnQgY2FuIGJlIGFjY2Vzc2VkIHZpYSB0aGUgY29tcG9uZW50IGluZGljZXM7IGZvciBleGFtcGxlOlxuICogPHByZT5cbiAqIGdvb2cudXJpLnV0aWxzLnNwbGl0KHNvbWVTdHIpW2dvb2cudXJpLnV0aWxzLkNvbXBvbnRlbnRJbmRleC5RVUVSWV9EQVRBXTtcbiAqIDwvcHJlPlxuICpcbiAqIEBwYXJhbSB1cmkgVGhlIFVSSSBzdHJpbmcgdG8gZXhhbWluZS5cbiAqIEByZXR1cm4gRWFjaCBjb21wb25lbnQgc3RpbGwgVVJJLWVuY29kZWQuXG4gKiAgICAgRWFjaCBjb21wb25lbnQgdGhhdCBpcyBwcmVzZW50IHdpbGwgY29udGFpbiB0aGUgZW5jb2RlZCB2YWx1ZSwgd2hlcmVhc1xuICogICAgIGNvbXBvbmVudHMgdGhhdCBhcmUgbm90IHByZXNlbnQgd2lsbCBiZSB1bmRlZmluZWQgb3IgZW1wdHksIGRlcGVuZGluZ1xuICogICAgIG9uIHRoZSBicm93c2VyJ3MgcmVndWxhciBleHByZXNzaW9uIGltcGxlbWVudGF0aW9uLiAgTmV2ZXIgbnVsbCwgc2luY2VcbiAqICAgICBhcmJpdHJhcnkgc3RyaW5ncyBtYXkgc3RpbGwgbG9vayBsaWtlIHBhdGggbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIF9zcGxpdCh1cmk6IHN0cmluZyk6IEFycmF5PHN0cmluZ3xhbnk+IHtcbiAgcmV0dXJuIHVyaS5tYXRjaChfc3BsaXRSZSkhO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgZG90IHNlZ21lbnRzIGluIGdpdmVuIHBhdGggY29tcG9uZW50LCBhcyBkZXNjcmliZWQgaW5cbiAqIFJGQyAzOTg2LCBzZWN0aW9uIDUuMi40LlxuICpcbiAqIEBwYXJhbSBwYXRoIEEgbm9uLWVtcHR5IHBhdGggY29tcG9uZW50LlxuICogQHJldHVybiBQYXRoIGNvbXBvbmVudCB3aXRoIHJlbW92ZWQgZG90IHNlZ21lbnRzLlxuICovXG5mdW5jdGlvbiBfcmVtb3ZlRG90U2VnbWVudHMocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHBhdGggPT0gJy8nKSByZXR1cm4gJy8nO1xuXG4gIGNvbnN0IGxlYWRpbmdTbGFzaCA9IHBhdGhbMF0gPT0gJy8nID8gJy8nIDogJyc7XG4gIGNvbnN0IHRyYWlsaW5nU2xhc2ggPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09ICcvJyA/ICcvJyA6ICcnO1xuICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKTtcblxuICBjb25zdCBvdXQ6IHN0cmluZ1tdID0gW107XG4gIGxldCB1cCA9IDA7XG4gIGZvciAobGV0IHBvcyA9IDA7IHBvcyA8IHNlZ21lbnRzLmxlbmd0aDsgcG9zKyspIHtcbiAgICBjb25zdCBzZWdtZW50ID0gc2VnbWVudHNbcG9zXTtcbiAgICBzd2l0Y2ggKHNlZ21lbnQpIHtcbiAgICAgIGNhc2UgJyc6XG4gICAgICBjYXNlICcuJzpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcuLic6XG4gICAgICAgIGlmIChvdXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIG91dC5wb3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cCsrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgb3V0LnB1c2goc2VnbWVudCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxlYWRpbmdTbGFzaCA9PSAnJykge1xuICAgIHdoaWxlICh1cC0tID4gMCkge1xuICAgICAgb3V0LnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuXG4gICAgaWYgKG91dC5sZW5ndGggPT09IDApIG91dC5wdXNoKCcuJyk7XG4gIH1cblxuICByZXR1cm4gbGVhZGluZ1NsYXNoICsgb3V0LmpvaW4oJy8nKSArIHRyYWlsaW5nU2xhc2g7XG59XG5cbi8qKlxuICogVGFrZXMgYW4gYXJyYXkgb2YgdGhlIHBhcnRzIGZyb20gc3BsaXQgYW5kIGNhbm9uaWNhbGl6ZXMgdGhlIHBhdGggcGFydFxuICogYW5kIHRoZW4gam9pbnMgYWxsIHRoZSBwYXJ0cy5cbiAqL1xuZnVuY3Rpb24gX2pvaW5BbmRDYW5vbmljYWxpemVQYXRoKHBhcnRzOiBhbnlbXSk6IHN0cmluZyB7XG4gIGxldCBwYXRoID0gcGFydHNbX0NvbXBvbmVudEluZGV4LlBhdGhdO1xuICBwYXRoID0gcGF0aCA9PSBudWxsID8gJycgOiBfcmVtb3ZlRG90U2VnbWVudHMocGF0aCk7XG4gIHBhcnRzW19Db21wb25lbnRJbmRleC5QYXRoXSA9IHBhdGg7XG5cbiAgcmV0dXJuIF9idWlsZEZyb21FbmNvZGVkUGFydHMoXG4gICAgICBwYXJ0c1tfQ29tcG9uZW50SW5kZXguU2NoZW1lXSwgcGFydHNbX0NvbXBvbmVudEluZGV4LlVzZXJJbmZvXSwgcGFydHNbX0NvbXBvbmVudEluZGV4LkRvbWFpbl0sXG4gICAgICBwYXJ0c1tfQ29tcG9uZW50SW5kZXguUG9ydF0sIHBhdGgsIHBhcnRzW19Db21wb25lbnRJbmRleC5RdWVyeURhdGFdLFxuICAgICAgcGFydHNbX0NvbXBvbmVudEluZGV4LkZyYWdtZW50XSk7XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBVUkwuXG4gKiBAcGFyYW0gYmFzZSBUaGUgVVJMIGFjdGluZyBhcyB0aGUgYmFzZSBVUkwuXG4gKiBAcGFyYW0gdG8gVGhlIFVSTCB0byByZXNvbHZlLlxuICovXG5mdW5jdGlvbiBfcmVzb2x2ZVVybChiYXNlOiBzdHJpbmcsIHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgcGFydHMgPSBfc3BsaXQoZW5jb2RlVVJJKHVybCkpO1xuICBjb25zdCBiYXNlUGFydHMgPSBfc3BsaXQoYmFzZSk7XG5cbiAgaWYgKHBhcnRzW19Db21wb25lbnRJbmRleC5TY2hlbWVdICE9IG51bGwpIHtcbiAgICByZXR1cm4gX2pvaW5BbmRDYW5vbmljYWxpemVQYXRoKHBhcnRzKTtcbiAgfSBlbHNlIHtcbiAgICBwYXJ0c1tfQ29tcG9uZW50SW5kZXguU2NoZW1lXSA9IGJhc2VQYXJ0c1tfQ29tcG9uZW50SW5kZXguU2NoZW1lXTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSBfQ29tcG9uZW50SW5kZXguU2NoZW1lOyBpIDw9IF9Db21wb25lbnRJbmRleC5Qb3J0OyBpKyspIHtcbiAgICBpZiAocGFydHNbaV0gPT0gbnVsbCkge1xuICAgICAgcGFydHNbaV0gPSBiYXNlUGFydHNbaV07XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnRzW19Db21wb25lbnRJbmRleC5QYXRoXVswXSA9PSAnLycpIHtcbiAgICByZXR1cm4gX2pvaW5BbmRDYW5vbmljYWxpemVQYXRoKHBhcnRzKTtcbiAgfVxuXG4gIGxldCBwYXRoID0gYmFzZVBhcnRzW19Db21wb25lbnRJbmRleC5QYXRoXTtcbiAgaWYgKHBhdGggPT0gbnVsbCkgcGF0aCA9ICcvJztcbiAgY29uc3QgaW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKCcvJyk7XG4gIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBpbmRleCArIDEpICsgcGFydHNbX0NvbXBvbmVudEluZGV4LlBhdGhdO1xuICBwYXJ0c1tfQ29tcG9uZW50SW5kZXguUGF0aF0gPSBwYXRoO1xuICByZXR1cm4gX2pvaW5BbmRDYW5vbmljYWxpemVQYXRoKHBhcnRzKTtcbn1cbiJdfQ==