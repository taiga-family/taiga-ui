import"./chunk-HU6DUUP4.js";var i=`import {Component, signal} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER, TuiAnimated} from '@taiga-ui/cdk';
import {TuiButton, TuiLoader} from '@taiga-ui/core';
import {TuiAvatar, TuiNotificationMiddle} from '@taiga-ui/kit';
import {filter, map, startWith, switchMap, take, tap, timer} from 'rxjs';

@Component({
    imports: [TuiAnimated, TuiAvatar, TuiButton, TuiLoader, TuiNotificationMiddle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly open = signal(false);
    protected readonly loading = toSignal(
        toObservable(this.open).pipe(
            filter(Boolean),
            switchMap(() =>
                timer(3000, 2000).pipe(
                    take(2),
                    map(TUI_FALSE_HANDLER),
                    startWith(true),
                    tap({complete: () => this.open.set(false)}),
                ),
            ),
        ),
    );

    protected onClick(): void {
        this.open.set(true);
    }
}
`;export{i as default};
