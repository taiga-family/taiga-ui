/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as html from '../ml_parser/ast';
import { ParseTreeResult } from '../ml_parser/parser';
import * as i18n from './i18n_ast';
import { createI18nMessageFactory } from './i18n_parser';
import { I18nError } from './parse_util';
const _I18N_ATTR = 'i18n';
const _I18N_ATTR_PREFIX = 'i18n-';
const _I18N_COMMENT_PREFIX_REGEXP = /^i18n:?/;
const MEANING_SEPARATOR = '|';
const ID_SEPARATOR = '@@';
let i18nCommentsWarned = false;
/**
 * Extract translatable messages from an html AST
 */
export function extractMessages(nodes, interpolationConfig, implicitTags, implicitAttrs) {
    const visitor = new _Visitor(implicitTags, implicitAttrs);
    return visitor.extract(nodes, interpolationConfig);
}
export function mergeTranslations(nodes, translations, interpolationConfig, implicitTags, implicitAttrs) {
    const visitor = new _Visitor(implicitTags, implicitAttrs);
    return visitor.merge(nodes, translations, interpolationConfig);
}
export class ExtractionResult {
    constructor(messages, errors) {
        this.messages = messages;
        this.errors = errors;
    }
}
var _VisitorMode;
(function (_VisitorMode) {
    _VisitorMode[_VisitorMode["Extract"] = 0] = "Extract";
    _VisitorMode[_VisitorMode["Merge"] = 1] = "Merge";
})(_VisitorMode || (_VisitorMode = {}));
/**
 * This Visitor is used:
 * 1. to extract all the translatable strings from an html AST (see `extract()`),
 * 2. to replace the translatable strings with the actual translations (see `merge()`)
 *
 * @internal
 */
