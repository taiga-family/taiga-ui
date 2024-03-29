import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiPopover} from '@taiga-ui/cdk';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiDialogCloseService} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {takeUntil} from 'rxjs';

import type {PromptOptions} from './prompt-options';

@Component({
    standalone: true,
    selector: 'prompt',
    imports: [PolymorpheusModule, TuiButtonDirective],
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
