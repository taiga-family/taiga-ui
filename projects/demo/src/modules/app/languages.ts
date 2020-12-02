import * as less from 'highlight.js/lib/languages/less';
import * as typescript from 'highlight.js/lib/languages/typescript';
import * as xml from 'highlight.js/lib/languages/xml';
import {HighlightLanguage} from 'ngx-highlightjs';

/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function languages(): ReadonlyArray<HighlightLanguage> {
    return [
        {name: 'typescript', func: typescript},
        {name: 'less', func: less},
        {name: 'xml', func: xml},
    ];
}
