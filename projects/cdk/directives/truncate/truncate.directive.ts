import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    effect,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {
    WA_MUTATION_OBSERVER_INIT,
    WaMutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {map} from 'rxjs';

@Component({
    template: '',
    styleUrl: './truncate.styles.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Styles {}

@Directive({
    selector: '[tuiTruncate]',
    providers: [
        WaResizeObserverService,
        WaMutationObserverService,
        {
            provide: WA_MUTATION_OBSERVER_INIT,
            useValue: {
                attributes: false,
                characterData: true,
                childList: true,
                subtree: true,
            },
        },
    ],
    host: {tuiTruncate: ''},
})
export class TuiTruncate {
    private readonly el = tuiInjectElement();
    private readonly clientWidth = toSignal(
        inject(WaResizeObserverService, {self: true}).pipe(
            map(([e]) => (e?.target as HTMLElement | null)?.clientWidth ?? 0),
            takeUntilDestroyed(),
        ),
        {initialValue: 0},
    );

    protected readonly nothing = tuiWithStyles(Styles);

    protected readonly text = toSignal(
        inject(WaMutationObserverService, {self: true}).pipe(
            map(() => this.el.innerText),
            takeUntilDestroyed(),
        ),
        {initialValue: this.el.innerText},
    );

    protected readonly $ = effect(() => {
        if (!this.clientWidth()) {
            return;
        }

        const dot = '…';
        let text = this.text();
        let start = text.slice(0, Math.ceil(text.length / 2));
        let end = text.slice(-Math.floor(text.length / 2));

        this.el.setAttribute('data-text', text);

        while (this.el.scrollHeight - this.el.clientHeight > 16 && start && end) {
            start = start.slice(0, -1);
            end = end.slice(1);
            text = start + dot + end;
            this.el.setAttribute('data-text', text);
        }

        this.el.setAttribute('title', text);
    });
}
