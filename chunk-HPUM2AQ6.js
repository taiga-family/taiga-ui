import"./chunk-HU6DUUP4.js";var i=`import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCheckbox, TuiNotificationService} from '@taiga-ui/core';
import {TuiChip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiButton, TuiCheckbox, TuiChip],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

    protected readonly checked = [true, false, true];
    protected readonly values = ['test', 'Some text', 'WOW!'];

    protected onChip(index: number): void {
        this.alerts.open(\`Clicked chip \${index + 1}\`).subscribe();
    }

    protected onX(index: number): void {
        this.alerts
            .open(\`Removed chip \${index + 1}\`, {appearance: 'negative'})
            .subscribe();
    }
}
`;export{i as default};
