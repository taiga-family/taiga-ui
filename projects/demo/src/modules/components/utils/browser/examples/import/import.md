```ts
import {tuiIsEdge} from '@taiga-ui/cdk';
import {USER_AGENT} from '@ng-web-apis/common';

// ...
export class Example {
  private readonly userAgent = inject(USER_AGENT);

  areThereProblems = tuiIsEdge(this.userAgent);
}
// ...
```
