# Browser

- **Package**: `CDK`
- **Type**: components/utils

A set of tools for work with browser

### How to Use (Import)

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

### Usage Examples

#### Browser detection

**Template:**
```html
<label>
<b>Your browser is:</b>
</label>
<p>{{ aboutMyBrowser }}</p>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_USER_AGENT} from '@ng-web-apis/common';
import {tuiInjectElement, tuiIsEdge, tuiIsFirefox, tuiIsSafari} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly userAgent = inject(WA_USER_AGENT);
    private readonly el = tuiInjectElement();

    protected get aboutMyBrowser(): string {
        if (tuiIsEdge(this.userAgent)) {
            return 'Edge';
        }

        if (tuiIsFirefox(this.userAgent)) {
            return 'Okay, you have Firefox!';
        }

        if (tuiIsSafari(this.el)) {
            return 'Okay, you have Safari!';
        }

        return 'You have Chromium based browser, cool!';
    }
}
```

- Import into component and use:
