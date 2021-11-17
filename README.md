# CD-Product-Card

Paquete de pruebas de despligue en NPM

### Carlos Damian

## Ejemplo

```
import {} from 'cd-product-card'
```

```
      <ProductCard
        product={product}
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
    </>
```
