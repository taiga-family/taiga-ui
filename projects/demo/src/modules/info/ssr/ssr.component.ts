import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'ssr',
    templateUrl: 'ssr.template.html',
    changeDetection,
})
export class SsrComponent {}
