```ts
import {ReactiveFormsModule} from '@angular/forms';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputPhoneInternational} from '@taiga-ui/experimental';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, TuiInputPhoneInternational],
  // ...
})
export class Example {
  readonly testForm = new FormGroup({
    testValue: new FormControl('+78005553535'),
  });

  readonly countries: ReadonlyArray<TuiCountryIsoCode> = ['RU', 'KZ', 'UA', 'BY'];
}
```
