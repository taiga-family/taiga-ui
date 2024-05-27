import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSidebarDirective} from '@taiga-ui/addon-mobile';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiLinkDirective} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiActiveZoneDirective,
        TuiSidebarDirective,
        TuiAccordion,
        NgForOf,
        TuiLinkDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
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
