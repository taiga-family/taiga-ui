import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type TuiPortalContext} from '@taiga-ui/cdk/portals';
import {TuiRoot} from '@taiga-ui/core/components';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

export type TuiPopoutOptions =
    | {
          readonly title: string;
          readonly features: {
              width?: number;
              height?: number;
              disallowReturnToOpener?: boolean;
              preferInitialWindowPlacement?: boolean;
          };
          readonly pip: true;
      }
    | {
          readonly title: string;
          readonly features: Record<any, any>;
          readonly pip: false;
      };

@Component({
    imports: [PolymorpheusOutlet, TuiRoot],
    template: `
        <tui-root>
            <ng-container *polymorpheusOutlet="context.content as text; context: context">
                {{ text }}
            </ng-container>
        </tui-root>
    `,
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
})
export class TuiPopoutComponent {
    protected readonly context = injectContext<TuiPortalContext<TuiPopoutOptions>>();
}
