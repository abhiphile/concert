'use client'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "./ui/button"
import { RxAvatar } from "react-icons/rx";

import OrbitingCircles from "@/components/magicui/orbiting-circles";


export function JoinRoom() {
    return (
        <>
            <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background shadow">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                    Join The Stream.
                </span>

                <OrbitingCircles
                    className="size-[30px] border-none bg-transparent"
                    duration={20}
                    delay={20}
                    radius={50}
                >
                    <RxAvatar className="ml-3 text-3xl bg-dark" />
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[30px] border-none bg-transparent"
                    duration={20}
                    delay={20}
                    radius={50}
                >
                    <RxAvatar className="ml-3 text-3xl bg-dark" />
                </OrbitingCircles>

                {/* Outer Circles (reverse) */}
                <OrbitingCircles
                    className="size-[50px] border-none bg-transparent"
                    radius={80}
                    duration={60}
                    reverse
                >
                    <RxAvatar className="ml-3 text-3xl bg-dark" />
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[50px] border-none bg-transparent"
                    radius={80}
                    duration={20}
                    delay={20}
                    reverse
                >
                    <RxAvatar className="ml-3 text-3xl bg-dark" />
                </OrbitingCircles>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col items-center space-y-4 mt-8">
                <h1 className="text-lg font-semibold">Enter Room ID</h1>
                <InputOTP maxLength={8}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                        <InputOTPSlot index={6} />
                        <InputOTPSlot index={7} />
                    </InputOTPGroup>
                </InputOTP>
                <Button type="submit">Join Room</Button>
            </form>
        </>
    )
}