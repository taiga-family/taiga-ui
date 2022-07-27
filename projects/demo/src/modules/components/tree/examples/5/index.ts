import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';
import {TUI_TREE_CONTENT} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {FoldersComponent} from './content';

interface TreeNode {
    readonly text: string;
    readonly children?: readonly TreeNode[];
}

@Component({
    selector: `tui-tree-example-5`,
    templateUrl: `./index.html`,
    styleUrls: [`index.less`],
    providers: [
        {
            provide: TUI_TREE_CONTENT,
            useValue: new PolymorpheusComponent(FoldersComponent),
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiTreeExample5 {
    readonly data: TreeNode = {
        text: `Topmost`,
        children: [
            {
                text: `Top level 1`,
                children: [
                    {
                        text: `Another item`,
                        children: [
                            {text: `Next level 1`},
                            {text: `Next level 2`},
                            {text: `Next level 3`},
                        ],
                    },
                ],
            },
            {text: `Top level 2`},
            {
                text: `Top level 3`,
                children: [{text: `Test 1`}, {text: `Test 2`}],
            },
        ],
    };

    readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>
        item.children || EMPTY_ARRAY;
}
