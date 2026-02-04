interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section 
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: backgroundImage 
          ? `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.9)), url(${backgroundImage}) center/cover no-repeat`
          : 'linear-gradient(180deg, hsl(222 47% 11%) 0%, hsl(222 35% 18%) 100%)'
      }}
    >
      <div className="container-main text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-amber animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
