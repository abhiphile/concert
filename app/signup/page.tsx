import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import UserSignUpForm  from "@/components/user-signup-form"

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account using the sign-up form.",
}

export default function SignUpPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/signup-light.png"
          width={1280}
          height={843}
          alt="Sign Up"
          className="block dark:hidden"
          layout="responsive"
        />
        <Image
          src="/examples/signup-dark.png"
          width={1280}
          height={843}
          alt="Sign Up"
          className="hidden dark:block"
          layout="responsive"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/examples/signin"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M20 21V9l-7 7-7-7v12h14z" />
            </svg>
           Music
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <Image
                src="https://unsplash.com/photos/brown-acoustic-guitar-n5Z3DvP91wU"
                width={1280}
                height={843}
                alt="Sign Up Background"
                layout="responsive"
              />
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details below to sign up
              </p>
            </div>
            <UserSignUpForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
