import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    Provider,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {EMPTY_QUERY, TuiDestroyService, TuiResizeService} from '@taiga-ui/cdk';
import {TUI_BUTTON_DEFAULT_OPTIONS, TUI_BUTTON_OPTIONS} from '@taiga-ui/core';
import {merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

// note: fix problem for strange behavior in viewEngine with export { ɵ_0, ɵ_1 };
export function tuiProvideMutationOptionsForAppBar(): Provider {
    return {
        provide: MUTATION_OBSERVER_INIT,
        useValue: {
            characterData: true,
            childList: true,
            subtree: true,
        },
    };
}

// note: fix problem for strange behavior in viewEngine with export { ɵ_0, ɵ_1 };
export function tuiProvideButtonOptionsForAppBar(): Provider {
    return {
        provide: TUI_BUTTON_OPTIONS,
        useValue: {
            ...TUI_BUTTON_DEFAULT_OPTIONS,
            size: 'm',
            appearance: '',
        },
    };
}

// @dynamic
@Component({
    selector: 'tui-app-bar',
    templateUrl: './app-bar.template.html',
    styleUrls: ['./app-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        TuiResizeService,
        MutationObserverService,
        tuiProvideMutationOptionsForAppBar(),
        tuiProvideButtonOptionsForAppBar(),
    ],
})
export class TuiAppBarComponent {
    @ViewChildren('sideLeft, sideRight')
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
