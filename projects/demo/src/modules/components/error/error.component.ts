import {Component, TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiValidationError} from '@taiga-ui/cdk';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-error',
    templateUrl: './error.template.html',
    changeDetection,
})
export class ExampleTuiErrorComponent {
    @ViewChild('errorContent')
    errorContent?: TemplateRef<{}>;

    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
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
