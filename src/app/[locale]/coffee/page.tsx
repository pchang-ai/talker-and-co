import { getTranslations } from 'next-intl/server';

export default async function CoffeePage() {
    const t = await getTranslations('CoffeePage');

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col items-center">
            <div className="max-w-7xl w-full flex flex-col gap-16">
                {/* Header */}
                <header className="flex flex-col gap-6 max-w-2xl">
                    <span className="text-xs font-medium tracking-[0.4em] uppercase text-gold">Rainforest Harvest</span>
                    <h1 className="text-5xl md:text-7xl font-medium serif text-cream leading-tight">{t('title')}</h1>
                    <p className="text-lg text-cream/60 leading-relaxed font-light">{t('description')}</p>
                </header>

                {/* Product Grid Placeholder */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="glass p-8 flex flex-col gap-6 group hover:scale-[1.02] transition-all duration-500">
                            <div className="aspect-[4/5] bg-cream/5 border border-cream/10 relative flex items-center justify-center">
                                <span className="text-[10px] tracking-[0.2em] text-cream/20 uppercase">Product Image</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl serif text-cream italic">Product Name {i}</h3>
                                <p className="text-sm text-cream/50 font-light">Detailed origin and flavor profile notes go here.</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Back */}
                <footer className="mt-12 flex justify-center">
                    <a href="/" className="text-xs tracking-widest uppercase text-cream/40 hover:text-cream transition-all">
                        ← Back to Home
                    </a>
                </footer>
            </div>
        </main>
    );
}
