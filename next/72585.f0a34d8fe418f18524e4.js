"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[72585],{

/***/ 72585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Table": () => (/* binding */ Table),
  "createTable": () => (/* binding */ createTable),
  "default": () => (/* binding */ Table)
});

// EXTERNAL MODULE: ./node_modules/prosemirror-state/dist/index.js
var dist = __webpack_require__(62463);
// EXTERNAL MODULE: ./node_modules/prosemirror-model/dist/index.js + 1 modules
var prosemirror_model_dist = __webpack_require__(35917);
// EXTERNAL MODULE: ./node_modules/prosemirror-keymap/dist/index.js + 1 modules
var prosemirror_keymap_dist = __webpack_require__(13903);
// EXTERNAL MODULE: ./node_modules/prosemirror-view/dist/index.js
var prosemirror_view_dist = __webpack_require__(43594);
// EXTERNAL MODULE: ./node_modules/prosemirror-transform/dist/index.js
var prosemirror_transform_dist = __webpack_require__(38480);
;// CONCATENATED MODULE: ./node_modules/@_ueberdosis/prosemirror-tables/dist/index.esm.js




 // Because working with row and column-spanning cells is not quite
// trivial, this code builds up a descriptive structure for a given
// table node. The structures are cached with the (persistent) table
// nodes as key, so that they only have to be recomputed when the
// content of the table changes.
//
// This does mean that they have to store table-relative, not
// document-relative positions. So code that uses them will typically
// compute the start position of the table and offset positions passed
// to or gotten from this structure by that amount.

let readFromCache, addToCache; // Prefer using a weak map to cache table maps. Fall back on a
// fixed-size cache if that's not supported.

if (typeof WeakMap != 'undefined') {
  // eslint-disable-next-line
  let cache = new WeakMap();

  readFromCache = key => cache.get(key);

  addToCache = (key, value) => {
    cache.set(key, value);
    return value;
  };
} else {
  let cache = [],
      cacheSize = 10,
      cachePos = 0;

  readFromCache = key => {
    for (let i = 0; i < cache.length; i += 2) if (cache[i] == key) return cache[i + 1];
  };

  addToCache = (key, value) => {
    if (cachePos == cacheSize) cachePos = 0;
    cache[cachePos++] = key;
    return cache[cachePos++] = value;
  };
}

class Rect {
  constructor(left, top, right, bottom) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }

} // ::- A table map describes the structore of a given table. To avoid
// recomputing them all the time, they are cached per table node. To
// be able to do that, positions saved in the map are relative to the
// start of the table, rather than the start of the document.


class TableMap {
  constructor(width, height, map, problems) {
    // :: number The width of the table
    this.width = width; // :: number The table's height

    this.height = height; // :: [number] A width * height array with the start position of
    // the cell covering that part of the table in each slot

    this.map = map; // An optional array of problems (cell overlap or non-rectangular
    // shape) for the table, used by the table normalizer.

    this.problems = problems;
  } // :: (number) → Rect
  // Find the dimensions of the cell at the given position.


  findCell(pos) {
    for (let i = 0; i < this.map.length; i++) {
      let curPos = this.map[i];
      if (curPos != pos) continue;
      let left = i % this.width,
          top = i / this.width | 0;
      let right = left + 1,
          bottom = top + 1;

      for (let j = 1; right < this.width && this.map[i + j] == curPos; j++) right++;

      for (let j = 1; bottom < this.height && this.map[i + this.width * j] == curPos; j++) bottom++;

      return new Rect(left, top, right, bottom);
    }

    throw new RangeError('No cell with offset ' + pos + ' found');
  } // :: (number) → number
  // Find the left side of the cell at the given position.


  colCount(pos) {
    for (let i = 0; i < this.map.length; i++) if (this.map[i] == pos) return i % this.width;

    throw new RangeError('No cell with offset ' + pos + ' found');
  } // :: (number, string, number) → ?number
  // Find the next cell in the given direction, starting from the cell
  // at `pos`, if any.


  nextCell(pos, axis, dir) {
    let {
      left,
      right,
      top,
      bottom
    } = this.findCell(pos);

    if (axis == 'horiz') {
      if (dir < 0 ? left == 0 : right == this.width) return null;
      return this.map[top * this.width + (dir < 0 ? left - 1 : right)];
    } else {
      if (dir < 0 ? top == 0 : bottom == this.height) return null;
      return this.map[left + this.width * (dir < 0 ? top - 1 : bottom)];
    }
  } // :: (number, number) → Rect
  // Get the rectangle spanning the two given cells.


  rectBetween(a, b) {
    let {
      left: leftA,
      right: rightA,
      top: topA,
      bottom: bottomA
    } = this.findCell(a);
    let {
      left: leftB,
      right: rightB,
      top: topB,
      bottom: bottomB
    } = this.findCell(b);
    return new Rect(Math.min(leftA, leftB), Math.min(topA, topB), Math.max(rightA, rightB), Math.max(bottomA, bottomB));
  } // :: (Rect) → [number]
  // Return the position of all cells that have the top left corner in
  // the given rectangle.


  cellsInRect(rect) {
    let result = [],
        seen = {};

    for (let row = rect.top; row < rect.bottom; row++) {
      for (let col = rect.left; col < rect.right; col++) {
        let index = row * this.width + col,
            pos = this.map[index];
        if (seen[pos]) continue;
        seen[pos] = true;
        if ((col != rect.left || !col || this.map[index - 1] != pos) && (row != rect.top || !row || this.map[index - this.width] != pos)) result.push(pos);
      }
    }

    return result;
  } // :: (number, number, Node) → number
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.


  positionAt(row, col, table) {
    for (let i = 0, rowStart = 0;; i++) {
      let rowEnd = rowStart + table.child(i).nodeSize;

      if (i == row) {
        let index = col + row * this.width,
            rowEndIndex = (row + 1) * this.width; // Skip past cells from previous rows (via rowspan)

        while (index < rowEndIndex && this.map[index] < rowStart) index++;

        return index == rowEndIndex ? rowEnd - 1 : this.map[index];
      }

      rowStart = rowEnd;
    }
  } // :: (Node) → TableMap
  // Find the table map for the given table node.


  static get(table) {
    return readFromCache(table) || addToCache(table, computeMap(table));
  }

} // Compute a table map.


function computeMap(table) {
  if (table.type.spec.tableRole != 'table') throw new RangeError('Not a table node: ' + table.type.name);
  let width = findWidth(table),
      height = table.childCount;
  let map = [],
      mapPos = 0,
      problems = null,
      colWidths = [];

  for (let i = 0, e = width * height; i < e; i++) map[i] = 0;

  for (let row = 0, pos = 0; row < height; row++) {
    let rowNode = table.child(row);
    pos++;

    for (let i = 0;; i++) {
      while (mapPos < map.length && map[mapPos] != 0) mapPos++;

      if (i == rowNode.childCount) break;
      let cellNode = rowNode.child(i),
          {
        colspan,
        rowspan,
        colwidth
      } = cellNode.attrs;

      for (let h = 0; h < rowspan; h++) {
        if (h + row >= height) {
          (problems || (problems = [])).push({
            type: 'overlong_rowspan',
            pos,
            n: rowspan - h
          });
          break;
        }

        let start = mapPos + h * width;

        for (let w = 0; w < colspan; w++) {
          if (map[start + w] == 0) map[start + w] = pos;else (problems || (problems = [])).push({
            type: 'collision',
            row,
            pos,
            n: colspan - w
          });
          let colW = colwidth && colwidth[w];

          if (colW) {
            let widthIndex = (start + w) % width * 2,
                prev = colWidths[widthIndex];

            if (prev == null || prev != colW && colWidths[widthIndex + 1] == 1) {
              colWidths[widthIndex] = colW;
              colWidths[widthIndex + 1] = 1;
            } else if (prev == colW) {
              colWidths[widthIndex + 1]++;
            }
          }
        }
      }

      mapPos += colspan;
      pos += cellNode.nodeSize;
    }

    let expectedPos = (row + 1) * width,
        missing = 0;

    while (mapPos < expectedPos) if (map[mapPos++] == 0) missing++;

    if (missing) (problems || (problems = [])).push({
      type: 'missing',
      row,
      n: missing
    });
    pos++;
  }

  let tableMap = new TableMap(width, height, map, problems),
      badWidths = false; // For columns that have defined widths, but whose widths disagree
  // between rows, fix up the cells whose width doesn't match the
  // computed one.

  for (let i = 0; !badWidths && i < colWidths.length; i += 2) if (colWidths[i] != null && colWidths[i + 1] < height) badWidths = true;

  if (badWidths) findBadColWidths(tableMap, colWidths, table);
  return tableMap;
}

function findWidth(table) {
  let width = -1,
      hasRowSpan = false;

  for (let row = 0; row < table.childCount; row++) {
    let rowNode = table.child(row),
        rowWidth = 0;
    if (hasRowSpan) for (let j = 0; j < row; j++) {
      let prevRow = table.child(j);

      for (let i = 0; i < prevRow.childCount; i++) {
        let cell = prevRow.child(i);
        if (j + cell.attrs.rowspan > row) rowWidth += cell.attrs.colspan;
      }
    }

    for (let i = 0; i < rowNode.childCount; i++) {
      let cell = rowNode.child(i);
      rowWidth += cell.attrs.colspan;
      if (cell.attrs.rowspan > 1) hasRowSpan = true;
    }

    if (width == -1) width = rowWidth;else if (width != rowWidth) width = Math.max(width, rowWidth);
  }

  return width;
}

function findBadColWidths(map, colWidths, table) {
  if (!map.problems) map.problems = [];

  for (let i = 0, seen = {}; i < map.map.length; i++) {
    let pos = map.map[i];
    if (seen[pos]) continue;
    seen[pos] = true;
    let node = table.nodeAt(pos),
        updated = null;

    for (let j = 0; j < node.attrs.colspan; j++) {
      let col = (i + j) % map.width,
          colWidth = colWidths[col * 2];
      if (colWidth != null && (!node.attrs.colwidth || node.attrs.colwidth[j] != colWidth)) (updated || (updated = freshColWidth(node.attrs)))[j] = colWidth;
    }

    if (updated) map.problems.unshift({
      type: 'colwidth mismatch',
      pos,
      colwidth: updated
    });
  }
}

function freshColWidth(attrs) {
  if (attrs.colwidth) return attrs.colwidth.slice();
  let result = [];

  for (let i = 0; i < attrs.colspan; i++) result.push(0);

  return result;
} // Helper for creating a schema that supports tables.


function getCellAttrs(dom, extraAttrs) {
  let widthAttr = dom.getAttribute('data-colwidth');
  let widths = widthAttr && /^\d+(,\d+)*$/.test(widthAttr) ? widthAttr.split(',').map(s => Number(s)) : null;
  let colspan = Number(dom.getAttribute('colspan') || 1);
  let result = {
    colspan,
    rowspan: Number(dom.getAttribute('rowspan') || 1),
    colwidth: widths && widths.length == colspan ? widths : null
  };

  for (let prop in extraAttrs) {
    let getter = extraAttrs[prop].getFromDOM;
    let value = getter && getter(dom);
    if (value != null) result[prop] = value;
  }

  return result;
}

function setCellAttrs(node, extraAttrs) {
  let attrs = {};
  if (node.attrs.colspan != 1) attrs.colspan = node.attrs.colspan;
  if (node.attrs.rowspan != 1) attrs.rowspan = node.attrs.rowspan;
  if (node.attrs.colwidth) attrs['data-colwidth'] = node.attrs.colwidth.join(',');

  for (let prop in extraAttrs) {
    let setter = extraAttrs[prop].setDOMAttr;
    if (setter) setter(node.attrs[prop], attrs);
  }

  return attrs;
} // :: (Object) → Object
//
// This function creates a set of [node
// specs](http://prosemirror.net/docs/ref/#model.SchemaSpec.nodes) for
// `table`, `table_row`, and `table_cell` nodes types as used by this
// module. The result can then be added to the set of nodes when
// creating a a schema.
//
//   options::- The following options are understood:
//
//     tableGroup:: ?string
//     A group name (something like `"block"`) to add to the table
//     node type.
//
//     cellContent:: string
//     The content expression for table cells.
//
//     cellAttributes:: ?Object
//     Additional attributes to add to cells. Maps attribute names to
//     objects with the following properties:
//
//       default:: any
//       The attribute's default value.
//
//       getFromDOM:: ?(dom.Node) → any
//       A function to read the attribute's value from a DOM node.
//
//       setDOMAttr:: ?(value: any, attrs: Object)
//       A function to add the attribute's value to an attribute
//       object that's used to render the cell's DOM.


