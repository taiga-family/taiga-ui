import {Injector} from '@angular/core';
import {TuiNodeView} from '@taiga-ui/addon-editor/extensions/tiptap-node-view';
import {
    Attribute,
    mergeAttributes,
    Node,
    NodeViewRenderer,
    NodeViewRendererProps,
    RawCommands,
} from '@tiptap/core';
import {DOMOutputSpec, NodeSpec} from 'prosemirror-model';

import {TuiIframeEditorComponent} from './iframe-editor.component';
import {TuiEditableIframe} from './iframe-editor.options';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        iframe: {
            setIframe: (options: TuiEditableIframe) => ReturnType;
        };
    }
}

export const createIframeEditorExtension = (injector: Injector): Node => {
    return Node.create({
        name: `iframe`,
        group: `block`,
        atom: true,
        draggable: false,

        parseHTML(): NodeSpec['parseDOM'] {
            return [{tag: `iframe[data-type="iframe-editor"]`}];
        },

        addAttributes(): Record<keyof TuiEditableIframe, Attribute> {
            return {
                src: {
                    default: null,
                    keepOnSplit: false,
                    parseHTML: element => element.getAttribute(`src`),
                },
                frameborder: {
                    default: 0,
                    keepOnSplit: false,
                    parseHTML: element => element.getAttribute(`frameborder`),
                },
                width: {
                    default: `100%`,
                    keepOnSplit: false,
                    parseHTML: element => element.getAttribute(`width`),
                },
                height: {
                    default: null,
                    keepOnSplit: false,
                    parseHTML: element => element.getAttribute(`height`),
                },
                allowfullscreen: {
                    keepOnSplit: false,
                    default: this.options.allowFullscreen,
                    parseHTML: element => element.getAttribute(`allowfullscreen`),
                },
            };
        },

        renderHTML({HTMLAttributes}: Record<string, any>): DOMOutputSpec {
            return [
                `iframe`,
                mergeAttributes(HTMLAttributes, {'data-type': `iframe-editor`}),
            ];
        },

        addNodeView(): NodeViewRenderer {
            return (props: NodeViewRendererProps) =>
                new TuiNodeView(TuiIframeEditorComponent, props, {injector});
        },

        addCommands(): Partial<RawCommands> {
            return {
                setIframe:
                    attrs =>
                    ({commands, state}) => {
                        const prevLine = state.selection.anchor;

                        commands.enter();
                        commands.setTextSelection(prevLine);

                        commands.insertContent({
                            type: this.name,
                            attrs,
                        });

                        commands.setTextSelection(state.selection.anchor);

                        return true;
                    },
            };
        },
    });
};
