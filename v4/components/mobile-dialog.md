# MobileDialog

- **Package**: `ADDON-MOBILE`
- **Type**: components

Component for showing a dialog on mobile devices. It emulates appearance of native alerts on iOS and Android

### How to Use (Template)

```ts
constructor(private readonly dialogs: TuiMobileDialogService) {}

// ...

this.dialogs
    .open(
        'Text',
        {
            label: 'Heading',
            actions: ['Button 1', 'Button 2'],
            data: 'Some data'
        },
    )
    .subscribe(index => {
        // Index of clicked button
        console.log(index);
    });
```

### Usage Examples

#### Basic

**Template:**
```html
<p>Choose iPhone into DevTools to see iOS styled dialog.</p>
<button tuiButton type="button" (click)="show()" > Show dialog </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMobileDialogService} from '@taiga-ui/addon-mobile';
import {TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {switchMap} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_IS_IOS,
            useValue: false,
        },
    ],
})
export default class Example {
    private readonly dialogs = inject(TuiMobileDialogService);
    private readonly alerts = inject(TuiAlertService);

    protected show(): void {
        const actions = ['No thanks', 'Remind me later', 'Rate now'];

        this.dialogs
            .open(
                'If you like this app, please take a moment to leave a positive rating.',
                {
                    label: 'What do you think?',
                    actions,
                },
            )
            .pipe(switchMap((index) => this.alerts.open(`Selected: ${actions[index]}`)))
            .subscribe();
    }
}
```

- Inject service and show dialog:
