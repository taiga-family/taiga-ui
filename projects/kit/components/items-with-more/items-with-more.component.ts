import {NgTemplateOutlet} from '@angular/common';
import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChild,
    contentChildren,
    inject,
    INJECTOR,
    signal,
    TemplateRef,
} from '@angular/core';
import {outputFromObservable, toSignal} from '@angular/core/rxjs-interop';
import {
    WA_MUTATION_OBSERVER_INIT,
    WaMutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {take} from 'rxjs';

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
        WaMutationObserverService,
        WaResizeObserverService,
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
    host: {'[class._initialized]': 'initialized()'},
})
export class TuiItemsWithMoreComponent {
    private readonly injector = inject(INJECTOR);

    protected readonly service = inject(TuiItemsWithMoreService);
    protected readonly directive = inject(TuiItemsWithMoreDirective);
    protected readonly initialized = signal(false);
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

    constructor() {
        this.service.pipe(take(1)).subscribe(() => {
            afterNextRender(
                () => {
                    // One rAF still runs before the current frame is painted:
                    // Angular render -> rAF #1 -> PAINT -> rAF #2 -> enable transitions
                    // The first frame commits the initial layout without transitions,
                    // and the second one enables them for subsequent updates.
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => this.initialized.set(true));
                    });
                },
                {injector: this.injector},
            );
        });
    }

    protected isHidden(index: number): boolean {
        const {align, required} = this.directive;

        return (
            (index > this.lastIndex() && index !== required() && align() === 'end') ||
            (index < this.lastIndex() && index !== required() && align() === 'start')
        );
    }
}
