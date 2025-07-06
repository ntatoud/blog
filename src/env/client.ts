import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod/v4';

const envMetaOrProcess: Record<string, string> = import.meta.env ?? process.env;

const isDev = process.env.NODE_ENV
  ? process.env.NODE_ENV === 'developement'
  : import.meta.env?.DEV;

export const envClient = createEnv({
  clientPrefix: 'VITE_',
  client: {
    VITE_ENV_NAME: z
      .string()
      .optional()
      .transform((value) => value ?? (isDev ? 'LOCAL' : undefined)),
    VITE_ENV_EMOJI: z
      .emoji()
      .optional()
      .transform((value) => value ?? (isDev ? '🚧' : undefined)),
    VITE_ENV_COLOR: z
      .string()
      .optional()
      .transform((value) => value ?? (isDev ? 'gold' : 'plum')),
  },

  runtimeEnv: {
    ...envMetaOrProcess,
  },
  emptyStringAsUndefined: true,
  skipValidation: !!envMetaOrProcess.SKIP_ENV_VALIDATION,
});
