"use client";

import { trpc } from '@/trpc/client';
import React from 'react'

export const PageClient = () => {

    const [data] = trpc.hello.useSuspenseQuery({
        text: "Alisson",
    });

    return (
        <div>
            PageClient says: {data.greeting}
        </div>
    )
};

export default PageClient;
