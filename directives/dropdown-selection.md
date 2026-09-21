# DropdownSelection

- **Package**: `CORE`
- **Type**: directives

`DropdownSelection` shows dropdown with custom template on selected text

### Example

```html
<p tuiDropdownSelection [tuiDropdown]="dropdownContent" [tuiDropdownAlign]="dropdown.align" [tuiDropdownDirection]="dropdown.direction" [tuiDropdownMaxHeight]="dropdown.maxHeight" [tuiDropdownMinHeight]="dropdown.minHeight" [tuiDropdownOffset]="dropdown.offset" [tuiDropdownSelectionPosition]="position" [tuiDropdownSided]="dropdown.dropdownSided" [tuiDropdownSidedOffset]="dropdown.dropdownSidedOffset" > Select a text to <strong>see a dropdown</strong>
</p>
<ng-template #dropdownContent>
<div class="dropdown"> Here you can have any content <p>You can select a text inside a dropdown and it will not close a dropdown</p>
<button tuiButton type="button" > Button </button>
</div>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiDropdownSelection] | `TuiBooleanHandler<Range>` | and returns show/close dropdown |
| [tuiDropdownSelectionPosition] | `'selection' | 'word' | 'tag'` | position of dropdown near text selection |

### Usage Examples

#### Sample

**Template:**
```html
Dropdown will be shown text selection: <p tuiDropdown="&nbsp;&nbsp;Dropdown text&nbsp;&nbsp;" tuiDropdownSelection tuiDropdownSelectionPosition="selection" > Select a text to see dropdown </p>
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

#### Textarea

**Template:**
```html
<tui-textfield tuiDropdownLimitWidth="auto" tuiDropdownSelectionPosition="word" [tuiAppearanceFocus]="(driver() | async) || null" [tuiDropdownSelection]="predicate" >
<label tuiLabel>Type a message</label>
<textarea tuiTextarea [max]="4" [min]="4" [(ngModel)]="value" (keydown.stop.arrowDown)="onArrow($event, 0)" (keydown.stop.arrowUp)="onArrow($event, options().length - 1)" ></textarea>
<tui-data-list *tuiDropdown size="m" > @for (item of items | tuiMapper: filter : search.replace('@', ''); track item) { <button tuiOption type="button" (click)="onClick(item.login)" >
<div size="s" tuiAvatar > {{ item.name | tuiInitials }} <img alt="" [src]="item.avatar" />
</div> {{ item.name }} </button> } </tui-data-list>
</tui-textfield>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, ElementRef, viewChild, viewChildren} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {type TuiBooleanHandler, type TuiMapper, TuiMapperPipe} from '@taiga-ui/cdk';
import {
    TuiDataList,
    TuiDriver,
    TuiDropdown,
    tuiGetWordRange,
    TuiOption,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiInitialsPipe,
    TuiTextarea,
    TuiTextareaComponent,
} from '@taiga-ui/kit';

export interface User {
    readonly avatar: string;
    readonly login: string;
    readonly name: string;
}

@Component({
    imports: [
        AsyncPipe,
        FormsModule,
        TuiAvatar,
        TuiDataList,
        TuiDropdown,
        TuiInitialsPipe,
        TuiMapperPipe,
        TuiTextarea,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly textarea = viewChild.required<
        TuiTextareaComponent,
        ElementRef<HTMLTextAreaElement>
    >(TuiTextareaComponent, {read: ElementRef});

    protected readonly options = viewChildren(TuiOption, {read: ElementRef});
    protected readonly driver = viewChild(TuiDriver);
    protected value = 'Type @ to see a dropdown';

    protected readonly items = [
        {
            name: 'Alexander Inkin',
            avatar: assets`images/avatar.jpg`,
            login: 'a.inkin',
        },
        {
            name: 'Roman Sedov',
            avatar: '',
            login: 'r.sedov',
        },
    ];

    protected get search(): string {
        const el = this.textarea().nativeElement;

        return el.value.slice(el.value.indexOf('@'), el.selectionStart) || '';
    }

    protected readonly filter: TuiMapper<[readonly User[], string], readonly User[]> = (
        items,
        search,
    ) =>
        items.filter(
            ({name, login}) => login.startsWith(search) || name.startsWith(search),
        );

    protected predicate: TuiBooleanHandler<Range> = (range) =>
        String(tuiGetWordRange(range)).startsWith('@');

    protected onArrow(event: Event, index: number): void {
        const item = this.options()[index];

        if (!item) {
            return;
        }

        event.preventDefault();
        item.nativeElement.focus();
    }

    protected onClick(login: string): void {
        const search = this.search;
        const value = this.value.replace(search, login);
        const caret = value.indexOf(login) + login.length;

        this.value = value;
        this.textarea().nativeElement.focus();
        this.textarea().nativeElement.value = value;
        this.textarea().nativeElement.setSelectionRange(caret, caret);
    }
}
```
