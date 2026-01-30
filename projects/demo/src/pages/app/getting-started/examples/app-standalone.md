```ts
import {TuiRoot} from '@taiga-ui/core';
// ..

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    TuiRoot,
    // ...
  ],
  templateUrl: './app.component.html',
})
export class App {}
```
