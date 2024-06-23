import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AxiosInterceptor } from '@/helpers/api'

import Login from '@/pages/login'
import Register from '@/pages/register'
import AuthLayout from '@/components/layout/AuthLayout'
import DashboardLayout from '@/components/layout/DashboardLayout'

const Router = () => {
    return (
        <BrowserRouter>
            <AxiosInterceptor>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/" element={<AuthLayout />}>
                        <Route path="/" element={<DashboardLayout />}>
                            <Route path="/123" element={<p>123</p>} />
                        </Route>
                    </Route>
                </Routes>
            </AxiosInterceptor>
        </BrowserRouter>
    )
}

export default Router;