import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiRawLoad} from '@taiga-ui/addon-doc';
import {of, switchMap} from 'rxjs';

@Component({
    selector: 'changelog',
    templateUrl: './changelog.template.html',
    styleUrls: ['./changelog.style.less'],
    changeDetection,
})
export class ChangelogComponent {
    readonly changelog = of(import('../../../../../../CHANGELOG.md?raw')).pipe(
        switchMap(tuiRawLoad),
    );
}
