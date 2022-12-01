import {isPlatformServer} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    OnInit,
    PLATFORM_ID,
    Self,
} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiSvgService} from '@taiga-ui/core/services';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: `tui-svg-defs-host`,
    templateUrl: `./svg-defs-host.template.html`,
    styleUrls: [`./svg-defs-host.style.less`],
    providers: [TuiDestroyService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSvgDefsHostComponent implements OnInit {
    items!: IterableIterator<SafeHtml>;
    isBrowser = true;

    constructor(
        @Inject(TuiSvgService) private readonly svgService: TuiSvgService,
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        @Self()
        @Inject(TuiDestroyService)
        private readonly destroy$: TuiDestroyService,
        @Inject(PLATFORM_ID) platformId: Record<string, unknown>,
    ) {
        this.isBrowser = !isPlatformServer(platformId);
    }

    // @bad TODO: Looks like it could be async piped but it was probably written like that for a reason
    ngOnInit(): void {
        this.svgService.items$.pipe(takeUntil(this.destroy$)).subscribe(defsMap => {
            this.items = defsMap.values();
            this.changeDetectorRef.detectChanges();
        });
    }
}
