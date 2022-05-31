import {Injector} from '@angular/core';
import {TuiNodeViewRenderer} from '@taiga-ui/addon-editor/extensions/tiptap-node-view';
import {
    Attribute,
    mergeAttributes,
    Node,
    NodeViewRenderer,
    RawCommands,
} from '@tiptap/core';
import {DOMOutputSpec, NodeSpec} from 'prosemirror-model';

import {TuiImageEditorComponent} from './image-editor.component';

export interface TuiEditableImage {
    src: string;
    width?: number;
    alt?: string;
    title?: string;
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        imageEditor: {
            setEditableImage: (imageConfigs: TuiEditableImage) => ReturnType;
        };
    }
}

const IMAGE_EDITOR_PARSE_META = [{tag: 'img[data-type="image-editor"]'}];

const DEFAULT_IMAGE_ATTRS = {
    src: {
        default: '',
        keepOnSplit: false,
    },
    width: {
        default: 300,
        keepOnSplit: false,
    },
    alt: {
        default: '',
        keepOnSplit: false,
    },
    title: {
        default: '',
        keepOnSplit: false,
    },
};

export const createImageEditorExtension = (injector: Injector): Node => {
    return Node.create({
        name: 'imageEditor',
        group: 'block',
        atom: true,
        draggable: true,

        parseHTML(): NodeSpec['parseDOM'] {
            return IMAGE_EDITOR_PARSE_META;
        },

        addAttributes(): Record<keyof TuiEditableImage, Attribute> {
            return DEFAULT_IMAGE_ATTRS;
        },

        renderHTML({HTMLAttributes}: Record<string, any>): DOMOutputSpec {
            return [
                'img',
                mergeAttributes(HTMLAttributes, {'data-type': 'image-editor'}),
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
};
