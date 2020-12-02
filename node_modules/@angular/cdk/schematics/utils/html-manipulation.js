/**
 * @license
 * Copyright Google LLC All Rights Reserved.
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
        define("@angular/cdk/schematics/utils/html-manipulation", ["require", "exports", "@angular-devkit/schematics", "@angular/cdk/schematics/utils/parse5-element", "parse5"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const schematics_1 = require("@angular-devkit/schematics");
    const parse5_element_1 = require("@angular/cdk/schematics/utils/parse5-element");
    const parse5_1 = require("parse5");
    /** Appends the given element HTML fragment to the `<head>` element of the specified HTML file. */
    function appendHtmlElementToHead(host, htmlFilePath, elementHtml) {
        const htmlFileBuffer = host.read(htmlFilePath);
        if (!htmlFileBuffer) {
            throw new schematics_1.SchematicsException(`Could not read file for path: ${htmlFilePath}`);
        }
        const htmlContent = htmlFileBuffer.toString();
        if (htmlContent.includes(elementHtml)) {
            return;
        }
        const headTag = getHtmlHeadTagElement(htmlContent);
        if (!headTag) {
            throw Error(`Could not find '<head>' element in HTML file: ${htmlFileBuffer}`);
        }
        // We always have access to the source code location here because the `getHeadTagElement`
        // function explicitly has the `sourceCodeLocationInfo` option enabled.
        const endTagOffset = headTag.sourceCodeLocation.endTag.startOffset;
        const indentationOffset = parse5_element_1.getChildElementIndentation(headTag);
        const insertion = `${' '.repeat(indentationOffset)}${elementHtml}`;
        const recordedChange = host
            .beginUpdate(htmlFilePath)
            .insertRight(endTagOffset, `${insertion}\n`);
        host.commitUpdate(recordedChange);
    }
    exports.appendHtmlElementToHead = appendHtmlElementToHead;
    /** Parses the given HTML file and returns the head element if available. */
    function getHtmlHeadTagElement(htmlContent) {
        return getElementByTagName('head', htmlContent);
    }
    exports.getHtmlHeadTagElement = getHtmlHeadTagElement;
    /** Adds a class to the body of the document. */
    function addBodyClass(host, htmlFilePath, className) {
        const htmlFileBuffer = host.read(htmlFilePath);
        if (!htmlFileBuffer) {
            throw new schematics_1.SchematicsException(`Could not read file for path: ${htmlFilePath}`);
        }
        const htmlContent = htmlFileBuffer.toString();
        const body = getElementByTagName('body', htmlContent);
        if (!body) {
            throw Error(`Could not find <body> element in HTML file: ${htmlFileBuffer}`);
        }
        const classAttribute = body.attrs.find(attribute => attribute.name === 'class');
        if (classAttribute) {
            const hasClass = classAttribute.value.split(' ').map(part => part.trim()).includes(className);
            if (!hasClass) {
                const classAttributeLocation = body.sourceCodeLocation.attrs.class;
                const recordedChange = host
                    .beginUpdate(htmlFilePath)
                    .insertRight(classAttributeLocation.endOffset - 1, ` ${className}`);
                host.commitUpdate(recordedChange);
            }
        }
        else {
            const recordedChange = host
                .beginUpdate(htmlFilePath)
                .insertRight(body.sourceCodeLocation.startTag.endOffset - 1, ` class="${className}"`);
            host.commitUpdate(recordedChange);
        }
    }
    exports.addBodyClass = addBodyClass;
    /** Finds an element by its tag name. */
    function getElementByTagName(tagName, htmlContent) {
        const document = parse5_1.parse(htmlContent, { sourceCodeLocationInfo: true });
        const nodeQueue = [...document.childNodes];
        while (nodeQueue.length) {
            const node = nodeQueue.shift();
            if (node.nodeName.toLowerCase() === tagName) {
                return node;
            }
            else if (node.childNodes) {
                nodeQueue.push(...node.childNodes);
            }
        }
        return null;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1tYW5pcHVsYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvdXRpbHMvaHRtbC1tYW5pcHVsYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCwyREFBcUU7SUFDckUsaUZBQTREO0lBQzVELG1DQUFtRjtJQUVuRixrR0FBa0c7SUFDbEcsU0FBZ0IsdUJBQXVCLENBQUMsSUFBVSxFQUFFLFlBQW9CLEVBQUUsV0FBbUI7UUFDM0YsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ25CLE1BQU0sSUFBSSxnQ0FBbUIsQ0FBQyxpQ0FBaUMsWUFBWSxFQUFFLENBQUMsQ0FBQztTQUNoRjtRQUVELE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU5QyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDckMsT0FBTztTQUNSO1FBRUQsTUFBTSxPQUFPLEdBQUcscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE1BQU0sS0FBSyxDQUFDLGlEQUFpRCxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQ2hGO1FBRUQseUZBQXlGO1FBQ3pGLHVFQUF1RTtRQUN2RSxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsa0JBQW1CLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNwRSxNQUFNLGlCQUFpQixHQUFHLDJDQUEwQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlELE1BQU0sU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDO1FBRW5FLE1BQU0sY0FBYyxH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QzFCLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDcEM7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1NjaGVtYXRpY3NFeGNlcHRpb24sIFRyZWV9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9zY2hlbWF0aWNzJztcbmltcG9ydCB7Z2V0Q2hpbGRFbGVtZW50SW5kZW50YXRpb259IGZyb20gJy4vcGFyc2U1LWVsZW1lbnQnO1xuaW1wb3J0IHtEZWZhdWx0VHJlZURvY3VtZW50LCBEZWZhdWx0VHJlZUVsZW1lbnQsIHBhcnNlIGFzIHBhcnNlSHRtbH0gZnJvbSAncGFyc2U1JztcblxuLyoqIEFwcGVuZHMgdGhlIGdpdmVuIGVsZW1lbnQgSFRNTCBmcmFnbWVudCB0byB0aGUgYDxoZWFkPmAgZWxlbWVudCBvZiB0aGUgc3BlY2lmaWVkIEhUTUwgZmlsZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRIdG1sRWxlbWVudFRvSGVhZChob3N0OiBUcmVlLCBodG1sRmlsZVBhdGg6IHN0cmluZywgZWxlbWVudEh0bWw6IHN0cmluZykge1xuICBjb25zdCBodG1sRmlsZUJ1ZmZlciA9IGhvc3QucmVhZChodG1sRmlsZVBhdGgpO1xuXG4gIGlmICghaHRtbEZpbGVCdWZmZXIpIHtcbiAgICB0aHJvdyBuZXcgU2NoZW1hdGljc0V4Y2VwdGlvbihgQ291bGQgbm90IHJlYWQgZmlsZSBmb3IgcGF0aDogJHtodG1sRmlsZVBhdGh9YCk7XG4gIH1cblxuICBjb25zdCBodG1sQ29udGVudCA9IGh0bWxGaWxlQnVmZmVyLnRvU3RyaW5nKCk7XG5cbiAgaWYgKGh0bWxDb250ZW50LmluY2x1ZGVzKGVsZW1lbnRIdG1sKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGhlYWRUYWcgPSBnZXRIdG1sSGVhZFRhZ0VsZW1lbnQoaHRtbENvbnRlbnQpO1xuXG4gIGlmICghaGVhZFRhZykge1xuICAgIHRocm93IEVycm9yKGBDb3VsZCBub3QgZmluZCAnPGhlYWQ+JyBlbGVtZW50IGluIEhUTUwgZmlsZTogJHtodG1sRmlsZUJ1ZmZlcn1gKTtcbiAgfVxuXG4gIC8vIFdlIGFsd2F5cyBoYXZlIGFjY2VzcyB0byB0aGUgc291cmNlIGNvZGUgbG9jYXRpb24gaGVyZSBiZWNhdXNlIHRoZSBgZ2V0SGVhZFRhZ0VsZW1lbnRgXG4gIC8vIGZ1bmN0aW9uIGV4cGxpY2l0bHkgaGFzIHRoZSBgc291cmNlQ29kZUxvY2F0aW9uSW5mb2Agb3B0aW9uIGVuYWJsZWQuXG4gIGNvbnN0IGVuZFRhZ09mZnNldCA9IGhlYWRUYWcuc291cmNlQ29kZUxvY2F0aW9uIS5lbmRUYWcuc3RhcnRPZmZzZXQ7XG4gIGNvbnN0IGluZGVudGF0aW9uT2Zmc2V0ID0gZ2V0Q2hpbGRFbGVtZW50SW5kZW50YXRpb24oaGVhZFRhZyk7XG4gIGNvbnN0IGluc2VydGlvbiA9IGAkeycgJy5yZXBlYXQoaW5kZW50YXRpb25PZmZzZXQpfSR7ZWxlbWVudEh0bWx9YDtcblxuICBjb25zdCByZWNvcmRlZENoYW5nZSA9IGhvc3RcbiAgICAuYmVnaW5VcGRhdGUoaHRtbEZpbGVQYXRoKVxuICAgIC5pbnNlcnRSaWdodChlbmRUYWdPZmZzZXQsIGAke2luc2VydGlvbn1cXG5gKTtcblxuICBob3N0LmNvbW1pdFVwZGF0ZShyZWNvcmRlZENoYW5nZSk7XG59XG5cbi8qKiBQYXJzZXMgdGhlIGdpdmVuIEhUTUwgZmlsZSBhbmQgcmV0dXJucyB0aGUgaGVhZCBlbGVtZW50IGlmIGF2YWlsYWJsZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRIdG1sSGVhZFRhZ0VsZW1lbnQoaHRtbENvbnRlbnQ6IHN0cmluZyk6IERlZmF1bHRUcmVlRWxlbWVudCB8IG51bGwge1xuICByZXR1cm4gZ2V0RWxlbWVudEJ5VGFnTmFtZSgnaGVhZCcsIGh0bWxDb250ZW50KTtcbn1cblxuLyoqIEFkZHMgYSBjbGFzcyB0byB0aGUgYm9keSBvZiB0aGUgZG9jdW1lbnQuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQm9keUNsYXNzKGhvc3Q6IFRyZWUsIGh0bWxGaWxlUGF0aDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBodG1sRmlsZUJ1ZmZlciA9IGhvc3QucmVhZChodG1sRmlsZVBhdGgpO1xuXG4gIGlmICghaHRtbEZpbGVCdWZmZXIpIHtcbiAgICB0aHJvdyBuZXcgU2NoZW1hdGljc0V4Y2VwdGlvbihgQ291bGQgbm90IHJlYWQgZmlsZSBmb3IgcGF0aDogJHtodG1sRmlsZVBhdGh9YCk7XG4gIH1cblxuICBjb25zdCBodG1sQ29udGVudCA9IGh0bWxGaWxlQnVmZmVyLnRvU3RyaW5nKCk7XG4gIGNvbnN0IGJvZHkgPSBnZXRFbGVtZW50QnlUYWdOYW1lKCdib2R5JywgaHRtbENvbnRlbnQpO1xuXG4gIGlmICghYm9keSkge1xuICAgIHRocm93IEVycm9yKGBDb3VsZCBub3QgZmluZCA8Ym9keT4gZWxlbWVudCBpbiBIVE1MIGZpbGU6ICR7aHRtbEZpbGVCdWZmZXJ9YCk7XG4gIH1cblxuICBjb25zdCBjbGFzc0F0dHJpYnV0ZSA9IGJvZHkuYXR0cnMuZmluZChhdHRyaWJ1dGUgPT4gYXR0cmlidXRlLm5hbWUgPT09ICdjbGFzcycpO1xuXG4gIGlmIChjbGFzc0F0dHJpYnV0ZSkge1xuICAgIGNvbnN0IGhhc0NsYXNzID0gY2xhc3NBdHRyaWJ1dGUudmFsdWUuc3BsaXQoJyAnKS5tYXAocGFydCA9PiBwYXJ0LnRyaW0oKSkuaW5jbHVkZXMoY2xhc3NOYW1lKTtcblxuICAgIGlmICghaGFzQ2xhc3MpIHtcbiAgICAgIGNvbnN0IGNsYXNzQXR0cmlidXRlTG9jYXRpb24gPSBib2R5LnNvdXJjZUNvZGVMb2NhdGlvbiEuYXR0cnMuY2xhc3M7XG4gICAgICBjb25zdCByZWNvcmRlZENoYW5nZSA9IGhvc3RcbiAgICAgICAgLmJlZ2luVXBkYXRlKGh0bWxGaWxlUGF0aClcbiAgICAgICAgLmluc2VydFJpZ2h0KGNsYXNzQXR0cmlidXRlTG9jYXRpb24uZW5kT2Zmc2V0IC0gMSwgYCAke2NsYXNzTmFtZX1gKTtcbiAgICAgIGhvc3QuY29tbWl0VXBkYXRlKHJlY29yZGVkQ2hhbmdlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmVjb3JkZWRDaGFuZ2UgPSBob3N0XG4gICAgICAuYmVnaW5VcGRhdGUoaHRtbEZpbGVQYXRoKVxuICAgICAgLmluc2VydFJpZ2h0KGJvZHkuc291cmNlQ29kZUxvY2F0aW9uIS5zdGFydFRhZy5lbmRPZmZzZXQgLSAxLCBgIGNsYXNzPVwiJHtjbGFzc05hbWV9XCJgKTtcbiAgICBob3N0LmNvbW1pdFVwZGF0ZShyZWNvcmRlZENoYW5nZSk7XG4gIH1cbn1cblxuLyoqIEZpbmRzIGFuIGVsZW1lbnQgYnkgaXRzIHRhZyBuYW1lLiAqL1xuZnVuY3Rpb24gZ2V0RWxlbWVudEJ5VGFnTmFtZSh0YWdOYW1lOiBzdHJpbmcsIGh0bWxDb250ZW50OiBzdHJpbmcpOlxuICBEZWZhdWx0VHJlZUVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgZG9jdW1lbnQgPSBwYXJzZUh0bWwoaHRtbENvbnRlbnQsIHtzb3VyY2VDb2RlTG9jYXRpb25JbmZvOiB0cnVlfSkgYXMgRGVmYXVsdFRyZWVEb2N1bWVudDtcbiAgY29uc3Qgbm9kZVF1ZXVlID0gWy4uLmRvY3VtZW50LmNoaWxkTm9kZXNdO1xuXG4gIHdoaWxlIChub2RlUXVldWUubGVuZ3RoKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5vZGVRdWV1ZS5zaGlmdCgpIGFzIERlZmF1bHRUcmVlRWxlbWVudDtcblxuICAgIGlmIChub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHRhZ05hbWUpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAobm9kZS5jaGlsZE5vZGVzKSB7XG4gICAgICBub2RlUXVldWUucHVzaCguLi5ub2RlLmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuIl19