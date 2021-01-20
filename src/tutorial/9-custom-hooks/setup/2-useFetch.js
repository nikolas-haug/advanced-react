import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const getProducts = useCallbank(async () => {
        const response = await fetch(url)
        const products = await response.json()
        setProducts(products)
        setLoading(false)
    }, [url]);

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, getProducts]);

    return {
        loading,
        products
    }
};
