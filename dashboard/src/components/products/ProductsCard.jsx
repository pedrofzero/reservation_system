import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardDescription, CardHeader, CardTitle } from "@/shadcn/ui/card";
import { EyeIcon } from "lucide-react";

const ProductsCard = ({ product }) => {

    const navigate = useNavigate();

    return (
        <Card className="p-3 px-6 flex gap-5 items-center justify-between">
            {product.logo &&
                <div className="flex items-center gap-5">
                    <img
                        src={import.meta.env.VITE_APP_API_URL + '/storage/images/' + product.logo}
                        className="w-16 h-auto"
                    />
                    <div>
                        <p className="text-md">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.name}</p>
                    </div>
                </div>

            }

            <EyeIcon
                className="p-1 w-8 h-8 bg-slate-100 rounded-lg hover:cursor-pointer hover:bg-slate-200 hover:text-primary/80 transition"
                onClick={() => navigate('/product/' + product.id)}
            />

        </Card>
    )
}

export default ProductsCard