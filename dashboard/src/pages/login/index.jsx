import { Button } from "@/shadcn/ui/button"
import { Input } from "@/shadcn/ui/input"
import { Label } from "@/shadcn/ui/label"
import { Link, useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from "@/shadcn/ui/form"
import TextInput from "@/components/ui/TextInput"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { handleLogin } from "@/store/reducers/auth"
import { toast } from "sonner"


const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginSchema = z.object({
        email: z.string().email(),
        password: z.string().min(8, { message: "Error" })
    })

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    
    const onSubmit = values => {
        dispatch(handleLogin(values))
        .then(res => {
            if (res.payload.Result) {
                toast.success('Sucess, redirecting to dashboard..');
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            }
        });
    }

    return (
        <div className="min-h-screen h-full w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your email below to login to your account
                        </p>
                    </div>
                    <Form {...form}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <TextInput
                                    form={form}
                                    name="email"
                                    label="email"
                                    placeholder="email"
                                />
                            </div>
                            <div className="grid gap-2">
                                <TextInput
                                    form={form}
                                    type="password"
                                    name="password"
                                    label="password"
                                    placeholder="password"
                                />
                            </div>
                            <Button type="submit" className="w-full" onClick={form.handleSubmit(onSubmit)}>
                                Login
                            </Button>
                            {/* <Button variant="outline" className="w-full">
                                Login with Google
                            </Button> */}
                        </div>
                    </Form>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link to="#" className="underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block">
                <img
                    src="/images/placeholder.svg"
                    alt="Image"
                    // width="1920"
                    // height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}

export default Login;