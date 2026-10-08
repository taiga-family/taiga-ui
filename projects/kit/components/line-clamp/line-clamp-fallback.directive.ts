import {afterNextRender, Directive, effect, inject, INJECTOR} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_TIMELINE_SUPPORT} from '@taiga-ui/core/tokens';

import {TuiLineClamp} from './line-clamp.component';

type Measure = Pick<Element, 'clientWidth' | 'scrollHeight' | 'scrollWidth'>;

/**
 * Detects overflow by measuring, for browsers without scroll timeline support (see component
 * styles)
 */
@Directive({
    standalone: true,
    selector: '[tuiLineClampFallback]',
    providers: [WaResizeObserverService],
    host: {'(mouseenter)': 'apply(measure())'},
})
export class TuiLineClampFallback {
    private readonly host = inject(TuiLineClamp);
    private readonly injector = inject(INJECTOR);
    private readonly el = tuiInjectElement();

    protected readonly refresh =
        !inject(TUI_TIMELINE_SUPPORT) &&
        effect(() => {
            this.host.content();
            this.host.maxHeight();

            afterNextRender(() => this.apply(this.measure()), {
                injector: this.injector,
            });
        });

    protected readonly resize =
        !inject(TUI_TIMELINE_SUPPORT) &&
        inject(WaResizeObserverService)
            .pipe(tuiZoneOptimized(), takeUntilDestroyed())
            .subscribe(() => this.apply(this.measure()));

    protected measure(): Measure {
        const {scrollHeight, scrollWidth, clientWidth} =
            this.el.firstElementChild ?? this.el;

        return {scrollHeight, scrollWidth, clientWidth};
    }

    protected apply({scrollHeight, scrollWidth, clientWidth}: Measure): void {
        this.host.setOverflown(
            scrollHeight > this.host.maxHeight() || scrollWidth > clientWidth,
        );
    }
}
