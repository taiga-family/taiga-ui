import type {OnDestroy, Type} from '@angular/core';
import {
    createComponent,
    Directive,
    EnvironmentInjector,
    forwardRef,
    inject,
    INJECTOR,
    Input,
    signal,
    ViewContainerRef,
} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsNativeFocused} from '@taiga-ui/cdk/utils/focus';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';

import {TuiDataListComponent} from '../data-list.component';
import {TUI_OPTION_CONTENT} from './option-content';

// TODO(v5): rename `TuiOptionNew` => `TuiOption` & remove [new] from selector
// TODO: Consider all use cases for aria roles
@Directive({
    standalone: true,
    selector: 'button[tuiOption][new], a[tuiOption][new], label[tuiOption][new]',
    hostDirectives: [TuiWithIcons],
    host: {
        type: 'button',
        role: 'option',
        '[attr.disabled]': 'disabled || null',
        '[class._with-dropdown]': 'dropdown?.()',
        '(mousemove.zoneless)': 'onMouseMove()',
    },
})
export class TuiOptionNew<T = unknown> implements OnDestroy {
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

    @Input()
    public disabled = false;

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
            !tuiIsNativeFocused(this.el) &&
            this.dataList &&
            this.el.closest('[tuiDataListDropdownManager]')
        ) {
            this.el.focus({preventScroll: true});
        }
    }
}

// TODO(v5): remove [new] from selector
@Directive({
    standalone: true,
    selector:
        'button[tuiOption][value][new], a[tuiOption][value][new], label[tuiOption][value][new]',
})
export class TuiOptionWithValue<T = unknown> {
    @Input()
    public disabled = false;

    public readonly value = signal<T | undefined>(undefined);

    // TODO(v5): use `input.required<T>()` to remove `undefined` from `this.value()`
    @Input({alias: 'value', required: true})
    public set valueSetter(x: T) {
        this.value.set(x);
    }
}
