import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_ARRAY, type TuiHandler} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiTree} from '@taiga-ui/kit';

interface TreeNode {
    readonly children?: readonly TreeNode[];
    readonly text: string;
}

@Component({
    standalone: true,
    imports: [NgIf, TuiButton, TuiTree],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected data: TreeNode = {
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

    protected readonly map = new Map<TreeNode, boolean>();

    protected get childrenLength(): number {
        return this.data.children?.length ?? 0;
    }

    protected readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = (item) =>
        item.children || EMPTY_ARRAY;

    protected toggleTopmost(): void {
        this.map.set(this.data, !this.map.get(this.data));
    }

    protected toggleLevel(index: number): void {
        this.map.set(this.data, true);

        const nodes: readonly TreeNode[] = this.data.children || [];
        const key = nodes[index];

        if (key) {
            this.map.set(key, !this.map.get(key));
        }
    }

    protected dropLevel(index: number): void {
        this.data = {
            ...this.data,
            children: this.data.children?.filter((_, i) => index !== i),
        };

        this.toggleTopmost();
    }
}
