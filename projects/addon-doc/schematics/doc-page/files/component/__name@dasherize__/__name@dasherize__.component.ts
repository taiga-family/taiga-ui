import {ChangeDetectionStrategy, Component} from '@angular/core';
<% for(let i =1; i<=samples; i++) {%>import * as example<%=i%>Html from '!!raw-loader!./examples/<%=i%>/index.html';
import * as example<%=i%>Ts from '!!raw-loader!./examples/<%=i%>/index.ts';
<%}%>import * as exampleImportModule from '!!raw-loader!./import/import-module.txt';

@Component({
    selector: 'example-<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example<%= classify(name) %>Component {
    <% for(let i =1; i<=samples; i++) {%>readonly example<%=i%>: IFrontEndExample = {
            TypeScript: example<%=i%>Ts,
            HTML: example<%=i%>Html,
        };
    <% } %>
    readonly exampleImportModule = exampleImportModule;
}
