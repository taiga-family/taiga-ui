# Form

- **Package**: `LAYOUT`
- **Type**: components

Using
`ElasticContainer`
to animate dynamic content

Using multiple different components inside a big form.

Using multiple forms in several steps. See
`Slides`
for animating similar scenario.

### Usage Examples

#### Basic

Using `ElasticContainer` to animate dynamic content

**Template:**
```html
<form appearance="floating" tuiCardLarge tuiForm="m" [formGroup]="form" [style.max-width.rem]="32" >
<header tuiHeader>
<h2 tuiTitle> Registration form <span tuiSubtitle>Tell us about yourself</span>
</h2>
<span tuiAccessories>
<tui-segmented>
<label>
<input formControlName="basic" type="radio" [value]="true" /> Brief </label>
<label>
<input formControlName="basic" type="radio" [value]="false" /> Detailed </label>
</tui-segmented>
</span>
</header>
<div appearance="warning" tuiNotification >
<h3 tuiTitle> Authenticity required <span tuiSubtitle>Please be honest and use your real data</span>
</h3>
</div>
<tui-textfield>
<label tuiLabel>Name</label>
<input formControlName="name" placeholder="John Wick" tuiInput />
</tui-textfield>
<tui-error formControlName="name" />
<tui-elastic-container> @if (!form.controls.basic.value) { <tui-textfield tuiAnimated>
<label tuiLabel>Email</label>
<input formControlName="email" placeholder="john@wick.com" tuiInput type="email" />
</tui-textfield>
<label tuiAnimated tuiLabel >
<input formControlName="subscribe" tuiSwitch type="checkbox" /> Subscribe for newsletter <tui-icon tuiTooltip="We will not send you spam, pinky promise!" />
</label> } </tui-elastic-container>
<footer>
<button appearance="secondary" tuiButton type="button" > Cancel </button>
<button tuiButton type="submit" > Submit </button>
</footer>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimated} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiError,
    TuiIcon,
    TuiInput,
    TuiNotification,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiSegmented, TuiSwitch, TuiTooltip} from '@taiga-ui/kit';
import {TuiCardLarge, TuiElasticContainer, TuiForm, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiAnimated,
        TuiButton,
        TuiCardLarge,
        TuiElasticContainer,
        TuiError,
        TuiForm,
        TuiHeader,
        TuiIcon,
        TuiInput,
        TuiNotification,
        TuiSegmented,
        TuiSwitch,
        TuiTitle,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl(''),
        subscribe: new FormControl(false),
        basic: new FormControl(true),
    });
}
```

#### Expansive

Using multiple different components inside a big form.