function tableNodes(options) {
  let extraAttrs = options.cellAttributes || {};
  let cellAttrs = {
    colspan: {
      default: 1
    },
    rowspan: {
      default: 1
    },
    colwidth: {
      default: null
    }
  };

  for (let prop in extraAttrs) cellAttrs[prop] = {
    default: extraAttrs[prop].default
  };

  return {
    table: {
      content: 'table_row+',
      tableRole: 'table',
      isolating: true,
      group: options.tableGroup,
      parseDOM: [{
        tag: 'table'
      }],

      toDOM() {
        return ['table', ['tbody', 0]];
      }

    },
    table_row: {
      content: '(table_cell | table_header)*',
      tableRole: 'row',
      parseDOM: [{
        tag: 'tr'
      }],

      toDOM() {
        return ['tr', 0];
      }

    },
    table_cell: {
      content: options.cellContent,
      attrs: cellAttrs,
      tableRole: 'cell',
      isolating: true,
      parseDOM: [{
        tag: 'td',
        getAttrs: dom => getCellAttrs(dom, extraAttrs)
      }],

      toDOM(node) {
        return ['td', setCellAttrs(node, extraAttrs), 0];
      }

    },
    table_header: {
      content: options.cellContent,
      attrs: cellAttrs,
      tableRole: 'header_cell',
      isolating: true,
      parseDOM: [{
        tag: 'th',
        getAttrs: dom => getCellAttrs(dom, extraAttrs)
      }],

      toDOM(node) {
        return ['th', setCellAttrs(node, extraAttrs), 0];
      }

    }
  };
}

function tableNodeTypes(schema) {
  let result = schema.cached.tableNodeTypes;

  if (!result) {
    result = schema.cached.tableNodeTypes = {};

    for (let name in schema.nodes) {
      let type = schema.nodes[name],
          role = type.spec.tableRole;
      if (role) result[role] = type;
    }
  }

  return result;
} // Various helper function for working with tables


const key$1 = new dist/* PluginKey */.H$('selectingCells');

function cellAround($pos) {
  for (let d = $pos.depth - 1; d > 0; d--) if ($pos.node(d).type.spec.tableRole == 'row') return $pos.node(0).resolve($pos.before(d + 1));

  return null;
}

function cellWrapping($pos) {
  for (let d = $pos.depth; d > 0; d--) {
    // Sometimes the cell can be in the same depth.
    const role = $pos.node(d).type.spec.tableRole;
    if (role === 'cell' || role === 'header_cell') return $pos.node(d);
  }

  return null;
}

function isInTable(state) {
  let $head = state.selection.$head;

  for (let d = $head.depth; d > 0; d--) if ($head.node(d).type.spec.tableRole == 'row') return true;

  return false;
}

function selectionCell(state) {
  let sel = state.selection;

  if (sel.$anchorCell) {
    return sel.$anchorCell.pos > sel.$headCell.pos ? sel.$anchorCell : sel.$headCell;
  } else if (sel.node && sel.node.type.spec.tableRole == 'cell') {
    return sel.$anchor;
  }

  return cellAround(sel.$head) || cellNear(sel.$head);
}

function cellNear($pos) {
  for (let after = $pos.nodeAfter, pos = $pos.pos; after; after = after.firstChild, pos++) {
    let role = after.type.spec.tableRole;
    if (role == 'cell' || role == 'header_cell') return $pos.doc.resolve(pos);
  }

  for (let before = $pos.nodeBefore, pos = $pos.pos; before; before = before.lastChild, pos--) {
    let role = before.type.spec.tableRole;
    if (role == 'cell' || role == 'header_cell') return $pos.doc.resolve(pos - before.nodeSize);
  }
}

function pointsAtCell($pos) {
  return $pos.parent.type.spec.tableRole == 'row' && $pos.nodeAfter;
}

function moveCellForward($pos) {
  return $pos.node(0).resolve($pos.pos + $pos.nodeAfter.nodeSize);
}

function inSameTable($a, $b) {
  return $a.depth == $b.depth && $a.pos >= $b.start(-1) && $a.pos <= $b.end(-1);
}

function findCell($pos) {
  return TableMap.get($pos.node(-1)).findCell($pos.pos - $pos.start(-1));
}

function colCount($pos) {
  return TableMap.get($pos.node(-1)).colCount($pos.pos - $pos.start(-1));
}

function nextCell($pos, axis, dir) {
  let start = $pos.start(-1),
      map = TableMap.get($pos.node(-1));
  let moved = map.nextCell($pos.pos - start, axis, dir);
  return moved == null ? null : $pos.node(0).resolve(start + moved);
}

function setAttr(attrs, name, value) {
  let result = {};

  for (let prop in attrs) result[prop] = attrs[prop];

  result[name] = value;
  return result;
}

function removeColSpan(attrs, pos, n = 1) {
  let result = setAttr(attrs, 'colspan', attrs.colspan - n);

  if (result.colwidth) {
    result.colwidth = result.colwidth.slice();
    result.colwidth.splice(pos, n);
    if (!result.colwidth.some(w => w > 0)) result.colwidth = null;
  }

  return result;
}

function addColSpan(attrs, pos, n = 1) {
  let result = setAttr(attrs, 'colspan', attrs.colspan + n);

  if (result.colwidth) {
    result.colwidth = result.colwidth.slice();

    for (let i = 0; i < n; i++) result.colwidth.splice(pos, 0, 0);
  }

  return result;
}

function columnIsHeader(map, table, col) {
  let headerCell = tableNodeTypes(table.type.schema).header_cell;

  for (let row = 0; row < map.height; row++) if (table.nodeAt(map.map[col + row * map.width]).type != headerCell) return false;

  return true;
} // This file defines a ProseMirror selection subclass that models
// subclass that represents a cell selection spanning part of a table.
// With the plugin enabled, these will be created when the user
// selects across cells, and will be drawn by giving selected cells a
// `selectedCell` CSS class.


class CellSelection extends dist/* Selection */.Y1 {
  // :: (ResolvedPos, ?ResolvedPos)
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor($anchorCell, $headCell = $anchorCell) {
    let table = $anchorCell.node(-1),
        map = TableMap.get(table),
        start = $anchorCell.start(-1);
    let rect = map.rectBetween($anchorCell.pos - start, $headCell.pos - start);
    let doc = $anchorCell.node(0);
    let cells = map.cellsInRect(rect).filter(p => p != $headCell.pos - start); // Make the head cell the first range, so that it counts as the
    // primary part of the selection

    cells.unshift($headCell.pos - start);
    let ranges = cells.map(pos => {
      let cell = table.nodeAt(pos),
          from = pos + start + 1;
      return new dist/* SelectionRange */.xm(doc.resolve(from), doc.resolve(from + cell.content.size));
    });
    super(ranges[0].$from, ranges[0].$to, ranges); // :: ResolvedPos
    // A resolved position pointing _in front of_ the anchor cell (the one
    // that doesn't move when extending the selection).

    this.$anchorCell = $anchorCell; // :: ResolvedPos
    // A resolved position pointing in front of the head cell (the one
    // moves when extending the selection).

    this.$headCell = $headCell;
  }

  map(doc, mapping) {
    let $anchorCell = doc.resolve(mapping.map(this.$anchorCell.pos));
    let $headCell = doc.resolve(mapping.map(this.$headCell.pos));

    if (pointsAtCell($anchorCell) && pointsAtCell($headCell) && inSameTable($anchorCell, $headCell)) {
      let tableChanged = this.$anchorCell.node(-1) != $anchorCell.node(-1);
      if (tableChanged && this.isRowSelection()) return CellSelection.rowSelection($anchorCell, $headCell);else if (tableChanged && this.isColSelection()) return CellSelection.colSelection($anchorCell, $headCell);else return new CellSelection($anchorCell, $headCell);
    }

    return dist/* TextSelection.between */.Bs.between($anchorCell, $headCell);
  } // :: () → Slice
  // Returns a rectangular slice of table rows containing the selected
  // cells.


  content() {
    let table = this.$anchorCell.node(-1),
        map = TableMap.get(table),
        start = this.$anchorCell.start(-1);
    let rect = map.rectBetween(this.$anchorCell.pos - start, this.$headCell.pos - start);
    let seen = {},
        rows = [];

    for (let row = rect.top; row < rect.bottom; row++) {
      let rowContent = [];

      for (let index = row * map.width + rect.left, col = rect.left; col < rect.right; col++, index++) {
        let pos = map.map[index];

        if (!seen[pos]) {
          seen[pos] = true;
          let cellRect = map.findCell(pos),
              cell = table.nodeAt(pos);
          let extraLeft = rect.left - cellRect.left,
              extraRight = cellRect.right - rect.right;

          if (extraLeft > 0 || extraRight > 0) {
            let attrs = cell.attrs;
            if (extraLeft > 0) attrs = removeColSpan(attrs, 0, extraLeft);
            if (extraRight > 0) attrs = removeColSpan(attrs, attrs.colspan - extraRight, extraRight);
            if (cellRect.left < rect.left) cell = cell.type.createAndFill(attrs);else cell = cell.type.create(attrs, cell.content);
          }

          if (cellRect.top < rect.top || cellRect.bottom > rect.bottom) {
            let attrs = setAttr(cell.attrs, 'rowspan', Math.min(cellRect.bottom, rect.bottom) - Math.max(cellRect.top, rect.top));
            if (cellRect.top < rect.top) cell = cell.type.createAndFill(attrs);else cell = cell.type.create(attrs, cell.content);
          }

          rowContent.push(cell);
        }
      }

      rows.push(table.child(row).copy(prosemirror_model_dist/* Fragment.from */.HY.from(rowContent)));
    }

    const fragment = this.isColSelection() && this.isRowSelection() ? table : rows;
    return new prosemirror_model_dist/* Slice */.p2(prosemirror_model_dist/* Fragment.from */.HY.from(fragment), 1, 1);
  }

  replace(tr, content = prosemirror_model_dist/* Slice.empty */.p2.empty) {
    let mapFrom = tr.steps.length,
        ranges = this.ranges;

    for (let i = 0; i < ranges.length; i++) {
      let {
        $from,
        $to
      } = ranges[i],
          mapping = tr.mapping.slice(mapFrom);
      tr.replace(mapping.map($from.pos), mapping.map($to.pos), i ? prosemirror_model_dist/* Slice.empty */.p2.empty : content);
    }

    let sel = dist/* Selection.findFrom */.Y1.findFrom(tr.doc.resolve(tr.mapping.slice(mapFrom).map(this.to)), -1);
    if (sel) tr.setSelection(sel);
  }

  replaceWith(tr, node) {
    this.replace(tr, new prosemirror_model_dist/* Slice */.p2(prosemirror_model_dist/* Fragment.from */.HY.from(node), 0, 0));
  }

  forEachCell(f) {
    let table = this.$anchorCell.node(-1),
        map = TableMap.get(table),
        start = this.$anchorCell.start(-1);
    let cells = map.cellsInRect(map.rectBetween(this.$anchorCell.pos - start, this.$headCell.pos - start));

    for (let i = 0; i < cells.length; i++) f(table.nodeAt(cells[i]), start + cells[i]);
  } // :: () → bool
  // True if this selection goes all the way from the top to the
  // bottom of the table.


  isColSelection() {
    let anchorTop = this.$anchorCell.index(-1),
        headTop = this.$headCell.index(-1);
    if (Math.min(anchorTop, headTop) > 0) return false;
    let anchorBot = anchorTop + this.$anchorCell.nodeAfter.attrs.rowspan,
        headBot = headTop + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(anchorBot, headBot) == this.$headCell.node(-1).childCount;
  } // :: (ResolvedPos, ?ResolvedPos) → CellSelection
  // Returns the smallest column selection that covers the given anchor
  // and head cell.


