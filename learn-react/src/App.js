import ProductAdditional from 'components/Products/components/ProductAdditional';
import ProductDescription from 'components/Products/components/ProductDescription';
import ProductReviews from 'components/Products/components/ProductReviews';
import CartFeature from 'features/Cart';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import ProductsFeature from './components/Products';
import DetailProductPage from './components/Products/pages/DetailPage';
import AlbumFeatures from './features/Album';
import TodoFeatures from './features/Todo';
import DetailPage from './features/Todo/pages/DetailPage';
import ListPage from './features/Todo/pages/ListPage';
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/albums" element={<AlbumFeatures />} />
        <Route path="/todos" element={<TodoFeatures />}>
          <Route path="todo-list" element={<ListPage />} />
          <Route path=":todoId" element={<DetailPage />} />
        </Route>
        <Route path="/products" element={<ProductsFeature />} />
        <Route path="/products/:productId" element={<DetailProductPage />}>
          <Route path="/products/:productId" element={<ProductDescription />} />
          <Route
            path="/products/:productId/reviews"
            element={<ProductReviews />}
          />
          <Route
            path="/products/:productId/additional"
            element={<ProductAdditional />}
          />
        </Route>
        <Route path="/cart" element={<CartFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <CounterFeature />   */}
    </div>
  );
}

export default App;
