import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TUI_IS_MOBILE, TuiAutoFocusDirective} from '@taiga-ui/cdk';
import type {TuiDialogContext} from '@taiga-ui/core';
import {TuiAppearance, TuiButtonDirective} from '@taiga-ui/core';
import {TUI_CONFIRM_WORDS} from '@taiga-ui/kit/tokens';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {
    POLYMORPHEUS_CONTEXT,
    PolymorpheusComponent,
    PolymorpheusModule,
} from '@tinkoff/ng-polymorpheus';

export interface TuiConfirmData {
    readonly content?: PolymorpheusContent;
    readonly no?: string;
    readonly yes?: string;
    readonly appearance?: string;
}

@Component({
    standalone: true,
    selector: 'tui-confirm',
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiButtonDirective,
        TuiAutoFocusDirective,
    ],
    templateUrl: './confirm.template.html',
    styleUrls: ['./confirm.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiConfirmComponent {
    private readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly words$ = inject(TUI_CONFIRM_WORDS);

    protected readonly context =
        inject<TuiDialogContext<boolean, TuiConfirmData | undefined>>(
            POLYMORPHEUS_CONTEXT,
        );

    protected get appearance(): TuiAppearance {
        return this.isMobile ? TuiAppearance.Secondary : TuiAppearance.Flat;
    }
}

export const TUI_CONFIRM = new PolymorpheusComponent(TuiConfirmComponent);
