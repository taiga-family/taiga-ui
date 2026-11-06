# DropdownOpen

- **Package**: `CORE`
- **Type**: directives

`DropdownOpen` is a composite dropdown directive, similar to manual dropdown, but it also takes care of opening and closing on its own. If an element is a textfield ( `input` or `textarea` ), arrow down press opens a dropdown. The next press focuses the first item from the list. If it is not a textfield, click opens and closes a dropdown. By default directive is applied to the first focusable element inside. If you want another element to be the host, use `#tuiDropdownHost` reference.

### How to Use (Import)

```ts
import {TuiDropdown} from '@taiga-ui/core';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiDropdown,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<button
  tuiButton
  type="button"
  [tuiDropdown]="dropdown"
  [(tuiDropdownOpen)]="open"
>
  Open menu
  <ng-template #dropdown>
    <tui-data-list>
      <button
        *ngFor="let item of items"
        tuiOption
        (click)="onClick()"
      >
        {{item}}
      </button>
    </tui-data-list>
  </ng-template>
</button>
```

### Example

```html
<tui-input class="input" [ngModel]="input" [tuiDropdown]="template ? dropdownContent : content" [tuiDropdownAlign]="dropdown.align" [tuiDropdownDirection]="dropdown.direction" [tuiDropdownEnabled]="enabled" [tuiDropdownLimitWidth]="dropdown.limitWidth" [tuiDropdownMaxHeight]="dropdown.maxHeight" [tuiDropdownMinHeight]="dropdown.minHeight" [tuiDropdownOffset]="dropdown.offset" [tuiDropdownSided]="dropdown.dropdownSided" [tuiDropdownSidedOffset]="dropdown.dropdownSidedOffset" [(tuiDropdownOpen)]="open" (ngModelChange)="onInput($event)" > Start typing </tui-input>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiDropdown] | `PolymorpheusContent` | Content inside a dropdown |
| [(tuiDropdownOpen)] | `boolean` | Content inside a dropdown |

### Usage Examples

#### Menu

**Template:**
```html
<button appearance="flat" iconEnd="@tui.chevron-right" size="m" tuiButton tuiDropdownAlign="right" type="button" [tuiAppearanceState]="open ? 'active' : null" [tuiDropdown]="dropdown" [tuiDropdownSided]="true" [(tuiDropdownOpen)]="open" > Button </button>
<ng-template #dropdown let-close >
<tui-data-list>
<tui-opt-group>
<button *ngFor="let item of items" tuiOption type="button" (click)="onClick()" > {{ item }} </button>
</tui-opt-group>
<tui-opt-group>
<button tuiOption type="button" (click)="close()" > Nevermind </button>
</tui-opt-group>
</tui-data-list>
</ng-template>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiStep} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiButton, TuiDataList, TuiDropdown, TuiStep],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

    protected open = false;

    protected onClick(): void {
        this.open = false;
    }
}
```

#### With custom host

**Template:**
```html
<div tuiDropdownLimitWidth="fixed" tuiGroup [tuiDropdown]="dropdown" [(tuiDropdownOpen)]="open" >
<button size="l" tuiButton type="button" > Button that does not open dropdown </button>
<button #tuiDropdownHost size="l" tuiChevron tuiIconButton type="button" [style.flex]="'0 0 auto'" > Menu </button>
</div>
<ng-template #dropdown>
<tui-textfield tuiChevron class="margin" >
<label tuiLabel>Nested Select</label>
<input tuiSelect [(ngModel)]="selected" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="selectItems" />
</tui-textfield>
<tui-data-list>
<button *ngFor="let item of items" tuiOption type="button" (click)="onClick()" > {{ item }} </button>
</tui-data-list>
</ng-template>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiGroup,
    TuiTextfield,
} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDataListWrapper,
        TuiDropdown,
        TuiGroup,
        TuiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

    protected readonly selectItems = ['Item 1', 'Item 2'];

    protected open = false;

    protected selected = null;

    protected onClick(): void {
        this.open = false;
    }
}
```

**LESS:**
```less
:host {
    display: block;
    inline-size: max-content;
}

