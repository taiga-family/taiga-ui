import type {OnDestroy, TemplateRef} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    inject,
    Input,
} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsNativeFocused} from '@taiga-ui/cdk/utils/focus';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {TuiIcons} from '@taiga-ui/core/directives/icons';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDataListComponent} from './data-list.component';
import type {TuiDataListHost} from './data-list.tokens';
import {TUI_DATA_LIST_HOST, TUI_OPTION_CONTENT} from './data-list.tokens';

// TODO: Consider all use cases for aria roles
@Component({
    standalone: true,
    selector: 'button[tuiOption], a[tuiOption], label[tuiOption]',
    imports: [PolymorpheusOutlet],
    template: `
        <ng-container *polymorpheusOutlet="content || t as text; context: {$implicit: t}">
            {{ text }}
        </ng-container>
        <ng-template #t>
            <ng-content />
        </ng-template>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        {
            directive: TuiIcons,
            inputs: ['iconLeft', 'iconRight'],
        },
    ],
    host: {
        type: 'button',
        role: 'option',
        '[attr.disabled]': 'disabled || null',
        '[class._with-dropdown]': 'active',
        '(click)': 'onClick()',
        '(mousemove.silent)': 'onMouseMove()',
    },
})
export class TuiOption<T = unknown> implements OnDestroy {
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly el = tuiInjectElement();
    private readonly dataList = inject<TuiDataListComponent<T>>(
        forwardRef(() => TuiDataListComponent),
        {optional: true},
    );

    private readonly host = inject<TuiDataListHost<T>>(TUI_DATA_LIST_HOST, {
        optional: true,
    });

    protected readonly content: PolymorpheusContent<
        TuiContext<TemplateRef<Record<string, unknown>>>
    > = inject(TUI_OPTION_CONTENT, {optional: true});

    protected readonly dropdown = inject(TuiDropdownDirective, {
        self: true,
        optional: true,
    });

    @Input()
    public disabled = false;

    @Input()
    public value?: T;

    // Preventing focus loss upon focused option removal
    public ngOnDestroy(): void {
        this.dataList?.handleFocusLossIfNecessary(this.el);
    }

    protected get active(): boolean {
        return !!this.dropdown && !!this.dropdown.dropdownBoxRef;
    }

    protected onClick(): void {
        if (this.host && this.value !== undefined) {
            this.host.handleOption(this.value);
        }
    }

    protected onMouseMove(): void {
        if (!this.isMobile && !tuiIsNativeFocused(this.el)) {
            this.el.focus({preventScroll: true});
        }
    }
}
