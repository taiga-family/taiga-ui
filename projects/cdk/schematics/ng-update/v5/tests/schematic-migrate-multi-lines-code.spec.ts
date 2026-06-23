import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update full starter page template', () => {
    it(
        'migrates a realistic page with legacy controls, dropdown, editor and push',
        migrate({
            template: /* HTML */ `
                <h2 class="title">
                    Dozens of
                    <br />
                    components
                </h2>
                <tui-input-tag
                    class="input-tag tui-space_vertical-10"
                    [tuiHintContent]="hint"
                    [tuiTextfieldLabelOutside]="true"
                    [(ngModel)]="tags"
                />

                <ng-template #hint>
                    <span
                        [innerHtml]="purify('Customizable for <b>any use</b> case')"
                    ></span>
                </ng-template>

                <div class="flex">
                    @let breakpoint = breakpoint$ | async;

                    <div class="date">
                        @if (breakpoint === 'mobile') {
                        <tui-input-date
                            required
                            [formControl]="control"
                            (keydown.capture.prevent)="openMobileCalendar()"
                            (mousedown.capture.stop)="openMobileCalendar()"
                        >
                            Choose date
                        </tui-input-date>
                        } @else {
                        <tui-input-date
                            required
                            [formControl]="control"
                            (click.capture.stop)="(0)"
                            (keydown.capture.stop)="(0)"
                            (mousedown.capture.stop)="(0)"
                        >
                            Choose date
                        </tui-input-date>
                        <tui-calendar
                            class="calendar"
                            [tuiDropdownOpen]="false"
                            [value]="date"
                            (dayClick)="onDay($event)"
                            (event.prevent.silent)="(0)"
                        />
                        }
                    </div>

                    <div>
                        @for (label of labels; track $index) {
                        <label tuiLabel>
                            <input
                                size="m"
                                tuiCheckbox
                                type="checkbox"
                                class="tui-space_bottom-4"
                                [ngModel]="label === labels[1]"
                            />
                            {{ label }}
                        </label>
                        }
                    </div>

                    <div class="controls">
                        <label
                            tuiPlatform="ios"
                            class="label"
                        >
                            <input
                                size="m"
                                tuiSwitch
                                type="checkbox"
                                class="tui-space_right-3"
                                [showIcons]="true"
                                [(ngModel)]="notification"
                            />
                            Push notification
                        </label>
                        <input
                            size="m"
                            step="any"
                            tuiSlider
                            type="range"
                            class="tui-space_vertical-6"
                            [max]="140"
                            [(ngModel)]="slider"
                        />
                        <div class="icons">
                            <button
                                appearance=""
                                iconStart="@tui.volume-x"
                                title="Mute speaker"
                                tuiIconButton
                                type="button"
                                class="button"
                                [style.border-radius.%]="100"
                                (click)="slider = 0"
                            ></button>
                            <button
                                appearance=""
                                iconStart="@tui.mic-off"
                                title="Mute microphone"
                                tuiIconButton
                                type="button"
                                class="button"
                                [style.border-radius.%]="100"
                            ></button>
                            <button
                                appearance=""
                                iconStart="@tui.phone-forwarded"
                                title="Forward call"
                                tuiIconButton
                                type="button"
                                class="error"
                                [style.border-radius.%]="100"
                                (click)="call(callTemplate)"
                            ></button>
                        </div>
                    </div>
                </div>

                <tui-editor
                    [tools]="builtInTools"
                    [(ngModel)]="editor"
                >
                    Typing...
                </tui-editor>

                <ng-template
                    #callTemplate
                    let-observer
                >
                    <div class="call gradient-border">
                        <div class="person">
                            <img
                                alt="author"
                                loading="lazy"
                                src="https://avatars.githubusercontent.com/u/11832552"
                            />
                            <h3>Aleksandr Inkin</h3>
                        </div>

                        <div class="buttons">
                            <button
                                appearance="custom"
                                iconEnd="@tui.phone"
                                size="m"
                                title="missed"
                                tuiIconButton
                                type="button"
                                class="missed"
                                (click)="observer.complete()"
                            ></button>
                            <button
                                appearance="custom"
                                iconEnd="@tui.phone"
                                size="m"
                                title="income"
                                tuiIconButton
                                type="button"
                                class="income"
                                (click)="observer.complete()"
                            ></button>
                        </div>
                    </div>
                </ng-template>

                <tui-push
                    *tuiPush="notification"
                    heading="Indiana Jones"
                    type="Dr. Henry Walton Jones, Jr."
                    (close)="toggle(false)"
                >
                    <tui-icon icon="@tui.message-square" />
                    I have a bad feeling about this...
                    <button
                        tuiButton
                        type="button"
                        (click)="toggle(false)"
                    >
                        Fortune
                    </button>
                    <button
                        tuiLink
                        type="button"
                        (click)="toggle(false)"
                    >
                        Glory
                    </button>
                </tui-push>

                <br />

                <tui-accordion>
                    @for (item of questions; track $index) {
                    <tui-accordion-item [open]="true">
                        {{ item.question }}
                        <ng-template tuiAccordionItemContent>
                            {{ item.answer }}
                        </ng-template>
                    </tui-accordion-item>
                    }
                </tui-accordion>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
