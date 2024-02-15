import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    inject,
    Input,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    EMPTY_QUERY,
    TUI_DEFAULT_IDENTITY_MATCHER,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiBooleanHandler,
    TuiIdentityMatcher,
    tuiIsNativeFocusedIn,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {TuiOrientation, TuiSizeL, TuiValueContentContext} from '@taiga-ui/core';
import {TuiRadioLabeledComponent} from '@taiga-ui/kit/components/radio-labeled';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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
    items: readonly T[] = [];

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeL = 'm';

    @Input()
    identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    @HostBinding('attr.data-orientation')
    orientation: TuiOrientation = 'vertical';

    @Input()
    disabledItemHandler: TuiBooleanHandler<T> = ALWAYS_FALSE_HANDLER;

    // @bad TODO: Remove & { index: number }
    @Input()
    itemContent: PolymorpheusContent<TuiValueContentContext<T> & {index: number}> = ({
        $implicit,
    }) => String($implicit);

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        const focusableRadioButton = this.radioButtons.find(
            radioButton => radioButton.nativeFocusableElement !== null,
        );

        return focusableRadioButton?.nativeFocusableElement ?? null;
    }

    get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el);
    }

    computeId(index: number): string {
        return `${this.id}-${index}`;
    }

    itemIsDisabled(item: T): boolean {
        return this.disabledItemHandler(item);
    }

    /** @deprecated use 'value' setter */
    onModelChange(value: T): void {
        this.value = value;
    }

    itemIsActive(item: T): boolean {
        return this.value === null
            ? item === null
            : this.identityMatcher(this.value, item);
    }
}
