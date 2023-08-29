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
        {iconName: 'tuiIconEye', title: 'View'},
        {iconName: 'tuiIconCopy', title: 'Copy'},
        {iconName: 'tuiIconTrash', title: 'Delete'},
        {iconName: 'tuiIconFolder', title: 'Move'},
    ] as const;

    readonly tableData = [
        {actor: 'David Schwimmer', character: 'Ross Geller'},
        {actor: 'Matthew Perry', character: 'Chandler Bing'},
        {actor: 'Matt LeBlanc', character: 'Joey Tribbiani'},
        {actor: 'Lisa Kudrow', character: 'Phoebe Buffay'},
        {actor: 'Courteney Cox', character: 'Monica Geller'},
        {actor: 'Jennifer Aniston', character: 'Rachel Green'},
    ] as const;

    readonly tableColumns = Object.keys(this.tableData[0]);

    readonly moreOptions = ['Option 1', 'Option 2', 'Option 3'];

    constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}

    getObjectValues = (obj: Record<string, unknown>): unknown[] => Object.values(obj);

    printToConsole(action: string, contextInfo: unknown): void {
        this.dialogs.open(`[${action}]: ${JSON.stringify(contextInfo)}`).subscribe();
    }
}
