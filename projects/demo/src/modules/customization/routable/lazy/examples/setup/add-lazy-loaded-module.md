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
        children: [
          {
            path: `path/to/dialog`,
            loadChildren: async () => (await import(`./my-dialog.module`)).MyDialogModule,
          },
        ],
      },
    ]),
  ],
  // ...
})
export class MyPageModule {}
```
