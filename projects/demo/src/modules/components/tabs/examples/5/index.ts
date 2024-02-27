import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiIsString} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-tabs-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiTabsExample5 {
    protected readonly collaborators = ['Carol Cleveland', 'Neil Innes'];

    protected readonly tabs = [
        'John Cleese',
        'Eric Idle',
        this.collaborators,
        'Michael Palin',
        'Terry Jones',
        'Terry Gilliam',
        'Graham Chapman',
    ];

    protected activeElement = String(this.tabs[0]);

    protected get activeItemIndex(): number {
        if (this.collaborators.includes(this.activeElement)) {
            return this.tabs.indexOf(this.collaborators);
        }

        return this.tabs.indexOf(this.activeElement);
    }

    protected stop(event: Event): void {
        // We need to stop tab custom event so parent component does not think its active
        event.stopPropagation();
    }

    protected onClick(activeElement: string): void {
        this.activeElement = activeElement;
    }

    protected isString(tab: unknown): tab is string {
        return tuiIsString(tab);
    }
}
