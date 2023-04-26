import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {EMPTY_QUERY, TuiResizeService} from '@taiga-ui/cdk';
import {merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {TUI_APP_BAR_PROVIDERS} from './app-bar.providers';

@Component({
    selector: 'tui-app-bar',
    templateUrl: './app-bar.template.html',
    styleUrls: ['./app-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_APP_BAR_PROVIDERS,
})
export class TuiAppBarComponent {
    @ViewChildren('side')
    private readonly side: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    readonly width$ = merge(this.resize$, this.mutation$).pipe(
        map(
            () =>
                2 *
                Math.max(
                    this.side.first?.nativeElement.clientWidth,
                    this.side.last?.nativeElement.clientWidth,
                ),
        ),
    );

    constructor(
        @Inject(TuiResizeService) private readonly resize$: Observable<unknown>,
        @Inject(MutationObserverService) private readonly mutation$: Observable<unknown>,
    ) {}
}
