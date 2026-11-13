# ActionBar

- **Package**: `KIT`
- **Type**: components

It is an element on the bottom of screen to show actions by multiselect of some items. It works with custom content.

### How to Use (Import)

```ts
import {TuiActionBar} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    TuiActionBar,
    // ...
  ],
  // ...
})
export class App {}
```

### How to Use (Template)

```html
<tui-action-bar *tuiActionBar="open">content</tui-action-bar>
```

### Usage Examples

#### Size M

**Template:**
```html
<tui-filter size="s" [formControl]="control" [items]="items" />
<tui-action-bar *tuiActionBar="open" [expanded]="!!isMobile() && expanded" >
<tui-data-list role="menu">
<tui-opt-group>
<button role="menuitem" tuiOption type="button" >
<span>
<tui-icon icon="@tui.send" class="tui-space_right-3" /> Send </span>
</button>
<button role="menuitem" tuiOption type="button" >
<span>
<tui-icon icon="@tui.trash" class="tui-space_right-3" /> Delete </span>
</button>
</tui-opt-group>
<tui-opt-group>
<button role="menuitem" tuiOption type="button" [disabled]="selected === items.length" (click)="control.setValue(items)" >
<span>
<tui-icon icon="@tui.layout-grid" class="tui-space_right-3" /> Select all </span>
</button>
<button role="menuitem" tuiOption type="button" (click)="close()" >
<span>
<tui-icon icon="@tui.x" class="tui-space_right-3" /> Select none and close </span>
</button>
</tui-opt-group>
<tui-opt-group>
<button *tuiRepeatTimes="let index of 5" role="menuitem" tuiOption type="button" >
<span>
<tui-icon icon="@tui.star" class="tui-space_right-3" /> Action {{ index + 1 }} </span>
</button>
</tui-opt-group>
</tui-data-list>
<div>
<strong>Selected: {{ selected }} of {{ items.length }}</strong>
<button *ngIf="!isMobile()" tuiLink type="button" class="tui-space_left-3" (click)="toggleSelect()" > {{ selected < items.length ? 'Select all' : 'Select none' }} </button>
</div>
<tui-items-with-more>
<ng-container *tuiRepeatTimes="let index of 5">
<button *tuiItem iconStart="@tui.star" tuiButton type="button" > Action {{ index + 1 }} </button>
</ng-container>
<ng-template let-lastIndex tuiMore >
<button iconStart="@tui.ellipsis" tuiButton tuiDropdownAlign="right" tuiDropdownOpen type="button" [tuiDropdown]="dropdown" > More </button>
<ng-template #dropdown>
<tui-data-list size="l">
<ng-container *tuiRepeatTimes="let index of 5">
<button *ngIf="index > lastIndex" tuiOption type="button" > Action {{ index + 1 }} </button>
</ng-container>
</tui-data-list>
</ng-template>
</ng-template>
</tui-items-with-more>
<button *ngIf="!isMobile()" iconStart="@tui.send" tuiButton type="button" > Send </button>
<button *ngIf="!isMobile()" iconStart="@tui.trash" tuiButton type="button" (click)="close()" > Delete </button>
<button *ngIf="isMobile()" iconStart="@tui.send" tuiIconButton type="button" > Send </button>
<button *ngIf="isMobile()" iconStart="@tui.ellipsis" tuiIconButton type="button" (click)="expanded = !expanded" > More </button>
<button *ngIf="!isMobile()" appearance="icon" iconStart="@tui.x" tuiIconButton type="button" (click)="close()" > Close </button>
</tui-action-bar>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiBreakpointService,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiIcon,
    TuiLink,
} from '@taiga-ui/core';
import {TuiActionBar, TuiFilter, TuiItemsWithMore} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        TuiActionBar,
        TuiButton,
        TuiDataList,
        TuiDropdown,
        TuiFilter,
        TuiIcon,
        TuiItemsWithMore,
        TuiLink,
        TuiRepeatTimes,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = ['one', 'two', 'three', 'four'];
    protected control = new FormControl<string[]>([]);
    protected expanded = false;

    protected readonly isMobile = toSignal(
        inject(TuiBreakpointService).pipe(map((size) => size === 'mobile')),
    );

    protected get value(): string[] {
        return this.control.value || [];
    }

    protected get open(): boolean {
        return this.value.length > 0;
    }

    protected get selected(): number {
        return this.value.length;
    }

    protected toggleSelect(): void {
        this.control.setValue(this.selected < this.items.length ? this.items : []);
    }

    protected close(): void {
        this.control.setValue([]);
        this.expanded = false;
    }
}
```

#### Size S

**Template:**
```html
<button size="m" tuiButton type="button" (click)="open.set(true)" > Show TableBar </button>
<tui-action-bar *tuiActionBar="open()" size="s" >
<span [style.width.%]="isMobile() ? 100 : null">Table bar opened</span>
<button appearance="glass" iconStart="@tui.trash" tuiButton type="button" (click)="open.set(false)" > Remove </button>
<button iconStart="@tui.x" tuiIconButton type="button" [appearance]="isMobile() ? 'glass' : 'icon'" (click)="open.set(false)" > Close </button>
</tui-action-bar>
```

**TypeScript:**
```ts
import {Component, inject, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBreakpointService, TuiButton} from '@taiga-ui/core';
import {TuiActionBar} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiActionBar, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = signal(false);

    protected readonly isMobile = toSignal(
        inject(TuiBreakpointService).pipe(map((size) => size === 'mobile')),
    );
}
```

#### Top position

**Template:**
```html
<button automation-id="open-table-bar-on-top" tuiButton type="button" (click)="open.set(true)" > Show TableBar on top </button>
<tui-action-bar *tuiActionBar="open()">
<span>Table bar on top opened</span>
<button iconStart="@tui.trash" tuiIconButton type="button" (click)="open.set(false)" > Close </button>
</tui-action-bar>
```

**TypeScript:**
```ts
import {Component, inject, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBreakpointService, TuiButton} from '@taiga-ui/core';
import {TuiActionBar} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiActionBar, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = signal(false);

    protected readonly isMobile = toSignal(
        inject(TuiBreakpointService).pipe(map((size) => size === 'mobile')),
    );
}
```

**LESS:**
```less
tui-action-bar {
    top: ~'max(1rem, env(safe-area-inset-top))';
    bottom: unset;
}
```
