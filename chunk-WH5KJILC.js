import"./chunk-HU6DUUP4.js";var r=`import {ChangeDetectorRef, Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiHandler} from '@taiga-ui/cdk';
import {TuiTiles, TuiTree} from '@taiga-ui/kit';

interface TreeNode {
    children?: readonly TreeNode[];
    text: string;
}

@Component({
    imports: [TuiTiles, TuiTree],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected drag = signal<TreeNode | null>(null);

    protected readonly cd = inject(ChangeDetectorRef);

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

    protected readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = (item) =>
        item.children || [];

    protected onDrag(drag: TreeNode): void {
        this.drag.set(drag);
    }

    protected onDrop(target: TreeNode, position = 0): void {
        const drag = this.drag();

        if (!drag) {
            return;
        }

        const dragParent = findParent(drag, this.data);
        const targetParent = findParent(target, this.data);

        if (dragParent) {
            dragParent.children = dragParent?.children?.filter((item) => item !== drag);
        }

        const index = (targetParent?.children?.indexOf(target) ?? 0) + position;

        if (targetParent?.children) {
            targetParent.children = [
                ...targetParent.children.slice(0, index),
                drag,
                ...targetParent.children.slice(index),
            ];
        }

        this.drag.set(null);
    }
}

function findParent(item: TreeNode, node: TreeNode): TreeNode | null {
    if (!node.children) {
        return null;
    }

    if (node.children.includes(item)) {
        return node;
    }

    for (const iterateItem of node.children) {
        const parent = findParent(item, iterateItem);

        if (parent) {
            return parent;
        }
    }

    return null;
}
`;export{r as default};
