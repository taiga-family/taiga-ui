import {AsyncPipe} from '@angular/common';
import {Inject, Injector, OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiFieldErrorPipe} from './field-error-pipe';

@Pipe({
    name: `tuiFieldErrorContent`,
    pure: false,
})
export class TuiFieldErrorContentPipe implements PipeTransform, OnDestroy {
    private readonly localInjector = Injector.create({
        providers: [{provide: AsyncPipe}, {provide: TuiFieldErrorPipe}],
        parent: this.injector,
    });

    private readonly asyncPipe = this.localInjector.get(AsyncPipe);
    private readonly fieldErrorPipe = this.localInjector.get(TuiFieldErrorPipe);

    constructor(@Inject(Injector) private readonly injector: Injector) {}

    transform(order: readonly string[]): PolymorpheusContent {
        return this.getErrorContent(order);
    }

    ngOnDestroy(): void {
        this.asyncPipe.ngOnDestroy();
    }

    private getErrorContent(order: readonly string[]): PolymorpheusContent {
        const error = this.asyncPipe.transform(this.fieldErrorPipe.transform(order));

        if (!error) {
            return ``;
        }

        return typeof error.message === `function`
            ? error.message(error.context)
            : error.message;
    }
}
