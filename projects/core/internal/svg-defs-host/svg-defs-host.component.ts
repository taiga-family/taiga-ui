import {isPlatformBrowser} from '@angular/common';
import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    PLATFORM_ID,
} from '@angular/core';
import type {SafeHtml} from '@angular/platform-browser';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiSvgService} from '@taiga-ui/core/services';
import {takeUntil} from 'rxjs';

@Component({
    selector: 'tui-svg-defs-host',
    templateUrl: './svg-defs-host.template.html',
    styleUrls: ['./svg-defs-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiSvgDefsHostComponent implements OnInit {
    private readonly svgService = inject(TuiSvgService);
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    protected readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    protected items!: IterableIterator<SafeHtml>;

    // @bad TODO: Looks like it could be async piped but it was probably written like that for a reason
    public ngOnInit(): void {
        this.svgService.items$.pipe(takeUntil(this.destroy$)).subscribe(defsMap => {
            this.items = defsMap.values();
            this.cdr.detectChanges();
        });
    }
}
