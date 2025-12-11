/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {AsyncPipe} from '@angular/common';
import {
    type AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    contentChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {tuiHintOptionsProvider} from '@taiga-ui/core/portals/hint';

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
    protected readonly slider = contentChild(TuiSliderComponent);
    protected readonly control = contentChild(NgControl);

    public ngAfterContentInit(): void {
        ngDevMode &&
            console.assert(
                Boolean(this.control()?.valueChanges),
                '\n[tuiSliderThumbLabel] expected <input tuiSlider type="range" /> to use Angular Forms.\n' +
                    'Use [(ngModel)] or [formControl] or formControlName for correct work.',
            );
    }

    protected get ratio(): number {
        return this.slider()?.valueRatio || 0;
    }

    protected get ghostStart(): number {
        return this.ratio * (this.slider()?.el.offsetWidth || 0);
    }
}
