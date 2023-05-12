```ts
import {TUI_PROMPT} from './prompt.component';

// ...
export class MyComponent {
  constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}

  prompt() {
    this.dialogs
      .open<boolean>(TUI_PROMPT, {
        label: 'Are you sure?',
        data: {
          content: 'This action has consequences',
          yes: 'Whatever...',
          no: 'Oops!',
        },
      })
      .subscribe(response => {
        // ...
      });
  }
}
```
