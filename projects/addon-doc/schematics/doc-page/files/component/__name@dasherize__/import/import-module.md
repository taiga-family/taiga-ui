```ts
import {<%= classify(name) %>} from 'packageName';

// ...

@NgModule({
    imports: [
        // ...
        < %= classify(name) % >
    ],
    // ...
})
export class MyModule {}
```
