/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { convertToParamMap, PRIMARY_OUTLET } from './shared';
import { equalArraysOrString, forEach, shallowEqual } from './utils/collection';
export function createEmptyUrlTree() {
    return new UrlTree(new UrlSegmentGroup([], {}), {}, null);
}
export function containsTree(container, containee, exact) {
    if (exact) {
        return equalQueryParams(container.queryParams, containee.queryParams) &&
            equalSegmentGroups(container.root, containee.root);
    }
    return containsQueryParams(container.queryParams, containee.queryParams) &&
        containsSegmentGroup(container.root, containee.root);
}
function equalQueryParams(container, containee) {
    // TODO: This does not handle array params correctly.
    return shallowEqual(container, containee);
}
function equalSegmentGroups(container, containee) {
    if (!equalPath(container.segments, containee.segments))
        return false;
    if (container.numberOfChildren !== containee.numberOfChildren)
        return false;
    for (var c in containee.children) {
        if (!container.children[c])
            return false;
        if (!equalSegmentGroups(container.children[c], containee.children[c]))
            return false;
    }
    return true;
}
function containsQueryParams(container, containee) {
    // TODO: This does not handle array params correctly.
    return Object.keys(containee).length <= Object.keys(container).length &&
        Object.keys(containee).every(function (key) { return equalArraysOrString(container[key], containee[key]); });
}
function containsSegmentGroup(container, containee) {
    return containsSegmentGroupHelper(container, containee, containee.segments);
}
function containsSegmentGroupHelper(container, containee, containeePaths) {
    if (container.segments.length > containeePaths.length) {
        var current = container.segments.slice(0, containeePaths.length);
        if (!equalPath(current, containeePaths))
            return false;
        if (containee.hasChildren())
            return false;
        return true;
    }
    else if (container.segments.length === containeePaths.length) {
        if (!equalPath(container.segments, containeePaths))
            return false;
        for (var c in containee.children) {
            if (!container.children[c])
                return false;
            if (!containsSegmentGroup(container.children[c], containee.children[c]))
                return false;
        }
        return true;
    }
    else {
        var current = containeePaths.slice(0, container.segments.length);
        var next = containeePaths.slice(container.segments.length);
        if (!equalPath(container.segments, current))
            return false;
        if (!container.children[PRIMARY_OUTLET])
            return false;
        return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next);
    }
}
/**
 * @description
 *
 * Represents the parsed URL.
 *
 * Since a router state is a tree, and the URL is nothing but a serialized state, the URL is a
 * serialized tree.
 * UrlTree is a data structure that provides a lot of affordances in dealing with URLs
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree =
 *       router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
 *     const f = tree.fragment; // return 'fragment'
 *     const q = tree.queryParams; // returns {debug: 'true'}
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
 *     g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
 *     g.children['support'].segments; // return 1 segment 'help'
 *   }
 * }
 * ```
 *
 * @publicApi
 */
var UrlTree = /** @class */ (function () {
    /** @internal */
    function UrlTree(
    /** The root segment group of the URL tree */
    root, 
    /** The query params of the URL */
    queryParams, 
    /** The fragment of the URL */
    fragment) {
        this.root = root;
        this.queryParams = queryParams;
        this.fragment = fragment;
    }
    Object.defineProperty(UrlTree.prototype, "queryParamMap", {
        get: function () {
            if (!this._queryParamMap) {
                this._queryParamMap = convertToParamMap(this.queryParams);
            }
            return this._queryParamMap;
        },
        enumerable: true,
        configurable: true
    });
    /** @docsNotRequired */
    UrlTree.prototype.toString = function () {
        return DEFAULT_SERIALIZER.serialize(this);
    };
    return UrlTree;
}());
export { UrlTree };
/**
 * @description
 *
 * Represents the parsed URL segment group.
 *
 * See `UrlTree` for more information.
 *
 * @publicApi
 */
var UrlSegmentGroup = /** @class */ (function () {
    function UrlSegmentGroup(
    /** The URL segments of this group. See `UrlSegment` for more information */
    segments, 
    /** The list of children of this group */
    children) {
        var _this = this;
        this.segments = segments;
        this.children = children;
        /** The parent node in the url tree */
        this.parent = null;
        forEach(children, function (v, k) { return v.parent = _this; });
    }
    /** Whether the segment has child segments */
    UrlSegmentGroup.prototype.hasChildren = function () {
        return this.numberOfChildren > 0;
    };
    Object.defineProperty(UrlSegmentGroup.prototype, "numberOfChildren", {
        /** Number of child segments */
        get: function () {
            return Object.keys(this.children).length;
        },
        enumerable: true,
        configurable: true
    });
    /** @docsNotRequired */
    UrlSegmentGroup.prototype.toString = function () {
        return serializePaths(this);
    };
    return UrlSegmentGroup;
}());
export { UrlSegmentGroup };
/**
 * @description
 *
 * Represents a single URL segment.
 *
 * A UrlSegment is a part of a URL between the two slashes. It contains a path and the matrix
 * parameters associated with the segment.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree = router.parseUrl('/team;id=33');
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments;
 *     s[0].path; // returns 'team'
 *     s[0].parameters; // returns {id: 33}
 *   }
 * }
 * ```
 *
 * @publicApi
 */
