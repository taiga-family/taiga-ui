import {isPlatformBrowser} from '@angular/common';
import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    inject,
    PLATFORM_ID,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {SafeHtml} from '@angular/platform-browser';
import {TuiSvgService} from '@taiga-ui/core/services';

@Component({
    selector: 'tui-svg-defs-host',
    templateUrl: './svg-defs-host.template.html',
    styleUrls: ['./svg-defs-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSvgDefsHostComponent implements OnInit {
    private readonly svgService = inject(TuiSvgService);
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly destroyRef = inject(DestroyRef);
    protected readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    protected items!: IterableIterator<SafeHtml>;

    // @bad TODO: Looks like it could be async piped but it was probably written like that for a reason
    public ngOnInit(): void {
        this.svgService.items$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(defsMap => {
                this.items = defsMap.values();
                this.cdr.detectChanges();
            });
    }
}
