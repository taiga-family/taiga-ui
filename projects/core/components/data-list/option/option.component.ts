import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    HostBinding,
    HostListener,
    inject,
    Input,
    OnDestroy,
} from '@angular/core';
import {TuiEventWith, tuiIsNativeFocused} from '@taiga-ui/cdk';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {TuiDataListHost} from '@taiga-ui/core/interfaces';
import {
    TUI_COMMON_ICONS,
    TUI_DATA_LIST_HOST,
    TUI_OPTION_CONTENT,
} from '@taiga-ui/core/tokens';
import {TuiOptionRole, TuiSizeL, TuiSizeXS} from '@taiga-ui/core/types';
import {shouldCall} from '@tinkoff/ng-event-plugins';

import {TuiDataListComponent} from '../data-list.component';

function shouldFocus({currentTarget}: TuiEventWith<MouseEvent, HTMLElement>): boolean {
    return !tuiIsNativeFocused(currentTarget);
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
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly dataList = inject<TuiDataListComponent<T>>(
        forwardRef(() => TuiDataListComponent),
        {optional: true},
    );

    private readonly host = inject<TuiDataListHost<T>>(TUI_DATA_LIST_HOST, {
        optional: true,
    });

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

    readonly content = inject(TUI_OPTION_CONTENT, {optional: true});
    readonly dropdown = inject(TuiDropdownDirective, {self: true, optional: true});
    readonly icons = inject(TUI_COMMON_ICONS);

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
        this.dataList?.handleFocusLossIfNecessary(this.el);
    }
}
