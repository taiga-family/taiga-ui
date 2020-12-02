/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A pending copy-to-clipboard operation.
 *
 * The implementation of copying text to the clipboard modifies the DOM and
 * forces a relayout. This relayout can take too long if the string is large,
 * causing the execCommand('copy') to happen too long after the user clicked.
 * This results in the browser refusing to copy. This object lets the
 * relayout happen in a separate tick from copying by providing a copy function
 * that can be called later.
 *
 * Destroy must be called when no longer in use, regardless of whether `copy` is
 * called.
 */
var PendingCopy = /** @class */ (function () {
    function PendingCopy(text, _document) {
        this._document = _document;
        var textarea = this._textarea = this._document.createElement('textarea');
        var styles = textarea.style;
        // Hide the element for display and accessibility. Set an
        // absolute position so the page layout isn't affected.
        styles.opacity = '0';
        styles.position = 'absolute';
        styles.left = styles.top = '-999em';
        textarea.setAttribute('aria-hidden', 'true');
        textarea.value = text;
        this._document.body.appendChild(textarea);
    }
    /** Finishes copying the text. */
    PendingCopy.prototype.copy = function () {
        var textarea = this._textarea;
        var successful = false;
        try { // Older browsers could throw if copy is not supported.
            if (textarea) {
                var currentFocus = this._document.activeElement;
                textarea.select();
                textarea.setSelectionRange(0, textarea.value.length);
                successful = this._document.execCommand('copy');
                if (currentFocus) {
                    currentFocus.focus();
                }
            }
        }
        catch (_a) {
            // Discard error.
            // Initial setting of {@code successful} will represent failure here.
        }
        return successful;
    };
    /** Cleans up DOM changes used to perform the copy operation. */
    PendingCopy.prototype.destroy = function () {
        var textarea = this._textarea;
        if (textarea) {
            if (textarea.parentNode) {
                textarea.parentNode.removeChild(textarea);
            }
            this._textarea = undefined;
        }
    };
    return PendingCopy;
}());
export { PendingCopy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVuZGluZy1jb3B5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9jbGlwYm9hcmQvcGVuZGluZy1jb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVIOzs7Ozs7Ozs7Ozs7R0FZRztBQUNIO0lBR0UscUJBQVksSUFBWSxFQUFtQixTQUFtQjtRQUFuQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQzVELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0UsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUU5Qix5REFBeUQ7UUFDekQsdURBQXVEO1FBQ3ZELE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDcEMsUUFBUSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxpQ0FBaUM7SUFDakMsMEJBQUksR0FBSjtRQUNFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXZCLElBQUksRUFBRyx1REFBdUQ7WUFDNUQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUF3QyxDQUFDO2dCQUU3RSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2xCLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckQsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVoRCxJQUFJLFlBQVksRUFBRTtvQkFDaEIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUN0QjthQUNGO1NBQ0Y7UUFBQyxXQUFNO1lBQ04saUJBQWlCO1lBQ2pCLHFFQUFxRTtTQUN0RTtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxnRUFBZ0U7SUFDaEUsNkJBQU8sR0FBUDtRQUNFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFaEMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3ZCLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzNDO1lBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogQSBwZW5kaW5nIGNvcHktdG8tY2xpcGJvYXJkIG9wZXJhdGlvbi5cbiAqXG4gKiBUaGUgaW1wbGVtZW50YXRpb24gb2YgY29weWluZyB0ZXh0IHRvIHRoZSBjbGlwYm9hcmQgbW9kaWZpZXMgdGhlIERPTSBhbmRcbiAqIGZvcmNlcyBhIHJlbGF5b3V0LiBUaGlzIHJlbGF5b3V0IGNhbiB0YWtlIHRvbyBsb25nIGlmIHRoZSBzdHJpbmcgaXMgbGFyZ2UsXG4gKiBjYXVzaW5nIHRoZSBleGVjQ29tbWFuZCgnY29weScpIHRvIGhhcHBlbiB0b28gbG9uZyBhZnRlciB0aGUgdXNlciBjbGlja2VkLlxuICogVGhpcyByZXN1bHRzIGluIHRoZSBicm93c2VyIHJlZnVzaW5nIHRvIGNvcHkuIFRoaXMgb2JqZWN0IGxldHMgdGhlXG4gKiByZWxheW91dCBoYXBwZW4gaW4gYSBzZXBhcmF0ZSB0aWNrIGZyb20gY29weWluZyBieSBwcm92aWRpbmcgYSBjb3B5IGZ1bmN0aW9uXG4gKiB0aGF0IGNhbiBiZSBjYWxsZWQgbGF0ZXIuXG4gKlxuICogRGVzdHJveSBtdXN0IGJlIGNhbGxlZCB3aGVuIG5vIGxvbmdlciBpbiB1c2UsIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciBgY29weWAgaXNcbiAqIGNhbGxlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIFBlbmRpbmdDb3B5IHtcbiAgcHJpdmF0ZSBfdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnR8dW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZywgcHJpdmF0ZSByZWFkb25seSBfZG9jdW1lbnQ6IERvY3VtZW50KSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSB0aGlzLl90ZXh0YXJlYSA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3Qgc3R5bGVzID0gdGV4dGFyZWEuc3R5bGU7XG5cbiAgICAvLyBIaWRlIHRoZSBlbGVtZW50IGZvciBkaXNwbGF5IGFuZCBhY2Nlc3NpYmlsaXR5LiBTZXQgYW5cbiAgICAvLyBhYnNvbHV0ZSBwb3NpdGlvbiBzbyB0aGUgcGFnZSBsYXlvdXQgaXNuJ3QgYWZmZWN0ZWQuXG4gICAgc3R5bGVzLm9wYWNpdHkgPSAnMCc7XG4gICAgc3R5bGVzLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBzdHlsZXMubGVmdCA9IHN0eWxlcy50b3AgPSAnLTk5OWVtJztcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB0ZXh0YXJlYS52YWx1ZSA9IHRleHQ7XG4gICAgdGhpcy5fZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG4gIH1cblxuICAvKiogRmluaXNoZXMgY29weWluZyB0aGUgdGV4dC4gKi9cbiAgY29weSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHRoaXMuX3RleHRhcmVhO1xuICAgIGxldCBzdWNjZXNzZnVsID0gZmFsc2U7XG5cbiAgICB0cnkgeyAgLy8gT2xkZXIgYnJvd3NlcnMgY291bGQgdGhyb3cgaWYgY29weSBpcyBub3Qgc3VwcG9ydGVkLlxuICAgICAgaWYgKHRleHRhcmVhKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRGb2N1cyA9IHRoaXMuX2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTE9yU1ZHRWxlbWVudCB8IG51bGw7XG5cbiAgICAgICAgdGV4dGFyZWEuc2VsZWN0KCk7XG4gICAgICAgIHRleHRhcmVhLnNldFNlbGVjdGlvblJhbmdlKDAsIHRleHRhcmVhLnZhbHVlLmxlbmd0aCk7XG4gICAgICAgIHN1Y2Nlc3NmdWwgPSB0aGlzLl9kb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuXG4gICAgICAgIGlmIChjdXJyZW50Rm9jdXMpIHtcbiAgICAgICAgICBjdXJyZW50Rm9jdXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gRGlzY2FyZCBlcnJvci5cbiAgICAgIC8vIEluaXRpYWwgc2V0dGluZyBvZiB7QGNvZGUgc3VjY2Vzc2Z1bH0gd2lsbCByZXByZXNlbnQgZmFpbHVyZSBoZXJlLlxuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzZnVsO1xuICB9XG5cbiAgLyoqIENsZWFucyB1cCBET00gY2hhbmdlcyB1c2VkIHRvIHBlcmZvcm0gdGhlIGNvcHkgb3BlcmF0aW9uLiAqL1xuICBkZXN0cm95KCkge1xuICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy5fdGV4dGFyZWE7XG5cbiAgICBpZiAodGV4dGFyZWEpIHtcbiAgICAgIGlmICh0ZXh0YXJlYS5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRleHRhcmVhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGV4dGFyZWEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl90ZXh0YXJlYSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==