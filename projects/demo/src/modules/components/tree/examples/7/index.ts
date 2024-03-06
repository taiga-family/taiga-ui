import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiHandler} from '@taiga-ui/cdk';
import {
    TUI_TREE_LOADER,
    TUI_TREE_LOADING,
    TUI_TREE_START,
    TuiTreeService,
} from '@taiga-ui/kit';

import {TreeLoader} from './service';

export interface Item {
    readonly children?: boolean;
    readonly text: string;
}

@Component({
    selector: 'tui-tree-example-7',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
export class TuiTreeExample7 {
    protected readonly loading = inject(TUI_TREE_LOADING);
    protected readonly service = inject(TuiTreeService<Item>);

    protected map = new Map<Item, boolean>();

    protected childrenHandler: TuiHandler<Item, readonly Item[]> = item =>
        this.service.getChildren(item);

    protected onToggled(item: Item): void {
        this.service.loadChildren(item);
    }
}
