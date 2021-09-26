import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-tabs-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiTabsExample5 {
    readonly collaborators = ['Carol Cleveland', 'Neil Innes'];

    readonly tabs = [
        'John Cleese',
        'Eric Idle',
        this.collaborators,
        'Michael Palin',
        'Terry Jones',
        'Terry Gilliam',
        'Graham Chapman',
    ];

    activeElement = String(this.tabs[0]);

    open = false;

    get activeItemIndex(): number {
        if (this.collaborators.indexOf(this.activeElement) !== -1) {
            return this.tabs.indexOf(this.collaborators);
        }

        return this.tabs.indexOf(this.activeElement);
    }

    stop(event: Event) {
        // We need to stop tab custom event so parent component does not think its active
        event.stopPropagation();
    }

    onClick(activeElement: string) {
        this.activeElement = activeElement;
        this.open = false;
    }

    isString(tab: any): boolean {
        return typeof tab === 'string';
    }
}
