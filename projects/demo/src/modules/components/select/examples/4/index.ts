import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiAlertService,
    TuiDataListComponent,
    TuiDataListDirective,
    TuiIcon,
    TuiOptGroupDirective,
    TuiOptionComponent,
} from '@taiga-ui/core';
import type {TuiSelectComponent} from '@taiga-ui/legacy';
import {TuiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiSelectModule,
        FormsModule,
        TuiDataListComponent,
        TuiDataListDirective,
        TuiOptGroupDirective,
        NgForOf,
        TuiOptionComponent,
        TuiIcon,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected readonly pythons = [
        'de la Concordia «Gabo» García Márquez',
        'John Cleese',
        'Eric Idle',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
        'Graham Chapman',
    ];

    protected value = this.pythons[0];

    protected addMore(select: TuiSelectComponent<unknown>): void {
        select.handleOption(select.value);
        this.alerts.open('Add more is clicked').subscribe();
    }
}
