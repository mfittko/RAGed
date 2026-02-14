# AGENTS.md — chart/

> Inherits all principles from the root [AGENTS.md](../AGENTS.md). This file adds Helm chart-specific rules.

## Directory Structure

```
chart/
  Chart.yaml          → Chart metadata (name, version, appVersion)
  values.yaml         → All configurable values with sensible defaults
  templates/
    _helpers.tpl      → Shared template helpers (labels, names)
    api-*.yaml        → RAG API Deployment, Service, Ingress, ConfigMap, Secret
    qdrant-*.yaml     → Qdrant StatefulSet, Service
    ollama-*.yaml     → Ollama Deployment, PVC, Service
    indexer-job.yaml  → In-cluster indexing Job
```

## Rules

### All Values Have Defaults

Every value referenced in templates must have a default in `values.yaml`. A user should be able to run `helm install rag ./chart` with zero overrides and get a working (local-dev-grade) deployment.

### Secrets Never Have Default Values

Security-sensitive values (tokens, passwords, keys) must default to empty string `""`. The templates must handle the empty case gracefully (e.g., skip auth setup if token is empty).

### Use _helpers.tpl for DRY

Repeated label blocks, name computations, and selector patterns go in `_helpers.tpl`. Do not copy-paste label blocks across templates.

### Every Template Must Lint

All templates must pass `helm lint ./chart` cleanly. Run it before committing any chart change.

### Resource Naming Convention

All Kubernetes resources use the pattern: `{{ include "rag-stack.fullname" . }}-<component>` (e.g., `rag-stack-api`, `rag-stack-qdrant`).

### Conditional Components

Optional components (Ollama, Ingress, Indexer Job) must be gated behind `.enabled` flags in `values.yaml`. Templates must wrap with `{{- if .Values.<component>.enabled }}`.

### Version Tracking

- `Chart.yaml` `version` — bump for chart changes (Helm chart version)
- `Chart.yaml` `appVersion` — bump for application changes (API/CLI version)
- Keep both in sync with the actual application version
