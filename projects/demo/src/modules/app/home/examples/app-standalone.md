```ts
import {Component} from '@angular/core';
import {TuiRootModule} from '@taiga-ui/core';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    TuiRootModule,
    // ...
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./my.component.scss', './my.component.less'],
})
export class AppComponent {}
```
