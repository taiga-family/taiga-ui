# DropdownHover

- **Package**: `CORE`
- **Type**: directives

`DropdownHover` shows dropdown with custom template upon hover

### Example

```html
<p tuiDropdownHover [tuiDropdown]="dropdownContent" [tuiDropdownAlign]="dropdown.align" [tuiDropdownDirection]="dropdown.direction" [tuiDropdownHideDelay]="hideDelay" [tuiDropdownLimitWidth]="dropdown.limitWidth" [tuiDropdownMaxHeight]="dropdown.maxHeight" [tuiDropdownMinHeight]="dropdown.minHeight" [tuiDropdownOffset]="dropdown.offset" [tuiDropdownShowDelay]="showDelay" [tuiDropdownSided]="dropdown.dropdownSided" [tuiDropdownSidedOffset]="dropdown.dropdownSidedOffset" > Hover pointer over <strong>to see a dropdown</strong>
</p>
<ng-template #dropdownContent>
<div [style.padding.rem]="1"> Here you can have any content <p>You can select a text inside a dropdown and it will not close a dropdown</p>
<button tuiButton type="button" > Button </button>
</div>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiDropdown] | `PolymorpheusContent` | content of the dropdown |
| [tuiDropdownShowDelay] | `number` | show delay for dropdown appearance after hover |
| [tuiDropdownHideDelay] | `number` | hide delay for dropdown appearance after hover |

### Usage Examples

#### Basic

**Template:**
```html
<span tuiDropdown="Great Scott!" tuiDropdownHover > This is heavy! </span>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdown} from '@taiga-ui/core';

@Component({
    imports: [TuiDropdown],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### With DropdownOpen

**Template:**
```html
<tui-tabs [(activeItemIndex)]="index">
<button tuiTab type="button" > Just a tab </button>
<button tuiChevron tuiDropdownHover tuiTab type="button" [tuiDropdown]="content" [(tuiDropdownOpen)]="open" (tui-tab-activate.stop)="(0)" > Hoverable/Clickable <ng-template #content>
<tui-data-list (click)="onClick()">
<button tuiOption type="button" > Option 1 </button>
<button tuiOption type="button" > Option 2 </button>
<button tuiOption type="button" > Option 3 </button>
</tui-data-list>
</ng-template>
</button>
<button tuiTab type="button" > Another tab </button>
<button iconStart="@tui.settings" title="Open settings" tuiDropdownHover tuiTab type="button" [tuiDropdown]="settings" [(tuiDropdownOpen)]="openSettings" (tui-tab-activate.stop)="(0)" ></button>
<ng-template #settings>
<div class="settings" [formGroup]="form" >
<input formControlName="option" tuiSwitch type="checkbox" /> Turn option </div>
</ng-template>
</tui-tabs>
<p>Current state: {{ open ? 'open' : 'closed' }}</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiChevron, TuiSwitch, TuiTabs} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiSwitch,
        TuiTabs,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({option: new FormControl(false)});
    protected open = false;
    protected openSettings = false;
    protected index = 0;

    protected onClick(): void {
        this.open = false;
        this.index = 1;
    }
}
```

**LESS:**
```less
.settings {
    margin: 1rem;
}
```

#### Nested

**Template:**
```html
<button tuiButton tuiDropdownHover type="button" [tuiDropdown]="dropdown" [(tuiDropdownOpen)]="open" > Dropdown hover </button>
<ng-template #dropdown>
<div [style.padding]="'0 1rem'">
<tui-textfield tuiChevron class="margin" [tuiTextfieldCleaner]="false" >
<label tuiLabel>Nested select</label>
<input tuiSelect [formControl]="selected" />
<tui-data-list-wrapper *tuiDropdown [items]="selectItems" />
</tui-textfield>
<div>
<button size="s" tuiButton tuiDropdownAuto tuiDropdownHover type="button" [tuiDropdown]="content" > Nested dropdown hover </button>
</div>
</div>
<tui-data-list> @for (item of items; track item) { <button tuiOption type="button" > {{ item }} </button> } </tui-data-list>
</ng-template>
<ng-template #content>
<p class="tui-space_horizontal-2">Nested content!</p>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiDropdown, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDataListWrapper,
        TuiDropdown,
        TuiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['Edit', 'Download', 'Rename', 'Delete'];
    protected readonly selectItems = ['Item 1', 'Item 2'];
    protected open = false;
    protected selected = new FormControl<string | null>(null);
}
```

#### With custom host

**Template:**
```html
<div tuiDropdown="Dropdown content" tuiDropdownAuto tuiDropdownHover tuiDropdownLimitWidth="fixed" tuiGroup >
<button tuiButton type="button" > Won't open here </button>
<button #tuiDropdownHost tuiButton type="button" > Will open here </button>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDropdown, TuiGroup} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiDropdown, TuiGroup],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Mobile

**Template:**
```html
<button appearance="outline-grayscale" iconStart="@tui.ellipsis" tuiDropdownHover tuiDropdownSheet="Contact Us" tuiIconButton type="button" [tuiDropdown]="dropdown" > More </button>
<ng-template #dropdown>
<tui-data-list>
<a href="https://github.com/taiga-family/taiga-ui" iconStart="assets/icons/github.svg" rel="noreferrer" target="_blank" tuiOption > GitHub </a>
<a href="https://t.me/taiga_ui" iconStart="assets/icons/telegram.svg" rel="noreferrer" target="_blank" tuiOption > Telegram </a>
<a href="https://discord.gg/zrB2EdJjEy" iconStart="assets/icons/discord.svg" rel="noreferrer" target="_blank" tuiOption > Discord </a>
</tui-data-list>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownSheet} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiDataList, TuiDropdown, TuiDropdownSheet],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
