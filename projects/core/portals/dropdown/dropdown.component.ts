import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {
    TUI_SCROLL_REF,
    TuiScrollbar,
    TuiScrollControls,
} from '@taiga-ui/core/components/scrollbar';
import {TUI_DARK_MODE} from '@taiga-ui/core/tokens';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDropdownDirective} from './dropdown.directive';
import {TUI_DROPDOWN_CONTEXT} from './dropdown.providers';
import {TuiDropdownAnchored} from './dropdown-anchored.directive';
import {TUI_DROPDOWN_OPTIONS} from './dropdown-options.directive';

/**
 * TODO: Remove extends TuiScrollbar in v6 when TuiScrollable is dropped
 */
@Component({
    selector: 'tui-dropdown',
    imports: [PolymorpheusOutlet, TuiScrollControls],
    template: `
        <tui-scroll-controls />
        <div class="t-wrapper">
            <div
                *polymorpheusOutlet="
                    directive.content() as text;
                    context: {$implicit: close}
                "
                [innerHTML]="text"
            ></div>
        </div>
    `,
    styleUrl: './dropdown.style.less',
    // @bad TODO: OnPush
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [
        {
            provide: TUI_SCROLL_REF,
            useFactory: () => inject(TuiDropdownComponent).browserScrollRef,
        },
    ],
    hostDirectives: [TuiActiveZone, TuiAnimated, TuiDropdownAnchored],
    host: {
        '[attr.data-appearance]': 'appearance',
        '[attr.tuiTheme]': 'theme()',
    },
})
export class TuiDropdownComponent extends TuiScrollbar {
    protected readonly appearance = inject(TUI_DROPDOWN_OPTIONS).appearance;
    protected readonly directive = inject(TuiDropdownDirective);
    protected readonly context = inject(TUI_DROPDOWN_CONTEXT, {optional: true});
    protected readonly darkMode = inject(TUI_DARK_MODE);
    protected readonly theme = computed((_ = this.darkMode()) =>
        this.directive.el.closest('[tuiTheme]')?.getAttribute('tuiTheme'),
    );

    protected readonly close = (): void => this.directive.toggle(false);
}
