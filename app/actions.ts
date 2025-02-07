"use server"

import { bcms } from "@/app/lib/bcms"
import { NewsUpdatesEntry } from "@/bcms/types/ts"

const fetchUpdates = async () => {
    return (await bcms.entry.getAll("news-update")) as NewsUpdatesEntry[]
}

const createCustomer = (customer: { email: string, name: string }) => {
    return bcms.entry.create("customer", {
        meta: [{ lng: 'en', data: { ...customer, title: customer.name, slug: '' } }],
        statuses: [],
        content: []
    })
}

export { fetchUpdates, createCustomer }