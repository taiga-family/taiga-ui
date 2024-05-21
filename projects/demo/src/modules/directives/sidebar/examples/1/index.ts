import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-sidebar-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSidebarExample1 {
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
