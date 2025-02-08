import Image from "next/image"
import WaitlistForm from "./components/WaitlistForm"
import UpdateList from "./components/UpdatesList"

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >
      <main className="flex flex-col gap-2 row-start-2 items-center text-center">
        <div className="bg-zinc-700/30 rounded-xl px-6 py-1 text-orange-500">Coming soon!</div>
        <Image
          priority
          src="/language.svg"
          alt="Lingua Mate logo"
          width={70}
          height={70}
          className="rounded-full p-4 bg-orange-500"
        />
        <h1 className="text-orange-500 text-4xl  mb-4">Lingua Mate</h1>
        <h1 className="text-3xl mb-4 max-w-[600px]">Your personal AI tutor is ready 24/7 to help you practice, perfect, and progress.</h1>
        <p className="text-gray-500 max-w-[400px]">Join the waitlist to get early access to the product and recieve updates on the progress!</p>
        <WaitlistForm />
        <UpdateList />
      </main>
    </div>
  )
}
