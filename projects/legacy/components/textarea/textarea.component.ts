import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiIsNativeFocused} from '@taiga-ui/cdk/utils/focus';
import {TUI_TEXTFIELD_OPTIONS} from '@taiga-ui/core/components/textfield';
import {TuiHintOptionsDirective} from '@taiga-ui/core/directives/hint';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {AbstractTuiControl, tuiAsControl} from '@taiga-ui/legacy/classes';
import {
    TUI_ICON_PADDINGS,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
} from '@taiga-ui/legacy/directives';
import type {TuiFocusableElementAccessor} from '@taiga-ui/legacy/tokens';
import {tuiAsFocusableItemAccessor} from '@taiga-ui/legacy/tokens';
import {tuiGetBorder} from '@taiga-ui/legacy/utils';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export const DEFAULT_ROWS = 20;
export const LINE_HEIGHT_M = 20;
export const LINE_HEIGHT_L = 24;

@Component({
    selector: 'tui-textarea',
    templateUrl: './textarea.template.html',
    styleUrls: ['./textarea.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiTextareaComponent),
        tuiAsControl(TuiTextareaComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
    host: {
        '[class._ios]': 'isIOS',
    },
})
export class TuiTextareaComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<HTMLTextAreaElement>;

    @ContentChild(TuiTextfieldComponent, {read: ElementRef})
    private readonly textfield?: ElementRef<HTMLTextAreaElement>;

    private readonly options = inject(TUI_TEXTFIELD_OPTIONS);

    protected readonly isIOS = inject(TUI_IS_IOS);
    protected readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    protected readonly hintOptions = inject(TuiHintOptionsDirective, {optional: true});

    @Input()
    public rows = DEFAULT_ROWS;

    @Input()
    public maxLength: number | null = null;

    @Input()
    @HostBinding('class._expandable')
    public expandable = false;

    public get nativeFocusableElement(): HTMLTextAreaElement | null {
        if (this.computedDisabled) {
            return null;
        }

        return (
            this.textfield?.nativeElement || this.focusableElement?.nativeElement || null
        );
    }

    public get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    public get computeMaxHeight(): number | null {
        return this.expandable ? this.rows * this.lineHeight : null;
    }

    public onValueChange(value: string): void {
        this.value = value;
    }

    @HostBinding('class._label-outside')
    protected get labelOutside(): boolean {
        return this.options.appearance === 'table' || this.controller.labelOutside;
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.controller.size;
    }

    @HostBinding('style.--border-start.rem')
    protected get borderStart(): number {
        return this.iconLeftContent ? TUI_ICON_PADDINGS[this.size] : 0;
    }

    @HostBinding('style.--border-end.rem')
    protected get borderEnd(): number {
        return tuiGetBorder(
            !!this.iconContent,
            this.hasCleaner,
            this.hasTooltip,
            this.hasCustomContent,
            this.size,
        );
    }

    @HostBinding('class._has-tooltip')
    protected get hasTooltip(): boolean {
        return (
            !!this.hintOptions?.content &&
            (this.controller.options.hintOnDisabled || !this.computedDisabled)
        );
    }

    @HostBinding('class._has-value')
    protected get hasValue(): boolean {
        return this.value !== '';
    }

    @HostBinding('class._has-counter')
    protected get hasCounter(): boolean {
        return !!this.maxLength && this.interactive;
    }

    protected get appearance(): string {
        return this.options.appearance === 'table' ? 'table' : this.controller.appearance;
    }

    protected get hasCleaner(): boolean {
        return this.controller.cleaner && this.hasValue && this.interactive;
    }

    protected get hasPlaceholder(): boolean {
        return this.placeholderRaisable || (!this.hasValue && !this.hasExampleText);
    }

    protected get hasCustomContent(): boolean {
        return !!this.controller.customContent;
    }

    protected get iconLeftContent(): PolymorpheusContent<
        TuiContext<TuiSizeL | TuiSizeS>
    > {
        return this.controller.iconLeft;
    }

    protected get iconContent(): PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>> {
        return this.controller.icon;
    }

    protected get iconCleaner(): PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>> {
        return this.controller.options.iconCleaner;
    }

    protected get hasExampleText(): boolean {
        return (
            !!this.textfield?.nativeElement.placeholder &&
            this.focused &&
            !this.hasValue &&
            !this.readOnly
        );
    }

    protected get placeholderRaised(): boolean {
        return (
            this.placeholderRaisable &&
            ((this.computedFocused && !this.readOnly) || this.hasValue)
        );
    }

    protected get fittedContent(): string {
        return this.value.slice(0, this.maxLength || Infinity);
    }

    protected get extraContent(): string {
        return this.value.slice(this.maxLength || Infinity);
    }

    @HostListener('focusin', ['true'])
    @HostListener('focusout', ['false'])
    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected onMouseDown(event: MouseEvent): void {
        if (event.target === this.nativeFocusableElement) {
            return;
        }

        event.preventDefault();

        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.focus();
        }
    }

    protected getFallbackValue(): string {
        return '';
    }

    private get lineHeight(): number {
        return this.controller.size === 'm' ? LINE_HEIGHT_M : LINE_HEIGHT_L;
    }

    private get placeholderRaisable(): boolean {
        return this.size !== 's' && !this.controller.labelOutside;
    }
}
