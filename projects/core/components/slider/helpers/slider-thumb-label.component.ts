import {AsyncPipe} from '@angular/common';
import {
    type AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    contentChild,
    inject,
    INJECTOR,
} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {tuiHintOptionsProvider} from '@taiga-ui/core/portals/hint';
import {switchMap} from 'rxjs';

import {TuiSliderComponent} from '../slider.component';

@Component({
    selector: '[tuiSliderThumbLabel]',
    imports: [AsyncPipe],
    templateUrl: './slider-thumb-label.template.html',
    styleUrl: './slider-thumb-label.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiHintOptionsProvider({direction: 'top', appearance: 'floating'})],
})
export class TuiSliderThumbLabel implements AfterContentInit {
    private readonly injector = inject(INJECTOR);

    protected readonly slider = contentChild(TuiSliderComponent);
    protected readonly control = contentChild(NgControl);

    protected readonly valueChanges$ = toObservable(this.control).pipe(
        switchMap((control) => tuiControlValue(control, this.injector)),
    );

    public ngAfterContentInit(): void {
        ngDevMode &&
            console.assert(
                Boolean(this.control()),
                '\n[tuiSliderThumbLabel] expected <input tuiSlider type="range" /> to use Angular Forms.\nUse [(ngModel)] or [formControl] or formControlName or [formField] for correct work.',
            );
    }

    protected get ratio(): number {
        return this.slider()?.valueRatio || 0;
    }

    protected get ghostStart(): number {
        return this.ratio * (this.slider()?.el.offsetWidth || 0);
    }
}
