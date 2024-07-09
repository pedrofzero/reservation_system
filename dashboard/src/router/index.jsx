import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AxiosInterceptor } from '@/helpers/api'

import AuthLayout from '@/components/layout/AuthLayout'
import DashboardLayout from '@/components/layout/DashboardLayout'

import Login from '@/pages/login'
import Register from '@/pages/register'

import Home from '@/pages/home'
import Products from '@/pages/products'
import ProductDetails from '@/pages/products/details'

import Profile from '@/pages/profile'
import Settings from '@/pages/settings'

const Router = () => {
    return (
        <BrowserRouter>
            <AxiosInterceptor>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/" element={<AuthLayout />}>
                        <Route path="/" element={<DashboardLayout />}>
                            <Route index element={<Home />} />
                            
                            <Route path="/products" element={<Products />} />
                            <Route path="/product/:id/" element={<ProductDetails />} />
                            <Route path="/product/:id/:tab" element={<ProductDetails />} />

                            <Route path="/profile" element={<Profile />} />
                            <Route path="/settings" element={<Settings />} />
                        </Route>
                    </Route>
                </Routes>
            </AxiosInterceptor>
        </BrowserRouter>
    )
}

export default Router;