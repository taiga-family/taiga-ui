/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export function stringify(token) {
    if (typeof token === 'string') {
        return token;
    }
    if (Array.isArray(token)) {
        return '[' + token.map(stringify).join(', ') + ']';
    }
    if (token == null) {
        return '' + token;
    }
    if (token.overriddenName) {
        return `${token.overriddenName}`;
    }
    if (token.name) {
        return `${token.name}`;
    }
    const res = token.toString();
    if (res == null) {
        return '' + res;
    }
    const newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
/**
 * Concatenates two strings with separator, allocating new strings only when necessary.
 *
 * @param before before string.
 * @param separator separator string.
 * @param after after string.
 * @returns concatenated string.
 */
export function concatStringsWithSpace(before, after) {
    return (before == null || before === '') ?
        (after === null ? '' : after) :
        ((after == null || after === '') ? before : before + ' ' + after);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5naWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvdXRpbC9zdHJpbmdpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFVO0lBQ2xDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDeEIsT0FBTyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ3BEO0lBRUQsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2pCLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQztLQUNuQjtJQUVELElBQUksS0FBSyxDQUFDLGNBQWMsRUFBRTtRQUN4QixPQUFPLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ2xDO0lBRUQsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ2QsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN4QjtJQUVELE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUU3QixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDZixPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUM7S0FDakI7SUFFRCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3BFLENBQUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLHNCQUFzQixDQUFDLE1BQW1CLEVBQUUsS0FBa0I7SUFDNUUsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDeEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeSh0b2tlbjogYW55KTogc3RyaW5nIHtcbiAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbikpIHtcbiAgICByZXR1cm4gJ1snICsgdG9rZW4ubWFwKHN0cmluZ2lmeSkuam9pbignLCAnKSArICddJztcbiAgfVxuXG4gIGlmICh0b2tlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnICsgdG9rZW47XG4gIH1cblxuICBpZiAodG9rZW4ub3ZlcnJpZGRlbk5hbWUpIHtcbiAgICByZXR1cm4gYCR7dG9rZW4ub3ZlcnJpZGRlbk5hbWV9YDtcbiAgfVxuXG4gIGlmICh0b2tlbi5uYW1lKSB7XG4gICAgcmV0dXJuIGAke3Rva2VuLm5hbWV9YDtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IHRva2VuLnRvU3RyaW5nKCk7XG5cbiAgaWYgKHJlcyA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnICsgcmVzO1xuICB9XG5cbiAgY29uc3QgbmV3TGluZUluZGV4ID0gcmVzLmluZGV4T2YoJ1xcbicpO1xuICByZXR1cm4gbmV3TGluZUluZGV4ID09PSAtMSA/IHJlcyA6IHJlcy5zdWJzdHJpbmcoMCwgbmV3TGluZUluZGV4KTtcbn1cblxuLyoqXG4gKiBDb25jYXRlbmF0ZXMgdHdvIHN0cmluZ3Mgd2l0aCBzZXBhcmF0b3IsIGFsbG9jYXRpbmcgbmV3IHN0cmluZ3Mgb25seSB3aGVuIG5lY2Vzc2FyeS5cbiAqXG4gKiBAcGFyYW0gYmVmb3JlIGJlZm9yZSBzdHJpbmcuXG4gKiBAcGFyYW0gc2VwYXJhdG9yIHNlcGFyYXRvciBzdHJpbmcuXG4gKiBAcGFyYW0gYWZ0ZXIgYWZ0ZXIgc3RyaW5nLlxuICogQHJldHVybnMgY29uY2F0ZW5hdGVkIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdFN0cmluZ3NXaXRoU3BhY2UoYmVmb3JlOiBzdHJpbmd8bnVsbCwgYWZ0ZXI6IHN0cmluZ3xudWxsKTogc3RyaW5nIHtcbiAgcmV0dXJuIChiZWZvcmUgPT0gbnVsbCB8fCBiZWZvcmUgPT09ICcnKSA/XG4gICAgICAoYWZ0ZXIgPT09IG51bGwgPyAnJyA6IGFmdGVyKSA6XG4gICAgICAoKGFmdGVyID09IG51bGwgfHwgYWZ0ZXIgPT09ICcnKSA/IGJlZm9yZSA6IGJlZm9yZSArICcgJyArIGFmdGVyKTtcbn1cbiJdfQ==