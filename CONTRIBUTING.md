## 🚀 Versioning & Commit Conventions

This project uses **Automated Semantic Versioning** via `semantic-release`. Releases and package version updates are triggered automatically upon merging into `main` based on the format of git commit messages.

We strictly follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```text
<type>(<optional scope>): <description>
###this discribes the body
[optional body]

[optional footer(s)]

Commit Prefix,Description,Release Bump,Example
fix:,Bug fixes / patches,PATCH (1.0.0 → 1.0.1),fix(auth): fix session expiry bug
feat:,New features,MINOR (1.0.0 → 1.1.0),feat(kitchen): add order management page
feat!: or BREAKING CHANGE:,Major/Breaking API changes,MAJOR (1.0.0 → 2.0.0),feat!(api): redesign order endpoints
docs:,Documentation changes only,No Release,docs: update setup guide in README
style:,Code formatting/whitespace,No Release,style: fix padding in navigation bar
refactor:,Code changes (no fix/feature),No Release,refactor: simplify database queries
chore:,Build processes / dependencies,No Release,chore(deps): update next.js to v15
ci:,GitHub Actions / CI tweaks,No Release,ci: update release workflow
