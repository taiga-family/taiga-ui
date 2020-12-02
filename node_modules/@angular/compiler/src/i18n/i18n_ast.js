/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/i18n/i18n_ast", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Message = /** @class */ (function () {
        /**
         * @param nodes message AST
         * @param placeholders maps placeholder names to static content
         * @param placeholderToMessage maps placeholder names to messages (used for nested ICU messages)
         * @param meaning
         * @param description
         * @param customId
         */
        function Message(nodes, placeholders, placeholderToMessage, meaning, description, customId) {
            this.nodes = nodes;
            this.placeholders = placeholders;
            this.placeholderToMessage = placeholderToMessage;
            this.meaning = meaning;
            this.description = description;
            this.customId = customId;
            this.id = this.customId;
            /** The ids to use if there are no custom id and if `i18nLegacyMessageIdFormat` is not empty */
            this.legacyIds = [];
            if (nodes.length) {
                this.sources = [{
                        filePath: nodes[0].sourceSpan.start.file.url,
                        startLine: nodes[0].sourceSpan.start.line + 1,
                        startCol: nodes[0].sourceSpan.start.col + 1,
                        endLine: nodes[nodes.length - 1].sourceSpan.end.line + 1,
                        endCol: nodes[0].sourceSpan.start.col + 1
                    }];
            }
            else {
                this.sources = [];
            }
        }
        return Message;
    }());
    exports.Message = Message;
    var Text = /** @class */ (function () {
        function Text(value, sourceSpan) {
            this.value = value;
            this.sourceSpan = sourceSpan;
        }
        Text.prototype.visit = function (visitor, context) {
            return visitor.visitText(this, context);
        };
        return Text;
    }());
    exports.Text = Text;
    // TODO(vicb): do we really need this node (vs an array) ?
    var Container = /** @class */ (function () {
        function Container(children, sourceSpan) {
            this.children = children;
            this.sourceSpan = sourceSpan;
        }
        Container.prototype.visit = function (visitor, context) {
            return visitor.visitContainer(this, context);
        };
        return Container;
    }());
    exports.Container = Container;
    var Icu = /** @class */ (function () {
        function Icu(expression, type, cases, sourceSpan) {
            this.expression = expression;
            this.type = type;
            this.cases = cases;
            this.sourceSpan = sourceSpan;
        }
        Icu.prototype.visit = function (visitor, context) {
            return visitor.visitIcu(this, context);
        };
        return Icu;
    }());
    exports.Icu = Icu;
    var TagPlaceholder = /** @class */ (function () {
        function TagPlaceholder(tag, attrs, startName, closeName, children, isVoid, sourceSpan) {
            this.tag = tag;
            this.attrs = attrs;
            this.startName = startName;
            this.closeName = closeName;
            this.children = children;
            this.isVoid = isVoid;
            this.sourceSpan = sourceSpan;
        }
        TagPlaceholder.prototype.visit = function (visitor, context) {
            return visitor.visitTagPlaceholder(this, context);
        };
        return TagPlaceholder;
    }());
    exports.TagPlaceholder = TagPlaceholder;
    var Placeholder = /** @class */ (function () {
        function Placeholder(value, name, sourceSpan) {
            this.value = value;
            this.name = name;
            this.sourceSpan = sourceSpan;
        }
        Placeholder.prototype.visit = function (visitor, context) {
            return visitor.visitPlaceholder(this, context);
        };
        return Placeholder;
    }());
    exports.Placeholder = Placeholder;
    var IcuPlaceholder = /** @class */ (function () {
        function IcuPlaceholder(value, name, sourceSpan) {
            this.value = value;
            this.name = name;
            this.sourceSpan = sourceSpan;
        }
        IcuPlaceholder.prototype.visit = function (visitor, context) {
            return visitor.visitIcuPlaceholder(this, context);
        };
        return IcuPlaceholder;
    }());
    exports.IcuPlaceholder = IcuPlaceholder;
    // Clone the AST
    var CloneVisitor = /** @class */ (function () {
        function CloneVisitor() {
        }
        CloneVisitor.prototype.visitText = function (text, context) {
            return new Text(text.value, text.sourceSpan);
        };
        CloneVisitor.prototype.visitContainer = function (container, context) {
            var _this = this;
            var children = container.children.map(function (n) { return n.visit(_this, context); });
            return new Container(children, container.sourceSpan);
        };
        CloneVisitor.prototype.visitIcu = function (icu, context) {
            var _this = this;
            var cases = {};
            Object.keys(icu.cases).forEach(function (key) { return cases[key] = icu.cases[key].visit(_this, context); });
            var msg = new Icu(icu.expression, icu.type, cases, icu.sourceSpan);
            msg.expressionPlaceholder = icu.expressionPlaceholder;
            return msg;
        };
        CloneVisitor.prototype.visitTagPlaceholder = function (ph, context) {
            var _this = this;
            var children = ph.children.map(function (n) { return n.visit(_this, context); });
            return new TagPlaceholder(ph.tag, ph.attrs, ph.startName, ph.closeName, children, ph.isVoid, ph.sourceSpan);
        };
        CloneVisitor.prototype.visitPlaceholder = function (ph, context) {
            return new Placeholder(ph.value, ph.name, ph.sourceSpan);
        };
        CloneVisitor.prototype.visitIcuPlaceholder = function (ph, context) {
            return new IcuPlaceholder(ph.value, ph.name, ph.sourceSpan);
        };
        return CloneVisitor;
    }());
    exports.CloneVisitor = CloneVisitor;
    // Visit all the nodes recursively
    var RecurseVisitor = /** @class */ (function () {
        function RecurseVisitor() {
        }
        RecurseVisitor.prototype.visitText = function (text, context) { };
        RecurseVisitor.prototype.visitContainer = function (container, context) {
            var _this = this;
            container.children.forEach(function (child) { return child.visit(_this); });
        };
        RecurseVisitor.prototype.visitIcu = function (icu, context) {
            var _this = this;
            Object.keys(icu.cases).forEach(function (k) {
                icu.cases[k].visit(_this);
            });
        };
        RecurseVisitor.prototype.visitTagPlaceholder = function (ph, context) {
            var _this = this;
            ph.children.forEach(function (child) { return child.visit(_this); });
        };
        RecurseVisitor.prototype.visitPlaceholder = function (ph, context) { };
        RecurseVisitor.prototype.visitIcuPlaceholder = function (ph, context) { };
        return RecurseVisitor;
    }());
    exports.RecurseVisitor = RecurseVisitor;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bl9hc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvaTE4bi9pMThuX2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUlIO1FBTUU7Ozs7Ozs7V0FPRztRQUNILGlCQUNXLEtBQWEsRUFBUyxZQUF3QyxFQUM5RCxvQkFBaUQsRUFBUyxPQUFlLEVBQ3pFLFdBQW1CLEVBQVMsUUFBZ0I7WUFGNUMsVUFBSyxHQUFMLEtBQUssQ0FBUTtZQUFTLGlCQUFZLEdBQVosWUFBWSxDQUE0QjtZQUM5RCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTZCO1lBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtZQUN6RSxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtZQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7WUFmdkQsT0FBRSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDM0IsK0ZBQStGO1lBQy9GLGNBQVMsR0FBYSxFQUFFLENBQUM7WUFjdkIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUM7d0JBQ2QsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHO3dCQUM1QyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUM7d0JBQzdDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFDM0MsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7d0JBQ3hE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UyxHQUFULFVBQVUsSUFBVSxFQUFFLE9BQWEsSUFBUSxDQUFDO1FBRTVDLHVDQUFjLEdBQWQsVUFBZSxTQUFvQixFQUFFLE9BQWE7WUFBbEQsaUJBRUM7WUFEQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBRUQsaUNBQVEsR0FBUixVQUFTLEdBQVEsRUFBRSxPQUFhO1lBQWhDLGlCQUlDO1lBSEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDOUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsNENBQW1CLEdBQW5CLFVBQW9CLEVBQWtCLEVBQUUsT0FBYTtZQUFyRCxpQkFFQztZQURDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFFRCx5Q0FBZ0IsR0FBaEIsVUFBaUIsRUFBZSxFQUFFLE9BQWEsSUFBUSxDQUFDO1FBRXhELDRDQUFtQixHQUFuQixVQUFvQixFQUFrQixFQUFFLE9BQWEsSUFBUSxDQUFDO1FBQ2hFLHFCQUFDO0lBQUQsQ0FBQyxBQXBCRCxJQW9CQztJQXBCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtQYXJzZVNvdXJjZVNwYW59IGZyb20gJy4uL3BhcnNlX3V0aWwnO1xuXG5leHBvcnQgY2xhc3MgTWVzc2FnZSB7XG4gIHNvdXJjZXM6IE1lc3NhZ2VTcGFuW107XG4gIGlkOiBzdHJpbmcgPSB0aGlzLmN1c3RvbUlkO1xuICAvKiogVGhlIGlkcyB0byB1c2UgaWYgdGhlcmUgYXJlIG5vIGN1c3RvbSBpZCBhbmQgaWYgYGkxOG5MZWdhY3lNZXNzYWdlSWRGb3JtYXRgIGlzIG5vdCBlbXB0eSAqL1xuICBsZWdhY3lJZHM6IHN0cmluZ1tdID0gW107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBub2RlcyBtZXNzYWdlIEFTVFxuICAgKiBAcGFyYW0gcGxhY2Vob2xkZXJzIG1hcHMgcGxhY2Vob2xkZXIgbmFtZXMgdG8gc3RhdGljIGNvbnRlbnRcbiAgICogQHBhcmFtIHBsYWNlaG9sZGVyVG9NZXNzYWdlIG1hcHMgcGxhY2Vob2xkZXIgbmFtZXMgdG8gbWVzc2FnZXMgKHVzZWQgZm9yIG5lc3RlZCBJQ1UgbWVzc2FnZXMpXG4gICAqIEBwYXJhbSBtZWFuaW5nXG4gICAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICAgKiBAcGFyYW0gY3VzdG9tSWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIG5vZGVzOiBOb2RlW10sIHB1YmxpYyBwbGFjZWhvbGRlcnM6IHtbcGhOYW1lOiBzdHJpbmddOiBzdHJpbmd9LFxuICAgICAgcHVibGljIHBsYWNlaG9sZGVyVG9NZXNzYWdlOiB7W3BoTmFtZTogc3RyaW5nXTogTWVzc2FnZX0sIHB1YmxpYyBtZWFuaW5nOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZywgcHVibGljIGN1c3RvbUlkOiBzdHJpbmcpIHtcbiAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNvdXJjZXMgPSBbe1xuICAgICAgICBmaWxlUGF0aDogbm9kZXNbMF0uc291cmNlU3Bhbi5zdGFydC5maWxlLnVybCxcbiAgICAgICAgc3RhcnRMaW5lOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmxpbmUgKyAxLFxuICAgICAgICBzdGFydENvbDogbm9kZXNbMF0uc291cmNlU3Bhbi5zdGFydC5jb2wgKyAxLFxuICAgICAgICBlbmRMaW5lOiBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXS5zb3VyY2VTcGFuLmVuZC5saW5lICsgMSxcbiAgICAgICAgZW5kQ29sOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmNvbCArIDFcbiAgICAgIH1dO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvdXJjZXMgPSBbXTtcbiAgICB9XG4gIH1cbn1cblxuLy8gbGluZSBhbmQgY29sdW1ucyBpbmRleGVzIGFyZSAxIGJhc2VkXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VTcGFuIHtcbiAgZmlsZVBhdGg6IHN0cmluZztcbiAgc3RhcnRMaW5lOiBudW1iZXI7XG4gIHN0YXJ0Q29sOiBudW1iZXI7XG4gIGVuZExpbmU6IG51bWJlcjtcbiAgZW5kQ29sOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZSB7XG4gIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbjtcbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFRleHQgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBzdHJpbmcsIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRUZXh0KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbi8vIFRPRE8odmljYik6IGRvIHdlIHJlYWxseSBuZWVkIHRoaXMgbm9kZSAodnMgYW4gYXJyYXkpID9cbmV4cG9ydCBjbGFzcyBDb250YWluZXIgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNoaWxkcmVuOiBOb2RlW10sIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDb250YWluZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEljdSBpbXBsZW1lbnRzIE5vZGUge1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHVibGljIGV4cHJlc3Npb25QbGFjZWhvbGRlciE6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgZXhwcmVzc2lvbjogc3RyaW5nLCBwdWJsaWMgdHlwZTogc3RyaW5nLCBwdWJsaWMgY2FzZXM6IHtbazogc3RyaW5nXTogTm9kZX0sXG4gICAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWN1KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYWdQbGFjZWhvbGRlciBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyB0YWc6IHN0cmluZywgcHVibGljIGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30sIHB1YmxpYyBzdGFydE5hbWU6IHN0cmluZyxcbiAgICAgIHB1YmxpYyBjbG9zZU5hbWU6IHN0cmluZywgcHVibGljIGNoaWxkcmVuOiBOb2RlW10sIHB1YmxpYyBpc1ZvaWQ6IGJvb2xlYW4sXG4gICAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGFnUGxhY2Vob2xkZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYWNlaG9sZGVyIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UGxhY2Vob2xkZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEljdVBsYWNlaG9sZGVyIGltcGxlbWVudHMgTm9kZSB7XG4gIC8qKiBVc2VkIHRvIGNhcHR1cmUgYSBtZXNzYWdlIGNvbXB1dGVkIGZyb20gYSBwcmV2aW91cyBwcm9jZXNzaW5nIHBhc3MgKHNlZSBgc2V0STE4blJlZnMoKWApLiAqL1xuICBwcmV2aW91c01lc3NhZ2U/OiBNZXNzYWdlO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IEljdSwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cblxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEljdVBsYWNlaG9sZGVyKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogRWFjaCBIVE1MIG5vZGUgdGhhdCBpcyBhZmZlY3QgYnkgYW4gaTE4biB0YWcgd2lsbCBhbHNvIGhhdmUgYW4gYGkxOG5gIHByb3BlcnR5IHRoYXQgaXMgb2YgdHlwZVxuICogYEkxOG5NZXRhYC5cbiAqIFRoaXMgaW5mb3JtYXRpb24gaXMgZWl0aGVyIGEgYE1lc3NhZ2VgLCB3aGljaCBpbmRpY2F0ZXMgaXQgaXMgdGhlIHJvb3Qgb2YgYW4gaTE4biBtZXNzYWdlLCBvciBhXG4gKiBgTm9kZWAsIHdoaWNoIGluZGljYXRlcyBpcyBpdCBwYXJ0IG9mIGEgY29udGFpbmluZyBgTWVzc2FnZWAuXG4gKi9cbmV4cG9ydCB0eXBlIEkxOG5NZXRhID0gTWVzc2FnZXxOb2RlO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogVGV4dCwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBDb250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0SWN1KGljdTogSWN1LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBUYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IEljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55O1xufVxuXG4vLyBDbG9uZSB0aGUgQVNUXG5leHBvcnQgY2xhc3MgQ2xvbmVWaXNpdG9yIGltcGxlbWVudHMgVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0LCBjb250ZXh0PzogYW55KTogVGV4dCB7XG4gICAgcmV0dXJuIG5ldyBUZXh0KHRleHQudmFsdWUsIHRleHQuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IENvbnRhaW5lciwgY29udGV4dD86IGFueSk6IENvbnRhaW5lciB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBjb250YWluZXIuY2hpbGRyZW4ubWFwKG4gPT4gbi52aXNpdCh0aGlzLCBjb250ZXh0KSk7XG4gICAgcmV0dXJuIG5ldyBDb250YWluZXIoY2hpbGRyZW4sIGNvbnRhaW5lci5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogSWN1LCBjb250ZXh0PzogYW55KTogSWN1IHtcbiAgICBjb25zdCBjYXNlczoge1trOiBzdHJpbmddOiBOb2RlfSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGljdS5jYXNlcykuZm9yRWFjaChrZXkgPT4gY2FzZXNba2V5XSA9IGljdS5jYXNlc1trZXldLnZpc2l0KHRoaXMsIGNvbnRleHQpKTtcbiAgICBjb25zdCBtc2cgPSBuZXcgSWN1KGljdS5leHByZXNzaW9uLCBpY3UudHlwZSwgY2FzZXMsIGljdS5zb3VyY2VTcGFuKTtcbiAgICBtc2cuZXhwcmVzc2lvblBsYWNlaG9sZGVyID0gaWN1LmV4cHJlc3Npb25QbGFjZWhvbGRlcjtcbiAgICByZXR1cm4gbXNnO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBUYWdQbGFjZWhvbGRlciB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwaC5jaGlsZHJlbi5tYXAobiA9PiBuLnZpc2l0KHRoaXMsIGNvbnRleHQpKTtcbiAgICByZXR1cm4gbmV3IFRhZ1BsYWNlaG9sZGVyKFxuICAgICAgICBwaC50YWcsIHBoLmF0dHJzLCBwaC5zdGFydE5hbWUsIHBoLmNsb3NlTmFtZSwgY2hpbGRyZW4sIHBoLmlzVm9pZCwgcGguc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IFBsYWNlaG9sZGVyIHtcbiAgICByZXR1cm4gbmV3IFBsYWNlaG9sZGVyKHBoLnZhbHVlLCBwaC5uYW1lLCBwaC5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IEljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogSWN1UGxhY2Vob2xkZXIge1xuICAgIHJldHVybiBuZXcgSWN1UGxhY2Vob2xkZXIocGgudmFsdWUsIHBoLm5hbWUsIHBoLnNvdXJjZVNwYW4pO1xuICB9XG59XG5cbi8vIFZpc2l0IGFsbCB0aGUgbm9kZXMgcmVjdXJzaXZlbHlcbmV4cG9ydCBjbGFzcyBSZWN1cnNlVmlzaXRvciBpbXBsZW1lbnRzIFZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogVGV4dCwgY29udGV4dD86IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IEljdSwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgaWN1LmNhc2VzW2tdLnZpc2l0KHRoaXMpO1xuICAgIH0pO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHBoLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBJY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7fVxufVxuIl19