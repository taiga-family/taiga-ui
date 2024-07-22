import {AsyncPipe, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ContentChildren,
    inject,
    TemplateRef,
} from '@angular/core';
import {
    MutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {TuiLet} from '@taiga-ui/cdk/directives/let';
import type {TuiContext} from '@taiga-ui/cdk/types';

import {TuiItemsWithMoreDirective} from './items-with-more.directive';
import {TuiItemsWithMoreService} from './items-with-more.service';
import {TuiMore} from './more.directive';

@Component({
    standalone: true,
    selector: 'tui-items-with-more',
    imports: [NgIf, NgForOf, AsyncPipe, NgTemplateOutlet, TuiLet],
    templateUrl: './items-with-more.template.html',
    styleUrls: ['./items-with-more.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        MutationObserverService,
        ResizeObserverService,
        TuiItemsWithMoreService,
        {
            provide: WA_MUTATION_OBSERVER_INIT,
            useValue: {
                childList: true,
                characterData: true,
                subtree: true,
            },
        },
    ],
    hostDirectives: [
        {
            directive: TuiItemsWithMoreDirective,
            inputs: ['itemsLimit', 'required'],
        },
    ],
})
export class TuiItemsWithMoreComponent {
    @ContentChildren(TuiItem, {read: TemplateRef, descendants: true})
    protected readonly items: QueryList<TemplateRef<unknown>> = EMPTY_QUERY;

    @ContentChild(TuiMore, {read: TemplateRef})
    protected readonly more?: TemplateRef<TuiContext<number>>;

    protected readonly directive = inject(TuiItemsWithMoreDirective);
    protected readonly lastVisibleIndex$ = inject(TuiItemsWithMoreService);
}
