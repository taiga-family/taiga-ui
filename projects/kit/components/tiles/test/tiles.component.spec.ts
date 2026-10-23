import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {
    TUI_TILES_REORDER,
    type TuiReorderFunction,
    TuiTile,
    TuiTiles,
    TuiTilesComponent,
    tuiTilesShift,
} from '@taiga-ui/kit';

describe('Tiles', () => {
    @Component({
        imports: [TuiTile, TuiTiles],
        template: `
            <tui-tiles
                [debounce]="debounce()"
                [(order)]="order"
            >
                @for (item of items; track item) {
                    <tui-tile>{{ item }}</tui-tile>
                }
            </tui-tiles>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly items = ['0', '1', '2', '3', '4', '5'];
        public readonly debounce = signal(0);
        public order = new Map<number, number>();
    }

    let fixture: ComponentFixture<Test>;
    let tiles: TuiTilesComponent;

    function create({
        columns = 1,
        debounce = 0,
        providers = [],
    }: {
        columns?: number;
        debounce?: number;
        providers?: unknown[];
    } = {}): void {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: providers as never[],
        });
        fixture = TestBed.createComponent(Test);
        fixture.componentInstance.debounce.set(debounce);
        fixture.detectChanges();

        tiles = fixture.debugElement.query(By.directive(TuiTilesComponent))
            .componentInstance as TuiTilesComponent;

        // jsdom has no layout: place hosts the way CSS `order` does in a grid
        Array.from(tiles.el.children).forEach((element, index) => {
            jest.spyOn(element, 'getBoundingClientRect').mockImplementation(() => {
                const slot = tiles.order().get(index) ?? index;
                const top = Math.floor(slot / columns) * 60;
                const left = (slot % columns) * 100;

                const rect: DOMRect = {
                    top,
                    left,
                    width: 90,
                    height: 50,
                    x: left,
                    y: top,
                    right: left + 90,
                    bottom: top + 50,
                    toJSON: () => ({}),
                };

                return rect;
            });
        });
    }

    function drag(from: number, to: number): void {
        const elements = Array.from(tiles.el.children);

        tiles.element.set(elements[from]!);
        tiles.rearrange(elements[to]);
        jest.runOnlyPendingTimers();
    }

    function slots(): number[] {
        return Array.from(tiles.order().values());
    }

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    describe('single column', () => {
        beforeEach(() => create());

        it('swaps neighboring tiles', () => {
            drag(0, 1);

            expect(slots()).toEqual([1, 0, 2, 3, 4, 5]);
        });

        it('moves skipped tiles when pointer jumps down', () => {
            drag(0, 3);

            expect(slots()).toEqual([3, 0, 1, 2, 4, 5]);
        });

        it('moves skipped tiles when pointer jumps up', () => {
            drag(4, 1);

            expect(slots()).toEqual([0, 2, 3, 4, 1, 5]);
        });

        it('keeps other tiles in order after dragging back and forth', () => {
            drag(0, 4);
            drag(0, 1);

            expect(slots()).toEqual([0, 1, 2, 3, 4, 5]);
        });
    });

    it('swaps with the hovered tile in a multi column grid', () => {
        create({columns: 3});

        drag(0, 4);

        expect(slots()).toEqual([4, 1, 2, 3, 0, 5]);
    });

    it('swaps with the last hovered tile when debounce is set', () => {
        create({debounce: 100});

        drag(0, 3);

        expect(slots()).toEqual([3, 1, 2, 0, 4, 5]);
    });

    it('works with shift strategy', () => {
        create({providers: [{provide: TUI_TILES_REORDER, useValue: tuiTilesShift}]});

        drag(0, 3);

        expect(slots()).toEqual([3, 0, 1, 2, 4, 5]);
    });

    it('applies a custom handler to the hovered tile', () => {
        const handler: TuiReorderFunction = (order, currentIndex, newIndex) => {
            const dragged = order.get(currentIndex) ?? currentIndex;

            order.set(currentIndex, order.get(newIndex) ?? newIndex);
            order.set(newIndex, dragged);

            return order;
        };

        create({providers: [{provide: TUI_TILES_REORDER, useValue: handler}]});

        drag(0, 3);

        expect(slots()).toEqual([3, 1, 2, 0, 4, 5]);
    });
});
