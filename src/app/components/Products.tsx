import "./Products.css"

interface ProductsProps {
  product: string;
  img: string;
  t: (key: string, paramKey?: string) => string
  children: React.ReactNode;
}

export default function Products({ product, img, t, children }: ProductsProps) {
  console.log({ product })
  return (
    <main className="productContainer">
      <h1 className="title">{t("navBar", product)}</h1>
      <section className="content">
        <div className="text">
          {children}
        </div>
        <img className="image" src={img} alt={`image of our ${product} service`} />
      </section>
    </main>)
}
