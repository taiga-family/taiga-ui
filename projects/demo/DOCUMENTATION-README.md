# Taiga UI Documentation Improvements

This directory contains improvements to the LLM documentation generation for Taiga UI components.

## 📋 Overview

The improvements focus on reducing code generation errors by providing LLMs with:

1. **Explicit import mappings** (symbol → package)
2. **Code generation checklists** (prevent common mistakes)
3. **CDK type documentation** (TuiDay, TuiMonth, etc.)
4. **Common mistakes guide** (learn from ERRORS.md)
5. **Auto-extracted directive requirements** (per component)
6. **Separated API inputs/outputs** (clearer event types)

## 🚀 Quick Start

### Generate Documentation

```bash
cd /path/to/taiga-ui
npm run generate:llms-full
```

This creates `projects/demo/src/llms-full.txt` with all improvements included.

### Verify Generation

```bash
# Check header sections are included
head -50 projects/demo/src/llms-full.txt

# Check directive extraction works
grep -A 10 "Required Directive Imports" projects/demo/src/llms-full.txt | head -20

# Check API separation
grep -A 5 "API - Outputs" projects/demo/src/llms-full.txt | head -15
```

## 📁 Directory Structure

```bash
projects/demo/
├── src/
│   ├── llms-header-sections/          # Header sections added to documentation
│   │   ├── import-map.md              # Symbol → package mapping
│   │   ├── checklist.md               # Code generation checklist
│   │   ├── cdk-types.md               # TuiDay, TuiMonth, etc. docs
│   │   └── common-mistakes.md         # Common error patterns
│   ├── llms-full.txt                  # Generated documentation (output)
│   └── llms-config.json               # Generation config
├── scripts/llms/
│   ├── llms-full-generate.ts          # Main generator (modified)
│   └── utils/
│       ├── file-system.ts             # API/directive extraction (modified)
│       ├── config.ts
│       ├── routes.ts
│       └── index.ts
```

## 🔧 Header Sections

### 1. Import Map (`import-map.md`)

**Purpose:** Solve ~35% of import errors

**Content:**

- Complete symbol → package mapping for all Taiga UI packages
- Angular common imports (NgIf, FormsModule, etc.)
- Common import mistakes with corrections

**Example:**

```typescript
// ❌ Wrong
import {TuiButton} from '@taiga-ui/kit';

// ✅ Correct
import {TuiButton} from '@taiga-ui/core';
```

---

### 2. Code Generation Checklist (`checklist.md`)

**Purpose:** Systematic error prevention

**Content:**

- 9-point mandatory verification checklist
- Quick reference for common patterns
- Template syntax rules
- Null safety guidelines

**Checklist items:**

- ✅ Imports from correct packages
- ✅ Structural directives imported
- ✅ FormsModule for ngModel
- ✅ CDK types imported
- ✅ No arrow functions in templates
- ✅ Null safety checks
- ✅ Correct event parameter types
- ✅ Standalone component setup
- ✅ Avoid common anti-patterns

---

### 3. CDK Types Reference (`cdk-types.md`)

**Purpose:** Solve ~20% of TypeScript type errors

**Content:**

- TuiDay: calendar dates
- TuiMonth: month/year handling
- TuiYear: year type
- TuiTime: time handling
- TuiDayRange: date ranges
- TuiDayRangePeriod: preset ranges

Each type includes:

- Import statement
- Creation patterns
- Common methods
- Usage examples
- Common mistakes

---

### 4. Common Mistakes (`common-mistakes.md`)

**Purpose:** Learn from real-world errors

**Content:** 10 most common error patterns from ERRORS.md:

1. Arrow functions in templates (NG5002)
2. Missing FormsModule (NG8002)
3. Structural directive not imported (NG8116)
4. Null safety errors (TS2531)
5. Wrong event parameter type (TS2345)
6. Type errors with CDK classes (TS2304, TS2322)
7. Wrong import package (TS2305, TS2724)
8. Missing Angular built-in imports (NG8103)
9. Non-existent component properties (NG8002)
10. Using demo imports in real code

Each includes:

- Error message
- Incorrect code
- Explanation
- Correct solution

---

## 🔍 Auto-Extracted Sections

### Required Directive Imports

**Function:** `extractRequiredDirectives()` in `file-system.ts`

**How it works:**

1. Scans component templates for `*directiveName` patterns
2. Identifies Angular vs Taiga UI directives
3. Maps to correct import packages
4. Suggests modern alternatives (@if, @for)

**Example output:**

### Required Directive Imports

**Angular Structural Directives:**

```typescript
// For *ngIf
import {NgIf} from '@angular/common';
// OR use Angular 17+ control flow:
// @if (condition) { ... }
```

