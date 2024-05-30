import {Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk';

import {TuiTableBarDialogComponent} from './table-bar-dialog.component';
import {TUI_TABLE_BARS} from './table-bars.token';

@Injectable({
    providedIn: 'root',
    useFactory: () => new TuiTableBarsService(TUI_TABLE_BARS, TuiTableBarDialogComponent),
})
export class TuiTableBarsService extends TuiPopoverService<void> {}
