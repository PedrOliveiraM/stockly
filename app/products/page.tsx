import { db } from '../_lib/prisma'

const ProductPage = async () => {
  const products = await db.product.findMany({})
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
        </div>
      ))}
    </>
  )
}

export default ProductPage
