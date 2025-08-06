import {
    type ComponentRef,
    Directive,
    inject,
    INJECTOR,
    Input,
    type OnDestroy,
    TemplateRef,
} from '@angular/core';
import {TuiPopupService} from '@taiga-ui/core/directives/popup';
import {type TuiHorizontalDirection} from '@taiga-ui/core/types';
import {PolymorpheusComponent, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiSidebarComponent} from './sidebar.component';

/**
 * @deprecated use {@link TuiDrawer} instead
 */
@Directive({
    standalone: true,
    selector: '[tuiSidebar]',
})
export class TuiSidebarDirective<T = Record<string, unknown>>
    extends PolymorpheusTemplate<T>
    implements OnDestroy
{
    private readonly injector = inject(INJECTOR);
    private readonly service = inject(TuiPopupService);

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

        this.sidebarRef = this.service.add(this.component);
        this.sidebarRef.changeDetectorRef.detectChanges();
    }

    private hide(): void {
        if (this.sidebarRef === null) {
            return;
        }

        this.service.remove(this.sidebarRef);
        this.sidebarRef = null;
    }
}
