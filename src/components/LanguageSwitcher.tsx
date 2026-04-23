'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    function onLanguageChange(nextLocale: string) {
        startTransition(() => {
            // Replace the current locale in the pathname
            // Example: /en/about -> /zh/about
            const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);
            router.replace(newPathname === '' ? '/' : newPathname);
        });
    }

    return (
        <div className="fixed top-6 right-6 z-50">
            <div className="glass flex items-center gap-1 p-1 rounded-full px-4 py-2 text-xs font-medium tracking-widest uppercase">
                <button
                    onClick={() => onLanguageChange('en')}
                    disabled={isPending || locale === 'en'}
                    className={`hover:text-gold transition-colors ${locale === 'en' ? 'text-cream underline underline-offset-4 decoration-gold' : 'text-cream/50'}`}
                >
                    EN
                </button>
                <span className="text-cream/20 px-1">|</span>
                <button
                    onClick={() => onLanguageChange('zh')}
                    disabled={isPending || locale === 'zh'}
                    className={`hover:text-gold transition-colors ${locale === 'zh' ? 'text-cream underline underline-offset-4 decoration-gold' : 'text-cream/50'}`}
                >
                    中文
                </button>
            </div>
        </div>
    );
}
