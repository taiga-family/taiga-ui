import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiHandler} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';
import {TuiTree} from '@taiga-ui/kit';

interface TreeNode {
    readonly children?: readonly TreeNode[];
    readonly icon?: string;
    readonly text: string;
}

@Component({
    imports: [TuiIcon, TuiTree],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data: TreeNode = {
        text: 'Topmost',
        children: [
            {
                text: 'Top level 1',
                icon: '@tui.heart',
                children: [
                    {
                        text: 'Another item',
                        children: [
                            {text: 'Next level 1', icon: '@tui.heart'},
                            {text: 'Next level 2', icon: '@tui.heart'},
                            {text: 'Next level 3'},
                        ],
                    },
                ],
            },
            {text: 'Top level 2'},
            {
                text: 'Top level 3',
                children: [{text: 'Test 1'}, {text: 'Test 2', icon: '@tui.heart'}],
            },
        ],
    };

    protected readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = (item) =>
        item.children || [];
}
`;export{o as default};
