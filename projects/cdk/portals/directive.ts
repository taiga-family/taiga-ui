import {Directive, inject, input} from '@angular/core';
import {outputFromObservable, toObservable} from '@angular/core/rxjs-interop';
import {tuiIfMap} from '@taiga-ui/cdk/observables';
import {PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import {endWith, ignoreElements, share} from 'rxjs';

import {TuiPortal, type TuiPortalContext} from './portal';

@Directive()
export class TuiPortalDirective<T> extends PolymorpheusTemplate<TuiPortalContext<T>> {
    private readonly service = inject(TuiPortal<T>);

    public readonly options = input<Partial<T>>({});
    public readonly open = input(false);
    public readonly openChange = outputFromObservable(
        toObservable(this.open).pipe(
            tuiIfMap(() =>
                this.service
                    .open(this, this.options())
                    .pipe(ignoreElements(), endWith(false)),
            ),
            share(),
        ),
    );
}
