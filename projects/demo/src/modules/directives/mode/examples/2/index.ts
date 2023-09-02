import {Component, Inject, Injector} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialogService, TuiModeDirective} from '@taiga-ui/core';
import {TUI_PROMPT} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {DialogComponent} from './dialog.component';

@Component({
    selector: 'tui-mode-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiModeExample2 {
    constructor(
        @Inject(Injector) private readonly injector: Injector,
        @Inject(TuiDialogService) private readonly dialog: TuiDialogService,
        @Inject(TuiModeDirective) private readonly tuiMode: TuiModeDirective,
    ) {}

    openPrompt(): void {
        this.dialog
            .open(TUI_PROMPT, {label: `tuiMode is ${this.tuiMode.mode}`})
            .subscribe();
    }

    openComponent(): void {
        this.dialog
            .open(new PolymorpheusComponent(DialogComponent, this.injector))
            .subscribe();
    }
}
