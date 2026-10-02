# Tree

- **Package**: `KIT`
- **Type**: components

Component to display tree-like data structure

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiTreeController] | `boolean` | input is the default state. |

### Tree - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [childrenHandler] | `TuiHandler<T, readonly T[]>` | handler function to get children for a node |
| [content] | `PolymorpheusContent<TuiTreeContext>` | content template for tree nodes |
| [data] | `T` | data for the tree node |
| [tuiTreeController] | `boolean` | input is the default state. |
| [map] | `Map<T, boolean>` | a map used with controller directive for manual programmatic toggling. |
| [trackBy] | `TrackByFunction<T>` | directive to render nested tree items. |

### Tokens - Inputs

| Property | Type | Description |
|----------|-----|----------|
| TUI_TREE_CONTENT | `PolymorpheusContent<TuiTreeItemContext>` | ) |
| TUI_TREE_CONTROLLER | `TuiTreeController` | provide your own open/closed controlling mechanism |
| TUI_TREE_ACCESSOR | `TuiTreeAccessor<T>` | component with custom open/closed controller) |

### Usage Examples

#### Manual

**Template:**
```html
<div role="tree" [tuiTreeController]="true" >
<tui-tree-item> Fruits <tui-tree-item> Apples <tui-tree-item>Granny Smith</tui-tree-item>
<tui-tree-item>Red Delicious</tui-tree-item>
</tui-tree-item>
<tui-tree-item>Oranges</tui-tree-item>
</tui-tree-item>
<tui-tree-item> Animals <tui-tree-item>Cats</tui-tree-item>
<tui-tree-item>Dogs</tui-tree-item>
</tui-tree-item>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTree} from '@taiga-ui/kit';

@Component({
    imports: [TuiTree],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Array

**Template:**
```html
<tui-tree [value]="data" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTree} from '@taiga-ui/kit';

@Component({
    imports: [TuiTree],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = [
        'Top level 1',
        ['Second level item', ['Third level 1', 'Third level 2', 'Third level 3']],
        'Top level 2',
        'Top level 3',
        ['Second 1', 'Second 2'],
    ];
}
```

**LESS:**
```less
tui-tree {
    margin-inline-start: -3.5rem;
}
```

#### Template

**Template:**
```html
<tui-tree [childrenHandler]="handler" [content]="content" [tuiTreeController]="true" [value]="data" />
<ng-template #content let-node="node" let-value >
<div class="wrapper" [style.opacity]="1 / node.level" > @if (value.icon) { <tui-icon class="t-icon" [icon]="value.icon" /> } {{ value.text }} </div>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
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
```

**LESS:**
```less
.wrapper {
    display: flex;
    align-items: center;
}

.t-icon::before {
    font-size: 1rem;
}
```

#### Programmatic control

**Template:**
```html
<tui-tree [childrenHandler]="handler" [content]="content" [map]="map" [tuiTreeController]="false" [value]="data" />
<ng-template #content let-item > {{ item.text }} </ng-template>
<p>
<button size="s" tuiButton type="button" class="programmatic tui-space_right-2" (click)="toggleTopmost()" > Toggle Topmost </button>
</p>
<p>
<button size="s" tuiButton type="button" class="programmatic" (click)="toggleLevel(0)" > Toggle Top level 1 </button>
</p>
<button size="s" tuiButton type="button" class="programmatic" (click)="toggleLevel(2)" > Toggle Top level 3 </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
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
        const nodes = this.data.children || [];
        const key = nodes[index];

        if (key) {
            this.map = new Map(this.map.set(key, !this.map.get(key)));
        }
    }
}
```

#### Custom

**Template:**
```html
@for (item of data.children; track item) { <tui-tree [childrenHandler]="handler" [content]="content" [tuiTreeController]="true" [value]="item" /> } <ng-template #content let-item > {{ item.text }} </ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiHandler} from '@taiga-ui/cdk';
import {TUI_TREE_CONTENT, TuiTree} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {Folders} from './content';

interface TreeNode {
    readonly children?: readonly TreeNode[];
    readonly text: string;
}

@Component({
    imports: [TuiTree],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_TREE_CONTENT,
            useValue: new PolymorpheusComponent(Folders),
        },
    ],
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

    protected readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = (item) =>
        item.children || [];
}
```

**LESS:**
```less
tui-tree {
    overflow: hidden;
}
```

#### Checkbox

**Template:**
```html
@for (item of data.children; track item) { <tui-tree [childrenHandler]="handler" [content]="content" [tuiTreeController]="true" [value]="item" /> } <ng-template #content let-item >
<label tuiLabel class="tui-space_vertical-2 tui-space_left-1" >
<input size="s" tuiCheckbox type="checkbox" [ngModel]="item | tuiMapper: getValue : map" (ngModelChange)="onChecked(item, $event)" />
<small>{{ item.text }}</small>
</label>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiHandler, TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiCheckbox, TuiLabel} from '@taiga-ui/core';
import {TuiTree} from '@taiga-ui/kit';

interface TreeNode {
    readonly children?: readonly TreeNode[];
    readonly text: string;
}

function flatten(item: TreeNode): readonly TreeNode[] {
    return item.children
        ? item.children.map(flatten).reduce((arr, item) => [...arr, ...item], [])
        : [item];
}

@Component({
    imports: [FormsModule, TuiCheckbox, TuiLabel, TuiMapperPipe, TuiTree],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected map = new Map<TreeNode, boolean>();

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

    protected readonly getValue = (
        item: TreeNode,
        map: Map<TreeNode, boolean>,
    ): boolean | null => {
        let result: boolean | null = null;
        const flat = flatten(item);
        const key = flat[0]!;

        if (key) {
            result = !!map.get(key);
        }

        for (const item of flat) {
            if (result !== !!map.get(item)) {
                return null;
            }
        }

        return result;
    };

    protected onChecked(node: TreeNode, value: boolean): void {
        flatten(node).forEach((item) => this.map.set(item, value));

        this.map = new Map(this.map.entries());
    }
}
```

#### Asynchronous

**Template:**
```html
<tui-tree [childrenHandler]="childrenHandler" [content]="content" [map]="map" [tuiTreeController]="false" [value]="service.data$ | async" (toggled)="onToggled($event)" />
<ng-template #content let-item > @if (item === loading) { <tui-loader class="loader" /> } @else { {{ item.text }} } </ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject, Injectable} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiHandler} from '@taiga-ui/cdk';
import {TuiLoader} from '@taiga-ui/core';
import {
    TUI_TREE_LOADER,
    TUI_TREE_LOADING,
    TUI_TREE_START,
    TuiTree,
    type TuiTreeLoader,
    TuiTreeService,
} from '@taiga-ui/kit';
import {map, type Observable, timer} from 'rxjs';

interface Item {
    readonly children?: boolean;
    readonly text: string;
}

@Injectable()
class TreeLoader implements TuiTreeLoader<Item> {
    public loadChildren({text}: Item): Observable<Item[]> {
        return timer(3000).pipe(
            map(() => [
                {text: `${text} 1`, children: Math.random() > 0.5},
                {text: `${text} 2`, children: Math.random() > 0.5},
                {text: `${text} 3`, children: Math.random() > 0.5},
            ]),
        );
    }

    public hasChildren({children}: Item): boolean {
        return !!children;
    }
}

@Component({
    imports: [AsyncPipe, TuiLoader, TuiTree],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        TuiTreeService,
        {
            provide: TUI_TREE_START,
            useValue: {text: 'Topmost'},
        },
        {
            provide: TUI_TREE_LOADER,
            useClass: TreeLoader,
        },
    ],
})
export default class Example {
    protected readonly loading = inject(TUI_TREE_LOADING);
    protected readonly service = inject(TuiTreeService<Item>);
    protected map = new Map<Item, boolean>();

    protected childrenHandler: TuiHandler<Item, readonly Item[]> = (item) =>
        this.service.getChildren(item);

    protected onToggled(item: Item): void {
        this.service.loadChildren(item);
    }
}
```

**LESS:**
```less
.loader {
    inline-size: 2rem;
    margin: 1rem 0;
}
```

#### Drag and drop

**Template:**
```html
<tui-tree class="tree" [childrenHandler]="handler" [class._dragged]="drag()" [content]="content" [tuiTreeController]="true" [value]="data" >
<ng-template #content let-value > @if (!value.children) { <div class="wrapper">
<div class="drop" (pointerup)="onDrop(value)" ></div>
<tui-tiles class="tiles">
<tui-tile>
<div tuiTileHandle class="content" (pointerdown)="onDrag(value)" > {{ value.text }} </div>
</tui-tile>
</tui-tiles>
<div class="drop" (pointerup)="onDrop(value, 1)" ></div>
</div> } @else { {{ value.text }} } </ng-template>
</tui-tree>
```

**TypeScript:**
```ts
import {ChangeDetectorRef, Component, inject, signal} from '@angular/core';
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
    protected readonly drag = signal<TreeNode | null>(null);
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
```

**LESS:**
```less
.tree._dragged {
    .drop {
        pointer-events: auto;

        &:hover {
            opacity: 1;
        }
    }
}

.wrapper {
    position: relative;
    inline-size: 100%;
}

.content {
    display: flex;
    inline-size: 100%;
    align-items: center;
}

.tiles {
    inline-size: 100%;
    grid-template-rows: 1.5rem;
}

.drop {
    position: absolute;
    z-index: 1;
    inline-size: 100%;
    block-size: 0.5rem;
    margin-block-start: -0.25rem;
    background: #87ceeb;
    border-radius: 1rem;
    opacity: 0;
    pointer-events: none;
}
```
