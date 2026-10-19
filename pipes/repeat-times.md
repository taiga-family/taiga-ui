# RepeatTimes

- **Package**: `CDK`
- **Type**: pipes

### How to Use (Import)

```ts
import {TuiRepeatTimesPipe} from '@taiga-ui/cdk';

//...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiRepeatTimesPipe,
  ],
  //  ...
})
export class Example {}
```

### How to Use (Template)

```html
@for (index of 3 | tuiRepeatTimes; track index) {
<div class="t-cell"></div>
}
```

### Usage Examples

#### Base

**Template:**
```html
<ng-container *ngFor="let index of 5 | tuiRepeatTimes"> {{ index }} </ng-container>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimesPipe} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [NgForOf, TuiRepeatTimesPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
