# InputPhoneInternational

- **Package**: `KIT`
- **Type**: components

Allows to input phone number in international format `InputPhoneInternational` is based on @maskito/phone and libphonenumber-js libraries. libphonenumber is an ultimate phone number formatting and parsing library developed by Google . This library collects the latest phone number rules from ITU documents, user bug reports, telecom company home pages and government telecommunication authorities. It is always up-to-date (for more than 10 years), and releases are published almost every month. It means that `InputPhoneInternational` has the robust source of truth!

### Example

```html
<ng-template>
<tui-textfield [invalid]="control.invalid" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceState]="appearance.state" [tuiDropdownAlign]="dropdown.align" [tuiDropdownAppearance]="dropdown.appearance" [tuiDropdownDirection]="dropdown.direction" [tuiDropdownLimitWidth]="dropdown.limitWidth" [tuiDropdownMaxHeight]="dropdown.maxHeight" [tuiDropdownMinHeight]="dropdown.minHeight" [tuiDropdownOffset]="dropdown.offset" [tuiTextfieldCleaner]="textfield.cleaner" [tuiTextfieldSize]="textfield.size" > @if (textfield.size !== 's') { <label tuiLabel>Type a phone number</label> } <input tuiInputPhoneInternational [countries]="countries" [countrySearch]="countrySearch" [formControl]="formControl" [placeholder]="textfield.size === 's' ? 'Type a phone number' : ''" [readonly]="control.readonly" [tuiDisabled]="control.disabled" [(countryIsoCode)]="countryIsoCode" />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [countries] | `ReadonlyArray<TuiCountryIsoCode>` | array of ISO-codes of countries to choose |
| [countrySearch] | `boolean` | enable filter input for countries |
| [(countryIsoCode)] | `boolean` | ISO-code of selected country |

### Usage Examples

#### Choose metadata

The first step is to choose the size of `metadata Google uses the word "metadata" to refer to all information about phone numbering in a particular country - what the country code, international and national dialling prefixes are, what carrier codes are operational, which phone numbers are possible or valid for a particular country, how to optimally format them, which prefixes represent a particular geographical area, etc.` . The complete list of all phone rules is huge, so `libphonenumber-js` provides different "metadata" sets to provides a way to optimize bundle size by choosing between `max` , `min` (default value) and `mobile` sets. Read in-depth description about every set .

**Template:**
```html
<tui-textfield>
<input tuiInputPhoneInternational [countries]="countries" [(countryIsoCode)]="countryIsoCode" [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n';
import {
    TuiInputPhoneInternational,
    tuiInputPhoneInternationalOptionsProvider,
} from '@taiga-ui/kit';
import {defer} from 'rxjs';

@Component({
    imports: [FormsModule, TuiInputPhoneInternational],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        /**
         * You can choose: lazily load metadata or include it in your bundle.
         * Lazy loading:
         */
        tuiInputPhoneInternationalOptionsProvider({
            metadata: defer(async () =>
                import('libphonenumber-js/max/metadata').then((m) => m.default),
            ),
        }),
        /**
         * Eager loading:
         * ```ts
         * import metadata from 'libphonenumber-js/mobile/metadata';
         * import {of} from 'rxjs';
         * // [...]
         * tuiInputPhoneInternationalOptionsProvider({
         *     metadata: of(metadata),
         * }),
         * ```
         */
    ],
})
export default class Example {
    protected readonly countries: readonly TuiCountryIsoCode[] = [
        'IN',
        'CN',
        'US',
        'ID',
        'PK',
    ];

