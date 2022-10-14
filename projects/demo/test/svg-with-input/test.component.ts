import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {tuiIconMaestro} from '@taiga-ui/icons';

export class TuiTestUser {
    id!: string;
    firstName: string | null = null;
    lastName: string | null = null;
    phone!: string;
    email: string | null = null;
}

@Component({
    selector: `test`,
    template: `
        <layout-test>
            <form
                layoutForm
                class="form"
                [formGroup]="form"
            >
                <h3 class="title">Info</h3>
                <p class="description">
                    Fill them out once so you don't have to enter them every time you buy.
                </p>
                <div class="tui-form__row">
                    <tui-input formControlName="fullName">
                        Lastname and firstname
                    </tui-input>
                </div>
                <div class="tui-form__row">
                    <tui-input formControlName="email">Email</tui-input>
                </div>
                <button
                    tuiButton
                    appearance="custom"
                    class="tui-form__row"
                    [disabled]="form.invalid"
                >
                    К&nbsp;оплате
                </button>
            </form>

            <ng-container layoutCopyright>
                Maestro
                <tui-svg [src]="icon"></tui-svg>
            </ng-container>
        </layout-test>
    `,
})
export class TuiTestComponent {
    icon = tuiIconMaestro;
    user!: TuiTestUser;

    form = new FormGroup({
        fullName: new FormControl(``),
        email: new FormControl(``),
    });
}
