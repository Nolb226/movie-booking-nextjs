'use client'
import { useQRCode } from 'next-qrcode'

interface QRCodeProps {
   text: string
}

export default function QRCode({ text, ...props }: QRCodeProps) {
   const { Canvas } = useQRCode()
   return (
      <Canvas
         text={text}
         options={{
            width: 150,
            scale: 4,
            margin: 2,
         }}
         logo={{
            src: '/images/logo-no-text.png',
         }}
         {...props}
      />
   )
}
