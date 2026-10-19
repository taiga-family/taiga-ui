# InputPhoneLegacy

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use new version of InputPhone instead!

### How to Use (Import)

```ts
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputPhoneModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    ReactiveFormsModule,
    TuiInputPhoneModule,
  ],
  // ...
})
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl('+78005553535'),
  });
}
```

### How to Use (Template)

```html
<form [formGroup]="testForm">
  <tui-input-phone formControlName="testValue">Type phone number</tui-input-phone>
</form>
```

### Example

```html
<ng-template>
<tui-input-phone [countryCode]="countryCode" [focusable]="focusable" [formControl]="control" [phoneMaskAfterCountryCode]="phoneMaskAfterCountryCode" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [pseudoInvalid]="pseudoInvalid" [readOnly]="readOnly" [style.text-align]="textAlign" [tuiDropdownAlign]="dropdownAlign" [tuiDropdownDirection]="dropdownDirection" [tuiDropdownLimitWidth]="dropdownLimitWidth" [tuiDropdownMaxHeight]="dropdownMaxHeight" [tuiDropdownMinHeight]="dropdownMinHeight" [tuiDropdownOffset]="dropdownOffset" [tuiDropdownOpen]="!!(dropdownOpen | async)" [tuiHintAppearance]="hintAppearance" [tuiHintContent]="hintContent" [tuiHintDirection]="hintDirection" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldCustomContent]="customContent" [tuiTextfieldFiller]="filler" [tuiTextfieldIconLeft]="iconStart" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldPostfix]="postfix" [tuiTextfieldPrefix]="prefix" [tuiTextfieldSize]="size" (tuiDropdownOpenChange)="dropdownOpen.next($event)" > Type a phone number </tui-input-phone>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | Disabled state (use formControl.disable() ) |
| countryCode | `string` | Country code |
| phoneMaskAfterCountryCode | `string` | Text mask after country code. You can use # , - and spaces as a template symbol |
| search | `string` | Textfield value to subscribe on input or setting it from the outside |

### Usage Examples

#### Basic

**Template:**
```html
<form [formGroup]="testForm">
<tui-input-phone formControlName="testValue"> Type a phone number <input autocomplete="tel" tuiTextfieldLegacy />
</tui-input-phone>
<pre class="tui-space_bottom-3">Form value: {{ testForm.value | json }}</pre>
</form>
<button size="m" tuiButton type="button" (click)="setValue()" > Set +79926775676 </button>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiInputPhoneModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [JsonPipe, ReactiveFormsModule, TuiButton, TuiInputPhoneModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue: new FormControl('+77777777777', Validators.required),
    });

    protected setValue(): void {
        this.testForm.get('testValue')!.setValue('+79926775676');
    }
}
```

#### With length validator

**Template:**
```html
<tui-input-phone [formControl]="control">Type phone number</tui-input-phone>
<pre>Form value: {{ control.value | json }}</pre>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputPhoneModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [JsonPipe, ReactiveFormsModule, TuiInputPhoneModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('', Validators.minLength(12));
}
```

#### With autocomplete

**Template:**
```html
<tui-input-phone *tuiLet="items$ | async as items" [allowText]="true" [tuiTextfieldCustomContent]="avatar" [(ngModel)]="value" (searchChange)="onSearch($event)" > {{ placeholder$ | async }} <ng-container *ngIf="items?.length">
<tui-data-list *tuiDataList>
<button *ngFor="let item of items" tuiOption type="button" [disabled]="item.disabled" [value]="item.phone" (click)="onClick(item)" >
<tui-avatar size="s" class="tui-space_right-3" [src]="item.avatarUrl" > {{ item.firstName }} </tui-avatar>
<span class="user">
<span>{{ item.firstName }} {{ item.lastName }}</span>
<span class="phone">{{ item.phone }}</span>
</span>
</button>
</tui-data-list>
</ng-container>
</tui-input-phone>
<ng-template #avatar>
<tui-avatar *ngIf="user$ | async as user" size="s" [src]="user.avatarUrl" > {{ user.firstName }} </tui-avatar>
</ng-template>
<p>Value: {{ value }}</p>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TUI_DEFAULT_MATCHER, TuiLet, tuiPure} from '@taiga-ui/cdk';
import {TuiDataList} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiInputPhoneModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {
    combineLatest,
    map,
    merge,
    type Observable,
    of,
    share,
    startWith,
    Subject,
    switchMap,
    tap,
} from 'rxjs';

class User {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly phone: string,
        public readonly avatarUrl: string | null = null,
        public readonly disabled = false,
    ) {}

    public toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const DATA: readonly User[] = [
    new User(
        'Roman',
        'Sedov',
        '+75678901234',
        'https://avatars.githubusercontent.com/u/10106368',
    ),
    new User('Alex', 'Inkin', '+75678901234', assets`/images/avatar.jpg`),
];

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgForOf,
        NgIf,
        TuiAvatar,
        TuiDataList,
        TuiInputPhoneModule,
        TuiLet,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly search$ = new Subject<string>();

    private readonly selected$ = new Subject<User>();

    protected value = '';

    protected readonly user$ = merge(
        this.selected$,
        this.search$.pipe(
            switchMap((value) =>
                this.request(value).pipe(
                    map((response) =>
                        this.isFullMatch(response, value) ? response[0] : null,
                    ),
                ),
            ),
        ),
    ).pipe(
        tap((user) => {
            if (user) {
                this.value = user.phone;
            }
        }),
    );

    protected readonly items$ = this.search$.pipe(
        startWith(''),
        switchMap((value) =>
            this.request(value).pipe(
                map((response) => (this.isFullMatch(response, value) ? [] : response)),
            ),
        ),
    );

    protected readonly placeholder$ = combineLatest([this.user$, this.search$]).pipe(
        map(([user, search]) => user || this.getPlaceholder(search)),
        startWith('Phone number or name'),
    );

    protected onSearch(search: string): void {
        this.search$.next(search);
    }

    protected onClick(user: User): void {
        this.selected$.next(user);
    }

    // Request imitation
    @tuiPure
    private request(query: string): Observable<readonly User[]> {
        return of(
            DATA.filter(
                (item) =>
                    TUI_DEFAULT_MATCHER(item, query) ||
                    TUI_DEFAULT_MATCHER(item.phone, query),
            ),
        ).pipe(share());
    }

    private getPlaceholder(search: string): string {
        if (!search) {
            return 'Phone number or name';
        }

        if (search.startsWith('+')) {
            return 'Phone number';
        }

        return 'Name';
    }

    private isFullMatch(response: readonly User[], value: string): boolean {
        return (
            response.length === 1 &&
            (String(response[0]) === value || response[0]?.phone === value)
        );
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.user {
    margin-inline-end: auto;
}

.phone {
    display: block;
    font: var(--tui-font-text-s);
    color: var(--tui-text-tertiary);
}
```

Custom align content by text-align
