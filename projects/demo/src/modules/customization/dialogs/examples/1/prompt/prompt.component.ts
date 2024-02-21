import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDestroyService, TuiPopover} from '@taiga-ui/cdk';
import {TuiDialogCloseService} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {takeUntil} from 'rxjs';

import {PromptOptions} from './prompt-options';

@Component({
    selector: 'prompt',
    templateUrl: './prompt.template.html',
    styleUrls: ['./prompt.style.less'],
    changeDetection,
    providers: [TuiDestroyService, TuiDialogCloseService],
})
export class PromptComponent {
    readonly context = inject<TuiPopover<PromptOptions, boolean>>(POLYMORPHEUS_CONTEXT);

    // Here you get options + content + id + observer
    constructor() {
        // Close on click outside/Escape button
        inject(TuiDialogCloseService)
            .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
            .subscribe(() => this.context.$implicit.complete());
    }

    onClick(response: boolean): void {
        this.context.completeWith(response);
    }
}
