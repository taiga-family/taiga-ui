# DropdownContext

- **Package**: `CORE`
- **Type**: directives

`DropdownContext` allows to show custom right click context dropdown. To close dropdown: Use Esc Make mouse left/right click outside of dropdown content Manually toggle `tuiDropdown` to `false` using template reference variable (see first example)

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
<div
  tuiDropdownContext
  [tuiDropdown]="content"
>
  Host element
</div>

<ng-template
  #content
  let-close
>
  Dropdown content
  <button (click)="close()"></button>
</ng-template>
```

### Example

```html
<p tuiDropdownContext [tuiDropdown]="dropdownContent" [tuiDropdownAlign]="dropdown.align" [tuiDropdownDirection]="dropdown.direction" [tuiDropdownMaxHeight]="dropdown.maxHeight" [tuiDropdownMinHeight]="dropdown.minHeight" [tuiDropdownOffset]="dropdown.offset" [tuiDropdownSided]="dropdown.dropdownSided" [tuiDropdownSidedOffset]="dropdown.dropdownSidedOffset" > Right click on me to <strong>see a dropdown</strong>
<ng-template #dropdownContent>Hello there!</ng-template>
</p>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiDropdown] | `PolymorpheusContent` | Content |

### Usage Examples

#### Basic

**Template:**
```html
<p> Make right click on this icon ->
<tui-icon #dropdown="tuiDropdown" icon="@tui.settings" tuiDropdownContext class="icon" [tuiDropdown]="content" >
<ng-template #content>
<span class="text">Nothing special</span>
<button appearance="icon" iconStart="@tui.x" size="xs" tuiIconButton type="button" (click)="dropdown.toggle(false)" > Close </button>
</ng-template>
</tui-icon>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDropdown, TuiIcon} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton, TuiDropdown, TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.text {
    display: inline-block;
    margin: 0.4rem 1rem;
}

.icon {
    cursor: context-menu;
}
```

#### Context menu

**Template:**
```html
<p>Right-click any table row.</p>
<table tuiTable>
<thead tuiTHead>
<tr tuiThGroup>
<th *ngFor="let column of tableColumns" tuiTh > {{ column }} </th>
</tr>
</thead>
<tbody tuiTbody>
<tr *ngFor="let rowInfo of tableData" #dropdown="tuiDropdown" tuiDropdownContext [tuiDropdown]="contextMenu" >
<td *ngFor="let value of getObjectValues(rowInfo)" tuiTd > {{ value }} </td>
<ng-template #contextMenu>
<tui-data-list role="menu" tuiDataListDropdownManager class="context-menu" >
<button *ngFor="let item of menuItems" tuiOption type="button" (click)="printToConsole(item.title, rowInfo); dropdown.toggle(false)" > {{ item.title }} <tui-icon class="icon" [icon]="item.iconName" />
</button>
<button iconEnd="@tui.chevron-right" tuiDropdownAlign="right" tuiDropdownSided tuiOption type="button" [tuiDropdown]="nestedMenu" > More </button>
</tui-data-list>
<ng-template #nestedMenu>
<tui-data-list>
<button *ngFor="let option of moreOptions" tuiOption type="button" > {{ option }} </button>
</tui-data-list>
</ng-template>
</ng-template>
</tr>
</tbody>
</table>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiDataList, TuiDialogService, TuiDropdown, TuiIcon} from '@taiga-ui/core';
import {TuiDataListDropdownManager} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        TuiDataList,
        TuiDataListDropdownManager,
        TuiDropdown,
        TuiIcon,
        TuiTable,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected readonly menuItems = [
        {title: 'View', iconName: '@tui.eye'},
        {title: 'Copy', iconName: '@tui.copy'},
        {title: 'Delete', iconName: '@tui.trash'},
        {title: 'Move', iconName: '@tui.folder'},
    ] as const;

    protected readonly tableData = [
        {character: 'Ross Geller', actor: 'David Schwimmer'},
        {character: 'Chandler Bing', actor: 'Matthew Perry'},
        {character: 'Joey Tribbiani', actor: 'Matt LeBlanc'},
        {character: 'Phoebe Buffay', actor: 'Lisa Kudrow'},
        {character: 'Monica Geller', actor: 'Courteney Cox'},
        {character: 'Rachel Green', actor: 'Jennifer Aniston'},
    ] as const;

    protected readonly tableColumns = Object.keys(this.tableData[0]);

    protected readonly moreOptions = ['Option 1', 'Option 2', 'Option 3'];

    protected getObjectValues = (obj: Record<string, unknown>): unknown[] =>
        Object.values(obj);

    protected printToConsole(action: string, contextInfo: unknown): void {
        this.dialogs.open(`[${action}]: ${JSON.stringify(contextInfo)}`).subscribe();
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.context-menu {
    inline-size: 8rem;
}

.icon {
    border-width: 0.25rem;
}

[tuiTable] {
    inline-size: 100%;
}

[tuiTh],
[tuiTd] {
    border-inline-start: none;
    border-inline-end: none;
}

[tuiTh] {
    border-block-start: none;
}

[tuiTd] {
    font: var(--tui-font-text-m) !important;
}
```

#### Report mistake form

**Template:**
```html
<p tuiDropdownContext [tuiDropdown]="reportForm" > Some text with a mistake. Right-click it. </p>
<p tuiDropdownContext [tuiDropdown]="reportForm" > Another text </p>
<ng-template #reportForm let-close >
<form class="container" [formGroup]="testForm" >
<tui-textfield>
<label tuiLabel>Have you found a mistake?</label>
<textarea formControlName="reportText" tuiTextarea [max]="3" [min]="3" ></textarea>
</tui-textfield>
<button tuiButton type="button" class="button" (click)="report(); close()" > SEND IT </button>
</form>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDropdown, TuiTextfield} from '@taiga-ui/core';
import {TuiTextarea} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiButton, TuiDropdown, TuiTextarea, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        reportText: new FormControl('Misspell HERE!'),
    });

    protected report(): void {
        console.info(this.testForm.value);
    }
}
```

**LESS:**
```less
.container {
    display: flex;
    inline-size: 20rem;
    margin: 1rem;
    flex-direction: column;
}

.button {
    margin: 1rem auto 0;
}
```
