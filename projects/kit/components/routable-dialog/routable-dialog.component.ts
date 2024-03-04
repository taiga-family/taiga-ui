import {ChangeDetectionStrategy, Component, inject, INJECTOR} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {takeUntil} from 'rxjs';

@Component({
    selector: 'tui-routable-dialog',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiRoutableDialogComponent {
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);
    private readonly initialUrl = this.router.url;

    constructor() {
        inject(TuiDialogService)
            .open(
                new PolymorpheusComponent(
                    this.route.snapshot.data['dialog'],
                    inject(INJECTOR),
                ),
                this.route.snapshot.data['dialogOptions'],
            )
            .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
            .subscribe({
                complete: () => this.onDialogClosing(),
            });
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
