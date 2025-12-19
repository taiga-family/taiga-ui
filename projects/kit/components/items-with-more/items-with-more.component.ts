import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChild,
    contentChildren,
    inject,
    TemplateRef,
} from '@angular/core';
import {outputFromObservable, toSignal} from '@angular/core/rxjs-interop';
import {
    MutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {TuiItem} from '@taiga-ui/cdk/directives/item';

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
    protected readonly service = inject(TuiItemsWithMoreService);
    protected readonly directive = inject(TuiItemsWithMoreDirective);
    protected readonly more = contentChild(TuiMore, {read: TemplateRef});
    protected readonly items = contentChildren(TuiItem, {
        read: TemplateRef,
        descendants: true,
    });

    protected readonly isMoreHidden = computed(
        (index = this.lastIndex()) =>
            (index >= this.items().length - 1 && this.directive.align() === 'end') ||
            (!index && this.directive.align() === 'start'),
    );

    public readonly lastIndexChange = outputFromObservable(this.service);
    public readonly lastIndex = toSignal(this.service, {initialValue: 0});

    protected isHidden(index: number): boolean {
        const {align, required} = this.directive;

        return (
            (index > this.lastIndex() && index !== required() && align() === 'end') ||
            (index < this.lastIndex() && index !== required() && align() === 'start')
        );
    }
}
