import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'example-<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example<%= classify(name) %>Component {
    <% for(let i =1; i<=samples; i++) {%>readonly example<%=i%> = {
            TypeScript: import('!!raw-loader!./examples/<%=i%>/index.ts'),
            HTML: import('!!raw-loader!./examples/<%=i%>/index.html'),
        };
    <% } %>
    readonly exampleImportModule = import('!!raw-loader!./import/import-module.md');
}
