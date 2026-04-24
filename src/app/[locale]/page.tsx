import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default async function Home() {
  const t = await getTranslations('HomePage');

  // Unified button style class
  const buttonClass = "glass px-10 py-4 rounded-full text-xs font-semibold tracking-widest uppercase text-gold hover:bg-cream hover:text-forest transition-all duration-500 text-center inline-block";

  return (
    <div className="flex flex-col w-full text-cream">
      {/* Hero Section */}
      <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden text-cream">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 hero-gradient -z-10" />

        <div className="flex flex-col items-center gap-8 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium tracking-[0.4em] uppercase text-cream/40 mb-4 block">
              Rainforest to Table
            </span>
            <h1 className="text-7xl sm:text-9xl font-semibold tracking-tighter text-cream leading-[0.8] serif">
              {t('title')}
            </h1>
            <p className="mt-6 text-[10px] sm:text-xs tracking-[0.6em] uppercase text-gold/60 font-medium">
              {t('coSubtitle')}
            </p>
          </div>

          <div className="h-[1px] w-16 bg-gold/20 my-4" />

          <p className="max-w-lg text-lg sm:text-xl font-light leading-relaxed text-cream/70 tracking-wide">
            {t('subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12 pb-24">
            <a href="#story" className={buttonClass}>
              {t('buttons.story')}
            </a>
            <a href="#coffee" className={buttonClass}>
              {t('buttons.coffee')}
            </a>
            <a href="#chocolate" className={buttonClass}>
              {t('buttons.chocolate')}
            </a>
            <a href="#contact" className={buttonClass}>
              {t('buttons.contact')}
            </a>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-cream" />
          <span className="text-[10px] tracking-[0.3em] uppercase underline-offset-8 decoration-gold/50">Scroll</span>
        </div>
      </main>

      {/* #story: Vertical Layout for Long Text */}
      <section id="story" className="min-h-screen w-full flex flex-col items-center py-24 px-6 md:px-12 border-t border-cream/5 bg-moss/5">
        <div className="max-w-4xl w-full flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="text-xs font-medium tracking-[0.4em] uppercase text-gold">{t('buttons.story')}</span>
            <h2 className="text-4xl md:text-6xl font-medium serif text-cream leading-tight">{t('story.title')}</h2>
          </div>

          {/* Image */}
          <div className="w-full relative overflow-hidden rounded-2xl border border-cream/10 bg-black/20 flex justify-center shadow-2xl">
            <Image 
              src="/images/beans.jpg" 
              alt="Our Story" 
              width={1200}
              height={800}
              className="w-full h-auto object-contain max-h-[70vh]" 
            />
          </div>

          {/* Story Content */}
          <div className="flex flex-col gap-8 text-base md:text-lg text-cream/75 leading-relaxed font-light">
            <p className="text-xl md:text-2xl serif text-cream italic border-l-2 border-gold pl-6 py-2">{t('story.p1')}</p>
            <p>{t('story.p2')}</p>
            
            <div className="mt-4 flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-medium serif text-cream">{t('story.h4')}</h3>
              <p>{t('story.p5')}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-8">
            <a href="#contact" className={buttonClass}>
              {t('buttons.contact')}
            </a>
          </div>
        </div>
      </section>

      {/* #coffee: Featured Catalog */}
      <section id="coffee" className="min-h-screen w-full flex flex-col items-center justify-center p-12 md:p-24 bg-forest border-t border-cream/5 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl w-full">
          <div className="flex-1 flex flex-col gap-8 text-left">
            <span className="text-xs font-medium tracking-[0.4em] uppercase text-gold">{t('buttons.coffee')}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium serif text-cream leading-tight">{t('coffee.subtitle')}</h2>
            <p className="text-base md:text-lg text-cream/60 leading-relaxed font-light max-w-xl">{t('coffee.description')}</p>
            <Link href="/coffee" className={`${buttonClass} w-fit mt-4`}>
              {t('coffee.cta')}
            </Link>
          </div>

          <div className="flex-1 w-full max-w-lg glass relative overflow-hidden flex items-center justify-center border border-cream/10 bg-black/20">
            <Image 
              src="/images/coffee.jpg" 
              alt="Coffee Collection" 
              width={800}
              height={600}
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>
      </section>

      {/* #chocolate: Mirrored Catalog */}
      <section id="chocolate" className="min-h-screen w-full flex flex-col items-center justify-center p-12 md:p-24 bg-[#08150a] border-t border-cream/5 overflow-hidden">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 max-w-7xl w-full">
          <div className="flex-1 flex flex-col gap-8 text-left">
            <span className="text-xs font-medium tracking-[0.4em] uppercase text-gold">{t('buttons.chocolate')}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium serif text-cream leading-tight">{t('chocolate.subtitle')}</h2>
            <p className="text-base md:text-lg text-cream/60 leading-relaxed font-light max-w-xl">{t('chocolate.description')}</p>
            <Link href="/chocolate" className={`${buttonClass} w-fit mt-4`}>
              {t('chocolate.cta')}
            </Link>
          </div>

          <div className="flex-1 w-full max-w-lg glass relative overflow-hidden flex items-center justify-center border border-cream/10 bg-black/20">
            <Image 
              src="/images/cacao.jpg" 
              alt="Chocolate Collection" 
              width={800}
              height={600}
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>
      </section>

      {/* #contact: Info Section */}
      <section id="contact" className="min-h-screen w-full flex flex-col items-center justify-center p-12 md:p-24 border-t border-cream/5 text-center">
        <div className="flex flex-col items-center gap-12 max-w-2xl">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium tracking-[0.4em] uppercase text-gold">{t('contact.title')}</span>
            <h2 className="text-4xl md:text-6xl font-medium serif text-cream leading-tight">{t('contact.subtitle')}</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            <p className="text-lg text-cream/60 leading-relaxed font-light">{t('contact.info')}</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center text-cream/80 font-mono text-sm mt-2">
              <a href={`mailto:${t('contact.email')}`} className="hover:text-gold transition-colors text-[11px] sm:text-xs tracking-wider uppercase">Email: {t('contact.email')}</a>
              <a href={`tel:${t('contact.phone').replace(/\s+/g, '')}`} className="hover:text-gold transition-colors text-[11px] sm:text-xs tracking-wider uppercase">Phone: {t('contact.phone')}</a>
            </div>
          </div>

          <div className="h-[1px] w-12 bg-gold/20" />

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-cream/40">Our Estate</span>
            <p className="text-xl md:text-2xl serif text-cream italic leading-relaxed">
              {t('contact.address1')}<br />
              {t('contact.address2')}
            </p>
          </div>

          <button className={buttonClass}>
            Book a Tour
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full p-24 border-t border-cream/5 flex flex-col items-center gap-8 opacity-40">
        <span className="serif text-xl italic tracking-tighter">Talker & Co</span>
        <span className="text-[10px] tracking-[0.4em] uppercase font-light">© 2025 Rainforest Artisans</span>
      </footer>
    </div>
  );
}
