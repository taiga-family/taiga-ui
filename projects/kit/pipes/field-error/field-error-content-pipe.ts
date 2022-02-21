import {AsyncPipe} from '@angular/common';
import {Inject, Injector, OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiFieldErrorPipe} from './field-error-pipe';

// @dynamic
@Pipe({
    name: 'tuiFieldErrorContent',
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

    transform(order: ReadonlyArray<string>): PolymorpheusContent {
        return (
            this.asyncPipe.transform(this.fieldErrorPipe.transform(order))?.message || ''
        );
    }

    ngOnDestroy() {
        this.asyncPipe.ngOnDestroy();
    }
}