var UrlSegment = /** @class */ (function () {
    function UrlSegment(
    /** The path part of a URL segment */
    path, 
    /** The matrix parameters associated with a segment */
    parameters) {
        this.path = path;
        this.parameters = parameters;
    }
    Object.defineProperty(UrlSegment.prototype, "parameterMap", {
        get: function () {
            if (!this._parameterMap) {
                this._parameterMap = convertToParamMap(this.parameters);
            }
            return this._parameterMap;
        },
        enumerable: true,
        configurable: true
    });
    /** @docsNotRequired */
    UrlSegment.prototype.toString = function () {
        return serializePath(this);
    };
    return UrlSegment;
}());
export { UrlSegment };
export function equalSegments(as, bs) {
    return equalPath(as, bs) && as.every(function (a, i) { return shallowEqual(a.parameters, bs[i].parameters); });
}
export function equalPath(as, bs) {
    if (as.length !== bs.length)
        return false;
    return as.every(function (a, i) { return a.path === bs[i].path; });
}
export function mapChildrenIntoArray(segment, fn) {
    var res = [];
    forEach(segment.children, function (child, childOutlet) {
        if (childOutlet === PRIMARY_OUTLET) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    forEach(segment.children, function (child, childOutlet) {
        if (childOutlet !== PRIMARY_OUTLET) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    return res;
}
/**
 * @description
 *
 * Serializes and deserializes a URL string into a URL tree.
 *
 * The url serialization strategy is customizable. You can
 * make all URLs case insensitive by providing a custom UrlSerializer.
 *
 * See `DefaultUrlSerializer` for an example of a URL serializer.
 *
 * @publicApi
 */
var UrlSerializer = /** @class */ (function () {
    function UrlSerializer() {
    }
    return UrlSerializer;
}());
export { UrlSerializer };
/**
 * @description
 *
 * A default implementation of the `UrlSerializer`.
 *
 * Example URLs:
 *
 * ```
 * /inbox/33(popup:compose)
 * /inbox/33;open=true/messages/44
 * ```
 *
 * DefaultUrlSerializer uses parentheses to serialize secondary segments (e.g., popup:compose), the
 * colon syntax to specify the outlet, and the ';parameter=value' syntax (e.g., open=true) to
 * specify route specific parameters.
 *
 * @publicApi
 */
var DefaultUrlSerializer = /** @class */ (function () {
    function DefaultUrlSerializer() {
    }
    /** Parses a url into a `UrlTree` */
    DefaultUrlSerializer.prototype.parse = function (url) {
        var p = new UrlParser(url);
        return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
    };
    /** Converts a `UrlTree` into a url */
    DefaultUrlSerializer.prototype.serialize = function (tree) {
        var segment = "/" + serializeSegment(tree.root, true);
        var query = serializeQueryParams(tree.queryParams);
        var fragment = typeof tree.fragment === "string" ? "#" + encodeUriFragment(tree.fragment) : '';
        return "" + segment + query + fragment;
    };
    return DefaultUrlSerializer;
}());
export { DefaultUrlSerializer };
var DEFAULT_SERIALIZER = new DefaultUrlSerializer();
export function serializePaths(segment) {
    return segment.segments.map(function (p) { return serializePath(p); }).join('/');
}
function serializeSegment(segment, root) {
    if (!segment.hasChildren()) {
        return serializePaths(segment);
    }
    if (root) {
        var primary = segment.children[PRIMARY_OUTLET] ?
            serializeSegment(segment.children[PRIMARY_OUTLET], false) :
            '';
        var children_1 = [];
        forEach(segment.children, function (v, k) {
            if (k !== PRIMARY_OUTLET) {
                children_1.push(k + ":" + serializeSegment(v, false));
            }
        });
        return children_1.length > 0 ? primary + "(" + children_1.join('//') + ")" : primary;
    }
    else {
        var children = mapChildrenIntoArray(segment, function (v, k) {
            if (k === PRIMARY_OUTLET) {
                return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
            }
            return [k + ":" + serializeSegment(v, false)];
        });
        return serializePaths(segment) + "/(" + children.join('//') + ")";
    }
}
/**
 * Encodes a URI string with the default encoding. This function will only ever be called from
 * `encodeUriQuery` or `encodeUriSegment` as it's the base set of encodings to be used. We need
 * a custom encoding because encodeURIComponent is too aggressive and encodes stuff that doesn't
 * have to be encoded per https://url.spec.whatwg.org.
 */
function encodeUriString(s) {
    return encodeURIComponent(s)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',');
}
/**
 * This function should be used to encode both keys and values in a query string key/value. In
 * the following URL, you need to call encodeUriQuery on "k" and "v":
 *
 * http://www.site.org/html;mk=mv?k=v#f
 */
export function encodeUriQuery(s) {
    return encodeUriString(s).replace(/%3B/gi, ';');
}
/**
 * This function should be used to encode a URL fragment. In the following URL, you need to call
 * encodeUriFragment on "f":
 *
 * http://www.site.org/html;mk=mv?k=v#f
 */
export function encodeUriFragment(s) {
    return encodeURI(s);
}
/**
 * This function should be run on any URI segment as well as the key and value in a key/value
 * pair for matrix params. In the following URL, you need to call encodeUriSegment on "html",
 * "mk", and "mv":
 *
 * http://www.site.org/html;mk=mv?k=v#f
 */
export function encodeUriSegment(s) {
    return encodeUriString(s).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
}
export function decode(s) {
    return decodeURIComponent(s);
}
// Query keys/values should have the "+" replaced first, as "+" in a query string is " ".
// decodeURIComponent function will not decode "+" as a space.
export function decodeQuery(s) {
    return decode(s.replace(/\+/g, '%20'));
}
export function serializePath(path) {
    return "" + encodeUriSegment(path.path) + serializeMatrixParams(path.parameters);
}
function serializeMatrixParams(params) {
    return Object.keys(params)
        .map(function (key) { return ";" + encodeUriSegment(key) + "=" + encodeUriSegment(params[key]); })
        .join('');
}
function serializeQueryParams(params) {
    var strParams = Object.keys(params).map(function (name) {
        var value = params[name];
        return Array.isArray(value) ?
            value.map(function (v) { return encodeUriQuery(name) + "=" + encodeUriQuery(v); }).join('&') :
            encodeUriQuery(name) + "=" + encodeUriQuery(value);
    });
    return strParams.length ? "?" + strParams.join('&') : '';
}
var SEGMENT_RE = /^[^\/()?;=#]+/;
function matchSegments(str) {
    var match = str.match(SEGMENT_RE);
    return match ? match[0] : '';
}
var QUERY_PARAM_RE = /^[^=?&#]+/;
// Return the name of the query param at the start of the string or an empty string
function matchQueryParams(str) {
    var match = str.match(QUERY_PARAM_RE);
    return match ? match[0] : '';
}
var QUERY_PARAM_VALUE_RE = /^[^?&#]+/;
// Return the value of the query param at the start of the string or an empty string
function matchUrlQueryParamValue(str) {
    var match = str.match(QUERY_PARAM_VALUE_RE);
    return match ? match[0] : '';
}
var UrlParser = /** @class */ (function () {
    function UrlParser(url) {
        this.url = url;
        this.remaining = url;
    }
    UrlParser.prototype.parseRootSegment = function () {
        this.consumeOptional('/');
        if (this.remaining === '' || this.peekStartsWith('?') || this.peekStartsWith('#')) {
            return new UrlSegmentGroup([], {});
        }
        // The root segment group never has segments
        return new UrlSegmentGroup([], this.parseChildren());
    };
    UrlParser.prototype.parseQueryParams = function () {
        var params = {};
        if (this.consumeOptional('?')) {
            do {
                this.parseQueryParam(params);
            } while (this.consumeOptional('&'));
        }
        return params;
    };
    UrlParser.prototype.parseFragment = function () {
        return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
    };
    UrlParser.prototype.parseChildren = function () {
        if (this.remaining === '') {
            return {};
        }
        this.consumeOptional('/');
        var segments = [];
        if (!this.peekStartsWith('(')) {
            segments.push(this.parseSegment());
        }
        while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {
            this.capture('/');
            segments.push(this.parseSegment());
        }
        var children = {};
        if (this.peekStartsWith('/(')) {
            this.capture('/');
            children = this.parseParens(true);
        }
        var res = {};
        if (this.peekStartsWith('(')) {
            res = this.parseParens(false);
        }
        if (segments.length > 0 || Object.keys(children).length > 0) {
            res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
        }
        return res;
    };
    // parse a segment with its matrix parameters
    // ie `name;k1=v1;k2`
    UrlParser.prototype.parseSegment = function () {
        var path = matchSegments(this.remaining);
        if (path === '' && this.peekStartsWith(';')) {
            throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
        }
        this.capture(path);
        return new UrlSegment(decode(path), this.parseMatrixParams());
    };
    UrlParser.prototype.parseMatrixParams = function () {
        var params = {};
        while (this.consumeOptional(';')) {
            this.parseParam(params);
        }
        return params;
    };
    UrlParser.prototype.parseParam = function (params) {
        var key = matchSegments(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        var value = '';
        if (this.consumeOptional('=')) {
            var valueMatch = matchSegments(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        params[decode(key)] = decode(value);
    };
    // Parse a single query parameter `name[=value]`
    UrlParser.prototype.parseQueryParam = function (params) {
        var key = matchQueryParams(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        var value = '';
        if (this.consumeOptional('=')) {
            var valueMatch = matchUrlQueryParamValue(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        var decodedKey = decodeQuery(key);
        var decodedVal = decodeQuery(value);
        if (params.hasOwnProperty(decodedKey)) {
            // Append to existing values
            var currentVal = params[decodedKey];
            if (!Array.isArray(currentVal)) {
                currentVal = [currentVal];
                params[decodedKey] = currentVal;
            }
            currentVal.push(decodedVal);
        }
        else {
            // Create a new value
            params[decodedKey] = decodedVal;
        }
    };
    // parse `(a/b//outlet_name:c/d)`
    UrlParser.prototype.parseParens = function (allowPrimary) {
        var segments = {};
        this.capture('(');
        while (!this.consumeOptional(')') && this.remaining.length > 0) {
            var path = matchSegments(this.remaining);
            var next = this.remaining[path.length];
            // if is is not one of these characters, then the segment was unescaped
            // or the group was not closed
            if (next !== '/' && next !== ')' && next !== ';') {
                throw new Error("Cannot parse url '" + this.url + "'");
            }
            var outletName = undefined;
            if (path.indexOf(':') > -1) {
                outletName = path.substr(0, path.indexOf(':'));
                this.capture(outletName);
                this.capture(':');
            }
            else if (allowPrimary) {
                outletName = PRIMARY_OUTLET;
            }
            var children = this.parseChildren();
            segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] :
                new UrlSegmentGroup([], children);
            this.consumeOptional('//');
        }
        return segments;
    };
    UrlParser.prototype.peekStartsWith = function (str) {
        return this.remaining.startsWith(str);
    };
    // Consumes the prefix when it is present and returns whether it has been consumed
    UrlParser.prototype.consumeOptional = function (str) {
        if (this.peekStartsWith(str)) {
            this.remaining = this.remaining.substring(str.length);
            return true;
        }
        return false;
    };
    UrlParser.prototype.capture = function (str) {
        if (!this.consumeOptional(str)) {
            throw new Error("Expected \"" + str + "\".");
        }
    };
    return UrlParser;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsX3RyZWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9yb3V0ZXIvc3JjL3VybF90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxpQkFBaUIsRUFBb0IsY0FBYyxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFOUUsTUFBTSxVQUFVLGtCQUFrQjtJQUNoQyxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUMsU0FBa0IsRUFBRSxTQUFrQixFQUFFLEtBQWM7SUFDakYsSUFBSSxLQUFLLEVBQUU7UUFDVCxPQUFPLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQztZQUNqRSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4RDtJQUVELE9BQU8sbUJBQW1CLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDO1FBQ3BFLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLFNBQWlCLEVBQUUsU0FBaUI7SUFDNUQscURBQXFEO0lBQ3JELE9BQU8sWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxTQUEwQixFQUFFLFNBQTBCO0lBQ2hGLElB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QUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxlQUFlLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzlGLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRU8sa0NBQWMsR0FBdEIsVUFBdUIsR0FBVztRQUNoQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxrRkFBa0Y7SUFDMUUsbUNBQWUsR0FBdkIsVUFBd0IsR0FBVztRQUNqQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLDJCQUFPLEdBQWYsVUFBZ0IsR0FBVztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFhLEdBQUcsUUFBSSxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBOUxELElBOExDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2NvbnZlcnRUb1BhcmFtTWFwLCBQYXJhbU1hcCwgUGFyYW1zLCBQUklNQVJZX09VVExFVH0gZnJvbSAnLi9zaGFyZWQnO1xuaW1wb3J0IHtlcXVhbEFycmF5c09yU3RyaW5nLCBmb3JFYWNoLCBzaGFsbG93RXF1YWx9IGZyb20gJy4vdXRpbHMvY29sbGVjdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbXB0eVVybFRyZWUoKSB7XG4gIHJldHVybiBuZXcgVXJsVHJlZShuZXcgVXJsU2VnbWVudEdyb3VwKFtdLCB7fSksIHt9LCBudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zVHJlZShjb250YWluZXI6IFVybFRyZWUsIGNvbnRhaW5lZTogVXJsVHJlZSwgZXhhY3Q6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgaWYgKGV4YWN0KSB7XG4gICAgcmV0dXJuIGVxdWFsUXVlcnlQYXJhbXMoY29udGFpbmVyLnF1ZXJ5UGFyYW1zLCBjb250YWluZWUucXVlcnlQYXJhbXMpICYmXG4gICAgICAgIGVxdWFsU2VnbWVudEdyb3Vwcyhjb250YWluZXIucm9vdCwgY29udGFpbmVlLnJvb3QpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5zUXVlcnlQYXJhbXMoY29udGFpbmVyLnF1ZXJ5UGFyYW1zLCBjb250YWluZWUucXVlcnlQYXJhbXMpICYmXG4gICAgICBjb250YWluc1NlZ21lbnRHcm91cChjb250YWluZXIucm9vdCwgY29udGFpbmVlLnJvb3QpO1xufVxuXG5mdW5jdGlvbiBlcXVhbFF1ZXJ5UGFyYW1zKGNvbnRhaW5lcjogUGFyYW1zLCBjb250YWluZWU6IFBhcmFtcyk6IGJvb2xlYW4ge1xuICAvLyBUT0RPOiBUaGlzIGRvZXMgbm90IGhhbmRsZSBhcnJheSBwYXJhbXMgY29ycmVjdGx5LlxuICByZXR1cm4gc2hhbGxvd0VxdWFsKGNvbnRhaW5lciwgY29udGFpbmVlKTtcbn1cblxuZnVuY3Rpb24gZXF1YWxTZWdtZW50R3JvdXBzKGNvbnRhaW5lcjogVXJsU2VnbWVudEdyb3VwLCBjb250YWluZWU6IFVybFNlZ21lbnRHcm91cCk6IGJvb2xlYW4ge1xuICBpZiAoIWVxdWFsUGF0aChjb250YWluZXIuc2VnbWVudHMsIGNvbnRhaW5lZS5zZWdtZW50cykpIHJldHVybiBmYWxzZTtcbiAgaWYgKGNvbnRhaW5lci5udW1iZXJPZkNoaWxkcmVuICE9PSBjb250YWluZWUubnVtYmVyT2ZDaGlsZHJlbikgcmV0dXJuIGZhbHNlO1xuICBmb3IgKGNvbnN0IGMgaW4gY29udGFpbmVlLmNoaWxkcmVuKSB7XG4gICAgaWYgKCFjb250YWluZXIuY2hpbGRyZW5bY10pIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIWVxdWFsU2VnbWVudEdyb3Vwcyhjb250YWluZXIuY2hpbGRyZW5bY10sIGNvbnRhaW5lZS5jaGlsZHJlbltjXSkpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29udGFpbnNRdWVyeVBhcmFtcyhjb250YWluZXI6IFBhcmFtcywgY29udGFpbmVlOiBQYXJhbXMpOiBib29sZWFuIHtcbiAgLy8gVE9ETzogVGhpcyBkb2VzIG5vdCBoYW5kbGUgYXJyYXkgcGFyYW1zIGNvcnJlY3RseS5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbnRhaW5lZSkubGVuZ3RoIDw9IE9iamVjdC5rZXlzKGNvbnRhaW5lcikubGVuZ3RoICYmXG4gICAgICBPYmplY3Qua2V5cyhjb250YWluZWUpLmV2ZXJ5KGtleSA9PiBlcXVhbEFycmF5c09yU3RyaW5nKGNvbnRhaW5lcltrZXldLCBjb250YWluZWVba2V5XSkpO1xufVxuXG5mdW5jdGlvbiBjb250YWluc1NlZ21lbnRHcm91cChjb250YWluZXI6IFVybFNlZ21lbnRHcm91cCwgY29udGFpbmVlOiBVcmxTZWdtZW50R3JvdXApOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvbnRhaW5zU2VnbWVudEdyb3VwSGVscGVyKGNvbnRhaW5lciwgY29udGFpbmVlLCBjb250YWluZWUuc2VnbWVudHMpO1xufVxuXG5mdW5jdGlvbiBjb250YWluc1NlZ21lbnRHcm91cEhlbHBlcihcbiAgICBjb250YWluZXI6IFVybFNlZ21lbnRHcm91cCwgY29udGFpbmVlOiBVcmxTZWdtZW50R3JvdXAsIGNvbnRhaW5lZVBhdGhzOiBVcmxTZWdtZW50W10pOiBib29sZWFuIHtcbiAgaWYgKGNvbnRhaW5lci5zZWdtZW50cy5sZW5ndGggPiBjb250YWluZWVQYXRocy5sZW5ndGgpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gY29udGFpbmVyLnNlZ21lbnRzLnNsaWNlKDAsIGNvbnRhaW5lZVBhdGhzLmxlbmd0aCk7XG4gICAgaWYgKCFlcXVhbFBhdGgoY3VycmVudCwgY29udGFpbmVlUGF0aHMpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGNvbnRhaW5lZS5oYXNDaGlsZHJlbigpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG5cbiAgfSBlbHNlIGlmIChjb250YWluZXIuc2VnbWVudHMubGVuZ3RoID09PSBjb250YWluZWVQYXRocy5sZW5ndGgpIHtcbiAgICBpZiAoIWVxdWFsUGF0aChjb250YWluZXIuc2VnbWVudHMsIGNvbnRhaW5lZVBhdGhzKSkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAoY29uc3QgYyBpbiBjb250YWluZWUuY2hpbGRyZW4pIHtcbiAgICAgIGlmICghY29udGFpbmVyLmNoaWxkcmVuW2NdKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoIWNvbnRhaW5zU2VnbWVudEdyb3VwKGNvbnRhaW5lci5jaGlsZHJlbltjXSwgY29udGFpbmVlLmNoaWxkcmVuW2NdKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcblxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBjb250YWluZWVQYXRocy5zbGljZSgwLCBjb250YWluZXIuc2VnbWVudHMubGVuZ3RoKTtcbiAgICBjb25zdCBuZXh0ID0gY29udGFpbmVlUGF0aHMuc2xpY2UoY29udGFpbmVyLnNlZ21lbnRzLmxlbmd0aCk7XG4gICAgaWYgKCFlcXVhbFBhdGgoY29udGFpbmVyLnNlZ21lbnRzLCBjdXJyZW50KSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghY29udGFpbmVyLmNoaWxkcmVuW1BSSU1BUllfT1VUTEVUXSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBjb250YWluc1NlZ21lbnRHcm91cEhlbHBlcihjb250YWluZXIuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdLCBjb250YWluZWUsIG5leHQpO1xuICB9XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogUmVwcmVzZW50cyB0aGUgcGFyc2VkIFVSTC5cbiAqXG4gKiBTaW5jZSBhIHJvdXRlciBzdGF0ZSBpcyBhIHRyZWUsIGFuZCB0aGUgVVJMIGlzIG5vdGhpbmcgYnV0IGEgc2VyaWFsaXplZCBzdGF0ZSwgdGhlIFVSTCBpcyBhXG4gKiBzZXJpYWxpemVkIHRyZWUuXG4gKiBVcmxUcmVlIGlzIGEgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBwcm92aWRlcyBhIGxvdCBvZiBhZmZvcmRhbmNlcyBpbiBkZWFsaW5nIHdpdGggVVJMc1xuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYFxuICogQENvbXBvbmVudCh7dGVtcGxhdGVVcmw6J3RlbXBsYXRlLmh0bWwnfSlcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcbiAqICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcbiAqICAgICBjb25zdCB0cmVlOiBVcmxUcmVlID1cbiAqICAgICAgIHJvdXRlci5wYXJzZVVybCgnL3RlYW0vMzMvKHVzZXIvdmljdG9yLy9zdXBwb3J0OmhlbHApP2RlYnVnPXRydWUjZnJhZ21lbnQnKTtcbiAqICAgICBjb25zdCBmID0gdHJlZS5mcmFnbWVudDsgLy8gcmV0dXJuICdmcmFnbWVudCdcbiAqICAgICBjb25zdCBxID0gdHJlZS5xdWVyeVBhcmFtczsgLy8gcmV0dXJucyB7ZGVidWc6ICd0cnVlJ31cbiAqICAgICBjb25zdCBnOiBVcmxTZWdtZW50R3JvdXAgPSB0cmVlLnJvb3QuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdO1xuICogICAgIGNvbnN0IHM6IFVybFNlZ21lbnRbXSA9IGcuc2VnbWVudHM7IC8vIHJldHVybnMgMiBzZWdtZW50cyAndGVhbScgYW5kICczMydcbiAqICAgICBnLmNoaWxkcmVuW1BSSU1BUllfT1VUTEVUXS5zZWdtZW50czsgLy8gcmV0dXJucyAyIHNlZ21lbnRzICd1c2VyJyBhbmQgJ3ZpY3RvcidcbiAqICAgICBnLmNoaWxkcmVuWydzdXBwb3J0J10uc2VnbWVudHM7IC8vIHJldHVybiAxIHNlZ21lbnQgJ2hlbHAnXG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIFVybFRyZWUge1xuICAvKiogQGludGVybmFsICovXG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBfcXVlcnlQYXJhbU1hcCE6IFBhcmFtTWFwO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgICAvKiogVGhlIHJvb3Qgc2VnbWVudCBncm91cCBvZiB0aGUgVVJMIHRyZWUgKi9cbiAgICAgIHB1YmxpYyByb290OiBVcmxTZWdtZW50R3JvdXAsXG4gICAgICAvKiogVGhlIHF1ZXJ5IHBhcmFtcyBvZiB0aGUgVVJMICovXG4gICAgICBwdWJsaWMgcXVlcnlQYXJhbXM6IFBhcmFtcyxcbiAgICAgIC8qKiBUaGUgZnJhZ21lbnQgb2YgdGhlIFVSTCAqL1xuICAgICAgcHVibGljIGZyYWdtZW50OiBzdHJpbmd8bnVsbCkge31cblxuICBnZXQgcXVlcnlQYXJhbU1hcCgpOiBQYXJhbU1hcCB7XG4gICAgaWYgKCF0aGlzLl9xdWVyeVBhcmFtTWFwKSB7XG4gICAgICB0aGlzLl9xdWVyeVBhcmFtTWFwID0gY29udmVydFRvUGFyYW1NYXAodGhpcy5xdWVyeVBhcmFtcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9xdWVyeVBhcmFtTWFwO1xuICB9XG5cbiAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gREVGQVVMVF9TRVJJQUxJWkVSLnNlcmlhbGl6ZSh0aGlzKTtcbiAgfVxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFJlcHJlc2VudHMgdGhlIHBhcnNlZCBVUkwgc2VnbWVudCBncm91cC5cbiAqXG4gKiBTZWUgYFVybFRyZWVgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIFVybFNlZ21lbnRHcm91cCB7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIF9zb3VyY2VTZWdtZW50ITogVXJsU2VnbWVudEdyb3VwO1xuICAvKiogQGludGVybmFsICovXG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBfc2VnbWVudEluZGV4U2hpZnQhOiBudW1iZXI7XG4gIC8qKiBUaGUgcGFyZW50IG5vZGUgaW4gdGhlIHVybCB0cmVlICovXG4gIHBhcmVudDogVXJsU2VnbWVudEdyb3VwfG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIFRoZSBVUkwgc2VnbWVudHMgb2YgdGhpcyBncm91cC4gU2VlIGBVcmxTZWdtZW50YCBmb3IgbW9yZSBpbmZvcm1hdGlvbiAqL1xuICAgICAgcHVibGljIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgICAvKiogVGhlIGxpc3Qgb2YgY2hpbGRyZW4gb2YgdGhpcyBncm91cCAqL1xuICAgICAgcHVibGljIGNoaWxkcmVuOiB7W2tleTogc3RyaW5nXTogVXJsU2VnbWVudEdyb3VwfSkge1xuICAgIGZvckVhY2goY2hpbGRyZW4sICh2OiBhbnksIGs6IGFueSkgPT4gdi5wYXJlbnQgPSB0aGlzKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBzZWdtZW50IGhhcyBjaGlsZCBzZWdtZW50cyAqL1xuICBoYXNDaGlsZHJlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXJPZkNoaWxkcmVuID4gMDtcbiAgfVxuXG4gIC8qKiBOdW1iZXIgb2YgY2hpbGQgc2VnbWVudHMgKi9cbiAgZ2V0IG51bWJlck9mQ2hpbGRyZW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jaGlsZHJlbikubGVuZ3RoO1xuICB9XG5cbiAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc2VyaWFsaXplUGF0aHModGhpcyk7XG4gIH1cbn1cblxuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFJlcHJlc2VudHMgYSBzaW5nbGUgVVJMIHNlZ21lbnQuXG4gKlxuICogQSBVcmxTZWdtZW50IGlzIGEgcGFydCBvZiBhIFVSTCBiZXR3ZWVuIHRoZSB0d28gc2xhc2hlcy4gSXQgY29udGFpbnMgYSBwYXRoIGFuZCB0aGUgbWF0cml4XG4gKiBwYXJhbWV0ZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2VnbWVudC5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICrCoCMjIyBFeGFtcGxlXG4gKlxuICogYGBgXG4gKiBAQ29tcG9uZW50KHt0ZW1wbGF0ZVVybDondGVtcGxhdGUuaHRtbCd9KVxuICogY2xhc3MgTXlDb21wb25lbnQge1xuICogICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlcikge1xuICogICAgIGNvbnN0IHRyZWU6IFVybFRyZWUgPSByb3V0ZXIucGFyc2VVcmwoJy90ZWFtO2lkPTMzJyk7XG4gKiAgICAgY29uc3QgZzogVXJsU2VnbWVudEdyb3VwID0gdHJlZS5yb290LmNoaWxkcmVuW1BSSU1BUllfT1VUTEVUXTtcbiAqICAgICBjb25zdCBzOiBVcmxTZWdtZW50W10gPSBnLnNlZ21lbnRzO1xuICogICAgIHNbMF0ucGF0aDsgLy8gcmV0dXJucyAndGVhbSdcbiAqICAgICBzWzBdLnBhcmFtZXRlcnM7IC8vIHJldHVybnMge2lkOiAzM31cbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgVXJsU2VnbWVudCB7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIF9wYXJhbWV0ZXJNYXAhOiBQYXJhbU1hcDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIC8qKiBUaGUgcGF0aCBwYXJ0IG9mIGEgVVJMIHNlZ21lbnQgKi9cbiAgICAgIHB1YmxpYyBwYXRoOiBzdHJpbmcsXG5cbiAgICAgIC8qKiBUaGUgbWF0cml4IHBhcmFtZXRlcnMgYXNzb2NpYXRlZCB3aXRoIGEgc2VnbWVudCAqL1xuICAgICAgcHVibGljIHBhcmFtZXRlcnM6IHtbbmFtZTogc3RyaW5nXTogc3RyaW5nfSkge31cblxuICBnZXQgcGFyYW1ldGVyTWFwKCkge1xuICAgIGlmICghdGhpcy5fcGFyYW1ldGVyTWFwKSB7XG4gICAgICB0aGlzLl9wYXJhbWV0ZXJNYXAgPSBjb252ZXJ0VG9QYXJhbU1hcCh0aGlzLnBhcmFtZXRlcnMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVyTWFwO1xuICB9XG5cbiAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc2VyaWFsaXplUGF0aCh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxTZWdtZW50cyhhczogVXJsU2VnbWVudFtdLCBiczogVXJsU2VnbWVudFtdKTogYm9vbGVhbiB7XG4gIHJldHVybiBlcXVhbFBhdGgoYXMsIGJzKSAmJiBhcy5ldmVyeSgoYSwgaSkgPT4gc2hhbGxvd0VxdWFsKGEucGFyYW1ldGVycywgYnNbaV0ucGFyYW1ldGVycykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxQYXRoKGFzOiBVcmxTZWdtZW50W10sIGJzOiBVcmxTZWdtZW50W10pOiBib29sZWFuIHtcbiAgaWYgKGFzLmxlbmd0aCAhPT0gYnMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBhcy5ldmVyeSgoYSwgaSkgPT4gYS5wYXRoID09PSBic1tpXS5wYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcENoaWxkcmVuSW50b0FycmF5PFQ+KFxuICAgIHNlZ21lbnQ6IFVybFNlZ21lbnRHcm91cCwgZm46ICh2OiBVcmxTZWdtZW50R3JvdXAsIGs6IHN0cmluZykgPT4gVFtdKTogVFtdIHtcbiAgbGV0IHJlczogVFtdID0gW107XG4gIGZvckVhY2goc2VnbWVudC5jaGlsZHJlbiwgKGNoaWxkOiBVcmxTZWdtZW50R3JvdXAsIGNoaWxkT3V0bGV0OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoY2hpbGRPdXRsZXQgPT09IFBSSU1BUllfT1VUTEVUKSB7XG4gICAgICByZXMgPSByZXMuY29uY2F0KGZuKGNoaWxkLCBjaGlsZE91dGxldCkpO1xuICAgIH1cbiAgfSk7XG4gIGZvckVhY2goc2VnbWVudC5jaGlsZHJlbiwgKGNoaWxkOiBVcmxTZWdtZW50R3JvdXAsIGNoaWxkT3V0bGV0OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoY2hpbGRPdXRsZXQgIT09IFBSSU1BUllfT1VUTEVUKSB7XG4gICAgICByZXMgPSByZXMuY29uY2F0KGZuKGNoaWxkLCBjaGlsZE91dGxldCkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXM7XG59XG5cblxuLyoqXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBTZXJpYWxpemVzIGFuZCBkZXNlcmlhbGl6ZXMgYSBVUkwgc3RyaW5nIGludG8gYSBVUkwgdHJlZS5cbiAqXG4gKiBUaGUgdXJsIHNlcmlhbGl6YXRpb24gc3RyYXRlZ3kgaXMgY3VzdG9taXphYmxlLiBZb3UgY2FuXG4gKiBtYWtlIGFsbCBVUkxzIGNhc2UgaW5zZW5zaXRpdmUgYnkgcHJvdmlkaW5nIGEgY3VzdG9tIFVybFNlcmlhbGl6ZXIuXG4gKlxuICogU2VlIGBEZWZhdWx0VXJsU2VyaWFsaXplcmAgZm9yIGFuIGV4YW1wbGUgb2YgYSBVUkwgc2VyaWFsaXplci5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVcmxTZXJpYWxpemVyIHtcbiAgLyoqIFBhcnNlIGEgdXJsIGludG8gYSBgVXJsVHJlZWAgKi9cbiAgYWJzdHJhY3QgcGFyc2UodXJsOiBzdHJpbmcpOiBVcmxUcmVlO1xuXG4gIC8qKiBDb252ZXJ0cyBhIGBVcmxUcmVlYCBpbnRvIGEgdXJsICovXG4gIGFic3RyYWN0IHNlcmlhbGl6ZSh0cmVlOiBVcmxUcmVlKTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIEEgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgYFVybFNlcmlhbGl6ZXJgLlxuICpcbiAqIEV4YW1wbGUgVVJMczpcbiAqXG4gKiBgYGBcbiAqIC9pbmJveC8zMyhwb3B1cDpjb21wb3NlKVxuICogL2luYm94LzMzO29wZW49dHJ1ZS9tZXNzYWdlcy80NFxuICogYGBgXG4gKlxuICogRGVmYXVsdFVybFNlcmlhbGl6ZXIgdXNlcyBwYXJlbnRoZXNlcyB0byBzZXJpYWxpemUgc2Vjb25kYXJ5IHNlZ21lbnRzIChlLmcuLCBwb3B1cDpjb21wb3NlKSwgdGhlXG4gKiBjb2xvbiBzeW50YXggdG8gc3BlY2lmeSB0aGUgb3V0bGV0LCBhbmQgdGhlICc7cGFyYW1ldGVyPXZhbHVlJyBzeW50YXggKGUuZy4sIG9wZW49dHJ1ZSkgdG9cbiAqIHNwZWNpZnkgcm91dGUgc3BlY2lmaWMgcGFyYW1ldGVycy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWZhdWx0VXJsU2VyaWFsaXplciBpbXBsZW1lbnRzIFVybFNlcmlhbGl6ZXIge1xuICAvKiogUGFyc2VzIGEgdXJsIGludG8gYSBgVXJsVHJlZWAgKi9cbiAgcGFyc2UodXJsOiBzdHJpbmcpOiBVcmxUcmVlIHtcbiAgICBjb25zdCBwID0gbmV3IFVybFBhcnNlcih1cmwpO1xuICAgIHJldHVybiBuZXcgVXJsVHJlZShwLnBhcnNlUm9vdFNlZ21lbnQoKSwgcC5wYXJzZVF1ZXJ5UGFyYW1zKCksIHAucGFyc2VGcmFnbWVudCgpKTtcbiAgfVxuXG4gIC8qKiBDb252ZXJ0cyBhIGBVcmxUcmVlYCBpbnRvIGEgdXJsICovXG4gIHNlcmlhbGl6ZSh0cmVlOiBVcmxUcmVlKTogc3RyaW5nIHtcbiAgICBjb25zdCBzZWdtZW50ID0gYC8ke3NlcmlhbGl6ZVNlZ21lbnQodHJlZS5yb290LCB0cnVlKX1gO1xuICAgIGNvbnN0IHF1ZXJ5ID0gc2VyaWFsaXplUXVlcnlQYXJhbXModHJlZS5xdWVyeVBhcmFtcyk7XG4gICAgY29uc3QgZnJhZ21lbnQgPVxuICAgICAgICB0eXBlb2YgdHJlZS5mcmFnbWVudCA9PT0gYHN0cmluZ2AgPyBgIyR7ZW5jb2RlVXJpRnJhZ21lbnQodHJlZS5mcmFnbWVudCEpfWAgOiAnJztcblxuICAgIHJldHVybiBgJHtzZWdtZW50fSR7cXVlcnl9JHtmcmFnbWVudH1gO1xuICB9XG59XG5cbmNvbnN0IERFRkFVTFRfU0VSSUFMSVpFUiA9IG5ldyBEZWZhdWx0VXJsU2VyaWFsaXplcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplUGF0aHMoc2VnbWVudDogVXJsU2VnbWVudEdyb3VwKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQuc2VnbWVudHMubWFwKHAgPT4gc2VyaWFsaXplUGF0aChwKSkuam9pbignLycpO1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVTZWdtZW50KHNlZ21lbnQ6IFVybFNlZ21lbnRHcm91cCwgcm9vdDogYm9vbGVhbik6IHN0cmluZyB7XG4gIGlmICghc2VnbWVudC5oYXNDaGlsZHJlbigpKSB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZVBhdGhzKHNlZ21lbnQpO1xuICB9XG5cbiAgaWYgKHJvb3QpIHtcbiAgICBjb25zdCBwcmltYXJ5ID0gc2VnbWVudC5jaGlsZHJlbltQUklNQVJZX09VVExFVF0gP1xuICAgICAgICBzZXJpYWxpemVTZWdtZW50KHNlZ21lbnQuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdLCBmYWxzZSkgOlxuICAgICAgICAnJztcbiAgICBjb25zdCBjaGlsZHJlbjogc3RyaW5nW10gPSBbXTtcblxuICAgIGZvckVhY2goc2VnbWVudC5jaGlsZHJlbiwgKHY6IFVybFNlZ21lbnRHcm91cCwgazogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoayAhPT0gUFJJTUFSWV9PVVRMRVQpIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChgJHtrfToke3NlcmlhbGl6ZVNlZ21lbnQodiwgZmFsc2UpfWApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuLmxlbmd0aCA+IDAgPyBgJHtwcmltYXJ5fSgke2NoaWxkcmVuLmpvaW4oJy8vJyl9KWAgOiBwcmltYXJ5O1xuXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBtYXBDaGlsZHJlbkludG9BcnJheShzZWdtZW50LCAodjogVXJsU2VnbWVudEdyb3VwLCBrOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChrID09PSBQUklNQVJZX09VVExFVCkge1xuICAgICAgICByZXR1cm4gW3NlcmlhbGl6ZVNlZ21lbnQoc2VnbWVudC5jaGlsZHJlbltQUklNQVJZX09VVExFVF0sIGZhbHNlKV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbYCR7a306JHtzZXJpYWxpemVTZWdtZW50KHYsIGZhbHNlKX1gXTtcbiAgICB9KTtcblxuICAgIHJldHVybiBgJHtzZXJpYWxpemVQYXRocyhzZWdtZW50KX0vKCR7Y2hpbGRyZW4uam9pbignLy8nKX0pYDtcbiAgfVxufVxuXG4vKipcbiAqIEVuY29kZXMgYSBVUkkgc3RyaW5nIHdpdGggdGhlIGRlZmF1bHQgZW5jb2RpbmcuIFRoaXMgZnVuY3Rpb24gd2lsbCBvbmx5IGV2ZXIgYmUgY2FsbGVkIGZyb21cbiAqIGBlbmNvZGVVcmlRdWVyeWAgb3IgYGVuY29kZVVyaVNlZ21lbnRgIGFzIGl0J3MgdGhlIGJhc2Ugc2V0IG9mIGVuY29kaW5ncyB0byBiZSB1c2VkLiBXZSBuZWVkXG4gKiBhIGN1c3RvbSBlbmNvZGluZyBiZWNhdXNlIGVuY29kZVVSSUNvbXBvbmVudCBpcyB0b28gYWdncmVzc2l2ZSBhbmQgZW5jb2RlcyBzdHVmZiB0aGF0IGRvZXNuJ3RcbiAqIGhhdmUgdG8gYmUgZW5jb2RlZCBwZXIgaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLlxuICovXG5mdW5jdGlvbiBlbmNvZGVVcmlTdHJpbmcoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzKVxuICAgICAgLnJlcGxhY2UoLyU0MC9nLCAnQCcpXG4gICAgICAucmVwbGFjZSgvJTNBL2dpLCAnOicpXG4gICAgICAucmVwbGFjZSgvJTI0L2csICckJylcbiAgICAgIC5yZXBsYWNlKC8lMkMvZ2ksICcsJyk7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgdXNlZCB0byBlbmNvZGUgYm90aCBrZXlzIGFuZCB2YWx1ZXMgaW4gYSBxdWVyeSBzdHJpbmcga2V5L3ZhbHVlLiBJblxuICogdGhlIGZvbGxvd2luZyBVUkwsIHlvdSBuZWVkIHRvIGNhbGwgZW5jb2RlVXJpUXVlcnkgb24gXCJrXCIgYW5kIFwidlwiOlxuICpcbiAqIGh0dHA6Ly93d3cuc2l0ZS5vcmcvaHRtbDttaz1tdj9rPXYjZlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlVXJpUXVlcnkoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVuY29kZVVyaVN0cmluZyhzKS5yZXBsYWNlKC8lM0IvZ2ksICc7Jyk7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgdXNlZCB0byBlbmNvZGUgYSBVUkwgZnJhZ21lbnQuIEluIHRoZSBmb2xsb3dpbmcgVVJMLCB5b3UgbmVlZCB0byBjYWxsXG4gKiBlbmNvZGVVcmlGcmFnbWVudCBvbiBcImZcIjpcbiAqXG4gKiBodHRwOi8vd3d3LnNpdGUub3JnL2h0bWw7bWs9bXY/az12I2ZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVVyaUZyYWdtZW50KHM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBlbmNvZGVVUkkocyk7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgcnVuIG9uIGFueSBVUkkgc2VnbWVudCBhcyB3ZWxsIGFzIHRoZSBrZXkgYW5kIHZhbHVlIGluIGEga2V5L3ZhbHVlXG4gKiBwYWlyIGZvciBtYXRyaXggcGFyYW1zLiBJbiB0aGUgZm9sbG93aW5nIFVSTCwgeW91IG5lZWQgdG8gY2FsbCBlbmNvZGVVcmlTZWdtZW50IG9uIFwiaHRtbFwiLFxuICogXCJta1wiLCBhbmQgXCJtdlwiOlxuICpcbiAqIGh0dHA6Ly93d3cuc2l0ZS5vcmcvaHRtbDttaz1tdj9rPXYjZlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlVXJpU2VnbWVudChzOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gZW5jb2RlVXJpU3RyaW5nKHMpLnJlcGxhY2UoL1xcKC9nLCAnJTI4JykucmVwbGFjZSgvXFwpL2csICclMjknKS5yZXBsYWNlKC8lMjYvZ2ksICcmJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGUoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzKTtcbn1cblxuLy8gUXVlcnkga2V5cy92YWx1ZXMgc2hvdWxkIGhhdmUgdGhlIFwiK1wiIHJlcGxhY2VkIGZpcnN0LCBhcyBcIitcIiBpbiBhIHF1ZXJ5IHN0cmluZyBpcyBcIiBcIi5cbi8vIGRlY29kZVVSSUNvbXBvbmVudCBmdW5jdGlvbiB3aWxsIG5vdCBkZWNvZGUgXCIrXCIgYXMgYSBzcGFjZS5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVRdWVyeShzOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gZGVjb2RlKHMucmVwbGFjZSgvXFwrL2csICclMjAnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVQYXRoKHBhdGg6IFVybFNlZ21lbnQpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7ZW5jb2RlVXJpU2VnbWVudChwYXRoLnBhdGgpfSR7c2VyaWFsaXplTWF0cml4UGFyYW1zKHBhdGgucGFyYW1ldGVycyl9YDtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplTWF0cml4UGFyYW1zKHBhcmFtczoge1trZXk6IHN0cmluZ106IHN0cmluZ30pOiBzdHJpbmcge1xuICByZXR1cm4gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgICAgLm1hcChrZXkgPT4gYDske2VuY29kZVVyaVNlZ21lbnQoa2V5KX09JHtlbmNvZGVVcmlTZWdtZW50KHBhcmFtc1trZXldKX1gKVxuICAgICAgLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVRdWVyeVBhcmFtcyhwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogc3RyaW5nIHtcbiAgY29uc3Qgc3RyUGFyYW1zOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHBhcmFtcykubWFwKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJhbXNbbmFtZV07XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID9cbiAgICAgICAgdmFsdWUubWFwKHYgPT4gYCR7ZW5jb2RlVXJpUXVlcnkobmFtZSl9PSR7ZW5jb2RlVXJpUXVlcnkodil9YCkuam9pbignJicpIDpcbiAgICAgICAgYCR7ZW5jb2RlVXJpUXVlcnkobmFtZSl9PSR7ZW5jb2RlVXJpUXVlcnkodmFsdWUpfWA7XG4gIH0pO1xuXG4gIHJldHVybiBzdHJQYXJhbXMubGVuZ3RoID8gYD8ke3N0clBhcmFtcy5qb2luKCcmJyl9YCA6ICcnO1xufVxuXG5jb25zdCBTRUdNRU5UX1JFID0gL15bXlxcLygpPzs9I10rLztcbmZ1bmN0aW9uIG1hdGNoU2VnbWVudHMoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaChTRUdNRU5UX1JFKTtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMF0gOiAnJztcbn1cblxuY29uc3QgUVVFUllfUEFSQU1fUkUgPSAvXltePT8mI10rLztcbi8vIFJldHVybiB0aGUgbmFtZSBvZiB0aGUgcXVlcnkgcGFyYW0gYXQgdGhlIHN0YXJ0IG9mIHRoZSBzdHJpbmcgb3IgYW4gZW1wdHkgc3RyaW5nXG5mdW5jdGlvbiBtYXRjaFF1ZXJ5UGFyYW1zKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgbWF0Y2ggPSBzdHIubWF0Y2goUVVFUllfUEFSQU1fUkUpO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFswXSA6ICcnO1xufVxuXG5jb25zdCBRVUVSWV9QQVJBTV9WQUxVRV9SRSA9IC9eW14/JiNdKy87XG4vLyBSZXR1cm4gdGhlIHZhbHVlIG9mIHRoZSBxdWVyeSBwYXJhbSBhdCB0aGUgc3RhcnQgb2YgdGhlIHN0cmluZyBvciBhbiBlbXB0eSBzdHJpbmdcbmZ1bmN0aW9uIG1hdGNoVXJsUXVlcnlQYXJhbVZhbHVlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgbWF0Y2ggPSBzdHIubWF0Y2goUVVFUllfUEFSQU1fVkFMVUVfUkUpO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFswXSA6ICcnO1xufVxuXG5jbGFzcyBVcmxQYXJzZXIge1xuICBwcml2YXRlIHJlbWFpbmluZzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlbWFpbmluZyA9IHVybDtcbiAgfVxuXG4gIHBhcnNlUm9vdFNlZ21lbnQoKTogVXJsU2VnbWVudEdyb3VwIHtcbiAgICB0aGlzLmNvbnN1bWVPcHRpb25hbCgnLycpO1xuXG4gICAgaWYgKHRoaXMucmVtYWluaW5nID09PSAnJyB8fCB0aGlzLnBlZWtTdGFydHNXaXRoKCc/JykgfHwgdGhpcy5wZWVrU3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICByZXR1cm4gbmV3IFVybFNlZ21lbnRHcm91cChbXSwge30pO1xuICAgIH1cblxuICAgIC8vIFRoZSByb290IHNlZ21lbnQgZ3JvdXAgbmV2ZXIgaGFzIHNlZ21lbnRzXG4gICAgcmV0dXJuIG5ldyBVcmxTZWdtZW50R3JvdXAoW10sIHRoaXMucGFyc2VDaGlsZHJlbigpKTtcbiAgfVxuXG4gIHBhcnNlUXVlcnlQYXJhbXMoKTogUGFyYW1zIHtcbiAgICBjb25zdCBwYXJhbXM6IFBhcmFtcyA9IHt9O1xuICAgIGlmICh0aGlzLmNvbnN1bWVPcHRpb25hbCgnPycpKSB7XG4gICAgICBkbyB7XG4gICAgICAgIHRoaXMucGFyc2VRdWVyeVBhcmFtKHBhcmFtcyk7XG4gICAgICB9IHdoaWxlICh0aGlzLmNvbnN1bWVPcHRpb25hbCgnJicpKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIHBhcnNlRnJhZ21lbnQoKTogc3RyaW5nfG51bGwge1xuICAgIHJldHVybiB0aGlzLmNvbnN1bWVPcHRpb25hbCgnIycpID8gZGVjb2RlVVJJQ29tcG9uZW50KHRoaXMucmVtYWluaW5nKSA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlQ2hpbGRyZW4oKToge1tvdXRsZXQ6IHN0cmluZ106IFVybFNlZ21lbnRHcm91cH0ge1xuICAgIGlmICh0aGlzLnJlbWFpbmluZyA9PT0gJycpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnN1bWVPcHRpb25hbCgnLycpO1xuXG4gICAgY29uc3Qgc2VnbWVudHM6IFVybFNlZ21lbnRbXSA9IFtdO1xuICAgIGlmICghdGhpcy5wZWVrU3RhcnRzV2l0aCgnKCcpKSB7XG4gICAgICBzZWdtZW50cy5wdXNoKHRoaXMucGFyc2VTZWdtZW50KCkpO1xuICAgIH1cblxuICAgIHdoaWxlICh0aGlzLnBlZWtTdGFydHNXaXRoKCcvJykgJiYgIXRoaXMucGVla1N0YXJ0c1dpdGgoJy8vJykgJiYgIXRoaXMucGVla1N0YXJ0c1dpdGgoJy8oJykpIHtcbiAgICAgIHRoaXMuY2FwdHVyZSgnLycpO1xuICAgICAgc2VnbWVudHMucHVzaCh0aGlzLnBhcnNlU2VnbWVudCgpKTtcbiAgICB9XG5cbiAgICBsZXQgY2hpbGRyZW46IHtbb3V0bGV0OiBzdHJpbmddOiBVcmxTZWdtZW50R3JvdXB9ID0ge307XG4gICAgaWYgKHRoaXMucGVla1N0YXJ0c1dpdGgoJy8oJykpIHtcbiAgICAgIHRoaXMuY2FwdHVyZSgnLycpO1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLnBhcnNlUGFyZW5zKHRydWUpO1xuICAgIH1cblxuICAgIGxldCByZXM6IHtbb3V0bGV0OiBzdHJpbmddOiBVcmxTZWdtZW50R3JvdXB9ID0ge307XG4gICAgaWYgKHRoaXMucGVla1N0YXJ0c1dpdGgoJygnKSkge1xuICAgICAgcmVzID0gdGhpcy5wYXJzZVBhcmVucyhmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDAgfHwgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmxlbmd0aCA+IDApIHtcbiAgICAgIHJlc1tQUklNQVJZX09VVExFVF0gPSBuZXcgVXJsU2VnbWVudEdyb3VwKHNlZ21lbnRzLCBjaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8vIHBhcnNlIGEgc2VnbWVudCB3aXRoIGl0cyBtYXRyaXggcGFyYW1ldGVyc1xuICAvLyBpZSBgbmFtZTtrMT12MTtrMmBcbiAgcHJpdmF0ZSBwYXJzZVNlZ21lbnQoKTogVXJsU2VnbWVudCB7XG4gICAgY29uc3QgcGF0aCA9IG1hdGNoU2VnbWVudHModGhpcy5yZW1haW5pbmcpO1xuICAgIGlmIChwYXRoID09PSAnJyAmJiB0aGlzLnBlZWtTdGFydHNXaXRoKCc7JykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRW1wdHkgcGF0aCB1cmwgc2VnbWVudCBjYW5ub3QgaGF2ZSBwYXJhbWV0ZXJzOiAnJHt0aGlzLnJlbWFpbmluZ30nLmApO1xuICAgIH1cblxuICAgIHRoaXMuY2FwdHVyZShwYXRoKTtcbiAgICByZXR1cm4gbmV3IFVybFNlZ21lbnQoZGVjb2RlKHBhdGgpLCB0aGlzLnBhcnNlTWF0cml4UGFyYW1zKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZU1hdHJpeFBhcmFtcygpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgY29uc3QgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9O1xuICAgIHdoaWxlICh0aGlzLmNvbnN1bWVPcHRpb25hbCgnOycpKSB7XG4gICAgICB0aGlzLnBhcnNlUGFyYW0ocGFyYW1zKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VQYXJhbShwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogdm9pZCB7XG4gICAgY29uc3Qga2V5ID0gbWF0Y2hTZWdtZW50cyh0aGlzLnJlbWFpbmluZyk7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jYXB0dXJlKGtleSk7XG4gICAgbGV0IHZhbHVlOiBhbnkgPSAnJztcbiAgICBpZiAodGhpcy5jb25zdW1lT3B0aW9uYWwoJz0nKSkge1xuICAgICAgY29uc3QgdmFsdWVNYXRjaCA9IG1hdGNoU2VnbWVudHModGhpcy5yZW1haW5pbmcpO1xuICAgICAgaWYgKHZhbHVlTWF0Y2gpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZU1hdGNoO1xuICAgICAgICB0aGlzLmNhcHR1cmUodmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcmFtc1tkZWNvZGUoa2V5KV0gPSBkZWNvZGUodmFsdWUpO1xuICB9XG5cbiAgLy8gUGFyc2UgYSBzaW5nbGUgcXVlcnkgcGFyYW1ldGVyIGBuYW1lWz12YWx1ZV1gXG4gIHByaXZhdGUgcGFyc2VRdWVyeVBhcmFtKHBhcmFtczogUGFyYW1zKTogdm9pZCB7XG4gICAgY29uc3Qga2V5ID0gbWF0Y2hRdWVyeVBhcmFtcyh0aGlzLnJlbWFpbmluZyk7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jYXB0dXJlKGtleSk7XG4gICAgbGV0IHZhbHVlOiBhbnkgPSAnJztcbiAgICBpZiAodGhpcy5jb25zdW1lT3B0aW9uYWwoJz0nKSkge1xuICAgICAgY29uc3QgdmFsdWVNYXRjaCA9IG1hdGNoVXJsUXVlcnlQYXJhbVZhbHVlKHRoaXMucmVtYWluaW5nKTtcbiAgICAgIGlmICh2YWx1ZU1hdGNoKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVNYXRjaDtcbiAgICAgICAgdGhpcy5jYXB0dXJlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGVkS2V5ID0gZGVjb2RlUXVlcnkoa2V5KTtcbiAgICBjb25zdCBkZWNvZGVkVmFsID0gZGVjb2RlUXVlcnkodmFsdWUpO1xuXG4gICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShkZWNvZGVkS2V5KSkge1xuICAgICAgLy8gQXBwZW5kIHRvIGV4aXN0aW5nIHZhbHVlc1xuICAgICAgbGV0IGN1cnJlbnRWYWwgPSBwYXJhbXNbZGVjb2RlZEtleV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY3VycmVudFZhbCkpIHtcbiAgICAgICAgY3VycmVudFZhbCA9IFtjdXJyZW50VmFsXTtcbiAgICAgICAgcGFyYW1zW2RlY29kZWRLZXldID0gY3VycmVudFZhbDtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRWYWwucHVzaChkZWNvZGVkVmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3JlYXRlIGEgbmV3IHZhbHVlXG4gICAgICBwYXJhbXNbZGVjb2RlZEtleV0gPSBkZWNvZGVkVmFsO1xuICAgIH1cbiAgfVxuXG4gIC8vIHBhcnNlIGAoYS9iLy9vdXRsZXRfbmFtZTpjL2QpYFxuICBwcml2YXRlIHBhcnNlUGFyZW5zKGFsbG93UHJpbWFyeTogYm9vbGVhbik6IHtbb3V0bGV0OiBzdHJpbmddOiBVcmxTZWdtZW50R3JvdXB9IHtcbiAgICBjb25zdCBzZWdtZW50czoge1trZXk6IHN0cmluZ106IFVybFNlZ21lbnRHcm91cH0gPSB7fTtcbiAgICB0aGlzLmNhcHR1cmUoJygnKTtcblxuICAgIHdoaWxlICghdGhpcy5jb25zdW1lT3B0aW9uYWwoJyknKSAmJiB0aGlzLnJlbWFpbmluZy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBwYXRoID0gbWF0Y2hTZWdtZW50cyh0aGlzLnJlbWFpbmluZyk7XG5cbiAgICAgIGNvbnN0IG5leHQgPSB0aGlzLnJlbWFpbmluZ1twYXRoLmxlbmd0aF07XG5cbiAgICAgIC8vIGlmIGlzIGlzIG5vdCBvbmUgb2YgdGhlc2UgY2hhcmFjdGVycywgdGhlbiB0aGUgc2VnbWVudCB3YXMgdW5lc2NhcGVkXG4gICAgICAvLyBvciB0aGUgZ3JvdXAgd2FzIG5vdCBjbG9zZWRcbiAgICAgIGlmIChuZXh0ICE9PSAnLycgJiYgbmV4dCAhPT0gJyknICYmIG5leHQgIT09ICc7Jykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBwYXJzZSB1cmwgJyR7dGhpcy51cmx9J2ApO1xuICAgICAgfVxuXG4gICAgICBsZXQgb3V0bGV0TmFtZTogc3RyaW5nID0gdW5kZWZpbmVkITtcbiAgICAgIGlmIChwYXRoLmluZGV4T2YoJzonKSA+IC0xKSB7XG4gICAgICAgIG91dGxldE5hbWUgPSBwYXRoLnN1YnN0cigwLCBwYXRoLmluZGV4T2YoJzonKSk7XG4gICAgICAgIHRoaXMuY2FwdHVyZShvdXRsZXROYW1lKTtcbiAgICAgICAgdGhpcy5jYXB0dXJlKCc6Jyk7XG4gICAgICB9IGVsc2UgaWYgKGFsbG93UHJpbWFyeSkge1xuICAgICAgICBvdXRsZXROYW1lID0gUFJJTUFSWV9PVVRMRVQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5wYXJzZUNoaWxkcmVuKCk7XG4gICAgICBzZWdtZW50c1tvdXRsZXROYW1lXSA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKS5sZW5ndGggPT09IDEgPyBjaGlsZHJlbltQUklNQVJZX09VVExFVF0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFVybFNlZ21lbnRHcm91cChbXSwgY2hpbGRyZW4pO1xuICAgICAgdGhpcy5jb25zdW1lT3B0aW9uYWwoJy8vJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlZ21lbnRzO1xuICB9XG5cbiAgcHJpdmF0ZSBwZWVrU3RhcnRzV2l0aChzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZy5zdGFydHNXaXRoKHN0cik7XG4gIH1cblxuICAvLyBDb25zdW1lcyB0aGUgcHJlZml4IHdoZW4gaXQgaXMgcHJlc2VudCBhbmQgcmV0dXJucyB3aGV0aGVyIGl0IGhhcyBiZWVuIGNvbnN1bWVkXG4gIHByaXZhdGUgY29uc3VtZU9wdGlvbmFsKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMucGVla1N0YXJ0c1dpdGgoc3RyKSkge1xuICAgICAgdGhpcy5yZW1haW5pbmcgPSB0aGlzLnJlbWFpbmluZy5zdWJzdHJpbmcoc3RyLmxlbmd0aCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjYXB0dXJlKHN0cjogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNvbnN1bWVPcHRpb25hbChzdHIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIFwiJHtzdHJ9XCIuYCk7XG4gICAgfVxuICB9XG59XG4iXX0=