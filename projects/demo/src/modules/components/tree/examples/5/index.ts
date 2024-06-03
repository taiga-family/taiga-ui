import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiHandler} from '@taiga-ui/cdk';
import {EMPTY_ARRAY} from '@taiga-ui/cdk';
import {TUI_TREE_CONTENT, TuiTree} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {FoldersComponent} from './content';

interface TreeNode {
    readonly children?: readonly TreeNode[];
    readonly text: string;
}

@Component({
    standalone: true,
    imports: [TuiTree, NgForOf],
    templateUrl: './index.html',
    styleUrls: ['index.less'],
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_TREE_CONTENT,
            useValue: new PolymorpheusComponent(FoldersComponent),
        },
    ],
})
export default class ExampleComponent {
    protected readonly data: TreeNode = {
        text: 'Topmost',
        children: [
            {
                text: 'Top level 1',
                children: [
                    {
                        text: 'Another item',
                        children: [
                            {text: 'Next level 1'},
                            {text: 'Next level 2'},
                            {text: 'Next level 3'},
                        ],
                    },
                ],
            },
            {text: 'Top level 2'},
            {
                text: 'Top level 3',
                children: [{text: 'Test 1'}, {text: 'Test 2'}],
            },
        ],
    };

    protected readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>
        item.children || EMPTY_ARRAY;
}
