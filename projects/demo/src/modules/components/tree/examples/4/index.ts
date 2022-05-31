import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';

interface TreeNode {
    readonly text: string;
    readonly children?: readonly TreeNode[];
}

@Component({
    selector: 'tui-tree-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiTreeExample4 {
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

    readonly map = new Map<TreeNode, boolean>();

    readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>
        item.children || EMPTY_ARRAY;

    toggleTopmost(): void {
        this.map.set(this.data, !this.map.get(this.data));
    }

    toggleLevel(): void {
        this.map.set(this.data.children[0], !this.map.get(this.data.children[0]));
    }
}
