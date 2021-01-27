import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Injectable,
    Provider,
} from '@angular/core';
import {AbstractTuiDialogService, TUI_DIALOGS, TuiDialog} from '@taiga-ui/cdk';
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

// Define options interface
interface PromptOptions {
    readonly heading: string;
    readonly buttons: readonly [string, string];
}

// Create component
@Component({
    selector: 'prompt',
    templateUrl: './prompt.template.html',
    styleUrls: ['./prompt.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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

// Create service
@Injectable({
    providedIn: 'root',
})
export class PromptService extends AbstractTuiDialogService<PromptOptions> {
    readonly defaultOptions = {
        heading: 'Are you sure?',
        buttons: ['Yes', 'No'],
    } as const;
    readonly component = new PolymorpheusComponent(PromptComponent);
}

// Add this provider to app module
export const PROMPT_PROVIDER: Provider = {
    provide: TUI_DIALOGS,
    useExisting: PromptService,
    multi: true,
};