.margin {
    margin: 1rem;
}
```

#### With link

**Template:**
```html
<button tuiChevron tuiDropdownAlign="right" tuiLink type="button" class="link" [iconStart]="ascending ? '@tui.chevron-up' : '@tui.chevron-down'" [textContent]="primary" [tuiDropdown]="dropdown" [(tuiDropdownOpen)]="open" ></button>
<ng-template #dropdown>
<tui-data-list>
<tui-opt-group *ngFor="let group of items">
<button *ngFor="let item of group" tuiOption type="button" class="item" (click)="onClick(item)" > {{ item }} <tui-icon *ngIf="itemIsActive(item)" icon="@tui.check" />
</button>
</tui-opt-group>
</tui-data-list>
</ng-template>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiDropdown, TuiIcon, TuiLink} from '@taiga-ui/core';
import {TuiChevron, TuiStep} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiIcon,
        TuiLink,
        TuiStep,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly items = [
        ['By interest', 'By genre', 'By release year', 'By subject'],
        ['Ascending', 'Descending'],
    ];

    protected primary = 'By genre';

    protected ascending = false;

    protected onClick(item: string): void {
        if (this.items[0]?.includes(item)) {
            this.primary = item;

            return;
        }

        this.ascending = item === this.items[1]?.[0];
    }

    protected itemIsActive(item: string): boolean {
        return (
            item === this.primary ||
            (this.ascending && item === this.items[1]?.[0]) ||
            (!this.ascending && item === this.items[1]?.[1])
        );
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: block;
    text-align: end;
}

.link {
    font-size: 1.0625rem;
}

.item {
    min-inline-size: 12.5rem;
}
```

#### Complex example

**Template:**
```html
<form [formGroup]="form">
<button appearance="outline-grayscale" tuiButton type="button" [tuiAppearanceMode]="length ? 'checked' : null" [tuiDropdown]="dropdown" [(tuiDropdownOpen)]="open" (keydown.delete)="form.reset()" > {{ text }} <button appearance="icon" size="xs" tabindex="-1" tuiChevron tuiIconButton type="reset" [iconStart]="length ? '@tui.x' : ''" (mousedown.zoneless.prevent)="(0)" > Reset </button>
</button>
<ng-template #dropdown>
<tui-data-list-wrapper formControlName="control" tuiMultiSelectGroup [items]="items" />
</ng-template>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiMultiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdown,
        TuiMultiSelectModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        control: new FormControl<string[]>([]),
    });

    protected open = false;

    protected readonly items = ['Drafts', 'In Progress', 'Completed'];

    protected get length(): number {
        return this.value.length || 0;
    }

    protected get text(): string {
        switch (this.length) {
            case 0:
                return 'Select';
            case 1:
                return this.value[0] ?? '';
            default:
                return `${this.length} selected`;
        }
    }

    private get value(): readonly string[] {
        return this.form.get('control')?.value || [];
    }
}
```

#### Custom positioning

**Template:**
```html
<button iconStart="@tui.arrow-up-right" size="s" topRight tuiDropdownOpen tuiIconButton type="button" [tuiDropdown]="content" > Show details </button>
<ng-template #content>
<div class="dropdown">
<h2 class="tui-text_h6">Custom positioning</h2> You can achieve this with <code>tuiAsPositionAccessor</code> helper and a custom directive </div>
</ng-template>
```

**TypeScript:**
```ts
import {Component, Directive} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {
    tuiAsPositionAccessor,
    TuiButton,
    TuiDropdown,
    TuiDropdownOpen,
    type TuiPoint,
    TuiPositionAccessor,
} from '@taiga-ui/core';

@Directive({
    standalone: true,
    selector: '[topRight]',
    providers: [tuiAsPositionAccessor(TopRightDirective)],
})
class TopRightDirective extends TuiPositionAccessor {
    private readonly el = tuiInjectElement();

    public readonly type = 'dropdown';

    public getPosition({height}: DOMRect): TuiPoint {
        const {right, top} = this.el.getBoundingClientRect();

        return [top - height, right];
    }
}

@Component({
    standalone: true,
    imports: [TopRightDirective, TuiButton, TuiDropdown, TuiDropdownOpen],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.dropdown {
    inline-size: 13rem;
    padding: 0 1rem 1rem;
    line-height: 2;
}
```

Do you like using Taiga UI?
