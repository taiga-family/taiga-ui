import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    input,
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
        '[style.grid-column]': '`span var(--tui-width, ${width()})`',
        '[style.grid-row]': '`span var(--tui-height, ${height()})`',
        '(pointerenter)': 'tiles.rearrange(element)',
    },
})
export class TuiTile implements OnDestroy, AfterViewInit {
    private readonly wrapper = viewChild('wrapper', {read: ElementRef});
    private readonly service = inject(TuiTileService);

    protected readonly tiles = inject(TuiTilesComponent);
    protected readonly dragged = signal(false);

    public readonly width = input(1);
    public readonly height = input(1);
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
        this.service.init(this.wrapper()?.nativeElement);
    }

    public ngOnDestroy(): void {
        if (this.tiles.element() === this.element) {
            this.tiles.element.set(null);
        }
    }
}
