import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';
import {TuiSelectComponent} from '@taiga-ui/kit';

@Component({
    selector: 'tui-select-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSelectExample4 {
    readonly pythons = [
        'de la Concordia «Gabo» García Márquez',
        'John Cleese',
        'Eric Idle',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
        'Graham Chapman',
    ];

    value = this.pythons[0];

    constructor(
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
    ) {}

    addMore(select: TuiSelectComponent<unknown>): void {
        select.handleOption(select.value);
        this.alertService.open('Add more is clicked').subscribe();
    }
}
