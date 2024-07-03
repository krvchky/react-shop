import CardProduct from "./CardProduct";

export default function CatalogList({ catalog }) {
    return (
        <div className="catalog__content" id="catalog-products">
            {catalog.length === 0 ? <h2>Товарів не знайдено</h2> : catalog.map((product, index) => <CardProduct key={index} product={product} />)}
        </div>
    );
}
