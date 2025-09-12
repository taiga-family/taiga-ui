import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSidebar} from '@taiga-ui/addon-mobile';
import {TuiActiveZone} from '@taiga-ui/cdk';
import {TuiButton, TuiLink} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    imports: [TuiAccordion, TuiActiveZone, TuiButton, TuiLink, TuiSidebar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly webApis = [
        'Common',
        'Audio',
        'Canvas',
        'Geolocation',
        'MIDI',
        'Workers',
    ];

    protected readonly taigaFamilyProducts = [
        'Taiga-UI',
        'ng-event-plugins',
        'ng-polymorpheus',
        'ng-dompurify',
    ];

    protected toggle(open: boolean): void {
        this.open = open;
    }
}
