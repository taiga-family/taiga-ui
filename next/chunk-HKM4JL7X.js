import"./chunk-HU6DUUP4.js";var o=`import {AsyncPipe, PercentPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER, tuiClamp} from '@taiga-ui/cdk';
import {TuiButton, TuiHint, TuiSlider} from '@taiga-ui/core';
import {BehaviorSubject, distinctUntilChanged, map, of, switchMap, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, FormsModule, PercentPipe, TuiButton, TuiHint, TuiSlider],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    host: {
        '(pointerdown)': 'onKeydown(true)',
        '(document:pointerup)': 'onKeydown(false)',
    },
})
export default class Example {
    protected min = 0.5;
    protected max = 2;
    protected value = 1;

    protected readonly active$ = new BehaviorSubject(false);
    protected readonly showHint$ = this.active$.pipe(
        distinctUntilChanged(),
        switchMap((active) =>
            active ? of(true) : timer(1000).pipe(map(TUI_FALSE_HANDLER)),
        ),
    );

    protected onKeydown(show: boolean): void {
        this.active$.next(show);
    }

    protected change(step: number): void {
        this.value = tuiClamp(this.value + step, this.min, this.max);
    }
}
`;export{o as default};
