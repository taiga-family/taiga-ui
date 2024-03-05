import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDestroyService, type TuiPopover} from '@taiga-ui/cdk';
import {TuiDialogCloseService} from '@taiga-ui/core';
import {TuiButtonModule} from '@taiga-ui/experimental';
import {POLYMORPHEUS_CONTEXT, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {takeUntil} from 'rxjs';

import {type PromptOptions} from './prompt-options';

@Component({
    standalone: true,
    selector: 'prompt',
    imports: [PolymorpheusModule, TuiButtonModule],
    templateUrl: './prompt.template.html',
    styleUrls: ['./prompt.style.less'],
    changeDetection,
    providers: [TuiDestroyService, TuiDialogCloseService],
})
export class PromptComponent {
    protected readonly context =
        inject<TuiPopover<PromptOptions, boolean>>(POLYMORPHEUS_CONTEXT);

    // Here you get options + content + id + observer
    constructor() {
        // Close on click outside/Escape button
        inject(TuiDialogCloseService)
            .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
            .subscribe(() => this.context.$implicit.complete());
    }

    protected onClick(response: boolean): void {
        this.context.completeWith(response);
    }
}
