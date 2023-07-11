import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Optional,
    Output,
    QueryList,
    Self,
    TemplateRef,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiMultipleControl,
    ALWAYS_FALSE_HANDLER,
    ALWAYS_TRUE_HANDLER,
    EMPTY_QUERY,
    TuiActiveZoneDirective,
    tuiArrayRemove,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiBooleanHandler,
    TuiContextWithImplicit,
    TuiFocusableElementAccessor,
    tuiGetActualTarget,
    tuiGetClipboardDataText,
    tuiIsElement,
    tuiIsNativeFocusedIn,
} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_MODE,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    tuiAsDataListHost,
    TuiBrightness,
    TuiDataListDirective,
    TuiDataListHost,
    TuiHintOptionsDirective,
    TuiHostedDropdownComponent,
    TuiModeDirective,
    TuiScrollbarComponent,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldController,
} from '@taiga-ui/core';
import {TuiStringifiableItem} from '@taiga-ui/kit/classes';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {TuiStatus} from '@taiga-ui/kit/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {TUI_INPUT_TAG_OPTIONS, TuiInputTagOptions} from './input-tag.options';

const TAG_SIZE_REM = {
    s: 1.25,
    m: 1.5,
    l: 2,
};
const LINE_HEIGHT_REM = {
    s: 1,
    m: 1.25,
    l: 1.25,
};
const TAG_VERTICAL_SPACE_REM = 0.125;

