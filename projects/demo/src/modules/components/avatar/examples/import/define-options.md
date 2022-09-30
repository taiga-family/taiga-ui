```ts
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit';
// ...

@NgModule({
  providers: [
    tuiAvatarOptionsProvider({
      size: 'l',
      autoColor: true,
      rounded: true,
    }),
  ],
})
export class MyModule {}
```
