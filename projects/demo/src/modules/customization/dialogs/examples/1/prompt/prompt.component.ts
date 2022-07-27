import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDialog} from '@taiga-ui/cdk';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

import {PromptOptions} from './prompt-options';

@Component({
    selector: `prompt`,
    templateUrl: `./prompt.template.html`,
    styleUrls: [`./prompt.style.less`],
    changeDetection,
})
export class PromptComponent {
    // Here you get options + content + id + observer
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialog<PromptOptions, boolean>,
    ) {}

    onClick(response: boolean): void {
        this.context.completeWith(response);
    }
}
