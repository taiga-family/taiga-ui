import {ClipboardModule} from '@angular/cdk/clipboard';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDemo} from '@demo/utils';
import {TuiTable} from '@taiga-ui/addon-table';
import fileWithBreakpoints from '@taiga-ui/core/styles/variables/media.less?raw';

/**
 * Match all code comments.
 *
 * @example
 * ```less
 * /* code comment (and multiline code comments) * /
 * // code comment
 * ```
 */
const CODE_COMMENTS = /(\/\*([^*]|(\*+[^*/]))*\*+\/)|(\/\/.*)/g;

function parseBreakpoints(file: string): Array<{name: string; value: string}> {
    return file
        .replaceAll(CODE_COMMENTS, '')
        .split(';')
        .map(line => line.trim())
        .filter(Boolean)
        .map(line => {
            const [name, ...value] = line.split(':');

            return {name, value: value.join(':').replaceAll(/[~'"]/g, '').trim()};
        });
}

@Component({
    standalone: true,
    imports: [TuiDemo, TuiTable, ClipboardModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Page {
    protected readonly breakpoints = parseBreakpoints(fileWithBreakpoints);
    protected readonly columnsNames = Object.keys(this.breakpoints[0]);

    protected readonly importTaigaUILocalLess = import(
        './examples/import/import-taiga-ui-local-less.md?raw'
    );

    protected readonly exampleBaseUsage = import(
        './examples/import/base-breakpoint-usage.md?raw'
    );
}
