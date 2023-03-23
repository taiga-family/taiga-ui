import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import type {TuiDialogContext} from '@taiga-ui/core';
import {TuiAppearance} from '@taiga-ui/core';
import {TUI_PROMPT_WORDS} from '@taiga-ui/kit/tokens';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';

export interface TuiPromptData {
    readonly content?: PolymorpheusContent;
    readonly yes?: string;
    readonly no?: string;
}

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
