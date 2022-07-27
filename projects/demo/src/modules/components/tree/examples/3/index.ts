import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';

interface TreeNode {
    readonly text: string;
    readonly icon?: string;
    readonly children?: readonly TreeNode[];
}

@Component({
    selector: `tui-tree-example-3`,
    templateUrl: `./index.html`,
    styleUrls: [`index.less`],
    changeDetection,
    encapsulation,
})
export class TuiTreeExample3 {
    readonly data: TreeNode = {
        text: `Topmost`,
        children: [
            {
                text: `Top level 1`,
                icon: `tuiIconHeart`,
                children: [
                    {
                        text: `Another item`,
                        children: [
                            {text: `Next level 1`, icon: `tuiIconHeart`},
                            {text: `Next level 2`, icon: `tuiIconHeart`},
                            {text: `Next level 3`},
                        ],
                    },
                ],
            },
            {text: `Top level 2`},
            {
                text: `Top level 3`,
                children: [{text: `Test 1`}, {text: `Test 2`, icon: `tuiIconHeart`}],
            },
        ],
    };

    readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>
        item.children || EMPTY_ARRAY;
}
