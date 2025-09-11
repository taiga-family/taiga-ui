import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TuiBreakpointService} from '@taiga-ui/core/services';
import {TUI_INPUT_FILE_TEXTS} from '@taiga-ui/kit/tokens';
import {injectContext} from '@taiga-ui/polymorpheus';
import {combineLatest, map, type Observable, of} from 'rxjs';

import {TuiInputFiles} from './input-files.component';

@Component({
    imports: [AsyncPipe, TuiLink],
    template: `
        <a tuiLink>{{ link$ | async }}</a>
        {{ label$ | async }}
    `,
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
})
export class TuiInputFilesContent {
    private readonly breakpoint$ = inject(TuiBreakpointService);
    private readonly text$ = inject(TUI_INPUT_FILE_TEXTS);
    private readonly context = injectContext<TuiContext<boolean>>();
    private readonly component = inject(TuiInputFiles);

    protected get link$(): Observable<string> {
        return this.computeLink$(
            this.context.$implicit,
            !!this.component.input?.input.multiple,
        );
    }

    protected get label$(): Observable<string> {
        return this.computeLabel$(
            this.context.$implicit,
            !!this.component.input?.input.multiple,
        );
    }

    @tuiPure
    private computeLink$(fileDragged: boolean, multiple: boolean): Observable<string> {
        return fileDragged
            ? of('')
            : this.text$.pipe(
                  map((t) => (multiple ? t.defaultLinkMultiple : t.defaultLinkSingle)),
              );
    }

    @tuiPure
    private computeLabel$(fileDragged: boolean, multiple: boolean): Observable<string> {
        return fileDragged
            ? combineLatest([this.breakpoint$, this.text$]).pipe(
                  map(([breakpoint, text]) => {
                      if (breakpoint === 'mobile') {
                          return '';
                      }

                      return multiple ? text.dropMultiple : text.drop;
                  }),
              )
            : combineLatest([this.breakpoint$, this.text$]).pipe(
                  map(([breakpoint, text]) => {
                      if (breakpoint === 'mobile') {
                          return '';
                      }

                      return multiple
                          ? text.defaultLabelMultiple
                          : text.defaultLabelSingle;
                  }),
              );
    }
}
