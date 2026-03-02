import"./chunk-HU6DUUP4.js";var i=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiNotificationService} from '@taiga-ui/core';
import {TuiPushService} from '@taiga-ui/kit';
import {switchMap, take} from 'rxjs';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly push = inject(TuiPushService);
    protected readonly alert = inject(TuiNotificationService);

    protected onClick(): void {
        this.push
            .open('This is <strong>heavy</strong>!', {
                heading: 'Great Scott!',
                type: 'Quote',
                icon: '@tui.video',
                buttons: ['Roads?', '1.21 Gigawatts!?!'],
            })
            .pipe(
                take(1),
                switchMap((button) => this.alert.open(button)),
            )
            .subscribe();
    }
}
`;export{i as default};
