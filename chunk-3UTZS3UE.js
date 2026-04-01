import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="Push"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>Notifications in style of native browser push</p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-push
                [heading]="heading"
                [lines]="lines"
                [timestamp]="timestamp"
                [type]="type"
                (close)="close.emitEvent($event)"
            >
                <img
                    alt=""
                    src="assets/images/roy.jpg"
                />
                <tui-icon icon="@tui.settings" />
                I've seen things you people wouldn't believe. Attack ships on fire off The Shoulder Of Orion. I watched
                C-Beams glitter in the dark near The Tannhauser Gate. All those moments will be lost in time, like tears
                in rain.
                <button
                    tuiButton
                    type="button"
                >
                    I want more life
                </button>
                <button
                    tuiLink
                    type="button"
                >
                    Time to die
                </button>
            </tui-push>
        </tui-doc-demo>

        <h3>Inputs/Outputs</h3>
        <table tuiDocAPI>
            <tr
                name="[heading]"
                tuiDocAPIItem
                type="string"
                [(value)]="heading"
            >
                Heading of the push
            </tr>
            <tr
                name="[type]"
                tuiDocAPIItem
                type="string"
                [(value)]="type"
            >
                Small text near icon, typically, category of the message
            </tr>
            <tr
                name="[lines]"
                tuiDocAPIItem
                type="number"
                [(value)]="lines"
            >
                A number of visible lines
            </tr>
            <tr
                name="[timestamp]"
                tuiDocAPIItem
                type="number | string"
                [items]="timestampVars"
                [(value)]="timestamp"
            >
                Timestamp of the arrival. Formatted with
                <a
                    href="https://angular.dev/api/common/DatePipe"
                    tuiLink
                >
                    <code>DatePipe</code>
                </a>
                if the number is passed.
            </tr>
            <tr
                #close
                name="(close)"
                tuiDocAPIItem
                type="void"
            >
                Output for close button clicks. If you do not listen to this output, close button is hidden.
            </tr>
        </table>

        <h3>Content slots</h3>
        <table tuiDocAPI>
            <tr
                name="img"
                tuiDocAPIItem
                type="Image"
            >
                Image at the top (360\xD7170px)
            </tr>
            <tr
                name="tui-icon"
                tuiDocAPIItem
                type="Icon"
            >
                Icon in the corner
            </tr>
            <tr
                name="tuiLink"
                tuiDocAPIItem
                type="Link/Button"
            >
                Single button
            </tr>
            <tr
                name="tuiButton"
                tuiDocAPIItem
                type="Link/Button"
            >
                Additional button when it requires two
            </tr>
            <tr
                name="ng-content"
                tuiDocAPIItem
                type="Arbitrary"
            >
                The rest of the content is that push body.
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
