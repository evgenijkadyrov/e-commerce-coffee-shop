// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import {Provider} from "react-redux";
import {persistor, store} from "@/app/store/store";
import { PersistGate } from 'redux-persist/integration/react'
import React from "react";

export function Providers({
                              children
                          }: {
    children: React.ReactNode
}) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <CacheProvider>
                <ChakraProvider>
                    {children}
                </ChakraProvider>
            </CacheProvider>
            </PersistGate>
        </Provider>

    )
}