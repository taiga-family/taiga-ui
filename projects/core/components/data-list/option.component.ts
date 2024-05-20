import {NgIf} from '@angular/common';
import type {OnDestroy} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    HostBinding,
    HostListener,
    inject,
    Input,
} from '@angular/core';
import type {TuiEventWith} from '@taiga-ui/cdk';
import {TUI_IS_MOBILE, tuiInjectElement, tuiIsNativeFocused} from '@taiga-ui/cdk';
import {TuiIconComponent} from '@taiga-ui/core/components/icon';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {shouldCall} from '@tinkoff/ng-event-plugins';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDataListComponent} from './data-list.component';
import {TUI_DATA_LIST_HOST, TUI_OPTION_CONTENT} from './data-list.tokens';
import type {TuiDataListHost, TuiOptionRole} from './data-list.types';

function shouldFocus(
    this: TuiOptionComponent,
    {currentTarget}: TuiEventWith<MouseEvent, HTMLElement>,
): boolean {
    return !this.isMobile && !tuiIsNativeFocused(currentTarget);
}

// TODO: Consider all use cases for aria roles
@Component({
    standalone: true,
    selector: 'button[tuiOption], a[tuiOption]',
    imports: [PolymorpheusModule, TuiIconComponent, NgIf],
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
    private readonly el = tuiInjectElement();
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

    public readonly isMobile = inject(TUI_IS_MOBILE);

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
