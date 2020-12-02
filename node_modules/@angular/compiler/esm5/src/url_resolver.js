/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Create a {@link UrlResolver} with no package prefix.
 */
export function createUrlResolverWithoutPackagePrefix() {
    return new UrlResolver();
}
export function createOfflineCompileUrlResolver() {
    return new UrlResolver('.');
}
export var UrlResolver = /** @class */ (function () {
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
export function getUrlScheme(url) {
    var match = _split(url);
    return (match && match[_ComponentIndex.Scheme]) || '';
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsX3Jlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3VybF9yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSDs7R0FFRztBQUNILE1BQU0sVUFBVSxxQ0FBcUM7SUFDbkQsT0FBTyxJQUFJLFdBQVcsRUFBRSxDQUFDO0FBQzNCLENBQUM7QUFFRCxNQUFNLFVBQVUsK0JBQStCO0lBQzdDLE9BQU8sSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQTBCRCxNQUFNLENBQUMsSUFBTSxXQUFXO0lBQ3RCLHlCQUFvQixjQUFrQztRQUFsQywrQkFBQSxFQUFBLHFCQUFrQztRQUFsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7SUFBRyxDQUFDO0lBRTFEOzs7Ozs7O09BT0c7SUFDSCxpQ0FBTyxHQUFQLFVBQVEsT0FBZSxFQUFFLEdBQVc7UUFDbEMsSUFBSSxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QyxXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2pDLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxhQUFhLElBQUksSUFBSTtZQUN2QyxhQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQVMsRUFBRTtZQUN0RCxJQUFJLElBQUksR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxD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QUMsQ0FBQztBQUN6QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIHtAbGluayBVcmxSZXNvbHZlcn0gd2l0aCBubyBwYWNrYWdlIHByZWZpeC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybFJlc29sdmVyV2l0aG91dFBhY2thZ2VQcmVmaXgoKTogVXJsUmVzb2x2ZXIge1xuICByZXR1cm4gbmV3IFVybFJlc29sdmVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPZmZsaW5lQ29tcGlsZVVybFJlc29sdmVyKCk6IFVybFJlc29sdmVyIHtcbiAgcmV0dXJuIG5ldyBVcmxSZXNvbHZlcignLicpO1xufVxuXG4vKipcbiAqIFVzZWQgYnkgdGhlIHtAbGluayBDb21waWxlcn0gd2hlbiByZXNvbHZpbmcgSFRNTCBhbmQgQ1NTIHRlbXBsYXRlIFVSTHMuXG4gKlxuICogVGhpcyBjbGFzcyBjYW4gYmUgb3ZlcnJpZGRlbiBieSB0aGUgYXBwbGljYXRpb24gZGV2ZWxvcGVyIHRvIGNyZWF0ZSBjdXN0b20gYmVoYXZpb3IuXG4gKlxuICogU2VlIHtAbGluayBDb21waWxlcn1cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICoge0BleGFtcGxlIGNvbXBpbGVyL3RzL3VybF9yZXNvbHZlci91cmxfcmVzb2x2ZXIudHMgcmVnaW9uPSd1cmxfcmVzb2x2ZXInfVxuICpcbiAqIEBzZWN1cml0eSAgV2hlbiBjb21waWxpbmcgdGVtcGxhdGVzIGF0IHJ1bnRpbWUsIHlvdSBtdXN0XG4gKiBlbnN1cmUgdGhhdCB0aGUgZW50aXJlIHRlbXBsYXRlIGNvbWVzIGZyb20gYSB0cnVzdGVkIHNvdXJjZS5cbiAqIEF0dGFja2VyLWNvbnRyb2xsZWQgZGF0YSBpbnRyb2R1Y2VkIGJ5IGEgdGVtcGxhdGUgY291bGQgZXhwb3NlIHlvdXJcbiAqIGFwcGxpY2F0aW9uIHRvIFhTUyByaXNrcy4gRm9yIG1vcmUgZGV0YWlsLCBzZWUgdGhlIFtTZWN1cml0eSBHdWlkZV0oaHR0cDovL2cuY28vbmcvc2VjdXJpdHkpLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFVybFJlc29sdmVyIHtcbiAgcmVzb2x2ZShiYXNlVXJsOiBzdHJpbmcsIHVybDogc3RyaW5nKTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVybFJlc29sdmVyQ3RvciB7XG4gIG5ldyhwYWNrYWdlUHJlZml4Pzogc3RyaW5nfG51bGwpOiBVcmxSZXNvbHZlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFVybFJlc29sdmVyOiBVcmxSZXNvbHZlckN0b3IgPSBjbGFzcyBVcmxSZXNvbHZlckltcGwge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWNrYWdlUHJlZml4OiBzdHJpbmd8bnVsbCA9IG51bGwpIHt9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBgdXJsYCBnaXZlbiB0aGUgYGJhc2VVcmxgOlxuICAgKiAtIHdoZW4gdGhlIGB1cmxgIGlzIG51bGwsIHRoZSBgYmFzZVVybGAgaXMgcmV0dXJuZWQsXG4gICAqIC0gaWYgYHVybGAgaXMgcmVsYXRpdmUgKCdwYXRoL3RvL2hlcmUnLCAnLi9wYXRoL3RvL2hlcmUnKSwgdGhlIHJlc29sdmVkIHVybCBpcyBhIGNvbWJpbmF0aW9uIG9mXG4gICAqIGBiYXNlVXJsYCBhbmQgYHVybGAsXG4gICAqIC0gaWYgYHVybGAgaXMgYWJzb2x1dGUgKGl0IGhhcyBhIHNjaGVtZTogJ2h0dHA6Ly8nLCAnaHR0cHM6Ly8nIG9yIHN0YXJ0IHdpdGggJy8nKSwgdGhlIGB1cmxgIGlzXG4gICAqIHJldHVybmVkIGFzIGlzIChpZ25vcmluZyB0aGUgYGJhc2VVcmxgKVxuICAgKi9cbiAgcmVzb2x2ZShiYXNlVXJsOiBzdHJpbmcsIHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgcmVzb2x2ZWRVcmwgPSB1cmw7XG4gICAgaWYgKGJhc2VVcmwgIT0gbnVsbCAmJiBiYXNlVXJsLmxlbmd0aCA+IDApIHtcbiAgICAgIHJlc29sdmVkVXJsID0gX3Jlc29sdmVVcmwoYmFzZVVybCwgcmVzb2x2ZWRVcmwpO1xuICAgIH1cbiAgICBjb25zdCByZXNvbHZlZFBhcnRzID0gX3NwbGl0KHJlc29sdmVkVXJsKTtcbiAgICBsZXQgcHJlZml4ID0gdGhpcy5fcGFja2FnZVByZWZpeDtcbiAgICBpZiAocHJlZml4ICE9IG51bGwgJiYgcmVzb2x2ZWRQYXJ0cyAhPSBudWxsICYmXG4gICAgICAgIHJlc29sdmVkUGFydHNbX0NvbXBvbmVudEluZGV4LlNjaGVtZV0gPT0gJ3BhY2thZ2UnKSB7XG4gICAgICBsZXQgcGF0aCA9IHJlc29sdmVkUGFydHNbX0NvbXBvbmVudEluZGV4LlBhdGhdO1xuICAgICAgcHJlZml4ID0gcHJlZml4LnJlcGxhY2UoL1xcLyskLywgJycpO1xuICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLysvLCAnJyk7XG4gICAgICByZXR1cm4gYCR7cHJlZml4fS8ke3BhdGh9YDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmVkVXJsO1xuICB9XG59O1xuXG4vKipcbiAqIEV4dHJhY3QgdGhlIHNjaGVtZSBvZiBhIFVSTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVybFNjaGVtZSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG1hdGNoID0gX3NwbGl0KHVybCk7XG4gIHJldHVybiAobWF0Y2ggJiYgbWF0Y2hbX0NvbXBvbmVudEluZGV4LlNjaGVtZV0pIHx8ICcnO1xufVxuXG4vLyBUaGUgY29kZSBiZWxvdyBpcyBhZGFwdGVkIGZyb20gVHJhY2V1cjpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvdHJhY2V1ci1jb21waWxlci9ibG9iLzk1MTFjMWRhZmE5NzJiZjBkZTEyMDJhOGE4NjNiYWQwMmYwZjk1YTgvc3JjL3J1bnRpbWUvdXJsLmpzXG5cbi8qKlxuICogQnVpbGRzIGEgVVJJIHN0cmluZyBmcm9tIGFscmVhZHktZW5jb2RlZCBwYXJ0cy5cbiAqXG4gKiBObyBlbmNvZGluZyBpcyBwZXJmb3JtZWQuICBBbnkgY29tcG9uZW50IG1heSBiZSBvbWl0dGVkIGFzIGVpdGhlciBudWxsIG9yXG4gKiB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIG9wdF9zY2hlbWUgVGhlIHNjaGVtZSBzdWNoIGFzICdodHRwJy5cbiAqIEBwYXJhbSBvcHRfdXNlckluZm8gVGhlIHVzZXIgbmFtZSBiZWZvcmUgdGhlICdAJy5cbiAqIEBwYXJhbSBvcHRfZG9tYWluIFRoZSBkb21haW4gc3VjaCBhcyAnd3d3Lmdvb2dsZS5jb20nLCBhbHJlYWR5XG4gKiAgICAgVVJJLWVuY29kZWQuXG4gKiBAcGFyYW0gb3B0X3BvcnQgVGhlIHBvcnQgbnVtYmVyLlxuICogQHBhcmFtIG9wdF9wYXRoIFRoZSBwYXRoLCBhbHJlYWR5IFVSSS1lbmNvZGVkLiAgSWYgaXQgaXMgbm90XG4gKiAgICAgZW1wdHksIGl0IG11c3QgYmVnaW4gd2l0aCBhIHNsYXNoLlxuICogQHBhcmFtIG9wdF9xdWVyeURhdGEgVGhlIFVSSS1lbmNvZGVkIHF1ZXJ5IGRhdGEuXG4gKiBAcGFyYW0gb3B0X2ZyYWdtZW50IFRoZSBVUkktZW5jb2RlZCBmcmFnbWVudCBpZGVudGlmaWVyLlxuICogQHJldHVybiBUaGUgZnVsbHkgY29tYmluZWQgVVJJLlxuICovXG5mdW5jdGlvbiBfYnVpbGRGcm9tRW5jb2RlZFBhcnRzKFxuICAgIG9wdF9zY2hlbWU/OiBzdHJpbmcsIG9wdF91c2VySW5mbz86IHN0cmluZywgb3B0X2RvbWFpbj86IHN0cmluZywgb3B0X3BvcnQ/OiBzdHJpbmcsXG4gICAgb3B0X3BhdGg/OiBzdHJpbmcsIG9wdF9xdWVyeURhdGE/OiBzdHJpbmcsIG9wdF9mcmFnbWVudD86IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG91dDogc3RyaW5nW10gPSBbXTtcblxuICBpZiAob3B0X3NjaGVtZSAhPSBudWxsKSB7XG4gICAgb3V0LnB1c2gob3B0X3NjaGVtZSArICc6Jyk7XG4gIH1cblxuICBpZiAob3B0X2RvbWFpbiAhPSBudWxsKSB7XG4gICAgb3V0LnB1c2goJy8vJyk7XG5cbiAgICBpZiAob3B0X3VzZXJJbmZvICE9IG51bGwpIHtcbiAgICAgIG91dC5wdXNoKG9wdF91c2VySW5mbyArICdAJyk7XG4gICAgfVxuXG4gICAgb3V0LnB1c2gob3B0X2RvbWFpbik7XG5cbiAgICBpZiAob3B0X3BvcnQgIT0gbnVsbCkge1xuICAgICAgb3V0LnB1c2goJzonICsgb3B0X3BvcnQpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChvcHRfcGF0aCAhPSBudWxsKSB7XG4gICAgb3V0LnB1c2gob3B0X3BhdGgpO1xuICB9XG5cbiAgaWYgKG9wdF9xdWVyeURhdGEgIT0gbnVsbCkge1xuICAgIG91dC5wdXNoKCc/JyArIG9wdF9xdWVyeURhdGEpO1xuICB9XG5cbiAgaWYgKG9wdF9mcmFnbWVudCAhPSBudWxsKSB7XG4gICAgb3V0LnB1c2goJyMnICsgb3B0X2ZyYWdtZW50KTtcbiAgfVxuXG4gIHJldHVybiBvdXQuam9pbignJyk7XG59XG5cbi8qKlxuICogQSByZWd1bGFyIGV4cHJlc3Npb24gZm9yIGJyZWFraW5nIGEgVVJJIGludG8gaXRzIGNvbXBvbmVudCBwYXJ0cy5cbiAqXG4gKiB7QGxpbmsgaHR0cDovL3d3dy5nYml2LmNvbS9wcm90b2NvbHMvdXJpL3JmYy9yZmMzOTg2Lmh0bWwjUkZDMjIzNH0gc2F5c1xuICogQXMgdGhlIFwiZmlyc3QtbWF0Y2gtd2luc1wiIGFsZ29yaXRobSBpcyBpZGVudGljYWwgdG8gdGhlIFwiZ3JlZWR5XCJcbiAqIGRpc2FtYmlndWF0aW9uIG1ldGhvZCB1c2VkIGJ5IFBPU0lYIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGl0IGlzIG5hdHVyYWwgYW5kXG4gKiBjb21tb25wbGFjZSB0byB1c2UgYSByZWd1bGFyIGV4cHJlc3Npb24gZm9yIHBhcnNpbmcgdGhlIHBvdGVudGlhbCBmaXZlXG4gKiBjb21wb25lbnRzIG9mIGEgVVJJIHJlZmVyZW5jZS5cbiAqXG4gKiBUaGUgZm9sbG93aW5nIGxpbmUgaXMgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgYnJlYWtpbmctZG93biBhXG4gKiB3ZWxsLWZvcm1lZCBVUkkgcmVmZXJlbmNlIGludG8gaXRzIGNvbXBvbmVudHMuXG4gKlxuICogPHByZT5cbiAqIF4oKFteOi8/I10rKTopPygvLyhbXi8/I10qKSk/KFtePyNdKikoXFw/KFteI10qKSk/KCMoLiopKT9cbiAqICAxMiAgICAgICAgICAgIDMgIDQgICAgICAgICAgNSAgICAgICA2ICA3ICAgICAgICA4IDlcbiAqIDwvcHJlPlxuICpcbiAqIFRoZSBudW1iZXJzIGluIHRoZSBzZWNvbmQgbGluZSBhYm92ZSBhcmUgb25seSB0byBhc3Npc3QgcmVhZGFiaWxpdHk7IHRoZXlcbiAqIGluZGljYXRlIHRoZSByZWZlcmVuY2UgcG9pbnRzIGZvciBlYWNoIHN1YmV4cHJlc3Npb24gKGkuZS4sIGVhY2ggcGFpcmVkXG4gKiBwYXJlbnRoZXNpcykuIFdlIHJlZmVyIHRvIHRoZSB2YWx1ZSBtYXRjaGVkIGZvciBzdWJleHByZXNzaW9uIDxuPiBhcyAkPG4+LlxuICogRm9yIGV4YW1wbGUsIG1hdGNoaW5nIHRoZSBhYm92ZSBleHByZXNzaW9uIHRvXG4gKiA8cHJlPlxuICogICAgIGh0dHA6Ly93d3cuaWNzLnVjaS5lZHUvcHViL2lldGYvdXJpLyNSZWxhdGVkXG4gKiA8L3ByZT5cbiAqIHJlc3VsdHMgaW4gdGhlIGZvbGxvd2luZyBzdWJleHByZXNzaW9uIG1hdGNoZXM6XG4gKiA8cHJlPlxuICogICAgJDEgPSBodHRwOlxuICogICAgJDIgPSBodHRwXG4gKiAgICAkMyA9IC8vd3d3Lmljcy51Y2kuZWR1XG4gKiAgICAkNCA9IHd3dy5pY3MudWNpLmVkdVxuICogICAgJDUgPSAvcHViL2lldGYvdXJpL1xuICogICAgJDYgPSA8dW5kZWZpbmVkPlxuICogICAgJDcgPSA8dW5kZWZpbmVkPlxuICogICAgJDggPSAjUmVsYXRlZFxuICogICAgJDkgPSBSZWxhdGVkXG4gKiA8L3ByZT5cbiAqIHdoZXJlIDx1bmRlZmluZWQ+IGluZGljYXRlcyB0aGF0IHRoZSBjb21wb25lbnQgaXMgbm90IHByZXNlbnQsIGFzIGlzIHRoZVxuICogY2FzZSBmb3IgdGhlIHF1ZXJ5IGNvbXBvbmVudCBpbiB0aGUgYWJvdmUgZXhhbXBsZS4gVGhlcmVmb3JlLCB3ZSBjYW5cbiAqIGRldGVybWluZSB0aGUgdmFsdWUgb2YgdGhlIGZpdmUgY29tcG9uZW50cyBhc1xuICogPHByZT5cbiAqICAgIHNjaGVtZSAgICA9ICQyXG4gKiAgICBhdXRob3JpdHkgPSAkNFxuICogICAgcGF0aCAgICAgID0gJDVcbiAqICAgIHF1ZXJ5ICAgICA9ICQ3XG4gKiAgICBmcmFnbWVudCAgPSAkOVxuICogPC9wcmU+XG4gKlxuICogVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBoYXMgYmVlbiBtb2RpZmllZCBzbGlnaHRseSB0byBleHBvc2UgdGhlXG4gKiB1c2VySW5mbywgZG9tYWluLCBhbmQgcG9ydCBzZXBhcmF0ZWx5IGZyb20gdGhlIGF1dGhvcml0eS5cbiAqIFRoZSBtb2RpZmllZCB2ZXJzaW9uIHlpZWxkc1xuICogPHByZT5cbiAqICAgICQxID0gaHR0cCAgICAgICAgICAgICAgc2NoZW1lXG4gKiAgICAkMiA9IDx1bmRlZmluZWQ+ICAgICAgIHVzZXJJbmZvIC1cXFxuICogICAgJDMgPSB3d3cuaWNzLnVjaS5lZHUgICBkb21haW4gICAgIHwgYXV0aG9yaXR5XG4gKiAgICAkNCA9IDx1bmRlZmluZWQ+ICAgICAgIHBvcnQgICAgIC0vXG4gKiAgICAkNSA9IC9wdWIvaWV0Zi91cmkvICAgIHBhdGhcbiAqICAgICQ2ID0gPHVuZGVmaW5lZD4gICAgICAgcXVlcnkgd2l0aG91dCA/XG4gKiAgICAkNyA9IFJlbGF0ZWQgICAgICAgICAgIGZyYWdtZW50IHdpdGhvdXQgI1xuICogPC9wcmU+XG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgX3NwbGl0UmUgPSBuZXcgUmVnRXhwKFxuICAgICdeJyArXG4gICAgJyg/OicgK1xuICAgICcoW146Lz8jLl0rKScgKyAgLy8gc2NoZW1lIC0gaWdub3JlIHNwZWNpYWwgY2hhcmFjdGVyc1xuICAgICAgICAgICAgICAgICAgICAgLy8gdXNlZCBieSBvdGhlciBVUkwgcGFydHMgc3VjaCBhcyA6LFxuICAgICAgICAgICAgICAgICAgICAgLy8gPywgLywgIywgYW5kIC5cbiAgICAnOik/JyArXG4gICAgJyg/Oi8vJyArXG4gICAgJyg/OihbXi8/I10qKUApPycgKyAgICAgICAgICAgICAgICAgIC8vIHVzZXJJbmZvXG4gICAgJyhbXFxcXHdcXFxcZFxcXFwtXFxcXHUwMTAwLVxcXFx1ZmZmZi4lXSopJyArICAvLyBkb21haW4gLSByZXN0cmljdCB0byBsZXR0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaWdpdHMsIGRhc2hlcywgZG90cywgcGVyY2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2NhcGVzLCBhbmQgdW5pY29kZSBjaGFyYWN0ZXJzLlxuICAgICcoPzo6KFswLTldKykpPycgKyAgICAgICAgICAgICAgICAgICAvLyBwb3J0XG4gICAgJyk/JyArXG4gICAgJyhbXj8jXSspPycgKyAgICAgICAgLy8gcGF0aFxuICAgICcoPzpcXFxcPyhbXiNdKikpPycgKyAgLy8gcXVlcnlcbiAgICAnKD86IyguKikpPycgKyAgICAgICAvLyBmcmFnbWVudFxuICAgICckJyk7XG5cbi8qKlxuICogVGhlIGluZGV4IG9mIGVhY2ggVVJJIGNvbXBvbmVudCBpbiB0aGUgcmV0dXJuIHZhbHVlIG9mIGdvb2cudXJpLnV0aWxzLnNwbGl0LlxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZW51bSBfQ29tcG9uZW50SW5kZXgge1xuICBTY2hlbWUgPSAxLFxuICBVc2VySW5mbyxcbiAgRG9tYWluLFxuICBQb3J0LFxuICBQYXRoLFxuICBRdWVyeURhdGEsXG4gIEZyYWdtZW50XG59XG5cbi8qKlxuICogU3BsaXRzIGEgVVJJIGludG8gaXRzIGNvbXBvbmVudCBwYXJ0cy5cbiAqXG4gKiBFYWNoIGNvbXBvbmVudCBjYW4gYmUgYWNjZXNzZWQgdmlhIHRoZSBjb21wb25lbnQgaW5kaWNlczsgZm9yIGV4YW1wbGU6XG4gKiA8cHJlPlxuICogZ29vZy51cmkudXRpbHMuc3BsaXQoc29tZVN0cilbZ29vZy51cmkudXRpbHMuQ29tcG9udGVudEluZGV4LlFVRVJZX0RBVEFdO1xuICogPC9wcmU+XG4gKlxuICogQHBhcmFtIHVyaSBUaGUgVVJJIHN0cmluZyB0byBleGFtaW5lLlxuICogQHJldHVybiBFYWNoIGNvbXBvbmVudCBzdGlsbCBVUkktZW5jb2RlZC5cbiAqICAgICBFYWNoIGNvbXBvbmVudCB0aGF0IGlzIHByZXNlbnQgd2lsbCBjb250YWluIHRoZSBlbmNvZGVkIHZhbHVlLCB3aGVyZWFzXG4gKiAgICAgY29tcG9uZW50cyB0aGF0IGFyZSBub3QgcHJlc2VudCB3aWxsIGJlIHVuZGVmaW5lZCBvciBlbXB0eSwgZGVwZW5kaW5nXG4gKiAgICAgb24gdGhlIGJyb3dzZXIncyByZWd1bGFyIGV4cHJlc3Npb24gaW1wbGVtZW50YXRpb24uICBOZXZlciBudWxsLCBzaW5jZVxuICogICAgIGFyYml0cmFyeSBzdHJpbmdzIG1heSBzdGlsbCBsb29rIGxpa2UgcGF0aCBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gX3NwbGl0KHVyaTogc3RyaW5nKTogQXJyYXk8c3RyaW5nfGFueT4ge1xuICByZXR1cm4gdXJpLm1hdGNoKF9zcGxpdFJlKSE7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBkb3Qgc2VnbWVudHMgaW4gZ2l2ZW4gcGF0aCBjb21wb25lbnQsIGFzIGRlc2NyaWJlZCBpblxuICogUkZDIDM5ODYsIHNlY3Rpb24gNS4yLjQuXG4gKlxuICogQHBhcmFtIHBhdGggQSBub24tZW1wdHkgcGF0aCBjb21wb25lbnQuXG4gKiBAcmV0dXJuIFBhdGggY29tcG9uZW50IHdpdGggcmVtb3ZlZCBkb3Qgc2VnbWVudHMuXG4gKi9cbmZ1bmN0aW9uIF9yZW1vdmVEb3RTZWdtZW50cyhwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAocGF0aCA9PSAnLycpIHJldHVybiAnLyc7XG5cbiAgY29uc3QgbGVhZGluZ1NsYXNoID0gcGF0aFswXSA9PSAnLycgPyAnLycgOiAnJztcbiAgY29uc3QgdHJhaWxpbmdTbGFzaCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXSA9PT0gJy8nID8gJy8nIDogJyc7XG4gIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpO1xuXG4gIGNvbnN0IG91dDogc3RyaW5nW10gPSBbXTtcbiAgbGV0IHVwID0gMDtcbiAgZm9yIChsZXQgcG9zID0gMDsgcG9zIDwgc2VnbWVudHMubGVuZ3RoOyBwb3MrKykge1xuICAgIGNvbnN0IHNlZ21lbnQgPSBzZWdtZW50c1twb3NdO1xuICAgIHN3aXRjaCAoc2VnbWVudCkge1xuICAgICAgY2FzZSAnJzpcbiAgICAgIGNhc2UgJy4nOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJy4uJzpcbiAgICAgICAgaWYgKG91dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgb3V0LnBvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVwKys7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBvdXQucHVzaChzZWdtZW50KTtcbiAgICB9XG4gIH1cblxuICBpZiAobGVhZGluZ1NsYXNoID09ICcnKSB7XG4gICAgd2hpbGUgKHVwLS0gPiAwKSB7XG4gICAgICBvdXQudW5zaGlmdCgnLi4nKTtcbiAgICB9XG5cbiAgICBpZiAob3V0Lmxlbmd0aCA9PT0gMCkgb3V0LnB1c2goJy4nKTtcbiAgfVxuXG4gIHJldHVybiBsZWFkaW5nU2xhc2ggKyBvdXQuam9pbignLycpICsgdHJhaWxpbmdTbGFzaDtcbn1cblxuLyoqXG4gKiBUYWtlcyBhbiBhcnJheSBvZiB0aGUgcGFydHMgZnJvbSBzcGxpdCBhbmQgY2Fub25pY2FsaXplcyB0aGUgcGF0aCBwYXJ0XG4gKiBhbmQgdGhlbiBqb2lucyBhbGwgdGhlIHBhcnRzLlxuICovXG5mdW5jdGlvbiBfam9pbkFuZENhbm9uaWNhbGl6ZVBhdGgocGFydHM6IGFueVtdKTogc3RyaW5nIHtcbiAgbGV0IHBhdGggPSBwYXJ0c1tfQ29tcG9uZW50SW5kZXguUGF0aF07XG4gIHBhdGggPSBwYXRoID09IG51bGwgPyAnJyA6IF9yZW1vdmVEb3RTZWdtZW50cyhwYXRoKTtcbiAgcGFydHNbX0NvbXBvbmVudEluZGV4LlBhdGhdID0gcGF0aDtcblxuICByZXR1cm4gX2J1aWxkRnJvbUVuY29kZWRQYXJ0cyhcbiAgICAgIHBhcnRzW19Db21wb25lbnRJbmRleC5TY2hlbWVdLCBwYXJ0c1tfQ29tcG9uZW50SW5kZXguVXNlckluZm9dLCBwYXJ0c1tfQ29tcG9uZW50SW5kZXguRG9tYWluXSxcbiAgICAgIHBhcnRzW19Db21wb25lbnRJbmRleC5Qb3J0XSwgcGF0aCwgcGFydHNbX0NvbXBvbmVudEluZGV4LlF1ZXJ5RGF0YV0sXG4gICAgICBwYXJ0c1tfQ29tcG9uZW50SW5kZXguRnJhZ21lbnRdKTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIFVSTC5cbiAqIEBwYXJhbSBiYXNlIFRoZSBVUkwgYWN0aW5nIGFzIHRoZSBiYXNlIFVSTC5cbiAqIEBwYXJhbSB0byBUaGUgVVJMIHRvIHJlc29sdmUuXG4gKi9cbmZ1bmN0aW9uIF9yZXNvbHZlVXJsKGJhc2U6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBwYXJ0cyA9IF9zcGxpdChlbmNvZGVVUkkodXJsKSk7XG4gIGNvbnN0IGJhc2VQYXJ0cyA9IF9zcGxpdChiYXNlKTtcblxuICBpZiAocGFydHNbX0NvbXBvbmVudEluZGV4LlNjaGVtZV0gIT0gbnVsbCkge1xuICAgIHJldHVybiBfam9pbkFuZENhbm9uaWNhbGl6ZVBhdGgocGFydHMpO1xuICB9IGVsc2Uge1xuICAgIHBhcnRzW19Db21wb25lbnRJbmRleC5TY2hlbWVdID0gYmFzZVBhcnRzW19Db21wb25lbnRJbmRleC5TY2hlbWVdO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IF9Db21wb25lbnRJbmRleC5TY2hlbWU7IGkgPD0gX0NvbXBvbmVudEluZGV4LlBvcnQ7IGkrKykge1xuICAgIGlmIChwYXJ0c1tpXSA9PSBudWxsKSB7XG4gICAgICBwYXJ0c1tpXSA9IGJhc2VQYXJ0c1tpXTtcbiAgICB9XG4gIH1cblxuICBpZiAocGFydHNbX0NvbXBvbmVudEluZGV4LlBhdGhdWzBdID09ICcvJykge1xuICAgIHJldHVybiBfam9pbkFuZENhbm9uaWNhbGl6ZVBhdGgocGFydHMpO1xuICB9XG5cbiAgbGV0IHBhdGggPSBiYXNlUGFydHNbX0NvbXBvbmVudEluZGV4LlBhdGhdO1xuICBpZiAocGF0aCA9PSBudWxsKSBwYXRoID0gJy8nO1xuICBjb25zdCBpbmRleCA9IHBhdGgubGFzdEluZGV4T2YoJy8nKTtcbiAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIGluZGV4ICsgMSkgKyBwYXJ0c1tfQ29tcG9uZW50SW5kZXguUGF0aF07XG4gIHBhcnRzW19Db21wb25lbnRJbmRleC5QYXRoXSA9IHBhdGg7XG4gIHJldHVybiBfam9pbkFuZENhbm9uaWNhbGl6ZVBhdGgocGFydHMpO1xufVxuIl19