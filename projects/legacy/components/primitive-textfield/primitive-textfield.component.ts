import type {ElementRef, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    EventEmitter,
    inject,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiInjectElement, tuiRetargetedBoundaryCrossing} from '@taiga-ui/cdk/utils/dom';
import {tuiIsNativeFocusedIn} from '@taiga-ui/cdk/utils/focus';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_TEXTFIELD_OPTIONS as OPTIONS} from '@taiga-ui/core/components/textfield';
import {TuiHintOptionsDirective} from '@taiga-ui/core/directives/hint';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {AbstractTuiInteractive} from '@taiga-ui/legacy/classes';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_OPTIONS as LEGACY_OPTIONS,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
} from '@taiga-ui/legacy/directives';
import {tuiAsFocusableItemAccessor} from '@taiga-ui/legacy/tokens';
import {tuiGetBorder} from '@taiga-ui/legacy/utils';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';
import {fromEvent, map} from 'rxjs';

import type {TuiPrimitiveTextfield} from './primitive-textfield-types';

export const TUI_ICON_START_PADDINGS: Record<TuiSizeL | TuiSizeS, number> = {
    s: 1.25,
    m: 1.75,
    l: 2.25,
};

/**
 * @deprecated: use {@link TuiTextfield}
 * https://taiga-ui.dev/components/textfield
 */
