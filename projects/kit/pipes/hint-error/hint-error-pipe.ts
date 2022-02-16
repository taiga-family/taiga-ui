import {AsyncPipe} from '@angular/common';
import {Inject, INJECTOR, Injector, OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiFieldErrorPipe} from '../field-error';

// @dynamic
@Pipe({
    name: 'tuiHintError',
    pure: false,
})
export class TuiHintErrorPipe implements PipeTransform, OnDestroy {
    private readonly asyncPipe!: AsyncPipe;
    private readonly fieldErrorPipe!: TuiFieldErrorPipe;

    constructor(@Inject(INJECTOR) readonly injector: Injector) {
        const localInjector = Injector.create({
            providers: [{provide: AsyncPipe}, {provide: TuiFieldErrorPipe}],
            parent: injector,
        });

        this.asyncPipe = localInjector.get(AsyncPipe);
        this.fieldErrorPipe = localInjector.get(TuiFieldErrorPipe);
    }

    transform(order: ReadonlyArray<string>): PolymorpheusContent | null {
        return (
            this.asyncPipe.transform(this.fieldErrorPipe.transform(order))?.message || ''
        );
    }

    ngOnDestroy() {
        this.asyncPipe.ngOnDestroy();
    }
}
