```ts
import {TUI_CONFIRM} from '@taiga-ui/kit';

// ...
export class MyComponent {
  private readonly dialogs = inject(TuiDialogService);

  confirm() {
    this.dialogs
      .open<boolean>(TUI_CONFIRM, {
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
