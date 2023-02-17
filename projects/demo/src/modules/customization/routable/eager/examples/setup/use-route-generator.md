```ts
import {TuiRoutableDialogModule} from '@taiga-ui/kit';

// ...

@NgModule({
  imports: [
    // ...
    RouterModule.forChild([
      {
        path: ``,
        component: MyPageComponent,
        children: [tuiGenerateDialogableRoute(MyDialogComponent, {path: `path/to/dialog`})],
      },
    ]),
  ],
  // ...
})
export class MyPageModule {}
```
