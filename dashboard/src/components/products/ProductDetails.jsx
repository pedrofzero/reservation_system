import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shadcn/ui/tabs";
import ProductReservations from "./reservations";

const ProductDetail = ({ product, tab, setTab }) => {
  return (
    <>
      <Tabs value={tab} onValueChange={e => setTab(e)} default defaultValue="account">
        <TabsList className="m-auto grid w-1/2 grid-cols-2">
          <TabsTrigger value="reservations" >Reservations</TabsTrigger>
        </TabsList>
        <TabsContent value="reservations">
          <ProductReservations product={product} />
        </TabsContent>
      </Tabs>
    </>
  )
}

export default ProductDetail