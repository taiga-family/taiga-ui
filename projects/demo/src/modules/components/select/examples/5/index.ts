import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiContext, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiLetDirective, tuiPure} from '@taiga-ui/cdk';
import {
    TuiDataListComponent,
    TuiDataListDirective,
    TuiLoaderComponent,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {delay, of} from 'rxjs';

interface Python {
    readonly id: number;
    readonly name: string;
}

const ITEMS: readonly Python[] = [
    {id: 42, name: 'John Cleese'},
    {id: 237, name: 'Eric Idle'},
    {id: 666, name: 'Michael Palin'},
    {id: 123, name: 'Terry Gilliam'},
    {id: 777, name: 'Terry Jones'},
    {id: 999, name: 'Graham Chapman'},
];

@Component({
    standalone: true,
    imports: [
        TuiSelectModule,
        TuiLetDirective,
        TuiTextfieldControllerModule,
        FormsModule,
        AsyncPipe,
        TuiDataListDirective,
        TuiDataListComponent,
        NgIf,
        TuiOptionComponent,
        NgForOf,
        TuiLoaderComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 42;

    // Server request for items imitation
    protected readonly items$ = of(ITEMS).pipe(delay(3000));

    @tuiPure
    protected stringify(items: readonly Python[]): TuiStringHandler<TuiContext<number>> {
        const map = new Map(items.map(({id, name}) => [id, name] as [number, string]));

        return ({$implicit}: TuiContext<number>) => map.get($implicit) || '';
    }
}
