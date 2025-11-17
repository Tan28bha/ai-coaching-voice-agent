"use client"
import React from 'react'
import { ConvexClientProvider } from "./ConvexClientProvider";
import AuthProvider from './AuthProvider';
function provider(children) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

  return (
    <div>
      <ConvexProvider client={convex}><AuthProvider>{children}</AuthProvider></ConvexProvider>
    </div>
  )
}

export default provider
