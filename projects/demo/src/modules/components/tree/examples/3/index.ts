import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';

interface TreeNode {
    readonly children?: readonly TreeNode[];
    readonly icon?: string;
    readonly text: string;
}

@Component({
    selector: 'tui-tree-example-3',
    templateUrl: './index.html',
    styleUrls: ['index.less'],
    changeDetection,
    encapsulation,
})
export class TuiTreeExample3 {
    readonly data: TreeNode = {
        children: [
            {
                children: [
                    {
                        children: [
                            {icon: 'tuiIconHeart', text: 'Next level 1'},
                            {icon: 'tuiIconHeart', text: 'Next level 2'},
                            {text: 'Next level 3'},
                        ],
                        text: 'Another item',
                    },
                ],
                icon: 'tuiIconHeart',
                text: 'Top level 1',
            },
            {text: 'Top level 2'},
            {
                children: [{text: 'Test 1'}, {icon: 'tuiIconHeart', text: 'Test 2'}],
                text: 'Top level 3',
            },
        ],
        text: 'Topmost',
    };

    readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>
        item.children || EMPTY_ARRAY;
}
