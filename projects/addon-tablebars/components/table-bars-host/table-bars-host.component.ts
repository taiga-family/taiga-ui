import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiBrightness, tuiSlideInTop} from '@taiga-ui/core';
import {TUI_CLOSE_WORD} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {TableBar} from '../../classes/table-bar';
import {TuiTableBarsService} from '../../services/table-bars.service';

// TODO: Accessibility
@Component({
    selector: 'tui-table-bars-host',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './table-bars-host.template.html',
    styleUrls: ['./table-bars-host.style.less'],
    animations: [tuiSlideInTop],
})
export class TuiTableBarsHostComponent {
    constructor(
        @Inject(TuiTableBarsService) readonly service: TuiTableBarsService,
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
    ) {}

    getMode(mode: TuiBrightness): TuiBrightness | null {
        return mode === 'onLight' ? 'onDark' : null;
    }

    onCloseClick(itemToRemove: TableBar) {
        itemToRemove.close();
    }

    getItemContext(item: TableBar): TuiContextWithImplicit<() => void> {
        return {
            $implicit: () => item.close(),
        };
    }
}
