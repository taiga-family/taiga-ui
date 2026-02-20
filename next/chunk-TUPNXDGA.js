import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiHandler} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiTree} from '@taiga-ui/kit';

interface TreeNode {
    readonly children?: readonly TreeNode[];
    readonly text: string;
}

@Component({
    imports: [TuiButton, TuiTree],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
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

    protected map = new Map<TreeNode, boolean>();

    protected readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = (item) =>
        item.children || [];

    protected toggleTopmost(): void {
        this.map = new Map(this.map.set(this.data, !this.map.get(this.data)));
    }

    protected toggleLevel(index: number): void {
        const nodes: readonly TreeNode[] = this.data.children || [];
        const key = nodes[index];

        if (key) {
            this.map = new Map(this.map.set(key, !this.map.get(key)));
        }
    }
}
`;export{o as default};
