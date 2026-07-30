import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { type ResourcesConstraint } from './types.js';

interface SetupTranslateParams<T extends ResourcesConstraint> {
  locale: string;
  resources: T;
}

/**
 * Setup i18n with type-safe translation keys.
 * @param locale - The user locale.
 * @param resources - The resources with nested translation objects.
 */
export function setupTranslate<T extends ResourcesConstraint>({
  locale,
  resources,
}: SetupTranslateParams<T>) {
  i18next.use(initReactI18next).init({
    lng: locale,
    returnNull: false,
    resources,
    interpolation: { escapeValue: false },
  });
}
