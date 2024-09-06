import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';
import {TuiTabs} from '@taiga-ui/kit';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputNumberModule, TuiTabs],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected activeItemIndex = 0;

    protected onClick(item: string): void {
        this.alerts.open(item).subscribe();
    }
}
