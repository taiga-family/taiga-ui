import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {rawLoad} from '@taiga-ui/addon-doc';
import {of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
    selector: 'changelog',
    templateUrl: 'changelog.template.html',
    styleUrls: ['./changelog.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class ChangelogComponent {
    readonly changelog = of(import('!!raw-loader!../../../../../../CHANGELOG.md')).pipe(
        switchMap(rawLoad),
    );
}
