# DropdownSelection

- **Package**: `CORE`
- **Type**: directives

`DropdownSelection` shows dropdown with custom template on selected text

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
  tuiDropdownSelection
  [tuiDropdown]="content"
>
  Host element
</div>

<ng-template #content>Dropdown content</ng-template>
```

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
| [tuiDropdownSelectionPosition] | `'selection' | 'word' | 'tag'` | Position of dropdown near text selection |

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
    standalone: true,
    imports: [TuiDropdown],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### textarea

**Template:**
```html
<tui-textfield tuiDropdownLimitWidth="auto" tuiDropdownSelectionPosition="word" [tuiDropdownSelection]="predicate" >
<label tuiLabel>Type a message</label>
<textarea tuiTextarea [focused]="(driver | async) || null" [max]="4" [min]="4" [(ngModel)]="value" (keydown.stop.arrowDown)="onArrow($event, 'first')" (keydown.stop.arrowUp)="onArrow($event, 'last')" ></textarea>
<tui-data-list *tuiTextfieldDropdown>
<button *ngFor="let item of items | tuiMapper: filter : search.replace('@', '')" new tuiOption type="button" (click)="onClick(item.login)" >
<tui-avatar size="s" [src]="item.avatar" > {{ item.name | tuiInitials }} </tui-avatar> {{ item.name }} </button>
</tui-data-list>
</tui-textfield>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
import {
    Component,
    ElementRef,
    type QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {
    EMPTY_QUERY,
    type TuiBooleanHandler,
    type TuiMapper,
    TuiMapperPipe,
} from '@taiga-ui/cdk';
import {
    TuiDataList,
    TuiDriver,
    TuiDropdown,
    tuiGetWordRange,
    TuiInitialsPipe,
    TuiOptionNew,
    TuiTextfield,
} from '@taiga-ui/core';
import {TuiAvatar, TuiTextarea} from '@taiga-ui/kit';
import {TuiTextareaModule} from '@taiga-ui/legacy';
import {type Observable} from 'rxjs';

export interface User {
    readonly avatar: string;
    readonly login: string;
    readonly name: string;
}

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgForOf,
        TuiAvatar,
        TuiDataList,
        TuiDropdown,
        TuiInitialsPipe,
        TuiMapperPipe,
        TuiTextarea,
        TuiTextareaModule,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    @ViewChildren(TuiOptionNew, {read: ElementRef})
    private readonly options: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @ViewChild(TuiTextarea, {read: ElementRef})
    private readonly textarea?: ElementRef<HTMLTextAreaElement>;

    @ViewChild(TuiDriver)
    protected readonly driver?: Observable<boolean>;

    protected value = 'Type @ to see a dropdown';

    protected readonly items = [
        {
            name: 'Alexander Inkin',
            avatar: assets`/images/avatar.jpg`,
            login: 'a.inkin',
        },
        {
            name: 'Roman Sedov',
            avatar: '',
            login: 'r.sedov',
        },
    ];

    protected get search(): string {
        const el = this.textarea?.nativeElement;

        return el?.value.slice(el.value.indexOf('@'), el.selectionStart) || '';
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

    protected onArrow(event: Event, which: 'first' | 'last'): void {
        const item = this.options[which];

        if (!item) {
            return;
        }

        event.preventDefault();
        item.nativeElement.focus();
    }

    protected onClick(login: string): void {
        if (!this.textarea) {
            return;
        }

        const search = this.search;
        const value = this.value.replace(search, login);
        const caret = value.indexOf(login) + login.length;

        this.value = value;
        this.textarea.nativeElement.focus();
        this.textarea.nativeElement.value = value;
        this.textarea.nativeElement.setSelectionRange(caret, caret);
    }
}
```
