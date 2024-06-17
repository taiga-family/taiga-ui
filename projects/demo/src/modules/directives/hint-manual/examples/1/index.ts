import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiButtonDirective,
    TuiHintDirective,
    TuiHintManualDirective,
    TuiLinkDirective,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiHintDirective,
        TuiHintManualDirective,
        RouterLink,
        TuiLinkDirective,
    ],
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
