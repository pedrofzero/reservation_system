import React, { useState } from "react";

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from "@/shadcn/ui/form"

import Modal from "@/components/ui/Modal";
import TextInput, { FileInput } from "@/components/ui/TextInput";
import { Button } from "@/shadcn/ui/button";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { createProduct } from "@/store/reducers/product";

const CreateProductModal = () => {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);

    const createProductSchema = z.object({
        name: z.string(),
        logo: z.any()
    })

    const form = useForm({
        resolver: zodResolver(createProductSchema),
        defaultValues: {
            name: "",
            logo: undefined
        }
    })

    const onSubmit = values => {
        dispatch(createProduct({ ...values, logo: values.logo[0] }))
        .then(res => {
            if (res.payload.Result) {
                setOpen(false);
                form.reset();
            }
        })
    }

    console.log(form.formState.errors);

    return (
        <Modal
            open={open}
            setOpen={setOpen}
            title="Create new product"
            description="This is your service/company in which you will have reservations"
            trigger={<Button>+</Button>}>
            <Form {...form}>
                <TextInput
                    form={form}
                    name="name"
                    label="Name"
                    placeholder="Name"
                />
                <FileInput
                    form={form}
                    name="logo"
                    label="Logo"
                    placeholder="Logo"
                />
                <Button onClick={form.handleSubmit(onSubmit)}>
                    {t('general.submit')}
                </Button>
            </Form>
        </Modal>
    )
}

export default CreateProductModal;