import"./chunk-HU6DUUP4.js";var o=`import {AsyncPipe} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLoader} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';
import {debounceTime, filter, of, Subject, switchMap, tap} from 'rxjs';

import {DatabaseServer} from './database';

@Component({
    imports: [
        AsyncPipe,
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiLoader,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly api = inject(DatabaseServer);

    protected readonly showLoader = signal(false);
    // Click on cleaner / datalist item triggers (input) events too
    protected readonly search$ = new Subject<string>();
    protected readonly items$ = this.search$.pipe(
        debounceTime(0), // ensure form control is updated after last input
        filter(() => !this.value), // click on datalist item should not trigger new api request
        tap(() => this.showLoader.set(true)),
        debounceTime(300),
        switchMap((query) => (query.length >= 2 ? this.api.request$(query) : of(null))),
        tap(() => this.showLoader.set(false)),
    );

    protected value: string | null = null;
}
`;export{o as default};
