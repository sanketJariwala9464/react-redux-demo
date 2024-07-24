import { useDispatch, useSelector } from 'react-redux';
import { setToken, setIsAuthenticated, setUser } from '../slice/user';
import { fetchProducts } from '../thunks/product'
import { useEffect } from 'react';

const Home = () => {
    const dispatch = useDispatch();

    const store = useSelector((state) => state.product);

    const handleLogin = () => {
        const user = { id: 1, name: 'John Doe' };
        const token = 'someRandomToken';
        dispatch(setUser(user));
        dispatch(setToken(token));
        dispatch(setIsAuthenticated(true));
    };

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            <button onClick={handleLogin}>test</button>
            <div>
                {
                    store.products.map((product, index) => (
                        <div key={index}>
                            <span>{product.value} =</span>
                            <span>{product.label}</span>
                        </div>
                    ))
                }
            </div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    );
};

export default Home;
