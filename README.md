# 🚀 @cabrapi/sdk

## 📋 Overview

The `@cabrapi/sdk` provides a unified and typed interface for communicating with the caBRAPI services, supporting two authentication modes:

| Mode | Environment | Emoji |
|------|-------------|-------|
| **Public** (`public`) | Client (browser) | 🌐 |
| **Private** (`private`) | Server (Node.js) | 🔒 |

## 📦 Installation

```bash
npm install @cabrapi/sdk
```

## 🎯 Usage modes

### 🌐 Public mode (client-side)

> Ideal for SPAs, React, Vue, Angular and any application that runs in the browser.
> No API key needed.

```typescript
import { caBRAPI, CoreClient } from '@cabrapi/sdk';

const client = new caBRAPI(new CoreClient.Options(CoreClient.Mode.PUBLIC));
```

### 🔒 Private mode (server-side)

> For secure backend operations with an API key.

```typescript
import { caBRAPI, CoreClient } from '@cabrapi/sdk';

const client = new caBRAPI(
  new CoreClient.Options(CoreClient.Mode.PRIVATE)
    .apiKey('SUA_API_KEY') // 🔑 Sua chave de acesso
);
```

> Use `baseURL()` to point to another environment (e.g., local):

```typescript
import { caBRAPI, CoreClient } from '@cabrapi/sdk';

const client = new caBRAPI(
  new CoreClient.Options(CoreClient.Mode.PRIVATE)
    .apiKey('SUA_API_KEY')
    .baseURL('https://api.cabrapi.com.br')
);
```

### ☁️ CDN 

> Use directly in the browser without build tools.

```html
<script type="module">
  import { caBRAPI, CoreClient } from 'https://cdn.jsdelivr.net/npm/@cabrapi/sdk/dist/index.js';
  
  const client = new caBRAPI(new CoreClient.Options(CoreClient.Mode.PUBLIC));
</script>
```

## ⚙️ Configuration

### Options builder

| Method | Description |
|--------|-------------|
| `new CoreClient.Options(CoreClient.Mode.PUBLIC)` | Public mode (no API key) |
| `new CoreClient.Options(CoreClient.Mode.PRIVATE)` | Private mode (backend) |
| `.apiKey('...')` | 🔑 API key (private mode) |
| `.baseURL('...')` | Custom base URL (e.g., local environment) |

### 📂 Public configuration (`public`)

| Property | Type | Description |
|----------|------|-------------|
| - | - | No configuration needed |

### 🔐 Private mode (`private`)

> Restricted to the backend. Use `.apiKey()` to authenticate and `.baseURL()` to point to another environment.

## 📌 Requirements

| Environment | Version |
|-------------|---------|
| **Node.js** (private mode) | `>= 18.x` |
| **Browsers** (public mode) | ES2020+ |
| **TypeScript** | Native support ✅ |
