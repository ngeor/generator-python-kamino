# generator-python-kamino
> Create a Python project for the kamino repo

[![CI](https://github.com/ngeor/kamino/actions/workflows/generator-python-kamino.yml/badge.svg)](https://github.com/ngeor/kamino/actions/workflows/generator-python-kamino.yml)

## Installation

First, install [Yeoman](https://yeoman.io/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
```

Link the generator with:

```bash
npm link
```

Use the generator with:

```bash
yo @ngeor/python-kamino
```

Uninstall with:

```bash
npm rm --global @ngeor/generator-python-kamino
```

## Release

- Make sure you're on default branch and no pending changes exist
- Bump version with `npm version --no-git-tag-version patch`
- Generate changelog with `git-cliff --include-path 'generator-python-kamino/*' -r .. -o CHANGELOG.md -t 0.0.1`
- Commit with a message like "chore(release): prepare for release 0.0.1"
- Tag `git tag -a -m "Releasing version 0.0.1" generator-python-kamino/0.0.1`

## License

MIT © [Nikolaos Georgiou](https://ngeor.com/)
