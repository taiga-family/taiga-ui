import type {ComponentRef, OnDestroy} from '@angular/core';
import {Directive, inject, INJECTOR, Input, TemplateRef} from '@angular/core';
import type {TuiHorizontalDirection} from '@taiga-ui/core';
import {TuiDropdownService} from '@taiga-ui/core';
import {PolymorpheusComponent, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiSidebarComponent} from './sidebar.component';

@Directive({
    selector: '[tuiSidebar]',
})
export class TuiSidebarDirective<T = Record<string, unknown>>
    extends PolymorpheusTemplate<T>
    implements OnDestroy
{
    private readonly injector = inject(INJECTOR);
    private readonly portalService = inject(TuiDropdownService);

    private readonly component = new PolymorpheusComponent(
        TuiSidebarComponent,
        this.injector,
    );

    private sidebarRef: ComponentRef<TuiSidebarComponent> | null = null;

    @Input('tuiSidebarDirection')
    public direction: TuiHorizontalDirection = 'left';

    @Input('tuiSidebarAutoWidth')
    public autoWidth = false;

    public readonly content = inject(TemplateRef<T>);

    @Input()
    public set tuiSidebar(open: boolean) {
        if (open) {
            this.show();
        } else {
            this.hide();
        }
    }

    public ngOnDestroy(): void {
        this.hide();
    }

    private show(): void {
        if (this.sidebarRef !== null) {
            return;
        }

        this.sidebarRef = this.portalService.add(this.component);
        this.sidebarRef.changeDetectorRef.detectChanges();
    }

    private hide(): void {
        if (this.sidebarRef === null) {
            return;
        }

        this.portalService.remove(this.sidebarRef);
        this.sidebarRef = null;
    }
}
