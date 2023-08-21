import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
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

    @Input()
    width = 1;

    @Input()
    height = 1;

    @HostBinding('class._dragged')
    dragged = false;

    constructor(
        @Inject(TuiTileService) private readonly service: TuiTileService,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TuiTilesComponent) private readonly tiles: TuiTilesComponent,
    ) {}

    @HostBinding('style.gridColumn')
    get column(): string {
        return `span var(--tui-width, ${this.width})`;
    }

    @HostBinding('style.gridRow')
    get row(): string {
        return `span var(--tui-height, ${this.height})`;
    }

    get element(): HTMLElement {
        return this.el.nativeElement;
    }

    @HostListener('pointerenter')
    onEnter(): void {
        this.tiles.rearrange(this.element);
    }

    onDrag(dragged: boolean): void {
        this.dragged = this.dragged || dragged;
        this.tiles.element = dragged ? this.element : null;
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
