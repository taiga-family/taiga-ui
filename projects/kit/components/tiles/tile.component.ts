import type {AfterViewInit, OnDestroy} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
    Input,
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
    public width = 1;

    @Input()
    public height = 1;

    public readonly element: HTMLElement = inject(ElementRef).nativeElement;

    @HostBinding('class._dragged')
    protected dragged = false;

    public onDrag(offset: readonly [number, number]): void {
        const dragged = !Number.isNaN(offset[0]);

        this.dragged = this.dragged || dragged;
        this.tiles.element = dragged ? this.element : null;
        this.service.setOffset(offset);
    }

    public ngAfterViewInit(): void {
        if (this.wrapper) {
            this.service.init(this.wrapper.nativeElement);
        }
    }

    public ngOnDestroy(): void {
        if (this.tiles.element === this.element) {
            this.tiles.element = null;
        }
    }

    @HostBinding('style.gridColumn')
    protected get column(): string {
        return `span var(--tui-width, ${this.width})`;
    }

    @HostBinding('style.gridRow')
    protected get row(): string {
        return `span var(--tui-height, ${this.height})`;
    }

    @HostListener('pointerenter')
    protected onEnter(): void {
        this.tiles.rearrange(this.element);
    }

    protected onTransitionEnd(): void {
        this.dragged = false;
    }
}
