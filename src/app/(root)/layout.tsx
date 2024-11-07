import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="min-h-[calc(100vh_-_72px)]">{children}</main>
            <Footer />
        </>
    )
}
