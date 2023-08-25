"use client"
import React from 'react';
import { NextUIProvider } from "@nextui-org/react";
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <NextUIProvider>
        <h1>Mood Fusion</h1>
      </NextUIProvider>
    </div>
  )
}
