import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    NgZone,
} from '@angular/core';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {
    tuiArrayShallowEquals,
    tuiDefaultProp,
    TuiResizeService,
    tuiZonefull,
} from '@taiga-ui/cdk';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';

import {TuiTilesComponent} from './tiles.component';

@Component({
    selector: `tui-tile`,
    templateUrl: `tile.template.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTileComponent {
    @Input()
    @tuiDefaultProp()
    width = 0;

    @Input()
    @tuiDefaultProp()
    height = 0;

    @HostBinding(`class._dragged`)
    dragged = false;

    readonly offset$ = new BehaviorSubject<[number, number]>([0, 0]);

    readonly position$ = combineLatest([
        this.offset$.pipe(distinctUntilChanged(tuiArrayShallowEquals)),
        this.resize$.pipe(startWith(null)),
        this.mutation$.pipe(startWith(null)),
    ]).pipe(
        map(([[left, top]]) => ({
            top: top || this.element.offsetTop,
            left: left || this.element.offsetLeft,
            width: this.element.clientWidth,
            height: this.element.clientHeight,
        })),
        tuiZonefull(this.ngZone),
    );

    constructor(
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiTilesComponent) private readonly tiles: TuiTilesComponent<unknown>,
        @Inject(TuiResizeService) private readonly resize$: Observable<unknown>,
        @Inject(MutationObserverService) private readonly mutation$: Observable<unknown>,
    ) {}

    @HostBinding(`style.gridColumn`)
    get column(): string {
        return `span ${this.width}`;
    }

    @HostBinding(`style.gridRow`)
    get row(): string {
        return `span ${this.height}`;
    }

    get element(): HTMLElement {
        return this.elementRef.nativeElement;
    }

    @HostListener(`pointerenter.silent`)
    onEnter(): void {
        this.tiles.reorder(this.element);
    }

    onDrag(dragged: boolean): void {
        this.dragged = this.dragged || dragged;
        this.tiles.element = dragged ? this.element : null;
    }

    onTransitionEnd(): void {
        this.dragged = false;
    }
}
