import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, tuiRawLoad} from '@taiga-ui/addon-doc';

@Component({
    selector: `css-breakpoints`,
    templateUrl: `./css-breakpoints.template.html`,
    styleUrls: [`./css-breakpoints.style.less`],
    changeDetection,
})
export class CSSBreakpointsComponent {
    breakpoints = tuiRawLoad(
        import(`!!raw-loader!@taiga-ui/core/styles/variables/media.less`),
    )
        .then(removeLegacyVariables)
        .then(parseBreakpoints);

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
    return file.slice(file.indexOf(`// actual`) + `// actual`.length).trim();
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
