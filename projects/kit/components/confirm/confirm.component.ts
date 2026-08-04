import {ChangeDetectionStrategy, Component, inject, InjectionToken} from '@angular/core';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiAutoFocus} from '@taiga-ui/cdk/directives/auto-focus';
import {
    TUI_BUTTON_OPTIONS,
    TuiButton,
    tuiButtonOptionsProvider,
} from '@taiga-ui/core/components/button';
import {type TuiDialogContext} from '@taiga-ui/core/portals/dialog';
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
    readonly appearance?: string | readonly [yes: string, no: string];
}

@Component({
    imports: [PolymorpheusOutlet, TuiAutoFocus, TuiButton],
    templateUrl: './confirm.template.html',
    styleUrl: './confirm.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider(() => ({
            size: 'm',
            appearance: inject(WA_IS_MOBILE) ? 'secondary' : 'flat',
        })),
    ],
})
export class TuiConfirm {
    protected readonly options = inject(TUI_BUTTON_OPTIONS);
    protected readonly words = inject(TUI_CONFIRM_WORDS);
    protected readonly context =
        injectContext<TuiDialogContext<boolean, TuiConfirmData | undefined>>();

    protected get yes(): string {
        return Array.isArray(this.context.data?.appearance)
            ? this.context.data?.appearance[0]
            : String(this.context.data?.appearance || 'primary');
    }

    protected get no(): string {
        return Array.isArray(this.context.data?.appearance)
            ? this.context.data?.appearance[1]
            : this.options.appearance;
    }
}

export const TUI_CONFIRM = new PolymorpheusComponent(TuiConfirm);

export const TUI_CONFIRM_DIALOG = new InjectionToken<
    PolymorpheusContent<TuiDialogContext<boolean, unknown>>
>(ngDevMode ? 'TUI_CONFIRM_DIALOG' : '', {factory: () => TUI_CONFIRM});
