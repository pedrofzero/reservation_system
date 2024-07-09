import ProductDetail from "@/components/products/ProductDetails";
import { fetchProductDetails, fetchUserProducts } from "@/store/reducers/product";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id, tab: currTab } = useParams();

    const [loading, setLoading] = useState(true);
    const { selected: product } = useSelector(state => state.product);

    const [tab, setTab] = useState(currTab);

    const handleTabChange = (newTab) => {
        setTab(newTab);
        navigate(`/product/${id}/${newTab}`, { replace: true });
    };

    useEffect(() => {
        if (!currTab) {
            setTab('reservations');
            return navigate(`/product/${id}/reservations`, { replace: true });
        }
    }, [])

    useEffect(() => {
        dispatch(fetchProductDetails(id))
            .then(res => setLoading(false))
            .catch(err => setLoading(false));
    }, []);

    return (
        loading ?
            <p>'loading...'</p>
            :
            <div className="p-6">
                <ProductDetail
                    product={product}
                    tab={tab}
                    setTab={handleTabChange}
                />
            </div>
    );
}

export default ProductDetails;