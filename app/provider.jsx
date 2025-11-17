"use client"
import React from 'react'
import { ConvexClientProvider } from "./ConvexClientProvider";
function provider(children) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

  return (
    <div>
      <ConvexProvider client={convex}>{children}</ConvexProvider>
    </div>
  )
}

export default provider
