import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
    Input,
    OnDestroy,
    ViewChild,
} from '@angular/core';

import {TuiTileService} from './tile.service';
import {TuiTilesComponent} from './tiles.component';

@Component({
    selector: 'tui-tile',
    templateUrl: './tile.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiTileService],
})
export class TuiTileComponent implements OnDestroy, AfterViewInit {
    @ViewChild('wrapper')
    private readonly wrapper?: ElementRef<HTMLElement>;

    private readonly service = inject(TuiTileService);
    private readonly tiles = inject(TuiTilesComponent);

    @Input()
    width = 1;

    @Input()
    height = 1;

    @HostBinding('class._dragged')
    dragged = false;

    readonly element: HTMLElement = inject(ElementRef).nativeElement;

    @HostBinding('style.gridColumn')
    get column(): string {
        return `span var(--tui-width, ${this.width})`;
    }

    @HostBinding('style.gridRow')
    get row(): string {
        return `span var(--tui-height, ${this.height})`;
    }

    @HostListener('pointerenter')
    onEnter(): void {
        this.tiles.rearrange(this.element);
    }

    onDrag(offset: readonly [number, number]): void {
        const dragged = !Number.isNaN(offset[0]);

        this.dragged = this.dragged || dragged;
        this.tiles.element = dragged ? this.element : null;
        this.service.setOffset(offset);
    }

    onTransitionEnd(): void {
        this.dragged = false;
    }

    ngAfterViewInit(): void {
        if (this.wrapper) {
            this.service.init(this.wrapper.nativeElement);
        }
    }

    ngOnDestroy(): void {
        if (this.tiles.element === this.element) {
            this.tiles.element = null;
        }
    }
}
