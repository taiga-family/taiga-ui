import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, TemplateRef, ViewChild} from '@angular/core';
import {TuiValidationError} from '@taiga-ui/cdk';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-error',
    templateUrl: './error.template.html',
    changeDetection,
})
export class ExampleTuiErrorComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    @ViewChild('errorContent')
    errorContent?: TemplateRef<{}>;

    readonly errorVariants: ReadonlyArray<string> = [
        'Error as string',
        'Error as HTML content',
    ];

    selectedError = this.errorVariants[0];

    get error(): TuiValidationError | null {
        if (this.selectedError === null) {
            return null;
        }

        const content =
            this.selectedError === this.errorVariants[0]
                ? 'Error as string'
                : this.errorContent || '';

        return new TuiValidationError(content);
    }
}
