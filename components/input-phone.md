# InputPhone

- **Package**: `KIT`
- **Type**: components

`InputPhone` allows to input a phone number

### Example

```html
<ng-template>
<tui-textfield [filler]="filler" [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [invalid]="controlDoc.invalid" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceState]="appearance.state" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" >
<label tuiLabel>Type a phone number</label>
<input tuiInputPhone [formControl]="control" [mask]="phoneMask" [readonly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [mask] | `string` | Text mask. You can use # , - , brackets and spaces as a template symbol |
| [filler] | `string` | grayed out guiding text |

### Usage Examples

#### Example 1

If you support Safari < 18, we recommend to set `pattern` for correct work of browser autofill

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
import {WA_IS_IOS} from '@ng-web-apis/platform';
import {TuiInputPhone} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputPhone],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isIos = inject(WA_IS_IOS);

    public value = '+71234567890';

    protected get pattern(): string | null {
        return this.isIos ? '+[0-9-]{1,20}' : null;
    }
}
```

#### Example 2

By number and by name

**Template:**
```html
<tui-textfield>
<label tuiLabel>{{ user() || 'Phone number or name' }}</label>
<input #input mask="+1 (###)###-####" tuiInputPhone [allowText]="true" [ngModel]="value()" (input)="onInput(input.value)" (ngModelChange)="value.set($event)" /> @if (items | tuiFilterByInput: filter; as filtered) { @if (!user() && input.value && filtered.length) { <tui-data-list-wrapper *tuiDropdown [itemContent]="template" [items]="filtered" (itemClick)="selectUser($event)" /> } } </tui-textfield>
<ng-template #template let-user >
<div tuiCell>
<div tuiAvatar="@tui.user">
<img alt="" [src]="user.avatarUrl" />
</div>
<div tuiTitle> {{ user }} <span tuiSubtitle>{{ user.phone }}</span>
</div>
</div>
</ng-template>
<pre>value: {{ value() }}</pre>
```

**TypeScript:**
```ts
import {Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {
    TuiCell,
    type TuiFilterByInputOptions,
    TuiFilterByInputPipe,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiDataListWrapper, TuiInputPhone} from '@taiga-ui/kit';

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
    imports: [
        FormsModule,
        TuiAvatar,
        TuiCell,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiInputPhone,
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
        const [user] = this.filter(this.items, value);

        if (value === user?.toString() || value === user?.phone) {
            this.value.set(user.phone);
        }
    }

    protected readonly filter: TuiFilterByInputOptions<User>['filter'] = (
        items,
        search,
    ) =>
        items.filter(
            (item) =>
                (search.startsWith('+') &&
                    TUI_DEFAULT_MATCHER(item.phone, search.replaceAll(/\D/g, ''))) ||
                TUI_DEFAULT_MATCHER(item.toString(), search),
        );
}
```

#### Example 3

You can provide custom transformer in options to store value in different format in form control

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
import {TuiInputPhone, tuiInputPhoneOptionsProvider} from '@taiga-ui/kit';

const VALUE_TRANSFORMER: TuiValueTransformer<string, string> = {
    fromControlValue: (value) => `+${value}`,
    toControlValue: (value) => value.slice(1),
};

@Component({
    imports: [FormsModule, TuiInputPhone],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiInputPhoneOptionsProvider({valueTransformer: VALUE_TRANSFORMER})],
})
export default class Example {
    public value = '';
}
```

#### Example 4

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
import {TuiFlagPipe, TuiInputPhone, tuiInputPhoneOptionsProvider} from '@taiga-ui/kit';

const VALUE_TRANSFORMER: TuiValueTransformer<string, string> = {
    fromControlValue: (value) => `+${value}`,
    toControlValue: (value) => value.slice(1),
};

@Component({
    imports: [FormsModule, TuiFlagPipe, TuiInputPhone],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiInputPhoneOptionsProvider({valueTransformer: VALUE_TRANSFORMER})],
})
export default class Example {
    public value = '';
}
```
