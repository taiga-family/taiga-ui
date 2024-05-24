import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    inject,
    Input,
    Output,
    TemplateRef,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {
    TuiActiveZoneDirective,
    TuiBooleanHandler,
    TuiContext,
    TuiFocusableElementAccessor,
} from '@taiga-ui/cdk';
import {
    AbstractTuiMultipleControl,
    EMPTY_QUERY,
    TUI_FALSE_HANDLER,
    TUI_TRUE_HANDLER,
    tuiArrayRemove,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiGetActualTarget,
    tuiGetClipboardDataText,
    tuiInjectElement,
    tuiIsElement,
    tuiIsNativeFocusedIn,
    tuiRetargetedBoundaryCrossing,
} from '@taiga-ui/cdk';
import type {TuiDataListHost, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_COMMON_ICONS,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    tuiAsDataListHost,
    TuiDataListDirective,
    TuiHintOptionsDirective,
    TuiHostedDropdownComponent,
    TuiScrollbarComponent,
} from '@taiga-ui/core';
import type {TuiStringifiableItem} from '@taiga-ui/kit/classes';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import type {TuiStatus} from '@taiga-ui/kit/types';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {timer} from 'rxjs';

import {TUI_INPUT_TAG_OPTIONS} from './input-tag.options';

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
    host: {'[class._expandable]': 'expandable'},
    providers: [
        tuiAsFocusableItemAccessor(TuiInputTagComponent),
        tuiAsControl(TuiInputTagComponent),
        tuiAsDataListHost(TuiInputTagComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
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

    private readonly el = tuiInjectElement();
    private readonly options = inject(TUI_INPUT_TAG_OPTIONS);

    @Input()
    public separator: RegExp | string = this.options.separator;

    @Input()
    public search: string | null = '';

    @Input()
    public editable = true;

    @Input()
    public tagValidator:
        | TuiBooleanHandler<string>
        | TuiBooleanHandler<TuiStringifiableItem<unknown> | string> = TUI_TRUE_HANDLER;

    @Input()
    public rows = Infinity;

    @Input()
    public inputHidden = false;

    @Input()
    public uniqueTags = this.options.uniqueTags;

    @Input()
    public maxLength: number | null = null;

    @Input()
    public placeholder = '';

    @Input()
    public removable = true;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiStringifiableItem<any> | string> =
        TUI_FALSE_HANDLER;

    @Output()
    public readonly searchChange = new EventEmitter<string>();

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    protected readonly datalist?: TemplateRef<TuiContext<TuiActiveZoneDirective>>;

    @ViewChild('errorIcon')
    protected readonly errorIconTemplate?: TemplateRef<Record<string, unknown>>;

    protected readonly hintOptions = inject(TuiHintOptionsDirective, {optional: true});
    protected readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected status: TuiStatus = this.options.tagStatus;
    protected open = false;

    @Input('pseudoFocused')
    public set pseudoFocusedSetter(value: boolean | null) {
        if (!value && !this.focused) {
            this.scrollTo(0);
        }

        this.pseudoFocus = value;
    }

    @HostBinding('class._label-outside')
    public get labelOutside(): boolean {
        const {size, labelOutside} = this.controller;

        return size === 's' || labelOutside;
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        return !this.focusableElement || this.computedDisabled
            ? null
            : this.focusableElement.nativeElement;
    }

    public get hasValue(): boolean {
        return !!this.value.length || this.hasNativeValue;
    }

    public get hasExampleText(): boolean {
        return (
            !!this.nativeFocusableElement?.placeholder &&
            this.computedFocused &&
            !this.hasValue &&
            !this.readOnly
        );
    }

    public get hasPlaceholder(): boolean {
        return (
            !this.labelOutside ||
            (!this.hasValue && (!this.hasExampleText || this.inputHidden))
        );
    }

    public get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el) || !!this.hostedDropdown?.focused;
    }

    public onTagEdited(value: string, index: number): void {
        this.focusInput(value === '');
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

    public handleOption(item: string): void {
        this.focusInput();
        this.updateSearch('');
        this.value = this.filterValue(this.value.concat(item));
        this.open = false;
        this.scrollTo();
    }

    public override setDisabledState(): void {
        super.setDisabledState();
        this.open = false;
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.controller.size;
    }

    @HostBinding('class._icon-left')
    protected get iconLeft(): PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>> {
        return this.controller.iconLeft;
    }

    protected get appearance(): string {
        return this.controller.appearance;
    }

    protected get expandable(): boolean {
        return this.rows > 1;
    }

    protected get icon(): PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>> {
        return this.controller.icon;
    }

    protected get iconCleaner(): PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>> {
        return this.controller.options.iconCleaner;
    }

    protected get hasCleaner(): boolean {
        return this.controller.cleaner && this.hasValue && this.interactive;
    }

    protected get hasNativeValue(): boolean {
        return !!this.search;
    }

    protected get placeholderRaised(): boolean {
        return (
            !this.labelOutside &&
            ((this.computedFocused && !this.readOnly) || this.hasValue)
        );
    }

    protected get hasRightIcons(): boolean {
        return (
            this.hasCleaner ||
            !!this.icon ||
            (!!this.hintOptions?.content && !this.computedDisabled)
        );
    }

    protected get showHint(): boolean {
        return (
            !!this.hintOptions?.content &&
            (this.controller.options.hintOnDisabled || !this.computedDisabled)
        );
    }

    protected get canOpen(): boolean {
        return this.interactive && !!this.datalist;
    }

    protected get computeMaxHeight(): number | null {
        return this.expandable ? this.rows * this.lineHeight : null;
    }

    @HostListener('focusin.capture.silent')
    @HostListener('focusout.capture.silent')
    protected onFocusInOut(): void {
        this.cdr.detectChanges();
    }

    protected detectRetargetFromLabel(event: Event): void {
        if (tuiRetargetedBoundaryCrossing(event)) {
            event.stopImmediatePropagation();
        }
    }

    protected getLeftContent(tag: string): PolymorpheusContent {
        return !this.tagValidator(tag) && this.errorIconTemplate
            ? this.errorIconTemplate
            : '';
    }

    protected onCleanerClick(): void {
        this.updateSearch('');
        this.clear();
        this.focusInput();
    }

    protected onActiveZone(active: boolean): void {
        this.open = false;
        this.addTag();
        this.updateFocused(active);

        if (!active && !this.computedFocused) {
            this.scrollTo(0);
        }
    }

    protected onMouseDown(event: MouseEvent): void {
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

    protected onFieldKeyDownBackspace(event: Event): void {
        if (!this.labelOutside && !this.hasNativeValue && this.value.length) {
            this.deleteLastEnabledItem();
        } else {
            this.onFieldKeyDownArrowLeft(event);
        }
    }

    protected onFieldKeyDownArrowLeft(event: Event): void {
        if (!this.labelOutside || this.hasNativeValue || !this.value.length) {
            return;
        }

        event.preventDefault();
        this.tags.last.nativeElement.focus();
    }

    protected onFieldKeyDownEnter(): void {
        this.addTag();
        this.scrollTo();
    }

    protected onTagKeyDownArrowLeft(currentIndex: number): void {
        if (currentIndex > 0) {
            this.onScrollKeyDown(currentIndex, -1);
        }
    }

    protected onTagKeyDownArrowRight(currentIndex: number): void {
        if (currentIndex === this.value.length - 1) {
            this.focusInput();
        } else {
            this.onScrollKeyDown(currentIndex, 1);
        }
    }

    protected onInput(value: string): void {
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

    protected onPaste(event: Event): void {
        const pasted = tuiGetClipboardDataText(event as ClipboardEvent);

        this.onInput(pasted || '');
    }

    protected onDrop({dataTransfer}: DragEvent): void {
        if (dataTransfer) {
            this.onInput(dataTransfer.getData('text') || '');
        }
    }

    protected trackByFn(_: number, tag: string): string {
        // Actually tag has TuiStringifiableItem type not string
        return tag.toString();
    }

    private get lineHeight(): number {
        return this.labelOutside
            ? TAG_SIZE_REM[this.controller.size] + 2 * TAG_VERTICAL_SPACE_REM
            : LINE_HEIGHT_REM[this.controller.size];
    }

    private scrollTo(scrollLeft = this.scrollBar?.nativeElement.scrollWidth): void {
        // Allow change detection to run and add new tag to DOM
        timer(0)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
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
        const inputValue = this.search?.trim() ?? '';

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

    private focusInput(preventScroll = false): void {
        this.nativeFocusableElement?.focus({preventScroll});
    }

    private clippedValue(value: string): string {
        return value.slice(0, this.maxLength || value.length);
    }
}
