export interface TuiEditorGroupOptions {
    readonly groupNodeClass: string;
    readonly groupPointerNodeClass: string;
    readonly draggable: boolean;
    readonly nested: boolean;
    readonly createOnEnter: boolean;
}

export const TUI_EDITOR_GROUP_DEFAULT_OPTIONS: TuiEditorGroupOptions = {
    groupNodeClass: `tui-group-node`,
    groupPointerNodeClass: `tui-group-pointer`,
    nested: true,
    draggable: true,
    createOnEnter: false,
};
