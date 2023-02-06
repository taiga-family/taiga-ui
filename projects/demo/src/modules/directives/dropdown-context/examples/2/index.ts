import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialogService} from '@taiga-ui/core';

@Component({
    selector: 'tui-dropdown-context-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiDropdownContextExample2 {
    readonly menuItems = [
        {title: 'View', iconName: 'tuiIconEyeOpen'},
        {title: 'Copy', iconName: 'tuiIconCopy'},
        {title: 'Delete', iconName: 'tuiIconTrash'},
        {title: 'Move', iconName: 'tuiIconFolder'},
    ] as const;

    readonly tableData = [
        {character: 'Ross Geller', actor: 'David Schwimmer'},
        {character: 'Chandler Bing', actor: 'Matthew Perry'},
        {character: 'Joey Tribbiani', actor: 'Matt LeBlanc'},
        {character: 'Phoebe Buffay', actor: 'Lisa Kudrow'},
        {character: 'Monica Geller', actor: 'Courteney Cox'},
        {character: 'Rachel Green', actor: 'Jennifer Aniston'},
    ] as const;

    readonly tableColumns = Object.keys(this.tableData[0]);

    readonly moreOptions = ['Option 1', 'Option 2', 'Option 3'];

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    ) {}

    getObjectValues = (obj: Record<string, unknown>): unknown[] => Object.values(obj);

    printToConsole(action: string, contextInfo: unknown): void {
        this.dialogService
            .open(`[${action}]: ${JSON.stringify(contextInfo)}`)
            .subscribe();
    }
}
