import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiDataList, TuiIcon} from '@taiga-ui/core';
import {type TuiSelectComponent, TuiSelectModule} from '@taiga-ui/legacy';

@Component({
    imports: [FormsModule, TuiDataList, TuiIcon, TuiSelectModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected readonly pythons = [
        'de la Concordia «Gabo» García Márquez',
        ...inject<readonly string[]>('Pythons' as any),
    ];

    protected value = this.pythons[0]!;

    protected addMore(select: TuiSelectComponent<unknown>): void {
        select.handleOption(select.value);
        this.alerts.open('Add more is clicked').subscribe();
    }
}
