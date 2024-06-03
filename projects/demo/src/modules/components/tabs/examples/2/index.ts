import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItemDirective} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import {TuiTabDirective, TuiTabsWithMoreComponent} from '@taiga-ui/kit';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiTabsWithMoreComponent,
        TuiItemDirective,
        TuiTabDirective,
        TuiInputNumberModule,
        FormsModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    private readonly alerts = inject(TuiAlertService);

    protected activeItemIndex = 0;

    protected onClick(item: string): void {
        this.alerts.open(item).subscribe();
    }
}
