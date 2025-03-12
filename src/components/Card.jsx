export default function Card ({title, description, image, items = [], imageId, icon, link}) {
  return(
    <>
     <article className="card">
     {image && <img src={image} alt={title} id={imageId} />}
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
      {icon && link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="card-icon">
                {icon} 
              </div>
            </a>
          )}
      {description && <p>{description}</p>}
        {items.length > 0 && items.map((item, index) => (
          <article className="information" key={index}>
            <p>{item.period}</p>
            <p>{item.title}</p>
            <p>{item.location}{item.locationUrl && (
                <>  {" "}
                    -{" "}
                     <a href={item.locationUrl} target="_blank" className="btn" rel="noopener noreferrer">View Location</a></>
              )}</p>
              <p>{item.name}</p>
              <p>{item.level}</p>
          </article>
        ))}
      </div>

    </article>
    </>
  );
}