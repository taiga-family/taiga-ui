import {AsyncPipe} from '@angular/common';
import type {ElementRef, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
    NgZone,
    ViewChildren,
    ViewEncapsulation,
} from '@angular/core';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiZonefull} from '@taiga-ui/cdk/observables';
import type {TuiSizeL} from '@taiga-ui/core/types';
import {TuiFade} from '@taiga-ui/kit/directives/fade';
import {map, merge} from 'rxjs';

import {TUI_APP_BAR_PROVIDERS} from './app-bar.providers';

@Component({
    standalone: true,
    selector: 'tui-app-bar',
    imports: [TuiFade, AsyncPipe],
    templateUrl: './app-bar.template.html',
    styleUrls: ['./app-bar.style.less'],
    encapsulation: ViewEncapsulation.None,
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
        tuiZonefull(inject(NgZone)),
        map(
            () =>
                2 *
                Math.max(
                    this.side.first?.nativeElement.clientWidth,
                    this.side.last?.nativeElement.clientWidth,
                ),
        ),
    );

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeL = 'm';
}
