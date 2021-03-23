import {NgModule} from '@angular/core';
import {TuiDocCodeModule} from './components/code/code.module';
import {TuiDocDemoModule} from './components/demo/demo.module';
import {TuiDocDocumentationModule} from './components/documentation/documentation.module';
import {TuiDocExampleModule} from './components/example/example.module';
import {TuiDocPageModule} from './components/page/page.module';

@NgModule({
    exports: [
        TuiDocCodeModule,
        TuiDocDemoModule,
        TuiDocDocumentationModule,
        TuiDocPageModule,
        TuiDocExampleModule,
    ],
})
export class TuiAddonDocModule {}
