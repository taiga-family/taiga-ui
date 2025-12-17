import"./chunk-B4AJQJMI.js";var a=`<tui-doc-page
    header="Toast"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        @for (example of examples; track $index) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [fullsize]="true"
                [heading]="example"
                [id]="example | tuiKebab"
            >
                <ng-template #description>
                    @switch ($index) {
                        @case (0) {
                            Using inline with various content
                        }
                        @case (1) {
                            Custom styles and more component
                        }
                        @case (2) {
                            Showing toast as notification on top of the screen. By default 2 toasts can be shown
                            simultaneously on desktop and 1 on mobile, the rest are queued. This number is controlled by
                            <code>TUI_TOAST_CONCURRENCY</code>
                            token
                        }
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <button
                tuiButton
                type="button"
                (click)="toast.set(true)"
            >
                Show toast
            </button>
            <ng-template
                [tuiToast]="toast()"
                [tuiToastOptions]="{appearance: appearance, autoClose: autoClose, closable: closable}"
                (tuiToastChange)="toast.set($event)"
            >
                <div tuiToast>I am a toast</div>
            </ng-template>
        </tui-doc-demo>

        <table tuiDocAPI>
            <tr
                name="[appearance]"
                tuiDocAPIItem
                type="string"
                [(value)]="appearance"
            >
                Appearance of a toast
            </tr>
            <tr
                name="[autoClose]"
                tuiDocAPIItem
                type="number"
                [items]="autoCloseVariants"
                [(value)]="autoClose"
            >
                Automatic close timeout, 0 for a permanent toast
            </tr>
            <tr
                name="[closable]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="closable"
            >
                Show close button on desktop and close on swipe on mobile
            </tr>
            <tr
                name="[data]"
                tuiDocAPIItem
                type="I"
            >
                Arbitrary data passed to the toast, used as icon for string content passed to
                <code>TuiToastService</code>
            </tr>
        </table>
    </ng-template>

    <tui-setup *pageTab />
</tui-doc-page>
`;export{a as default};
