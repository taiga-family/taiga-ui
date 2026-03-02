import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    linkedSignal,
    model,
} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {TuiTimelineComponent} from './timeline.component';

@Component({
    selector: 'label[tuiTimelineItem]',
    imports: [FormsModule],
    templateUrl: './timeline-item.template.html',
    styleUrl: './timeline-item.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.inset-inline-start.%]': 'timeline.d() * offset()',
        '[style.inline-size.%]': 'timeline.d() * (value()[1] - value()[0])',
    },
})
export class TuiTimelineItem {
    protected readonly timeline = inject(TuiTimelineComponent);
    protected readonly offset = linkedSignal(() => this.value()[0]);

    public readonly draggable = input(true);
    public readonly resizable = input(true);
    public readonly value = model<readonly [number, number]>([0, 0]);
    public readonly min = computed((array = this.timeline.value()) =>
        array.reduce(
            (min, [_, end]) => (end <= this.value()[0] && end > min ? end : min),
            0,
        ),
    );

    public readonly max = computed((array = this.timeline.value()) =>
        array.reduce(
            (max, [start]) => (start >= this.value()[1] && start < max ? start : max),
            this.timeline.max(),
        ),
    );

    protected update(input: HTMLInputElement): void {
        const length = this.value()[1] - this.value()[0];
        const [start, end] = this.timeline
            .gaps()
            .map(([start, end]): [number, number] => [
                end === this.max() ? this.min() : start,
                start === this.min() ? this.max() : end,
            ])
            .find(
                ([start, end]) =>
                    end - start >= length &&
                    this.offset() >= start &&
                    this.offset() < end,
            ) ?? [this.min(), this.max()];

        this.offset.set(Math.max(Math.min(this.offset(), end - length), start));
        this.value.set([this.offset(), this.offset() + length]);
        input.valueAsNumber = this.offset();
    }
}