  static colSelection($anchorCell, $headCell = $anchorCell) {
    let map = TableMap.get($anchorCell.node(-1)),
        start = $anchorCell.start(-1);
    let anchorRect = map.findCell($anchorCell.pos - start),
        headRect = map.findCell($headCell.pos - start);
    let doc = $anchorCell.node(0);

    if (anchorRect.top <= headRect.top) {
      if (anchorRect.top > 0) $anchorCell = doc.resolve(start + map.map[anchorRect.left]);
      if (headRect.bottom < map.height) $headCell = doc.resolve(start + map.map[map.width * (map.height - 1) + headRect.right - 1]);
    } else {
      if (headRect.top > 0) $headCell = doc.resolve(start + map.map[headRect.left]);
      if (anchorRect.bottom < map.height) $anchorCell = doc.resolve(start + map.map[map.width * (map.height - 1) + anchorRect.right - 1]);
    }

    return new CellSelection($anchorCell, $headCell);
  } // :: () → bool
  // True if this selection goes all the way from the left to the
  // right of the table.


  isRowSelection() {
    let map = TableMap.get(this.$anchorCell.node(-1)),
        start = this.$anchorCell.start(-1);
    let anchorLeft = map.colCount(this.$anchorCell.pos - start),
        headLeft = map.colCount(this.$headCell.pos - start);
    if (Math.min(anchorLeft, headLeft) > 0) return false;
    let anchorRight = anchorLeft + this.$anchorCell.nodeAfter.attrs.colspan,
        headRight = headLeft + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(anchorRight, headRight) == map.width;
  }

  eq(other) {
    return other instanceof CellSelection && other.$anchorCell.pos == this.$anchorCell.pos && other.$headCell.pos == this.$headCell.pos;
  } // :: (ResolvedPos, ?ResolvedPos) → CellSelection
  // Returns the smallest row selection that covers the given anchor
  // and head cell.


  static rowSelection($anchorCell, $headCell = $anchorCell) {
    let map = TableMap.get($anchorCell.node(-1)),
        start = $anchorCell.start(-1);
    let anchorRect = map.findCell($anchorCell.pos - start),
        headRect = map.findCell($headCell.pos - start);
    let doc = $anchorCell.node(0);

    if (anchorRect.left <= headRect.left) {
      if (anchorRect.left > 0) $anchorCell = doc.resolve(start + map.map[anchorRect.top * map.width]);
      if (headRect.right < map.width) $headCell = doc.resolve(start + map.map[map.width * (headRect.top + 1) - 1]);
    } else {
      if (headRect.left > 0) $headCell = doc.resolve(start + map.map[headRect.top * map.width]);
      if (anchorRect.right < map.width) $anchorCell = doc.resolve(start + map.map[map.width * (anchorRect.top + 1) - 1]);
    }

    return new CellSelection($anchorCell, $headCell);
  }

  toJSON() {
    return {
      type: 'cell',
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }

  static fromJSON(doc, json) {
    return new CellSelection(doc.resolve(json.anchor), doc.resolve(json.head));
  } // :: (Node, number, ?number) → CellSelection


  static create(doc, anchorCell, headCell = anchorCell) {
    return new CellSelection(doc.resolve(anchorCell), doc.resolve(headCell));
  }

  getBookmark() {
    return new CellBookmark(this.$anchorCell.pos, this.$headCell.pos);
  }

}

CellSelection.prototype.visible = false;
dist/* Selection.jsonID */.Y1.jsonID('cell', CellSelection);

class CellBookmark {
  constructor(anchor, head) {
    this.anchor = anchor;
    this.head = head;
  }

  map(mapping) {
    return new CellBookmark(mapping.map(this.anchor), mapping.map(this.head));
  }

  resolve(doc) {
    let $anchorCell = doc.resolve(this.anchor),
        $headCell = doc.resolve(this.head);
    if ($anchorCell.parent.type.spec.tableRole == 'row' && $headCell.parent.type.spec.tableRole == 'row' && $anchorCell.index() < $anchorCell.parent.childCount && $headCell.index() < $headCell.parent.childCount && inSameTable($anchorCell, $headCell)) return new CellSelection($anchorCell, $headCell);else return dist/* Selection.near */.Y1.near($headCell, 1);
  }

}

function drawCellSelection(state) {
  if (!(state.selection instanceof CellSelection)) return null;
  let cells = [];
  state.selection.forEachCell((node, pos) => {
    cells.push(prosemirror_view_dist/* Decoration.node */.p.node(pos, pos + node.nodeSize, {
      class: 'selectedCell'
    }));
  });
  return prosemirror_view_dist/* DecorationSet.create */.EH.create(state.doc, cells);
}

function isCellBoundarySelection({
  $from,
  $to
}) {
  if ($from.pos == $to.pos || $from.pos < $from.pos - 6) return false; // Cheap elimination

  let afterFrom = $from.pos,
      beforeTo = $to.pos,
      depth = $from.depth;

  for (; depth >= 0; depth--, afterFrom++) if ($from.after(depth + 1) < $from.end(depth)) break;

  for (let d = $to.depth; d >= 0; d--, beforeTo--) if ($to.before(d + 1) > $to.start(d)) break;

  return afterFrom == beforeTo && /row|table/.test($from.node(depth).type.spec.tableRole);
}

function isTextSelectionAcrossCells({
  $from,
  $to
}) {
  let fromCellBoundaryNode;
  let toCellBoundaryNode;

  for (let i = $from.depth; i > 0; i--) {
    let node = $from.node(i);

    if (node.type.spec.tableRole === 'cell' || node.type.spec.tableRole === 'header_cell') {
      fromCellBoundaryNode = node;
      break;
    }
  }

  for (let i = $to.depth; i > 0; i--) {
    let node = $to.node(i);

    if (node.type.spec.tableRole === 'cell' || node.type.spec.tableRole === 'header_cell') {
      toCellBoundaryNode = node;
      break;
    }
  }

  return fromCellBoundaryNode !== toCellBoundaryNode && $to.parentOffset === 0;
}

function normalizeSelection(state, tr, allowTableNodeSelection) {
  let sel = (tr || state).selection,
      doc = (tr || state).doc,
      normalize,
      role;

  if (sel instanceof dist/* NodeSelection */.qv && (role = sel.node.type.spec.tableRole)) {
    if (role == 'cell' || role == 'header_cell') {
      normalize = CellSelection.create(doc, sel.from);
    } else if (role == 'row') {
      let $cell = doc.resolve(sel.from + 1);
      normalize = CellSelection.rowSelection($cell, $cell);
    } else if (!allowTableNodeSelection) {
      let map = TableMap.get(sel.node),
          start = sel.from + 1;
      let lastCell = start + map.map[map.width * map.height - 1];
      normalize = CellSelection.create(doc, start + 1, lastCell);
    }
  } else if (sel instanceof dist/* TextSelection */.Bs && isCellBoundarySelection(sel)) {
    normalize = dist/* TextSelection.create */.Bs.create(doc, sel.from);
  } else if (sel instanceof dist/* TextSelection */.Bs && isTextSelectionAcrossCells(sel)) {
    normalize = dist/* TextSelection.create */.Bs.create(doc, sel.$from.start(), sel.$from.end());
  }

  if (normalize) (tr || (tr = state.tr)).setSelection(normalize);
  return tr;
} // Utilities used for copy/paste handling.
// : (Slice) → ?{width: number, height: number, rows: [Fragment]}
// Get a rectangular area of cells from a slice, or null if the outer
// nodes of the slice aren't table cells or rows.


function pastedCells(slice) {
  if (!slice.size) return null;
  let {
    content,
    openStart,
    openEnd
  } = slice;

  while (content.childCount == 1 && (openStart > 0 && openEnd > 0 || content.firstChild.type.spec.tableRole == 'table')) {
    openStart--;
    openEnd--;
    content = content.firstChild.content;
  }

  let first = content.firstChild,
      role = first.type.spec.tableRole;
  let schema = first.type.schema,
      rows = [];

  if (role == 'row') {
    for (let i = 0; i < content.childCount; i++) {
      let cells = content.child(i).content;
      let left = i ? 0 : Math.max(0, openStart - 1);
      let right = i < content.childCount - 1 ? 0 : Math.max(0, openEnd - 1);
      if (left || right) cells = fitSlice(tableNodeTypes(schema).row, new prosemirror_model_dist/* Slice */.p2(cells, left, right)).content;
      rows.push(cells);
    }
  } else if (role == 'cell' || role == 'header_cell') {
    rows.push(openStart || openEnd ? fitSlice(tableNodeTypes(schema).row, new prosemirror_model_dist/* Slice */.p2(content, openStart, openEnd)).content : content);
  } else {
    return null;
  }

  return ensureRectangular(schema, rows);
} // : (Schema, [Fragment]) → {width: number, height: number, rows: [Fragment]}
// Compute the width and height of a set of cells, and make sure each
// row has the same number of cells.


function ensureRectangular(schema, rows) {
  let widths = [];

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];

    for (let j = row.childCount - 1; j >= 0; j--) {
      let {
        rowspan,
        colspan
      } = row.child(j).attrs;

      for (let r = i; r < i + rowspan; r++) widths[r] = (widths[r] || 0) + colspan;
    }
  }

  let width = 0;

  for (let r = 0; r < widths.length; r++) width = Math.max(width, widths[r]);

  for (let r = 0; r < widths.length; r++) {
    if (r >= rows.length) rows.push(prosemirror_model_dist/* Fragment.empty */.HY.empty);

    if (widths[r] < width) {
      let empty = tableNodeTypes(schema).cell.createAndFill(),
          cells = [];

      for (let i = widths[r]; i < width; i++) cells.push(empty);

      rows[r] = rows[r].append(prosemirror_model_dist/* Fragment.from */.HY.from(cells));
    }
  }

  return {
    height: rows.length,
    width,
    rows
  };
}

function fitSlice(nodeType, slice) {
  let node = nodeType.createAndFill();
  let tr = new prosemirror_transform_dist/* Transform */.wx(node).replace(0, node.content.size, slice);
  return tr.doc;
} // : ({width: number, height: number, rows: [Fragment]}, number, number) → {width: number, height: number, rows: [Fragment]}
// Clip or extend (repeat) the given set of cells to cover the given
// width and height. Will clip rowspan/colspan cells at the edges when
// they stick out.


function clipCells({
  width,
  height,
  rows
}, newWidth, newHeight) {
  if (width != newWidth) {
    let added = [],
        newRows = [];

    for (let row = 0; row < rows.length; row++) {
      let frag = rows[row],
          cells = [];

      for (let col = added[row] || 0, i = 0; col < newWidth; i++) {
        let cell = frag.child(i % frag.childCount);
        if (col + cell.attrs.colspan > newWidth) cell = cell.type.create(removeColSpan(cell.attrs, cell.attrs.colspan, col + cell.attrs.colspan - newWidth), cell.content);
        cells.push(cell);
        col += cell.attrs.colspan;

        for (let j = 1; j < cell.attrs.rowspan; j++) added[row + j] = (added[row + j] || 0) + cell.attrs.colspan;
      }

      newRows.push(prosemirror_model_dist/* Fragment.from */.HY.from(cells));
    }

    rows = newRows;
    width = newWidth;
  }

  if (height != newHeight) {
    let newRows = [];

    for (let row = 0, i = 0; row < newHeight; row++, i++) {
      let cells = [],
          source = rows[i % height];

      for (let j = 0; j < source.childCount; j++) {
        let cell = source.child(j);
        if (row + cell.attrs.rowspan > newHeight) cell = cell.type.create(setAttr(cell.attrs, 'rowspan', Math.max(1, newHeight - cell.attrs.rowspan)), cell.content);
        cells.push(cell);
      }

      newRows.push(prosemirror_model_dist/* Fragment.from */.HY.from(cells));
    }

    rows = newRows;
    height = newHeight;
  }

  return {
    width,
    height,
    rows
  };
} // Make sure a table has at least the given width and height. Return
// true if something was changed.


