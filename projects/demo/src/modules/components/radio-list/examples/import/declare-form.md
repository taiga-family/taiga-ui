```ts
import {FormControl, FormGroup} from '@angular/forms';

// ...

@Component({
  // ...
})
export class MyComponent {
  items = [
    {
      name: 'Simple',
      description: 'Something usual',
    },
    {
      name: 'Advanced',
      description: 'Something better',
    },
    {
      name: 'PRO',
      description: 'Something cool',
    },
  ];

  testForm = new FormGroup({
    tariff: new FormControl(this.items[0]),
  });
}
```
