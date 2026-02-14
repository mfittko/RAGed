# AGENTS.md — docs/

> Inherits all principles from the root [AGENTS.md](../AGENTS.md). This file adds documentation-specific rules.

## Rules

### Tone and Style

- **Concise and direct.** No filler, no marketing language, no hedging.
- **Technical audience.** Assume the reader is a developer or an AI coding agent.
- **Active voice.** "Run `docker compose up`" not "The command should be run".
- **Present tense.** "The API validates input" not "The API will validate input".

### Structure

- **H1** = document title (one per file)
- **H2** = major sections
- **H3** = subsections
- Every document starts with a one-sentence summary under the H1 title.

### Mermaid Diagrams

- Every architecture or data flow explanation must include a Mermaid diagram.
- Use `graph TD` for component/topology diagrams (top-down).
- Use `sequenceDiagram` for request/response flows.
- Use `flowchart LR` for decision trees and pipelines.
- Keep diagrams simple: max 10-12 nodes. Split complex flows into multiple diagrams.
- Label all edges. Unlabeled arrows are ambiguous.

### Code Examples

- All code examples must be **copy-pasteable and complete**. No `...` or `// rest of code`.
- Include the shell prompt context (e.g., `cd cli && ...`) when directory matters.
- Show expected output when it helps understanding.

### DRY Documentation

- **Link, don't duplicate.** If a topic is covered in another doc, link to it.
- **Single source of truth.** Environment variables are documented in the relevant `AGENTS.md`, not repeated in every doc.
- Cross-reference format: `See [Architecture](01-architecture.md)` with relative paths.

### File Naming

- Numbered prefix for ordering: `00-`, `01-`, `02-`, etc.
- Lowercase, hyphenated: `01-architecture.md`, not `01_Architecture.md`
- The number determines sidebar/reading order. Leave gaps for future insertions.

### When to Update Docs

- Adding a new API endpoint → update `09-api-reference.md`
- Adding a new CLI flag → update `03-cli.md`
- Adding a new Helm value → update `05-helm-remote.md`
- Changing architecture → update `01-architecture.md` and its Mermaid diagrams
