import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiButtonDirective, TuiSvgComponent} from '@taiga-ui/core';
import {TuiPushComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiPushComponent, TuiSvgComponent, TuiButtonDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    private readonly alert = inject(TuiAlertService);

    protected onClose(): void {
        this.alert
            .open('Close button is visible when you subscribe to (close) output')
            .subscribe();
    }
}
