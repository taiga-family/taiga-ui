import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiHandler} from '@taiga-ui/cdk';
import {EMPTY_ARRAY} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import type {TuiTreeItem} from '@taiga-ui/kit';
import {TUI_TREE_CONTENT, TuiTree} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {Folders} from './content';

interface TreeNode {
    children?: readonly TreeNode[];
    readonly text: string;
}

@Component({
    standalone: true,
    imports: [NgForOf, TuiButton, TuiTree],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_TREE_CONTENT,
            useValue: new PolymorpheusComponent(Folders),
        },
    ],
})
export default class Example {
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

    protected readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = (item) =>
        item.children || EMPTY_ARRAY;

    protected add(node: TreeNode, item: TuiTreeItem): void {
        const size = (node.children ?? []).length;

        node.children = [...(node.children ?? []), {text: `Next level ${size + 1}`}];

        if (item.isExpanded) {
            item.toggle(item);
        }
    }
}
