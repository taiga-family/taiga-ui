import"./chunk-HU6DUUP4.js";var s=`\`\`\`ts
import {TUI_CONFIRM} from '@taiga-ui/kit';

// ...
export class Example {
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
      .subscribe((response) => {
        // ...
      });
  }
}
\`\`\`
`;export{s as default};
