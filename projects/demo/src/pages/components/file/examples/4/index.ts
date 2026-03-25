import {Component} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimated} from '@taiga-ui/cdk';
import {TuiButton, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiFile} from '@taiga-ui/experimental';
import {TuiSlides} from '@taiga-ui/layout';
import {map, Subject, switchMap, takeWhile, timer} from 'rxjs';

@Component({
    imports: [TuiAnimated, TuiButton, TuiFile, TuiIcon, TuiSlides, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly orientations = ['horizontal', 'vertical'] as const;
    protected readonly trigger = new Subject<void>();

    protected readonly progress = toSignal(
        this.trigger.pipe(
            switchMap(() =>
                timer(0, 1000).pipe(
                    map((i) => 10 - i),
                    takeWhile(Boolean, true),
                ),
            ),
        ),
        {initialValue: 0},
    );
}