**Template:**
```html
<form tuiForm [formGroup]="form" [style.max-width.rem]="35" >
<header tuiHeader>
<h3 tuiTitle> A header <span tuiSubtitle>Form with large controls</span>
</h3>
</header>
<tui-textfield>
<label tuiLabel>Textfield</label>
<input formControlName="nameValue" placeholder="Field placeholder" tuiInput />
<tui-icon tuiTooltip="A tooltip" />
</tui-textfield>
<tui-error formControlName="nameValue" />
<tui-textfield>
<label tuiLabel>Input date</label>
<input formControlName="periodValue" placeholder="Placeholder" tuiInputDate />
<tui-calendar *tuiDropdown />
</tui-textfield>
<tui-error formControlName="periodValue" />
<fieldset>
<div class="stack">
<tui-textfield>
<label tuiLabel>Input password</label>
<input formControlName="passwordValue" tuiInput type="password" />
<tui-icon tuiPassword />
</tui-textfield>
<tui-error formControlName="passwordValue" />
</div>
<div class="stack">
<tui-textfield>
<label tuiLabel>Input money</label>
<input formControlName="moneyValue" tuiInputNumber [postfix]="' RUB' | tuiCurrency" />
</tui-textfield>
<tui-error formControlName="moneyValue" />
</div>
</fieldset>
<tui-textfield tuiTextfieldSize="l">
<input formControlName="quantityValue" tuiInputSlider [max]="3000000" [min]="50000" />
<input tuiSlider type="range" />
</tui-textfield>
<div class="ticks-labels">
<span>from 50 000 ₽</span>
<span>to 3 000 000 ₽</span>
</div>
<fieldset>
<div class="stack">
<tui-textfield tuiChevron [tuiTextfieldCleaner]="false" >
<label tuiLabel>Choose a person</label>
<input formControlName="personValue" tuiSelect />
<tui-data-list-wrapper *tuiDropdown [items]="persons" />
</tui-textfield>
<tui-error formControlName="personValue" />
</div>
<div class="stack">
<tui-textfield>
<label tuiLabel>Input phone</label>
<input autocomplete="tel" formControlName="phoneValue" mask="+7 ### ###-##-##" tuiInputPhone />
</tui-textfield>
<tui-error formControlName="phoneValue" />
</div>
</fieldset>
<div tuiGroup [collapsed]="true" >
<label tuiBlock> Option 1 <input formControlName="radioValue" tuiRadio type="radio" value="with-commission" [style.margin-inline-start]="'auto'" />
</label>
<label tuiBlock> Option 2 <input formControlName="radioValue" tuiRadio type="radio" value="without-commission" [style.margin-inline-start]="'auto'" />
</label>
</div>
<fieldset>
<label tuiLabel>
<input formControlName="osnoValue" tuiCheckbox type="checkbox" /> First option </label>
<label tuiLabel>
<input formControlName="usnValue" tuiCheckbox type="checkbox" /> Easter Egg </label>
</fieldset>
<fieldset>
<label tuiLabel>
<input formControlName="eshnValue" tuiCheckbox type="checkbox" /> Boring option </label>
<label tuiLabel>
<input formControlName="envdValue" tuiCheckbox type="checkbox" /> Interesting option </label>
</fieldset>
<footer>
<button tuiButton type="submit" > Submit </button>
<button appearance="flat" tuiButton type="button" > Cancel </button>
</footer>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiCurrency, TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiCheckbox,
    TuiError,
    TuiGroup,
    TuiIcon,
    TuiInput,
    TuiLabel,
    TuiRadio,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiBlock,
    TuiChevron,
    TuiDataListWrapper,
    TuiInputDate,
    TuiInputNumber,
    TuiInputPhone,
    TuiInputSlider,
    TuiPassword,
    TuiSelect,
    TuiTooltip,
} from '@taiga-ui/kit';
import {TuiForm, TuiHeader} from '@taiga-ui/layout';

class User {
    constructor(
        protected readonly firstName: string,
        protected readonly lastName: string,
    ) {}

    protected toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Account {
    constructor(
        protected readonly id: string,
        protected readonly name: string,
        protected readonly amount: number,
        protected readonly currency: TuiCurrency,
        protected readonly cardSvg: string,
    ) {}
}

@Component({
    imports: [
        ReactiveFormsModule,
        TuiBlock,
        TuiButton,
        TuiCheckbox,
        TuiChevron,
        TuiCurrencyPipe,
        TuiDataListWrapper,
        TuiError,
        TuiForm,
        TuiGroup,
        TuiHeader,
        TuiIcon,
        TuiInput,
        TuiInputDate,
        TuiInputNumber,
        TuiInputPhone,
        TuiInputSlider,
        TuiLabel,
        TuiPassword,
        TuiRadio,
        TuiSelect,
        TuiTitle,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {
    protected readonly svgIcons = {
        common: 'https://ng-web-apis.github.io/dist/assets/images/common.svg',
        universal: 'https://ng-web-apis.github.io/dist/assets/images/universal.svg',
        intersection:
            'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg',
        mutation:
            'https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg',
    };

    protected persons = [new User('Roman', 'Sedov'), new User('Alex', 'Inkin')];

    protected accounts = [
        new Account('1', 'Common', 24876.55, TuiCurrency.Ruble, this.svgIcons.common),
        new Account('2', 'Universal', 335, TuiCurrency.Dollar, this.svgIcons.universal),
        new Account(
            '3',
            'Intersection',
            10000,
            TuiCurrency.Euro,
            this.svgIcons.intersection,
        ),
        new Account('4', 'Mutation', 100, TuiCurrency.Pound, this.svgIcons.mutation),
    ];

    protected form = new FormGroup({
        nameValue: new FormControl('', Validators.required),
        textValue: new FormControl('', Validators.required),
        passwordValue: new FormControl('', Validators.required),
        phoneValue: new FormControl('', Validators.required),
        moneyValue: new FormControl('100', Validators.required),
        periodValue: new FormControl(new TuiDay(2017, 2, 15), Validators.required),
        timeValue: new FormControl(new TuiTime(12, 30), Validators.required),
        personValue: new FormControl(this.persons[0]),
        quantityValue: new FormControl(50_000),
        radioValue: new FormControl('with-commission'),
        accountWherefrom: new FormControl<Account | null>(null),
        accountWhere: new FormControl<Account | null>(null),
        checkboxValue: new FormControl(false),
        osnoValue: new FormControl(true),
        usnValue: new FormControl(false),
        eshnValue: new FormControl(false),
        envdValue: new FormControl(false),
    });
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.stack {
    display: flex;
    gap: inherit;
    flex-direction: column;
}

.ticks-labels {
    .tui-slider-ticks-labels();

    margin-block-start: -1rem;
}
```

