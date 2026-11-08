import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    InjectionToken,
    type Type,
} from '@angular/core';
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
import {TuiDropdownAnchored} from './dropdown-anchored.directive';
import {TUI_DROPDOWN_OPTIONS} from './dropdown-options.directive';
import {TuiDropdownPosition} from './dropdown-position.directive';

export const TUI_DROPDOWN_COMPONENT = new InjectionToken<Type<any>>(
    ngDevMode ? 'TUI_DROPDOWN_COMPONENT' : '',
    {factory: () => TuiDropdownComponent},
);

/**
 * TODO: Remove extends TuiScrollbar in v6 when TuiScrollable is dropped
 */
@Component({
    selector: 'tui-dropdown',
    imports: [PolymorpheusOutlet, TuiScrollControls],
    template: `
        <tui-scroll-controls class="t-scrollbar" />
        <div class="t-wrapper">
            <div
                *polymorpheusOutlet="
                    directive.content() as text;
                    context: {$implicit: close}
                "
                [innerHTML]="text"
            ></div>
        </div>
        <div
            class="t-detector"
            (resize)="onResize($any($event)[0])"
        ></div>
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
        '[attr.data-appearance]': 'options.appearance',
        '[attr.tuiTheme]': 'theme()',
        '[style.max-block-size.px]': 'options.maxHeight',
    },
})
export class TuiDropdownComponent extends TuiScrollbar {
    private readonly position = inject(TuiDropdownPosition);
    private readonly darkMode = inject(TUI_DARK_MODE);

    protected readonly options = inject(TUI_DROPDOWN_OPTIONS);
    protected readonly directive = inject(TuiDropdownDirective);
    protected readonly theme = computed((_ = this.darkMode()) =>
        this.directive.el.closest('[tuiTheme]')?.getAttribute('tuiTheme'),
    );

    protected readonly close = (): void => this.directive.toggle(false);

    protected onResize({contentRect}: ResizeObserverEntry): void {
        if (contentRect.width) {
            this.position.direction.next(contentRect.height ? 'bottom' : 'top');
        }
    }
}