class _Visitor {
    constructor(_implicitTags, _implicitAttrs) {
        this._implicitTags = _implicitTags;
        this._implicitAttrs = _implicitAttrs;
    }
    /**
     * Extracts the messages from the tree
     */
    extract(nodes, interpolationConfig) {
        this._init(_VisitorMode.Extract, interpolationConfig);
        nodes.forEach(node => node.visit(this, null));
        if (this._inI18nBlock) {
            this._reportError(nodes[nodes.length - 1], 'Unclosed block');
        }
        return new ExtractionResult(this._messages, this._errors);
    }
    /**
     * Returns a tree where all translatable nodes are translated
     */
    merge(nodes, translations, interpolationConfig) {
        this._init(_VisitorMode.Merge, interpolationConfig);
        this._translations = translations;
        // Construct a single fake root element
        const wrapper = new html.Element('wrapper', [], nodes, undefined, undefined, undefined);
        const translatedNode = wrapper.visit(this, null);
        if (this._inI18nBlock) {
            this._reportError(nodes[nodes.length - 1], 'Unclosed block');
        }
        return new ParseTreeResult(translatedNode.children, this._errors);
    }
    visitExpansionCase(icuCase, context) {
        // Parse cases for translatable html attributes
        const expression = html.visitAll(this, icuCase.expression, context);
        if (this._mode === _VisitorMode.Merge) {
            return new html.ExpansionCase(icuCase.value, expression, icuCase.sourceSpan, icuCase.valueSourceSpan, icuCase.expSourceSpan);
        }
    }
    visitExpansion(icu, context) {
        this._mayBeAddBlockChildren(icu);
        const wasInIcu = this._inIcu;
        if (!this._inIcu) {
            // nested ICU messages should not be extracted but top-level translated as a whole
            if (this._isInTranslatableSection) {
                this._addMessage([icu]);
            }
            this._inIcu = true;
        }
        const cases = html.visitAll(this, icu.cases, context);
        if (this._mode === _VisitorMode.Merge) {
            icu = new html.Expansion(icu.switchValue, icu.type, cases, icu.sourceSpan, icu.switchValueSourceSpan);
        }
        this._inIcu = wasInIcu;
        return icu;
    }
    visitComment(comment, context) {
        const isOpening = _isOpeningComment(comment);
        if (isOpening && this._isInTranslatableSection) {
            this._reportError(comment, 'Could not start a block inside a translatable section');
            return;
        }
        const isClosing = _isClosingComment(comment);
        if (isClosing && !this._inI18nBlock) {
            this._reportError(comment, 'Trying to close an unopened block');
            return;
        }
        if (!this._inI18nNode && !this._inIcu) {
            if (!this._inI18nBlock) {
                if (isOpening) {
                    // deprecated from v5 you should use <ng-container i18n> instead of i18n comments
                    if (!i18nCommentsWarned && console && console.warn) {
                        i18nCommentsWarned = true;
                        const details = comment.sourceSpan.details ? `, ${comment.sourceSpan.details}` : '';
                        // TODO(ocombe): use a log service once there is a public one available
                        console.warn(`I18n comments are deprecated, use an <ng-container> element instead (${comment.sourceSpan.start}${details})`);
                    }
                    this._inI18nBlock = true;
                    this._blockStartDepth = this._depth;
                    this._blockChildren = [];
                    this._blockMeaningAndDesc =
                        comment.value.replace(_I18N_COMMENT_PREFIX_REGEXP, '').trim();
                    this._openTranslatableSection(comment);
                }
            }
            else {
                if (isClosing) {
                    if (this._depth == this._blockStartDepth) {
                        this._closeTranslatableSection(comment, this._blockChildren);
                        this._inI18nBlock = false;
                        const message = this._addMessage(this._blockChildren, this._blockMeaningAndDesc);
                        // merge attributes in sections
                        const nodes = this._translateMessage(comment, message);
                        return html.visitAll(this, nodes);
                    }
                    else {
                        this._reportError(comment, 'I18N blocks should not cross element boundaries');
                        return;
                    }
                }
            }
        }
    }
    visitText(text, context) {
        if (this._isInTranslatableSection) {
            this._mayBeAddBlockChildren(text);
        }
        return text;
    }
    visitElement(el, context) {
        this._mayBeAddBlockChildren(el);
        this._depth++;
        const wasInI18nNode = this._inI18nNode;
        const wasInImplicitNode = this._inImplicitNode;
        let childNodes = [];
        let translatedChildNodes = undefined;
        // Extract:
        // - top level nodes with the (implicit) "i18n" attribute if not already in a section
        // - ICU messages
        const i18nAttr = _getI18nAttr(el);
        const i18nMeta = i18nAttr ? i18nAttr.value : '';
        const isImplicit = this._implicitTags.some(tag => el.name === tag) && !this._inIcu &&
            !this._isInTranslatableSection;
        const isTopLevelImplicit = !wasInImplicitNode && isImplicit;
        this._inImplicitNode = wasInImplicitNode || isImplicit;
        if (!this._isInTranslatableSection && !this._inIcu) {
            if (i18nAttr || isTopLevelImplicit) {
                this._inI18nNode = true;
                const message = this._addMessage(el.children, i18nMeta);
                translatedChildNodes = this._translateMessage(el, message);
            }
            if (this._mode == _VisitorMode.Extract) {
                const isTranslatable = i18nAttr || isTopLevelImplicit;
                if (isTranslatable)
                    this._openTranslatableSection(el);
                html.visitAll(this, el.children);
                if (isTranslatable)
                    this._closeTranslatableSection(el, el.children);
            }
        }
        else {
            if (i18nAttr || isTopLevelImplicit) {
                this._reportError(el, 'Could not mark an element as translatable inside a translatable section');
            }
            if (this._mode == _VisitorMode.Extract) {
                // Descend into child nodes for extraction
                html.visitAll(this, el.children);
            }
        }
        if (this._mode === _VisitorMode.Merge) {
            const visitNodes = translatedChildNodes || el.children;
            visitNodes.forEach(child => {
                const visited = child.visit(this, context);
                if (visited && !this._isInTranslatableSection) {
                    // Do not add the children from translatable sections (= i18n blocks here)
                    // They will be added later in this loop when the block closes (i.e. on `<!-- /i18n -->`)
                    childNodes = childNodes.concat(visited);
                }
            });
        }
        this._visitAttributesOf(el);
        this._depth--;
        this._inI18nNode = wasInI18nNode;
        this._inImplicitNode = wasInImplicitNode;
        if (this._mode === _VisitorMode.Merge) {
            const translatedAttrs = this._translateAttributes(el);
            return new html.Element(el.name, translatedAttrs, childNodes, el.sourceSpan, el.startSourceSpan, el.endSourceSpan);
        }
        return null;
    }
    visitAttribute(attribute, context) {
        throw new Error('unreachable code');
    }
    _init(mode, interpolationConfig) {
        this._mode = mode;
        this._inI18nBlock = false;
        this._inI18nNode = false;
        this._depth = 0;
        this._inIcu = false;
        this._msgCountAtSectionStart = undefined;
        this._errors = [];
        this._messages = [];
        this._inImplicitNode = false;
        this._createI18nMessage = createI18nMessageFactory(interpolationConfig);
    }
    // looks for translatable attributes
    _visitAttributesOf(el) {
        const explicitAttrNameToValue = {};
        const implicitAttrNames = this._implicitAttrs[el.name] || [];
        el.attrs.filter(attr => attr.name.startsWith(_I18N_ATTR_PREFIX))
            .forEach(attr => explicitAttrNameToValue[attr.name.slice(_I18N_ATTR_PREFIX.length)] =
            attr.value);
        el.attrs.forEach(attr => {
            if (attr.name in explicitAttrNameToValue) {
                this._addMessage([attr], explicitAttrNameToValue[attr.name]);
            }
            else if (implicitAttrNames.some(name => attr.name === name)) {
                this._addMessage([attr]);
            }
        });
    }
    // add a translatable message
    _addMessage(ast, msgMeta) {
        if (ast.length == 0 ||
            ast.length == 1 && ast[0] instanceof html.Attribute && !ast[0].value) {
            // Do not create empty messages
            return null;
        }
        const { meaning, description, id } = _parseMessageMeta(msgMeta);
        const message = this._createI18nMessage(ast, meaning, description, id);
        this._messages.push(message);
        return message;
    }
    // Translates the given message given the `TranslationBundle`
    // This is used for translating elements / blocks - see `_translateAttributes` for attributes
    // no-op when called in extraction mode (returns [])
    _translateMessage(el, message) {
        if (message && this._mode === _VisitorMode.Merge) {
            const nodes = this._translations.get(message);
            if (nodes) {
                return nodes;
            }
            this._reportError(el, `Translation unavailable for message id="${this._translations.digest(message)}"`);
        }
        return [];
    }
    // translate the attributes of an element and remove i18n specific attributes
    _translateAttributes(el) {
        const attributes = el.attrs;
        const i18nParsedMessageMeta = {};
        attributes.forEach(attr => {
            if (attr.name.startsWith(_I18N_ATTR_PREFIX)) {
                i18nParsedMessageMeta[attr.name.slice(_I18N_ATTR_PREFIX.length)] =
                    _parseMessageMeta(attr.value);
            }
        });
        const translatedAttributes = [];
        attributes.forEach((attr) => {
            if (attr.name === _I18N_ATTR || attr.name.startsWith(_I18N_ATTR_PREFIX)) {
                // strip i18n specific attributes
                return;
            }
            if (attr.value && attr.value != '' && i18nParsedMessageMeta.hasOwnProperty(attr.name)) {
                const { meaning, description, id } = i18nParsedMessageMeta[attr.name];
                const message = this._createI18nMessage([attr], meaning, description, id);
                const nodes = this._translations.get(message);
                if (nodes) {
                    if (nodes.length == 0) {
                        translatedAttributes.push(new html.Attribute(attr.name, '', attr.sourceSpan));
                    }
                    else if (nodes[0] instanceof html.Text) {
                        const value = nodes[0].value;
                        translatedAttributes.push(new html.Attribute(attr.name, value, attr.sourceSpan));
                    }
                    else {
                        this._reportError(el, `Unexpected translation for attribute "${attr.name}" (id="${id || this._translations.digest(message)}")`);
                    }
                }
                else {
                    this._reportError(el, `Translation unavailable for attribute "${attr.name}" (id="${id || this._translations.digest(message)}")`);
                }
            }
            else {
                translatedAttributes.push(attr);
            }
        });
        return translatedAttributes;
    }
    /**
     * Add the node as a child of the block when:
     * - we are in a block,
     * - we are not inside a ICU message (those are handled separately),
     * - the node is a "direct child" of the block
     */
    _mayBeAddBlockChildren(node) {
        if (this._inI18nBlock && !this._inIcu && this._depth == this._blockStartDepth) {
            this._blockChildren.push(node);
        }
    }
    /**
     * Marks the start of a section, see `_closeTranslatableSection`
     */
    _openTranslatableSection(node) {
        if (this._isInTranslatableSection) {
            this._reportError(node, 'Unexpected section start');
        }
        else {
            this._msgCountAtSectionStart = this._messages.length;
        }
    }
    /**
     * A translatable section could be:
     * - the content of translatable element,
     * - nodes between `<!-- i18n -->` and `<!-- /i18n -->` comments
     */
    get _isInTranslatableSection() {
        return this._msgCountAtSectionStart !== void 0;
    }
    /**
     * Terminates a section.
     *
     * If a section has only one significant children (comments not significant) then we should not
     * keep the message from this children:
     *
     * `<p i18n="meaning|description">{ICU message}</p>` would produce two messages:
     * - one for the <p> content with meaning and description,
     * - another one for the ICU message.
     *
     * In this case the last message is discarded as it contains less information (the AST is
     * otherwise identical).
     *
     * Note that we should still keep messages extracted from attributes inside the section (ie in the
     * ICU message here)
     */
    _closeTranslatableSection(node, directChildren) {
        if (!this._isInTranslatableSection) {
            this._reportError(node, 'Unexpected section end');
            return;
        }
        const startIndex = this._msgCountAtSectionStart;
        const significantChildren = directChildren.reduce((count, node) => count + (node instanceof html.Comment ? 0 : 1), 0);
        if (significantChildren == 1) {
            for (let i = this._messages.length - 1; i >= startIndex; i--) {
                const ast = this._messages[i].nodes;
                if (!(ast.length == 1 && ast[0] instanceof i18n.Text)) {
                    this._messages.splice(i, 1);
                    break;
                }
            }
        }
        this._msgCountAtSectionStart = undefined;
    }
    _reportError(node, msg) {
        this._errors.push(new I18nError(node.sourceSpan, msg));
    }
}
function _isOpeningComment(n) {
    return !!(n instanceof html.Comment && n.value && n.value.startsWith('i18n'));
}
function _isClosingComment(n) {
    return !!(n instanceof html.Comment && n.value && n.value === '/i18n');
}
function _getI18nAttr(p) {
    return p.attrs.find(attr => attr.name === _I18N_ATTR) || null;
}
function _parseMessageMeta(i18n) {
    if (!i18n)
        return { meaning: '', description: '', id: '' };
    const idIndex = i18n.indexOf(ID_SEPARATOR);
    const descIndex = i18n.indexOf(MEANING_SEPARATOR);
    const [meaningAndDesc, id] = (idIndex > -1) ? [i18n.slice(0, idIndex), i18n.slice(idIndex + 2)] : [i18n, ''];
    const [meaning, description] = (descIndex > -1) ?
        [meaningAndDesc.slice(0, descIndex), meaningAndDesc.slice(descIndex + 1)] :
        ['', meaningAndDesc];
    return { meaning, description, id: id.trim() };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0cmFjdG9yX21lcmdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9pMThuL2V4dHJhY3Rvcl9tZXJnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxLQUFLLElBQUksTUFBTSxrQkFBa0IsQ0FBQztBQUV6QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFcEQsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxFQUFDLHdCQUF3QixFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBR3ZDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUMxQixNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQztBQUNsQyxNQUFNLDJCQUEyQixHQUFHLFNBQVMsQ0FBQztBQUM5QyxNQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQztBQUM5QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDMUIsSUFBSSxrQkFBa0IsR0FBRyxLQUFLLENBQUM7QUFFL0I7O0dBRUc7QUFDSCxNQUFNLFVBQVUsZUFBZSxDQUMzQixLQUFrQixFQUFFLG1CQUF3QyxFQUFFLFlBQXNCLEVBQ3BGLGFBQXNDO0lBQ3hDLE1BQU0sT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMxRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFDckQsQ0FBQztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FDN0IsS0FBa0IsRUFBRSxZQUErQixFQUFFLG1CQUF3QyxFQUM3RixZQUFzQixFQUFFLGFBQXNDO0lBQ2hFLE1BQU0sT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLFlB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QUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BGLE1BQU0sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBRXpCLE9BQU8sRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQztBQUMvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBodG1sIGZyb20gJy4uL21sX3BhcnNlci9hc3QnO1xuaW1wb3J0IHtJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tICcuLi9tbF9wYXJzZXIvaW50ZXJwb2xhdGlvbl9jb25maWcnO1xuaW1wb3J0IHtQYXJzZVRyZWVSZXN1bHR9IGZyb20gJy4uL21sX3BhcnNlci9wYXJzZXInO1xuXG5pbXBvcnQgKiBhcyBpMThuIGZyb20gJy4vaTE4bl9hc3QnO1xuaW1wb3J0IHtjcmVhdGVJMThuTWVzc2FnZUZhY3RvcnksIEkxOG5NZXNzYWdlRmFjdG9yeX0gZnJvbSAnLi9pMThuX3BhcnNlcic7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSAnLi9wYXJzZV91dGlsJztcbmltcG9ydCB7VHJhbnNsYXRpb25CdW5kbGV9IGZyb20gJy4vdHJhbnNsYXRpb25fYnVuZGxlJztcblxuY29uc3QgX0kxOE5fQVRUUiA9ICdpMThuJztcbmNvbnN0IF9JMThOX0FUVFJfUFJFRklYID0gJ2kxOG4tJztcbmNvbnN0IF9JMThOX0NPTU1FTlRfUFJFRklYX1JFR0VYUCA9IC9eaTE4bjo/LztcbmNvbnN0IE1FQU5JTkdfU0VQQVJBVE9SID0gJ3wnO1xuY29uc3QgSURfU0VQQVJBVE9SID0gJ0BAJztcbmxldCBpMThuQ29tbWVudHNXYXJuZWQgPSBmYWxzZTtcblxuLyoqXG4gKiBFeHRyYWN0IHRyYW5zbGF0YWJsZSBtZXNzYWdlcyBmcm9tIGFuIGh0bWwgQVNUXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0TWVzc2FnZXMoXG4gICAgbm9kZXM6IGh0bWwuTm9kZVtdLCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnLCBpbXBsaWNpdFRhZ3M6IHN0cmluZ1tdLFxuICAgIGltcGxpY2l0QXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nW119KTogRXh0cmFjdGlvblJlc3VsdCB7XG4gIGNvbnN0IHZpc2l0b3IgPSBuZXcgX1Zpc2l0b3IoaW1wbGljaXRUYWdzLCBpbXBsaWNpdEF0dHJzKTtcbiAgcmV0dXJuIHZpc2l0b3IuZXh0cmFjdChub2RlcywgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVRyYW5zbGF0aW9ucyhcbiAgICBub2RlczogaHRtbC5Ob2RlW10sIHRyYW5zbGF0aW9uczogVHJhbnNsYXRpb25CdW5kbGUsIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcsXG4gICAgaW1wbGljaXRUYWdzOiBzdHJpbmdbXSwgaW1wbGljaXRBdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmdbXX0pOiBQYXJzZVRyZWVSZXN1bHQge1xuICBjb25zdCB2aXNpdG9yID0gbmV3IF9WaXNpdG9yKGltcGxpY2l0VGFncywgaW1wbGljaXRBdHRycyk7XG4gIHJldHVybiB2aXNpdG9yLm1lcmdlKG5vZGVzLCB0cmFuc2xhdGlvbnMsIGludGVycG9sYXRpb25Db25maWcpO1xufVxuXG5leHBvcnQgY2xhc3MgRXh0cmFjdGlvblJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlczogaTE4bi5NZXNzYWdlW10sIHB1YmxpYyBlcnJvcnM6IEkxOG5FcnJvcltdKSB7fVxufVxuXG5lbnVtIF9WaXNpdG9yTW9kZSB7XG4gIEV4dHJhY3QsXG4gIE1lcmdlXG59XG5cbi8qKlxuICogVGhpcyBWaXNpdG9yIGlzIHVzZWQ6XG4gKiAxLiB0byBleHRyYWN0IGFsbCB0aGUgdHJhbnNsYXRhYmxlIHN0cmluZ3MgZnJvbSBhbiBodG1sIEFTVCAoc2VlIGBleHRyYWN0KClgKSxcbiAqIDIuIHRvIHJlcGxhY2UgdGhlIHRyYW5zbGF0YWJsZSBzdHJpbmdzIHdpdGggdGhlIGFjdHVhbCB0cmFuc2xhdGlvbnMgKHNlZSBgbWVyZ2UoKWApXG4gKlxuICogQGludGVybmFsXG4gKi9cbmNsYXNzIF9WaXNpdG9yIGltcGxlbWVudHMgaHRtbC5WaXNpdG9yIHtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX2RlcHRoITogbnVtYmVyO1xuXG4gIC8vIDxlbCBpMThuPi4uLjwvZWw+XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIF9pbkkxOG5Ob2RlITogYm9vbGVhbjtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX2luSW1wbGljaXROb2RlITogYm9vbGVhbjtcblxuICAvLyA8IS0taTE4bi0tPi4uLjwhLS0vaTE4bi0tPlxuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfaW5JMThuQmxvY2shOiBib29sZWFuO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfYmxvY2tNZWFuaW5nQW5kRGVzYyE6IHN0cmluZztcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX2Jsb2NrQ2hpbGRyZW4hOiBodG1sLk5vZGVbXTtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX2Jsb2NrU3RhcnREZXB0aCE6IG51bWJlcjtcblxuICAvLyB7PGljdSBtZXNzYWdlPn1cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX2luSWN1ITogYm9vbGVhbjtcblxuICAvLyBzZXQgdG8gdm9pZCAwIHdoZW4gbm90IGluIGEgc2VjdGlvblxuICBwcml2YXRlIF9tc2dDb3VudEF0U2VjdGlvblN0YXJ0OiBudW1iZXJ8dW5kZWZpbmVkO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfZXJyb3JzITogSTE4bkVycm9yW107XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIF9tb2RlITogX1Zpc2l0b3JNb2RlO1xuXG4gIC8vIF9WaXNpdG9yTW9kZS5FeHRyYWN0IG9ubHlcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX21lc3NhZ2VzITogaTE4bi5NZXNzYWdlW107XG5cbiAgLy8gX1Zpc2l0b3JNb2RlLk1lcmdlIG9ubHlcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX3RyYW5zbGF0aW9ucyE6IFRyYW5zbGF0aW9uQnVuZGxlO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfY3JlYXRlSTE4bk1lc3NhZ2UhOiBJMThuTWVzc2FnZUZhY3Rvcnk7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbXBsaWNpdFRhZ3M6IHN0cmluZ1tdLCBwcml2YXRlIF9pbXBsaWNpdEF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ1tdfSkge31cblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIG1lc3NhZ2VzIGZyb20gdGhlIHRyZWVcbiAgICovXG4gIGV4dHJhY3Qobm9kZXM6IGh0bWwuTm9kZVtdLCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTogRXh0cmFjdGlvblJlc3VsdCB7XG4gICAgdGhpcy5faW5pdChfVmlzaXRvck1vZGUuRXh0cmFjdCwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG5cbiAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzLCBudWxsKSk7XG5cbiAgICBpZiAodGhpcy5faW5JMThuQmxvY2spIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdLCAnVW5jbG9zZWQgYmxvY2snKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEV4dHJhY3Rpb25SZXN1bHQodGhpcy5fbWVzc2FnZXMsIHRoaXMuX2Vycm9ycyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHRyZWUgd2hlcmUgYWxsIHRyYW5zbGF0YWJsZSBub2RlcyBhcmUgdHJhbnNsYXRlZFxuICAgKi9cbiAgbWVyZ2UoXG4gICAgICBub2RlczogaHRtbC5Ob2RlW10sIHRyYW5zbGF0aW9uczogVHJhbnNsYXRpb25CdW5kbGUsXG4gICAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICB0aGlzLl9pbml0KF9WaXNpdG9yTW9kZS5NZXJnZSwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgdGhpcy5fdHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zO1xuXG4gICAgLy8gQ29uc3RydWN0IGEgc2luZ2xlIGZha2Ugcm9vdCBlbGVtZW50XG4gICAgY29uc3Qgd3JhcHBlciA9IG5ldyBodG1sLkVsZW1lbnQoJ3dyYXBwZXInLCBbXSwgbm9kZXMsIHVuZGVmaW5lZCEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZWROb2RlID0gd3JhcHBlci52aXNpdCh0aGlzLCBudWxsKTtcblxuICAgIGlmICh0aGlzLl9pbkkxOG5CbG9jaykge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3Iobm9kZXNbbm9kZXMubGVuZ3RoIC0gMV0sICdVbmNsb3NlZCBibG9jaycpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUGFyc2VUcmVlUmVzdWx0KHRyYW5zbGF0ZWROb2RlLmNoaWxkcmVuLCB0aGlzLl9lcnJvcnMpO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGljdUNhc2U6IGh0bWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICAvLyBQYXJzZSBjYXNlcyBmb3IgdHJhbnNsYXRhYmxlIGh0bWwgYXR0cmlidXRlc1xuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBodG1sLnZpc2l0QWxsKHRoaXMsIGljdUNhc2UuZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICBpZiAodGhpcy5fbW9kZSA9PT0gX1Zpc2l0b3JNb2RlLk1lcmdlKSB7XG4gICAgICByZXR1cm4gbmV3IGh0bWwuRXhwYW5zaW9uQ2FzZShcbiAgICAgICAgICBpY3VDYXNlLnZhbHVlLCBleHByZXNzaW9uLCBpY3VDYXNlLnNvdXJjZVNwYW4sIGljdUNhc2UudmFsdWVTb3VyY2VTcGFuLFxuICAgICAgICAgIGljdUNhc2UuZXhwU291cmNlU3Bhbik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogaHRtbC5FeHBhbnNpb24ge1xuICAgIHRoaXMuX21heUJlQWRkQmxvY2tDaGlsZHJlbihpY3UpO1xuXG4gICAgY29uc3Qgd2FzSW5JY3UgPSB0aGlzLl9pbkljdTtcblxuICAgIGlmICghdGhpcy5faW5JY3UpIHtcbiAgICAgIC8vIG5lc3RlZCBJQ1UgbWVzc2FnZXMgc2hvdWxkIG5vdCBiZSBleHRyYWN0ZWQgYnV0IHRvcC1sZXZlbCB0cmFuc2xhdGVkIGFzIGEgd2hvbGVcbiAgICAgIGlmICh0aGlzLl9pc0luVHJhbnNsYXRhYmxlU2VjdGlvbikge1xuICAgICAgICB0aGlzLl9hZGRNZXNzYWdlKFtpY3VdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2luSWN1ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXNlcyA9IGh0bWwudmlzaXRBbGwodGhpcywgaWN1LmNhc2VzLCBjb250ZXh0KTtcblxuICAgIGlmICh0aGlzLl9tb2RlID09PSBfVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIGljdSA9IG5ldyBodG1sLkV4cGFuc2lvbihcbiAgICAgICAgICBpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBjYXNlcywgaWN1LnNvdXJjZVNwYW4sIGljdS5zd2l0Y2hWYWx1ZVNvdXJjZVNwYW4pO1xuICAgIH1cblxuICAgIHRoaXMuX2luSWN1ID0gd2FzSW5JY3U7XG5cbiAgICByZXR1cm4gaWN1O1xuICB9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IGh0bWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBjb25zdCBpc09wZW5pbmcgPSBfaXNPcGVuaW5nQ29tbWVudChjb21tZW50KTtcblxuICAgIGlmIChpc09wZW5pbmcgJiYgdGhpcy5faXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKGNvbW1lbnQsICdDb3VsZCBub3Qgc3RhcnQgYSBibG9jayBpbnNpZGUgYSB0cmFuc2xhdGFibGUgc2VjdGlvbicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlzQ2xvc2luZyA9IF9pc0Nsb3NpbmdDb21tZW50KGNvbW1lbnQpO1xuXG4gICAgaWYgKGlzQ2xvc2luZyAmJiAhdGhpcy5faW5JMThuQmxvY2spIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKGNvbW1lbnQsICdUcnlpbmcgdG8gY2xvc2UgYW4gdW5vcGVuZWQgYmxvY2snKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2luSTE4bk5vZGUgJiYgIXRoaXMuX2luSWN1KSB7XG4gICAgICBpZiAoIXRoaXMuX2luSTE4bkJsb2NrKSB7XG4gICAgICAgIGlmIChpc09wZW5pbmcpIHtcbiAgICAgICAgICAvLyBkZXByZWNhdGVkIGZyb20gdjUgeW91IHNob3VsZCB1c2UgPG5nLWNvbnRhaW5lciBpMThuPiBpbnN0ZWFkIG9mIGkxOG4gY29tbWVudHNcbiAgICAgICAgICBpZiAoIWkxOG5Db21tZW50c1dhcm5lZCAmJiA8YW55PmNvbnNvbGUgJiYgPGFueT5jb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgIGkxOG5Db21tZW50c1dhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBkZXRhaWxzID0gY29tbWVudC5zb3VyY2VTcGFuLmRldGFpbHMgPyBgLCAke2NvbW1lbnQuc291cmNlU3Bhbi5kZXRhaWxzfWAgOiAnJztcbiAgICAgICAgICAgIC8vIFRPRE8ob2NvbWJlKTogdXNlIGEgbG9nIHNlcnZpY2Ugb25jZSB0aGVyZSBpcyBhIHB1YmxpYyBvbmUgYXZhaWxhYmxlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEkxOG4gY29tbWVudHMgYXJlIGRlcHJlY2F0ZWQsIHVzZSBhbiA8bmctY29udGFpbmVyPiBlbGVtZW50IGluc3RlYWQgKCR7XG4gICAgICAgICAgICAgICAgY29tbWVudC5zb3VyY2VTcGFuLnN0YXJ0fSR7ZGV0YWlsc30pYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2luSTE4bkJsb2NrID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9ibG9ja1N0YXJ0RGVwdGggPSB0aGlzLl9kZXB0aDtcbiAgICAgICAgICB0aGlzLl9ibG9ja0NoaWxkcmVuID0gW107XG4gICAgICAgICAgdGhpcy5fYmxvY2tNZWFuaW5nQW5kRGVzYyA9XG4gICAgICAgICAgICAgIGNvbW1lbnQudmFsdWUhLnJlcGxhY2UoX0kxOE5fQ09NTUVOVF9QUkVGSVhfUkVHRVhQLCAnJykudHJpbSgpO1xuICAgICAgICAgIHRoaXMuX29wZW5UcmFuc2xhdGFibGVTZWN0aW9uKGNvbW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNDbG9zaW5nKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2RlcHRoID09IHRoaXMuX2Jsb2NrU3RhcnREZXB0aCkge1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VUcmFuc2xhdGFibGVTZWN0aW9uKGNvbW1lbnQsIHRoaXMuX2Jsb2NrQ2hpbGRyZW4pO1xuICAgICAgICAgICAgdGhpcy5faW5JMThuQmxvY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLl9hZGRNZXNzYWdlKHRoaXMuX2Jsb2NrQ2hpbGRyZW4sIHRoaXMuX2Jsb2NrTWVhbmluZ0FuZERlc2MpITtcbiAgICAgICAgICAgIC8vIG1lcmdlIGF0dHJpYnV0ZXMgaW4gc2VjdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5fdHJhbnNsYXRlTWVzc2FnZShjb21tZW50LCBtZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiBodG1sLnZpc2l0QWxsKHRoaXMsIG5vZGVzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoY29tbWVudCwgJ0kxOE4gYmxvY2tzIHNob3VsZCBub3QgY3Jvc3MgZWxlbWVudCBib3VuZGFyaWVzJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGh0bWwuVGV4dCwgY29udGV4dDogYW55KTogaHRtbC5UZXh0IHtcbiAgICBpZiAodGhpcy5faXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgIHRoaXMuX21heUJlQWRkQmxvY2tDaGlsZHJlbih0ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWw6IGh0bWwuRWxlbWVudCwgY29udGV4dDogYW55KTogaHRtbC5FbGVtZW50fG51bGwge1xuICAgIHRoaXMuX21heUJlQWRkQmxvY2tDaGlsZHJlbihlbCk7XG4gICAgdGhpcy5fZGVwdGgrKztcbiAgICBjb25zdCB3YXNJbkkxOG5Ob2RlID0gdGhpcy5faW5JMThuTm9kZTtcbiAgICBjb25zdCB3YXNJbkltcGxpY2l0Tm9kZSA9IHRoaXMuX2luSW1wbGljaXROb2RlO1xuICAgIGxldCBjaGlsZE5vZGVzOiBodG1sLk5vZGVbXSA9IFtdO1xuICAgIGxldCB0cmFuc2xhdGVkQ2hpbGROb2RlczogaHRtbC5Ob2RlW10gPSB1bmRlZmluZWQhO1xuXG4gICAgLy8gRXh0cmFjdDpcbiAgICAvLyAtIHRvcCBsZXZlbCBub2RlcyB3aXRoIHRoZSAoaW1wbGljaXQpIFwiaTE4blwiIGF0dHJpYnV0ZSBpZiBub3QgYWxyZWFkeSBpbiBhIHNlY3Rpb25cbiAgICAvLyAtIElDVSBtZXNzYWdlc1xuICAgIGNvbnN0IGkxOG5BdHRyID0gX2dldEkxOG5BdHRyKGVsKTtcbiAgICBjb25zdCBpMThuTWV0YSA9IGkxOG5BdHRyID8gaTE4bkF0dHIudmFsdWUgOiAnJztcbiAgICBjb25zdCBpc0ltcGxpY2l0ID0gdGhpcy5faW1wbGljaXRUYWdzLnNvbWUodGFnID0+IGVsLm5hbWUgPT09IHRhZykgJiYgIXRoaXMuX2luSWN1ICYmXG4gICAgICAgICF0aGlzLl9pc0luVHJhbnNsYXRhYmxlU2VjdGlvbjtcbiAgICBjb25zdCBpc1RvcExldmVsSW1wbGljaXQgPSAhd2FzSW5JbXBsaWNpdE5vZGUgJiYgaXNJbXBsaWNpdDtcbiAgICB0aGlzLl9pbkltcGxpY2l0Tm9kZSA9IHdhc0luSW1wbGljaXROb2RlIHx8IGlzSW1wbGljaXQ7XG5cbiAgICBpZiAoIXRoaXMuX2lzSW5UcmFuc2xhdGFibGVTZWN0aW9uICYmICF0aGlzLl9pbkljdSkge1xuICAgICAgaWYgKGkxOG5BdHRyIHx8IGlzVG9wTGV2ZWxJbXBsaWNpdCkge1xuICAgICAgICB0aGlzLl9pbkkxOG5Ob2RlID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuX2FkZE1lc3NhZ2UoZWwuY2hpbGRyZW4sIGkxOG5NZXRhKSE7XG4gICAgICAgIHRyYW5zbGF0ZWRDaGlsZE5vZGVzID0gdGhpcy5fdHJhbnNsYXRlTWVzc2FnZShlbCwgbWVzc2FnZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9tb2RlID09IF9WaXNpdG9yTW9kZS5FeHRyYWN0KSB7XG4gICAgICAgIGNvbnN0IGlzVHJhbnNsYXRhYmxlID0gaTE4bkF0dHIgfHwgaXNUb3BMZXZlbEltcGxpY2l0O1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGFibGUpIHRoaXMuX29wZW5UcmFuc2xhdGFibGVTZWN0aW9uKGVsKTtcbiAgICAgICAgaHRtbC52aXNpdEFsbCh0aGlzLCBlbC5jaGlsZHJlbik7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0YWJsZSkgdGhpcy5fY2xvc2VUcmFuc2xhdGFibGVTZWN0aW9uKGVsLCBlbC5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpMThuQXR0ciB8fCBpc1RvcExldmVsSW1wbGljaXQpIHtcbiAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICBlbCwgJ0NvdWxkIG5vdCBtYXJrIGFuIGVsZW1lbnQgYXMgdHJhbnNsYXRhYmxlIGluc2lkZSBhIHRyYW5zbGF0YWJsZSBzZWN0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9tb2RlID09IF9WaXNpdG9yTW9kZS5FeHRyYWN0KSB7XG4gICAgICAgIC8vIERlc2NlbmQgaW50byBjaGlsZCBub2RlcyBmb3IgZXh0cmFjdGlvblxuICAgICAgICBodG1sLnZpc2l0QWxsKHRoaXMsIGVsLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbW9kZSA9PT0gX1Zpc2l0b3JNb2RlLk1lcmdlKSB7XG4gICAgICBjb25zdCB2aXNpdE5vZGVzID0gdHJhbnNsYXRlZENoaWxkTm9kZXMgfHwgZWwuY2hpbGRyZW47XG4gICAgICB2aXNpdE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBjb25zdCB2aXNpdGVkID0gY2hpbGQudmlzaXQodGhpcywgY29udGV4dCk7XG4gICAgICAgIGlmICh2aXNpdGVkICYmICF0aGlzLl9pc0luVHJhbnNsYXRhYmxlU2VjdGlvbikge1xuICAgICAgICAgIC8vIERvIG5vdCBhZGQgdGhlIGNoaWxkcmVuIGZyb20gdHJhbnNsYXRhYmxlIHNlY3Rpb25zICg9IGkxOG4gYmxvY2tzIGhlcmUpXG4gICAgICAgICAgLy8gVGhleSB3aWxsIGJlIGFkZGVkIGxhdGVyIGluIHRoaXMgbG9vcCB3aGVuIHRoZSBibG9jayBjbG9zZXMgKGkuZS4gb24gYDwhLS0gL2kxOG4gLS0+YClcbiAgICAgICAgICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5jb25jYXQodmlzaXRlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3Zpc2l0QXR0cmlidXRlc09mKGVsKTtcblxuICAgIHRoaXMuX2RlcHRoLS07XG4gICAgdGhpcy5faW5JMThuTm9kZSA9IHdhc0luSTE4bk5vZGU7XG4gICAgdGhpcy5faW5JbXBsaWNpdE5vZGUgPSB3YXNJbkltcGxpY2l0Tm9kZTtcblxuICAgIGlmICh0aGlzLl9tb2RlID09PSBfVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZWRBdHRycyA9IHRoaXMuX3RyYW5zbGF0ZUF0dHJpYnV0ZXMoZWwpO1xuICAgICAgcmV0dXJuIG5ldyBodG1sLkVsZW1lbnQoXG4gICAgICAgICAgZWwubmFtZSwgdHJhbnNsYXRlZEF0dHJzLCBjaGlsZE5vZGVzLCBlbC5zb3VyY2VTcGFuLCBlbC5zdGFydFNvdXJjZVNwYW4sXG4gICAgICAgICAgZWwuZW5kU291cmNlU3Bhbik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VucmVhY2hhYmxlIGNvZGUnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXQobW9kZTogX1Zpc2l0b3JNb2RlLCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5fbW9kZSA9IG1vZGU7XG4gICAgdGhpcy5faW5JMThuQmxvY2sgPSBmYWxzZTtcbiAgICB0aGlzLl9pbkkxOG5Ob2RlID0gZmFsc2U7XG4gICAgdGhpcy5fZGVwdGggPSAwO1xuICAgIHRoaXMuX2luSWN1ID0gZmFsc2U7XG4gICAgdGhpcy5fbXNnQ291bnRBdFNlY3Rpb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9lcnJvcnMgPSBbXTtcbiAgICB0aGlzLl9tZXNzYWdlcyA9IFtdO1xuICAgIHRoaXMuX2luSW1wbGljaXROb2RlID0gZmFsc2U7XG4gICAgdGhpcy5fY3JlYXRlSTE4bk1lc3NhZ2UgPSBjcmVhdGVJMThuTWVzc2FnZUZhY3RvcnkoaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gIH1cblxuICAvLyBsb29rcyBmb3IgdHJhbnNsYXRhYmxlIGF0dHJpYnV0ZXNcbiAgcHJpdmF0ZSBfdmlzaXRBdHRyaWJ1dGVzT2YoZWw6IGh0bWwuRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGV4cGxpY2l0QXR0ck5hbWVUb1ZhbHVlOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgICBjb25zdCBpbXBsaWNpdEF0dHJOYW1lczogc3RyaW5nW10gPSB0aGlzLl9pbXBsaWNpdEF0dHJzW2VsLm5hbWVdIHx8IFtdO1xuXG4gICAgZWwuYXR0cnMuZmlsdGVyKGF0dHIgPT4gYXR0ci5uYW1lLnN0YXJ0c1dpdGgoX0kxOE5fQVRUUl9QUkVGSVgpKVxuICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgIGF0dHIgPT4gZXhwbGljaXRBdHRyTmFtZVRvVmFsdWVbYXR0ci5uYW1lLnNsaWNlKF9JMThOX0FUVFJfUFJFRklYLmxlbmd0aCldID1cbiAgICAgICAgICAgICAgICBhdHRyLnZhbHVlKTtcblxuICAgIGVsLmF0dHJzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICBpZiAoYXR0ci5uYW1lIGluIGV4cGxpY2l0QXR0ck5hbWVUb1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2FkZE1lc3NhZ2UoW2F0dHJdLCBleHBsaWNpdEF0dHJOYW1lVG9WYWx1ZVthdHRyLm5hbWVdKTtcbiAgICAgIH0gZWxzZSBpZiAoaW1wbGljaXRBdHRyTmFtZXMuc29tZShuYW1lID0+IGF0dHIubmFtZSA9PT0gbmFtZSkpIHtcbiAgICAgICAgdGhpcy5fYWRkTWVzc2FnZShbYXR0cl0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gYWRkIGEgdHJhbnNsYXRhYmxlIG1lc3NhZ2VcbiAgcHJpdmF0ZSBfYWRkTWVzc2FnZShhc3Q6IGh0bWwuTm9kZVtdLCBtc2dNZXRhPzogc3RyaW5nKTogaTE4bi5NZXNzYWdlfG51bGwge1xuICAgIGlmIChhc3QubGVuZ3RoID09IDAgfHxcbiAgICAgICAgYXN0Lmxlbmd0aCA9PSAxICYmIGFzdFswXSBpbnN0YW5jZW9mIGh0bWwuQXR0cmlidXRlICYmICEoPGh0bWwuQXR0cmlidXRlPmFzdFswXSkudmFsdWUpIHtcbiAgICAgIC8vIERvIG5vdCBjcmVhdGUgZW1wdHkgbWVzc2FnZXNcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHttZWFuaW5nLCBkZXNjcmlwdGlvbiwgaWR9ID0gX3BhcnNlTWVzc2FnZU1ldGEobXNnTWV0YSk7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuX2NyZWF0ZUkxOG5NZXNzYWdlKGFzdCwgbWVhbmluZywgZGVzY3JpcHRpb24sIGlkKTtcbiAgICB0aGlzLl9tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgLy8gVHJhbnNsYXRlcyB0aGUgZ2l2ZW4gbWVzc2FnZSBnaXZlbiB0aGUgYFRyYW5zbGF0aW9uQnVuZGxlYFxuICAvLyBUaGlzIGlzIHVzZWQgZm9yIHRyYW5zbGF0aW5nIGVsZW1lbnRzIC8gYmxvY2tzIC0gc2VlIGBfdHJhbnNsYXRlQXR0cmlidXRlc2AgZm9yIGF0dHJpYnV0ZXNcbiAgLy8gbm8tb3Agd2hlbiBjYWxsZWQgaW4gZXh0cmFjdGlvbiBtb2RlIChyZXR1cm5zIFtdKVxuICBwcml2YXRlIF90cmFuc2xhdGVNZXNzYWdlKGVsOiBodG1sLk5vZGUsIG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IGh0bWwuTm9kZVtdIHtcbiAgICBpZiAobWVzc2FnZSAmJiB0aGlzLl9tb2RlID09PSBfVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5fdHJhbnNsYXRpb25zLmdldChtZXNzYWdlKTtcblxuICAgICAgaWYgKG5vZGVzKSB7XG4gICAgICAgIHJldHVybiBub2RlcztcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgZWwsIGBUcmFuc2xhdGlvbiB1bmF2YWlsYWJsZSBmb3IgbWVzc2FnZSBpZD1cIiR7dGhpcy5fdHJhbnNsYXRpb25zLmRpZ2VzdChtZXNzYWdlKX1cImApO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8vIHRyYW5zbGF0ZSB0aGUgYXR0cmlidXRlcyBvZiBhbiBlbGVtZW50IGFuZCByZW1vdmUgaTE4biBzcGVjaWZpYyBhdHRyaWJ1dGVzXG4gIHByaXZhdGUgX3RyYW5zbGF0ZUF0dHJpYnV0ZXMoZWw6IGh0bWwuRWxlbWVudCk6IGh0bWwuQXR0cmlidXRlW10ge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBlbC5hdHRycztcbiAgICBjb25zdCBpMThuUGFyc2VkTWVzc2FnZU1ldGE6XG4gICAgICAgIHtbbmFtZTogc3RyaW5nXToge21lYW5pbmc6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgaWQ6IHN0cmluZ319ID0ge307XG5cbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICBpZiAoYXR0ci5uYW1lLnN0YXJ0c1dpdGgoX0kxOE5fQVRUUl9QUkVGSVgpKSB7XG4gICAgICAgIGkxOG5QYXJzZWRNZXNzYWdlTWV0YVthdHRyLm5hbWUuc2xpY2UoX0kxOE5fQVRUUl9QUkVGSVgubGVuZ3RoKV0gPVxuICAgICAgICAgICAgX3BhcnNlTWVzc2FnZU1ldGEoYXR0ci52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB0cmFuc2xhdGVkQXR0cmlidXRlczogaHRtbC5BdHRyaWJ1dGVbXSA9IFtdO1xuXG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICBpZiAoYXR0ci5uYW1lID09PSBfSTE4Tl9BVFRSIHx8IGF0dHIubmFtZS5zdGFydHNXaXRoKF9JMThOX0FUVFJfUFJFRklYKSkge1xuICAgICAgICAvLyBzdHJpcCBpMThuIHNwZWNpZmljIGF0dHJpYnV0ZXNcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0ci52YWx1ZSAmJiBhdHRyLnZhbHVlICE9ICcnICYmIGkxOG5QYXJzZWRNZXNzYWdlTWV0YS5oYXNPd25Qcm9wZXJ0eShhdHRyLm5hbWUpKSB7XG4gICAgICAgIGNvbnN0IHttZWFuaW5nLCBkZXNjcmlwdGlvbiwgaWR9ID0gaTE4blBhcnNlZE1lc3NhZ2VNZXRhW2F0dHIubmFtZV07XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSA9IHRoaXMuX2NyZWF0ZUkxOG5NZXNzYWdlKFthdHRyXSwgbWVhbmluZywgZGVzY3JpcHRpb24sIGlkKTtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLl90cmFuc2xhdGlvbnMuZ2V0KG1lc3NhZ2UpO1xuICAgICAgICBpZiAobm9kZXMpIHtcbiAgICAgICAgICBpZiAobm9kZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZWRBdHRyaWJ1dGVzLnB1c2gobmV3IGh0bWwuQXR0cmlidXRlKGF0dHIubmFtZSwgJycsIGF0dHIuc291cmNlU3BhbikpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobm9kZXNbMF0gaW5zdGFuY2VvZiBodG1sLlRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKG5vZGVzWzBdIGFzIGh0bWwuVGV4dCkudmFsdWU7XG4gICAgICAgICAgICB0cmFuc2xhdGVkQXR0cmlidXRlcy5wdXNoKG5ldyBodG1sLkF0dHJpYnV0ZShhdHRyLm5hbWUsIHZhbHVlLCBhdHRyLnNvdXJjZVNwYW4pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICAgICAgZWwsXG4gICAgICAgICAgICAgICAgYFVuZXhwZWN0ZWQgdHJhbnNsYXRpb24gZm9yIGF0dHJpYnV0ZSBcIiR7YXR0ci5uYW1lfVwiIChpZD1cIiR7XG4gICAgICAgICAgICAgICAgICAgIGlkIHx8IHRoaXMuX3RyYW5zbGF0aW9ucy5kaWdlc3QobWVzc2FnZSl9XCIpYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgICAgICBlbCxcbiAgICAgICAgICAgICAgYFRyYW5zbGF0aW9uIHVuYXZhaWxhYmxlIGZvciBhdHRyaWJ1dGUgXCIke2F0dHIubmFtZX1cIiAoaWQ9XCIke1xuICAgICAgICAgICAgICAgICAgaWQgfHwgdGhpcy5fdHJhbnNsYXRpb25zLmRpZ2VzdChtZXNzYWdlKX1cIilgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNsYXRlZEF0dHJpYnV0ZXMucHVzaChhdHRyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0cmFuc2xhdGVkQXR0cmlidXRlcztcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgbm9kZSBhcyBhIGNoaWxkIG9mIHRoZSBibG9jayB3aGVuOlxuICAgKiAtIHdlIGFyZSBpbiBhIGJsb2NrLFxuICAgKiAtIHdlIGFyZSBub3QgaW5zaWRlIGEgSUNVIG1lc3NhZ2UgKHRob3NlIGFyZSBoYW5kbGVkIHNlcGFyYXRlbHkpLFxuICAgKiAtIHRoZSBub2RlIGlzIGEgXCJkaXJlY3QgY2hpbGRcIiBvZiB0aGUgYmxvY2tcbiAgICovXG4gIHByaXZhdGUgX21heUJlQWRkQmxvY2tDaGlsZHJlbihub2RlOiBodG1sLk5vZGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5JMThuQmxvY2sgJiYgIXRoaXMuX2luSWN1ICYmIHRoaXMuX2RlcHRoID09IHRoaXMuX2Jsb2NrU3RhcnREZXB0aCkge1xuICAgICAgdGhpcy5fYmxvY2tDaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrcyB0aGUgc3RhcnQgb2YgYSBzZWN0aW9uLCBzZWUgYF9jbG9zZVRyYW5zbGF0YWJsZVNlY3Rpb25gXG4gICAqL1xuICBwcml2YXRlIF9vcGVuVHJhbnNsYXRhYmxlU2VjdGlvbihub2RlOiBodG1sLk5vZGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGUsICdVbmV4cGVjdGVkIHNlY3Rpb24gc3RhcnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbXNnQ291bnRBdFNlY3Rpb25TdGFydCA9IHRoaXMuX21lc3NhZ2VzLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSB0cmFuc2xhdGFibGUgc2VjdGlvbiBjb3VsZCBiZTpcbiAgICogLSB0aGUgY29udGVudCBvZiB0cmFuc2xhdGFibGUgZWxlbWVudCxcbiAgICogLSBub2RlcyBiZXR3ZWVuIGA8IS0tIGkxOG4gLS0+YCBhbmQgYDwhLS0gL2kxOG4gLS0+YCBjb21tZW50c1xuICAgKi9cbiAgcHJpdmF0ZSBnZXQgX2lzSW5UcmFuc2xhdGFibGVTZWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tc2dDb3VudEF0U2VjdGlvblN0YXJ0ICE9PSB2b2lkIDA7XG4gIH1cblxuICAvKipcbiAgICogVGVybWluYXRlcyBhIHNlY3Rpb24uXG4gICAqXG4gICAqIElmIGEgc2VjdGlvbiBoYXMgb25seSBvbmUgc2lnbmlmaWNhbnQgY2hpbGRyZW4gKGNvbW1lbnRzIG5vdCBzaWduaWZpY2FudCkgdGhlbiB3ZSBzaG91bGQgbm90XG4gICAqIGtlZXAgdGhlIG1lc3NhZ2UgZnJvbSB0aGlzIGNoaWxkcmVuOlxuICAgKlxuICAgKiBgPHAgaTE4bj1cIm1lYW5pbmd8ZGVzY3JpcHRpb25cIj57SUNVIG1lc3NhZ2V9PC9wPmAgd291bGQgcHJvZHVjZSB0d28gbWVzc2FnZXM6XG4gICAqIC0gb25lIGZvciB0aGUgPHA+IGNvbnRlbnQgd2l0aCBtZWFuaW5nIGFuZCBkZXNjcmlwdGlvbixcbiAgICogLSBhbm90aGVyIG9uZSBmb3IgdGhlIElDVSBtZXNzYWdlLlxuICAgKlxuICAgKiBJbiB0aGlzIGNhc2UgdGhlIGxhc3QgbWVzc2FnZSBpcyBkaXNjYXJkZWQgYXMgaXQgY29udGFpbnMgbGVzcyBpbmZvcm1hdGlvbiAodGhlIEFTVCBpc1xuICAgKiBvdGhlcndpc2UgaWRlbnRpY2FsKS5cbiAgICpcbiAgICogTm90ZSB0aGF0IHdlIHNob3VsZCBzdGlsbCBrZWVwIG1lc3NhZ2VzIGV4dHJhY3RlZCBmcm9tIGF0dHJpYnV0ZXMgaW5zaWRlIHRoZSBzZWN0aW9uIChpZSBpbiB0aGVcbiAgICogSUNVIG1lc3NhZ2UgaGVyZSlcbiAgICovXG4gIHByaXZhdGUgX2Nsb3NlVHJhbnNsYXRhYmxlU2VjdGlvbihub2RlOiBodG1sLk5vZGUsIGRpcmVjdENoaWxkcmVuOiBodG1sLk5vZGVbXSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5faXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGUsICdVbmV4cGVjdGVkIHNlY3Rpb24gZW5kJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMuX21zZ0NvdW50QXRTZWN0aW9uU3RhcnQ7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRDaGlsZHJlbjogbnVtYmVyID0gZGlyZWN0Q2hpbGRyZW4ucmVkdWNlKFxuICAgICAgICAoY291bnQ6IG51bWJlciwgbm9kZTogaHRtbC5Ob2RlKTogbnVtYmVyID0+IGNvdW50ICsgKG5vZGUgaW5zdGFuY2VvZiBodG1sLkNvbW1lbnQgPyAwIDogMSksXG4gICAgICAgIDApO1xuXG4gICAgaWYgKHNpZ25pZmljYW50Q2hpbGRyZW4gPT0gMSkge1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX21lc3NhZ2VzLmxlbmd0aCAtIDE7IGkgPj0gc3RhcnRJbmRleCE7IGktLSkge1xuICAgICAgICBjb25zdCBhc3QgPSB0aGlzLl9tZXNzYWdlc1tpXS5ub2RlcztcbiAgICAgICAgaWYgKCEoYXN0Lmxlbmd0aCA9PSAxICYmIGFzdFswXSBpbnN0YW5jZW9mIGkxOG4uVGV4dCkpIHtcbiAgICAgICAgICB0aGlzLl9tZXNzYWdlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9tc2dDb3VudEF0U2VjdGlvblN0YXJ0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVwb3J0RXJyb3Iobm9kZTogaHRtbC5Ob2RlLCBtc2c6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbXNnKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2lzT3BlbmluZ0NvbW1lbnQobjogaHRtbC5Ob2RlKTogYm9vbGVhbiB7XG4gIHJldHVybiAhIShuIGluc3RhbmNlb2YgaHRtbC5Db21tZW50ICYmIG4udmFsdWUgJiYgbi52YWx1ZS5zdGFydHNXaXRoKCdpMThuJykpO1xufVxuXG5mdW5jdGlvbiBfaXNDbG9zaW5nQ29tbWVudChuOiBodG1sLk5vZGUpOiBib29sZWFuIHtcbiAgcmV0dXJuICEhKG4gaW5zdGFuY2VvZiBodG1sLkNvbW1lbnQgJiYgbi52YWx1ZSAmJiBuLnZhbHVlID09PSAnL2kxOG4nKTtcbn1cblxuZnVuY3Rpb24gX2dldEkxOG5BdHRyKHA6IGh0bWwuRWxlbWVudCk6IGh0bWwuQXR0cmlidXRlfG51bGwge1xuICByZXR1cm4gcC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBfSTE4Tl9BVFRSKSB8fCBudWxsO1xufVxuXG5mdW5jdGlvbiBfcGFyc2VNZXNzYWdlTWV0YShpMThuPzogc3RyaW5nKToge21lYW5pbmc6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgaWQ6IHN0cmluZ30ge1xuICBpZiAoIWkxOG4pIHJldHVybiB7bWVhbmluZzogJycsIGRlc2NyaXB0aW9uOiAnJywgaWQ6ICcnfTtcblxuICBjb25zdCBpZEluZGV4ID0gaTE4bi5pbmRleE9mKElEX1NFUEFSQVRPUik7XG4gIGNvbnN0IGRlc2NJbmRleCA9IGkxOG4uaW5kZXhPZihNRUFOSU5HX1NFUEFSQVRPUik7XG4gIGNvbnN0IFttZWFuaW5nQW5kRGVzYywgaWRdID1cbiAgICAgIChpZEluZGV4ID4gLTEpID8gW2kxOG4uc2xpY2UoMCwgaWRJbmRleCksIGkxOG4uc2xpY2UoaWRJbmRleCArIDIpXSA6IFtpMThuLCAnJ107XG4gIGNvbnN0IFttZWFuaW5nLCBkZXNjcmlwdGlvbl0gPSAoZGVzY0luZGV4ID4gLTEpID9cbiAgICAgIFttZWFuaW5nQW5kRGVzYy5zbGljZSgwLCBkZXNjSW5kZXgpLCBtZWFuaW5nQW5kRGVzYy5zbGljZShkZXNjSW5kZXggKyAxKV0gOlxuICAgICAgWycnLCBtZWFuaW5nQW5kRGVzY107XG5cbiAgcmV0dXJuIHttZWFuaW5nLCBkZXNjcmlwdGlvbiwgaWQ6IGlkLnRyaW0oKX07XG59XG4iXX0=