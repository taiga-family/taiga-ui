import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';

interface TreeNode {
    readonly text: string;
    readonly children?: readonly TreeNode[];
}

@Component({
    selector: 'tui-tree-example-6',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiTreeExample6 {
    map = new Map<TreeNode, boolean>();

    readonly data: TreeNode = {
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

    readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>
        item.children || EMPTY_ARRAY;

    readonly getValue = (item: TreeNode, map: Map<TreeNode, boolean>): boolean | null => {
        const flat = flatten(item);
        const result = !!map.get(flat[0]);

        for (let i = 0; i < flat.length; i++) {
            if (result !== !!map.get(flat[i])) {
                return null;
            }
        }

        return result;
    };

    onChecked(node: TreeNode, value: boolean): void {
        flatten(node).forEach(item => this.map.set(item, value));

        this.map = new Map(this.map.entries());
    }
}

function flatten(item: TreeNode): readonly TreeNode[] {
    return item.children
        ? item.children
              .map(node => flatten(node))
              .reduce((arr, item) => [...arr, ...item], [])
        : [item];
}