function growTable(tr, map, table, start, width, height, mapFrom) {
  let schema = tr.doc.type.schema,
      types = tableNodeTypes(schema),
      empty,
      emptyHead;

  if (width > map.width) {
    for (let row = 0, rowEnd = 0; row < map.height; row++) {
      let rowNode = table.child(row);
      rowEnd += rowNode.nodeSize;
      let cells = [],
          add;
      if (rowNode.lastChild == null || rowNode.lastChild.type == types.cell) add = empty || (empty = types.cell.createAndFill());else add = emptyHead || (emptyHead = types.header_cell.createAndFill());

      for (let i = map.width; i < width; i++) cells.push(add);

      tr.insert(tr.mapping.slice(mapFrom).map(rowEnd - 1 + start), cells);
    }
  }

  if (height > map.height) {
    let cells = [];

    for (let i = 0, start = (map.height - 1) * map.width; i < Math.max(map.width, width); i++) {
      let header = i >= map.width ? false : table.nodeAt(map.map[start + i]).type == types.header_cell;
      cells.push(header ? emptyHead || (emptyHead = types.header_cell.createAndFill()) : empty || (empty = types.cell.createAndFill()));
    }

    let emptyRow = types.row.create(null, prosemirror_model_dist/* Fragment.from */.HY.from(cells)),
        rows = [];

    for (let i = map.height; i < height; i++) rows.push(emptyRow);

    tr.insert(tr.mapping.slice(mapFrom).map(start + table.nodeSize - 2), rows);
  }

  return !!(empty || emptyHead);
} // Make sure the given line (left, top) to (right, top) doesn't cross
// any rowspan cells by splitting cells that cross it. Return true if
// something changed.


function isolateHorizontal(tr, map, table, start, left, right, top, mapFrom) {
  if (top == 0 || top == map.height) return false;
  let found = false;

  for (let col = left; col < right; col++) {
    let index = top * map.width + col,
        pos = map.map[index];

    if (map.map[index - map.width] == pos) {
      found = true;
      let cell = table.nodeAt(pos);
      let {
        top: cellTop,
        left: cellLeft
      } = map.findCell(pos);
      tr.setNodeMarkup(tr.mapping.slice(mapFrom).map(pos + start), null, setAttr(cell.attrs, 'rowspan', top - cellTop));
      tr.insert(tr.mapping.slice(mapFrom).map(map.positionAt(top, cellLeft, table)), cell.type.createAndFill(setAttr(cell.attrs, 'rowspan', cellTop + cell.attrs.rowspan - top)));
      col += cell.attrs.colspan - 1;
    }
  }

  return found;
} // Make sure the given line (left, top) to (left, bottom) doesn't
// cross any colspan cells by splitting cells that cross it. Return
// true if something changed.


function isolateVertical(tr, map, table, start, top, bottom, left, mapFrom) {
  if (left == 0 || left == map.width) return false;
  let found = false;

  for (let row = top; row < bottom; row++) {
    let index = row * map.width + left,
        pos = map.map[index];

    if (map.map[index - 1] == pos) {
      found = true;
      let cell = table.nodeAt(pos),
          cellLeft = map.colCount(pos);
      let updatePos = tr.mapping.slice(mapFrom).map(pos + start);
      tr.setNodeMarkup(updatePos, null, removeColSpan(cell.attrs, left - cellLeft, cell.attrs.colspan - (left - cellLeft)));
      tr.insert(updatePos + cell.nodeSize, cell.type.createAndFill(removeColSpan(cell.attrs, 0, left - cellLeft)));
      row += cell.attrs.rowspan - 1;
    }
  }

  return found;
} // Insert the given set of cells (as returned by `pastedCells`) into a
// table, at the position pointed at by rect.


function insertCells(state, dispatch, tableStart, rect, cells) {
  let table = tableStart ? state.doc.nodeAt(tableStart - 1) : state.doc,
      map = TableMap.get(table);
  let {
    top,
    left
  } = rect;
  let right = left + cells.width,
      bottom = top + cells.height;
  let tr = state.tr,
      mapFrom = 0;

  function recomp() {
    table = tableStart ? tr.doc.nodeAt(tableStart - 1) : tr.doc;
    map = TableMap.get(table);
    mapFrom = tr.mapping.maps.length;
  } // Prepare the table to be large enough and not have any cells
  // crossing the boundaries of the rectangle that we want to
  // insert into. If anything about it changes, recompute the table
  // map so that subsequent operations can see the current shape.


  if (growTable(tr, map, table, tableStart, right, bottom, mapFrom)) recomp();
  if (isolateHorizontal(tr, map, table, tableStart, left, right, top, mapFrom)) recomp();
  if (isolateHorizontal(tr, map, table, tableStart, left, right, bottom, mapFrom)) recomp();
  if (isolateVertical(tr, map, table, tableStart, top, bottom, left, mapFrom)) recomp();
  if (isolateVertical(tr, map, table, tableStart, top, bottom, right, mapFrom)) recomp();

  for (let row = top; row < bottom; row++) {
    let from = map.positionAt(row, left, table),
        to = map.positionAt(row, right, table);
    tr.replace(tr.mapping.slice(mapFrom).map(from + tableStart), tr.mapping.slice(mapFrom).map(to + tableStart), new prosemirror_model_dist/* Slice */.p2(cells.rows[row - top], 0, 0));
  }

  recomp();
  tr.setSelection(new CellSelection(tr.doc.resolve(tableStart + map.positionAt(top, left, table)), tr.doc.resolve(tableStart + map.positionAt(bottom - 1, right - 1, table))));
  dispatch(tr);
} // This file defines a number of helpers for wiring up user input to


const handleKeyDown = (0,prosemirror_keymap_dist/* keydownHandler */.$)({
  ArrowLeft: arrow('horiz', -1),
  ArrowRight: arrow('horiz', 1),
  ArrowUp: arrow('vert', -1),
  ArrowDown: arrow('vert', 1),
  'Shift-ArrowLeft': shiftArrow('horiz', -1),
  'Shift-ArrowRight': shiftArrow('horiz', 1),
  'Shift-ArrowUp': shiftArrow('vert', -1),
  'Shift-ArrowDown': shiftArrow('vert', 1),
  Backspace: deleteCellSelection,
  'Mod-Backspace': deleteCellSelection,
  Delete: deleteCellSelection,
  'Mod-Delete': deleteCellSelection
});

function maybeSetSelection(state, dispatch, selection) {
  if (selection.eq(state.selection)) return false;
  if (dispatch) dispatch(state.tr.setSelection(selection).scrollIntoView());
  return true;
}

function arrow(axis, dir) {
  return (state, dispatch, view) => {
    let sel = state.selection;

    if (sel instanceof CellSelection) {
      return maybeSetSelection(state, dispatch, dist/* Selection.near */.Y1.near(sel.$headCell, dir));
    }

    if (axis != 'horiz' && !sel.empty) return false;
    let end = atEndOfCell(view, axis, dir);
    if (end == null) return false;

    if (axis == 'horiz') {
      return maybeSetSelection(state, dispatch, dist/* Selection.near */.Y1.near(state.doc.resolve(sel.head + dir), dir));
    } else {
      let $cell = state.doc.resolve(end),
          $next = nextCell($cell, axis, dir),
          newSel;
      if ($next) newSel = dist/* Selection.near */.Y1.near($next, 1);else if (dir < 0) newSel = dist/* Selection.near */.Y1.near(state.doc.resolve($cell.before(-1)), -1);else newSel = dist/* Selection.near */.Y1.near(state.doc.resolve($cell.after(-1)), 1);
      return maybeSetSelection(state, dispatch, newSel);
    }
  };
}

function shiftArrow(axis, dir) {
  return (state, dispatch, view) => {
    let sel = state.selection;

    if (!(sel instanceof CellSelection)) {
      let end = atEndOfCell(view, axis, dir);
      if (end == null) return false;
      sel = new CellSelection(state.doc.resolve(end));
    }

    let $head = nextCell(sel.$headCell, axis, dir);
    if (!$head) return false;
    return maybeSetSelection(state, dispatch, new CellSelection(sel.$anchorCell, $head));
  };
}

function deleteCellSelection(state, dispatch) {
  let sel = state.selection;
  if (!(sel instanceof CellSelection)) return false;

  if (dispatch) {
    let tr = state.tr,
        baseContent = tableNodeTypes(state.schema).cell.createAndFill().content;
    sel.forEachCell((cell, pos) => {
      if (!cell.content.eq(baseContent)) tr.replace(tr.mapping.map(pos + 1), tr.mapping.map(pos + cell.nodeSize - 1), new prosemirror_model_dist/* Slice */.p2(baseContent, 0, 0));
    });
    if (tr.docChanged) dispatch(tr);
  }

  return true;
}

function handleTripleClick(view, pos) {
  let doc = view.state.doc,
      $cell = cellAround(doc.resolve(pos));
  if (!$cell) return false;
  view.dispatch(view.state.tr.setSelection(new CellSelection($cell)));
  return true;
}

function handlePaste(view, _, slice) {
  if (!isInTable(view.state)) return false;
  let cells = pastedCells(slice),
      sel = view.state.selection;

  if (sel instanceof CellSelection) {
    if (!cells) cells = {
      width: 1,
      height: 1,
      rows: [prosemirror_model_dist/* Fragment.from */.HY.from(fitSlice(tableNodeTypes(view.state.schema).cell, slice))]
    };
    let table = sel.$anchorCell.node(-1),
        start = sel.$anchorCell.start(-1);
    let rect = TableMap.get(table).rectBetween(sel.$anchorCell.pos - start, sel.$headCell.pos - start);
    cells = clipCells(cells, rect.right - rect.left, rect.bottom - rect.top);
    insertCells(view.state, view.dispatch, start, rect, cells);
    return true;
  } else if (cells) {
    let $cell = selectionCell(view.state),
        start = $cell.start(-1);
    insertCells(view.state, view.dispatch, start, TableMap.get($cell.node(-1)).findCell($cell.pos - start), cells);
    return true;
  } else {
    return false;
  }
}

function handleMouseDown$1(view, startEvent) {
  if (startEvent.ctrlKey || startEvent.metaKey) return;
  let startDOMCell = domInCell(view, startEvent.target),
      $anchor;

  if (startEvent.shiftKey && view.state.selection instanceof CellSelection) {
    // Adding to an existing cell selection
    setCellSelection(view.state.selection.$anchorCell, startEvent);
    startEvent.preventDefault();
  } else if (startEvent.shiftKey && startDOMCell && ($anchor = cellAround(view.state.selection.$anchor)) != null && cellUnderMouse(view, startEvent).pos != $anchor.pos) {
    // Adding to a selection that starts in another cell (causing a
    // cell selection to be created).
    setCellSelection($anchor, startEvent);
    startEvent.preventDefault();
  } else if (!startDOMCell) {
    // Not in a cell, let the default behavior happen.
    return;
  } // Create and dispatch a cell selection between the given anchor and
  // the position under the mouse.


  function setCellSelection($anchor, event) {
    let $head = cellUnderMouse(view, event);
    let starting = key$1.getState(view.state) == null;

    if (!$head || !inSameTable($anchor, $head)) {
      if (starting) $head = $anchor;else return;
    }

    let selection = new CellSelection($anchor, $head);

    if (starting || !view.state.selection.eq(selection)) {
      let tr = view.state.tr.setSelection(selection);
      if (starting) tr.setMeta(key$1, $anchor.pos);
      view.dispatch(tr);
    }
  } // Stop listening to mouse motion events.


  function stop() {
    view.root.removeEventListener('mouseup', stop);
    view.root.removeEventListener('dragstart', stop);
    view.root.removeEventListener('mousemove', move);
    if (key$1.getState(view.state) != null) view.dispatch(view.state.tr.setMeta(key$1, -1));
  }

  function move(event) {
    let anchor = key$1.getState(view.state),
        $anchor;

    if (anchor != null) {
      // Continuing an existing cross-cell selection
      $anchor = view.state.doc.resolve(anchor);
    } else if (domInCell(view, event.target) != startDOMCell) {
      // Moving out of the initial cell -- start a new cell selection
      $anchor = cellUnderMouse(view, startEvent);
      if (!$anchor) return stop();
    }

    if ($anchor) setCellSelection($anchor, event);
  }

  view.root.addEventListener('mouseup', stop);
  view.root.addEventListener('dragstart', stop);
  view.root.addEventListener('mousemove', move);
} // Check whether the cursor is at the end of a cell (so that further
// motion would move out of the cell)


