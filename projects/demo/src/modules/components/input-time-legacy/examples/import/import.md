```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputTimeModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputTimeModule,
  ],
  providers: [
    {
      provide: TUI_INPUT_TIME_OPTIONS,
      useValue: {
        icon: '@tui.circle-check',
        mode: 'HH:MM:SS',
        itemSize: 's',
      },
    },
  ],
})
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl(new TuiTime(12, 30)),
  });
}
```