**Taiga UI Structural Directives:**

```typescript
// For *tuiDropdown
import {TuiDropdown} from '@taiga-ui/core';
```

---

### API Inputs/Outputs Separation

**Functions:** `getComponentApiFromTable()`, `getComponentApiFromTemplates()`

**How it works:**

1. Extracts properties from `<table tuiDocAPI>` and `<tui-doc-documentation>`
2. Detects outputs: starts with `(` or contains `EventEmitter`/`Observable`
3. Separates into two tables

**Before:**

```markdown
### API

| Property | Type | Description | | [value] | TuiDay | Selected date | | (dayClick) | TuiDay | Date clicked |
```

**After:**

```markdown
### API - Inputs

| Property | Type | Description | | [value] | TuiDay | Selected date |

### API - Outputs

| Event | Type | Description | | (dayClick) | TuiDay | Date clicked |
```

---

## 📊 Expected Impact

| Error Category        | Before | After | Reduction |
| --------------------- | ------ | ----- | --------- |
| Import errors         | ~35%   | ~5%   | **~86%**  |
| Directive errors      | ~25%   | ~3%   | **~88%**  |
| CDK type errors       | ~20%   | ~3%   | **~85%**  |
| Event type mismatches | ~10%   | ~2%   | **~80%**  |
| Template syntax       | ~10%   | ~5%   | **~50%**  |

**Overall:** Expected **~70-80% reduction** in compilation errors on first generation.

---

## 🧪 Testing

### Test Generation Quality

1. Generate sample components:

   ```bash
   # Use LLM to generate 5-10 components from documentation
   ```

2. Measure error rates:

   ```bash
   ng build --configuration development 2>&1 | grep "ERROR"
   ```

3. Categorize errors:
   - Imports: TS2305, TS2724
   - Directives: NG8116, NG8103
   - Types: TS2304, TS2322, TS2345, TS2531
   - Templates: NG5002, NG8002

4. Compare with baseline (before improvements)

---

## 🔄 Updating Header Sections

To modify header sections:

1. Edit files in `projects/demo/src/llms-header-sections/`
2. Run `npm run generate:llms-full`
3. Verify changes in `llms-full.txt`

**When to update:**

- New common errors discovered
- Taiga UI version upgrade (API changes)
- Angular version upgrade (new syntax)
- Package restructuring

---

## 🐛 Troubleshooting

### Header sections not appearing

```bash
# Check files exist
ls -la projects/demo/src/llms-header-sections/

# Check generator logs
npm run generate:llms-full 2>&1 | grep "header section"
```

### Directive extraction not working

```bash
# Test extraction function manually
# Add console.log in extractRequiredDirectives()

# Check for structural directives in templates
grep -r "\*tui" projects/demo/src/modules/components/*/index.html
```

### API separation issues

```bash
# Check for EventEmitter in API
grep -A 5 "EventEmitter" projects/demo/src/modules/components/*/index.html

# Verify separation in output
grep -B 2 -A 5 "API - Outputs" projects/demo/src/llms-full.txt
```

---

## 📝 Configuration

### `llms-config.json`

Control what's included in generation:

```json
{
  "llmsFull": {
    "excludeSections": ["legacy", "deprecated"],
    "includeExamples": {"value": true},
    "includeApi": {"value": true},
    "includeImportExamples": {"value": true},
    "includeUsageExamples": {"value": true}
  }
}
```

### Command-line overrides

```bash
# Disable examples
npm run generate:llms-full -- --includeExamples=false

# Custom config
npm run generate:llms-full -- --config=path/to/config.json
```

---

## 🚦 Next Steps

### Immediate

1. ✅ Test generation with LLM
2. ✅ Measure error reduction
3. ✅ Collect new error patterns
4. ✅ Update common-mistakes.md

### Future

1. **Component-specific errors:** Per-component mistake sections
2. **Auto-update import-map:** Extract from node_modules
3. **Version tagging:** Link docs to Taiga UI version
4. **LLM validation:** Pre-check code against checklist

---

## 📚 Related Files

- [IMPROVEMENTS-SUMMARY.md](./IMPROVEMENTS-SUMMARY.md) - Detailed summary of changes
- [ERRORS.md](../../ERRORS.md) - Original error collection
- [llms-config.json](./src/llms-config.json) - Generation configuration

---

## 🤝 Contributing

To add new improvements:

1. Identify error pattern from real usage
2. Add to appropriate header section or create new one
3. Update `llms-full-generate.ts` if needed
4. Test generation
5. Document in IMPROVEMENTS-SUMMARY.md

---

## 📞 Support

For issues or questions:

1. Check this README
2. Review IMPROVEMENTS-SUMMARY.md
3. Check generator logs
4. Inspect llms-full.txt output
