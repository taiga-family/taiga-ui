```ts
import {tuiIsEdge} from '@taiga-ui/cdk';
import {WA_USER_AGENT} from '@ng-web-apis/common';

// ...
export class Example {
  private readonly userAgent = inject(WA_USER_AGENT);

  areThereProblems = tuiIsEdge(this.userAgent);
}
// ...
```
