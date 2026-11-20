```ts
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {form, FormField, max, min} from '@angular/forms/signals';
import {TuiSlider} from '@taiga-ui/core';

@Component({
  selector: 'slider-example',
  imports: [FormField, TuiSlider],
  templateUrl: './slider-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderExample {
  protected readonly volume = form(signal(40), (path) => {
    min(path, 10);
    max(path, 100);
  });
}
```
