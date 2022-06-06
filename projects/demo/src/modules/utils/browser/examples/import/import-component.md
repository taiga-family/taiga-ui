```ts
import {isIE} from '@taiga-ui/cdk';
import {USER_AGENT} from '@ng-web-apis/common';

// ...
export class MyComponent {
  areThereProblems = isIE(this.userAgent);

  constructor(@Inject(USER_AGENT) private readonly userAgent: string) {}
}
// ...
```
