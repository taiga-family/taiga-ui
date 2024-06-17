import {AsyncPipe, PercentPipe} from '@angular/common';
import {Component, HostListener} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER, tuiClamp} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiHint} from '@taiga-ui/core';
import {TuiSliderComponent, TuiSliderThumbLabelComponent} from '@taiga-ui/kit';
import {BehaviorSubject, distinctUntilChanged, map, of, switchMap, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiSliderThumbLabelComponent,
        TuiHint,
        PercentPipe,
        AsyncPipe,
        TuiSliderComponent,
        FormsModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected min = 0.5;
    protected max = 2;
    protected value = 1;

    protected readonly active$ = new BehaviorSubject(false);
    protected readonly showHint$ = this.active$.pipe(
        distinctUntilChanged(),
        switchMap(active =>
            active ? of(true) : timer(1000).pipe(map(TUI_FALSE_HANDLER)),
        ),
    );

    @HostListener('pointerdown', ['true'])
    @HostListener('document:pointerup', ['false'])
    protected onKeydown(show: boolean): void {
        this.active$.next(show);
    }

    protected change(step: number): void {
        this.value = tuiClamp(this.value + step, this.min, this.max);
    }
}
