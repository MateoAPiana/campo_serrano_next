import "./ServiceCard.css";

//!  Delete the mock 
export function ServiceCard({ title }: { title: string }) {
  return (

    <a href={`/products/services/${title}`} className="ServiceCard__wrapper">
      <div
        style={{ backgroundImage: `url("/assets/${title}mock.png");` }}
        className="ServiceCard"
      >
      </div>
      <h2 className="title">{title}</h2>
    </a>
  )
}
