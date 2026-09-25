# Confirm

- **Package**: `KIT`
- **Type**: components

Confirm is a ready to use Dialog to ask user to confirm an action See this example to learn how to use confirm to prevent data loss on forms inside other modals

### Example

```html
<button tuiButton type="button" (click)="onClick()" > Show </button>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| content | `PolymorpheusContent` | content of the confirm |
| [appearance] | `string | [string, string]` | appearance of the confirming button |
| [no] | `string` | button |
| [yes] | `string` | button |

```ts
import {TUI_CONFIRM} from '@taiga-ui/kit';

// ...
export class Example {
  private readonly dialogs = inject(TuiDialogService);

  confirm() {
    this.dialogs
      .open<boolean>(TUI_CONFIRM, {
        label: 'Are you sure?',
        data: {
          content: 'This action has consequences',
          yes: 'Whatever...',
          no: 'Oops!',
        },
      })
      .subscribe((response) => {
        // ...
      });
  }
}
```

### Usage Examples

#### Basic

**Template:**
```html
<button tuiButton type="button" (click)="onClick()" > Show </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiResponsiveDialogService} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiNotificationService} from '@taiga-ui/core';
import {TUI_CONFIRM, type TuiConfirmData} from '@taiga-ui/kit';
import {switchMap} from 'rxjs';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiResponsiveDialogService);
    private readonly alerts = inject(TuiNotificationService);

    protected onClick(): void {
        const data: TuiConfirmData = {
            content:
                'This is <code>PolymorpheusContent</code> so it can be template too!',
            yes: 'That is great!',
            no: 'Who cares?',
        };

        this.dialogs
            .open<boolean>(TUI_CONFIRM, {
                label: 'Do you like Taiga UI?',
                size: 's',
                data,
            })
            .pipe(switchMap((response) => this.alerts.open(String(response))))
            .subscribe();
    }
}
```

You can pass
`data: TuiConfirmData`
when opening a dialog to customize it

- Open with
`DialogService`
