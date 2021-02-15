import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {Component} from '@angular/core';
import {tuiCoreIcons, tuiKitIcons} from '@taiga-ui/icons';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'icon-set',
    templateUrl: './icon-set.template.html',
    styleUrls: ['./icon-set.style.less'],
    changeDetection,
})
export class IconSetComponent {
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly names = [...Object.keys(tuiCoreIcons), ...Object.keys(tuiKitIcons)];

    expanded = false;

    toggle() {
        this.expanded = !this.expanded;
    }
}
