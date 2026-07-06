import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    tuiSheetDialogOptionsProvider,
    TuiSheetDialogService,
} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    // `themeColor` sets the `<meta name="theme-color">` (mobile address bar)
    // while the sheet is open, then reverts on close. Scope the service so the
    // option applies only to sheets opened from here; provide it once at the
    // application root to make it the default everywhere. Pass `null` to opt out.
    providers: [
        TuiSheetDialogService,
        tuiSheetDialogOptionsProvider({themeColor: '#ff1493'}),
    ],
})
export default class Example {
    private readonly service = inject(TuiSheetDialogService);

    protected onClick(): void {
        this.service
            .open(
                'On mobile, the browser address bar turns <b>pink</b> while this sheet is open.',
                {label: 'Address bar color'},
            )
            .subscribe();
    }
}
