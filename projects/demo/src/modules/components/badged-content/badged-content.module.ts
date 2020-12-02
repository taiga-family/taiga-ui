import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiSvgModule} from '@taiga-ui/core';
import {
    TuiAvatarModule,
    TuiBadgedContentModule,
    TuiInputModule,
    TuiMarkerIconModule,
    TuiRadioListModule,
} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {ExampleTuiBadgedContentComponent} from './badged-content.component';
import {TuiBadgedContentExample1} from './examples/1';
import {TuiBadgedContentExample2} from './examples/2';
import {TuiBadgedContentExample3} from './examples/3';

@NgModule({
    imports: [
        TuiAvatarModule,
        TuiMarkerIconModule,
        TuiBadgedContentModule,
        ...TUI_DOC_PAGE_MODULES,
        CommonModule,
        TuiInputModule,
        PolymorpheusModule,
        TuiButtonModule,
        TuiRadioListModule,
        TuiSvgModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(generateRoutes(ExampleTuiBadgedContentComponent)),
    ],
    declarations: [
        ExampleTuiBadgedContentComponent,
        TuiBadgedContentExample1,
        TuiBadgedContentExample2,
        TuiBadgedContentExample3,
    ],
    exports: [ExampleTuiBadgedContentComponent],
})
export class ExampleTuiBadgedContentModule {}