@Component({
    selector: 'tui-input-tag',
    templateUrl: './input-tag.template.html',
    styleUrls: ['./input-tag.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputTagComponent),
        tuiAsControl(TuiInputTagComponent),
        tuiAsDataListHost(TuiInputTagComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
        MODE_PROVIDER,
    ],
    viewProviders: [FIXED_DROPDOWN_CONTROLLER_PROVIDER],
})
export class TuiInputTagComponent
    extends AbstractTuiMultipleControl<string>
    implements TuiFocusableElementAccessor, TuiDataListHost<string>
{
    @ViewChild(TuiHostedDropdownComponent)
    private readonly hostedDropdown?: TuiHostedDropdownComponent;

    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<HTMLInputElement>;

    @ViewChild('tagsContainer')
    private readonly tagsContainer?: ElementRef<HTMLElement>;

    @ViewChildren('tag', {read: ElementRef})
    private readonly tags: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @ViewChild('cleaner', {read: ElementRef})
    private readonly cleanerSvg?: ElementRef<HTMLElement>;

    @ViewChild(TuiScrollbarComponent, {read: ElementRef})
    private readonly scrollBar?: ElementRef<HTMLElement>;

    @Input()
    separator: RegExp | string = this.options.separator;

    @Input()
    search = '';

    @Input()
    editable = true;

    @Input()
    tagValidator:
        | TuiBooleanHandler<string>
        | TuiBooleanHandler<TuiStringifiableItem<unknown> | string> = ALWAYS_TRUE_HANDLER;

    // TODO: 4.0 Consider removing and use rows = 1 instead
    @Input()
    @HostBinding('class._expandable')
    expandable = true;

    @Input()
    rows = Infinity;

    @Input()
    inputHidden = false;

    @Input()
    uniqueTags = this.options.uniqueTags;

    @Input()
    maxLength: number | null = null;

    @Input()
    placeholder = '';

    @Input()
    removable = true;

    @Input()
    disabledItemHandler: TuiBooleanHandler<TuiStringifiableItem<any> | string> =
        ALWAYS_FALSE_HANDLER;

    @Input('pseudoFocused')
    set pseudoFocusedSetter(value: boolean | null) {
        if (!value && !this.focused) {
            this.scrollTo(0);
        }

        this.pseudoFocus = value;
    }

    @Output()
    readonly searchChange = new EventEmitter<string>();

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    readonly datalist?: TemplateRef<TuiContextWithImplicit<TuiActiveZoneDirective>>;

    @ViewChild('errorIcon')
    readonly errorIconTemplate?: TemplateRef<Record<string, unknown>>;

    status$: Observable<TuiStatus> = this.mode$.pipe(map(() => this.status));

    open = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Optional()
        @Inject(TuiModeDirective)
        private readonly modeDirective: TuiModeDirective | null,
        @Inject(TUI_MODE)
        private readonly mode$: Observable<TuiBrightness | null>,
        @Optional()
        @Inject(TuiHintOptionsDirective)
        readonly hintOptions: TuiHintOptionsDirective | null,
        @Inject(TUI_TEXTFIELD_WATCHED_CONTROLLER)
        readonly controller: TuiTextfieldController,
        @Inject(TUI_INPUT_TAG_OPTIONS)
        private readonly options: TuiInputTagOptions,
        @Optional()
        @Inject(TuiHostedDropdownComponent)
        private readonly parentHostedDropdown?: TuiHostedDropdownComponent,
    ) {
        super(control, cdr);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return !this.focusableElement || this.computedDisabled
            ? null
            : this.focusableElement.nativeElement;
    }

    get focused(): boolean {
        return (
            tuiIsNativeFocusedIn(this.el.nativeElement) || !!this.hostedDropdown?.focused
        );
    }

    get appearance(): string {
        return this.controller.appearance;
    }

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.controller.size;
    }

    @HostBinding('class._label-outside')
    get labelOutside(): boolean {
        const {size, labelOutside} = this.controller;

        return size === 's' || labelOutside;
    }

    get icon(): PolymorpheusContent<TuiContextWithImplicit<TuiSizeL | TuiSizeS>> {
        return this.controller.icon;
    }

    get iconCleaner(): PolymorpheusContent<TuiContextWithImplicit<TuiSizeL | TuiSizeS>> {
        return this.controller.options.iconCleaner;
    }

    get iconLeft(): PolymorpheusContent<TuiContextWithImplicit<TuiSizeL | TuiSizeS>> {
        return this.controller.iconLeft;
    }

    get hasCleaner(): boolean {
        return this.controller.cleaner && this.hasValue && this.interactive;
    }

    get hasNativeValue(): boolean {
        return !!this.search;
    }

    get hasValue(): boolean {
        return !!this.value.length || this.hasNativeValue;
    }

    get hasPlaceholder(): boolean {
        return (
            !this.labelOutside ||
            (!this.hasValue && (!this.hasExampleText || this.inputHidden))
        );
    }

    get placeholderRaised(): boolean {
        return (
            !this.labelOutside &&
            ((this.computedFocused && !this.readOnly) || this.hasValue)
        );
    }

    get hasExampleText(): boolean {
        return (
            !!this.nativeFocusableElement?.placeholder &&
            this.computedFocused &&
            !this.hasValue &&
            !this.readOnly
        );
    }

    get hasRightIcons(): boolean {
        return (
            this.hasCleaner ||
            !!this.icon ||
            (!!this.hintOptions?.content && !this.computedDisabled)
        );
    }

    get showHint(): boolean {
        return (
            !!this.hintOptions?.content &&
            (this.controller.options.hintOnDisabled || !this.computedDisabled)
        );
    }

    get status(): TuiStatus {
        return this.modeDirective?.mode ? 'default' : this.options.tagStatus;
    }

    get canOpen(): boolean {
        return this.interactive && !!this.datalist;
    }

    get computeMaxHeight(): number | null {
        return this.expandable ? this.rows * this.lineHeight : null;
    }

    getLeftContent(tag: string): PolymorpheusContent {
        return !this.tagValidator(tag) && this.errorIconTemplate
            ? this.errorIconTemplate
            : '';
    }

    onCleanerClick(): void {
        this.updateSearch('');
        this.clear();
        this.focusInput();
        this.parentHostedDropdown?.updateOpen(true);
    }

    onActiveZone(active: boolean): void {
        this.open = false;
        this.addTag();
        this.updateFocused(active);

        if (!active && !this.computedFocused) {
            this.scrollTo(0);
        }
    }

    onMouseDown(event: MouseEvent): void {
        const actualTarget = tuiGetActualTarget(event);

        if (
            !this.focusableElement ||
            actualTarget === this.focusableElement.nativeElement ||
            !tuiIsElement(event.target) ||
            this.cleanerSvg?.nativeElement.contains(event.target) ||
            (this.tagsContainer &&
                actualTarget !== this.tagsContainer.nativeElement &&
                this.tagsContainer.nativeElement.contains(actualTarget))
        ) {
            return;
        }

        event.preventDefault();
        this.focusInput();
    }

    onFieldKeyDownBackspace(event: Event): void {
        if (!this.labelOutside && !this.hasNativeValue && this.value.length) {
            this.deleteLastEnabledItem();
        } else {
            this.onFieldKeyDownArrowLeft(event);
        }
    }

    onFieldKeyDownArrowLeft(event: Event): void {
        if (!this.labelOutside || this.hasNativeValue || !this.value.length) {
            return;
        }

        event.preventDefault();
        this.tags.last.nativeElement.focus();
    }

    onFieldKeyDownEnter(): void {
        this.addTag();
        this.scrollTo();
    }

    onTagKeyDownArrowLeft(currentIndex: number): void {
        if (currentIndex > 0) {
            this.onScrollKeyDown(currentIndex, -1);
        }
    }

    onTagKeyDownArrowRight(currentIndex: number): void {
        if (currentIndex === this.value.length - 1) {
            this.focusInput();
        } else {
            this.onScrollKeyDown(currentIndex, 1);
        }
    }

    onTagEdited(value: string, index: number): void {
        this.focusInput();
        this.value = this.filterValue(
            this.value
                .map((tag, tagIndex) =>
                    tagIndex !== index
                        ? tag
                        : value
                              .split(this.separator)
                              .map(tag => tag.trim())
                              .filter(Boolean),
                )
                .reduce<string[]>(
                    (result, item: string[] | string) => result.concat(item),
                    [],
                ),
        );
    }

    handleOption(item: string): void {
        this.focusInput();
        this.updateSearch('');
        this.value = this.filterValue(this.value.concat(item));
        this.open = false;
        this.scrollTo();
    }

    onInput(value: string): void {
        const array = value.split(this.separator);
        const tags = array
            .map(item => this.clippedValue(item.trim()))
            .filter((item, index, {length}) => item.length > 0 && index !== length - 1);
        const validated = tags.filter(tag => !this.disabledItemHandler(tag));

        if (array.length > 1) {
            this.updateSearch(this.clippedValue(array[array.length - 1].trim()));
            this.value = this.filterValue([...this.value, ...validated]);
        } else {
            this.updateSearch(this.clippedValue(value));
        }

        this.open = this.hasNativeValue;
    }

    onPaste(event: Event): void {
        const pasted = tuiGetClipboardDataText(event as ClipboardEvent);

        this.onInput(pasted || '');
    }

    onDrop({dataTransfer}: DragEvent): void {
        if (dataTransfer) {
            this.onInput(dataTransfer.getData('text') || '');
        }
    }

    override setDisabledState(): void {
        super.setDisabledState();
        this.open = false;
    }

    trackByFn(_: number, tag: string): string {
        // Actually tag has TuiStringifiableItem type not string
        return tag.toString();
    }

    private scrollTo(scrollLeft = this.scrollBar?.nativeElement.scrollWidth): void {
        // Allow change detection to run and add new tag to DOM
        setTimeout(() => {
            if (this.scrollBar) {
                this.scrollBar.nativeElement.scrollLeft = scrollLeft || 0;
            }
        });
    }

    private filterValue(value: string[]): string[] {
        const seen = new Set();

        return value
            .reverse()
            .filter(
                item => !this.uniqueTags || (item && !seen.has(item) && seen.add(item)),
            )
            .reverse();
    }

    private onScrollKeyDown(currentIndex: number, flag: number): void {
        const tag = this.tags.find((_item, index) => index === currentIndex + flag);

        if (!tag || !this.scrollBar) {
            return;
        }

        tag.nativeElement.focus();

        if (
            flag * this.scrollBar.nativeElement.clientWidth -
                flag * tag.nativeElement.offsetLeft -
                tag.nativeElement.clientWidth <
            0
        ) {
            this.scrollBar.nativeElement.scrollLeft +=
                flag * tag.nativeElement.clientWidth;
        }
    }

    private updateSearch(value: string): void {
        if (this.focusableElement) {
            this.focusableElement.nativeElement.value = value;
        }

        this.search = value;
        this.searchChange.emit(value);
    }

    private addTag(): void {
        const inputValue = this.search.trim();

        if (!inputValue || this.disabledItemHandler(inputValue)) {
            return;
        }

        this.updateSearch('');
        this.value = this.filterValue(this.value.concat(inputValue));
    }

    private deleteLastEnabledItem(): void {
        for (let index = this.value.length - 1; index >= 0; index--) {
            if (!this.disabledItemHandler(this.value[index])) {
                this.value = tuiArrayRemove(this.value, index);

                break;
            }
        }
    }

    private focusInput(preventScroll: boolean = false): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.focus({preventScroll});
        }
    }

    private clippedValue(value: string): string {
        return value.slice(0, this.maxLength || value.length);
    }

    private get lineHeight(): number {
        return this.labelOutside
            ? TAG_SIZE_REM[this.controller.size] + 2 * TAG_VERTICAL_SPACE_REM
            : LINE_HEIGHT_REM[this.controller.size];
    }
}
