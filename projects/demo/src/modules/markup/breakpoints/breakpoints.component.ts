import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocExample} from '@taiga-ui/addon-doc';

import fileWithBreakpoints from '!!raw-loader!@taiga-ui/core/styles/variables/media.less';

@Component({
    selector: `css-breakpoints`,
    templateUrl: `./breakpoints.template.html`,
    styleUrls: [`./breakpoints.style.less`],
    changeDetection,
    encapsulation,
})
export class BreakpointsComponent {
    readonly breakpoints = parseBreakpoints(removeLegacyVariables(fileWithBreakpoints));
    readonly columnsNames = Object.keys(this.breakpoints[0]);

    readonly importTaigaUILocalLess = import(
        `!!raw-loader!./examples/import/import-taiga-ui-local-less.md`
    );

    readonly exampleBaseUsage = import(
        `!!raw-loader!./examples/import/base-breakpoint-usage.md`
    );

    readonly example1: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        LESS: import(`!!raw-loader!./examples/1/index.less`),
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
    };
}

// TODO delete in v3.0
function removeLegacyVariables(file: string): string {
    const codeComment = `// actual`;
    const startOffset = file.includes(codeComment)
        ? file.indexOf(codeComment) + codeComment.length
        : 0;

    return file.slice(startOffset).trim();
}

function parseBreakpoints(file: string): Array<{name: string; value: string}> {
    return file
        .split(`;`)
        .map(line => line.trim())
        .filter(Boolean)
        .map(line => {
            const [name, ...value] = line.split(`:`);

            return {name, value: value.join(`:`).replace(/[~'"]/g, ``).trim()};
        });
}
