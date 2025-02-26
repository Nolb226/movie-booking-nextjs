import SignupForm from '@/components/pages/auth/signup-form'
import Signup from '@/components/pages/auth/signup-form'
import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/logo'
import Link from 'next/link'

export default function Page() {
   return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-radial from-black to-primary-700">
         <div className="flex w-1/3 flex-col gap-2">
            <Logo />
            <SignupForm />
            <Button asChild variant={'secondary'}>
               <Link href={'/login'}>Đăng nhập</Link>
            </Button>
         </div>
      </div>
   )
}
