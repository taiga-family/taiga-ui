import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    inject,
    Input,
    Output,
    QueryList,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiInteractive,
    tuiAsFocusableItemAccessor,
    TuiContext,
    tuiIsNativeFocusedIn,
    tuiPure,
    tuiRetargetedBoundaryCrossing,
} from '@taiga-ui/cdk';
import {TuiHintOptionsDirective} from '@taiga-ui/core/directives/hint';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_OPTIONS,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
} from '@taiga-ui/core/directives/textfield-controller';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {tuiGetBorder} from '@taiga-ui/core/utils/miscellaneous';
import {PolymorpheusContent, PolymorpheusOutletDirective} from '@tinkoff/ng-polymorpheus';
import {fromEvent, map, Observable} from 'rxjs';

import {TuiPrimitiveTextfield} from './primitive-textfield-types';

export const TUI_ICON_PADDINGS: Record<TuiSizeL | TuiSizeS, number> = {
    s: 1.25,
    m: 1.75,
    l: 2.25,
};

@Component({
    selector: 'tui-primitive-textfield',
    templateUrl: './primitive-textfield.template.html',
    styleUrls: ['./primitive-textfield.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiPrimitiveTextfieldComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
    host: {
        '[class._autofilled]': 'autofilled',
        '[class._label-outside]': 'controller.labelOutside',
    },
})
export class TuiPrimitiveTextfieldComponent
    extends AbstractTuiInteractive
    implements TuiPrimitiveTextfield
{
    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<HTMLInputElement>;

    private readonly options = inject(TUI_TEXTFIELD_OPTIONS);
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    @Input()
    public editable = true;

    /**
     * @deprecated:
     * use `tuiTextfieldOptionsProvider({iconCleaner: `tuiIconChevronUp`})`
     */
    @Input()
    public iconCleaner = this.options.iconCleaner;

    @Input()
    @HostBinding('class._readonly')
    public readOnly = false;

    @Input()
    public invalid = false;

    @Input()
    public disabled = false;

    @Input()
    public value = '';

    @Output()
    public readonly valueChange = new EventEmitter<string>();

    @ContentChildren(PolymorpheusOutletDirective, {descendants: true})
    protected readonly content?: QueryList<unknown>;

    protected readonly hintOptions = inject(TuiHintOptionsDirective, {optional: true});
    protected autofilled = false;

    protected readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);

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
        return this.controller.appearance;
    }

    public onModelChange(value: string): void {
        this.updateValue(value);
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.controller.size;
    }

    @HostBinding('class._invalid')
    protected get computedInvalid(): boolean {
        return !this.readOnly && !this.disabled && this.invalid;
    }

    @HostBinding('class._hidden')
    protected get inputHidden(): boolean {
        return !!this.content?.length;
    }

    @HostBinding('style.--border-start.rem')
    protected get borderStart(): number {
        return this.iconLeftContent ? this.iconPaddingLeft : 0;
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
        return this.placeholderRaisable || this.placeholderVisible;
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
        return this.controller.iconLeft;
    }

    protected get showHint(): boolean {
        return (
            !!this.hintOptions?.content &&
            (this.options.hintOnDisabled || !this.computedDisabled)
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

    @HostListener('focusin', ['true'])
    @HostListener('focusout', ['false'])
    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    @tuiPure
    protected getIndent$(element: HTMLElement): Observable<number> {
        return fromEvent(element, 'scroll').pipe(
            map(() => -1 * Math.max(element.scrollLeft, 0)),
        );
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

    protected onAutofilled(autofilled: boolean): void {
        this.updateAutofilled(autofilled);
    }

    protected detectRetargetFromLabel(event: Event): void {
        if (tuiRetargetedBoundaryCrossing(event)) {
            event.stopImmediatePropagation();
        }
    }

    private get iconPaddingLeft(): number {
        return TUI_ICON_PADDINGS[this.size];
    }

    private get placeholderRaisable(): boolean {
        return this.size !== 's' && !this.controller.labelOutside;
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
