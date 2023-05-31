"use client"
import { useSession, signIn } from "next-auth/react"

export function CreatePostWizzard() {
    const { data: session, status } = useSession();

    if (status === "unauthenticated") {
        return (
            <div className='flex h-32 max-w-lg mx-auto rounded-lg p-7 items-center shadow-md'>
                <button onClick={() => signIn('github')}>Entrar com o GitHub</button>
            </div>
        )
    }

    return (
        <div className='flex h-32 max-w-lg mx-auto rounded-lg p-7 items-center shadow-md'>
            <img src={session?.user?.image ?? ''} alt="" className='rounded-full h-16 w-16 ' />
            <input type="text" className="w-full mx-2" placeholder="Escreva Algo" />
            <button className="ml-auto">Postar</button>
        </div>
    )
}