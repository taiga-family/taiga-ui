import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_ARRAY, type TuiHandler} from '@taiga-ui/cdk';

interface TreeNode {
    readonly children?: readonly TreeNode[];
    readonly text: string;
}

@Component({
    selector: 'tui-tree-example-4',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTreeExample4 {
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

    protected readonly map = new Map<TreeNode, boolean>();

    protected readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>
        item.children || EMPTY_ARRAY;

    protected toggleTopmost(): void {
        this.map.set(this.data, !this.map.get(this.data));
    }

    protected toggleLevel(index: number): void {
        const nodes: readonly TreeNode[] = this.data.children || [];

        this.map.set(nodes[index], !this.map.get(nodes[index]));
    }
}
