
export default function Hero({
                                 backgroundClass,
                                 title,
                                 subtitle,
                                 buttonText,
                                 buttonLink,
                                 onButtonClick,
                                 children
                             }) {
    return (
        <section
            className={`hero ${backgroundClass || ''}`}
            role="banner"
            aria-labelledby="hero-title"
        >
            <div className="hero-content">
                <h1 id="hero-title">{title}</h1>

                {subtitle && <p>{subtitle}</p>}

                {buttonText && (
                    buttonLink ? (
                        <a
                            href={buttonLink}
                            className="btn"
                            aria-label={`${buttonText}: ${title}`}
                        >
                            {buttonText}
                        </a>
                    ) : (
                        <button
                            className="btn"
                            onClick={onButtonClick}
                            aria-label={`${buttonText}: ${title}`}
                        >
                            {buttonText}
                        </button>
                    )
                )}

                {children}
            </div>
        </section>
    );
}

