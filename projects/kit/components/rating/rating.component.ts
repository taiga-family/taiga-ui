import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostListener,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiClamp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';

import {TUI_RATING_OPTIONS} from './rating.options';

@Component({
    selector: 'tui-rating',
    templateUrl: './rating.template.html',
    styleUrls: ['./rating.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiRatingComponent),
        tuiAsControl(TuiRatingComponent),
    ],
})
export class TuiRatingComponent
    extends AbstractTuiControl<number>
    implements TuiFocusableElementAccessor
{
    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<HTMLInputElement>;

    private readonly options = inject(TUI_RATING_OPTIONS);

    @Input()
    min = this.options.min;

    @Input()
    max = this.options.max;

    @Input()
    iconNormal = this.options.iconNormal;

    @Input()
    iconFilled = this.options.iconFilled;

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.computedDisabled || !this.focusableElement
            ? null
            : this.focusableElement.nativeElement;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    get isFocusable(): boolean {
        return !(this.readOnly || this.disabled);
    }

    get percent(): number {
        return tuiClamp((100 * this.value) / this.max, 0, 100);
    }

    @HostListener('focusin', ['true'])
    @HostListener('focusout', ['false'])
    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    setRateByReverseIndex(index: number): void {
        const reversedIndex = this.max - index;

        if (reversedIndex <= this.min) {
            return;
        }

        this.value = reversedIndex;
    }

    setRate(value: number): void {
        this.value = value;
    }

    protected getFallbackValue(): number {
        return 0;
    }
}
