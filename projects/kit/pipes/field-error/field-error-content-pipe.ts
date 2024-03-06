import {AsyncPipe} from '@angular/common';
import type {OnDestroy, PipeTransform} from '@angular/core';
import {inject, INJECTOR, Injector, Pipe} from '@angular/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiFieldErrorPipe} from './field-error-pipe';

@Pipe({
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
