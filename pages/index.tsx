import type {
  GetStaticProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next"
import { Header } from "../components/Header"
import { ProductList } from "../components/ProductList"
import { Product, products } from "../lib/products"

export const getStaticProps: GetStaticProps<{
  products: Product[]
}> = async () => ({
  props: {
    products: products.slice(0, 6),
  },
})

const Home: NextPage<InferGetServerSidePropsType<typeof getStaticProps>> = ({
  products,
}) => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <ProductList products={products} />
        </section>
      </main>
    </div>
  )
}

export default Home
