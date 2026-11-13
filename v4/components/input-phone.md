# InputPhone

- **Package**: `KIT`
- **Type**: components

`InputPhone` allows to input a phone number

### How to Use (Import)

```ts
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputPhone} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    TuiTextfield,
    TuiInputPhone,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-textfield>
  <input
    tuiInputPhone
    [ngModel]="value"
  />
</tui-textfield>
```

### Example

```html
<ng-template>
<tui-textfield [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" >
<label tuiLabel>Type a phone number</label>
<input tuiInputPhone [formControl]="control" [invalid]="controlDoc.invalid" [mask]="phoneMask" [readOnly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [mask] | `string` | Text mask. You can use # , - , brackets and spaces as a template symbol |

### Usage Examples

#### Basic

**Template:**
```html
<tui-textfield>
<label tuiLabel>Type a phone number</label>
<input autocomplete="tel" mask="+7 ### ###-##-##" tuiInputPhone [attr.pattern]="pattern" [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputPhone} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputPhone, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isIos = inject(TUI_IS_IOS);

    public value = '+71234567890';

    protected get pattern(): string | null {
        return this.isIos ? '+[0-9-]{1,20}' : null;
    }
}
```

#### With autocomplete

**Template:**
```html
<tui-textfield>
<label tuiLabel>{{ user() || 'Phone number or name' }}</label>
<input #input mask="+1 (###)###-####" tuiInputPhone [allowText]="true" [ngModel]="value()" (input)="onInput(input.value)" (ngModelChange)="value.set($event)" />
<ng-container *ngIf="items | tuiFilterByInput: matcher as filtered">
<ng-container *ngIf="!user() && input.value && filtered.length">
<tui-data-list-wrapper *tuiTextfieldDropdown new [itemContent]="template" [items]="filtered" (itemClick)="selectUser($event)" />
</ng-container>
</ng-container>
</tui-textfield>
<ng-template #template let-user >
<div tuiCell>
<tui-avatar size="s" [src]="user.avatarUrl" />
<div tuiTitle> {{ user }} <span tuiSubtitle>{{ user.phone }}</span>
</div>
</div>
</ng-template>
<pre>value: {{ value() }}</pre>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER, type TuiMatcher} from '@taiga-ui/cdk';
import {TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiInputPhone,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

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
        'Alex',
        'Inkin',
        '+11234567890',
        'https://avatars.githubusercontent.com/u/11832552',
    ),
    new User(
        'Vladimir',
        'Potekhin',
        '+13213213213',
        'https://avatars.githubusercontent.com/u/46284632',
    ),
    new User(
        'Nikita',
        'Barsukov',
        '+18005553535',
        'https://avatars.githubusercontent.com/u/35179038',
    ),
    new User(
        'Roman',
        'Sedov',
        '+18003000600',
        'https://avatars.githubusercontent.com/u/10106368',
    ),
    new User(
        'Yulia',
        'Tsareva',
        '+13332221110',
        'https://avatars.githubusercontent.com/u/8158578',
    ),
];

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiAvatar,
        TuiCell,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiInputPhone,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    public readonly value = signal('');
    public readonly items = DATA;
    public readonly user = computed(() =>
        this.items.find(({phone}) => phone === this.value()),
    );

    protected selectUser(user: User): void {
        this.value.set(user.phone);
    }

    protected onInput(value: string): void {
        const user = this.items.find((user) => this.matcher(user, value));

        if (value === user?.toString() || value === user?.phone) {
            this.value.set(user.phone);
        }
    }

    protected readonly matcher: TuiMatcher<[User, string]> = (item, search) =>
        (search.startsWith('+') &&
            TUI_DEFAULT_MATCHER(item.phone, search.replaceAll(/\D/g, ''))) ||
        TUI_DEFAULT_MATCHER(item.toString(), search);

    private isFullMatch(response: readonly User[], value: string): boolean {
        return (
            response.length === 1 &&
            (String(response[0]) === value || response[0]?.phone === value)
        );
    }
}
```

#### Value transformer

**Template:**
```html
<tui-textfield>
<label tuiLabel>Type a phone number</label>
<input tuiInputPhone [(ngModel)]="value" />
</tui-textfield>
<p>{{ value }}</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiValueTransformer} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputPhone, tuiInputPhoneOptionsProvider} from '@taiga-ui/kit';

const VALUE_TRANSFORMER: TuiValueTransformer<string, string> = {
    fromControlValue: (value) => `+${value}`,
    toControlValue: (value) => value.slice(1),
};

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputPhone, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputPhoneOptionsProvider({
            valueTransformer: VALUE_TRANSFORMER,
        }),
    ],
})
export default class Example {
    public value = '';
}
```

#### With flag

**Template:**
```html
<tui-textfield [tuiTextfieldCleaner]="false">
<label tuiLabel>Type a phone number</label>
<input tuiInputPhone [(ngModel)]="value" />
<img alt="Flag of the United States" width="28" [src]="'US' | tuiFlag" [style.border-radius.%]="50" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiValueTransformer} from '@taiga-ui/cdk';
import {TuiFlagPipe, TuiTextfield} from '@taiga-ui/core';
import {TuiInputPhone, tuiInputPhoneOptionsProvider} from '@taiga-ui/kit';

const VALUE_TRANSFORMER: TuiValueTransformer<string, string> = {
    fromControlValue: (value) => `+${value}`,
    toControlValue: (value) => value.slice(1),
};

@Component({
    standalone: true,
    imports: [FormsModule, TuiFlagPipe, TuiInputPhone, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputPhoneOptionsProvider({
            valueTransformer: VALUE_TRANSFORMER,
        }),
    ],
})
export default class Example {
    public value = '';
}
```

If you support Safari
