```ts
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputPhoneInternationalComponent} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, TuiInputPhoneInternationalComponent],
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
