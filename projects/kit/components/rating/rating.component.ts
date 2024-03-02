import {
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
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
    type TuiFocusableElementAccessor,
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
    public min = this.options.min;

    @Input()
    public max = this.options.max;

    @Input()
    public iconNormal = this.options.iconNormal;

    @Input()
    public iconFilled = this.options.iconFilled;

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.computedDisabled || !this.focusableElement
            ? null
            : this.focusableElement.nativeElement;
    }

    public get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    public get percent(): number {
        return tuiClamp((100 * this.value) / this.max, 0, 100);
    }

    public setRateByReverseIndex(index: number): void {
        const reversedIndex = this.max - index;

        if (reversedIndex <= this.min) {
            return;
        }

        this.value = reversedIndex;
    }

    public setRate(value: number): void {
        this.value = value;
    }

    protected get isFocusable(): boolean {
        return !(this.readOnly || this.disabled);
    }

    @HostListener('focusin', ['true'])
    @HostListener('focusout', ['false'])
    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected getFallbackValue(): number {
        return 0;
    }
}
