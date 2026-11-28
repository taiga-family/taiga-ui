import"./chunk-LQ6M4NCU.js";var e=`\`\`\`ts
import {Component, signal} from '@angular/core';
import {form, FormField, max, min} from '@angular/forms/signals';
import {TuiSlider} from '@taiga-ui/core';

@Component({
  selector: 'app',
  imports: [FormField, TuiSlider],
  template: \`
    <input
      [formField]="volume"
      tuiSlider
      type="range"
    />
  \`,
})
export class App {
  protected readonly volume = form(signal(40), (path) => {
    min(path, 10);
    max(path, 100);
  });
}
\`\`\`
`;export{e as default};
