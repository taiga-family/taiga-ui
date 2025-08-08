# LLMS Documentation Generation

This directory contains scripts for generating documentation files optimized for Large Language Models (LLMs).

## Files Generated

- **`llms.txt`**: Index file with component links and brief descriptions (~3K tokens)
- **`llms-full.txt`**: Full documentation with examples, API, and usage (~310K tokens)

## Configuration

The generation is controlled by `projects/demo/src/llms-config.json`. Each flag has detailed descriptions explaining its
purpose and impact.

### Configuration Structure

```json
{
  "llms": {
    "description": "Configuration for llms.txt (component links)",
    "excludeSections": ["legacy", "deprecated"]
  },
  "llmsFull": {
    "description": "Configuration for llms-full.txt (full documentation)",
    "excludeSections": ["legacy", "deprecated"],
    "includeExamples": {
      "value": true,
      "description": "Include component examples (HTML templates and usage). Extracted from <tui-doc-demo> sections. Adds ~40% to file size."
    },
    "includeApi": {
      "value": true,
      "description": "Include API documentation tables showing properties, methods, events. Extracted from <table tuiDocAPI> sections. Essential for component understanding."
    },
    "includeSourceCode": {
      "value": false,
      "description": "Include actual source code files (.ts, .html, .less). Can make files very large. Currently disabled for token efficiency."
    },
    "includeImportExamples": {
      "value": false,
      "description": "Include 'How to Use' import and template examples. Extracted from examples/import/import.md and template.md files. Disabled by default as not always relevant."
    },
    "includeMarkdownFiles": {
      "value": true,
      "description": "Include standalone markdown documentation files from examples directory. Adds general documentation content."
    },
    "includeUsageExamples": {
      "value": true,
      "description": "Include detailed usage examples for each component. Extracted from component documentation templates. Adds ~30% to file size."
    },
    "includeAllExamples": {
      "value": true,
      "description": "Include all available examples per component (if multiple exist). When false, only includes first example."
    }
  }
}
```

## Adding Component Descriptions

To add descriptions that will be included in the LLMS documentation, add content to the `<ng-template pageTab>` section
of your component's `index.html` file:

```html
<tui-doc-page
  header="ComponentName"
  package="KIT"
  type="components"
>
  <ng-template pageTab>
    <p>
      Your component description here. This will be extracted and included in the LLMS documentation. You can use
      <code>code</code>
      tags and other HTML elements.
    </p>

    <tui-doc-example ... />
  </ng-template>
</tui-doc-page>
```

**Example from `like/index.html`:**

```html
<p>
  A like component based on native checkbox with icons and custom color for icon when
  <code>:checked</code>
  state.
</p>
```

## Commands

### Generate Files

```bash
# Generate llms.txt only
npm run generate:llms

# Generate llms-full.txt only
npm run generate:llms-full

# Generate both files
npm run generate:llms:both
```

## File Sizes

- **`llms.txt`**: ~3K tokens (perfect for any LLM)
- **`llms-full.txt`**: ~310K tokens (suitable for GPT-4 128K+ context)

## Usage

- **`llms.txt`**: Use for quick reference and general queries
- **`llms-full.txt`**: Use for detailed component analysis and comprehensive documentation

## Build Integration

The LLMS generation is automatically included in the demo build process. Files are generated when you run:

```bash
npm run build:demo
```

## File Locations

- **Configuration**: `projects/demo/src/llms-config.json`
- **Generated Files**: `projects/demo/src/llms.txt`, `projects/demo/src/llms-full.txt`
- **Scripts**: `projects/demo/scripts/llms/`
- **Utilities**: `projects/demo/scripts/llms/utils/`

## Troubleshooting

### Common Issues

1. **Path Resolution**: Scripts use `process.cwd()` to resolve paths relative to project root
2. **Configuration Loading**: Falls back to default configuration if `llms-config.json` is missing
3. **Token Size**: Use the token analyzer to check file sizes before committing

### Debugging

```bash
# Test individual components
npx ts-node projects/demo/scripts/llms/utils/routes.ts
```
