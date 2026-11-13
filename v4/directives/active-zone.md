# ActiveZone

- **Package**: `CDK`
- **Type**: directives

`tuiActiveZone` allows to track a scope that user interacts with. For example, for closing dropdown on blur

### How to Use (Import)

```ts
import {TuiActiveZone} from '@taiga-ui/cdk';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiActiveZone,
  ],
  // ...
})
export class Example {
  active = false;

  onActiveZone(active: boolean) {
    this.active = active;
  }
}
```

### How to Use (Template)

```html
<div (tuiActiveZoneChange)="onActiveZone($event)">
  <button
    tuiButton
    type="button"
  >
    Button 1
  </button>
  <button
    tuiButton
    type="button"
  >
    Button 2
  </button>
</div>
```

### Usage Examples

#### Composite zone

**Template:**
```html
<p>Parent zone: {{ parentActive }}</p>
<p>Child zone: {{ childActive }}</p>
<p>
<input placeholder="input outside a zone" />
</p>
<div #parent="tuiActiveZone" class="active-zone" [class.active-zone_active]="parentActive" (tuiActiveZoneChange)="onParentActiveZone($event)" >
<h2>Parent zone</h2>
<button tuiButton type="button" > A button inside zone </button>
</div>
<p>
<button type="button">A button outside of zone</button>
</p>
<div class="active-zone" [class.active-zone_active]="childActive" [tuiActiveZoneParent]="parent" (tuiActiveZoneChange)="onChildActiveZone($event)" >
<h2>Child zone</h2>
<tui-input #input [formControl]="control" > Input inside zone </tui-input>
<p> You can bind different elements with <code>[tuiActiveZoneParent]</code> directive </p>
</div>
<p>
<input placeholder="input outside zone" />
<button type="button" (click)="onClick(input)" > Focus input in zone </button>
</p>
<p>Zone keeps active after browser tab change</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiActiveZone} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {type TuiInputComponent, TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiActiveZone, TuiButton, TuiInputModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('');

    protected childActive = false;

    protected parentActive = false;

    protected items = [1, 2, 3];

    protected onParentActiveZone(active: boolean): void {
        this.parentActive = active;
    }

    protected onChildActiveZone(active: boolean): void {
        this.childActive = active;
    }

    protected onClick({nativeFocusableElement}: TuiInputComponent): void {
        if (nativeFocusableElement) {
            nativeFocusableElement.focus();
        }
    }
}
```

**LESS:**
```less
.active-zone {
    padding: 1.25rem;
    border: 2px solid;

    &_active {
        border-color: var(--tui-background-accent-1);
    }
}
```

#### Dialogs

**Template:**
```html
<p>Zone: {{ active }}</p>
<p>
<tui-textfield>
<label tuiLabel>I'm outside</label>
<input tuiTextfield />
</tui-textfield>
</p>
<div class="active-zone" [class.active-zone_active]="active" (tuiActiveZoneChange)="onZone($event)" >
<h2>Zone</h2>
<button tuiButton type="button" (click)="onClick()" > Show dialog </button>
</div>
<p>
<button tuiButton type="button" > I'm outside too </button>
</p>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiActiveZone} from '@taiga-ui/cdk';
import {TuiButton, TuiDialogService, TuiTextfield} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiActiveZone, TuiButton, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialog = inject(TuiDialogService);

    protected active = false;

    protected onZone(active: boolean): void {
        console.info(active);
        this.active = active;
    }

    protected onClick(): void {
        this.dialog
            .open(
                'Dialogs automatically attach themselves to the currently active zone',
                {label: "I'm inside", size: 's'},
            )
            .subscribe();
    }
}
```

**LESS:**
```less
.active-zone {
    padding: 1.25rem;
    border: 2px solid;

    &_active {
        border-color: var(--tui-background-accent-1);
    }
}
```