function atEndOfCell(view, axis, dir) {
  if (!(view.state.selection instanceof dist/* TextSelection */.Bs)) return null;
  let {
    $head
  } = view.state.selection;

  for (let d = $head.depth - 1; d >= 0; d--) {
    let parent = $head.node(d),
        index = dir < 0 ? $head.index(d) : $head.indexAfter(d);
    if (index != (dir < 0 ? 0 : parent.childCount)) return null;

    if (parent.type.spec.tableRole == 'cell' || parent.type.spec.tableRole == 'header_cell') {
      let cellPos = $head.before(d);
      let dirStr = axis == 'vert' ? dir > 0 ? 'down' : 'up' : dir > 0 ? 'right' : 'left';
      return view.endOfTextblock(dirStr) ? cellPos : null;
    }
  }

  return null;
}

function domInCell(view, dom) {
  for (; dom && dom != view.dom; dom = dom.parentNode) if (dom.nodeName == 'TD' || dom.nodeName == 'TH') return dom;
}

function cellUnderMouse(view, event) {
  let mousePos = view.posAtCoords({
    left: event.clientX,
    top: event.clientY
  });
  if (!mousePos) return null;
  return mousePos ? cellAround(view.state.doc.resolve(mousePos.pos)) : null;
} // This file defines helpers for normalizing tables, making sure no


const fixTablesKey = new dist/* PluginKey */.H$('fix-tables'); // Helper for iterating through the nodes in a document that changed
// compared to the given previous document. Useful for avoiding
// duplicate work on each transaction.

function changedDescendants(old, cur, offset, f) {
  let oldSize = old.childCount,
      curSize = cur.childCount;

  outer: for (let i = 0, j = 0; i < curSize; i++) {
    let child = cur.child(i);

    for (let scan = j, e = Math.min(oldSize, i + 3); scan < e; scan++) {
      if (old.child(scan) == child) {
        j = scan + 1;
        offset += child.nodeSize;
        continue outer;
      }
    }

    f(child, offset);
    if (j < oldSize && old.child(j).sameMarkup(child)) changedDescendants(old.child(j), child, offset + 1, f);else child.nodesBetween(0, child.content.size, f, offset + 1);
    offset += child.nodeSize;
  }
} // :: (EditorState, ?EditorState) → ?Transaction
// Inspect all tables in the given state's document and return a
// transaction that fixes them, if necessary. If `oldState` was
// provided, that is assumed to hold a previous, known-good state,
// which will be used to avoid re-scanning unchanged parts of the
// document.


function fixTables(state, oldState) {
  let tr,
      check = (node, pos) => {
    if (node.type.spec.tableRole == 'table') tr = fixTable(state, node, pos, tr);
  };

  if (!oldState) state.doc.descendants(check);else if (oldState.doc != state.doc) changedDescendants(oldState.doc, state.doc, 0, check);
  return tr;
} // : (EditorState, Node, number, ?Transaction) → ?Transaction
// Fix the given table, if necessary. Will append to the transaction
// it was given, if non-null, or create a new one if necessary.


function fixTable(state, table, tablePos, tr) {
  let map = TableMap.get(table);
  if (!map.problems) return tr;
  if (!tr) tr = state.tr; // Track which rows we must add cells to, so that we can adjust that
  // when fixing collisions.

  let mustAdd = [];

  for (let i = 0; i < map.height; i++) mustAdd.push(0);

  for (let i = 0; i < map.problems.length; i++) {
    let prob = map.problems[i];

    if (prob.type == 'collision') {
      let cell = table.nodeAt(prob.pos);

      for (let j = 0; j < cell.attrs.rowspan; j++) mustAdd[prob.row + j] += prob.n;

      tr.setNodeMarkup(tr.mapping.map(tablePos + 1 + prob.pos), null, removeColSpan(cell.attrs, cell.attrs.colspan - prob.n, prob.n));
    } else if (prob.type == 'missing') {
      mustAdd[prob.row] += prob.n;
    } else if (prob.type == 'overlong_rowspan') {
      let cell = table.nodeAt(prob.pos);
      tr.setNodeMarkup(tr.mapping.map(tablePos + 1 + prob.pos), null, setAttr(cell.attrs, 'rowspan', cell.attrs.rowspan - prob.n));
    } else if (prob.type == 'colwidth mismatch') {
      let cell = table.nodeAt(prob.pos);
      tr.setNodeMarkup(tr.mapping.map(tablePos + 1 + prob.pos), null, setAttr(cell.attrs, 'colwidth', prob.colwidth));
    }
  }

  let first, last;

  for (let i = 0; i < mustAdd.length; i++) if (mustAdd[i]) {
    if (first == null) first = i;
    last = i;
  } // Add the necessary cells, using a heuristic for whether to add the
  // cells at the start or end of the rows (if it looks like a 'bite'
  // was taken out of the table, add cells at the start of the row
  // after the bite. Otherwise add them at the end).


  for (let i = 0, pos = tablePos + 1; i < map.height; i++) {
    let row = table.child(i);
    let end = pos + row.nodeSize;
    let add = mustAdd[i];

    if (add > 0) {
      let tableNodeType = 'cell';

      if (row.firstChild) {
        tableNodeType = row.firstChild.type.spec.tableRole;
      }

      let nodes = [];

      for (let j = 0; j < add; j++) nodes.push(tableNodeTypes(state.schema)[tableNodeType].createAndFill());

      let side = (i == 0 || first == i - 1) && last == i ? pos + 1 : end - 1;
      tr.insert(tr.mapping.map(side), nodes);
    }

    pos = end;
  }

  return tr.setMeta(fixTablesKey, {
    fixTables: true
  });
} // This file defines a number of table-related commands.
// map, table node, and table start offset to the object for
// convenience.


function selectedRect(state) {
  let sel = state.selection,
      $pos = selectionCell(state);
  let table = $pos.node(-1),
      tableStart = $pos.start(-1),
      map = TableMap.get(table);
  let rect;
  if (sel instanceof CellSelection) rect = map.rectBetween(sel.$anchorCell.pos - tableStart, sel.$headCell.pos - tableStart);else rect = map.findCell($pos.pos - tableStart);
  rect.tableStart = tableStart;
  rect.map = map;
  rect.table = table;
  return rect;
} // Add a column at the given position in a table.


function addColumn(tr, {
  map,
  tableStart,
  table
}, col) {
  let refColumn = col > 0 ? -1 : 0;
  if (columnIsHeader(map, table, col + refColumn)) refColumn = col == 0 || col == map.width ? null : 0;

  for (let row = 0; row < map.height; row++) {
    let index = row * map.width + col; // If this position falls inside a col-spanning cell

    if (col > 0 && col < map.width && map.map[index - 1] == map.map[index]) {
      let pos = map.map[index],
          cell = table.nodeAt(pos);
      tr.setNodeMarkup(tr.mapping.map(tableStart + pos), null, addColSpan(cell.attrs, col - map.colCount(pos))); // Skip ahead if rowspan > 1

      row += cell.attrs.rowspan - 1;
    } else {
      let type = refColumn == null ? tableNodeTypes(table.type.schema).cell : table.nodeAt(map.map[index + refColumn]).type;
      let pos = map.positionAt(row, col, table);
      tr.insert(tr.mapping.map(tableStart + pos), type.createAndFill());
    }
  }

  return tr;
} // :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Command to add a column before the column with the selection.


function addColumnBefore(state, dispatch) {
  if (!isInTable(state)) return false;

  if (dispatch) {
    let rect = selectedRect(state);
    dispatch(addColumn(state.tr, rect, rect.left));
  }

  return true;
} // :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Command to add a column after the column with the selection.


function addColumnAfter(state, dispatch) {
  if (!isInTable(state)) return false;

  if (dispatch) {
    let rect = selectedRect(state);
    dispatch(addColumn(state.tr, rect, rect.right));
  }

  return true;
}

function removeColumn(tr, {
  map,
  table,
  tableStart
}, col) {
  let mapStart = tr.mapping.maps.length;

  for (let row = 0; row < map.height;) {
    let index = row * map.width + col,
        pos = map.map[index],
        cell = table.nodeAt(pos); // If this is part of a col-spanning cell

    if (col > 0 && map.map[index - 1] == pos || col < map.width - 1 && map.map[index + 1] == pos) {
      tr.setNodeMarkup(tr.mapping.slice(mapStart).map(tableStart + pos), null, removeColSpan(cell.attrs, col - map.colCount(pos)));
    } else {
      let start = tr.mapping.slice(mapStart).map(tableStart + pos);
      tr.delete(start, start + cell.nodeSize);
    }

    row += cell.attrs.rowspan;
  }
} // :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Command function that removes the selected columns from a table.


function deleteColumn(state, dispatch) {
  if (!isInTable(state)) return false;

  if (dispatch) {
    let rect = selectedRect(state),
        tr = state.tr;
    if (rect.left == 0 && rect.right == rect.map.width) return false;

    for (let i = rect.right - 1;; i--) {
      removeColumn(tr, rect, i);
      if (i == rect.left) break;
      rect.table = rect.tableStart ? tr.doc.nodeAt(rect.tableStart - 1) : tr.doc;
      rect.map = TableMap.get(rect.table);
    }

    dispatch(tr);
  }

  return true;
}

function rowIsHeader(map, table, row) {
  let headerCell = tableNodeTypes(table.type.schema).header_cell;

  for (let col = 0; col < map.width; col++) if (table.nodeAt(map.map[col + row * map.width]).type != headerCell) return false;

  return true;
}

function addRow(tr, {
  map,
  tableStart,
  table
}, row) {
  let rowPos = tableStart;

  for (let i = 0; i < row; i++) rowPos += table.child(i).nodeSize;

  let cells = [],
      refRow = row > 0 ? -1 : 0;
  if (rowIsHeader(map, table, row + refRow)) refRow = row == 0 || row == map.height ? null : 0;

  for (let col = 0, index = map.width * row; col < map.width; col++, index++) {
    // Covered by a rowspan cell
    if (row > 0 && row < map.height && map.map[index] == map.map[index - map.width]) {
      let pos = map.map[index],
          attrs = table.nodeAt(pos).attrs;
      tr.setNodeMarkup(tableStart + pos, null, setAttr(attrs, 'rowspan', attrs.rowspan + 1));
      col += attrs.colspan - 1;
    } else {
      let type = refRow == null ? tableNodeTypes(table.type.schema).cell : table.nodeAt(map.map[index + refRow * map.width]).type;
      cells.push(type.createAndFill());
    }
  }

  tr.insert(rowPos, tableNodeTypes(table.type.schema).row.create(null, cells));
  return tr;
} // :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Add a table row before the selection.


function addRowBefore(state, dispatch) {
  if (!isInTable(state)) return false;

  if (dispatch) {
    let rect = selectedRect(state);
    dispatch(addRow(state.tr, rect, rect.top));
  }

  return true;
} // :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Add a table row after the selection.


function addRowAfter(state, dispatch) {
  if (!isInTable(state)) return false;

  if (dispatch) {
    let rect = selectedRect(state);
    dispatch(addRow(state.tr, rect, rect.bottom));
  }

  return true;
}

