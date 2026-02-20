import"./chunk-HU6DUUP4.js";var o=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiIsString} from '@taiga-ui/cdk';
import {TuiDataList, TuiDropdown, TuiIcon} from '@taiga-ui/core';
import {TuiChevron, TuiDataListDropdownManager, TuiTabs} from '@taiga-ui/kit';

@Component({
    imports: [
        TuiChevron,
        TuiDataList,
        TuiDataListDropdownManager,
        TuiDropdown,
        TuiIcon,
        TuiTabs,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly collaborators = ['Carol Cleveland', 'Neil Innes'];

    protected readonly tabs = [
        this.collaborators,
        ...inject<readonly string[]>('Pythons' as any),
    ];

    protected activeElement = String(this.collaborators[0]);

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
`;export{o as default};
