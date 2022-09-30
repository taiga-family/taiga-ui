import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'example-<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example<%= classify(name) %>Component {
    <% for(let i =1; i<=samples; i++) {%>readonly example<%=i%> = {
            TypeScript: import('./examples/<%=i%>/index.ts?raw'),
            HTML: import('./examples/<%=i%>/index.html?raw'),
        };
    <% } %>
    readonly exampleImportModule = import('./import/import-module.md?raw');
}
