import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {map, merge} from 'rxjs';

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

    protected readonly width$ = merge(
        inject(ResizeObserverService),
        inject(MutationObserverService),
    ).pipe(
        map(
            () =>
                2 *
                Math.max(
                    this.side.first?.nativeElement.clientWidth,
                    this.side.last?.nativeElement.clientWidth,
                ),
        ),
    );
}
