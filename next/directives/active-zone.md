# ActiveZone

- **Package**: `CDK`
- **Type**: directives

`tuiActiveZone` allows to track a scope that user interacts with. For example, for closing dropdown on blur

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
<tui-textfield>
<label tuiLabel>Input inside zone</label>
<input #input tuiInput [formControl]="control" />
</tui-textfield>
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
import {TuiButton, TuiInput} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiActiveZone, TuiButton, TuiInput],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

    protected onClick(el: HTMLInputElement): void {
        el.focus();
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
<input tuiInput />
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
import {TuiButton, TuiDialogService, TuiInput} from '@taiga-ui/core';

@Component({
    imports: [TuiActiveZone, TuiButton, TuiInput],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
