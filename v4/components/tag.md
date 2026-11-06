# Tag

- **Package**: `LEGACY`
- **Type**: components

Tags show information and they can be edited, deleted or clicked. This component is deprecated in favor of Chip component They work with both `tui-tag` and `a[tuiTag]/button[tuiTag]` selectors

### How to Use (Import)

```ts
import {TuiTagModule, tuiTagOptionsProvider} from '@taiga-ui/legacy';
// ...

@Component({
  standalone: true,
  imports: [TuiTagModule],
  providers: [
    tuiTagOptionsProvider({
      size: 'l',
      status: 'success',
    }),
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<tui-tag [value]="tag"></tui-tag>
<!--Use can use tag as link-->
<a
  tuiTag
  href="https://somesite.com"
  target="_blank"
  [value]="tag"
></a>
```

### Example

```html
<tui-tag [autoColor]="autoColor" [disabled]="disabled" [editable]="editable" [hoverable]="hoverable" [leftContent]="leftContent" [maxLength]="maxLength" [removable]="removable" [showLoader]="showLoader" [size]="size" [status]="status" [value]="value" (edited)="editTag($event); documentationPropertyModeEdited.emitEvent($event)" />
<ng-template #errorIcon>
<tui-icon icon="@tui.circle-alert" class="error-icon" />
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| autoColor | `boolean` | Autocolor for tag |
| disabled | `boolean` | Disabled state |
| editable | `boolean` | Tag can be edited |
| hoverable | `boolean` | Enable hovered state |
| leftContent | `PolymorpheusContent` | Content left to text |
| maxLength | `number | null` | Max length of tag (when editing) |
| removable | `boolean` | Tag can be removed |
| showLoader | `boolean` | Show loader |
| size | `TuiSizeL` | Size |
| status | `TuiStatus` | Changes color |
| value | `string` | String value of tag |
| edited | `string` | Emits tag change (if it was edited to space or empty string, it emits delete) |

### Usage Examples

#### sizes

**Template:**
```html
<tui-tag size="s" [value]="tag" />
<tui-tag size="m" class="tui-space_left-1" [value]="tag" />
<tui-tag size="l" class="tui-space_left-1" [value]="tag" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTagModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiTagModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected tag = 'Hello';
}
```

#### Statuses

**Template:**
```html
<div> Base colors <tui-tag class="tag" [hoverable]="true" [value]="tag" />
<tui-tag status="primary" class="tag" [hoverable]="true" [value]="tag" />
<div class="light-mode">
<tui-tag class="tag" [hoverable]="true" [value]="tag" />
</div>
<div class="dark-mode">
<tui-tag class="tag" [hoverable]="true" [value]="tag" />
</div>
</div>
<div class="tui-space_top-3"> Support color with CSS and <code>status="custom"</code>
<tui-tag *tuiRepeatTimes="let index of 20" status="custom" [class]="'tag support-' + (index + 1)" [hoverable]="true" [value]="tag" />
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiTagModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiRepeatTimes, TuiTagModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected tag = 'Hello!';
}
```

**LESS:**
```less
.tag {
    margin: 0.25rem;
}

.light-mode {
    display: inline-block;
    background-color: #454e58;
}

.dark-mode {
    display: inline-block;
    margin-inline-start: 0.25rem;
    background-color: #e5e7ea;
}

@iterations: 20;

.loop (@i) when (@i > 0) {
    .support-@{i} {
        background-color: ~'var(--tui-chart-categorical-@{i}, var(--tui-chart-categorical-0@{i}))';
    }
    .loop(@i - 1);
}
.loop (@iterations);
```

#### Custom

**Template:**
```html
<button size="l" status="custom" tuiTag type="button" value="Hey there" class="tag" [hoverable]="true" ></button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTagModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiTagModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.tag {
    .gradient(#c86dd7, #3023ae);

    color: #fff;
}
```

#### Removing and editing

**Template:**
```html
<tui-tag *ngFor="let tag of tags; let index = index" size="l" status="custom" class="tag" [editable]="true" [hoverable]="true" [removable]="true" [value]="tag" (edited)="handleTagEdited($event, index)" />
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTagModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [NgForOf, TuiTagModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected tags: readonly string[] = [
        'Taiga UI',
        'is an open-source library',
        'for awesome people',
    ];

    protected handleTagEdited(newCaption: string, currentIndex: number): void {
        this.tags = this.tags
            .map((caption, index) => (index === currentIndex ? newCaption : caption))
            .filter(Boolean);
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: flex;
    align-items: center;
}

.tag {
    .gradient(#2d96ff, #ff5011, 60deg);

    color: #fff;
    margin: 0.25rem;
}
```

#### Options

**Template:**
```html
<tui-tag [value]="tag" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTagModule, tuiTagOptionsProvider} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiTagModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiTagOptionsProvider({
            size: 'l',
            status: 'success',
        }),
    ],
})
export default class Example {
    protected tag = 'Hello';
}
```

#### Semantic tags

**Template:**
```html
<tui-tag size="l" value="Tag" />
<button size="l" tuiTag type="button" value="Button" class="tui-space_left-2" [hoverable]="true" ></button>
<a href="https://maskito.dev" rel="noreferrer noopener" size="l" target="_blank" tuiTag value="Link" class="tui-space_left-2" [hoverable]="true" ></a>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTagModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiTagModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
