# ElasticContainer

- **Package**: `LAYOUT`
- **Type**: components

A wrapper component that changes its height with transition, depending on the content

### Usage Examples

#### Example 1

**Template:**
```html
<tui-elastic-container> {{ current }} <button tuiLink type="button" (click)="toggle()" > Show {{ current === more ? 'less' : 'more' }} </button>
</tui-elastic-container>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink} from '@taiga-ui/core';
import {TuiElasticContainer} from '@taiga-ui/layout';

@Component({
    imports: [TuiElasticContainer, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly more =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas. Donec nisl ipsum, faucibus sit amet elit eu, vehicula hendrerit purus. Duis tempus pulvinar pharetra. In volutpat, odio dictum ornare iaculis, arcu turpis blandit quam, sit amet malesuada nisl enim nec tortor. In eleifend arcu diam, ut dignissim risus elementum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque elit ac feugiat posuere. Aliquam diam ante, condimentum eget nisi nec, suscipit efficitur velit. Cras sed dolor eu tortor dapibus condimentum.';

    protected readonly less =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas.';

    protected current = this.less;

    protected toggle(): void {
        this.current = this.current === this.less ? this.more : this.less;
    }
}
```

#### Example 2

**Template:**
```html
<tui-elastic-container class="container">
<div contenteditable class="editable" > Editable content </div>
</tui-elastic-container>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiElasticContainer} from '@taiga-ui/layout';

@Component({
    imports: [TuiElasticContainer],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.container {
    border: 2px solid var(--tui-text-tertiary);
    overflow: visible;

    &:focus-within {
        border-color: var(--tui-background-accent-1);
    }
}

.editable {
    outline: none;
    padding: 1rem;
}
```

#### Example 3

**Template:**
```html
<tui-elastic-container class="visible"> @for (_ of '-'.repeat(content); track $index) { <div class="tui-space_bottom-4">I'm content</div> } <button size="s" tuiButton type="button" class="tui-space_right-2" (click)="add()" > Add content </button>
<button size="s" tuiButton type="button" (click)="remove()" > Remove content </button>
</tui-elastic-container>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiElasticContainer} from '@taiga-ui/layout';

@Component({
    imports: [TuiButton, TuiElasticContainer],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected content = 1;

    protected add(): void {
        this.content++;
    }

    protected remove(): void {
        this.content--;
    }
}
```

**LESS:**
```less
.visible {
    overflow: visible;
}
```

#### Example 4

**Template:**
```html
<button size="s" tuiButton type="button" (click)="add()" > Add item </button>
<tui-elastic-container class="tui-space_top-4"> @for (item of items; track item) { <div class="wrapper">
<h3 class="title">
<button appearance="secondary" size="s" tuiIconButton type="button" class="tui-space_right-2" [style.border-radius.%]="100" [tuiChevron]="item.expanded" (click)="item.expanded = !item.expanded" > Expand </button> Nested form <button appearance="flat" iconStart="@tui.trash" size="s" tuiIconButton type="button" class="remove" [style.border-radius.%]="100" (click)="remove($index)" > Remove </button>
</h3>
<tui-expand [expanded]="item.expanded">
<tui-textfield class="tui-space_top-4">
<input tuiInput [(ngModel)]="item.value" />
<label tuiLabel>Some input</label>
</tui-textfield>
</tui-expand>
</div> } </tui-elastic-container>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiArrayRemove} from '@taiga-ui/cdk';
import {TuiButton, TuiExpand, TuiInput} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';
import {TuiElasticContainer} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiChevron,
        TuiElasticContainer,
        TuiExpand,
        TuiInput,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = [
        {
            expanded: false,
            value: 'Test 1',
        },
        {
            expanded: false,
            value: 'Test 2',
        },
    ];

    protected add(): void {
        this.items = this.items.concat({expanded: false, value: 'New value'});
    }

    protected remove(index: number): void {
        this.items = tuiArrayRemove(this.items, index);
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.wrapper:not(:last-child) {
    margin-block-end: 1rem;
}

.title {
    display: flex;
    align-items: center;
    margin: 0;
}

.remove {
    margin-inline-start: auto;
}
```
