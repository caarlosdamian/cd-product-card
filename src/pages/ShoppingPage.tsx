import ProductCard, {
  ProductButtons,
  ProductTitle,
  ProductImage,
} from '../components/index';

const product = products[0];
export const ShoppingPage = () => {
  console.log(product);
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard
          product={product}
          key={product.id}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({}) => (
            <>
              <ProductImage img={product.img} />
              <ProductTitle title={product.title} />
              <ProductButtons />
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
