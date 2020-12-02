import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiLinkModule,
    TuiManualHintModule,
    TuiModeModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {InheritedDocumentationModule} from '../../components/abstract/inherited-documentation/inherited-documentation.module';
import {TuiManualHintExample1} from './examples/1';
import {ExampleTuiManualHintComponent} from './manual-hint.component';

@NgModule({
    imports: [
        TuiButtonModule,
        TuiManualHintModule,
        TuiLinkModule,
        TuiModeModule,
        PolymorpheusModule,
        CommonModule,
        InheritedDocumentationModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiManualHintComponent)),
    ],
    declarations: [ExampleTuiManualHintComponent, TuiManualHintExample1],
    exports: [ExampleTuiManualHintComponent],
})
export class ExampleTuiManualHintModule {}
