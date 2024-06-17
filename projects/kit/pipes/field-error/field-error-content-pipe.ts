import type {PipeTransform} from '@angular/core';
import {inject, INJECTOR, Injector, Pipe} from '@angular/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiFieldErrorPipe} from './field-error-pipe';

@Pipe({
    standalone: true,
    name: 'tuiFieldErrorContent',
    pure: false,
})
export class TuiFieldErrorContentPipe implements PipeTransform {
    private readonly injector = inject(INJECTOR);
    private readonly localInjector = Injector.create({
        providers: [{provide: TuiFieldErrorPipe}],
        parent: this.injector,
    });

    private readonly fieldErrorPipe = this.localInjector.get(TuiFieldErrorPipe);

    public transform(order: readonly string[]): PolymorpheusContent {
        return this.getErrorContent(order);
    }

    private getErrorContent(order: readonly string[]): PolymorpheusContent {
        const error = this.fieldErrorPipe.transform(order);

        if (!error) {
            return '';
        }

        return typeof error.message === 'function'
            ? error.message(error.context)
            : error.message;
    }
}
