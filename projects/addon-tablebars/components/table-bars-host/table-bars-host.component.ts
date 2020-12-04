import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TUI_CLOSE_WORD, TuiBrightness, tuiSlideInTop} from '@taiga-ui/core';
import {BehaviorSubject, Subscription} from 'rxjs';
import {TableBar} from '../../classes/table-bar';
import {TuiTableBarsService} from '../../services/table-bars.service';

// TODO: Accessibility
// TODO: refactor items service host logic
@Component({
    selector: 'tui-table-bars-host',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './table-bars-host.template.html',
    styleUrls: ['./table-bars-host.style.less'],
    animations: [tuiSlideInTop],
})
export class TuiTableBarsHostComponent {
    readonly items$ = new BehaviorSubject<ReadonlyArray<TableBar>>([]);

    private readonly subscription: Subscription;

    constructor(
        @Inject(TuiTableBarsService) service: TuiTableBarsService,
        @Inject(TUI_CLOSE_WORD) readonly closeWord: string,
    ) {
        this.subscription = service.open$.subscribe(item => {
            this.addItem(item);
        });
        this.subscription.add(
            service.close$.subscribe(item => {
                this.removeItem(item);
            }),
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private removeItem(itemToRemove: TableBar) {
        const {value} = this.items$;

        if (value.indexOf(itemToRemove) !== -1) {
            this.items$.next(value.filter(item => item !== itemToRemove));
        }
    }

    private addItem(item: TableBar) {
        const {value} = this.items$;

        if (value.indexOf(item) === -1) {
            this.items$.next(this.items$.value.concat(item));
        }
    }

    getMode(mode: TuiBrightness): TuiBrightness | null {
        return mode === 'dark' ? TuiBrightness.Light : null;
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
