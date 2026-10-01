import {Component, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiInput, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiForm, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiCardLarge,
        TuiForm,
        TuiHeader,
        TuiInput,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {
    protected readonly signedIn = signal(false);
    protected readonly status = signal('');
    protected readonly form = new FormGroup({
        email: new FormControl('taiga@ui.dev', {nonNullable: true}),
        password: new FormControl('transformer', {nonNullable: true}),
    });

    protected toggle(): void {
        const signedIn = !this.signedIn();

        this.signedIn.set(signedIn);
        this.status.set(signedIn ? 'Signed in as taiga@ui.dev' : 'Signed out');
    }
}
