import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiAppBar, TuiAppBarBack, TuiDynamicHeader, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAppBar,
        TuiAppBarBack,
        TuiAvatar,
        TuiCell,
        TuiDynamicHeader,
        TuiHeader,
        TuiTitle,
    ],
    template: `
        <tui-app-bar>
            <button
                title="Back"
                tuiAppBarBack
                tuiSlot="start"
                type="button"
            ></button>
            <div tuiDynamicHeader></div>
        </tui-app-bar>
        <div class="content">
            <div
                *tuiDynamicHeaderAnchor
                tuiHeader="h6"
            >
                <h6 tuiTitle>
                    Title 1
                    <div tuiSubtitle>Subtitle</div>
                </h6>
            </div>
            @for (_ of '-'.repeat(7); track $index) {
                <div tuiCell>
                    <div
                        appearance="primary"
                        tuiAvatar="@tui.star"
                    ></div>
                    <div tuiTitle>
                        Title
                        <div tuiSubtitle>Description</div>
                    </div>
                </div>
            }

            <div
                *tuiDynamicHeaderAnchor
                tuiHeader="h6"
            >
                <h6 tuiTitle>Title 2</h6>
            </div>
            @for (_ of '-'.repeat(15); track $index) {
                <div tuiCell>
                    <div
                        appearance="secondary"
                        tuiAvatar="@tui.heart"
                    ></div>
                    <div tuiTitle>
                        Title
                        <div tuiSubtitle>Description</div>
                    </div>
                </div>
            }

            <div
                *tuiDynamicHeaderAnchor
                tuiHeader="h6"
            >
                <h6 tuiTitle>Title 3 Long title</h6>
            </div>
            @for (_ of '-'.repeat(15); track $index) {
                <div tuiCell>
                    <div
                        appearance="secondary"
                        tuiAvatar="@tui.heart"
                    ></div>
                    <div tuiTitle>
                        Title
                        <div tuiSubtitle>Description</div>
                    </div>
                </div>
            }
        </div>
    `,
    styleUrl: 'component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {}
