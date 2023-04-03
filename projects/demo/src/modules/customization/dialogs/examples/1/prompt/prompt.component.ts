import {Component, Inject, Self} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDestroyService, TuiDialog} from '@taiga-ui/cdk';
import {TuiDialogCloseService} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {PromptOptions} from './prompt-options';

@Component({
    selector: 'prompt',
    templateUrl: './prompt.template.html',
    styleUrls: ['./prompt.style.less'],
    providers: [TuiDestroyService, TuiDialogCloseService],
    changeDetection,
})
export class PromptComponent {
    // Here you get options + content + id + observer
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialog<PromptOptions, boolean>,
        @Inject(TuiDialogCloseService) close$: Observable<unknown>,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
    ) {
        // Close on click outside/Escape button
        close$
            .pipe(takeUntil(destroy$))
            .subscribe(() => this.context.$implicit.complete());
    }

    onClick(response: boolean): void {
        this.context.completeWith(response);
    }
}
