import "./Products.css"

interface ProductsProps {
  product: string;
  img: string;
  children: React.ReactNode;
}

export default function Products({ product, img, children }: ProductsProps) {
  return (
    <main className="productContainer">
      <h1 className="title">{product}</h1>
      <section className="content">
        <div className="text">
          {children}
        </div>
        <img className="image" src={img} alt={`image of our ${product} service`} />
      </section>
    </main>)
}