function removeRow(tr, {
  map,
  table,
  tableStart
}, row) {
  let rowPos = 0;

  for (let i = 0; i < row; i++) rowPos += table.child(i).nodeSize;

  let nextRow = rowPos + table.child(row).nodeSize;
  let mapFrom = tr.mapping.maps.length;
  tr.delete(rowPos + tableStart, nextRow + tableStart);

  for (let col = 0, index = row * map.width; col < map.width; col++, index++) {
    let pos = map.map[index];

    if (row > 0 && pos == map.map[index - map.width]) {
      // If this cell starts in the row above, simply reduce its rowspan
      let attrs = table.nodeAt(pos).attrs;
      tr.setNodeMarkup(tr.mapping.slice(mapFrom).map(pos + tableStart), null, setAttr(attrs, 'rowspan', attrs.rowspan - 1));
      col += attrs.colspan - 1;
    } else if (row < map.width && pos == map.map[index + map.width]) {
      // Else, if it continues in the row below, it has to be moved down
      let cell = table.nodeAt(pos);
      let copy = cell.type.create(setAttr(cell.attrs, 'rowspan', cell.attrs.rowspan - 1), cell.content);
      let newPos = map.positionAt(row + 1, col, table);
      tr.insert(tr.mapping.slice(mapFrom).map(tableStart + newPos), copy);
      col += cell.attrs.colspan - 1;
    }
  }
} // :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Remove the selected rows from a table.


function deleteRow(state, dispatch) {
  if (!isInTable(state)) return false;

  if (dispatch) {
    let rect = selectedRect(state),
        tr = state.tr;
    if (rect.top == 0 && rect.bottom == rect.map.height) return false;

    for (let i = rect.bottom - 1;; i--) {
      removeRow(tr, rect, i);
      if (i == rect.top) break;
      rect.table = rect.tableStart ? tr.doc.nodeAt(rect.tableStart - 1) : tr.doc;
      rect.map = TableMap.get(rect.table);
    }

    dispatch(tr);
  }

  return true;
}

function isEmpty(cell) {
  let c = cell.content;
  return c.childCount == 1 && c.firstChild.isTextblock && c.firstChild.childCount == 0;
}

function cellsOverlapRectangle({
  width,
  height,
  map
}, rect) {
  let indexTop = rect.top * width + rect.left,
      indexLeft = indexTop;
  let indexBottom = (rect.bottom - 1) * width + rect.left,
      indexRight = indexTop + (rect.right - rect.left - 1);

  for (let i = rect.top; i < rect.bottom; i++) {
    if (rect.left > 0 && map[indexLeft] == map[indexLeft - 1] || rect.right < width && map[indexRight] == map[indexRight + 1]) return true;
    indexLeft += width;
    indexRight += width;
  }

  for (let i = rect.left; i < rect.right; i++) {
    if (rect.top > 0 && map[indexTop] == map[indexTop - width] || rect.bottom < height && map[indexBottom] == map[indexBottom + width]) return true;
    indexTop++;
    indexBottom++;
  }

  return false;
} // :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Merge the selected cells into a single cell. Only available when
// the selected cells' outline forms a rectangle.


function mergeCells(state, dispatch) {
  let sel = state.selection;
  if (!(sel instanceof CellSelection) || sel.$anchorCell.pos == sel.$headCell.pos) return false;
  let rect = selectedRect(state),
      {
    map
  } = rect;
  if (cellsOverlapRectangle(map, rect)) return false;

  if (dispatch) {
    let tr = state.tr,
        seen = {},
        content = prosemirror_model_dist/* Fragment.empty */.HY.empty,
        mergedPos,
        mergedCell;

    for (let row = rect.top; row < rect.bottom; row++) {
      for (let col = rect.left; col < rect.right; col++) {
        let cellPos = map.map[row * map.width + col],
            cell = rect.table.nodeAt(cellPos);
        if (seen[cellPos]) continue;
        seen[cellPos] = true;

        if (mergedPos == null) {
          mergedPos = cellPos;
          mergedCell = cell;
        } else {
          if (!isEmpty(cell)) content = content.append(cell.content);
          let mapped = tr.mapping.map(cellPos + rect.tableStart);
          tr.delete(mapped, mapped + cell.nodeSize);
        }
      }
    }

    tr.setNodeMarkup(mergedPos + rect.tableStart, null, setAttr(addColSpan(mergedCell.attrs, mergedCell.attrs.colspan, rect.right - rect.left - mergedCell.attrs.colspan), 'rowspan', rect.bottom - rect.top));

    if (content.size) {
      let end = mergedPos + 1 + mergedCell.content.size;
      let start = isEmpty(mergedCell) ? mergedPos + 1 : end;
      tr.replaceWith(start + rect.tableStart, end + rect.tableStart, content);
    }

    tr.setSelection(new CellSelection(tr.doc.resolve(mergedPos + rect.tableStart)));
    dispatch(tr);
  }

  return true;
} // :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Split a selected cell, whose rowpan or colspan is greater than one,
// into smaller cells. Use the first cell type for the new cells.


function splitCell(state, dispatch) {
  const nodeTypes = tableNodeTypes(state.schema);
  return splitCellWithType(({
    node
  }) => {
    return nodeTypes[node.type.spec.tableRole];
  })(state, dispatch);
} // :: (getCellType: ({ row: number, col: number, node: Node}) → NodeType) → (EditorState, dispatch: ?(tr: Transaction)) → bool
// Split a selected cell, whose rowpan or colspan is greater than one,
// into smaller cells with the cell type (th, td) returned by getType function.


function splitCellWithType(getCellType) {
  return (state, dispatch) => {
    let sel = state.selection;
    let cellNode, cellPos;

    if (!(sel instanceof CellSelection)) {
      cellNode = cellWrapping(sel.$from);
      if (!cellNode) return false;
      cellPos = cellAround(sel.$from).pos;
    } else {
      if (sel.$anchorCell.pos != sel.$headCell.pos) return false;
      cellNode = sel.$anchorCell.nodeAfter;
      cellPos = sel.$anchorCell.pos;
    }

    if (cellNode.attrs.colspan == 1 && cellNode.attrs.rowspan == 1) {
      return false;
    }

    if (dispatch) {
      let baseAttrs = cellNode.attrs,
          attrs = [],
          colwidth = baseAttrs.colwidth;
      if (baseAttrs.rowspan > 1) baseAttrs = setAttr(baseAttrs, 'rowspan', 1);
      if (baseAttrs.colspan > 1) baseAttrs = setAttr(baseAttrs, 'colspan', 1);
      let rect = selectedRect(state),
          tr = state.tr;

      for (let i = 0; i < rect.right - rect.left; i++) attrs.push(colwidth ? setAttr(baseAttrs, 'colwidth', colwidth && colwidth[i] ? [colwidth[i]] : null) : baseAttrs);

      let lastCell;

      for (let row = rect.top; row < rect.bottom; row++) {
        let pos = rect.map.positionAt(row, rect.left, rect.table);
        if (row == rect.top) pos += cellNode.nodeSize;

        for (let col = rect.left, i = 0; col < rect.right; col++, i++) {
          if (col == rect.left && row == rect.top) continue;
          tr.insert(lastCell = tr.mapping.map(pos + rect.tableStart, 1), getCellType({
            node: cellNode,
            row,
            col
          }).createAndFill(attrs[i]));
        }
      }

      tr.setNodeMarkup(cellPos, getCellType({
        node: cellNode,
        row: rect.top,
        col: rect.left
      }), attrs[0]);
      if (sel instanceof CellSelection) tr.setSelection(new CellSelection(tr.doc.resolve(sel.$anchorCell.pos), lastCell && tr.doc.resolve(lastCell)));
      dispatch(tr);
    }

    return true;
  };
} // :: (string, any) → (EditorState, dispatch: ?(tr: Transaction)) → bool
// Returns a command that sets the given attribute to the given value,
// and is only available when the currently selected cell doesn't
// already have that attribute set to that value.


function setCellAttr(name, value) {
  return function (state, dispatch) {
    if (!isInTable(state)) return false;
    let $cell = selectionCell(state);
    if ($cell.nodeAfter.attrs[name] === value) return false;

    if (dispatch) {
      let tr = state.tr;
      if (state.selection instanceof CellSelection) state.selection.forEachCell((node, pos) => {
        if (node.attrs[name] !== value) tr.setNodeMarkup(pos, null, setAttr(node.attrs, name, value));
      });else tr.setNodeMarkup($cell.pos, null, setAttr($cell.nodeAfter.attrs, name, value));
      dispatch(tr);
    }

    return true;
  };
}

function deprecated_toggleHeader(type) {
  return function (state, dispatch) {
    if (!isInTable(state)) return false;

    if (dispatch) {
      let types = tableNodeTypes(state.schema);
      let rect = selectedRect(state),
          tr = state.tr;
      let cells = rect.map.cellsInRect(type == 'column' ? new Rect(rect.left, 0, rect.right, rect.map.height) : type == 'row' ? new Rect(0, rect.top, rect.map.width, rect.bottom) : rect);
      let nodes = cells.map(pos => rect.table.nodeAt(pos));

      for (let i = 0; i < cells.length; i++ // Remove headers, if any
      ) if (nodes[i].type == types.header_cell) tr.setNodeMarkup(rect.tableStart + cells[i], types.cell, nodes[i].attrs);

      if (tr.steps.length == 0) for (let i = 0; i < cells.length; i++ // No headers removed, add instead
      ) tr.setNodeMarkup(rect.tableStart + cells[i], types.header_cell, nodes[i].attrs);
      dispatch(tr);
    }

    return true;
  };
}

function isHeaderEnabledByType(type, rect, types) {
  // Get cell positions for first row or first column
  const cellPositions = rect.map.cellsInRect({
    left: 0,
    top: 0,
    right: type == 'row' ? rect.map.width : 1,
    bottom: type == 'column' ? rect.map.height : 1
  });

  for (let i = 0; i < cellPositions.length; i++) {
    const cell = rect.table.nodeAt(cellPositions[i]);

    if (cell && cell.type !== types.header_cell) {
      return false;
    }
  }

  return true;
} // :: (string, ?{ useDeprecatedLogic: bool }) → (EditorState, dispatch: ?(tr: Transaction)) → bool
// Toggles between row/column header and normal cells (Only applies to first row/column).
// For deprecated behavior pass `useDeprecatedLogic` in options with true.


function toggleHeader(type, options) {
  options = options || {
    useDeprecatedLogic: false
  };
  if (options.useDeprecatedLogic) return deprecated_toggleHeader(type);
  return function (state, dispatch) {
    if (!isInTable(state)) return false;

    if (dispatch) {
      let types = tableNodeTypes(state.schema);
      let rect = selectedRect(state),
          tr = state.tr;
      let isHeaderRowEnabled = isHeaderEnabledByType('row', rect, types);
      let isHeaderColumnEnabled = isHeaderEnabledByType('column', rect, types);
      let isHeaderEnabled = type === 'column' ? isHeaderRowEnabled : type === 'row' ? isHeaderColumnEnabled : false;
      let selectionStartsAt = isHeaderEnabled ? 1 : 0;
      let cellsRect = type == 'column' ? new Rect(0, selectionStartsAt, 1, rect.map.height) : type == 'row' ? new Rect(selectionStartsAt, 0, rect.map.width, 1) : rect;
      let newType = type == 'column' ? isHeaderColumnEnabled ? types.cell : types.header_cell : type == 'row' ? isHeaderRowEnabled ? types.cell : types.header_cell : types.cell;
      rect.map.cellsInRect(cellsRect).forEach(relativeCellPos => {
        const cellPos = relativeCellPos + rect.tableStart;
        const cell = tr.doc.nodeAt(cellPos);

        if (cell) {
          tr.setNodeMarkup(cellPos, newType, cell.attrs);
        }
      });
      dispatch(tr);
    }

    return true;
  };
} // :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Toggles whether the selected row contains header cells.


let toggleHeaderRow = toggleHeader('row', {
  useDeprecatedLogic: true
}); // :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Toggles whether the selected column contains header cells.

let toggleHeaderColumn = toggleHeader('column', {
  useDeprecatedLogic: true
}); // :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Toggles whether the selected cells are header cells.

let toggleHeaderCell = toggleHeader('cell', {
  useDeprecatedLogic: true
});

