```ts
import {Component} from '@angular/core';
import {TuiRootModule} from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./my.component.scss', './my.component.less'],
  standalone: true,
  imports: [
    TuiRootModule,
    // ...
  ],
})
export class AppComponent {}
```
