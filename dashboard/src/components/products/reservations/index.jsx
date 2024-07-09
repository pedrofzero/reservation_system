import ReservationsTable from "./ReservationsTable";

const ProductReservations = ({ product }) => {
    return (
        <>
            <ReservationsTable data={product?.reservations ?? []} />
        </>
    )
}

export default ProductReservations;