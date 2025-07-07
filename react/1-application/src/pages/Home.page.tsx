import Header from "../components/header/Header.component";
import { useProducts } from "../hooks/useProducts.hook";
const Home = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header
        title="home"
        subtitle="this is the home page"
        background="/public/assets/background"
      />
      <main>
        <div>
          <div>
            <h3>All products</h3>
          </div>
          {products.map((product) => {
            return (
              <div className="box product">
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p>{product.price} $</p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
