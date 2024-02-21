import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ContentChildren,
    inject,
    QueryList,
    TemplateRef,
} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {EMPTY_QUERY, TuiContext, TuiItemDirective} from '@taiga-ui/cdk';

import {TuiItemsWithMoreDirective} from './items-with-more.directive';
import {TuiItemsWithMoreService} from './items-with-more.service';
import {TuiMoreDirective} from './more.directive';

@Component({
    selector: 'tui-items-with-more',
    templateUrl: './items-with-more.template.html',
    styleUrls: ['./items-with-more.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        MutationObserverService,
        ResizeObserverService,
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
})
export class TuiItemsWithMoreComponent {
    @ContentChildren(TuiItemDirective, {read: TemplateRef, descendants: true})
    readonly items: QueryList<TemplateRef<unknown>> = EMPTY_QUERY;

    @ContentChild(TuiMoreDirective, {read: TemplateRef})
    readonly more?: TemplateRef<TuiContext<number>>;

    readonly directive = inject(TuiItemsWithMoreDirective);
    readonly lastVisibleIndex$ = inject(TuiItemsWithMoreService);
}