#### Grouped

Using multiple forms in several steps. See `Slides` for animating similar scenario.

**Template:**
```html
<tui-segmented size="m" [style.margin-block-end.rem]="2" [style.max-width]="'fit-content'" [(activeItemIndex)]="segmentedIndex" >
<button type="button">Stepper</button>
<button type="button">Tabs</button>
</tui-segmented> @switch (segmentedIndex) { @case (0) { <tui-stepper [activeItemIndex]="index()">
<button tuiStep [disabled]="index() === 1" > Common </button>
<button tuiStep [disabled]="index() === 0" > Network access </button>
</tui-stepper> } @case (1) { <tui-tabs size="m" underline="var(--tui-background-accent-opposite-pressed)" [activeItemIndex]="index()" (activeItemIndexChange)="index.set($event)" >
<button tuiTab>Common</button>
<button tuiTab>Network access</button>
</tui-tabs> } } @switch (index()) { @case (0) { <form appearance="floating" tuiCardLarge tuiForm="m" [cleaner]="false" [formGroup]="form" >
<header tuiHeader>
<h2 tuiTitle> Registration form <span tuiSubtitle>Tell us about yourself</span>
</h2>
</header>
<tui-textfield>
<label tuiLabel>Name</label>
<input formControlName="name" placeholder="John Wick" tuiInput />
</tui-textfield>
<fieldset>
<legend>Optional features</legend>
<label tuiLabel>
<input checked tuiCheckbox type="checkbox" /> Newsletter </label>
<label tuiLabel>
<input tuiCheckbox type="checkbox" /> Sell your soul </label>
</fieldset>
</form>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Cancel </button>
<button size="m" tuiButton type="submit" (click)="next()" > Next </button>
</footer> } @case (1) { <form appearance="floating" tuiCardLarge tuiForm="m" [formGroup]="form" >
<header tuiHeader>
<h2 tuiTitle> Configuration network <span tuiSubtitle>Fill network settings</span>
</h2>
</header>
<tui-textfield>
<label tuiLabel>IP-address</label>
<input formControlName="ip" placeholder="192.0.2.1" tuiInput />
</tui-textfield>
</form>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" (click)="previous()" > Back </button>
<button size="m" tuiButton type="submit" > Save </button>
</footer> } }
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiCheckbox, TuiInput, TuiTitle} from '@taiga-ui/core';
import {TuiSegmented, TuiStepper, TuiTabs} from '@taiga-ui/kit';
import {TuiCardLarge, TuiForm, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiCardLarge,
        TuiCheckbox,
        TuiForm,
        TuiHeader,
        TuiInput,
        TuiSegmented,
        TuiStepper,
        TuiTabs,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {
    protected readonly index = signal(0);
    protected segmentedIndex = 0;

    protected readonly form = new FormGroup({
        name: new FormControl('', Validators.required),
        ip: new FormControl('', Validators.required),
    });

    protected previous(): void {
        this.index.update((index) => index - 1);
    }

    protected next(): void {
        this.index.update((index) => index + 1);
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    display: block;
    max-inline-size: 32rem;
}

form {
    margin: 1.25rem 0;
}

footer {
    display: flex;
    justify-content: space-between;
}
```

Size sets DI options, therefore it only works for static values like
`tuiForm="m"`
. If you need dynamic binding for the size, you would have to set it for buttons, segmented control and header
manually as well.
