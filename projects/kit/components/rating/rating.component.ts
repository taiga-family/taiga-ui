import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    forwardRef,
    HostListener,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {EMPTY_FUNCTION, moveFocus} from '@taiga-ui/cdk';

import {RatingOptions, TUI_RATING_OPTIONS} from './rating.options';
import {TuiRatingState} from './rating.state';
import {getChildrenByParent} from './utils/get-children-by-parent';

@Component({
    selector: 'tui-rating',
    templateUrl: './rating.template.html',
    styleUrls: ['./rating.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TuiRatingComponent),
            multi: true,
        },
    ],
})
export class TuiRatingComponent implements ControlValueAccessor {
    @Input() tuiRateMax: number = this.options.rateMax;
    @Input() tuiRateReadonly: boolean = this.options.rateReadonly;
    @Input() tuiRateColor: string = this.options.rateColor;
    @Input() tuiRateEmptyIcon: string = this.options.rateEmptyIcon;
    @Input() tuiRateSelectedIcon: string = this.options.rateSelectedIcon;
    @Output() readonly tuiRateActiveChange: EventEmitter<number> = new EventEmitter();
    ratingState: TuiRatingState = new TuiRatingState();
    onTouched = EMPTY_FUNCTION;
    onChange = EMPTY_FUNCTION;
    touched = false;
    disabled = false;

    constructor(
        @Inject(TUI_RATING_OPTIONS)
        private readonly options: RatingOptions,
        @Inject(ChangeDetectorRef) private readonly cd: ChangeDetectorRef,
    ) {}

    @Input()
    set tuiRateDisable(isDisabled: boolean) {
        this.disabled = isDisabled;
    }

    @Input()
    set tuiRateActive(rate: number) {
        this.ratingState.setCurrentRate(rate);
    }

    get enabled(): boolean {
        return !(this.tuiRateReadonly || this.disabled);
    }

    @HostListener('keydown.arrowRight.prevent', ['$event.target', '1'])
    @HostListener('keydown.arrowLeft.prevent', ['$event.target', '-1'])
    onKeyDownArrow(current: HTMLElement, previousIndex: number): void {
        if (this.enabled) {
            const elements = getChildrenByParent(current.parentElement);

            const movedIndex = moveFocus(
                elements.indexOf(current),
                elements,
                previousIndex,
            );

            if (movedIndex >= 0) {
                this.rateOnFocus(movedIndex + 1);
            }
        }
    }

    writeValue(rate: number): void {
        this.tuiRateActive = rate;
    }

    registerOnChange(onChange: () => void): void {
        this.onChange = onChange;
    }

    registerOnTouched(onTouched: () => void): void {
        this.onTouched = onTouched;
    }

    ratesSetActive(rate: number): void {
        if (this.enabled) {
            this.markAsTouched();

            this.ratingState.toggleCurrentRate(rate);
            const current = this.ratingState.currentRate;

            this.onChange(current);
            this.tuiRateActiveChange.emit(current);
        }
    }

    rateOnFocus(rate: number): void {
        if (this.enabled) {
            this.markAsTouched();
            this.ratingState.setFocusedRate(rate);
        }
    }

    ratesMouseLeave(parent: HTMLElement): void {
        this.unFocusElements(parent);
        this.rateOnBlur();
    }

    rateOnBlur(): void {
        if (this.enabled) {
            this.markAsTouched();
            this.ratingState.setFocusedRate(0);
        }
    }

    rateMouseEnter(parent: HTMLElement, rate: number): void {
        this.unFocusElements(parent);
        this.rateOnFocus(rate);
    }

    setDisabledState(isDisabled: boolean) {
        this.tuiRateDisable = isDisabled;
        this.cd.detectChanges();
    }

    markAsTouched(): void {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }

    private unFocusElements(parent: HTMLElement): void {
        if (this.enabled) {
            const elements = getChildrenByParent(parent);

            for (const element of elements) {
                element.blur();
            }
        }
    }
}
