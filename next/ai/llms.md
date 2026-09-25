# llms.txt

`llms.txt`
is a
[proposed standard](https://llmstxt.org)
that helps LLMs understand and process a site's content. We generate two always-fresh flavours so tools that
lean on LLMs for code generation produce better Taiga UI code.

## The files

- [llms.txt](/llms.txt)
— a table-of-contents file with links to the key resources.

- [llms-full.txt](/llms-full.txt)
— a detailed, compiled set of resources describing how to build with Taiga UI, with component
examples.

## How to use it

Paste
`llms-full.txt`
straight into your model's context for a zero-setup start, or point any llms.txt-aware tool at the
hosted URL so it always reads the current, version-correct API.

## .md extension

Add
`.md`
to any documentation page's URL to get a clean Markdown version of that page — for example,
[`/components/button.md`](/components/button.md)
renders the Button page as Markdown. Handy for dropping a single page into a model's context or pointing
an agent straight at one component's docs.
