import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiControl,
    tuiAsFocusableItemAccessor,
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
        tuiAsFocusableItemAccessor(TuiInputInlineComponent),
    ],
})
export class TuiInputInlineComponent
    extends AbstractTuiControl<number | string>
    implements TuiFocusableElementAccessor
{
    @ViewChild('native')
    private readonly native?: ElementRef<HTMLInputElement>;

    @ViewChild('text')
    private readonly text?: ElementRef<HTMLElement>;

    @Input()
    public maxLength: number | null = null;

    protected indent = -1;

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return !this.native ? null : this.native.nativeElement;
    }

    public get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    protected get hasValue(): boolean {
        return this.value !== '';
    }

    protected onValueChange(value: string): void {
        if (!this.text) {
            return;
        }

        // Sync update so width is calculated immediately
        this.text.nativeElement.textContent = value;
        this.text.nativeElement.style.textIndent = '';
        this.value = value;
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected onScroll(): void {
        const indent = this.native?.nativeElement.scrollLeft || 0;

        // -1 for Safari (see styles)
        this.indent = -1 - indent;
    }

    protected getFallbackValue(): string {
        return '';
    }
}
