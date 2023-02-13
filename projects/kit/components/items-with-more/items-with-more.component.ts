import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ContentChildren,
    Inject,
    QueryList,
    TemplateRef,
} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {
    TuiContextWithImplicit,
    TuiDestroyService,
    tuiEmptyQuery,
    TuiItemDirective,
    TuiResizeService,
} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';

import {TuiItemsWithMoreDirective} from './items-with-more.directive';
import {TuiItemsWithMoreService} from './items-with-more.service';
import {TuiMoreDirective} from './more.directive';

@Component({
    selector: 'tui-items-with-more',
    templateUrl: './items-with-more.template.html',
    styleUrls: ['./items-with-more.style.less'],
    providers: [
        MutationObserverService,
        TuiResizeService,
        TuiDestroyService,
        TuiItemsWithMoreService,
        {
            provide: MUTATION_OBSERVER_INIT,
            useValue: {
                childList: true,
                characterData: true,
                subtree: true,
            },
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiItemsWithMoreComponent {
    @ContentChildren(TuiItemDirective, {read: TemplateRef, descendants: true})
    readonly items: QueryList<TemplateRef<unknown>> = tuiEmptyQuery();

    @ContentChild(TuiMoreDirective, {read: TemplateRef})
    readonly more?: TemplateRef<TuiContextWithImplicit<number>>;

    constructor(
        @Inject(TuiItemsWithMoreDirective) readonly directive: TuiItemsWithMoreDirective,
        @Inject(TuiItemsWithMoreService) readonly lastVisibleIndex$: Observable<number>,
    ) {}
}
