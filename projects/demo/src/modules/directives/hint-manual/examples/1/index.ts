import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiHint, TuiHintDirective, TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton, TuiHintDirective, TuiHint, RouterLink, TuiLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Example {
    protected hintShown = false;

    protected toggleHint(): void {
        this.hintShown = !this.hintShown;
    }
}
