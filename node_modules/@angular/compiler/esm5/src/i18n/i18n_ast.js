/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
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
export { Message };
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
export { Text };
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
export { Container };
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
export { Icu };
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
export { TagPlaceholder };
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
export { Placeholder };
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
export { IcuPlaceholder };
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
export { CloneVisitor };
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
export { RecurseVisitor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bl9hc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvaTE4bi9pMThuX2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFJSDtJQU1FOzs7Ozs7O09BT0c7SUFDSCxpQkFDVyxLQUFhLEVBQVMsWUFBd0MsRUFDOUQsb0JBQWlELEVBQVMsT0FBZSxFQUN6RSxXQUFtQixFQUFTLFFBQWdCO1FBRjVDLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBNEI7UUFDOUQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE2QjtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDekUsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFRO1FBZnZELE9BQUUsR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzNCLCtGQUErRjtRQUMvRixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBY3ZCLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUM7b0JBQ2QsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHO29CQUM1QyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUM7b0JBQzdDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDM0MsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7b0JBQ3hELE1B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LENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFTLEdBQVEsRUFBRSxPQUFhO1FBQWhDLGlCQUlDO1FBSEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUM5QixHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw0Q0FBbUIsR0FBbkIsVUFBb0IsRUFBa0IsRUFBRSxPQUFhO1FBQXJELGlCQUVDO1FBREMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHlDQUFnQixHQUFoQixVQUFpQixFQUFlLEVBQUUsT0FBYSxJQUFRLENBQUM7SUFFeEQsNENBQW1CLEdBQW5CLFVBQW9CLEVBQWtCLEVBQUUsT0FBYSxJQUFRLENBQUM7SUFDaEUscUJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1BhcnNlU291cmNlU3Bhbn0gZnJvbSAnLi4vcGFyc2VfdXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgc291cmNlczogTWVzc2FnZVNwYW5bXTtcbiAgaWQ6IHN0cmluZyA9IHRoaXMuY3VzdG9tSWQ7XG4gIC8qKiBUaGUgaWRzIHRvIHVzZSBpZiB0aGVyZSBhcmUgbm8gY3VzdG9tIGlkIGFuZCBpZiBgaTE4bkxlZ2FjeU1lc3NhZ2VJZEZvcm1hdGAgaXMgbm90IGVtcHR5ICovXG4gIGxlZ2FjeUlkczogc3RyaW5nW10gPSBbXTtcblxuICAvKipcbiAgICogQHBhcmFtIG5vZGVzIG1lc3NhZ2UgQVNUXG4gICAqIEBwYXJhbSBwbGFjZWhvbGRlcnMgbWFwcyBwbGFjZWhvbGRlciBuYW1lcyB0byBzdGF0aWMgY29udGVudFxuICAgKiBAcGFyYW0gcGxhY2Vob2xkZXJUb01lc3NhZ2UgbWFwcyBwbGFjZWhvbGRlciBuYW1lcyB0byBtZXNzYWdlcyAodXNlZCBmb3IgbmVzdGVkIElDVSBtZXNzYWdlcylcbiAgICogQHBhcmFtIG1lYW5pbmdcbiAgICogQHBhcmFtIGRlc2NyaXB0aW9uXG4gICAqIEBwYXJhbSBjdXN0b21JZFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgbm9kZXM6IE5vZGVbXSwgcHVibGljIHBsYWNlaG9sZGVyczoge1twaE5hbWU6IHN0cmluZ106IHN0cmluZ30sXG4gICAgICBwdWJsaWMgcGxhY2Vob2xkZXJUb01lc3NhZ2U6IHtbcGhOYW1lOiBzdHJpbmddOiBNZXNzYWdlfSwgcHVibGljIG1lYW5pbmc6IHN0cmluZyxcbiAgICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nLCBwdWJsaWMgY3VzdG9tSWQ6IHN0cmluZykge1xuICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc291cmNlcyA9IFt7XG4gICAgICAgIGZpbGVQYXRoOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmZpbGUudXJsLFxuICAgICAgICBzdGFydExpbmU6IG5vZGVzWzBdLnNvdXJjZVNwYW4uc3RhcnQubGluZSArIDEsXG4gICAgICAgIHN0YXJ0Q29sOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmNvbCArIDEsXG4gICAgICAgIGVuZExpbmU6IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdLnNvdXJjZVNwYW4uZW5kLmxpbmUgKyAxLFxuICAgICAgICBlbmRDb2w6IG5vZGVzWzBdLnNvdXJjZVNwYW4uc3RhcnQuY29sICsgMVxuICAgICAgfV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc291cmNlcyA9IFtdO1xuICAgIH1cbiAgfVxufVxuXG4vLyBsaW5lIGFuZCBjb2x1bW5zIGluZGV4ZXMgYXJlIDEgYmFzZWRcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZVNwYW4ge1xuICBmaWxlUGF0aDogc3RyaW5nO1xuICBzdGFydExpbmU6IG51bWJlcjtcbiAgc3RhcnRDb2w6IG51bWJlcjtcbiAgZW5kTGluZTogbnVtYmVyO1xuICBlbmRDb2w6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb2RlIHtcbiAgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuO1xuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dCBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cblxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFRleHQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLy8gVE9ETyh2aWNiKTogZG8gd2UgcmVhbGx5IG5lZWQgdGhpcyBub2RlICh2cyBhbiBhcnJheSkgP1xuZXhwb3J0IGNsYXNzIENvbnRhaW5lciBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2hpbGRyZW46IE5vZGVbXSwgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cblxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENvbnRhaW5lcih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWN1IGltcGxlbWVudHMgTm9kZSB7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwdWJsaWMgZXhwcmVzc2lvblBsYWNlaG9sZGVyITogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBleHByZXNzaW9uOiBzdHJpbmcsIHB1YmxpYyB0eXBlOiBzdHJpbmcsIHB1YmxpYyBjYXNlczoge1trOiBzdHJpbmddOiBOb2RlfSxcbiAgICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRJY3UodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhZ1BsYWNlaG9sZGVyIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHRhZzogc3RyaW5nLCBwdWJsaWMgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSwgcHVibGljIHN0YXJ0TmFtZTogc3RyaW5nLFxuICAgICAgcHVibGljIGNsb3NlTmFtZTogc3RyaW5nLCBwdWJsaWMgY2hpbGRyZW46IE5vZGVbXSwgcHVibGljIGlzVm9pZDogYm9vbGVhbixcbiAgICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRUYWdQbGFjZWhvbGRlcih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGxhY2Vob2xkZXIgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBzdHJpbmcsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRQbGFjZWhvbGRlcih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWN1UGxhY2Vob2xkZXIgaW1wbGVtZW50cyBOb2RlIHtcbiAgLyoqIFVzZWQgdG8gY2FwdHVyZSBhIG1lc3NhZ2UgY29tcHV0ZWQgZnJvbSBhIHByZXZpb3VzIHByb2Nlc3NpbmcgcGFzcyAoc2VlIGBzZXRJMThuUmVmcygpYCkuICovXG4gIHByZXZpb3VzTWVzc2FnZT86IE1lc3NhZ2U7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogSWN1LCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWN1UGxhY2Vob2xkZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBFYWNoIEhUTUwgbm9kZSB0aGF0IGlzIGFmZmVjdCBieSBhbiBpMThuIHRhZyB3aWxsIGFsc28gaGF2ZSBhbiBgaTE4bmAgcHJvcGVydHkgdGhhdCBpcyBvZiB0eXBlXG4gKiBgSTE4bk1ldGFgLlxuICogVGhpcyBpbmZvcm1hdGlvbiBpcyBlaXRoZXIgYSBgTWVzc2FnZWAsIHdoaWNoIGluZGljYXRlcyBpdCBpcyB0aGUgcm9vdCBvZiBhbiBpMThuIG1lc3NhZ2UsIG9yIGFcbiAqIGBOb2RlYCwgd2hpY2ggaW5kaWNhdGVzIGlzIGl0IHBhcnQgb2YgYSBjb250YWluaW5nIGBNZXNzYWdlYC5cbiAqL1xuZXhwb3J0IHR5cGUgSTE4bk1ldGEgPSBNZXNzYWdlfE5vZGU7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IENvbnRhaW5lciwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRJY3UoaWN1OiBJY3UsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IFRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogSWN1UGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG59XG5cbi8vIENsb25lIHRoZSBBU1RcbmV4cG9ydCBjbGFzcyBDbG9uZVZpc2l0b3IgaW1wbGVtZW50cyBWaXNpdG9yIHtcbiAgdmlzaXRUZXh0KHRleHQ6IFRleHQsIGNvbnRleHQ/OiBhbnkpOiBUZXh0IHtcbiAgICByZXR1cm4gbmV3IFRleHQodGV4dC52YWx1ZSwgdGV4dC5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogQ29udGFpbmVyIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGNvbnRhaW5lci5jaGlsZHJlbi5tYXAobiA9PiBuLnZpc2l0KHRoaXMsIGNvbnRleHQpKTtcbiAgICByZXR1cm4gbmV3IENvbnRhaW5lcihjaGlsZHJlbiwgY29udGFpbmVyLnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRJY3UoaWN1OiBJY3UsIGNvbnRleHQ/OiBhbnkpOiBJY3Uge1xuICAgIGNvbnN0IGNhc2VzOiB7W2s6IHN0cmluZ106IE5vZGV9ID0ge307XG4gICAgT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5mb3JFYWNoKGtleSA9PiBjYXNlc1trZXldID0gaWN1LmNhc2VzW2tleV0udmlzaXQodGhpcywgY29udGV4dCkpO1xuICAgIGNvbnN0IG1zZyA9IG5ldyBJY3UoaWN1LmV4cHJlc3Npb24sIGljdS50eXBlLCBjYXNlcywgaWN1LnNvdXJjZVNwYW4pO1xuICAgIG1zZy5leHByZXNzaW9uUGxhY2Vob2xkZXIgPSBpY3UuZXhwcmVzc2lvblBsYWNlaG9sZGVyO1xuICAgIHJldHVybiBtc2c7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBUYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IFRhZ1BsYWNlaG9sZGVyIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHBoLmNoaWxkcmVuLm1hcChuID0+IG4udmlzaXQodGhpcywgY29udGV4dCkpO1xuICAgIHJldHVybiBuZXcgVGFnUGxhY2Vob2xkZXIoXG4gICAgICAgIHBoLnRhZywgcGguYXR0cnMsIHBoLnN0YXJ0TmFtZSwgcGguY2xvc2VOYW1lLCBjaGlsZHJlbiwgcGguaXNWb2lkLCBwaC5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IFBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogUGxhY2Vob2xkZXIge1xuICAgIHJldHVybiBuZXcgUGxhY2Vob2xkZXIocGgudmFsdWUsIHBoLm5hbWUsIHBoLnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogSWN1UGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBJY3VQbGFjZWhvbGRlciB7XG4gICAgcmV0dXJuIG5ldyBJY3VQbGFjZWhvbGRlcihwaC52YWx1ZSwgcGgubmFtZSwgcGguc291cmNlU3Bhbik7XG4gIH1cbn1cblxuLy8gVmlzaXQgYWxsIHRoZSBub2RlcyByZWN1cnNpdmVseVxuZXhwb3J0IGNsYXNzIFJlY3Vyc2VWaXNpdG9yIGltcGxlbWVudHMgVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0LCBjb250ZXh0PzogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBDb250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIGNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogSWN1LCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLmZvckVhY2goayA9PiB7XG4gICAgICBpY3UuY2FzZXNba10udmlzaXQodGhpcyk7XG4gICAgfSk7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBUYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcGguY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IEljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHt9XG59XG4iXX0=