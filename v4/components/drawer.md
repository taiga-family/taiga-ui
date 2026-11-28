# Drawer

- **Package**: `KIT`
- **Type**: components

### How to Use (Import)

```ts
import {TuiPopup} from '@taiga-ui/core';
import {TuiDrawer} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiPopup,
    TuiDrawer,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-drawer *tuiPopup="open()">
  <header>
    <h2 tuiHeader>
      <div tuiTitle>Header</div>
      <div tuiAccessories>
        <button
          tuiButton
          (click)="open.set(false)"
        >
          Close
        </button>
      </div>
    </h2>
    Content
  </header>
</tui-drawer>
```

### Example

```html
<button size="m" tuiButton type="button" (click)="open.set(true)" > Open </button>
<tui-drawer *tuiPopup="open()" [direction]="direction" [overlay]="overlay" (click.self)="onClose()" >
<header>
<h2 tuiHeader>
<div tuiTitle>Header</div>
<div tuiAccessories>
<button tuiButton type="button" (click)="onClose()" > Close </button>
</div>
</h2>
</header>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate perspiciatis exercitationem nemo velit aliquam voluptates non porro, vel, nihil laudantium sapiente ex omnis corrupti assumenda voluptatibus, architecto sequi saepe consectetur ratione qui. Beatae, sapiente explicabo velit facere repudiandae veniam et soluta quia qui expedita voluptate accusamus dolor adipisci. Illo quia sint consequatur unde nulla fuga eum officiis, impedit dolorem? Vel itaque temporibus nihil quia? Provident earum aperiam autem veritatis hic doloremque unde nesciunt accusantium nisi corrupti. </p>
<footer tuiHeader>
<div tuiTitle>Footer</div>
<button appearance="secondary" tuiButton type="button" (click)="onClose()" > Close </button>
</footer>
</tui-drawer>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [direction] | `TuiHorizontalDirection` | . |
| [overlay] | `boolean` | Show overlay under the drawer. |
| header | `string` | tag inside the drawer. |
| footer | `string` | tag inside the drawer. |

### Usage Examples

#### Full

**Template:**
```html
<button tuiButton type="button" (click)="open.set(!open())" > Toggle </button>
<tui-drawer *tuiPopup="open()">
<header>
<h2 tuiHeader>
<div tuiTitle>
<span tuiCaption>Caption・caption</span>
<span> Drawer title <tui-badge>Label</tui-badge>
</span>
<span tuiSubtitle> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used. </span>
</div>
<div tuiAccessories>
<button iconStart="@tui.search" tuiButton type="button" > More info </button>
<button iconStart="@tui.ellipsis" tuiIconButton type="button" > Actions </button>
<button appearance="icon" iconStart="@tui.x" tuiIconButton type="button" (click)="open.set(false)" > Close </button>
</div>
</h2>
<div>
<button tuiButton type="button" > Action 1 </button>
<a appearance="action" href="#" tuiButton > Action 2 </a>
<button tuiLink type="button" > Action 3 </button>
</div>
<nav tuiNavigationNav>
<tui-tabs>
<button tuiTab type="button" > Default view </button>
<button tuiTab type="button" > Details </button>
<button tuiTab type="button" > Followers </button>
</tui-tabs>
<hr />
<button size="xs" tuiButton type="button" > Primary </button>
<button appearance="secondary" iconStart="@tui.ellipsis" size="xs" tuiIconButton type="button" > More </button>
</nav>
</header>
<p *tuiRepeatTimes="let index of 15">Content</p>
<footer>
<button size="m" tuiButton type="button" [style.margin-inline-end]="'auto'" > Tertiary action </button>
<button size="m" tuiButton type="button" > Secondary action </button>
<button appearance="primary" size="m" tuiButton type="button" > Primary action </button>
</footer>
</tui-drawer>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiLink, TuiPopup, TuiTitle} from '@taiga-ui/core';
import {TuiBadge, TuiDrawer, TuiTabs} from '@taiga-ui/kit';
import {TuiHeader, TuiNavigation} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiBadge,
        TuiButton,
        TuiDrawer,
        TuiHeader,
        TuiLink,
        TuiNavigation,
        TuiPopup,
        TuiRepeatTimes,
        TuiTabs,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly open = signal(false);
}
```

#### Modal

**Template:**
```html
<button tuiButton type="button" (click)="open.set(true)" > Open </button>
<tui-drawer *tuiPopup="open()" direction="left" class="drawer" [overlay]="true" (click.self)="onClose()" >
<header class="header">
<h2 tuiHeader>
<div tuiTitle>Sticky header</div>
<div tuiAccessories>
<button tuiButton type="button" (click)="onClose()" > Close </button>
</div>
</h2>
</header>
<tui-textfield>
<label tuiLabel>Enter value</label>
<input tuiTextfield [formControl]="control" />
</tui-textfield>
<p *tuiRepeatTimes="let index of 30">Content</p>
</tui-drawer>
```

**TypeScript:**
```ts
import {Component, inject, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiDialogService,
    TuiPopup,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {TUI_CONFIRM, TuiDrawer} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';
import {filter} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiDrawer,
        TuiHeader,
        TuiPopup,
        TuiRepeatTimes,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly dialogs = inject(TuiDialogService);
    protected readonly control = new FormControl('Some value');
    protected readonly open = signal(false);

    public onClose(): void {
        if (this.control.pristine) {
            this.open.set(false);

            return;
        }

        this.dialogs
            .open(TUI_CONFIRM, {
                label: 'Cancel editing form?',
                size: 's',
                data: {
                    content: 'You have unsaved changes that will be lost',
                },
            })
            .pipe(filter(Boolean))
            .subscribe(() => {
                this.open.set(false);
                this.control.reset('Some value');
            });
    }
}
```

**LESS:**
```less
.drawer {
    top: 0;
    border-radius: 0;
    inline-size: 20rem;
}

.header {
    position: sticky;
}
```