function findNextCell($cell, dir) {
  if (dir < 0) {
    let before = $cell.nodeBefore;
    if (before) return $cell.pos - before.nodeSize;

    for (let row = $cell.index(-1) - 1, rowEnd = $cell.before(); row >= 0; row--) {
      let rowNode = $cell.node(-1).child(row);
      if (rowNode.childCount) return rowEnd - 1 - rowNode.lastChild.nodeSize;
      rowEnd -= rowNode.nodeSize;
    }
  } else {
    if ($cell.index() < $cell.parent.childCount - 1) return $cell.pos + $cell.nodeAfter.nodeSize;
    let table = $cell.node(-1);

    for (let row = $cell.indexAfter(-1), rowStart = $cell.after(); row < table.childCount; row++) {
      let rowNode = table.child(row);
      if (rowNode.childCount) return rowStart + 1;
      rowStart += rowNode.nodeSize;
    }
  }
} // :: (number) → (EditorState, dispatch: ?(tr: Transaction)) → bool
// Returns a command for selecting the next (direction=1) or previous
// (direction=-1) cell in a table.


function goToNextCell(direction) {
  return function (state, dispatch) {
    if (!isInTable(state)) return false;
    let cell = findNextCell(selectionCell(state), direction);
    if (cell == null) return;

    if (dispatch) {
      let $cell = state.doc.resolve(cell);
      dispatch(state.tr.setSelection(dist/* TextSelection.between */.Bs.between($cell, moveCellForward($cell))).scrollIntoView());
    }

    return true;
  };
} // :: (EditorState, ?(tr: Transaction)) → bool
// Deletes the table around the selection, if any.


function deleteTable(state, dispatch) {
  let $pos = state.selection.$anchor;

  for (let d = $pos.depth; d > 0; d--) {
    let node = $pos.node(d);

    if (node.type.spec.tableRole == 'table') {
      if (dispatch) dispatch(state.tr.delete($pos.before(d), $pos.after(d)).scrollIntoView());
      return true;
    }
  }

  return false;
}

class TableView {
  constructor(node, cellMinWidth) {
    this.node = node;
    this.cellMinWidth = cellMinWidth;
    this.dom = document.createElement('div');
    this.dom.className = 'tableWrapper';
    this.table = this.dom.appendChild(document.createElement('table'));
    this.colgroup = this.table.appendChild(document.createElement('colgroup'));
    updateColumns(node, this.colgroup, this.table, cellMinWidth);
    this.contentDOM = this.table.appendChild(document.createElement('tbody'));
  }

  update(node) {
    if (node.type != this.node.type) return false;
    this.node = node;
    updateColumns(node, this.colgroup, this.table, this.cellMinWidth);
    return true;
  }

  ignoreMutation(record) {
    return record.type == 'attributes' && (record.target == this.table || this.colgroup.contains(record.target));
  }

}

function updateColumns(node, colgroup, table, cellMinWidth, overrideCol, overrideValue) {
  let totalWidth = 0,
      fixedWidth = true;
  let nextDOM = colgroup.firstChild,
      row = node.firstChild;

  for (let i = 0, col = 0; i < row.childCount; i++) {
    let {
      colspan,
      colwidth
    } = row.child(i).attrs;

    for (let j = 0; j < colspan; j++, col++) {
      let hasWidth = overrideCol == col ? overrideValue : colwidth && colwidth[j];
      let cssWidth = hasWidth ? hasWidth + 'px' : '';
      totalWidth += hasWidth || cellMinWidth;
      if (!hasWidth) fixedWidth = false;

      if (!nextDOM) {
        colgroup.appendChild(document.createElement('col')).style.width = cssWidth;
      } else {
        if (nextDOM.style.width != cssWidth) nextDOM.style.width = cssWidth;
        nextDOM = nextDOM.nextSibling;
      }
    }
  }

  while (nextDOM) {
    let after = nextDOM.nextSibling;
    nextDOM.parentNode.removeChild(nextDOM);
    nextDOM = after;
  }

  if (fixedWidth) {
    table.style.width = totalWidth + 'px';
    table.style.minWidth = '';
  } else {
    table.style.width = '';
    table.style.minWidth = totalWidth + 'px';
  }
}

const key = new dist/* PluginKey */.H$('tableColumnResizing');

function columnResizing({
  handleWidth = 5,
  cellMinWidth = 25,
  View = TableView,
  lastColumnResizable = true
} = {}) {
  let plugin = new dist/* Plugin */.Sy({
    key,
    state: {
      init(_, state) {
        this.spec.props.nodeViews[tableNodeTypes(state.schema).table.name] = (node, view) => new View(node, cellMinWidth, view);

        return new ResizeState(-1, false);
      },

      apply(tr, prev) {
        return prev.apply(tr);
      }

    },
    props: {
      attributes(state) {
        let pluginState = key.getState(state);
        return pluginState.activeHandle > -1 ? {
          class: 'resize-cursor'
        } : null;
      },

      handleDOMEvents: {
        mousemove(view, event) {
          handleMouseMove(view, event, handleWidth, cellMinWidth, lastColumnResizable);
        },

        mouseleave(view) {
          handleMouseLeave(view);
        },

        mousedown(view, event) {
          handleMouseDown(view, event, cellMinWidth);
        }

      },

      decorations(state) {
        let pluginState = key.getState(state);
        if (pluginState.activeHandle > -1) return handleDecorations(state, pluginState.activeHandle);
      },

      nodeViews: {}
    }
  });
  return plugin;
}

class ResizeState {
  constructor(activeHandle, dragging) {
    this.activeHandle = activeHandle;
    this.dragging = dragging;
  }

  apply(tr) {
    let state = this,
        action = tr.getMeta(key);
    if (action && action.setHandle != null) return new ResizeState(action.setHandle, null);
    if (action && action.setDragging !== undefined) return new ResizeState(state.activeHandle, action.setDragging);

    if (state.activeHandle > -1 && tr.docChanged) {
      let handle = tr.mapping.map(state.activeHandle, -1);
      if (!pointsAtCell(tr.doc.resolve(handle))) handle = null;
      state = new ResizeState(handle, state.dragging);
    }

    return state;
  }

}

function handleMouseMove(view, event, handleWidth, cellMinWidth, lastColumnResizable) {
  let pluginState = key.getState(view.state);

  if (!pluginState.dragging) {
    let target = domCellAround(event.target),
        cell = -1;

    if (target) {
      let {
        left,
        right
      } = target.getBoundingClientRect();
      if (event.clientX - left <= handleWidth) cell = edgeCell(view, event, 'left');else if (right - event.clientX <= handleWidth) cell = edgeCell(view, event, 'right');
    }

    if (cell != pluginState.activeHandle) {
      if (!lastColumnResizable && cell !== -1) {
        let $cell = view.state.doc.resolve(cell);
        let table = $cell.node(-1),
            map = TableMap.get(table),
            start = $cell.start(-1);
        let col = map.colCount($cell.pos - start) + $cell.nodeAfter.attrs.colspan - 1;

        if (col == map.width - 1) {
          return;
        }
      }

      updateHandle(view, cell);
    }
  }
}

function handleMouseLeave(view) {
  let pluginState = key.getState(view.state);
  if (pluginState.activeHandle > -1 && !pluginState.dragging) updateHandle(view, -1);
}

function handleMouseDown(view, event, cellMinWidth) {
  let pluginState = key.getState(view.state);
  if (pluginState.activeHandle == -1 || pluginState.dragging) return false;
  let cell = view.state.doc.nodeAt(pluginState.activeHandle);
  let width = currentColWidth(view, pluginState.activeHandle, cell.attrs);
  view.dispatch(view.state.tr.setMeta(key, {
    setDragging: {
      startX: event.clientX,
      startWidth: width
    }
  }));

  function finish(event) {
    window.removeEventListener('mouseup', finish);
    window.removeEventListener('mousemove', move);
    let pluginState = key.getState(view.state);

    if (pluginState.dragging) {
      updateColumnWidth(view, pluginState.activeHandle, draggedWidth(pluginState.dragging, event, cellMinWidth));
      view.dispatch(view.state.tr.setMeta(key, {
        setDragging: null
      }));
    }
  }

  function move(event) {
    if (!event.which) return finish(event);
    let pluginState = key.getState(view.state);
    let dragged = draggedWidth(pluginState.dragging, event, cellMinWidth);
    displayColumnWidth(view, pluginState.activeHandle, dragged, cellMinWidth);
  }

  window.addEventListener('mouseup', finish);
  window.addEventListener('mousemove', move);
  event.preventDefault();
  return true;
}

function currentColWidth(view, cellPos, {
  colspan,
  colwidth
}) {
  let width = colwidth && colwidth[colwidth.length - 1];
  if (width) return width;
  let dom = view.domAtPos(cellPos);
  let node = dom.node.childNodes[dom.offset];
  let domWidth = node.offsetWidth,
      parts = colspan;
  if (colwidth) for (let i = 0; i < colspan; i++) if (colwidth[i]) {
    domWidth -= colwidth[i];
    parts--;
  }
  return domWidth / parts;
}

function domCellAround(target) {
  while (target && target.nodeName != 'TD' && target.nodeName != 'TH') target = target.classList.contains('ProseMirror') ? null : target.parentNode;

  return target;
}

function edgeCell(view, event, side) {
  let found = view.posAtCoords({
    left: event.clientX,
    top: event.clientY
  });
  if (!found) return -1;
  let {
    pos
  } = found;
  let $cell = cellAround(view.state.doc.resolve(pos));
  if (!$cell) return -1;
  if (side == 'right') return $cell.pos;
  let map = TableMap.get($cell.node(-1)),
      start = $cell.start(-1);
  let index = map.map.indexOf($cell.pos - start);
  return index % map.width == 0 ? -1 : start + map.map[index - 1];
}

function draggedWidth(dragging, event, cellMinWidth) {
  let offset = event.clientX - dragging.startX;
  return Math.max(cellMinWidth, dragging.startWidth + offset);
}

function updateHandle(view, value) {
  view.dispatch(view.state.tr.setMeta(key, {
    setHandle: value
  }));
}

function updateColumnWidth(view, cell, width) {
  let $cell = view.state.doc.resolve(cell);
  let table = $cell.node(-1),
      map = TableMap.get(table),
      start = $cell.start(-1);
  let col = map.colCount($cell.pos - start) + $cell.nodeAfter.attrs.colspan - 1;
  let tr = view.state.tr;

  for (let row = 0; row < map.height; row++) {
    let mapIndex = row * map.width + col; // Rowspanning cell that has already been handled

    if (row && map.map[mapIndex] == map.map[mapIndex - map.width]) continue;
    let pos = map.map[mapIndex],
        {
      attrs
    } = table.nodeAt(pos);
    let index = attrs.colspan == 1 ? 0 : col - map.colCount(pos);
    if (attrs.colwidth && attrs.colwidth[index] == width) continue;
    let colwidth = attrs.colwidth ? attrs.colwidth.slice() : zeroes(attrs.colspan);
    colwidth[index] = width;
    tr.setNodeMarkup(start + pos, null, setAttr(attrs, 'colwidth', colwidth));
  }

  if (tr.docChanged) view.dispatch(tr);
}

function displayColumnWidth(view, cell, width, cellMinWidth) {
  let $cell = view.state.doc.resolve(cell);
  let table = $cell.node(-1),
      start = $cell.start(-1);
  let col = TableMap.get(table).colCount($cell.pos - start) + $cell.nodeAfter.attrs.colspan - 1;
  let dom = view.domAtPos($cell.start(-1)).node;

  while (dom.nodeName != 'TABLE') dom = dom.parentNode;

  updateColumns(table, dom.firstChild, dom, cellMinWidth, col, width);
}

function zeroes(n) {
  let result = [];

  for (let i = 0; i < n; i++) result.push(0);

  return result;
}

