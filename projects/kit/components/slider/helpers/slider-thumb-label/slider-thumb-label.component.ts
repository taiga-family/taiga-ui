import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    Inject,
} from '@angular/core';
import {tuiAssert, TuiDestroyService, tuiWatch} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {TuiSliderComponent} from '../../slider.component';

@Component({
    selector: '[tuiSliderThumbLabel]',
    templateUrl: './slider-thumb-label.template.html',
    styleUrls: ['./slider-thumb-label.style.less'],
    providers: [TuiDestroyService],
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

    constructor(
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        @Inject(TuiDestroyService) private readonly destroy$: Observable<unknown>,
    ) {}

    ngAfterContentInit(): void {
        if (this.slider?.control?.valueChanges) {
            this.slider.control.valueChanges
                .pipe(tuiWatch(this.changeDetectorRef), takeUntil(this.destroy$))
                .subscribe();
        } else {
            tuiAssert.assert(
                false,
                `\n[tuiSliderThumbLabel] expected <input tuiSlider type="range" /> to use Angular Forms.\n` +
                    'Use [(ngModel)] or [formControl] or formControlName for correct work.',
            );
        }
    }
}
