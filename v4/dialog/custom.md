# Custom dialogs

You can easily create your custom dialogs by extending our abstract class and providing your own component as a
dialog.

## Custom dialog

## Custom dialog with directive

### Usage Examples

#### Custom dialog

**Template:**
```html
<button tuiButton type="button" (click)="onClick(choose, poorly, wisely)" > Show prompt </button>
<ng-template #choose>
<div class="wrapper">
<tui-avatar size="l" src="assets/images/choose.png" class="tui-space_right-2" /> «Choose wisely» </div>
</ng-template>
<ng-template #poorly>
<div class="wrapper">
<tui-avatar src="assets/images/poorly.png" class="tui-space_right-2" /> «You chose poorly» </div>
</ng-template>
<ng-template #wisely>
<div class="wrapper"> «You have chosen wisely» <tui-avatar src="assets/images/wisely.png" class="tui-space_left-1" />
</div>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {switchMap} from 'rxjs';

import {PromptService} from './prompt/prompt.service';

@Component({
    standalone: true,
    selector: 'tui-dialogs-example-1',
    imports: [TuiAvatar, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export class TuiDialogsExample1 {
    private readonly alerts = inject(TuiAlertService);
    private readonly promptService = inject(PromptService);

    protected onClick(
        choose: PolymorpheusContent,
        poorly: PolymorpheusContent,
        wisely: PolymorpheusContent,
    ): void {
        this.promptService
            .open(choose, {
                heading: 'Taiga UI is the best',
                buttons: ['Absolutely!', 'No way!'],
            })
            .pipe(
                switchMap((response) =>
                    response
                        ? this.alerts.open(wisely, {
                              appearance: 'positive',
                          })
                        : this.alerts.open(poorly, {
                              appearance: 'negative',
                          }),
                ),
            )
            .subscribe();
    }
}
```

**LESS:**
```less
.wrapper {
    display: flex;
    align-items: center;
}
```

#### Custom dialog with directive

**Template:**
```html
<button size="m" tuiButton type="button" (click)="open = true" > Show </button>
<ng-template let-observer [tuiCustomDialogOptions]="{size: 's'}" [(tuiCustomDialog)]="open" >
<p>This abstracts away service and subscription</p>
<p>
<button tuiButton type="button" (click)="observer.complete()" > Ok </button>
</p>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton} from '@taiga-ui/core';

import {CustomDialogDirective} from './custom-dialog/custom-dialog.directive';

@Component({
    standalone: true,
    selector: 'tui-dialogs-example-2',
    imports: [CustomDialogDirective, TuiButton],
    templateUrl: './index.html',
    changeDetection,
})
export class TuiDialogsExample2 {
    protected open = false;
}
```
