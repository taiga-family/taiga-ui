import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    inject,
    Input,
    type QueryList,
    ViewChildren,
} from '@angular/core';
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    EMPTY_QUERY,
    TUI_DEFAULT_IDENTITY_MATCHER,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    type TuiBooleanHandler,
    type TuiIdentityMatcher,
    tuiIsNativeFocusedIn,
    type TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    type TuiOrientation,
    type TuiSizeL,
    type TuiValueContentContext,
} from '@taiga-ui/core';
import {TuiRadioLabeledComponent} from '@taiga-ui/kit/components/radio-labeled';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-radio-list',
    templateUrl: './radio-list.template.html',
    styleUrls: ['./radio-list.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiRadioListComponent),
        tuiAsControl(TuiRadioListComponent),
    ],
})
export class TuiRadioListComponent<T> extends AbstractTuiNullableControl<T> {
    @ViewChildren(TuiRadioLabeledComponent)
    private readonly radioButtons: QueryList<TuiRadioLabeledComponent<unknown>> =
        EMPTY_QUERY;

    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    @Input()
    public items: readonly T[] = [];

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeL = 'm';

    @Input()
    public identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    @HostBinding('attr.data-orientation')
    public orientation: TuiOrientation = 'vertical';

    @Input()
    public disabledItemHandler: TuiBooleanHandler<T> = ALWAYS_FALSE_HANDLER;

    public get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el);
    }

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        const focusableRadioButton = this.radioButtons.find(
            radioButton => radioButton.nativeFocusableElement !== null,
        );

        return focusableRadioButton?.nativeFocusableElement ?? null;
    }

    // @bad TODO: Remove & { index: number }
    @Input()
    public itemContent: PolymorpheusContent<TuiValueContentContext<T> & {index: number}> =
        ({$implicit}) => String($implicit);

    protected computeId(index: number): string {
        return `${this.id}-${index}`;
    }

    protected itemIsDisabled(item: T): boolean {
        return this.disabledItemHandler(item);
    }

    /** @deprecated use 'value' setter */
    protected onModelChange(value: T): void {
        this.value = value;
    }

    protected itemIsActive(item: T): boolean {
        return this.value === null
            ? item === null
            : this.identityMatcher(this.value, item);
    }
}
