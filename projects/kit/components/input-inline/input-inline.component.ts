import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    Input,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiControl,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {TUI_VALUE_ACCESSOR_PROVIDER} from '@taiga-ui/kit/providers';

@Component({
    selector: 'tui-input-inline',
    templateUrl: './input-inline.template.html',
    styleUrls: ['./input-inline.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TUI_VALUE_ACCESSOR_PROVIDER,
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputInlineComponent),
        },
    ],
})
export class TuiInputInlineComponent
    extends AbstractTuiControl<string | number>
    implements TuiFocusableElementAccessor
{
    @ViewChild('native')
    private readonly native?: ElementRef<HTMLInputElement>;

    @Input()
    @tuiDefaultProp()
    maxLength: number | null = null;

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return !this.native ? null : this.native.nativeElement;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    get hasValue(): boolean {
        return this.value !== '';
    }

    onValueChange(value: string): void {
        this.updateValue(value);
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected getFallbackValue(): string {
        return '';
    }
}
