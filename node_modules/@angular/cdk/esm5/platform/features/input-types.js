/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Cached result Set of input types support by the current browser. */
var supportedInputTypes;
/** Types of `<input>` that *might* be supported. */
var candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/** @returns The input types supported by this browser. */
export function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    var featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3BsYXRmb3JtL2ZlYXR1cmVzL2lucHV0LXR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILHVFQUF1RTtBQUN2RSxJQUFJLG1CQUFnQyxDQUFDO0FBRXJDLG9EQUFvRDtBQUNwRCxJQUFNLG1CQUFtQixHQUFHO0lBQzFCLDRGQUE0RjtJQUM1Rix1Q0FBdUM7SUFDdkMsa0VBQWtFO0lBQ2xFLDhFQUE4RTtJQUM5RSxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixNQUFNO0lBQ04sZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxNQUFNO0lBQ04sUUFBUTtJQUNSLE9BQU87SUFDUCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxRQUFRO0lBQ1IsUUFBUTtJQUNSLEtBQUs7SUFDTCxNQUFNO0lBQ04sTUFBTTtJQUNOLEtBQUs7SUFDTCxNQUFNO0NBQ1AsQ0FBQztBQUVGLDBEQUEwRDtBQUMxRCxNQUFNLFVBQVUsc0JBQXNCO0lBQ3BDLG9CQUFvQjtJQUNwQixJQUFJLG1CQUFtQixFQUFFO1FBQ3ZCLE9BQU8sbUJBQW1CLENBQUM7S0FDNUI7SUFFRCwyRkFBMkY7SUFDM0YsMkZBQTJGO0lBQzNGLDhDQUE4QztJQUM5QyxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUM3QyxtQkFBbUIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sbUJBQW1CLENBQUM7S0FDNUI7SUFFRCxJQUFJLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkQsbUJBQW1CLEdBQUcsSUFBSSxHQUFHLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSztRQUM1RCxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRUosT0FBTyxtQkFBbUIsQ0FBQztBQUM3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKiBDYWNoZWQgcmVzdWx0IFNldCBvZiBpbnB1dCB0eXBlcyBzdXBwb3J0IGJ5IHRoZSBjdXJyZW50IGJyb3dzZXIuICovXG5sZXQgc3VwcG9ydGVkSW5wdXRUeXBlczogU2V0PHN0cmluZz47XG5cbi8qKiBUeXBlcyBvZiBgPGlucHV0PmAgdGhhdCAqbWlnaHQqIGJlIHN1cHBvcnRlZC4gKi9cbmNvbnN0IGNhbmRpZGF0ZUlucHV0VHlwZXMgPSBbXG4gIC8vIGBjb2xvcmAgbXVzdCBjb21lIGZpcnN0LiBDaHJvbWUgNTYgc2hvd3MgYSB3YXJuaW5nIGlmIHdlIGNoYW5nZSB0aGUgdHlwZSB0byBgY29sb3JgIGFmdGVyXG4gIC8vIGZpcnN0IGNoYW5naW5nIGl0IHRvIHNvbWV0aGluZyBlbHNlOlxuICAvLyBUaGUgc3BlY2lmaWVkIHZhbHVlIFwiXCIgZG9lcyBub3QgY29uZm9ybSB0byB0aGUgcmVxdWlyZWQgZm9ybWF0LlxuICAvLyBUaGUgZm9ybWF0IGlzIFwiI3JyZ2diYlwiIHdoZXJlIHJyLCBnZywgYmIgYXJlIHR3by1kaWdpdCBoZXhhZGVjaW1hbCBudW1iZXJzLlxuICAnY29sb3InLFxuICAnYnV0dG9uJyxcbiAgJ2NoZWNrYm94JyxcbiAgJ2RhdGUnLFxuICAnZGF0ZXRpbWUtbG9jYWwnLFxuICAnZW1haWwnLFxuICAnZmlsZScsXG4gICdoaWRkZW4nLFxuICAnaW1hZ2UnLFxuICAnbW9udGgnLFxuICAnbnVtYmVyJyxcbiAgJ3Bhc3N3b3JkJyxcbiAgJ3JhZGlvJyxcbiAgJ3JhbmdlJyxcbiAgJ3Jlc2V0JyxcbiAgJ3NlYXJjaCcsXG4gICdzdWJtaXQnLFxuICAndGVsJyxcbiAgJ3RleHQnLFxuICAndGltZScsXG4gICd1cmwnLFxuICAnd2VlaycsXG5dO1xuXG4vKiogQHJldHVybnMgVGhlIGlucHV0IHR5cGVzIHN1cHBvcnRlZCBieSB0aGlzIGJyb3dzZXIuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3VwcG9ydGVkSW5wdXRUeXBlcygpOiBTZXQ8c3RyaW5nPiB7XG4gIC8vIFJlc3VsdCBpcyBjYWNoZWQuXG4gIGlmIChzdXBwb3J0ZWRJbnB1dFR5cGVzKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRlZElucHV0VHlwZXM7XG4gIH1cblxuICAvLyBXZSBjYW4ndCBjaGVjayBpZiBhbiBpbnB1dCB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQgdW50aWwgd2UncmUgb24gdGhlIGJyb3dzZXIsIHNvIHNheSB0aGF0XG4gIC8vIGV2ZXJ5dGhpbmcgaXMgc3VwcG9ydGVkIHdoZW4gbm90IG9uIHRoZSBicm93c2VyLiBXZSBkb24ndCB1c2UgYFBsYXRmb3JtYCBoZXJlIHNpbmNlIGl0J3NcbiAgLy8ganVzdCBhIGhlbHBlciBmdW5jdGlvbiBhbmQgY2FuJ3QgaW5qZWN0IGl0LlxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAnb2JqZWN0JyB8fCAhZG9jdW1lbnQpIHtcbiAgICBzdXBwb3J0ZWRJbnB1dFR5cGVzID0gbmV3IFNldChjYW5kaWRhdGVJbnB1dFR5cGVzKTtcbiAgICByZXR1cm4gc3VwcG9ydGVkSW5wdXRUeXBlcztcbiAgfVxuXG4gIGxldCBmZWF0dXJlVGVzdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc3VwcG9ydGVkSW5wdXRUeXBlcyA9IG5ldyBTZXQoY2FuZGlkYXRlSW5wdXRUeXBlcy5maWx0ZXIodmFsdWUgPT4ge1xuICAgIGZlYXR1cmVUZXN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdmFsdWUpO1xuICAgIHJldHVybiBmZWF0dXJlVGVzdElucHV0LnR5cGUgPT09IHZhbHVlO1xuICB9KSk7XG5cbiAgcmV0dXJuIHN1cHBvcnRlZElucHV0VHlwZXM7XG59XG4iXX0=