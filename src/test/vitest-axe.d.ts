/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-object-type */
import 'vitest';
import type { AxeMatchers } from 'vitest-axe/matchers';

// Vitest の Assertion に vitest-axe のカスタムマッチャー型を登録する（型のみ）
declare module 'vitest' {
  interface Assertion<T = any> extends AxeMatchers {}
  interface AsymmetricMatchersContaining extends AxeMatchers {}
}
