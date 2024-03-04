/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {
    type AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {tuiAssert} from '@taiga-ui/cdk';
import {type TuiSizeS} from '@taiga-ui/core';

import {TuiSliderComponent} from '../../slider.component';

@Component({
    selector: '[tuiSliderThumbLabel]',
    templateUrl: './slider-thumb-label.template.html',
    styleUrls: ['./slider-thumb-label.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSliderThumbLabelComponent implements AfterContentInit {
    @ContentChild(TuiSliderComponent)
    protected readonly slider?: TuiSliderComponent;

    @ContentChild(NgControl)
    protected readonly control?: NgControl;

    public ngAfterContentInit(): void {
        ngDevMode &&
            tuiAssert.assert(
                Boolean(this.control?.valueChanges),
                '\n[tuiSliderThumbLabel] expected <input tuiSlider type="range" /> to use Angular Forms.\n' +
                    'Use [(ngModel)] or [formControl] or formControlName for correct work.',
            );
    }

    protected get size(): TuiSizeS {
        return this.slider?.size || 'm';
    }

    protected get ratio(): number {
        return this.slider?.valueRatio || 0;
    }

    protected get ghostLeft(): number {
        return this.ratio * (this.slider?.el.offsetWidth || 0);
    }
}
