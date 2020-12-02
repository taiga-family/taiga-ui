import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {TuiAutoFocusModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiSelectModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {DialogExampleComponent} from './dialog-example.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiButtonModule,
        TuiSelectModule,
        TuiMoneyModule,
        PolymorpheusModule,
        TuiAutoFocusModule,
    ],
    declarations: [DialogExampleComponent],
    exports: [DialogExampleComponent],
})
export class DialogExampleModule {}
