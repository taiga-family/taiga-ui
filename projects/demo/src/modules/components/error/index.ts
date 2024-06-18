import type {TemplateRef} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiValidationError} from '@taiga-ui/cdk';
import {TuiError, TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [RouterLink, TuiDemo, TuiError, TuiLink],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    @ViewChild('errorContent')
    protected errorContent?: TemplateRef<Record<string, unknown>>;

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
