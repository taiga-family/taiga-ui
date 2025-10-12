import {inject, Pipe, type PipeTransform, untracked} from '@angular/core';
import {NgControl} from '@angular/forms';
import {tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiErrorDirective} from './error.directive';

@Pipe({
    name: 'tuiError',
    pure: false,
})
export class TuiErrorPipe implements PipeTransform {
    private readonly control = inject(NgControl);
    private readonly directive = new TuiErrorDirective();

    public transform(order: readonly string[]): PolymorpheusContent {
        untracked(() => {
            this.directive.validate(this.control.control!);
            tuiSetSignal(this.directive.order, order);
        });

        const error = this.directive.error();

        if (!error) {
            return '';
        }

        return typeof error.message === 'function'
            ? error.message(error.context)
            : error.message;
    }
}
