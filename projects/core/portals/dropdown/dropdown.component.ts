import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {TUI_DARK_MODE} from '@taiga-ui/core/tokens';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDropdownDirective} from './dropdown.directive';
import {TUI_DROPDOWN_CONTEXT} from './dropdown.providers';
import {TuiDropdownAnchor} from './dropdown-anchor.directive';
import {TUI_DROPDOWN_OPTIONS} from './dropdown-options.directive';

/**
 * @description:
 * This component is used to show template in a portal
 * using default style of white rounded box with a shadow
 */
@Component({
    selector: 'tui-dropdown',
    imports: [PolymorpheusOutlet, TuiScrollbar],
    templateUrl: './dropdown.template.html',
    styleUrl: './dropdown.style.less',
    // @bad TODO: OnPush
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    hostDirectives: [TuiActiveZone, TuiAnimated, TuiDropdownAnchor],
    host: {
        '[attr.data-appearance]': 'options.appearance',
        '[attr.tuiTheme]': 'theme()',
    },
})
export class TuiDropdownComponent {
    protected readonly options = inject(TUI_DROPDOWN_OPTIONS);
    protected readonly directive = inject(TuiDropdownDirective);
    protected readonly context = inject(TUI_DROPDOWN_CONTEXT, {optional: true});
    protected readonly darkMode = inject(TUI_DARK_MODE);

    protected readonly theme = computed((_ = this.darkMode()) =>
        this.directive.el.closest('[tuiTheme]')?.getAttribute('tuiTheme'),
    );

    protected readonly close = (): void => this.directive.toggle(false);
}
