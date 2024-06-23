import { Card } from "@/shadcn/ui/card";
import React from "react";
import { DataTable } from "../ui/table";
import { DataTableColumnHeader } from "../ui/table/TableColumnHeader";
import { DataTableRowActions } from "../ui/table/TableRowActions";
import { useTranslation } from "react-i18next";

const ProductsTable = ({ data }) => {

    const { t } = useTranslation();

    const columns = [
        {
            accessorKey: "id",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="ID" />
            ),
            cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
            enableSorting: true,
            enableHiding: false,
        },
        {
            accessorKey: "createdAt",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title={t('general.createdAt')} />
            ),
            cell: ({ row }) => <div className="">{row.getValue("createdAt")}</div>,
            enableSorting: false,
            enableHiding: false,
        },
        {
            id: "actions",
            cell: ({ row }) => <DataTableRowActions row={row} actions={[
                <p>12345</p>,
            ]} />,
        },
    ]

    return (
        <DataTable columns={columns} data={data} />

    )
}

export default ProductsTable