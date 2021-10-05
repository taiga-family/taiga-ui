import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: '<%= dasherize(name) %>-example-<%= samples %>',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%=classify(name)%>Example<%=samples%> {};
