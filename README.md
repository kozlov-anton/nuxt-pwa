# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# yarn
yarn build
```

Locally preview production build:

```bash
# yarn
yarn preview
```

Generate static project for GitHub Pages:

```bash
# yarn
yarn generate
```

Deploy the generated static project to GitHub Pages:

```bash
# yarn
yarn deploy
```

Switch Node version:

```bash
# nvm
nvm use
```

Run Claude Code model locally:

```bash
# Fast: For daily coding
claude --model qwen2.5-coder:14b
```

```bash
# Slow: For deep understanding/research
claude --model glm-4.7-flash:latest
```

```bash
# Ollama: List models
ollama list
```

```bash
# Ollama: List running models
ollama ps 
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
