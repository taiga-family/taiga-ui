```ts
import {FormControl, FormGroup} from '@angular/forms';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

// ...

@Component({
  // ...
})
export class MyComponent {
  readonly testForm = new FormGroup({
    testValue: new FormControl('+78005553535'),
  });

  readonly countries: ReadonlyArray<TuiCountryIsoCode> = [
    TuiCountryIsoCode.RU,
    TuiCountryIsoCode.KZ,
    TuiCountryIsoCode.UA,
    TuiCountryIsoCode.BY,
  ];
}
```
