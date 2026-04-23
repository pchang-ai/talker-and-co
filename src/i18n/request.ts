import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale } from '../config';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;
    console.log('[i18n] Requested locale:', locale);

    // Ensure that a valid locale is used
    if (!locale || !locales.includes(locale as any)) {
        console.log('[i18n] Invalid or missing locale, falling back to en');
        locale = 'en';
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});
