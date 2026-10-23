# Portals

You can easily create your custom portals by extending our abstract classes and put your own portal-host on
any layer

## Custom portals

- Create your own portal service by extending
`TuiPortalService`

```ts
@Injectable({
  providedIn: 'root',
})
export class MyPortalService extends TuiPortalService {}
```

- Create your own portal host by extending
`AbstractTuiPortalHost`

```ts
@Component({
  selector: 'my-portal-host',
  templateUrl: './my-portal-host.template.html',
  styleUrls: ['./my-portal-host.style.less'],
  providers: [tuiAsPortal(MyPortalService)],
})
export class MyPortalHost extends TuiPortals {}
```

- Put the created portal host on a desired layer

```angular2html
<tui-root>

    <ng-container ngProjectAs="tuiOverContent">
        <my-portal-host></my-portal-host>
    </ng-container>

</tui-root>
```

### Usage Examples

#### Custom portals

**Template:**
```html
<button iconStart="@tui.plus" size="s" tuiButton type="button" (click)="addTemplate(someTemplate)" > Add </button>
<button appearance="secondary" iconStart="@tui.trash" size="s" tuiButton type="button" class="tui-space_left-3" (click)="removeTemplate()" > Remove </button>
<ng-template #someTemplate>
<div class="template">
<div class="greeting"> Hello Taiga UI <tui-icon icon="@tui.heart" class="icon" />
</div>
</div>
</ng-template>
```

**TypeScript:**
```ts
import {Component, type EmbeddedViewRef, inject, type TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiIcon} from '@taiga-ui/core';

import {CustomPortalService} from './service';

@Component({
    standalone: true,
    selector: 'tui-portals-example-1',
    imports: [TuiButton, TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export class TuiPortalsExample1 {
    private readonly customPortalService = inject(CustomPortalService);

    protected templates: Array<EmbeddedViewRef<unknown>> = [];

    protected addTemplate(template: TemplateRef<unknown>): void {
        this.templates.push(this.customPortalService.addTemplate(template));
    }

    protected removeTemplate(): void {
        const viewRef = this.templates.pop();

        if (viewRef) {
            this.customPortalService.removeTemplate(viewRef);
        }
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.wrapper {
    display: flex;
    align-items: center;
}

.template {
    box-shadow: var(--tui-shadow-small);
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 0.25rem;
    animation: tuiFadeIn var(--tui-duration) var(--tui-duration);
    animation-fill-mode: backwards;
    background: var(--tui-chart-categorical-01);
    font: var(--tui-font-text-m);
}

.icon {
    color: var(--tui-chart-categorical-10);
}
```
