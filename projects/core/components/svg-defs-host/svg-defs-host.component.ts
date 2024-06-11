import {isPlatformBrowser, NgForOf, NgIf} from '@angular/common';
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

// TODO: Move to legacy in 4.0
@Component({
    standalone: true,
    selector: 'tui-svg-defs-host',
    imports: [NgForOf, NgIf],
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

    public ngOnInit(): void {
        this.svgService.items$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(defsMap => {
                this.items = defsMap.values();
                this.cdr.detectChanges();
            });
    }
}
