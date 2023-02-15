import {NodeConfig} from '@tiptap/core';
import {Plugin} from '@tiptap/pm/state';
import {EditorView} from 'prosemirror-view';

export const IMAGE_CLIPBOARD_PASTE_EXTENSION: Partial<NodeConfig<unknown, unknown>> = {
    addProseMirrorPlugins() {
        return [
            new Plugin({
                props: {
                    handleDOMEvents: {
                        paste: (view: EditorView, event: ClipboardEvent) => {
                            const url = event.clipboardData?.getData(`text/plain`) ?? ``;
                            const isImage =
                                /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(
                                    url,
                                );

                            if (isImage) {
                                const node = view.state.schema.nodes.imageEditor.create({
                                    src: url,
                                });

                                const transaction =
                                    view.state.tr.replaceSelectionWith(node);

                                /**
                                 * @note:
                                 * workaround for `Applying a mismatched transaction`
                                 */
                                setTimeout(() => view.dispatch(transaction));

                                event.preventDefault();
                            }
                        },
                    },
                },
            }),
        ];
    },
};