function handleDecorations(state, cell) {
  let decorations = [];
  let $cell = state.doc.resolve(cell);
  let table = $cell.node(-1),
      map = TableMap.get(table),
      start = $cell.start(-1);
  let col = map.colCount($cell.pos - start) + $cell.nodeAfter.attrs.colspan;

  for (let row = 0; row < map.height; row++) {
    let index = col + row * map.width - 1; // For positions that are have either a different cell or the end
    // of the table to their right, and either the top of the table or
    // a different cell above them, add a decoration

    if ((col == map.width || map.map[index] != map.map[index + 1]) && (row == 0 || map.map[index - 1] != map.map[index - 1 - map.width])) {
      let cellPos = map.map[index];
      let pos = start + cellPos + table.nodeAt(cellPos).nodeSize - 1;
      let dom = document.createElement('div');
      dom.className = 'column-resize-handle';
      decorations.push(prosemirror_view_dist/* Decoration.widget */.p.widget(pos, dom));
    }
  }

  return prosemirror_view_dist/* DecorationSet.create */.EH.create(state.doc, decorations);
} // This file defines a plugin that handles the drawing of cell
//
// Creates a [plugin](http://prosemirror.net/docs/ref/#state.Plugin)
// that, when added to an editor, enables cell-selection, handles
// cell-based copy/paste, and makes sure tables stay well-formed (each
// row has the same width, and cells don't overlap).
//
// You should probably put this plugin near the end of your array of
// plugins, since it handles mouse and arrow key events in tables
// rather broadly, and other plugins, like the gap cursor or the
// column-width dragging plugin, might want to get a turn first to
// perform more specific behavior.


function tableEditing({
  allowTableNodeSelection = false
} = {}) {
  return new dist/* Plugin */.Sy({
    key: key$1,
    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init() {
        return null;
      },

      apply(tr, cur) {
        let set = tr.getMeta(key$1);
        if (set != null) return set == -1 ? null : set;
        if (cur == null || !tr.docChanged) return cur;
        let {
          deleted,
          pos
        } = tr.mapping.mapResult(cur);
        return deleted ? null : pos;
      }

    },
    props: {
      decorations: drawCellSelection,
      handleDOMEvents: {
        mousedown: handleMouseDown$1
      },

      createSelectionBetween(view) {
        if (key$1.getState(view.state) != null) return view.state.selection;
      },

      handleTripleClick,
      handleKeyDown,
      handlePaste
    },

    appendTransaction(_, oldState, state) {
      return normalizeSelection(state, fixTables(state, oldState), allowTableNodeSelection);
    }

  });
}

 //# sourceMappingURL=index.esm.js.map
// EXTERNAL MODULE: ./node_modules/@tiptap/core/dist/tiptap-core.esm.js + 2 modules
var tiptap_core_esm = __webpack_require__(40256);
;// CONCATENATED MODULE: ./node_modules/@tiptap/extension-table/dist/tiptap-extension-table.esm.js




function tiptap_extension_table_esm_updateColumns(node, colgroup, table, cellMinWidth, overrideCol, overrideValue) {
  let totalWidth = 0;
  let fixedWidth = true;
  let nextDOM = colgroup.firstChild;
  const row = node.firstChild;

  for (let i = 0, col = 0; i < row.childCount; i += 1) {
    const {
      colspan,
      colwidth
    } = row.child(i).attrs;

    for (let j = 0; j < colspan; j += 1, col += 1) {
      const hasWidth = overrideCol === col ? overrideValue : colwidth && colwidth[j];
      const cssWidth = hasWidth ? `${hasWidth}px` : '';
      totalWidth += hasWidth || cellMinWidth;

      if (!hasWidth) {
        fixedWidth = false;
      }

      if (!nextDOM) {
        colgroup.appendChild(document.createElement('col')).style.width = cssWidth;
      } else {
        if (nextDOM.style.width !== cssWidth) {
          nextDOM.style.width = cssWidth;
        }

        nextDOM = nextDOM.nextSibling;
      }
    }
  }

  while (nextDOM) {
    const after = nextDOM.nextSibling;
    nextDOM.parentNode.removeChild(nextDOM);
    nextDOM = after;
  }

  if (fixedWidth) {
    table.style.width = `${totalWidth}px`;
    table.style.minWidth = '';
  } else {
    table.style.width = '';
    table.style.minWidth = `${totalWidth}px`;
  }
}

class tiptap_extension_table_esm_TableView {
  constructor(node, cellMinWidth) {
    this.node = node;
    this.cellMinWidth = cellMinWidth;
    this.dom = document.createElement('div');
    this.dom.className = 'tableWrapper';
    this.table = this.dom.appendChild(document.createElement('table'));
    this.colgroup = this.table.appendChild(document.createElement('colgroup'));
    tiptap_extension_table_esm_updateColumns(node, this.colgroup, this.table, cellMinWidth);
    this.contentDOM = this.table.appendChild(document.createElement('tbody'));
  }

  update(node) {
    if (node.type !== this.node.type) {
      return false;
    }

    this.node = node;
    tiptap_extension_table_esm_updateColumns(node, this.colgroup, this.table, this.cellMinWidth);
    return true;
  }

  ignoreMutation(mutation) {
    return mutation.type === 'attributes' && (mutation.target === this.table || this.colgroup.contains(mutation.target));
  }

}

function createCell(cellType, cellContent) {
  if (cellContent) {
    return cellType.createChecked(null, cellContent);
  }

  return cellType.createAndFill();
}

function getTableNodeTypes(schema) {
  if (schema.cached.tableNodeTypes) {
    return schema.cached.tableNodeTypes;
  }

  const roles = {};
  Object.keys(schema.nodes).forEach(type => {
    const nodeType = schema.nodes[type];

    if (nodeType.spec.tableRole) {
      roles[nodeType.spec.tableRole] = nodeType;
    }
  });
  schema.cached.tableNodeTypes = roles;
  return roles;
}

function createTable(schema, rowsCount, colsCount, withHeaderRow, cellContent) {
  const types = getTableNodeTypes(schema);
  const headerCells = [];
  const cells = [];

  for (let index = 0; index < colsCount; index += 1) {
    const cell = createCell(types.cell, cellContent);

    if (cell) {
      cells.push(cell);
    }

    if (withHeaderRow) {
      const headerCell = createCell(types.header_cell, cellContent);

      if (headerCell) {
        headerCells.push(headerCell);
      }
    }
  }

  const rows = [];

  for (let index = 0; index < rowsCount; index += 1) {
    rows.push(types.row.createChecked(null, withHeaderRow && index === 0 ? headerCells : cells));
  }

  return types.table.createChecked(null, rows);
}

function isCellSelection(value) {
  return value instanceof CellSelection;
}

const deleteTableWhenAllCellsSelected = ({
  editor
}) => {
  const {
    selection
  } = editor.state;

  if (!isCellSelection(selection)) {
    return false;
  }

  let cellCount = 0;
  const table = (0,tiptap_core_esm.findParentNodeClosestToPos)(selection.ranges[0].$from, node => {
    return node.type.name === 'table';
  });
  table === null || table === void 0 ? void 0 : table.node.descendants(node => {
    if (node.type.name === 'table') {
      return false;
    }

    if (['tableCell', 'tableHeader'].includes(node.type.name)) {
      cellCount += 1;
    }
  });
  const allCellsSelected = cellCount === selection.ranges.length;

  if (!allCellsSelected) {
    return false;
  }

  editor.commands.deleteTable();
  return true;
};

const Table = tiptap_core_esm.Node.create({
  name: 'table',

  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: false,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: tiptap_extension_table_esm_TableView,
      lastColumnResizable: true,
      allowTableNodeSelection: false
    };
  },

  content: 'tableRow+',
  tableRole: 'table',
  isolating: true,
  group: 'block',

  parseHTML() {
    return [{
      tag: 'table'
    }];
  },

  renderHTML({
    HTMLAttributes
  }) {
    return ['table', (0,tiptap_core_esm.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), ['tbody', 0]];
  },

  addCommands() {
    return {
      insertTable: ({
        rows = 3,
        cols = 3,
        withHeaderRow = true
      } = {}) => ({
        tr,
        dispatch,
        editor
      }) => {
        const node = createTable(editor.schema, rows, cols, withHeaderRow);

        if (dispatch) {
          const offset = tr.selection.anchor + 1;
          tr.replaceSelectionWith(node).scrollIntoView().setSelection(dist/* TextSelection.near */.Bs.near(tr.doc.resolve(offset)));
        }

        return true;
      },
      addColumnBefore: () => ({
        state,
        dispatch
      }) => {
        return addColumnBefore(state, dispatch);
      },
      addColumnAfter: () => ({
        state,
        dispatch
      }) => {
        return addColumnAfter(state, dispatch);
      },
      deleteColumn: () => ({
        state,
        dispatch
      }) => {
        return deleteColumn(state, dispatch);
      },
      addRowBefore: () => ({
        state,
        dispatch
      }) => {
        return addRowBefore(state, dispatch);
      },
      addRowAfter: () => ({
        state,
        dispatch
      }) => {
        return addRowAfter(state, dispatch);
      },
      deleteRow: () => ({
        state,
        dispatch
      }) => {
        return deleteRow(state, dispatch);
      },
      deleteTable: () => ({
        state,
        dispatch
      }) => {
        return deleteTable(state, dispatch);
      },
      mergeCells: () => ({
        state,
        dispatch
      }) => {
        return mergeCells(state, dispatch);
      },
      splitCell: () => ({
        state,
        dispatch
      }) => {
        return splitCell(state, dispatch);
      },
      toggleHeaderColumn: () => ({
        state,
        dispatch
      }) => {
        return toggleHeader('column')(state, dispatch);
      },
      toggleHeaderRow: () => ({
        state,
        dispatch
      }) => {
        return toggleHeader('row')(state, dispatch);
      },
      toggleHeaderCell: () => ({
        state,
        dispatch
      }) => {
        return toggleHeaderCell(state, dispatch);
      },
      mergeOrSplit: () => ({
        state,
        dispatch
      }) => {
        if (mergeCells(state, dispatch)) {
          return true;
        }

        return splitCell(state, dispatch);
      },
      setCellAttribute: (name, value) => ({
        state,
        dispatch
      }) => {
        return setCellAttr(name, value)(state, dispatch);
      },
      goToNextCell: () => ({
        state,
        dispatch
      }) => {
        return goToNextCell(1)(state, dispatch);
      },
      goToPreviousCell: () => ({
        state,
        dispatch
      }) => {
        return goToNextCell(-1)(state, dispatch);
      },
      fixTables: () => ({
        state,
        dispatch
      }) => {
        if (dispatch) {
          fixTables(state);
        }

        return true;
      },
      setCellSelection: position => ({
        tr,
        dispatch
      }) => {
        if (dispatch) {
          const selection = CellSelection.create(tr.doc, position.anchorCell, position.headCell); // @ts-ignore

          tr.setSelection(selection);
        }

        return true;
      }
    };
  },

  addKeyboardShortcuts() {
    return {
      Tab: () => {
        if (this.editor.commands.goToNextCell()) {
          return true;
        }

        if (!this.editor.can().addRowAfter()) {
          return false;
        }

        return this.editor.chain().addRowAfter().goToNextCell().run();
      },
      'Shift-Tab': () => this.editor.commands.goToPreviousCell(),
      Backspace: deleteTableWhenAllCellsSelected,
      'Mod-Backspace': deleteTableWhenAllCellsSelected,
      Delete: deleteTableWhenAllCellsSelected,
      'Mod-Delete': deleteTableWhenAllCellsSelected
    };
  },

  addProseMirrorPlugins() {
    const isResizable = this.options.resizable && this.editor.isEditable;
    return [...(isResizable ? [columnResizing({
      handleWidth: this.options.handleWidth,
      cellMinWidth: this.options.cellMinWidth,
      View: this.options.View,
      // TODO: PR for @types/prosemirror-tables
      // @ts-ignore (incorrect type)
      lastColumnResizable: this.options.lastColumnResizable
    })] : []), tableEditing({
      allowTableNodeSelection: this.options.allowTableNodeSelection
    })];
  },

  extendNodeSchema(extension) {
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    return {
      tableRole: (0,tiptap_core_esm.callOrReturn)((0,tiptap_core_esm.getExtensionField)(extension, 'tableRole', context))
    };
  }

});
 //# sourceMappingURL=tiptap-extension-table.esm.js.map

/***/ })

}]);