import {Component, TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiValidationError} from '@taiga-ui/cdk';

@Component({
    selector: 'example-tui-error',
    templateUrl: './error.template.html',
    changeDetection,
})
export class ExampleTuiErrorComponent {
    @ViewChild('errorContent')
    errorContent?: TemplateRef<Record<string, unknown>>;

    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly errorVariants: readonly string[] = [
        'Error as string',
        'Error as HTML content',
    ];

    selectedError = this.errorVariants[0];

    get error(): TuiValidationError | string | null {
        if (this.selectedError === null) {
            return null;
        }

        if (this.selectedError === this.errorVariants[0]) {
            return this.selectedError;
        }

        return new TuiValidationError(this.errorContent || '');
    }
}
