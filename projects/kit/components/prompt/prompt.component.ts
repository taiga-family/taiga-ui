import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiAppearance, type TuiDialogContext} from '@taiga-ui/core';
import {TUI_PROMPT_WORDS} from '@taiga-ui/kit/tokens';
import {
    POLYMORPHEUS_CONTEXT,
    PolymorpheusComponent,
    type PolymorpheusContent,
} from '@tinkoff/ng-polymorpheus';

export interface TuiPromptData {
    readonly content?: PolymorpheusContent;
    readonly no?: string;
    readonly yes?: string;
}

// TODO: Rename to tui-confirm in 4.0
@Component({
    selector: 'tui-prompt',
    templateUrl: './prompt.template.html',
    styleUrls: ['./prompt.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPromptComponent {
    private readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly words$ = inject(TUI_PROMPT_WORDS);

    protected readonly context =
        inject<TuiDialogContext<boolean, TuiPromptData | undefined>>(
            POLYMORPHEUS_CONTEXT,
        );

    protected get appearance(): TuiAppearance {
        return this.isMobile ? TuiAppearance.Secondary : TuiAppearance.Flat;
    }
}

export const TUI_PROMPT = new PolymorpheusComponent(TuiPromptComponent);
