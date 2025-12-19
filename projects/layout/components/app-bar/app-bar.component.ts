import {AsyncPipe} from '@angular/common';
import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    inject,
    Input,
    type QueryList,
    ViewChildren,
    ViewEncapsulation,
} from '@angular/core';
import {WaMutationObserverService} from '@ng-web-apis/mutation-observer';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiZonefull} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {type TuiSizeL} from '@taiga-ui/core/types';
import {TuiFade} from '@taiga-ui/kit/directives/fade';
import {map, merge} from 'rxjs';

import {TUI_APP_BAR_PROVIDERS} from './app-bar.providers';

@Component({
    standalone: true,
    selector: 'tui-app-bar',
    imports: [AsyncPipe, TuiFade],
    templateUrl: './app-bar.template.html',
    styleUrls: ['./app-bar.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_APP_BAR_PROVIDERS,
    host: {
        '[attr.data-size]': 'size',
    },
})
export class TuiAppBarComponent implements AfterViewInit {
    @ViewChildren('side')
    private readonly side: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly el = tuiInjectElement();

    protected readonly width$ = merge(
        inject(WaResizeObserverService, {self: true}),
        inject(WaMutationObserverService, {self: true}),
    ).pipe(
        tuiZonefull(),
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
    public size: TuiSizeL = 'm';

    // TODO: Remove after :has support
    public ngAfterViewInit(): void {
        this.el.closest('tui-dialog')?.classList.add('tui-app-bar');
    }
}
