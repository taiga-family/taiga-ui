import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiHandler} from '@taiga-ui/cdk';
import {EMPTY_ARRAY, TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiButton, TuiLabel} from '@taiga-ui/core';
import type {TuiTreeItem} from '@taiga-ui/kit';
import {TuiCheckbox, TuiTree} from '@taiga-ui/kit';

interface TreeNode {
    children?: readonly TreeNode[];
    readonly text: string;
}

function flatten(item: TreeNode): readonly TreeNode[] {
    return item.children
        ? item.children.map(flatten).reduce((arr, item) => [...arr, ...item], [])
        : [item];
}

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiButton,
        TuiCheckbox,
        TuiLabel,
        TuiMapperPipe,
        TuiTree,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected map = new Map<TreeNode, boolean>();

    protected data: TreeNode = {
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

    protected readonly getValue = (
        item: TreeNode,
        map: Map<TreeNode, boolean>,
    ): boolean | null => {
        let result: boolean | null = null;
        const flat = flatten(item);
        const key = flat[0]!;

        if (key) {
            result = !!map.get(key);
        }

        for (const item of flat) {
            if (result !== !!map.get(item)) {
                return null;
            }
        }

        return result;
    };

    protected onChecked(node: TreeNode, item: TuiTreeItem, value: boolean): void {
        flatten(node).forEach((it) => this.map.set(it, value));

        this.map = new Map(this.map.entries());

        if (item.isExpandable) {
            item.toggle(item);
        }
    }

    protected add(node: TreeNode, item: TuiTreeItem): void {
        const size = (node.children ?? []).length;

        node.children = [...(node.children ?? []), {text: `Next level ${size + 1}`}];

        if (item.isExpanded) {
            item.toggle(item);
        }

        flatten(node).forEach((it) => this.map.set(it, this.map.get(it) ?? false));

        this.map = new Map(this.map.entries());
    }
}
