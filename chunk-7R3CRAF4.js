import"./chunk-HU6DUUP4.js";var r=`import {AsyncPipe} from '@angular/common';
import {Component, inject, Injectable} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiHandler} from '@taiga-ui/cdk';
import {TuiLoader} from '@taiga-ui/core';
import {
    TUI_TREE_LOADER,
    TUI_TREE_LOADING,
    TUI_TREE_START,
    TuiTree,
    type TuiTreeLoader,
    TuiTreeService,
} from '@taiga-ui/kit';
import {map, type Observable, timer} from 'rxjs';

interface Item {
    readonly children?: boolean;
    readonly text: string;
}

@Injectable()
class TreeLoader implements TuiTreeLoader<Item> {
    public loadChildren({text}: Item): Observable<Item[]> {
        return timer(3000).pipe(
            map(() => [
                {text: \`\${text} 1\`, children: Math.random() > 0.5},
                {text: \`\${text} 2\`, children: Math.random() > 0.5},
                {text: \`\${text} 3\`, children: Math.random() > 0.5},
            ]),
        );
    }

    public hasChildren({children}: Item): boolean {
        return !!children;
    }
}

@Component({
    imports: [AsyncPipe, TuiLoader, TuiTree],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        TuiTreeService,
        {
            provide: TUI_TREE_START,
            useValue: {text: 'Topmost'},
        },
        {
            provide: TUI_TREE_LOADER,
            useClass: TreeLoader,
        },
    ],
})
export default class Example {
    protected readonly loading = inject(TUI_TREE_LOADING);
    protected readonly service = inject(TuiTreeService<Item>);

    protected map = new Map<Item, boolean>();

    protected childrenHandler: TuiHandler<Item, readonly Item[]> = (item) =>
        this.service.getChildren(item);

    protected onToggled(item: Item): void {
        this.service.loadChildren(item);
    }
}
`;export{r as default};
