import { Card, CardDescription, CardHeader, CardTitle } from "@/shadcn/ui/card";
import React from "react";

const ProductsCard = ({ product }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <div className="flex justify-between">
                        {product.name}
                        {product.logo && <img src={product.logo} />}
                    </div>
                </CardTitle>
                <CardDescription className="line-clamp-3">{product.description}</CardDescription>
            </CardHeader>
            {/* {JSON.stringify(product)}
            123456 */}
        </Card>
    )
}

export default ProductsCard