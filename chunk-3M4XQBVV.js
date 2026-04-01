import"./chunk-HU6DUUP4.js";var a=`import {ClipboardModule} from '@angular/cdk/clipboard';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDemo} from '@demo/utils';
import {TuiTable} from '@taiga-ui/addon-table';
import fileWithBreakpoints from '@taiga-ui/styles/variables/media.less';

/**
 * Match all code comments.
 *
 * @example
 * \`\`\`less
 * /* code comment (and multiline code comments) * /
 * // code comment
 * \`\`\`
 */
const CODE_COMMENTS = /\\/\\*(?:[^*]|\\*+[^*/])*\\*+\\/|\\/\\/.*/g;

function parseBreakpoints(file: string): Array<{name: string; value: string}> {
    return file
        .replaceAll(CODE_COMMENTS, '')
        .split(';')
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
            const [name = '', ...value] = line.split(':');

            return {name, value: value.join(':').replaceAll(/[~'"]/g, '').trim()};
        });
}

@Component({
    imports: [ClipboardModule, TuiDemo, TuiTable],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected readonly breakpoints = parseBreakpoints(fileWithBreakpoints);
    protected readonly columnsNames = Object.keys(this.breakpoints[0]!);

    protected readonly importTaigaStyleUtils =
        import('./examples/import/import-taiga-style-utils.md');

    protected readonly exampleBaseUsage =
        import('./examples/import/base-breakpoint-usage.md');
}
`;export{a as default};
