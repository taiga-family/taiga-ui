import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'cypress-doc-page',
    templateUrl: './cypress.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CypressDocPageComponent {}
