import {AsyncPipe} from '@angular/common';
import {Component, inject, Injectable} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiHandler} from '@taiga-ui/cdk';
import {TuiButton, TuiLoader} from '@taiga-ui/core';
import {
    TUI_TREE_LOADER,
    TUI_TREE_LOADING,
    TUI_TREE_START,
    TuiTree,
    type TuiTreeLoader,
    TuiTreeService,
} from '@taiga-ui/kit';
import {BehaviorSubject, map, type Observable, switchMap, timer} from 'rxjs';

interface Item {
    readonly children?: boolean;
    text: string;
}

@Injectable()
class TreeLoader implements TuiTreeLoader<Item> {
    private readonly dataVersion$ = new BehaviorSubject<number>(1);

    public loadChildren({text}: Item): Observable<Item[]> {
        return this.dataVersion$.pipe(
            switchMap((version) =>
                timer(1000).pipe(
                    map(() => {
                        return [
                            {
                                text: `${text} v${version}.1`,
                                children: Math.random() > 0.5,
                            },
                            {
                                text: `${text} v${version}.2`,
                                children: Math.random() > 0.5,
                            },
                            {
                                text: `${text} v${version}.3`,
                                children: Math.random() > 0.5,
                            },
                        ];
                    }),
                ),
            ),
        );
    }

    public hasChildren({children}: Item): boolean {
        return !!children;
    }

    public setNewDataVersion(): void {
        const newVersion = this.dataVersion$.value + 1;

        this.dataVersion$.next(newVersion);
    }
}

@Component({
    imports: [AsyncPipe, TuiButton, TuiLoader, TuiTree],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        TuiTreeService,
        TreeLoader,
        {
            provide: TUI_TREE_START,
            useValue: {text: 'Topmost'},
        },
        {
            provide: TUI_TREE_LOADER,
            useExisting: TreeLoader,
        },
    ],
})
export default class Example {
    protected readonly loading = inject(TUI_TREE_LOADING);
    protected readonly service = inject(TuiTreeService<Item>);
    protected readonly loader = inject(TreeLoader);
    protected start = inject<Item>(TUI_TREE_START);

    protected map = new Map<Item, boolean>();

    protected childrenHandler: TuiHandler<Item, readonly Item[]> = (item) =>
        this.service.getChildren(item);

    protected onToggled(item: Item): void {
        this.service.loadChildren(item);
    }

    protected reset(): void {
        this.service.clear();
        this.map.clear();
    }

    protected loadNewData(): void {
        this.start.text = 'NewTopmost';
        this.loader.setNewDataVersion();

        this.service.clear();
        this.map.clear();
    }
}
