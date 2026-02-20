import"./chunk-HU6DUUP4.js";var i=`import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiIcon,
    TuiNotificationService,
    TuiNumberFormat,
    TuiTextfield,
} from '@taiga-ui/core';
import {TuiInputNumber, TuiTabs} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiIcon,
        TuiInputNumber,
        TuiNumberFormat,
        TuiTabs,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

    protected activeItemIndex = 0;

    protected readonly steps = ['Sales', 'Settings', 'News'];

    protected onClick(item: string): void {
        this.alerts.open(item).subscribe();
    }
}
`;export{i as default};
