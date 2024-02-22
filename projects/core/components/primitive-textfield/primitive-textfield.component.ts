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

    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    @ContentChildren(PolymorpheusOutletDirective, {descendants: true})
    protected readonly content?: QueryList<unknown>;

    protected autofilled = false;
    protected readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    protected readonly hintOptions = inject(TuiHintOptionsDirective, {optional: true});
    protected readonly options = inject(TUI_TEXTFIELD_OPTIONS);

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

    @HostBinding('attr.data-size')
    public get size(): TuiSizeL | TuiSizeS {
        return this.controller.size;
    }

    @HostBinding('class._invalid')
    public get computedInvalid(): boolean {
        return !this.readOnly && !this.disabled && this.invalid;
    }

    @HostBinding('class._hidden')
    public get inputHidden(): boolean {
        return !!this.content?.length;
    }

    public get hasValue(): boolean {
        return !!this.value;
    }

    public get hasCleaner(): boolean {
        return (
            this.controller.cleaner &&
            this.hasValue &&
            !this.computedDisabled &&
            !this.readOnly
        );
    }

    public get hasTooltip(): boolean {
        return !!this.hintOptions?.content && !this.computedDisabled;
    }

    public get hasCustomContent(): boolean {
        return !!this.controller.customContent;
    }

    public get placeholderVisible(): boolean {
        const hasDecor =
            this.nativeFocusableElement?.placeholder ||
            this.prefix ||
            this.postfix ||
            this.filler;
        const showDecor = hasDecor && !this.readOnly && this.computedFocused;

        return !this.hasValue && !showDecor;
    }

    public get hasPlaceholder(): boolean {
        return this.placeholderRaisable || this.placeholderVisible;
    }

    public get placeholderRaised(): boolean {
        return (
            this.placeholderRaisable &&
            ((this.computedFocused && !this.readOnly) || this.hasValue || this.autofilled)
        );
    }

    @HostBinding('style.--border-start.rem')
    public get borderStart(): number {
        return this.iconLeftContent ? this.iconPaddingLeft : 0;
    }

    @HostBinding('style.--border-end.rem')
    public get borderEnd(): number {
        return tuiGetBorder(
            !!this.iconContent,
            this.hasCleaner,
            this.hasTooltip,
            this.hasCustomContent,
            this.size,
        );
    }

    public get iconContent(): PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>> {
        return this.controller.icon;
    }

    public get iconLeftContent(): PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>> {
        return this.controller.iconLeft;
    }

    public get showHint(): boolean {
        return (
            !!this.hintOptions?.content &&
            (this.options.hintOnDisabled || !this.computedDisabled)
        );
    }

    // Safari expiration date autofill workaround
    public get name(): 'ccexpiryyear' | null {
        return this.nativeFocusableElement?.autocomplete === 'cc-exp'
            ? 'ccexpiryyear'
            : null;
    }

    public get computedId(): string {
        return this.nativeFocusableElement?.id || '';
    }

    @HostListener('focusin', ['true'])
    @HostListener('focusout', ['false'])
    public onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    @tuiPure
    public getIndent$(element: HTMLElement): Observable<number> {
        return fromEvent(element, 'scroll').pipe(
            map(() => -1 * Math.max(element.scrollLeft, 0)),
        );
    }

    public clear(): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.value = '';
        }

        this.updateValue('');
    }

    public onMouseDown(event: MouseEvent): void {
        const {nativeFocusableElement} = this;

        if (!nativeFocusableElement || event.target === nativeFocusableElement) {
            return;
        }

        event.preventDefault();
        nativeFocusableElement.focus();
    }

    public onModelChange(value: string): void {
        this.updateValue(value);
    }

    public onAutofilled(autofilled: boolean): void {
        this.updateAutofilled(autofilled);
    }

    public detectRetargetFromLabel(event: Event): void {
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