    protected countryIsoCode: TuiCountryIsoCode = 'US';
    protected value = '+12125552368';
}
```

#### Choose any countries

Parameter `countries` allows you to choose which countries user can select from the dropdown. You can even pick all possible countries by built-in utility `getCountries` from `libphonenumber-js` . Note: Importing utilities directly from the root of `libphonenumber-js` automatically includes the default (min) metadata in your bundle. To optimize bundle size and ensure consistency, it is recommended to import from specific entry points like `libphonenumber-js/min` , `libphonenumber-js/max` , or `libphonenumber-js/mobile` . Alternatively, you can use `libphonenumber-js/core` and provide the required metadata explicitly to the utility functions. Use `TuiSortCountriesPipe` to sort countries according to your current language.

**Template:**
```html
<tui-textfield>
<label tuiLabel>Phone number</label>
<input tuiInputPhoneInternational [countries]="countries | tuiSortCountries" [countrySearch]="true" [(countryIsoCode)]="countryIsoCode" [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n';
import {
    TuiInputPhoneInternational,
    tuiInputPhoneInternationalOptionsProvider,
    TuiSortCountriesPipe,
} from '@taiga-ui/kit';
import {getCountries} from 'libphonenumber-js/max';
import {defer} from 'rxjs';

@Component({
    imports: [FormsModule, TuiInputPhoneInternational, TuiSortCountriesPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputPhoneInternationalOptionsProvider({
            metadata: defer(async () =>
                import('libphonenumber-js/max/metadata').then((m) => m.default),
            ),
        }),
    ],
})
export default class Example {
    protected readonly countries = getCountries();
    protected countryIsoCode: TuiCountryIsoCode = 'CN';
    protected value = '';
}
```

#### Mobile dropdown

You can enable mobile specific dropdown design on mobile devices by adding `TuiDropdownMobile` directive.

**Template:**
```html
<tui-textfield tuiDropdownSheet="Select country">
<label tuiLabel>Phone number</label>
<input tuiInputPhoneInternational [countries]="countries | tuiSortCountries" [countrySearch]="true" [(countryIsoCode)]="countryIsoCode" [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownSheet} from '@taiga-ui/addon-mobile';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n';
import {
    TuiInputPhoneInternational,
    tuiInputPhoneInternationalOptionsProvider,
    TuiSortCountriesPipe,
} from '@taiga-ui/kit';
import {getCountries} from 'libphonenumber-js/max';
import {defer} from 'rxjs';

@Component({
    imports: [
        FormsModule,
        TuiDropdownSheet,
        TuiInputPhoneInternational,
        TuiSortCountriesPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputPhoneInternationalOptionsProvider({
            metadata: defer(async () =>
                import('libphonenumber-js/max/metadata').then((m) => m.default),
            ),
        }),
    ],
})
export default class Example {
    protected readonly countries = getCountries();
    protected countryIsoCode: TuiCountryIsoCode = 'CN';
    protected value = '';
}
```

#### Customize with icons

You can put static Icon or even interactive Tooltip at the right side of the textfield.

**Template:**
```html
<tui-textfield [style.inline-size.rem]="19">
<label tuiLabel>Phone number</label>
<input tuiInputPhoneInternational [countries]="countries" [(countryIsoCode)]="countryIsoCode" [(ngModel)]="value" />
<tui-icon appearance="negative" tuiHintAppearance="error" tuiHintDirection="top" tuiTooltip="I am a hint" />
<tui-icon icon="@tui.phone" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n';
import {
    TuiInputPhoneInternational,
    tuiInputPhoneInternationalOptionsProvider,
    TuiTooltip,
} from '@taiga-ui/kit';
import {defer} from 'rxjs';

@Component({
    imports: [FormsModule, TuiIcon, TuiInputPhoneInternational, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputPhoneInternationalOptionsProvider({
            metadata: defer(async () =>
                import('libphonenumber-js/max/metadata').then((m) => m.default),
            ),
        }),
    ],
})
export default class Example {
    protected readonly countries: readonly TuiCountryIsoCode[] = [
        'TR',
        'IR',
        'IQ',
        'SA',
        'YE',
    ];

    protected countryIsoCode: TuiCountryIsoCode = 'TR';
    protected value = '';
}
```

#### Customize separator

Using `tuiInputPhoneInternationalOptionsProvider` you can provide custom separator for input instead of the default `-` .

**Template:**
```html
<tui-textfield>
<label tuiLabel>Type your number</label>
<input tuiInputPhoneInternational [countries]="countries" [(countryIsoCode)]="countryIsoCode" [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n';
import {
    TuiInputPhoneInternational,
    tuiInputPhoneInternationalOptionsProvider,
} from '@taiga-ui/kit';
import {getCountries} from 'libphonenumber-js/max';
import {defer} from 'rxjs';

@Component({
    imports: [FormsModule, TuiInputPhoneInternational],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputPhoneInternationalOptionsProvider({
            metadata: defer(async () =>
                import('libphonenumber-js/max/metadata').then((m) => m.default),
            ),
            separator: ' ',
        }),
    ],
})
export default class Example {
    protected readonly countries = getCountries();
    protected countryIsoCode: TuiCountryIsoCode = 'FR';
    protected value = '';
}
```

#### Use phone format helpers

`InputPhoneInternational` internally uses Maskito to format phone number. Don't hesitate to use it too to manually format any phone number.

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoPipe} from '@maskito/angular';
import {maskitoTransform} from '@maskito/core';
import {maskitoPhone} from '@maskito/phone';
import metadata from 'libphonenumber-js/max/metadata';

@Component({
    imports: [MaskitoPipe],
    template: 'Phone: {{ rawValue | maskito: mask }}',
    encapsulation,
    changeDetection,
    host: {'(click)': 'showUtilityPower()'},
})
export default class Example {
    protected rawValue = '12125552368';

    protected readonly mask = maskitoPhone({
        metadata,
        countryIsoCode: 'US',
    });

    protected showUtilityPower(): void {
        console.info(maskitoTransform(this.rawValue, this.mask));
    }
}
```
