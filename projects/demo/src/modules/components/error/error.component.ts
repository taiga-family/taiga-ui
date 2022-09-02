import type {TemplateRef} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiValidationError} from '@taiga-ui/cdk';

@Component({
    selector: `example-tui-error`,
    templateUrl: `./error.template.html`,
    changeDetection,
})
export class ExampleTuiErrorComponent {
    @ViewChild(`errorContent`)
    errorContent?: TemplateRef<Record<string, unknown>>;

    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly errorVariants: readonly string[] = [
        `Error as string`,
        `Error as HTML content`,
    ];

    selectedError = this.errorVariants[0];

    get error(): TuiValidationError | string | null {
        if (this.selectedError === null) {
            return null;
        }

        if (this.selectedError === this.errorVariants[0]) {
            return this.selectedError;
        }

        return new TuiValidationError(this.errorContent || ``);
    }
}
