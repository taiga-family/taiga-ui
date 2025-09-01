import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiAutoFocus} from '@taiga-ui/cdk/directives/auto-focus';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {TuiButton} from '@taiga-ui/core/components/button';
import {type TuiDialogContext} from '@taiga-ui/core/components/dialog';
import {TUI_CONFIRM_WORDS} from '@taiga-ui/kit/tokens';
import {
    injectContext,
    PolymorpheusComponent,
    type PolymorpheusContent,
    PolymorpheusOutlet,
} from '@taiga-ui/polymorpheus';

export interface TuiConfirmData {
    readonly content?: PolymorpheusContent;
    readonly no?: string;
    readonly yes?: string;
    readonly appearance?: string;
}

// TODO: Remove selector in v5
@Component({
    standalone: true,
    selector: 'tui-confirm',
    imports: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton],
    templateUrl: './confirm.template.html',
    styleUrls: ['./confirm.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiConfirm {
    private readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly words$ = inject(TUI_CONFIRM_WORDS);

    public readonly context =
        injectContext<TuiDialogContext<boolean, TuiConfirmData | undefined>>();

    protected get appearance(): string {
        return this.isMobile ? 'secondary' : 'flat';
    }
}

export const TUI_CONFIRM = new PolymorpheusComponent(TuiConfirm);
