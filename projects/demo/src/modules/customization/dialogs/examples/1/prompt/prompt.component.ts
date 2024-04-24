import {Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiPopover} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiDialogCloseService} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import type {PromptOptions} from './prompt-options';

@Component({
    standalone: true,
    selector: 'prompt',
    imports: [PolymorpheusModule, TuiButtonDirective],
    templateUrl: './prompt.template.html',
    styleUrls: ['./prompt.style.less'],
    changeDetection,
    providers: [TuiDialogCloseService],
})
export class PromptComponent {
    protected readonly context =
        inject<TuiPopover<PromptOptions, boolean>>(POLYMORPHEUS_CONTEXT);

    // Here you get options + content + id + observer
    constructor() {
        // Close on click outside/Escape button
        inject(TuiDialogCloseService)
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.context.$implicit.complete());
    }

    protected onClick(response: boolean): void {
        this.context.completeWith(response);
    }
}
