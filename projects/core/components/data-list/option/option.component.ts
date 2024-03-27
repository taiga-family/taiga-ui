import type {OnDestroy} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    HostBinding,
    HostListener,
    inject,
    Input,
} from '@angular/core';
import type {TuiEventWith} from '@taiga-ui/cdk';
import {tuiIsNativeFocused} from '@taiga-ui/cdk';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import type {TuiDataListHost} from '@taiga-ui/core/interfaces';
import {
    TUI_COMMON_ICONS,
    TUI_DATA_LIST_HOST,
    TUI_OPTION_CONTENT,
} from '@taiga-ui/core/tokens';
import type {TuiOptionRole} from '@taiga-ui/core/types';
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

    @Input()
    @HostBinding('attr.role')
    public role: TuiOptionRole = 'option';

    @Input()
    public disabled = false;

    @Input()
    public value?: T;

    protected readonly content = inject(TUI_OPTION_CONTENT, {optional: true});
    protected readonly dropdown = inject(TuiDropdownDirective, {
        self: true,
        optional: true,
    });

    protected readonly icons = inject(TUI_COMMON_ICONS);

    // Preventing focus loss upon focused option removal
    public ngOnDestroy(): void {
        this.dataList?.handleFocusLossIfNecessary(this.el);
    }

    @HostBinding('class._with-dropdown')
    protected get active(): boolean {
        return !!this.dropdown && !!this.dropdown.dropdownBoxRef;
    }

    @HostListener('click')
    protected onClick(): void {
        if (this.host && this.value !== undefined) {
            this.host.handleOption(this.value);
        }
    }

    // @bad TODO: Consider aria-activedescendant for proper accessibility implementation
    @shouldCall(shouldFocus)
    @HostListener('mousemove.silent', ['$event'])
    protected onMouseMove({currentTarget}: TuiEventWith<MouseEvent, HTMLElement>): void {
        currentTarget.focus({preventScroll: true});
    }
}
