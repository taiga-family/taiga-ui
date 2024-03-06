import type {OnChanges} from '@angular/core';
import {Directive, inject} from '@angular/core';
import {tuiIfMap} from '@taiga-ui/cdk/observables';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {TuiPopoverService} from '@taiga-ui/cdk/services';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {distinctUntilChanged, endWith, ignoreElements, share, Subject} from 'rxjs';

@Directive()
export abstract class TuiPopoverDirective<T>
    extends PolymorpheusTemplate<TuiPopover<T, void>>
    implements OnChanges
{
    private readonly service = inject(TuiPopoverService<T>);
    private readonly open$ = new Subject<boolean>();

    protected options: Partial<T> = {};
    protected open = false;

    protected readonly openChange = this.open$.pipe(
        distinctUntilChanged(),
        tuiIfMap(() =>
            this.service.open(this, this.options).pipe(ignoreElements(), endWith(false)),
        ),
        share(),
    );

    public ngOnChanges(): void {
        this.open$.next(this.open);
    }
}
