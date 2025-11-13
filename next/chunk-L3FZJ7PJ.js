import"./chunk-42JZD6NG.js";var e=`\`\`\`ts
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {TuiDialogService} from '@taiga-ui/legacy';
import {inject} from '@angular/core';

// ...

export class Example {
  private readonly dialogs = inject(TuiDialogService);

  // ...

  open() {
    this.dialogs.open('Hello!').subscribe();
  }
}
\`\`\`
`;export{e as default};
