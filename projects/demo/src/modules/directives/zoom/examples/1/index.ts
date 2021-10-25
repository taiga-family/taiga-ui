import {Component, Inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {clamp, TuiZoom} from '@taiga-ui/cdk';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-zoom-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiZoomExample1 {
    readonly scale$ = new BehaviorSubject(1);

    readonly transform$ = this.scale$.pipe(
        map(scale => this.sanitizer.bypassSecurityTrustStyle(`scale(${scale})`)),
    );

    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}

    onZoom(zoom: TuiZoom) {
        this.scale$.next(clamp(this.currentScale + zoom.delta, 0.2, 3));
    }

    private get currentScale(): number {
        return this.scale$.value;
    }
}
