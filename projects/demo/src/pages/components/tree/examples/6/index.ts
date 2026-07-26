import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiHandler, TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiCheckbox, TuiLabel} from '@taiga-ui/core';
import {TuiTree} from '@taiga-ui/kit';

interface TreeNode {
    readonly children?: readonly TreeNode[];
    readonly text: string;
}

function flatten(item: TreeNode): readonly TreeNode[] {
    return item.children
        ? item.children.map(flatten).reduce((arr, item) => [...arr, ...item], [])
        : [item];
}

@Component({
    imports: [FormsModule, TuiCheckbox, TuiLabel, TuiMapperPipe, TuiTree],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected map = new Map<TreeNode, boolean>();

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
        item.children || [];

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

    protected onChecked(node: TreeNode, value: boolean): void {
        flatten(node).forEach((item) => this.map.set(item, value));

        this.map = new Map(this.map.entries());
    }
}
