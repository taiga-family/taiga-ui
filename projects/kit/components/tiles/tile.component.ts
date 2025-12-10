import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    inject,
    Input,
    type OnDestroy,
    signal,
    viewChild,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TuiTileService} from './tile.service';
import {TuiTilesComponent} from './tiles.component';

@Component({
    selector: 'tui-tile',
    templateUrl: './tile.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiTileService],
    host: {
        '[class._dragged]': 'dragged()',
        '[style.gridColumn]': 'column',
        '[style.gridRow]': 'row',
        '(pointerenter)': 'onEnter()',
    },
})
export class TuiTile implements OnDestroy, AfterViewInit {
    private readonly wrapper = viewChild<ElementRef<HTMLElement>>('wrapper');

    private readonly service = inject(TuiTileService);
    private readonly tiles = inject(TuiTilesComponent);

    protected dragged = signal(false);

    @Input()
    public width = 1;

    @Input()
    public height = 1;

    public readonly element = tuiInjectElement();

    public onDrag(offset: readonly [number, number]): void {
        const dragged = !Number.isNaN(offset[0]);

        this.dragged.set(this.dragged() || dragged);

        this.tiles.element.set(dragged ? this.element : null);
        this.service.setOffset(offset);

        if (dragged) {
            this.tiles.el.classList.add('_dragged');
        } else {
            this.tiles.el.classList.remove('_dragged');
        }
    }

    public ngAfterViewInit(): void {
        const wrapper = this.wrapper();

        if (wrapper) {
            this.service.init(wrapper.nativeElement);
        }
    }

    public ngOnDestroy(): void {
        if (this.tiles.element() === this.element) {
            this.tiles.element.set(null);
        }
    }

    protected get column(): string {
        return `span var(--tui-width, ${this.width})`;
    }

    protected get row(): string {
        return `span var(--tui-height, ${this.height})`;
    }

    protected onEnter(): void {
        this.tiles.rearrange(this.element);
    }

    protected onTransitionEnd(): void {
        this.dragged.set(false);
    }
}
