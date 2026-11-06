# Pagination

- **Package**: `KIT`
- **Type**: components

Pagination component enables the user to select a specific page from a range of pages

### How to Use (Import)

```ts
import {TuiPagination} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiPagination,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-pagination
  [length]="pageCount"
  [index]="currentPage"
  (indexChange)="goToPage($event)"
></tui-pagination>
```

### Example

```html
<tui-pagination [activePadding]="activePadding" [focusable]="focusable" [length]="length" [sidePadding]="sidePadding" [size]="size" [(index)]="index" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| focusable | `boolean` | Accepts focus with keyboard |
| index | `number` | Active page index |
| length | `number` | Total pages count |
| size | `TuiSizeS | TuiSizeL` | Size |
| activePadding | `number` | Amount of visible pages around active page |
| sidePadding | `number` | Amount of visible pages at the edges |

### Usage Examples

#### Basic

**Template:**
```html
<tui-input-slider tuiTextfieldSize="m" class="slider" [max]="length - 1" [quantum]="1" [tuiTextfieldCustomContent]="inputCustomContent" [tuiTextfieldLabelOutside]="true" [(ngModel)]="index" />
<ng-template #inputCustomContent>index</ng-template>
<tui-pagination [index]="index" [length]="length" (indexChange)="goToPage($event)" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPagination} from '@taiga-ui/kit';
import {TuiInputSliderModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiInputSliderModule,
        TuiPagination,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Page {
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
<tui-input-slider tuiTextfieldSize="m" class="slider" [max]="6" [quantum]="1" [tuiTextfieldCustomContent]="inputCustomContent" [tuiTextfieldLabelOutside]="true" [(ngModel)]="activePadding" />
<ng-template #inputCustomContent>activePadding</ng-template>
<tui-pagination [activePadding]="activePadding" [index]="10" [length]="64" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPagination} from '@taiga-ui/kit';
import {TuiInputSliderModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiInputSliderModule,
        TuiPagination,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Page {
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
<tui-input-slider tuiTextfieldSize="m" class="slider" [max]="6" [quantum]="1" [tuiTextfieldCustomContent]="inputCustomContent" [tuiTextfieldLabelOutside]="true" [(ngModel)]="sidePadding" />
<ng-template #inputCustomContent>sidePadding</ng-template>
<tui-pagination [index]="10" [length]="64" [sidePadding]="sidePadding" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPagination} from '@taiga-ui/kit';
import {TuiInputSliderModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiInputSliderModule,
        TuiPagination,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Page {
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
<tui-pagination [content]="test" [length]="7" />
<ng-template #test let-index > {{ days[index] }} </ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPagination} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiPagination],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected readonly days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
}
```
