import {Component} from '@angular/core';
import {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

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

    readonly map = new Map<TreeNode, boolean>();

    toggleTopmost() {
        this.map.set(this.data, !this.map.get(this.data));
    }

    toggleLevel() {
        this.map.set(this.data.children![0], !this.map.get(this.data.children![0]));
    }
}
