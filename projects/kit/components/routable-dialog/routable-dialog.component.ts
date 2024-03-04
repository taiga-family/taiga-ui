import {ChangeDetectionStrategy, Component, Inject, Injector, Self} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
    private readonly initialUrl = this.router.url;

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
            .subscribe({complete: () => this.onDialogClosing()});
    }

    private get lazyLoadedBackUrl(): string {
        return (this.route.parent?.snapshot.url || []).map(() => '..').join('/');
    }

    private onDialogClosing(): void {
        if (this.initialUrl === this.router.url) {
            this.navigateToParent();
        }
    }

    private navigateToParent(): void {
        const backUrl = this.route.snapshot.data['isLazy']
            ? this.lazyLoadedBackUrl
            : this.route.snapshot.data['backUrl'];

        void this.router.navigate([backUrl], {
            relativeTo: this.route,
        });
    }
}
