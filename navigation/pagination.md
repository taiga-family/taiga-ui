# Pagination

- **Package**: `KIT`
- **Type**: components

Pagination component enables the user to select a specific page from a range of pages

### Example

```html
<tui-pagination [activePadding]="activePadding" [focusable]="focusable" [length]="length" [sidePadding]="sidePadding" [size]="size" [(index)]="index" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [focusable] | `boolean` | accepts focus with keyboard |
| [(index)] | `number` | active page index |
| [length] | `number` | total pages count |
| [size] | `TuiSizeL` | — |
| [activePadding] | `number` | amount of visible pages around active page |
| [sidePadding] | `number` | amount of visible pages at the edges |

### Usage Examples

#### Basic

**Template:**
```html
<tui-textfield tuiTextfieldSize="m" class="slider" >
<input tuiInputSlider [max]="length - 1" [min]="0" [(ngModel)]="index" />
<span>index</span>
<input tuiSlider type="range" />
</tui-textfield>
<tui-pagination [index]="index" [length]="length" (indexChange)="goToPage($event)" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputSlider, TuiPagination} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputSlider, TuiPagination, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected length = 64;
    protected index = 10;

    protected goToPage(index: number): void {
        this.index = index;
        console.info('New page:', index);
    }
}
```

**LESS:**
```less
.slider {
    inline-size: 12.5rem;
    margin-block-end: 1em;
}
```

#### Visible pages around active

**Template:**
```html
<tui-textfield tuiTextfieldSize="m" class="slider" >
<input tuiInputSlider [max]="6" [min]="0" [(ngModel)]="activePadding" />
<span>activePadding</span>
<input tuiSlider type="range" />
</tui-textfield>
<tui-pagination [activePadding]="activePadding" [index]="10" [length]="64" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputSlider, TuiPagination} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputSlider, TuiPagination, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected activePadding = 2;
}
```

**LESS:**
```less
.slider {
    inline-size: 12.5rem;
    margin-block-end: 1em;
}
```

#### Visible edge pages

**Template:**
```html
<tui-textfield tuiTextfieldSize="m" class="slider" >
<input tuiInputSlider [max]="6" [min]="0" [(ngModel)]="sidePadding" />
<span>sidePadding</span>
<input tuiSlider type="range" [step]="1" />
</tui-textfield>
<tui-pagination [index]="10" [length]="64" [sidePadding]="sidePadding" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputSlider, TuiPagination} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputSlider, TuiPagination, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected sidePadding = 3;
}
```

**LESS:**
```less
.slider {
    inline-size: 12.5rem;
    margin-block-end: 1em;
}
```

#### Custom

**Template:**
```html
<tui-pagination [content]="content" [length]="7" >
<ng-template #content let-index > {{ days[index] }} </ng-template>
</tui-pagination>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPagination} from '@taiga-ui/kit';

@Component({
    imports: [TuiPagination],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
}
```
