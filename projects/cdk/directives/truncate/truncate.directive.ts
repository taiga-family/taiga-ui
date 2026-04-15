import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    WA_MUTATION_OBSERVER_INIT,
    WaMutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {map} from 'rxjs';

import {TuiTruncateService} from './truncate.service';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './truncate.styles.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-truncate-${TUI_VERSION}`,
})
class Styles {}

@Directive({
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
        'data-tui-version': TUI_VERSION,
        '[attr.data-lines]': 'lines()',
        '[attr.data-text]': 'truncated()',
        '[style.-webkit-line-clamp]': 'lines()',
    },
})
export class TuiTruncate {
    private readonly service = inject(TuiTruncateService);
    private readonly el = tuiInjectElement();
    private readonly width = toSignal(
        inject(WaResizeObserverService).pipe(map(([e]) => e?.contentRect.width ?? 0)),
        {initialValue: 0},
    );

    protected readonly text = toSignal(
        inject(WaMutationObserverService).pipe(map(() => this.innerText)),
        {initialValue: this.innerText},
    );

    protected readonly nothing = tuiWithStyles(Styles);

    public readonly lines = input(1, {
        alias: 'tuiTruncate',
        transform: (value: number | string) => Math.max(Number(value) || 1, 1),
    });

    public readonly truncated = computed((_ = this.width()) =>
        this.service.truncate(this.text(), this.lines()),
    );

    private get innerText(): string {
        return this.el.innerText.trim();
    }
}
