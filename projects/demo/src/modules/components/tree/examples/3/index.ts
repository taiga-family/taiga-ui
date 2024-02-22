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
    encapsulation,
    changeDetection,
})
export class TuiTreeExample3 {
    protected readonly data: TreeNode = {
        text: 'Topmost',
        children: [
            {
                text: 'Top level 1',
                icon: 'tuiIconHeart',
                children: [
                    {
                        text: 'Another item',
                        children: [
                            {text: 'Next level 1', icon: 'tuiIconHeart'},
                            {text: 'Next level 2', icon: 'tuiIconHeart'},
                            {text: 'Next level 3'},
                        ],
                    },
                ],
            },
            {text: 'Top level 2'},
            {
                text: 'Top level 3',
                children: [{text: 'Test 1'}, {text: 'Test 2', icon: 'tuiIconHeart'}],
            },
        ],
    };

    protected readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>
        item.children || EMPTY_ARRAY;
}
