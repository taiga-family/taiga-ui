```ts
import {Component} from '@angular/core';
import {TuiRoot} from '@taiga-ui/core';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    TuiRoot,
    // ...
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./my.component.scss', './my.component.less'],
})
export class AppComponent {}
```
