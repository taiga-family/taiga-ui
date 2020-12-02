var globalScope;
if (typeof window === 'undefined') {
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
        globalScope = self;
    }
    else {
        globalScope = global;
    }
}
else {
    globalScope = window;
}
// Need to declare a new variable for global here since TypeScript
// exports the original value of the symbol.
var _global = globalScope;
export { _global as global };
export function isPresent(obj) {
    return obj != null;
}
export function stringify(token) {
    if (typeof token === 'string') {
        return token;
    }
    if (token == null) {
        return '' + token;
    }
    if (token.overriddenName) {
        return "" + token.overriddenName;
    }
    if (token.name) {
        return "" + token.name;
    }
    var res = token.toString();
    var newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
var DebugContext = /** @class */ (function () {
    function DebugContext() {
    }
    return DebugContext;
}());
export { DebugContext };
//# sourceMappingURL=lang.js.map