import {Component, Inject} from '@angular/core';
import {TuiDialog} from '@taiga-ui/cdk';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

import {changeDetection} from '../../../../../../change-detection-strategy';
import {PromptOptions} from './prompt-options';

@Component({
    selector: 'prompt',
    templateUrl: './prompt.template.html',
    styleUrls: ['./prompt.style.less'],
    changeDetection,
})
export class PromptComponent {
    // Here you get options + content + id + observer
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT) readonly context: TuiDialog<PromptOptions, boolean>,
    ) {}

    onClick(response: boolean) {
        this.context.completeWith(response);
    }
}
