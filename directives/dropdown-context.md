# DropdownContext

- **Package**: `CORE`
- **Type**: directives

`DropdownContext` allows to show custom right click context dropdown. To close dropdown: Use Esc Make mouse left/right click outside of dropdown content Manually toggle `tuiDropdown` to `false` using template reference variable (see first example)

### Example

```html
<p tuiDropdownContext [tuiDropdown]="dropdownContent" [tuiDropdownAlign]="dropdown.align" [tuiDropdownDirection]="dropdown.direction" [tuiDropdownMaxHeight]="dropdown.maxHeight" [tuiDropdownMinHeight]="dropdown.minHeight" [tuiDropdownOffset]="dropdown.offset" [tuiDropdownSided]="dropdown.dropdownSided" [tuiDropdownSidedOffset]="dropdown.dropdownSidedOffset" > Right click on me to <strong>see a dropdown</strong>
<ng-template #dropdownContent>Hello there!</ng-template>
</p>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiDropdown] | `PolymorpheusContent` | content of the dropdown |

### Usage Examples

#### Basic

**Template:**
```html
<p> Make right click on this icon ->
<tui-icon #dropdown="tuiDropdown" icon="@tui.settings" tuiDropdownContext class="icon" [tuiDropdown]="content" >
<ng-template #content>
<span class="text">Nothing special</span>
<button appearance="icon" iconStart="@tui.x" size="xs" tuiIconButton type="button" class="button" (click)="dropdown.toggle(false)" > Close </button>
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
    imports: [TuiButton, TuiDropdown, TuiIcon],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.text {
    display: inline-block;
    margin: 0.75rem 1rem;
    vertical-align: middle;
}

.button {
    margin-inline: -0.5rem 0.5rem;
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
<thead>
<tr> @for (column of tableColumns; track column) { <th tuiTh [class.actions]="column === 'actions'" > {{ column }} </th> } </tr>
</thead>
<tbody tuiTbody> @for (rowInfo of tableData; track rowInfo.character) { <tr #contextDropdown="tuiDropdown" tuiDropdownContext [tuiDropdown]="contextMenu" (contextmenu)="closeActionMenu()" >
<td tuiTd> {{ rowInfo.character }} </td>
<td tuiTd> {{ rowInfo.actor }} </td>
<td tuiTd class="actions" >
<button appearance="flat" iconEnd="@tui.chevron-right" size="s" tuiButton tuiDropdownAlign="end" tuiDropdownSided type="button" [tuiAppearanceState]="isActionMenuOpen(rowInfo.character) ? 'active' : null" [tuiDropdown]="actionMenu" [tuiDropdownOpen]="isActionMenuOpen(rowInfo.character)" (tuiDropdownOpenChange)=" onActionMenuOpenChange($event, rowInfo.character); $event && contextDropdown.toggle(false) " > More </button>
<ng-template #actionMenu let-close >
<tui-data-list>
<tui-opt-group> @for (item of actionItems; track item) { <button tuiOption type="button" (click)="printToConsole(item, rowInfo); close()" > {{ item }} </button> } </tui-opt-group>
<hr />
<tui-opt-group>
<button tuiOption type="button" (click)="close()" > Nevermind </button>
</tui-opt-group>
</tui-data-list>
</ng-template>
</td>
<ng-template #contextMenu let-close >
<tui-data-list role="menu" tuiDataListDropdownManager class="context-menu" > @for (item of menuItems; track item.title) { <button tuiOption type="button" [iconEnd]="item.iconName" (click)="printToConsole(item.title, rowInfo); close()" > {{ item.title }} </button> } <button iconEnd="@tui.chevron-right" tuiDropdownAlign="end" tuiDropdownSided tuiOption type="button" [tuiDropdown]="nestedMenu" > More </button>
</tui-data-list>
<ng-template #nestedMenu>
<tui-data-list> @for (option of moreOptions; track option) { <button tuiOption type="button" > {{ option }} </button> } </tui-data-list>
</ng-template>
</ng-template>
</tr> } </tbody>
</table>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiButton, TuiDataList, TuiDialogService, TuiDropdown} from '@taiga-ui/core';
import {TuiDataListDropdownManager} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiDataList, TuiDataListDropdownManager, TuiDropdown, TuiTable],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected openActionMenu: string | null = null;
    protected readonly actionItems = ['Edit', 'Download', 'Rename', 'Delete'];

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

    protected readonly tableColumns = ['character', 'actor', 'actions'];
    protected readonly moreOptions = ['Option 1', 'Option 2', 'Option 3'];

    protected isActionMenuOpen(rowId: string): boolean {
        return this.openActionMenu === rowId;
    }

    protected onActionMenuOpenChange(open: boolean, rowId: string): void {
        this.openActionMenu = open ? rowId : null;
    }

    protected closeActionMenu(): void {
        this.openActionMenu = null;
    }

    protected printToConsole(action: string, contextInfo: unknown): void {
        this.dialogs.open(`[${action}]: ${JSON.stringify(contextInfo)}`).subscribe();
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.context-menu {
    inline-size: 8rem;
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
    font: var(--tui-typography-body-m) !important;
}

.actions {
    inline-size: 1%;
    text-align: end;
    white-space: nowrap;
}
```

#### Report mistake form

**Template:**
```html
<p tuiDropdownContext [tuiDropdown]="reportForm" > Some text with a mistake. Right-click it. </p>
<p tuiDropdownContext [tuiDropdown]="reportForm" > Another text </p>
<ng-template #reportForm let-close >
<form class="container" [formGroup]="form" >
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
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiTextarea} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiButton, TuiDropdown, TuiTextarea],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected form = new FormGroup({reportText: new FormControl('Misspell HERE!')});

    protected report(): void {
        console.info(this.form.value);
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
