import {
    createComponent,
    Directive,
    EnvironmentInjector,
    forwardRef,
    inject,
    INJECTOR,
    input,
    type OnDestroy,
    type Type,
    ViewContainerRef,
} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsFocused} from '@taiga-ui/cdk/utils/focus';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {TuiDropdownDirective} from '@taiga-ui/core/portals/dropdown';

import {TuiDataListComponent} from '../data-list.component';
import {TUI_DATA_LIST_HOST, type TuiDataListHost} from '../data-list.tokens';
import {TUI_OPTION_CONTENT} from './option-content';

@Directive({
    selector: 'button[tuiOption], a[tuiOption], label[tuiOption]',
    hostDirectives: [TuiWithIcons],
    host: {
        type: 'button',
        role: 'option',
        '[attr.disabled]': 'disabled() || null',
        '[class._with-dropdown]': 'dropdown?.()',
        '(mousemove.zoneless)': 'onMouseMove()',
    },
})
export class TuiOption<T = unknown> implements OnDestroy {
    private readonly vcr = inject(ViewContainerRef);
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly el = tuiInjectElement();
    private readonly dataList = inject<TuiDataListComponent<T>>(
        forwardRef(() => TuiDataListComponent),
        {optional: true},
    );

    private readonly content = inject<Type<any> | null>(TUI_OPTION_CONTENT, {
        optional: true,
    });

    private readonly ref =
        this.content &&
        createComponent(this.content, {
            environmentInjector: inject(EnvironmentInjector),
            elementInjector: inject(INJECTOR),
            hostElement: tuiInjectElement(),
        });

    protected readonly dropdown = inject(TuiDropdownDirective, {
        self: true,
        optional: true,
    })?.ref;

    public readonly disabled = input(false);

    constructor() {
        if (this.ref) {
            this.vcr.insert(this.ref.hostView);
            this.ref.changeDetectorRef.detectChanges();
        }
    }

    // Preventing focus loss upon focused option removal
    public ngOnDestroy(): void {
        this.dataList?.handleFocusLossIfNecessary(this.el);
    }

    protected onMouseMove(): void {
        if (
            !this.isMobile &&
            !tuiIsFocused(this.el) &&
            this.dataList &&
            this.el.closest('[tuiDataListDropdownManager]')
        ) {
            this.el.focus({preventScroll: true});
        }
    }
}

@Directive({
    selector: 'button[tuiOption][value], a[tuiOption][value], label[tuiOption][value]',
    host: {
        '(click)': 'onClick()',
    },
})
export class TuiOptionWithValue<T = unknown> {
    private readonly host = inject<TuiDataListHost<T>>(TUI_DATA_LIST_HOST, {
        optional: true,
    });

    public readonly disabled = input(false);
    public readonly value = input<T>();

    protected onClick(value = this.value()): void {
        if (value !== undefined) {
            this.host?.handleOption?.(value);
        }
    }
}
