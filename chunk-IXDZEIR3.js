import"./chunk-HU6DUUP4.js";var t=`import {Component, type TemplateRef, viewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiValidationError} from '@taiga-ui/cdk';
import {TuiError} from '@taiga-ui/core';

@Component({
    imports: [TuiDemo, TuiError],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly errorContent = viewChild<TemplateRef<unknown>>('errorContent');
    protected readonly examples = [
        'Basic',
        'DI',
        'Template',
        'Array',
        'Asynchronous',
        'Pipe',
        'Component',
        'Initially touched',
    ];

    protected readonly errorVariants: readonly string[] = [
        'Error as string',
        'Error as HTML content',
    ];

    protected selectedError = this.errorVariants[0]!;

    protected get error(): TuiValidationError | string | null {
        return this.selectedError === this.errorVariants[1]
            ? new TuiValidationError(this.errorContent())
            : this.selectedError;
    }
}
`;export{t as default};
