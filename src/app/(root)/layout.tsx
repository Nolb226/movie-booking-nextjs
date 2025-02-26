import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import { AuthProvider } from '@/context/app-context'
import { BookingProvider } from '@/context/booking-context'

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <AuthProvider>
            <BookingProvider>
               <Header />
               <main className="min-h-[calc(100vh_-_72px)]">{children}</main>
               <Footer />
            </BookingProvider>
         </AuthProvider>
      </>
   )
}
