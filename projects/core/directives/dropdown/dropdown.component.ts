import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WINDOW} from '@ng-web-apis/common';
import {
    TuiActiveZoneDirective,
    tuiGetClosestFocusable,
    tuiInjectElement,
    tuiIsElement,
    tuiPx,
} from '@taiga-ui/cdk';
import {
    tuiPositionAccessorFor,
    TuiRectAccessor,
    tuiRectAccessorFor,
} from '@taiga-ui/core/abstract';
import {tuiDropdownAnimation} from '@taiga-ui/core/animations';
import {TuiScrollbarComponent} from '@taiga-ui/core/components/scrollbar';
import {TuiPositionService, TuiVisualViewportService} from '@taiga-ui/core/services';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {map} from 'rxjs';

import {TuiDropdownDirective} from './dropdown.directive';
import {TUI_DROPDOWN_CONTEXT} from './dropdown.providers';
import {TUI_DROPDOWN_OPTIONS} from './dropdown-options.directive';
import {TuiDropdownPositionDirective} from './dropdown-position.directive';

/**
 * @description:
 * This component is used to show template in a portal
 * using default style of white rounded box with a shadow
 */
@Component({
    standalone: true,
    selector: 'tui-dropdown',
    imports: [PolymorpheusModule, TuiActiveZoneDirective, TuiScrollbarComponent],
    templateUrl: './dropdown.template.html',
    styleUrls: ['./dropdown.style.less'],
    // @bad TODO: OnPush
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [
        TuiPositionService,
        tuiPositionAccessorFor('dropdown', TuiDropdownPositionDirective),
        tuiRectAccessorFor('dropdown', TuiDropdownDirective),
    ],
    host: {
        '[@tuiDropdownAnimation]': 'animation',
        '[attr.data-appearance]': 'options.appearance',
        '[attr.tuiTheme]': 'theme',
    },
    animations: [tuiDropdownAnimation],
})
export class TuiDropdownComponent implements OnInit {
    private readonly el = tuiInjectElement();
    private readonly accessor = inject(TuiRectAccessor);
    private readonly win = inject(WINDOW);
    private readonly viewport = inject(TuiVisualViewportService);

    protected readonly animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    protected readonly options = inject(TUI_DROPDOWN_OPTIONS);
    protected readonly directive = inject(TuiDropdownDirective);
    protected readonly context = inject(TUI_DROPDOWN_CONTEXT, {optional: true});
    protected readonly theme = this.directive.el
        .closest('[tuiTheme]')
        ?.getAttribute('tuiTheme');

    protected readonly sub = inject(TuiPositionService)
        .pipe(
            map(point =>
                this.directive.position === 'fixed'
                    ? this.viewport.correct(point)
                    : point,
            ),
            takeUntilDestroyed(),
        )
        .subscribe(([top, left]) => {
            this.update(top, left);
        });

    public ngOnInit(): void {
        this.updateWidth(this.accessor.getClientRect().width);
    }

    protected onTopFocus({target, relatedTarget}: FocusEvent): void {
        if (
            tuiIsElement(target) &&
            tuiIsElement(relatedTarget) &&
            !this.el.contains(relatedTarget)
        ) {
            this.moveFocusInside(target, true);
        } else {
            this.moveFocusOutside(true);
        }
    }

    protected onBottomFocus({target, relatedTarget}: FocusEvent): void {
        if (
            tuiIsElement(target) &&
            tuiIsElement(relatedTarget) &&
            !this.el.contains(relatedTarget)
        ) {
            this.moveFocusInside(target, false);
        } else {
            this.moveFocusOutside(false);
        }
    }

    private update(top: number, left: number): void {
        const {style} = this.el;
        const {right} = this.el.getBoundingClientRect();
        const {maxHeight, minHeight, offset} = this.options;
        const {innerHeight} = this.win;
        const clientRect = this.el.offsetParent?.getBoundingClientRect();
        const {position} = this.directive;
        const rect = this.accessor.getClientRect();
        const offsetX = position === 'fixed' ? 0 : -(clientRect?.left || 0);
        const offsetY = position === 'fixed' ? 0 : -(clientRect?.top || 0);

        top += offsetY;
        left += offsetX;

        const isIntersecting =
            left < rect.right && right > rect.left && top < offsetY + 2 * offset;
        const available = isIntersecting
            ? rect.top - 2 * offset
            : offsetY + innerHeight - top - offset;

        const sided = right <= rect.left || left >= rect.right;

        style.position = position;
        style.top = tuiPx(Math.max(top, offsetY + offset));
        style.left = tuiPx(left);
        style.maxHeight = sided
            ? `${maxHeight}px`
            : tuiPx(Math.min(maxHeight, Math.max(available, minHeight)));
        style.width = '';
        style.minWidth = '';

        this.updateWidth(rect.width);
    }

    private updateWidth(width: number): void {
        const {style} = this.el;

        switch (this.options.limitWidth) {
            case 'min':
                style.minWidth = tuiPx(width);
                break;
            case 'fixed':
                style.width = tuiPx(width);
                break;
            case 'auto':
                break;
        }
    }

    private moveFocusInside(initial: Element, next: boolean): void {
        const focusable = tuiGetClosestFocusable({
            initial,
            root: this.el,
            previous: !next,
        });

        focusable?.focus();
    }

    private moveFocusOutside(previous: boolean): void {
        const initial = this.directive.el;
        const root = initial.ownerDocument.body || initial;
        let focusable = tuiGetClosestFocusable({initial, root, previous});

        while (focusable !== null && initial.contains(focusable)) {
            focusable = tuiGetClosestFocusable({initial: focusable, root, previous});
        }

        focusable?.focus();
    }
}
