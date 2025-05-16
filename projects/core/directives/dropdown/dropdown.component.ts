import type {AfterViewInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiDropdownAnimation} from '@taiga-ui/core/animations';
import {
    tuiPositionAccessorFor,
    TuiRectAccessor,
    tuiRectAccessorFor,
} from '@taiga-ui/core/classes';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {TuiPositionService, TuiVisualViewportService} from '@taiga-ui/core/services';
import {TUI_ANIMATIONS_SPEED, TUI_DARK_MODE, TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {map, takeWhile} from 'rxjs';

import {TuiDropdownDirective} from './dropdown.directive';
import {TUI_DROPDOWN_CONTEXT} from './dropdown.providers';
import {TUI_DROPDOWN_OPTIONS} from './dropdown-options.directive';
import {TuiDropdownPosition} from './dropdown-position.directive';

/**
 * @description:
 * This component is used to show template in a portal
 * using default style of white rounded box with a shadow
 */
@Component({
    standalone: true,
    selector: 'tui-dropdown',
    imports: [PolymorpheusOutlet, TuiScrollbar],
    templateUrl: './dropdown.template.html',
    styleUrls: ['./dropdown.style.less'],
    // @bad TODO: OnPush
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [
        TuiPositionService,
        tuiPositionAccessorFor('dropdown', TuiDropdownPosition),
        tuiRectAccessorFor('dropdown', TuiDropdownDirective),
    ],
    animations: [tuiDropdownAnimation],
    hostDirectives: [TuiActiveZone],
    host: {
        '[@tuiDropdownAnimation]': 'animation',
        '[attr.data-appearance]': 'options.appearance',
        '[attr.tuiTheme]': 'theme()',
    },
})
export class TuiDropdownComponent implements AfterViewInit {
    private readonly el = tuiInjectElement();
    private readonly accessor = inject(TuiRectAccessor);
    private readonly viewport = inject(TUI_VIEWPORT);
    private readonly vvs = inject(TuiVisualViewportService);

    private readonly styles$ = inject(TuiPositionService).pipe(
        takeWhile(
            () =>
                this.directive.el.isConnected &&
                !!this.directive.el.getBoundingClientRect().height,
        ),
        map((v) => (this.directive.position === 'fixed' ? this.vvs.correct(v) : v)),
        map(([top, left]) => this.getStyles(left, top)),
        takeUntilDestroyed(),
    );

    protected readonly animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    protected readonly options = inject(TUI_DROPDOWN_OPTIONS);
    protected readonly directive = inject(TuiDropdownDirective);
    protected readonly context = inject(TUI_DROPDOWN_CONTEXT, {optional: true});
    protected readonly darkMode = inject(TUI_DARK_MODE);
    protected readonly position = this.directive.position;
    protected readonly theme = computed((_ = this.darkMode()) =>
        this.directive.el.closest('[tuiTheme]')?.getAttribute('tuiTheme'),
    );

    public ngAfterViewInit(): void {
        this.styles$.subscribe({
            next: (styles) => Object.assign(this.el.style, styles),
            complete: () => this.close?.(),
        });
    }

    protected readonly close = (): void => this.directive.toggle(false);

    private getStyles(x: number, y: number): Record<string, string> {
        const {maxHeight, minHeight, offset, limitWidth} = this.options;
        const {left = 0, top = 0} = this.el.offsetParent?.getBoundingClientRect() || {};
        const rect = this.accessor.getClientRect();
        const viewport = this.viewport.getClientRect();
        const above = rect.top - viewport.top - 2 * offset;
        const below = viewport.top + viewport.height - y - offset;
        const available = y > rect.bottom ? below : above;
        const height =
            this.el.getBoundingClientRect().right <= rect.left || x >= rect.right
                ? maxHeight
                : tuiClamp(available, minHeight, maxHeight);

        y -= top;
        x -= left;

        return {
            position: this.position,
            top: tuiPx(Math.round(Math.max(y, offset - top))),
            left: tuiPx(Math.round(x)),
            maxHeight: tuiPx(Math.round(height)),
            width: limitWidth === 'fixed' ? tuiPx(Math.round(rect.width)) : '',
            minWidth: limitWidth === 'min' ? tuiPx(Math.round(rect.width)) : '',
        };
    }
}
