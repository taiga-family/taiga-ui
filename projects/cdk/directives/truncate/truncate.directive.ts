import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    WA_MUTATION_OBSERVER_INIT,
    WaMutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {map} from 'rxjs';

import {TuiTruncateService} from './truncate.service';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./truncate.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Styles {}

@Directive({
    standalone: true,
    selector: '[tuiTruncate]',
    providers: [
        TuiTruncateService,
        WaResizeObserverService,
        WaMutationObserverService,
        {
            provide: WA_MUTATION_OBSERVER_INIT,
            useValue: {
                attributes: true,
                characterData: true,
                subtree: true,
            },
        },
    ],
    host: {
        tuiTruncate: '',
        tuiTruncateV: TUI_VERSION,
        '[attr.data-lines]': 'lines()',
        '[attr.data-text]': 'truncated()',
        '[style.-webkit-line-clamp]': 'lines()',
    },
})
export class TuiTruncate {
    private readonly service = inject(TuiTruncateService);
    private readonly el = tuiInjectElement();
    private readonly width = toSignal(
        inject(WaResizeObserverService).pipe(
            map(([e]) => e?.contentRect.width ?? 0),
            tuiZoneOptimized(),
        ),
        {initialValue: 0},
    );

    protected lines = signal(1);

    protected readonly text = toSignal(
        inject(WaMutationObserverService).pipe(map(() => this.innerText)),
        {initialValue: this.innerText},
    );

    protected readonly nothing = tuiWithStyles(Styles);

    public readonly truncated = computed(() =>
        this.width() ? this.service.truncate(this.text(), this.lines()) : this.text(),
    );

    @Input('tuiTruncate')
    public set tuiTruncate(value: number | string) {
        this.lines.set(Math.max(Number(value) || 1, 1));
    }

    private get innerText(): string {
        return this.el.innerText.trim();
    }
}