@Component({
    standalone: false,
    selector: 'tui-primitive-textfield',
    templateUrl: './primitive-textfield.template.html',
    styleUrls: ['./primitive-textfield.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiPrimitiveTextfieldComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
    host: {
        '[attr.data-size]': 'size',
        '[class._readonly]': 'readOnly',
        '[class._hidden]': 'inputHidden',
        '[class._invalid]': 'computedInvalid',
        '[class._autofilled]': 'autofilled',
        '[style.--t-border-start.rem]': 'borderStart',
        '[style.--t-border-end.rem]': 'borderEnd',
        '[class._label-outside]': 'labelOutside',
        '(focusin)': 'onFocused(true)',
        '(focusout)': 'onFocused(false)',
        '(transitionstart.capture)': 'transitionStartHandler($event)',
    },
})
export class TuiPrimitiveTextfieldComponent
    extends AbstractTuiInteractive
    implements TuiPrimitiveTextfield
{
    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<HTMLInputElement>;

    private readonly legacyOptions = inject(LEGACY_OPTIONS);
    private readonly el = tuiInjectElement();

    @ContentChildren(PolymorpheusOutlet, {descendants: true})
    protected readonly content?: QueryList<unknown>;

    protected readonly options = inject(OPTIONS);
    protected readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    protected readonly hintOptions = inject(TuiHintOptionsDirective, {optional: true});
    protected autofilled = false;

    @Input()
    public editable = true;

    /**
     * @deprecated:
     * use `tuiTextfieldOptionsProvider({iconCleaner: `@tui.chevron-up`})`
     */
    @Input()
    public iconCleaner = this.legacyOptions.iconCleaner;

    @Input()
    public readOnly = false;

    @Input()
    public invalid = false;

    @Input()
    public disabled = false;

    @Input()
    public value = '';

    @Output()
    public readonly valueChange = new EventEmitter<string>();

    public get prefix(): string {
        return this.controller.prefix;
    }

    public get postfix(): string {
        return this.controller.postfix;
    }

    public get filler(): string {
        return this.controller.filler;
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        if (this.computedDisabled || !this.focusableElement) {
            return null;
        }

        const {nativeElement} = this.focusableElement;

        return (nativeElement.previousElementSibling ||
            nativeElement) as HTMLInputElement | null;
    }

    public get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el);
    }

    public get appearance(): string {
        return this.options.appearance() === 'table'
            ? 'table'
            : this.controller.appearance;
    }

    public onModelChange(value: string): void {
        this.updateValue(value);
    }

    protected get labelOutside(): boolean {
        return (
            this.appearance === 'table' ||
            this.size === 's' ||
            this.controller.labelOutside
        );
    }

    protected get size(): TuiSizeL | TuiSizeS {
        return this.controller.size;
    }

    protected get computedInvalid(): boolean {
        return !this.readOnly && !this.disabled && this.invalid;
    }

    protected get inputHidden(): boolean {
        return !!this.content?.length;
    }

    protected get borderStart(): number {
        return this.iconLeftContent ? this.iconPaddingLeft : 0;
    }

    protected get borderEnd(): number {
        return tuiGetBorder(
            !!this.iconContent,
            this.hasCleaner,
            this.hasTooltip,
            this.hasCustomContent,
            this.size,
        );
    }

    protected get hasValue(): boolean {
        return !!this.value;
    }

    protected get hasCleaner(): boolean {
        return (
            this.controller.cleaner &&
            this.hasValue &&
            !this.computedDisabled &&
            !this.readOnly
        );
    }

    protected get hasTooltip(): boolean {
        return !!this.hintOptions?.content && !this.computedDisabled;
    }

    protected get hasCustomContent(): boolean {
        return !!this.controller.customContent;
    }

    protected get placeholderVisible(): boolean {
        const hasDecor =
            this.nativeFocusableElement?.placeholder ||
            this.prefix ||
            this.postfix ||
            this.filler;
        const showDecor = hasDecor && !this.readOnly && this.computedFocused;

        return !this.hasValue && !showDecor;
    }

    protected get hasPlaceholder(): boolean {
        const placeholder = this.placeholderRaisable || this.placeholderVisible;

        return this.appearance === 'table' &&
            !this.nativeFocusableElement?.readOnly &&
            (this.prefix || this.postfix)
            ? placeholder && !this.value && !this.computedFocused
            : placeholder;
    }

    protected get placeholderRaised(): boolean {
        return (
            this.placeholderRaisable &&
            ((this.computedFocused && !this.readOnly) || this.hasValue || this.autofilled)
        );
    }

    protected get iconContent(): PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>> {
        return this.controller.icon;
    }

    protected get iconLeftContent(): PolymorpheusContent<
        TuiContext<TuiSizeL | TuiSizeS>
    > {
        return this.controller.iconStart;
    }

    protected get showHint(): boolean {
        return (
            !!this.hintOptions?.content &&
            (this.legacyOptions.hintOnDisabled || !this.computedDisabled)
        );
    }

    // Safari expiration date autofill workaround
    protected get name(): 'ccexpiryyear' | null {
        return this.nativeFocusableElement?.autocomplete === 'cc-exp'
            ? 'ccexpiryyear'
            : null;
    }

    protected get computedId(): string {
        return this.nativeFocusableElement?.id || '';
    }

    @tuiPure
    protected getIndent$(element: HTMLElement): Observable<number> {
        return fromEvent(element, 'scroll').pipe(
            map(() => -1 * Math.max(element.scrollLeft, 0)),
        );
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected clear(): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.value = '';
        }

        this.updateValue('');
    }

    protected onMouseDown(event: MouseEvent): void {
        const {nativeFocusableElement} = this;

        if (!nativeFocusableElement || event.target === nativeFocusableElement) {
            return;
        }

        event.preventDefault();
        nativeFocusableElement.focus();
    }

    protected transitionStartHandler({propertyName, target}: TransitionEvent): void {
        const matchedAutofill =
            propertyName.includes('box-shadow') && (target as Element)?.matches('input');

        if (matchedAutofill) {
            this.onAutofilled(!this.autofilled);
        }
    }

    protected onAutofilled(autofilled: boolean): void {
        this.updateAutofilled(autofilled);
    }

    protected detectRetargetFromLabel(event: Event): void {
        if (tuiRetargetedBoundaryCrossing(event)) {
            event.stopImmediatePropagation();
        }
    }

    private get iconPaddingLeft(): number {
        return TUI_ICON_START_PADDINGS[this.size];
    }

    private get placeholderRaisable(): boolean {
        return !this.labelOutside;
    }

    private updateAutofilled(autofilled: boolean): void {
        if (this.autofilled === autofilled) {
            return;
        }

        this.autofilled = autofilled;
    }

    private updateValue(value: string): void {
        this.value = value;
        this.valueChange.emit(value);
    }
}
