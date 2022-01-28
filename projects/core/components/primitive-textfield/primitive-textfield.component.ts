import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Output,
    QueryList,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiInteractive,
    isNativeFocused,
    setNativeFocused,
    TuiCreditCardAutofillName,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    TUI_HINT_WATCHED_CONTROLLER,
    TuiHintControllerDirective,
} from '@taiga-ui/core/directives/hint-controller';
import {
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    TuiTextfieldController,
} from '@taiga-ui/core/directives/textfield-controller';
import {TUI_MODE, TUI_TEXTFIELD_APPEARANCE} from '@taiga-ui/core/tokens';
import {TuiBrightness, TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {getBorder} from '@taiga-ui/core/utils/miscellaneous';
import {PolymorpheusContent, PolymorpheusOutletComponent} from '@tinkoff/ng-polymorpheus';
import {fromEvent, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {TUI_PRIMITIVE_TEXTFIELD_PROVIDERS} from './primitive-textfield.providers';
import {
    TUI_PRIMITIVE_TEXTFIELD_OPTIONS,
    TuiPrimitiveTextfieldOptions,
} from './primitive-textfield-options';

const ICON_PADDING = 1.75;
const ICON_PADDING_S = 1.5;

@Component({
    selector: 'tui-primitive-textfield',
    templateUrl: './primitive-textfield.template.html',
    styleUrls: ['./primitive-textfield.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_PRIMITIVE_TEXTFIELD_PROVIDERS,
    host: {
        '($.data-mode.attr)': 'mode$',
        '[class._autofilled]': 'autofilled',
    },
})
export class TuiPrimitiveTextfieldComponent
    extends AbstractTuiInteractive
    implements TuiFocusableElementAccessor
{
    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<HTMLInputElement>;

    @Input()
    @tuiDefaultProp()
    editable = true;

    @Input()
    @tuiDefaultProp()
    filler = '';

    @Input()
    @tuiDefaultProp()
    iconAlign: TuiPrimitiveTextfieldOptions['iconAlign'] = this.options.iconAlign;

    // TODO: Remove null in 3.0
    @Input()
    @tuiDefaultProp()
    iconContent: PolymorpheusContent | null = null;

    @Input()
    @tuiDefaultProp()
    iconCleaner: TuiPrimitiveTextfieldOptions['iconCleaner'] = this.options.iconCleaner;

    @Input()
    @HostBinding('class._readonly')
    @tuiDefaultProp()
    readOnly = false;

    @Input()
    @tuiDefaultProp()
    invalid = false;

    @Input()
    @tuiDefaultProp()
    disabled = false;

    @Input()
    @tuiDefaultProp()
    prefix = '';

    @Input()
    @tuiDefaultProp()
    postfix = '';

    @Input()
    @tuiDefaultProp()
    value = '';

    @Output()
    readonly valueChange = new EventEmitter<string>();

    @Output()
    readonly autofilledChange = new EventEmitter<boolean>();

    @ContentChildren(PolymorpheusOutletComponent)
    readonly content?: QueryList<unknown>;

    autofilled = false;

    constructor(
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_TEXTFIELD_APPEARANCE) readonly appearance: string,
        @Inject(TUI_TEXTFIELD_WATCHED_CONTROLLER)
        readonly controller: TuiTextfieldController,
        @Inject(TUI_HINT_WATCHED_CONTROLLER)
        readonly hintController: TuiHintControllerDirective,
        @Inject(TUI_PRIMITIVE_TEXTFIELD_OPTIONS)
        readonly options: TuiPrimitiveTextfieldOptions,
    ) {
        super();
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.computedDisabled || !this.focusableElement
            ? null
            : this.focusableElement.nativeElement;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    @HostBinding('attr.data-tui-host-size')
    get size(): TuiSizeS | TuiSizeL {
        return this.controller.size;
    }

    @HostBinding('class._label-outside')
    get labelOutside(): boolean {
        return this.controller.labelOutside;
    }

    @HostBinding('class._invalid')
    get computedInvalid(): boolean {
        return !this.readOnly && !this.disabled && this.invalid;
    }

    get inputHidden(): boolean {
        return !!this.content?.length;
    }

    get hasValue(): boolean {
        return !!this.value;
    }

    get hasCleaner(): boolean {
        return (
            this.controller.cleaner && this.hasValue && !this.disabled && !this.readOnly
        );
    }

    get hasTooltip(): boolean {
        return !!this.hintController?.content && !this.disabled;
    }

    get hasCustomContent(): boolean {
        return !!this.controller.customContent;
    }

    get hasPlaceholder(): boolean {
        const hasDecor = this.controller.exampleText || this.prefix || this.postfix;
        const showDecor = hasDecor && !this.readOnly && this.computedFocused;
        const placeholderVisible = !this.hasValue && !showDecor;

        return this.placeholderRaisable || placeholderVisible;
    }

    get placeholderRaised(): boolean {
        return (
            this.placeholderRaisable &&
            ((this.computedFocused && !this.readOnly) || this.hasValue || this.autofilled)
        );
    }

    get borderLeft(): number {
        return this.iconAlignLeft ? this.iconPaddingLeft : 0;
    }

    get borderRight(): number {
        return getBorder(
            this.iconAlignRight,
            this.hasCleaner,
            this.hasTooltip,
            this.hasCustomContent,
        );
    }

    get iconAlignLeft(): boolean {
        return this.hasIcon && this.iconAlign === 'left';
    }

    get iconAlignRight(): boolean {
        return this.hasIcon && this.iconAlign === 'right';
    }

    // Safari expiration date autofill workaround
    get name(): 'ccexpiryyear' | null {
        return this.controller.autocomplete === TuiCreditCardAutofillName.CcExp
            ? 'ccexpiryyear'
            : null;
    }

    @tuiPure
    getIndent$(element: HTMLElement): Observable<number> {
        return fromEvent(element, 'scroll').pipe(map(() => -1 * element.scrollLeft));
    }

    clear() {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.value = '';
        }

        this.updateValue('');
    }

    onMouseDown(event: MouseEvent) {
        if (
            !this.focusableElement ||
            event.target === this.focusableElement.nativeElement
        ) {
            return;
        }

        event.preventDefault();
        setNativeFocused(this.focusableElement.nativeElement);
    }

    onModelChange(value: string) {
        this.updateValue(value);
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onFocused(focused: boolean) {
        this.updateFocused(focused);
    }

    onAutofilled(autofilled: boolean) {
        this.updateAutofilled(autofilled);
    }

    private get iconPaddingLeft(): number {
        return this.size === 's' ? ICON_PADDING_S : ICON_PADDING;
    }

    private get placeholderRaisable(): boolean {
        return this.size !== 's' && !this.labelOutside;
    }

    private get hasIcon(): boolean {
        return !!this.iconContent;
    }

    private updateAutofilled(autofilled: boolean) {
        if (this.autofilled === autofilled) {
            return;
        }

        this.autofilled = autofilled;
        this.autofilledChange.emit(autofilled);
    }

    private updateValue(value: string) {
        this.value = value;
        this.valueChange.emit(value);
    }
}
