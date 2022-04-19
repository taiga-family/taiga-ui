import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiNotification, TuiNotificationsService} from '@taiga-ui/core';
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
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
        @Inject(PromptService) private readonly promptService: PromptService,
    ) {}

    onClick(
        choose: PolymorpheusContent<any>,
        poorly: PolymorpheusContent<any>,
        wisely: PolymorpheusContent<any>,
    ): void {
        this.promptService
            .open(choose, {
                heading: 'Taiga UI is the best',
                buttons: ['Absolutely!', 'No way!'],
            })
            .pipe(
                switchMap(response =>
                    response
                        ? this.notifications.show(wisely, {
                              status: TuiNotification.Success,
                          })
                        : this.notifications.show(poorly, {
                              status: TuiNotification.Error,
                          }),
                ),
            )
            .subscribe();
    }
}
