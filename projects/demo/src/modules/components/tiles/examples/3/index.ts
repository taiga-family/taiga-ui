import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';

interface TreeNode {
    children?: readonly TreeNode[];
    icon?: string;
    text: string;
}

@Component({
    selector: 'tui-tiles-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiTilesExample3 {
    drag!: TreeNode;

    readonly data: TreeNode = {
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

    readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>
        item.children || EMPTY_ARRAY;

    onDrag(drag: TreeNode): void {
        this.drag = drag;
    }

    onDrop(target: TreeNode, position = 0): void {
        const targetParent = findParent(target, this.data);
        const dragParent = findParent(this.drag, this.data);

        if (dragParent) {
            dragParent.children = dragParent.children?.filter(item => item !== this.drag);
        }

        if (targetParent) {
            const index = (targetParent.children?.indexOf(target) ?? 0) + position;

            targetParent.children = [
                ...(targetParent.children?.slice(0, index) ?? []),
                this.drag,
                ...(targetParent.children?.slice(index) ?? []),
            ];
        }
    }
}

function findParent(
    item: TreeNode | null,
    node?: TreeNode | null,
): TreeNode | null | undefined {
    if (node?.children?.includes(item as TreeNode)) {
        return node;
    }

    for (let i = 0; i < (node?.children?.length ?? 0); i++) {
        const parent = findParent(item, node?.children?.[i]);

        if (parent) {
            return parent;
        }
    }

    return null;
}
