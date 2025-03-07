import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    OnDestroy,
    Optional,
    Self,
    TemplateRef,
} from '@angular/core';
import {
    TUI_IS_MOBILE,
    TuiContextWithImplicit,
    TuiEventWith,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {TuiDataListHost} from '@taiga-ui/core/interfaces';
import {
    TUI_COMMON_ICONS,
    TUI_DATA_LIST_HOST,
    TUI_OPTION_CONTENT,
    TuiCommonIcons,
} from '@taiga-ui/core/tokens';
import {TuiOptionRole, TuiSizeL, TuiSizeXS} from '@taiga-ui/core/types';
import {shouldCall} from '@tinkoff/ng-event-plugins';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiDataListComponent} from '../data-list.component';

function shouldFocus(
    this: TuiOptionComponent,
    {currentTarget}: TuiEventWith<MouseEvent, HTMLElement>,
): boolean {
    return (
        !this.isMobile &&
        !tuiIsNativeFocused(currentTarget) &&
        !!currentTarget.closest('[tuiDataListDropdownManager]')
    );
}

// TODO: Consider all use cases for aria roles
@Component({
    selector: 'button[tuiOption], a[tuiOption]',
    templateUrl: './option.template.html',
    styleUrls: ['./option.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tabIndex: '-1',
        type: 'button',
        '[attr.disabled]': 'disabled || null',
    },
})
export class TuiOptionComponent<T = unknown> implements OnDestroy {
    /** @deprecated use size on {@link TuiDataListComponent} instead */
    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeL | TuiSizeXS | null = null;

    @Input()
    @HostBinding('attr.role')
    role: TuiOptionRole = 'option';

    @Input()
    disabled = false;

    @Input()
    value?: T;

    constructor(
        @Inject(TUI_IS_MOBILE) readonly isMobile: boolean,
        @Optional()
        @Inject(TUI_OPTION_CONTENT)
        readonly content: PolymorpheusContent<
            TuiContextWithImplicit<TemplateRef<Record<string, unknown>>>
        > | null,
        @Optional()
        @Inject(forwardRef(() => TuiDataListComponent))
        private readonly dataList: TuiDataListComponent<T> | null,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Optional()
        @Inject(TUI_DATA_LIST_HOST)
        private readonly host: TuiDataListHost<T> | null,
        @Optional()
        @Self()
        @Inject(TuiDropdownDirective)
        readonly dropdown: TuiDropdownDirective | null,
        @Inject(TUI_COMMON_ICONS) readonly icons: TuiCommonIcons,
    ) {}

    @HostBinding('class._with-dropdown')
    get active(): boolean {
        return !!this.dropdown && !!this.dropdown.dropdownBoxRef;
    }

    @HostListener('click')
    onClick(): void {
        if (this.host && this.value !== undefined) {
            this.host.handleOption(this.value);
        }
    }

    // @bad TODO: Consider aria-activedescendant for proper accessibility implementation
    @shouldCall(shouldFocus)
    @HostListener('mousemove.silent', ['$event'])
    onMouseMove({currentTarget}: TuiEventWith<MouseEvent, HTMLElement>): void {
        currentTarget.focus({preventScroll: true});
    }

    // Preventing focus loss upon focused option removal
    ngOnDestroy(): void {
        this.dataList?.handleFocusLossIfNecessary(this.el.nativeElement);
    }
}
