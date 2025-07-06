import { SITE_TITLE } from '@/consts';
import { getEnvHintTitlePrefix } from '@/features/devtools/env-hint';

export const getPageTitle = (pageTitle?: string) =>
  pageTitle
    ? `${getEnvHintTitlePrefix()} ${pageTitle} | ${SITE_TITLE}`
    : `${getEnvHintTitlePrefix()} ${SITE_TITLE}`;
