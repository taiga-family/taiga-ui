import"./chunk-B4AJQJMI.js";var r=`\`\`\`ts
import {ReactiveFormsModule} from '@angular/forms';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TuiInputPhoneInternational} from '@taiga-ui/kit';

@Component({
  imports: [ReactiveFormsModule, TuiInputPhoneInternational],
  // ...
})
export class Example {
  readonly testForm = new FormGroup({
    testValue: new FormControl('+78005553535'),
  });

  readonly countries: ReadonlyArray<TuiCountryIsoCode> = ['RU', 'KZ', 'UA', 'BY'];
}
\`\`\`
`;export{r as default};
