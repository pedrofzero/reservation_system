import React from "react";
import { useTranslation } from "react-i18next";

import { DataTable } from "@/components/ui/table";
import { DataTableColumnHeader } from "@/components/ui/table/TableColumnHeader";
import { DataTableRowActions } from "@/components/ui/table/TableRowActions";
import { Button } from "@/shadcn/ui/button";
import { CircleCheckIcon, CircleXIcon } from "lucide-react";
import Tooltip from "@/components/ui/Tooltip";

const ReservationsTable = ({ data }) => {

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
            accessorKey: "created_at",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title={t('general.createdAt')} />
            ),
            cell: ({ row }) => <div className="">{row.getValue("created_at")}</div>,
            enableSorting: false,
            enableHiding: false,
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <div className="flex gap-2">
                    <Tooltip text="Hello">
                        <CircleCheckIcon className="hover:cursor-pointer" />
                    </Tooltip>
                    <Tooltip text="Bye">
                        <CircleXIcon className="hover:cursor-pointer" />
                    </Tooltip>
                </div>
            )
            // <DataTableRowActions row={row} actions={[
            //     <Button>
            //         <CircleCheckIcon />
            //     </Button>
            //     ,
            //     <Button>
            //         <CircleXIcon />
            //     </Button>
            // ]} />,
        },
    ]

    return (
        <DataTable columns={columns} data={data} />
    )
}

export default ReservationsTable