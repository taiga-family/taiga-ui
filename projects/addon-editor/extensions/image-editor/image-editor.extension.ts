import {Injector} from '@angular/core';
import {TuiNodeViewRenderer} from '@taiga-ui/addon-editor/extensions/tiptap-node-view';
import {tuiIsPresent} from '@taiga-ui/cdk';
import {
    Attribute,
    mergeAttributes,
    Node,
    NodeViewRenderer,
    RawCommands,
} from '@tiptap/core';
import {DOMOutputSpec, NodeSpec} from 'prosemirror-model';

import {TuiImageEditorComponent} from './image-editor.component';
import type {TuiEditableImage} from './image-editor.options';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        imageEditor: {
            setEditableImage: (imageConfigs: TuiEditableImage) => ReturnType;
        };
    }
}

const IMAGE_EDITOR_PARSE_META = [{tag: `img[data-type="image-editor"]`}];

const DEFAULT_IMAGE_ATTRS = {
    src: {
        default: ``,
        keepOnSplit: false,
    },
    width: {
        default: 300,
        keepOnSplit: false,
    },
    alt: {
        default: ``,
        keepOnSplit: false,
    },
    title: {
        default: ``,
        keepOnSplit: false,
    },
};

/**
 * @deprecated: use {@link tuiCreateImageEditorExtension}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function createImageEditorExtension<T, K>(
    injector: Injector,
    {draggable}: Partial<{draggable: boolean}> = {},
): Node<T, K> {
    const enableDraggable = tuiIsPresent(draggable) ? draggable : true;

    return Node.create({
        name: `imageEditor`,
        group: `block`,
        atom: true,
        draggable: enableDraggable,

        parseHTML(): NodeSpec['parseDOM'] {
            return IMAGE_EDITOR_PARSE_META;
        },

        addAttributes(): Record<keyof TuiEditableImage, Attribute> {
            return {
                ...DEFAULT_IMAGE_ATTRS,
                draggable: {
                    default: enableDraggable ? `` : null,
                    keepOnSplit: false,
                },
            };
        },

        renderHTML({HTMLAttributes}: Record<string, any>): DOMOutputSpec {
            return [
                `img`,
                mergeAttributes(HTMLAttributes, {'data-type': `image-editor`}),
            ];
        },

        addNodeView(): NodeViewRenderer {
            return TuiNodeViewRenderer(TuiImageEditorComponent, {injector});
        },

        addCommands(): Partial<RawCommands> {
            return {
                setEditableImage:
                    attrs =>
                    ({commands}) =>
                        commands.insertContent({
                            type: this.name,
                            attrs,
                        }),
            };
        },
    });
}

export function tuiCreateImageEditorExtension<T, K>({
    injector,
    draggable,
}: {
    injector: Injector;
    draggable?: boolean;
}): Node {
    return createImageEditorExtension<T, K>(injector, {draggable});
}
