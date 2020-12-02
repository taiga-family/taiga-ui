/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __values } from "tslib";
import { SecurityContext } from '../core';
// =================================================================================================
// =================================================================================================
// =========== S T O P   -  S T O P   -  S T O P   -  S T O P   -  S T O P   -  S T O P  ===========
// =================================================================================================
// =================================================================================================
//
//        DO NOT EDIT THIS LIST OF SECURITY SENSITIVE PROPERTIES WITHOUT A SECURITY REVIEW!
//                               Reach out to mprobst for details.
//
// =================================================================================================
/** Map from tagName|propertyName SecurityContext. Properties applying to all tags use '*'. */
var _SECURITY_SCHEMA;
export function SECURITY_SCHEMA() {
    if (!_SECURITY_SCHEMA) {
        _SECURITY_SCHEMA = {};
        // Case is insignificant below, all element and attribute names are lower-cased for lookup.
        registerContext(SecurityContext.HTML, [
            'iframe|srcdoc',
            '*|innerHTML',
            '*|outerHTML',
        ]);
        registerContext(SecurityContext.STYLE, ['*|style']);
        // NB: no SCRIPT contexts here, they are never allowed due to the parser stripping them.
        registerContext(SecurityContext.URL, [
            '*|formAction', 'area|href', 'area|ping', 'audio|src', 'a|href',
            'a|ping', 'blockquote|cite', 'body|background', 'del|cite', 'form|action',
            'img|src', 'img|srcset', 'input|src', 'ins|cite', 'q|cite',
            'source|src', 'source|srcset', 'track|src', 'video|poster', 'video|src',
        ]);
        registerContext(SecurityContext.RESOURCE_URL, [
            'applet|code',
            'applet|codebase',
            'base|href',
            'embed|src',
            'frame|src',
            'head|profile',
            'html|manifest',
            'iframe|src',
            'link|href',
            'media|src',
            'object|codebase',
            'object|data',
            'script|src',
        ]);
    }
    return _SECURITY_SCHEMA;
}
function registerContext(ctx, specs) {
    var e_1, _a;
    try {
        for (var specs_1 = __values(specs), specs_1_1 = specs_1.next(); !specs_1_1.done; specs_1_1 = specs_1.next()) {
            var spec = specs_1_1.value;
            _SECURITY_SCHEMA[spec.toLowerCase()] = ctx;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (specs_1_1 && !specs_1_1.done && (_a = specs_1.return)) _a.call(specs_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3NlY3VyaXR5X3NjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zY2hlbWEvZG9tX3NlY3VyaXR5X3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUV4QyxvR0FBb0c7QUFDcEcsb0dBQW9HO0FBQ3BHLG9HQUFvRztBQUNwRyxvR0FBb0c7QUFDcEcsb0dBQW9HO0FBQ3BHLEVBQUU7QUFDRiwyRkFBMkY7QUFDM0Ysa0VBQWtFO0FBQ2xFLEVBQUU7QUFDRixvR0FBb0c7QUFFcEcsOEZBQThGO0FBQzlGLElBQUksZ0JBQWlELENBQUM7QUFFdEQsTUFBTSxVQUFVLGVBQWU7SUFDN0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1FBQ3JCLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QiwyRkFBMkY7UUFFM0YsZUFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUU7WUFDcEMsZUFBZTtZQUNmLGFBQWE7WUFDYixhQUFhO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsZUFBZSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3BELHdGQUF3RjtRQUN4RixlQUFlLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRTtZQUNuQyxjQUFjLEVBQUUsV0FBVyxFQUFRLFdBQVcsRUFBUSxXQUFXLEVBQUssUUFBUTtZQUM5RSxRQUFRLEVBQVEsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFNLGFBQWE7WUFDbkYsU0FBUyxFQUFPLFlBQVksRUFBTyxXQUFXLEVBQVEsVUFBVSxFQUFNLFFBQVE7WUFDOUUsWUFBWSxFQUFJLGVBQWUsRUFBSSxXQUFXLEVBQVEsY0FBYyxFQUFFLFdBQVc7U0FDbEYsQ0FBQyxDQUFDO1FBQ0gsZUFBZSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUU7WUFDNUMsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixXQUFXO1lBQ1gsV0FBVztZQUNYLFdBQVc7WUFDWCxjQUFjO1lBQ2QsZUFBZTtZQUNmLFlBQVk7WUFDWixXQUFXO1lBQ1gsV0FBVztZQUNYLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsWUFBWTtTQUNiLENBQUMsQ0FBQztLQUNKO0lBQ0QsT0FBTyxnQkFBZ0IsQ0FBQztBQUMxQixDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsR0FBb0IsRUFBRSxLQUFlOzs7UUFDNUQsS0FBbUIsSUFBQSxVQUFBLFNBQUEsS0FBSyxDQUFBLDRCQUFBO1lBQW5CLElBQU0sSUFBSSxrQkFBQTtZQUFXLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUFBOzs7Ozs7Ozs7QUFDdkUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTZWN1cml0eUNvbnRleHR9IGZyb20gJy4uL2NvcmUnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PSBTIFQgTyBQICAgLSAgUyBUIE8gUCAgIC0gIFMgVCBPIFAgICAtICBTIFQgTyBQICAgLSAgUyBUIE8gUCAgIC0gIFMgVCBPIFAgID09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vL1xuLy8gICAgICAgIERPIE5PVCBFRElUIFRISVMgTElTVCBPRiBTRUNVUklUWSBTRU5TSVRJVkUgUFJPUEVSVElFUyBXSVRIT1VUIEEgU0VDVVJJVFkgUkVWSUVXIVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY2ggb3V0IHRvIG1wcm9ic3QgZm9yIGRldGFpbHMuXG4vL1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKiogTWFwIGZyb20gdGFnTmFtZXxwcm9wZXJ0eU5hbWUgU2VjdXJpdHlDb250ZXh0LiBQcm9wZXJ0aWVzIGFwcGx5aW5nIHRvIGFsbCB0YWdzIHVzZSAnKicuICovXG5sZXQgX1NFQ1VSSVRZX1NDSEVNQSE6IHtbazogc3RyaW5nXTogU2VjdXJpdHlDb250ZXh0fTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNFQ1VSSVRZX1NDSEVNQSgpOiB7W2s6IHN0cmluZ106IFNlY3VyaXR5Q29udGV4dH0ge1xuICBpZiAoIV9TRUNVUklUWV9TQ0hFTUEpIHtcbiAgICBfU0VDVVJJVFlfU0NIRU1BID0ge307XG4gICAgLy8gQ2FzZSBpcyBpbnNpZ25pZmljYW50IGJlbG93LCBhbGwgZWxlbWVudCBhbmQgYXR0cmlidXRlIG5hbWVzIGFyZSBsb3dlci1jYXNlZCBmb3IgbG9va3VwLlxuXG4gICAgcmVnaXN0ZXJDb250ZXh0KFNlY3VyaXR5Q29udGV4dC5IVE1MLCBbXG4gICAgICAnaWZyYW1lfHNyY2RvYycsXG4gICAgICAnKnxpbm5lckhUTUwnLFxuICAgICAgJyp8b3V0ZXJIVE1MJyxcbiAgICBdKTtcbiAgICByZWdpc3RlckNvbnRleHQoU2VjdXJpdHlDb250ZXh0LlNUWUxFLCBbJyp8c3R5bGUnXSk7XG4gICAgLy8gTkI6IG5vIFNDUklQVCBjb250ZXh0cyBoZXJlLCB0aGV5IGFyZSBuZXZlciBhbGxvd2VkIGR1ZSB0byB0aGUgcGFyc2VyIHN0cmlwcGluZyB0aGVtLlxuICAgIHJlZ2lzdGVyQ29udGV4dChTZWN1cml0eUNvbnRleHQuVVJMLCBbXG4gICAgICAnKnxmb3JtQWN0aW9uJywgJ2FyZWF8aHJlZicsICAgICAgICdhcmVhfHBpbmcnLCAgICAgICAnYXVkaW98c3JjJywgICAgJ2F8aHJlZicsXG4gICAgICAnYXxwaW5nJywgICAgICAgJ2Jsb2NrcXVvdGV8Y2l0ZScsICdib2R5fGJhY2tncm91bmQnLCAnZGVsfGNpdGUnLCAgICAgJ2Zvcm18YWN0aW9uJyxcbiAgICAgICdpbWd8c3JjJywgICAgICAnaW1nfHNyY3NldCcsICAgICAgJ2lucHV0fHNyYycsICAgICAgICdpbnN8Y2l0ZScsICAgICAncXxjaXRlJyxcbiAgICAgICdzb3VyY2V8c3JjJywgICAnc291cmNlfHNyY3NldCcsICAgJ3RyYWNrfHNyYycsICAgICAgICd2aWRlb3xwb3N0ZXInLCAndmlkZW98c3JjJyxcbiAgICBdKTtcbiAgICByZWdpc3RlckNvbnRleHQoU2VjdXJpdHlDb250ZXh0LlJFU09VUkNFX1VSTCwgW1xuICAgICAgJ2FwcGxldHxjb2RlJyxcbiAgICAgICdhcHBsZXR8Y29kZWJhc2UnLFxuICAgICAgJ2Jhc2V8aHJlZicsXG4gICAgICAnZW1iZWR8c3JjJyxcbiAgICAgICdmcmFtZXxzcmMnLFxuICAgICAgJ2hlYWR8cHJvZmlsZScsXG4gICAgICAnaHRtbHxtYW5pZmVzdCcsXG4gICAgICAnaWZyYW1lfHNyYycsXG4gICAgICAnbGlua3xocmVmJyxcbiAgICAgICdtZWRpYXxzcmMnLFxuICAgICAgJ29iamVjdHxjb2RlYmFzZScsXG4gICAgICAnb2JqZWN0fGRhdGEnLFxuICAgICAgJ3NjcmlwdHxzcmMnLFxuICAgIF0pO1xuICB9XG4gIHJldHVybiBfU0VDVVJJVFlfU0NIRU1BO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckNvbnRleHQoY3R4OiBTZWN1cml0eUNvbnRleHQsIHNwZWNzOiBzdHJpbmdbXSkge1xuICBmb3IgKGNvbnN0IHNwZWMgb2Ygc3BlY3MpIF9TRUNVUklUWV9TQ0hFTUFbc3BlYy50b0xvd2VyQ2FzZSgpXSA9IGN0eDtcbn1cbiJdfQ==