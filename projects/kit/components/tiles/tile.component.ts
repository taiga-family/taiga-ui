import type {AfterViewInit, ElementRef, OnDestroy} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    signal,
    ViewChild,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TuiTileService} from './tile.service';
import {TuiTilesComponent} from './tiles.component';

@Component({
    standalone: true,
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
    @ViewChild('wrapper')
    private readonly wrapper?: ElementRef<HTMLElement>;

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

        /**
         * TODO: should be this.dragged.set(this.dragged() || dragged);
         * but transitionend doesn't work like that for some unknown reason
         * due to a conflict with parent change detection
         */
        this.dragged.set(dragged);

        this.tiles.element.set(dragged ? this.element : null);
        this.service.setOffset(offset);
    }

    public ngAfterViewInit(): void {
        if (this.wrapper) {
            this.service.init(this.wrapper.nativeElement);
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
