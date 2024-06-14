```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputPasswordModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
  ],
  providers: [
    {
      provide: TUI_INPUT_PASSWORD_OPTIONS,
      useValue: {
        ...TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
        icons: {
          hide: '@tui.eye-off',
          show: '@tui.eye',
        },
      },
    },
  ],
})
export class MyComponent {
  testForm = new FormGroup({
    testValue: new FormControl(''),
  });
}
```
