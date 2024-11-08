export default function Layout({
   children,
   comingSoon,
   showingNow,
}: {
   children: React.ReactNode
   comingSoon: React.ReactNode
   showingNow: React.ReactNode
}) {
   return (
      <section className="py-15 gap-15 mx-auto flex max-w-[1200px] flex-col">
         {children}
         {showingNow}
         {comingSoon}
      </section>
   )
}
