import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiLoader, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';
import {debounceTime, of, Subject, switchMap, tap} from 'rxjs';

import {DatabaseServer} from './database';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgIf,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiLet,
        TuiLoader,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly api = inject(DatabaseServer);

    protected readonly search$ = new Subject<string>();
    protected readonly showLoader = signal(false);
    protected readonly items$ = this.search$.pipe(
        tap(() => this.showLoader.set(true)),
        debounceTime(300),
        switchMap((query) => (query.length >= 2 ? this.api.request$(query) : of(null))),
        tap(() => this.showLoader.set(false)),
    );

    protected value: string | null = null;
}
