import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import {
    AbstractTuiPortalHostComponent,
    AbstractTuiPortalService,
} from '@taiga-ui/cdk/abstract';
import {TuiPortalService} from '@taiga-ui/cdk/components/portal-host';

const BLANK_CLIENT_RECT: ClientRect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
};

/**
 * Host element for dynamically created portals, for example using {@link TuiDropdownDirective}.
 */
@Component({
    selector: 'tui-dropdown-host',
    templateUrl: './dropdown-host.template.html',
    styleUrls: ['./dropdown-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: AbstractTuiPortalService, useExisting: TuiPortalService}],
})
export class TuiDropdownHostComponent extends AbstractTuiPortalHostComponent {
    @ViewChild('positionFixedOffset')
    private readonly positionFixedOffsetRef?: ElementRef<HTMLDivElement>;

    fixedPositionOffset(): ClientRect {
        return (
            this.positionFixedOffsetRef?.nativeElement.getBoundingClientRect() ||
            BLANK_CLIENT_RECT
        );
    }
}
