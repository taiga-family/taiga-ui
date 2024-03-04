import {Component, type TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiValidationError} from '@taiga-ui/cdk';

@Component({
    selector: 'example-tui-error',
    templateUrl: './error.template.html',
    changeDetection,
})
export class ExampleTuiErrorComponent {
    @ViewChild('errorContent')
    protected errorContent?: TemplateRef<Record<string, unknown>>;

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly errorVariants: readonly string[] = [
        'Error as string',
        'Error as HTML content',
    ];

    protected selectedError = this.errorVariants[0];

    protected get error(): TuiValidationError | string | null {
        if (this.selectedError === null) {
            return null;
        }

        if (this.selectedError === this.errorVariants[0]) {
            return this.selectedError;
        }

        return new TuiValidationError(this.errorContent || '');
    }
}
