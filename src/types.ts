type ExtractTranslationKeys<T> =
  T extends Record<string, any>
    ? {
        [K in keyof T]: T[K] extends string
          ? K
          : T[K] extends Record<string, any>
            ? K extends string
              ? `${K}.${ExtractTranslationKeys<T[K]>}`
              : never
            : never;
      }[keyof T]
    : never;

// Extract keys from the translation namespace specifically
type ExtractFromTranslationNamespace<T> =
  T extends Record<string, any>
    ? {
        [K in keyof T]: T[K] extends Record<string, any>
          ? K extends 'translation'
            ? ExtractTranslationKeys<T[K]>
            : K extends string
              ? `${K}.${ExtractTranslationKeys<T[K]>}`
              : never
          : never;
      }[keyof T]
    : never;

type ResourcesOf<T> = T[keyof T];

export type TranslationKeys<T> = ExtractFromTranslationNamespace<
  ResourcesOf<T>
>;

type NestedStringRecord = string | { [key: string]: NestedStringRecord };

export type ResourcesConstraint = Record<
  string,
  Record<string, NestedStringRecord>
>;
