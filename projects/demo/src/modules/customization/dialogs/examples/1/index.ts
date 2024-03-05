import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAlertService} from '@taiga-ui/core';
import {TuiButtonModule} from '@taiga-ui/experimental';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {switchMap} from 'rxjs';

import {PromptService} from './prompt/prompt.service';

@Component({
    standalone: true,
    selector: 'tui-dialogs-example-1',
    imports: [TuiButtonModule, TuiAvatarComponent],
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
                switchMap(response =>
                    response
                        ? this.alerts.open(wisely, {
                              status: 'success',
                          })
                        : this.alerts.open(poorly, {
                              status: 'error',
                          }),
                ),
            )
            .subscribe();
    }
}
