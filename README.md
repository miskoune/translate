# @miskoune/translate

[![npm](https://img.shields.io/npm/v/@miskoune/translate)](https://www.npmjs.com/package/@miskoune/translate)

Type-safe translation utilities for React projects, built on [i18next](https://www.i18next.com/) and [react-i18next](https://react.i18next.com/).

## Installation

```bash
npm install @miskoune/translate
```

## Usage

Define your resources and initialize once at app startup:

```ts
// locales/index.ts
import { setupTranslate, type TranslationKeys } from '@miskoune/translate';

const resources = {
  en: {
    translation: {
      home: {
        title: 'Welcome',
      },
    },
  },
  fr: {
    translation: {
      home: {
        title: 'Bienvenue',
      },
    },
  },
} as const;

setupTranslate({ locale: 'en', resources });

export type AppTranslationKeys = TranslationKeys<typeof resources>;
```

Then use the hook in your components:

```tsx
import { useTranslation } from '@miskoune/translate';

export function Hero() {
  const { t } = useTranslation();

  return <h1>{t('home.title')}</h1>;
}
```

## API

- `setupTranslate({ locale, resources })` — initializes i18next with sane defaults (`returnNull: false`, no HTML escaping).
- `useTranslation()` — re-exported from `react-i18next`.
- `TranslationKeys<T>` — extracts a union of dot-notation translation keys from your resources type.
- `ResourcesConstraint` — the shape resources must conform to.

## Release

Releases are automated with [semantic-release](https://semantic-release.gitbook.io/): every conventional commit pushed to `main` publishes a new version to npm.
