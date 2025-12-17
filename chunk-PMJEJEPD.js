import"./chunk-B4AJQJMI.js";var o=`\`\`\`ts
import {TuiDialogContext} from '@taiga-ui/legacy';
import {injectContext} from '@taiga-ui/polymorpheus';

// ...

export class Example {
  public readonly context = injectContext<TuiDialogContext<boolean>>();

  ok() {
    this.context.completeWith(true);
  }

  cancel() {
    this.context.completeWith(false);
  }
}
\`\`\`
`;export{o as default};
