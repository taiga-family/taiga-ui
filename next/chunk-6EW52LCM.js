import"./chunk-42JZD6NG.js";var t=`@for (size of sizes; track size; let odd = $odd) {
    <tui-avatar-stack
        class="tui-space_vertical-4"
        [direction]="odd ? 'left' : 'right'"
    >
        @for (name of names; track name) {
            <div
                [round]="odd"
                [size]="size"
                [style.background]="name | tuiAutoColor"
                [tuiAvatar]="name | tuiInitials"
            ></div>
        }
        <div
            tuiAvatar
            [round]="odd"
            [size]="size"
        >
            99+
        </div>
    </tui-avatar-stack>
}
`;export{t as default};
