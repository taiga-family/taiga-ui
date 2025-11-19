import {isPlatformBrowser} from '@angular/common';
import {
    Component,
    computed,
    inject,
    Injectable,
    PLATFORM_ID,
    type Signal,
    signal,
} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFormatDatePipe, TuiFormatDateService} from '@taiga-ui/core';
import {formatDistance} from 'date-fns';

@Injectable()
export class FormatService extends TuiFormatDateService {
    private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
    private readonly now = signal(Date.now());
    protected readonly interval = this.browser
        ? setInterval(() => this.now.set(Date.now()), 1000)
        : null;

    public override format(timestamp: number): Signal<string> {
        return computed(() => formatDistance(timestamp, this.now()));
    }
}

@Component({
    imports: [TuiFormatDatePipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TuiFormatDateService,
            useClass: FormatService,
        },
    ],
})
export default class Example {
    protected readonly now = Date.now();
}
