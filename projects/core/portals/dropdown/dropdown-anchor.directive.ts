import {type AfterViewInit, Directive, forwardRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiPositionAccessorFor,
    TuiRectAccessor,
    tuiRectAccessorFor,
} from '@taiga-ui/core/classes';
import {TuiPositionService, TuiVisualViewportService} from '@taiga-ui/core/services';
import {TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import {map, takeWhile} from 'rxjs';

import {TuiDropdownDirective} from './dropdown.directive';
import {TUI_DROPDOWN_OPTIONS} from './dropdown-options.directive';
import {TuiDropdownPosition} from './dropdown-position.directive';

const MAX_WIDTH_GAP = 16; // 8px min gap from each side

@Directive({
    providers: [
        TuiPositionService,
        tuiPositionAccessorFor('dropdown', TuiDropdownPosition),
        tuiRectAccessorFor(
            'dropdown',
            forwardRef(() => TuiDropdownDirective),
        ),
    ],
})
export class TuiDropdownAnchor implements AfterViewInit {
    private readonly el = tuiInjectElement();
    private readonly accessor = inject(TuiRectAccessor);
    private readonly viewport = inject(TUI_VIEWPORT);
    private readonly vvs = inject(TuiVisualViewportService);
    private readonly options = inject(TUI_DROPDOWN_OPTIONS);
    private readonly dropdown = inject(TuiDropdownDirective);
    private readonly position = this.dropdown.position;

    private readonly styles$ = inject(TuiPositionService).pipe(
        takeWhile(() => this.dropdown.el.isConnected && !!this.dropdown.el.offsetHeight),
        map((v) => (this.position === 'fixed' ? this.vvs.correct(v) : v)),
        map((point) => this.getStyles(...point)),
        takeUntilDestroyed(),
    );

    public ngAfterViewInit(): void {
        this.styles$.subscribe({
            next: (styles) => Object.assign(this.el.style, styles),
            complete: () => this.dropdown.toggle(false),
        });
    }

    private getStyles(x: number, y: number): Record<string, string> {
        const {maxHeight, minHeight, offset, limitWidth} = this.options;
        const parent = this.el.offsetParent?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
        const {left = 0, top = 0} = this.position === 'fixed' ? {} : parent;
        const rect = this.accessor.getClientRect();
        const viewport = this.viewport.getClientRect();
        const zoom = this.dropdown.el.currentCSSZoom || 1;
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
            top: tuiPx(Math.round(Math.max(y, offset - top) / zoom)),
            left: tuiPx(Math.round(x / zoom)),
            maxHeight: tuiPx(Math.round(height / zoom)),
            width: limitWidth === 'fixed' ? tuiPx(Math.round(rect.width / zoom)) : '',
            minWidth: limitWidth === 'min' ? tuiPx(Math.round(rect.width / zoom)) : '',
            maxWidth: tuiPx(Math.round(viewport.width / zoom) - MAX_WIDTH_GAP),
        };
    }
}
