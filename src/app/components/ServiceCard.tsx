import "./ServiceCard.css";

//!  Delete the mock 
export function ServiceCard({ title, service }: { title: string, service: string }) {
  return (

    <a href={`/products/services/${service}`} className="ServiceCard__wrapper">
      <div
        style={{ backgroundImage: `url("/assets/${service}mock.png");` }}
        className="ServiceCard"
      >
      </div>
      <h2 className="title">{title}</h2>
    </a>
  )
}
