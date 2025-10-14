import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, type TuiDialogContext, TuiTextfield} from '@taiga-ui/core';
import {TuiForm} from '@taiga-ui/layout';
import {injectContext} from '@taiga-ui/polymorpheus';

@Component({
    imports: [FormsModule, TuiAutoFocus, TuiButton, TuiForm, TuiTextfield],
    template: `
        <form tuiForm>
            <tui-textfield>
                <label tuiLabel>Your name</label>
                <input
                    name="name"
                    tuiAutoFocus
                    tuiTextfield
                    [(ngModel)]="value"
                />
            </tui-textfield>
            <footer>
                <button
                    appearance="secondary"
                    tuiButton
                    type="button"
                    (click)="context.$implicit.complete()"
                >
                    Cancel
                </button>
                <button
                    tuiButton
                    type="submit"
                >
                    Submit
                </button>
            </footer>
        </form>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'(submit.prevent)': 'context.completeWith(value)'},
})
export class DialogComponent {
    protected readonly context = injectContext<TuiDialogContext<string, string>>();

    protected value = this.context.data;
}
