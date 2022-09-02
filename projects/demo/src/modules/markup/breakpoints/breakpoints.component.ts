import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import fileWithBreakpoints from '@taiga-ui/core/styles/variables/media.less?raw';

@Component({
    selector: `css-breakpoints`,
    templateUrl: `./breakpoints.template.html`,
    styleUrls: [`./breakpoints.style.less`],
    changeDetection,
    encapsulation,
})
export class BreakpointsComponent {
    readonly breakpoints = parseBreakpoints(fileWithBreakpoints);
    readonly columnsNames = Object.keys(this.breakpoints[0]);

    readonly importTaigaUILocalLess = import(
        `./examples/import/import-taiga-ui-local-less.md?raw`
    );

    readonly exampleBaseUsage = import(`./examples/import/base-breakpoint-usage.md?raw`);

    readonly example1: TuiDocExample = {
        HTML: import(`./examples/1/index.html?raw`),
        LESS: import(`./examples/1/index.less?raw`),
        TypeScript: import(`./examples/1/index.ts?raw`),
    };
}

/**
 * Match all code comments.
 *
 * @example
 * ```less
 * /* code comment (and multiline code comments) * /
 * // code comment
 * ```
 */
// eslint-disable-next-line unicorn/no-unsafe-regex
const CODE_COMMENTS = /(\/\*([^*]|(\*+[^*/]))*\*+\/)|(\/\/.*)/g;

function parseBreakpoints(file: string): Array<{name: string; value: string}> {
    return file
        .replace(CODE_COMMENTS, ``)
        .split(`;`)
        .map(line => line.trim())
        .filter(Boolean)
        .map(line => {
            const [name, ...value] = line.split(`:`);

            return {name, value: value.join(`:`).replace(/[~'"]/g, ``).trim()};
        });
}
