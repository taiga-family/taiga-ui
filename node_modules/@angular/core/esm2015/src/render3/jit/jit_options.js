/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/jit/jit_options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function JitCompilerOptions() { }
if (false) {
    /** @type {?|undefined} */
    JitCompilerOptions.prototype.defaultEncapsulation;
    /** @type {?|undefined} */
    JitCompilerOptions.prototype.preserveWhitespaces;
}
/** @type {?} */
let jitOptions = null;
/**
 * @param {?} options
 * @return {?}
 */
export function setJitOptions(options) {
    if (jitOptions !== null) {
        if (options.defaultEncapsulation !== jitOptions.defaultEncapsulation) {
            ngDevMode &&
                console.error('Provided value for `defaultEncapsulation` can not be changed once it has been set.');
            return;
        }
        if (options.preserveWhitespaces !== jitOptions.preserveWhitespaces) {
            ngDevMode &&
                console.error('Provided value for `preserveWhitespaces` can not be changed once it has been set.');
            return;
        }
    }
    jitOptions = options;
}
/**
 * @return {?}
 */
export function getJitOptions() {
    return jitOptions;
}
/**
 * @return {?}
 */
export function resetJitOptions() {
    jitOptions = null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaml0X29wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2ppdC9qaXRfb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVNBLHdDQUdDOzs7SUFGQyxrREFBeUM7O0lBQ3pDLGlEQUE4Qjs7O0lBRzVCLFVBQVUsR0FBNEIsSUFBSTs7Ozs7QUFFOUMsTUFBTSxVQUFVLGFBQWEsQ0FBQyxPQUEyQjtJQUN2RCxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7UUFDdkIsSUFBSSxPQUFPLENBQUMsb0JBQW9CLEtBQUssVUFBVSxDQUFDLG9CQUFvQixFQUFFO1lBQ3BFLFNBQVM7Z0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FDVCxvRkFBb0YsQ0FBQyxDQUFDO1lBQzlGLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxDQUFDLG1CQUFtQixLQUFLLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRTtZQUNsRSxTQUFTO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQ1QsbUZBQW1GLENBQUMsQ0FBQztZQUM3RixPQUFPO1NBQ1I7S0FDRjtJQUNELFVBQVUsR0FBRyxPQUFPLENBQUM7QUFDdkIsQ0FBQzs7OztBQUVELE1BQU0sVUFBVSxhQUFhO0lBQzNCLE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZTtJQUM3QixVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge1ZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICcuLi8uLi9tZXRhZGF0YS92aWV3JztcblxuZXhwb3J0IGludGVyZmFjZSBKaXRDb21waWxlck9wdGlvbnMge1xuICBkZWZhdWx0RW5jYXBzdWxhdGlvbj86IFZpZXdFbmNhcHN1bGF0aW9uO1xuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzPzogYm9vbGVhbjtcbn1cblxubGV0IGppdE9wdGlvbnM6IEppdENvbXBpbGVyT3B0aW9uc3xudWxsID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEppdE9wdGlvbnMob3B0aW9uczogSml0Q29tcGlsZXJPcHRpb25zKTogdm9pZCB7XG4gIGlmIChqaXRPcHRpb25zICE9PSBudWxsKSB7XG4gICAgaWYgKG9wdGlvbnMuZGVmYXVsdEVuY2Fwc3VsYXRpb24gIT09IGppdE9wdGlvbnMuZGVmYXVsdEVuY2Fwc3VsYXRpb24pIHtcbiAgICAgIG5nRGV2TW9kZSAmJlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICdQcm92aWRlZCB2YWx1ZSBmb3IgYGRlZmF1bHRFbmNhcHN1bGF0aW9uYCBjYW4gbm90IGJlIGNoYW5nZWQgb25jZSBpdCBoYXMgYmVlbiBzZXQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnByZXNlcnZlV2hpdGVzcGFjZXMgIT09IGppdE9wdGlvbnMucHJlc2VydmVXaGl0ZXNwYWNlcykge1xuICAgICAgbmdEZXZNb2RlICYmXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgJ1Byb3ZpZGVkIHZhbHVlIGZvciBgcHJlc2VydmVXaGl0ZXNwYWNlc2AgY2FuIG5vdCBiZSBjaGFuZ2VkIG9uY2UgaXQgaGFzIGJlZW4gc2V0LicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBqaXRPcHRpb25zID0gb3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEppdE9wdGlvbnMoKTogSml0Q29tcGlsZXJPcHRpb25zfG51bGwge1xuICByZXR1cm4gaml0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Sml0T3B0aW9ucygpOiB2b2lkIHtcbiAgaml0T3B0aW9ucyA9IG51bGw7XG59XG4iXX0=