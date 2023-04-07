import {ChangeDetectionStrategy, Component, Inject, Injector, Self} from '@angular/core';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-routable-dialog',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiRoutableDialogComponent {
    constructor(
        @Inject(ActivatedRoute) private readonly route: ActivatedRoute,
        @Inject(Router) private readonly router: Router,
        @Inject(TuiDialogService) dialogs: TuiDialogService,
        @Inject(Injector) injector: Injector,
        @Self() @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    ) {
        dialogs
            .open(
                new PolymorpheusComponent(this.route.snapshot.data['dialog'], injector),
                this.route.snapshot.data['dialogOptions'],
            )
            .pipe(takeUntil(destroy$))
            .subscribe({
                complete: () => this.navigateToParent(),
            });
    }

    private navigateToParent(): void {
        const isLazy = this.route.snapshot.data['isLazy'];

        const backUrl = isLazy
            ? this.getLazyLoadedBackUrl()
            : this.route.snapshot.data['backUrl'];

        void this.router.navigate([backUrl], {
            relativeTo: this.route,
        });
    }

    private getLazyLoadedBackUrl(): string {
        const urlSegments: UrlSegment[] = this.route.parent?.snapshot.url || [];

        return urlSegments.map(() => '..').join('/');
    }
}
