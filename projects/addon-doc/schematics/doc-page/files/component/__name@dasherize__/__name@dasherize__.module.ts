import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {tuiGenerateRoutes, TuiAddonDocModule,
    TuiDocExampleModule,
    TuiDocPageModule,
    TuiDocDocumentationModule,
    TuiDocCodeModule,
    TuiDocDemoModule,} from '@taiga-ui/addon-doc';

import {Example<%= classify(name) %>Component} from './<%= dasherize(name) %>.component';
<% for(let i=1; i<=samples; i++) {%>
import {<%= classify(name) %>Example<%=i%>} from './examples/<%=i%>'; <%}%>

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiDocExampleModule,
        TuiDocPageModule,
        TuiDocDocumentationModule,
        TuiDocCodeModule,
        TuiDocDemoModule,
        RouterModule.forChild(tuiGenerateRoutes(Example<%= classify(name) %>Component)),
    ],
    declarations: [Example<%= classify(name) %>Component, <% for(let i=1; i<=samples; i++) {%>
                   <%= classify(name) %>Example<%=i%>,<%}%>
    ],
    exports: [Example<%= classify(name) %>Component],
})
export class Example<%= classify(name) %>Module {}
