export default function Card({
                                 variant = 'default',
                                 title,
                                 description,
                                 image,
                                 imageAlt,
                                 imageId,
                                 items = [],
                                 icon,
                                 link,
                                 className = '',
                             }) {
    // Prepare the card content based on variant
    const renderCardContent = () => {
        switch (variant) {
            case 'contact':
                return (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Contact via ${title || 'social media'}`}
                    >
                        {icon && <div className="card-icon">{icon}</div>}
                    </a>
                );

            case 'experience':
                return (
                    <>
                        {items.length > 0 && items.map((item, index) => (
                            <article className="information" key={index}>
                                {item.period && <p>{item.period}</p>}
                                {item.title && <p>{item.title}</p>}
                                {item.location && (
                                    <p>
                                        {item.location}
                                        {item.locationUrl && (
                                            <>
                                                {" "}-{" "}
                                                <a
                                                    href={item.locationUrl}
                                                    target="_blank"
                                                    className="btn"
                                                    rel="noopener noreferrer"
                                                    aria-label={`View ${item.location}`}
                                                >
                                                    View Location
                                                </a>
                                            </>
                                        )}
                                    </p>
                                )}
                                {item.name && <p>{item.name}</p>}
                                {item.level && <p>{item.level}</p>}
                            </article>
                        ))}
                    </>
                );

            case 'default':
            default:
                return (
                    <>
                        {description && <p>{description}</p>}
                    </>
                );
        }
    };

    // Prepare link element if needed
    const CardContainer = ({ children }) => {
        if (link && variant !== 'contact') {
            return (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                    aria-label={`More information about ${title}`}
                >
                    {children}
                </a>
            );
        }

        return <>{children}</>;
    };

    return (
        <article className={`card ${className}`}>
            <CardContainer>
                {image && (
                    <img
                        src={image}
                        alt={imageAlt || title || 'Card image'}
                        id={imageId}
                        loading="lazy"
                    />
                )}

                <div className="card-header">
                    {title && <h2>{title}</h2>}
                </div>

                <div className="card-body">
                    {renderCardContent()}
                </div>
            </CardContainer>
        </article>
    );
}

