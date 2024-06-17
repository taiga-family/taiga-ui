import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiDataListComponent,
    TuiDialogService,
    TuiDropdownContextDirective,
    TuiDropdownDirective,
    TuiDropdownOptionsDirective,
    TuiDropdownPositionSidedDirective,
    TuiIcon,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {TuiDataListDropdownManagerDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        TuiDropdownContextDirective,
        TuiDropdownDirective,
        TuiDataListDropdownManagerDirective,
        TuiOptionComponent,
        TuiIcon,
        TuiDropdownPositionSidedDirective,
        TuiDropdownOptionsDirective,
        TuiDataListComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected readonly menuItems = [
        {title: 'View', iconName: '@tui.eye'},
        {title: 'Copy', iconName: '@tui.copy'},
        {title: 'Delete', iconName: '@tui.trash'},
        {title: 'Move', iconName: '@tui.folder'},
    ] as const;

    protected readonly tableData = [
        {character: 'Ross Geller', actor: 'David Schwimmer'},
        {character: 'Chandler Bing', actor: 'Matthew Perry'},
        {character: 'Joey Tribbiani', actor: 'Matt LeBlanc'},
        {character: 'Phoebe Buffay', actor: 'Lisa Kudrow'},
        {character: 'Monica Geller', actor: 'Courteney Cox'},
        {character: 'Rachel Green', actor: 'Jennifer Aniston'},
    ] as const;

    protected readonly tableColumns = Object.keys(this.tableData[0]);

    protected readonly moreOptions = ['Option 1', 'Option 2', 'Option 3'];

    protected getObjectValues = (obj: Record<string, unknown>): unknown[] =>
        Object.values(obj);

    protected printToConsole(action: string, contextInfo: unknown): void {
        this.dialogs.open(`[${action}]: ${JSON.stringify(contextInfo)}`).subscribe();
    }
}
