import"./chunk-HU6DUUP4.js";var e=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiNotificationMiddleService} from '@taiga-ui/kit';
import {bufferTime, first, startWith, switchMap, timer} from 'rxjs';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly notification = inject(TuiNotificationMiddleService);

    protected onClick(): void {
        this.notification
            .open('Loading...')
            .pipe(
                startWith(null),
                // Imitating a quick request
                switchMap(() => timer(100)),
                // Using minimal time to show a notification
                bufferTime(600),
                first(),
            )
            .subscribe();
    }
}
`;export{e as default};
