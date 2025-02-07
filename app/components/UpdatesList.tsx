"use client"

import { useEffect, useState } from "react"
import { fetchUpdates } from "@/app/actions"
import { NewsEntry } from "@/bcms/types/ts"

const UpdateList = () => {
    const [updates, setUpdates] = useState([] as NewsEntry[])

    useEffect(() => {
        fetchUpdates().then(upts => {
            setUpdates(upts)
            console.log(upts)
        })
    }, [])

    return <div className="flex flex-col max-w-[600px] items-center gap-4">
        <h1 className="text-3xl mt-4 max-w-[600px]">Updates</h1>
        <p className="text-gray-500 max-w-[400px]">Join the waitlist to get early access of the product and recieve updates on the progress!</p>
        {/* {[].map((item, index) => {
            return <div key={`update-${index}`} className="bg-white/10 border border-white/15 p-4 rounded-2xl mb-2 text-start">
                <span className="flex w-100 justify-between">
                    <p className="text-orange-500">Title</p>
                    <p className="text-orange-500">Date</p>
                </span>
                <span className="text-gray-300">{item}</span>
            </div>
        })} */}
    </div>
}

export default UpdateList