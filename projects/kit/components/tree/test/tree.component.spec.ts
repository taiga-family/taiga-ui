import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Injectable} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {provideTaiga, TuiLoader} from '@taiga-ui/core';
import {
    TUI_TREE_LOADER,
    TUI_TREE_LOADING,
    TUI_TREE_START,
    TuiTree,
    type TuiTreeLoader,
    TuiTreeService,
} from '@taiga-ui/kit';
import {type Observable, of, Subject} from 'rxjs';

interface Item {
    readonly children?: boolean;
    readonly text: string;
}

@Injectable()
class TreeLoader implements TuiTreeLoader<Item> {
    public loaded: Item[] = [];

    public loadChildren({text}: Item): Observable<Item[]> {
        this.loaded.push({text});

        return of([{text: `${text} 1`}, {text: `${text} 2`}]);
    }

    public hasChildren({children}: Item): boolean {
        return !!children;
    }
}

@Injectable()
class DeferredTreeLoader extends TreeLoader {
    private readonly responses = new Map<string, Subject<Item[]>>();

    public override loadChildren({text}: Item): Observable<Item[]> {
        const response = new Subject<Item[]>();

        this.responses.set(text, response);

        return response;
    }

    public respond(text: string, children: Item[]): void {
        this.responses.get(text)?.next(children);
    }
}

describe('Tree with async loader', () => {
    function createFixture<L extends TreeLoader = TreeLoader>(
        start: Item,
        loader: L = new TreeLoader() as L,
    ): {
        fixture: ComponentFixture<unknown>;
        loader: L;
    } {
        @Component({
            imports: [AsyncPipe, TuiLoader, TuiTree],
            template: `
                <tui-tree
                    [childrenHandler]="childrenHandler"
                    [content]="content"
                    [map]="map"
                    [tuiTreeController]="false"
                    [value]="service.data$ | async"
                    (toggled)="onToggled($event)"
                />
                <ng-template
                    #content
                    let-item
                >
                    @if (item === loading) {
                        <tui-loader />
                    } @else {
                        {{ item.text }}
                    }
                </ng-template>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [
                TuiTreeService,
                {
                    provide: TUI_TREE_START,
                    useValue: start,
                },
                {
                    provide: TUI_TREE_LOADER,
                    useValue: loader,
                },
            ],
        })
        class Test {
            protected readonly loading = inject(TUI_TREE_LOADING);
            protected readonly service = inject(TuiTreeService<Item>);
            protected readonly map = new Map<Item, boolean>();
            protected readonly childrenHandler = (item: Item): readonly Item[] =>
                this.service.getChildren(item);

            protected onToggled(item: Item): void {
                this.service.loadChildren(item);
            }
        }

        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });

        const fixture = TestBed.createComponent(Test);

        fixture.detectChanges();

        return {fixture, loader};
    }

    function getExpandableItems(fixture: ComponentFixture<unknown>): number {
        return fixture.debugElement.queryAll(By.css('tui-tree-item._expandable')).length;
    }

    function toggle(fixture: ComponentFixture<unknown>, index: number): void {
        const buttons = fixture.debugElement.queryAll(By.css('tui-tree-item button'));

        (buttons[index]?.nativeElement as HTMLElement).click();
        fixture.detectChanges();
    }

    it('topmost item without children is not expandable and is not loaded', () => {
        const {fixture, loader} = createFixture({text: 'Topmost'});

        expect(getExpandableItems(fixture)).toBe(0);
        expect(loader.loaded).toEqual([]);
    });

    it('topmost item with children is expandable and loads them on toggle', () => {
        const {fixture, loader} = createFixture({text: 'Topmost', children: true});
        const button = fixture.debugElement.query(By.css('tui-tree-item button'));

        expect(getExpandableItems(fixture)).toBe(1);

        (button.nativeElement as HTMLElement).click();
        fixture.detectChanges();

        expect(loader.loaded).toEqual([{text: 'Topmost'}]);
    });

    it('renders children loaded for an item that is not the first among siblings', () => {
        const {fixture, loader} = createFixture(
            {text: 'Topmost', children: true},
            new DeferredTreeLoader(),
        );

        toggle(fixture, 0);
        loader.respond('Topmost', [
            {text: 'First', children: true},
            {text: 'Second', children: true},
        ]);
        fixture.detectChanges();

        toggle(fixture, 2);
        loader.respond('Second', [{text: 'Loaded'}]);
        fixture.detectChanges();

        expect(fixture.nativeElement.textContent).toContain('Loaded');
    });

    it('does not ask the loader about a null start item', () => {
        const loader = new TreeLoader();
        const hasChildren = jest.spyOn(loader, 'hasChildren');

        TestBed.configureTestingModule({
            providers: [
                provideTaiga(),
                TuiTreeService,
                {
                    provide: TUI_TREE_START,
                    useValue: null,
                },
                {
                    provide: TUI_TREE_LOADER,
                    useValue: loader,
                },
            ],
        });

        const service = TestBed.inject<TuiTreeService<Item | null>>(TuiTreeService);

        expect(service.getChildren(null)).toEqual([]);
        expect(hasChildren).not.toHaveBeenCalled();
    });
});
