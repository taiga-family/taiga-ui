import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiHandler} from '@taiga-ui/cdk';
import {EMPTY_ARRAY} from '@taiga-ui/cdk';
import {TuiSvgComponent} from '@taiga-ui/core';
import {TuiTreeModule} from '@taiga-ui/kit';

interface TreeNode {
    readonly children?: readonly TreeNode[];
    readonly icon?: string;
    readonly text: string;
}

@Component({
    standalone: true,
    imports: [TuiTreeModule, TuiSvgComponent, NgIf],
    templateUrl: './index.html',
    styleUrls: ['index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
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
