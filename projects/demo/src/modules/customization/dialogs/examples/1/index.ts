import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAlertService} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {switchMap} from 'rxjs/operators';

import {PromptService} from './prompt/prompt.service';

@Component({
    selector: 'tui-dialogs-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export class TuiDialogsExample1 {
    constructor(
        @Inject(TuiAlertService)
        private readonly alerts: TuiAlertService,
        @Inject(PromptService) private readonly promptService: PromptService,
    ) {}

    onClick(
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
