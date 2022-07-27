import {Component, HostListener} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiClamp} from '@taiga-ui/cdk';
import {BehaviorSubject, of, timer} from 'rxjs';
import {distinctUntilChanged, mapTo, switchMap} from 'rxjs/operators';

@Component({
    selector: `tui-slider-example-6`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiSliderExample6 {
    min = 0.5;
    max = 2;
    value = 1;

    readonly active$ = new BehaviorSubject(false);
    readonly showHint$ = this.active$.pipe(
        distinctUntilChanged(),
        switchMap(active => (active ? of(true) : timer(1000).pipe(mapTo(false)))),
    );

    @HostListener(`pointerdown`, [`true`])
    @HostListener(`document:pointerup`, [`false`])
    onKeydown(show: boolean): void {
        this.active$.next(show);
    }

    change(step: number): void {
        this.value = tuiClamp(this.value + step, this.min, this.max);
    }
}
