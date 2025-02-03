import type {OnChanges} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Input,
    signal,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiDraw} from '@taiga-ui/addon-charts/utils';
import {tuiInjectId} from '@taiga-ui/cdk/services';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiPoint} from '@taiga-ui/core/types';
import {map} from 'rxjs';

/* internal */
@Component({
    standalone: true,
    selector: 'tui-line',
    templateUrl: './line.template.html',
    styleUrls: ['./line.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ResizeObserverService],
})
export class TuiLine implements OnChanges {
    private readonly autoId = tuiInjectId();
    private readonly box = signal('');

    private readonly resize = toSignal(
        inject(ResizeObserverService, {self: true}).pipe(
            map(([e]) => e?.contentRect.height || 0),
        ),
        {initialValue: 0},
    );

    protected readonly viewBox = computed(() => {
        const offset = this.height / Math.max(this.resize(), 1);
        const [x = 0, y = 0, width = 0, height = 0] = this.box().split(' ').map(Number);

        return `${x} ${y - offset} ${width} ${height + 2 * offset}`;
    });

    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public width = 0;

    @Input()
    public height = 0;

    @Input()
    public smoothingFactor = 1;

    @Input()
    public filled = false;

    @Input()
    public value: readonly TuiPoint[] = [];

    public ngOnChanges(): void {
        this.box.set(`${this.x} ${this.y} ${this.width} ${this.height}`);
    }

    protected get fillId(): string {
        return `tui-line-chart-${this.autoId}`;
    }

    protected get fill(): string {
        return this.filled ? `url(#${this.fillId})` : 'none';
    }

    protected get d(): string {
        return this.getD(this.value, this.smoothingFactor);
    }

    protected get fillD(): string {
        return this.value.length
            ? `${this.d}V ${this.y} H ${this.value[0]?.[0]} V ${this.value[0]?.[1]}`
            : this.d;
    }

    @tuiPure
    private getD(value: readonly TuiPoint[], smoothingFactor: number): string {
        return value.reduce(
            (d, point, index) =>
                index ? `${d} ${tuiDraw(value, index, smoothingFactor)}` : `M ${point}`,
            '',
        );
    }
}
