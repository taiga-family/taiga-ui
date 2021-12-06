import {Component} from '@angular/core';
import {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

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
    readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>
        item.children || EMPTY_ARRAY;

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

    readonly getValue = (item: TreeNode, map: Map<TreeNode, boolean>) => {
        const flat = flatten(item);
        const result = !!map.get(flat[0]);

        for (let i = 0; i < flat.length; i++) {
            if (result !== !!map.get(flat[i])) {
                return null;
            }
        }

        return result;
    };

    map = new Map<TreeNode, boolean>();

    onChecked(node: TreeNode, value: boolean) {
        flatten(node).forEach(item => this.map.set(item, value));

        this.map = new Map(this.map.entries());
    }
}

function flatten(item: TreeNode): readonly TreeNode[] {
    return item.children
        ? item.children.map(flatten).reduce((arr, item) => [...arr, ...item], [])
        : [item];
}
