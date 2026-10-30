# ActionBar

- **Package**: `KIT`
- **Type**: components

It is an element on the bottom of screen to show actions by multiselect of some items. It works with custom content.

### Usage Examples

#### Size M

**Template:**
```html
<tui-filter size="s" [formControl]="control" [items]="items" />
<tui-action-bar *tuiPopup="open" [expanded]="!!isMobile() && expanded" >
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
<hr />
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
<hr />
<tui-opt-group> @for (_ of '-'.repeat(5); track $index) { <button role="menuitem" tuiOption type="button" >
<span>
<tui-icon icon="@tui.star" class="tui-space_right-3" /> Action {{ $index + 1 }} </span>
</button> } </tui-opt-group>
</tui-data-list>
<div>
<strong>Selected: {{ selected }} of {{ items.length }}</strong> @if (!isMobile()) { <button tuiLink type="button" [style.margin-inline-start.rem]="0.75" [style.text-decoration-line]="'underline'" [style.text-decoration-style]="'dashed'" (click)="toggleSelect()" > {{ selected < items.length ? 'Select all' : 'Select none' }} </button> } </div>
<tui-items-with-more> @for (_ of '-'.repeat(5); track $index) { <button *tuiItem iconStart="@tui.star" tuiButton type="button" > Action {{ $index + 1 }} </button> } <ng-template let-lastIndex tuiMore >
<button iconStart="@tui.ellipsis" tuiButton tuiDropdownAlign="end" tuiDropdownAuto type="button" [tuiDropdown]="dropdown" > More </button>
<ng-template #dropdown>
<tui-data-list size="l"> @for (_ of '-'.repeat(5); track $index) { @if ($index > lastIndex) { <button tuiOption type="button" > Action {{ $index + 1 }} </button> } } </tui-data-list>
</ng-template>
</ng-template>
</tui-items-with-more> @if (!isMobile()) { <button iconStart="@tui.send" tuiButton type="button" > Send </button> } @if (!isMobile()) { <button iconStart="@tui.trash" tuiButton type="button" (click)="close()" > Delete </button> } @if (isMobile()) { <button iconStart="@tui.send" tuiIconButton type="button" > Send </button> } @if (isMobile()) { <button iconStart="@tui.ellipsis" tuiIconButton type="button" (click)="expanded = !expanded" > More </button> } @if (!isMobile()) { <button appearance="icon" iconStart="@tui.x" tuiIconButton type="button" (click)="close()" > Close </button> } </tui-action-bar>
```

**TypeScript:**
```ts
import {Component, computed, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_BREAKPOINT,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiIcon,
    TuiLink,
    TuiPopup,
} from '@taiga-ui/core';
import {TuiActionBar, TuiFilter, TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiActionBar,
        TuiButton,
        TuiDataList,
        TuiDropdown,
        TuiFilter,
        TuiIcon,
        TuiItemsWithMore,
        TuiLink,
        TuiPopup,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly breakpoint = inject(TUI_BREAKPOINT);

    protected items = ['one', 'two', 'three', 'four'];
    protected control = new FormControl<string[]>([]);
    protected expanded = false;
    protected readonly isMobile = computed(() => this.breakpoint() === 'mobile');

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
<button size="m" tuiButton type="button" (click)="open = true" > Show ActionBar </button>
<tui-action-bar *tuiPopup="open" size="s" >
<span [style.width.%]="isMobile() ? 100 : null">Action bar opened</span>
<button appearance="secondary-grayscale" iconStart="@tui.trash" tuiButton type="button" (click)="open = false" > Remove </button>
<button iconStart="@tui.x" tuiIconButton type="button" [appearance]="isMobile() ? 'secondary-grayscale' : 'icon'" (click)="open = false" > Close </button>
</tui-action-bar>
```

**TypeScript:**
```ts
import {Component, computed, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_BREAKPOINT, TuiButton, TuiPopup} from '@taiga-ui/core';
import {TuiActionBar} from '@taiga-ui/kit';

@Component({
    imports: [TuiActionBar, TuiButton, TuiPopup],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly breakpoint = inject(TUI_BREAKPOINT);

    protected open = false;
    protected readonly isMobile = computed(() => this.breakpoint() === 'mobile');
}
```

#### Top position

**Template:**
```html
<button tuiButton type="button" (click)="open.set(true)" > Show ActionBar on top </button>
<tui-action-bar *tuiPopup="open()">
<span>Action bar on top opened</span>
<button iconStart="@tui.trash" tuiIconButton type="button" (click)="open.set(false)" > Close </button>
</tui-action-bar>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiPopup} from '@taiga-ui/core';
import {TuiActionBar} from '@taiga-ui/kit';

@Component({
    imports: [TuiActionBar, TuiButton, TuiPopup],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly open = signal(false);
}
```

**LESS:**
```less
tui-action-bar {
    inset-block-start: ~'max(1rem, env(safe-area-inset-top))';
    inset-block-end: unset;
}
```
