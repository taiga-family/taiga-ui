import {AsyncPipe} from '@angular/common';
import {
    inject,
    INJECTOR,
    Injector,
    type OnDestroy,
    Pipe,
    type PipeTransform,
} from '@angular/core';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiFieldErrorPipe} from './field-error-pipe';

@Pipe({
    standalone: true,
    name: 'tuiFieldErrorContent',
    pure: false,
})
export class TuiFieldErrorContentPipe implements PipeTransform, OnDestroy {
    private readonly injector = inject(INJECTOR);
    private readonly localInjector = Injector.create({
        providers: [{provide: AsyncPipe}, {provide: TuiFieldErrorPipe}],
        parent: this.injector,
    });

    private readonly asyncPipe = this.localInjector.get(AsyncPipe);
    private readonly fieldErrorPipe = this.localInjector.get(TuiFieldErrorPipe);

    public transform(order: readonly string[]): PolymorpheusContent {
        return this.getErrorContent(order);
    }

    public ngOnDestroy(): void {
        this.asyncPipe.ngOnDestroy();
    }

    private getErrorContent(order: readonly string[]): PolymorpheusContent {
        const error = this.asyncPipe.transform(this.fieldErrorPipe.transform(order));

        if (!error) {
            return '';
        }

        return typeof error.message === 'function'
            ? error.message(error.context)
            : error.message;
    }
}
