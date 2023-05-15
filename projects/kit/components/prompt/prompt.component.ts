import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiAppearance, TuiDialogContext} from '@taiga-ui/core';
import {TUI_PROMPT_WORDS} from '@taiga-ui/kit/tokens';
import {
    POLYMORPHEUS_CONTEXT,
    PolymorpheusComponent,
    PolymorpheusContent,
} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

export interface TuiPromptData {
    readonly content?: PolymorpheusContent;
    readonly yes?: string;
    readonly no?: string;
}

// TODO: Rename to tui-confirm in 4.0
@Component({
    selector: 'tui-prompt',
    templateUrl: './prompt.template.html',
    styleUrls: ['./prompt.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPromptComponent {
    constructor(
        @Inject(TUI_PROMPT_WORDS) readonly words$: Observable<{yes: string; no: string}>,
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialogContext<boolean, TuiPromptData | undefined>,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
    ) {}

    get appearance(): TuiAppearance {
        return this.isMobile ? TuiAppearance.Secondary : TuiAppearance.Flat;
    }
}

export const TUI_PROMPT = new PolymorpheusComponent(TuiPromptComponent);
