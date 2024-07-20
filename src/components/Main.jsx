/**
 * v0 by Vercel.
 * @see https://v0.dev/t/T0cH2Kpz0pM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="bg-background text-foreground">
           {/*===========Navbar=========== */}
      <header className="bg-muted py-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-xl font-bold">Acme Inc</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>
         {/*===========Hero=========== */}
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-foreground py-20 md:py-32">
          <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-6">
            <div className="max-w-3xl text-center">
              <h1 className="text-4xl font-bold text-primary-foreground md:text-6xl">
                Earn Rewards by Referring Your Friends
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/90 md:text-xl">
                Invite your friends and earn exciting rewards when they sign up.
              </p>
            </div>
               {/*===========Pop up section=========== */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="px-6 py-3 text-lg">Refer Now</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Refer Your Friends</DialogTitle>
                  <DialogDescription>Fill out the form below to refer your friends and earn rewards.</DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="referrerName">Your Name</Label>
                    <Input id="referrerName" placeholder="Enter your name" required />
                  </div>
                  <div>
                    <Label htmlFor="referrerEmail">Your Email</Label>
                    <Input id="referrerEmail" type="email" placeholder="Enter your email" required />
                  </div>
                  <div>
                    <Label htmlFor="refereeName">Friend's Name</Label>
                    <Input id="refereeName" placeholder="Enter your friend's name" required />
                  </div>
                  <div>
                    <Label htmlFor="refereeEmail">Friend's Email</Label>
                    <Input id="refereeEmail" type="email" placeholder="Enter your friend's email" required />
                  </div>
                  <DialogFooter>
                    <Button type="submit">Refer Now</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </section>
           {/*===========mid section=========== */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary p-3 text-primary-foreground">
                    <LinkIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Refer Your Friends</h3>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Share your unique referral link with your friends and family to earn rewards.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary p-3 text-primary-foreground">
                    <AwardIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Earn Rewards</h3>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Earn exciting rewards when your friends sign up using your referral link.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary p-3 text-primary-foreground">
                    <BadgeIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Track Your Progress</h3>
                </div>
                <p className="mt-4 text-muted-foreground">Monitor your referrals and earnings in your dashboard.</p>
              </div>
            </div>
          </div>
        </section>
           {/*===========above footer Section=========== */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">Refer Your Friends, Earn Rewards</h2>
                <p className="mt-4 text-muted-foreground">
                  Our Refer & Earn program is a great way to share our platform with your friends and earn exciting
                  rewards in the process. Invite your friends, and you'll both receive special offers and bonuses when
                  they sign up.
                </p>
                <Button className="mt-6">Refer Now</Button>
              </div>
              <div className="flex items-center justify-center">
                <img src="/placeholder.svg" width={400} height={400} alt="Refer & Earn" className="max-w-full" />
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*===========Footer=========== */}
      <footer className="bg-muted py-6 text-muted-foreground">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm">&copy; 2024 Acme Inc. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function AwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  )
}


function BadgeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  )
}


function LinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}