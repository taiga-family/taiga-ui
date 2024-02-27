import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';
import {TuiPushService} from '@taiga-ui/kit';
import {switchMap, take} from 'rxjs';

@Component({
    selector: 'tui-push-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiPushExample2 {
    protected readonly push = inject(TuiPushService);
    protected readonly alert = inject(TuiAlertService);

    protected onClick(): void {
        this.push
            .open('This is <strong>heavy</strong>!', {
                heading: 'Great Scott!',
                type: 'Quote',
                icon: 'tuiIconVideoLarge',
                buttons: ['Roads?', '1.21 Gigawatts!?!'],
            })
            .pipe(
                take(1),
                switchMap(button => this.alert.open(button)),
            )
            .subscribe();
    }
}
