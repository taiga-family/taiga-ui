import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChild,
    contentChildren,
    inject,
    Output,
    TemplateRef,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    MutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {type TuiContext} from '@taiga-ui/cdk/types';

import {TuiItemsWithMoreDirective} from './items-with-more.directive';
import {TuiItemsWithMoreService} from './items-with-more.service';
import {TuiMore} from './more.directive';

@Component({
    selector: 'tui-items-with-more',
    imports: [NgTemplateOutlet],
    templateUrl: './items-with-more.template.html',
    styleUrl: './items-with-more.style.less',
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
            inputs: ['itemsLimit', 'required', 'side', 'linesLimit'],
        },
    ],
})
export class TuiItemsWithMoreComponent {
    protected readonly items = contentChildren<TuiItem, TemplateRef<unknown>>(TuiItem, {
        read: TemplateRef,
        descendants: true,
    });

    protected readonly more = contentChild<TuiMore, TemplateRef<TuiContext<number>>>(
        TuiMore,
        {read: TemplateRef},
    );

    protected readonly directive = inject(TuiItemsWithMoreDirective);

    @Output()
    public readonly lastIndexChange = inject(TuiItemsWithMoreService);

    public readonly lastIndex = toSignal(this.lastIndexChange, {
        initialValue: 0,
    });

    public isMoreHidden = computed<boolean>(() => {
        const {computedSide} = this.directive;

        return (
            (this.lastIndex() >= this.items().length - 1 && computedSide() === 'end') ||
            (!this.lastIndex() && computedSide() === 'start')
        );
    });

    protected isHidden(index: number): boolean {
        const {computedSide, required} = this.directive;

        return (
            (index > this.lastIndex() &&
                index !== required() &&
                computedSide() === 'end') ||
            (index < this.lastIndex() &&
                index !== required() &&
                computedSide() === 'start')
        );
    }
}
