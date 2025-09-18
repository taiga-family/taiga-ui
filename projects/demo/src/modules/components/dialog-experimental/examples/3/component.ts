import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDropdownMobile} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {type TuiDialogContext} from '@taiga-ui/experimental';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';
import {injectContext} from '@taiga-ui/polymorpheus';

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiForm,
        TuiTextfield,
        TuiSelect,
        TuiChevron,
        TuiDropdownMobile,
        TuiDataListWrapper,
    ],
    template: `
        <form tuiForm>
            <tui-textfield
                tuiChevron
                tuiDropdownMobile="Your name"
                [tuiTextfieldCleaner]="false"
            >
                <label tuiLabel>Your name</label>
                <input
                    name="name"
                    tuiSelect
                    [(ngModel)]="value"
                />
                <tui-data-list-wrapper
                    *tuiTextfieldDropdown
                    new
                    [items]="items"
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
    protected readonly items = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

    protected value = this.context.data;
}
