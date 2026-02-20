import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiHint, TuiLink} from '@taiga-ui/core';

@Component({
    imports: [RouterLink, TuiButton, TuiHint, TuiLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {
    protected hintShown = false;

    protected toggleHint(): void {
        this.hintShown = !this.hintShown;
    }
}
`;export{o as default};
