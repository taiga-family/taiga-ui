import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChildren,
    input,
    type TemplateRef,
} from '@angular/core';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {type TuiOrientation} from '@taiga-ui/core/types';

import {TuiTimelineItem} from './timeline-item.component';

@Component({
    selector: 'tui-timeline',
    imports: [NgTemplateOutlet],
    templateUrl: './timeline.template.html',
    styleUrl: './timeline.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'[attr.data-orientation]': 'orientation()'},
})
export class TuiTimelineComponent {
    public readonly items = contentChildren(TuiTimelineItem);
    public readonly d = computed(() => 100 / this.total());
    public readonly value = computed(() => this.items().map(({value}) => value()));
    public readonly gaps = computed((value = this.value().slice()) =>
        [[0, this.total()], ...value.sort(([a], [b]) => a - b)].map(
            ([_, end = 0], index, array) =>
                [index ? end : 0, array[index + 1]?.[0] ?? this.total()] as const,
        ),
    );

    public readonly orientation = input<TuiOrientation>('horizontal');
    public readonly template = input<TemplateRef<TuiContext<number>>>();
    public readonly total = input(100);
}
