# Viewport

- **Package**: `CORE`
- **Type**: customization

`TUI_VIEWPORT` - define the area relative to which the position constraints will be calculated. Also you can use `tuiAsViewport` helper instead of token.

```ts
import {Component} from '@angular/core';
import {TUI_VIEWPORT} from '@taiga-ui/core';

@Component({
  // ...
  providers: [
    {
      provide: TUI_VIEWPORT,
      useFactory: () => {
        const win = inject(WA_WINDOW);

        return {
          type: `viewport`,
          getClientRect() {
            return {
              top: 0,
              left: 0,
              right: win.innerWidth,
              bottom: win.innerHeight,
              width: win.innerWidth,
              height: win.innerHeight,
            };
          },
        };
      },
    },
  ],
})
export class Example {}
```

### Usage Examples

#### Dropdown

**Template:**
```html
<div class="dropdowns">
<div tuiDropdown="1" tuiDropdownHover class="t1" ></div>
<div tuiDropdown="3" tuiDropdownHover class="t2" ></div>
<div tuiDropdown="2" tuiDropdownHover class="t3" ></div>
<div tuiDropdown="4" tuiDropdownHover class="t4" ></div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {tuiAsViewport, TuiDropdown, TuiRectAccessor} from '@taiga-ui/core';

@Component({
    imports: [TuiDropdown],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiAsViewport(Example)],
})
export default class Example extends TuiRectAccessor {
    private readonly el = tuiInjectElement();

    public readonly type = 'viewport';

    public getClientRect(): DOMRect {
        return this.el.getBoundingClientRect();
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.dropdowns {
    position: relative;
    display: block;
    block-size: 18.75rem;
    inline-size: 50%;
    resize: both;
    overflow: hidden;
    outline: 0.125rem dotted var(--tui-border-normal);

    @media @tui-tablet {
        inline-size: 100%;
    }
}

.t1,
.t2,
.t3,
.t4 {
    position: absolute;
    inline-size: 3.125rem;
    block-size: 3.125rem;
    background: var(--tui-background-accent-1);
}

.t1 {
    inset-block-start: 0.625rem;
    inset-inline-start: 0.625rem;
}

.t2 {
    inset-block-start: 0.625rem;
    inset-inline-end: 0.625rem;
}

.t3 {
    inset-inline-end: 0.625rem;
    inset-block-end: 0.625rem;
}

.t4 {
    inset-inline-start: 0.625rem;
    inset-block-end: 0.625rem;
}

.t-centered-axis-xy {
    .center-all();
}

.t-direction {
    inline-size: max-content;
    margin-block-end: 1rem;
}
```

#### Dropdown and custom portal

**Template:**
```html
<portal-host class="dropdowns">
<div tuiDropdownHover class="t1" [tuiDropdown]="dropdown" ></div>
<div tuiDropdownHover class="t2" [tuiDropdown]="dropdown" ></div>
<div tuiDropdownHover class="t3" [tuiDropdown]="dropdown" ></div>
<div tuiDropdownHover class="t4" [tuiDropdown]="dropdown" ></div>
</portal-host>
<ng-template #dropdown>
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
</ng-template>
```

**TypeScript:**
```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    tuiInjectElement,
    TuiPortals,
    TuiPortalService,
    tuiProvide,
    TuiVCR,
} from '@taiga-ui/cdk';
import {
    tuiAsViewport,
    TuiDropdown,
    TuiPopupService,
    type TuiRectAccessor,
} from '@taiga-ui/core';

@Component({
    selector: 'portal-host',
    imports: [TuiVCR],
    template: `
        <ng-content />
        <ng-container tuiVCR />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TuiPortalService, TuiPopupService), tuiAsViewport(PortalHost)],
})
class PortalHost extends TuiPortals implements TuiRectAccessor {
    private readonly el = tuiInjectElement();

    public readonly type = 'viewport';

    public getClientRect(): DOMRect {
        return this.el.getBoundingClientRect();
    }
}

@Component({
    imports: [PortalHost, TuiDropdown],
    templateUrl: './index.html',
    styleUrl: '../1/index.less',
    encapsulation,
    changeDetection,
    providers: [TuiPopupService],
})
export default class Example {}
```

#### Hint

**Template:**
```html
<tui-segmented class="t-direction"> @for (direction of directions; track direction) { <label>
<input name="radio" type="radio" [value]="direction" [(ngModel)]="selected" /> {{ direction }} </label> } </tui-segmented>
<portal-host class="dropdowns">
<button tuiButton type="button" class="t-centered-axis-xy" [tuiHint]="template" [tuiHintDirection]="selected" [tuiHintManual]="hintShown" (click)="toggleHint()" > Hint </button>
</portal-host>
<ng-template #template> Use <a appearance="action-grayscale" tuiLink tuiTheme="dark" class="link" > Hint </a>
</ng-template>
```

**TypeScript:**
```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {
    tuiAsViewport,
    TuiButton,
    TuiHint,
    type TuiHintDirection,
    TuiLink,
    type TuiRectAccessor,
} from '@taiga-ui/core';
import {TuiSegmented} from '@taiga-ui/kit';

@Component({
    selector: 'portal-host',
    template: '<ng-content />',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsViewport(PortalHost)],
})
class PortalHost implements TuiRectAccessor {
    private readonly el = tuiInjectElement();

    public readonly type = 'viewport';

    public getClientRect(): DOMRect {
        return this.el.getBoundingClientRect();
    }
}

@Component({
    imports: [FormsModule, PortalHost, TuiButton, TuiHint, TuiLink, TuiSegmented],
    templateUrl: './index.html',
    styleUrl: '../1/index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected hintShown = false;
    protected directions: TuiHintDirection[] = ['top', 'start', 'end', 'bottom'];
    protected selected = this.directions[0]!;

    protected toggleHint(): void {
        this.hintShown = !this.hintShown;
    }
}
```
