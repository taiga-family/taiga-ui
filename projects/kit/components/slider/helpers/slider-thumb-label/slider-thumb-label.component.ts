import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
} from '@angular/core';
import {tuiAssert} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';

import {TuiSliderComponent} from '../../slider.component';

@Component({
    selector: '[tuiSliderThumbLabel]',
    templateUrl: './slider-thumb-label.template.html',
    styleUrls: ['./slider-thumb-label.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSliderThumbLabelComponent implements AfterContentInit {
    @ContentChild(TuiSliderComponent)
    readonly slider?: TuiSliderComponent;

    get size(): TuiSizeS {
        return this.slider?.size || 'm';
    }

    get ratio(): number {
        return (this.slider?.valuePercentage || 0) / 100;
    }

    get ghostLeft(): number {
        return this.ratio * (this.slider?.elementRef.nativeElement.offsetWidth || 0);
    }

    ngAfterContentInit(): void {
        tuiAssert.assert(
            Boolean(this.slider?.control?.valueChanges),
            `\n[tuiSliderThumbLabel] expected <input tuiSlider type="range" /> to use Angular Forms.\n` +
                'Use [(ngModel)] or [formControl] or formControlName for correct work.',
        );
    }
}
