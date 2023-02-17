```ts
import {tuiGenerateDialogableRoute} from '@taiga-ui/kit';

// ...

@NgModule({
  imports: [
    // ...
    RouterModule.forChild([tuiGenerateDialogableRoute(MyDialogComponent)]),
  ],
  declarations: [MyDialogComponent],
  exports: [MyDialogComponent],
  // ...
})
export class MyDialogModule {}
```
