import {AsyncPipe} from '@angular/common';
import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    inject,
    input,
    viewChildren,
    ViewEncapsulation,
} from '@angular/core';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiZonefull} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {type TuiSizeL} from '@taiga-ui/core/types';
import {TuiFade} from '@taiga-ui/kit/directives/fade';
import {map, merge} from 'rxjs';

import {TUI_APP_BAR_PROVIDERS} from './app-bar.providers';

@Component({
    selector: 'tui-app-bar',
    imports: [AsyncPipe, TuiFade],
    templateUrl: './app-bar.template.html',
    styleUrls: ['./app-bar.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_APP_BAR_PROVIDERS,
    host: {
        '[attr.data-size]': 'size()',
    },
})
export class TuiAppBarComponent implements AfterViewInit {
    private readonly side = viewChildren<ElementRef<HTMLElement>>('side');

    private readonly el = tuiInjectElement();

    protected readonly width$ = merge(
        inject(ResizeObserverService, {self: true}),
        inject(MutationObserverService, {self: true}),
    ).pipe(
        tuiZonefull(),
        map(
            () =>
                2 *
                Math.max(
                    this.side()[0]?.nativeElement.clientWidth ?? 0,
                    this.side()[this.side().length - 1]?.nativeElement.clientWidth ?? 0,
                ),
        ),
    );

    public readonly size = input<TuiSizeL>('m');

    // TODO: Remove after :has support
    public ngAfterViewInit(): void {
        this.el.closest('tui-dialog')?.classList.add('tui-app-bar');
    }
}
