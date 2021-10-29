import {Component, Inject} from '@angular/core';
import {TuiHandler} from '@taiga-ui/cdk';
import {
    TUI_TREE_LOADER,
    TUI_TREE_LOADING,
    TUI_TREE_START,
    TuiTreeService,
} from '@taiga-ui/kit';
import {Observable, timer} from 'rxjs';
import {mapTo} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

interface Item {
    readonly text: string;
    readonly children?: boolean;
}

@Component({
    selector: 'tui-tree-example-7',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
    providers: [
        TuiTreeService,
        {
            provide: TUI_TREE_LOADING,
            useValue: {text: ''},
        },
        {
            provide: TUI_TREE_START,
            useValue: {text: 'Topmost'},
        },
        {
            provide: TUI_TREE_LOADER,
            useValue: {
                loadChildren: serverRequestImitation,
                hasChildren: (item: Item) => !!item.children,
            },
        },
    ],
})
export class TuiTreeExample7 {
    map = new Map<Item, boolean>();

    constructor(
        @Inject(TUI_TREE_LOADING) readonly loading: Item,
        @Inject(TuiTreeService) readonly service: TuiTreeService<Item>,
    ) {}

    childrenHandler: TuiHandler<Item, readonly Item[]> = item =>
        this.service.getChildren(item);

    onToggled(item: Item) {
        this.service.loadChildren(item);
    }
}

function serverRequestImitation({text}: Item): Observable<readonly Item[]> {
    return timer(3000).pipe(
        mapTo([
            {text: `${text} 1`, children: Math.random() > 0.5},
            {text: `${text} 2`, children: Math.random() > 0.5},
            {text: `${text} 3`, children: Math.random() > 0.5},
        ]),
    );
}
