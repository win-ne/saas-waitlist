import Image from "next/image"
import WaitlistForm from "@/app/components/WaitlistForm"
import { fetchNews } from "@/app/actions"

export default async function Home() {
  const news = await fetchNews()

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
        <h2 className="text-3xl mb-4 max-w-[600px]">Your personal AI tutor is ready 24/7 to help you practice, perfect, and progress.</h2>
        <h6 className="text-gray-500 max-w-[400px]">Join the waitlist to get early access to the product and recieve updates on the progress!</h6>
        <WaitlistForm />
        <div className="flex flex-col max-w-[600px] items-center gap-4">
          <h2 className="text-3xl mt-4 max-w-[600px]">Updates</h2>
          <h6 className="text-gray-500 max-w-[400px]">Join the waitlist to get early access to the product and receive updates on the progress!</h6>
          {news.map((item, index) => {
            return <div key={`update-${index}`} className="bg-white/10 border border-white/15 p-4 rounded-2xl mb-2 text-start">
              <span className="flex w-100 justify-between">
                <p className="text-orange-500">{item.meta.en?.title}</p>
                <p className="text-orange-500 text-xs">{(new Date(item.updatedAt)).toLocaleDateString()}</p>
              </span>
              <span className="text-gray-300">
                {item.meta.en?.body.nodes.map((node, index) => (
                  <div key={index} dangerouslySetInnerHTML={{ __html: node.value }} />
                ))}
              </span>
            </div>
          })}
        </div>
      </main>
    </div>
  )
}
