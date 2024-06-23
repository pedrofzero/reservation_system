import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { DataTable } from "@/components/ui/table";
import { DataTableColumnHeader } from "@/components/ui/table/TableColumnHeader";
import { DataTableRowActions } from "@/components/ui/table/TableRowActions";
import Title from "@/components/ui/Title";
import ProductsCard from "@/components/products/ProductsCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProducts } from "@/store/reducers/product";
import ProductsTable from "@/components/products/ProductsTable";
import { Button } from "@/shadcn/ui/button";

const Products = () => {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { list: products } = useSelector(state => state.product);
    const [showMethod, setShowMethod] = useState('card');

    useEffect(() => {
        dispatch(fetchUserProducts());
    }, []);

    return (
        <div className="space-y-4 p-8 pt-6">
            <div className="flex space-x-5">
                <Title title="Products" />
                <Button onClick={() => showMethod === 'card' ? setShowMethod('table') : setShowMethod('card')}>Toggle view</Button>
            </div>

            <div className="!mt-8">
                {products && products.length > 0 &&
                    showMethod === 'card' ?
                    <div className="grid grid-cols-2 gap-5 md:grid-cols-6">
                        {products.map((product, index) => (
                            <ProductsCard key={index} product={product} />
                        ))}
                    </div>
                    :
                    <ProductsTable data={products} />
                }
            </div>
        </div>
    );
}

export default Products;