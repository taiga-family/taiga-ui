import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WINDOW} from '@ng-web-apis/common';
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
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
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
    imports: [PolymorpheusOutlet, PolymorpheusTemplate, TuiScrollbar],
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
        '[attr.tuiTheme]': 'theme',
    },
})
export class TuiDropdownComponent {
    private readonly el = tuiInjectElement();
    private readonly accessor = inject(TuiRectAccessor);
    private readonly win = inject(WINDOW);
    private readonly vvs = inject(TuiVisualViewportService);

    protected readonly animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    protected readonly options = inject(TUI_DROPDOWN_OPTIONS);
    protected readonly directive = inject(TuiDropdownDirective);
    protected readonly context = inject(TUI_DROPDOWN_CONTEXT, {optional: true});
    protected readonly theme = this.directive.el
        .closest('[tuiTheme]')
        ?.getAttribute('tuiTheme');

    protected readonly sub = inject(TuiPositionService)
        .pipe(
            takeWhile(() => this.directive.el.isConnected),
            map((v) => (this.directive.position === 'fixed' ? this.vvs.correct(v) : v)),
            map(([top, left]) => this.getStyles(top, left)),
            takeUntilDestroyed(),
        )
        .subscribe({
            next: (styles) => Object.assign(this.el.style, styles),
            complete: () => this.close(),
        });

    protected readonly close = (): void => this.directive.toggle(false);

    private getStyles(top: number, left: number): Record<string, string> {
        const {right} = this.el.getBoundingClientRect();
        const {maxHeight, minHeight, offset, limitWidth} = this.options;
        const {innerHeight} = this.win;
        const clientRect = this.el.offsetParent?.getBoundingClientRect();
        const {position} = this.directive;
        const rect = this.accessor.getClientRect();
        const offsetX = position === 'fixed' ? 0 : -(clientRect?.left || 0);
        const offsetY = position === 'fixed' ? 0 : -(clientRect?.top || 0);

        top += offsetY;
        left += offsetX;

        const sided = right <= rect.left || left >= rect.right;
        const isIntersecting =
            left < rect.right && right > rect.left && top < offsetY + 2 * offset;
        const available = isIntersecting
            ? rect.top - 2 * offset
            : offsetY + innerHeight - top - offset;

        return {
            position,
            top: tuiPx(Math.round(Math.max(top, offsetY + offset))),
            left: tuiPx(Math.round(left)),
            maxHeight: sided
                ? tuiPx(maxHeight)
                : tuiPx(Math.round(tuiClamp(available, minHeight, maxHeight))),
            width: limitWidth === 'fixed' ? tuiPx(Math.round(rect.width)) : '',
            minWidth: limitWidth === 'min' ? tuiPx(Math.round(rect.width)) : '',
        };
    }
}
