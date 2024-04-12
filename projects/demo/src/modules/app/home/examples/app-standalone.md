```ts
import {Component} from '@angular/core';
import {TuiRootComponent} from '@taiga-ui/core';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    TuiRootComponent,
    // ...
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./my.component.scss', './my.component.less'],
})
export class AppComponent {}
```
