'use client'

import { Field, Form, Formik } from "formik"
import clsx from 'clsx'
import { Button } from "@headlessui/react"
import { createCustomer } from "@/app/actions"

const inputStyles = clsx(
    'mt-3 block w-full rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-white',
    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
)

const WaitlistForm = () => {

    return <Formik
        initialValues={{
            name: '',
            email: '',
        }}
        onSubmit={async (values) => {
            createCustomer({ name: '2 Test', email: 'test@example.com' })
            await new Promise((r) => setTimeout(r, 500))
            alert(JSON.stringify(values, null, 2))
        }}
    >
        <Form
            className="flex flex-col my-3"
        >
            <Field
                id="name"
                name="name"
                placeholder="Your name"
                className={inputStyles}
            />
            <Field
                id="email"
                name="email"
                placeholder="Your email"
                type="email"
                className={inputStyles}
            />
            <Button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-zinc-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-zinc-700 data-[open]:bg-zinc-800 data-[focus]:outline-1 data-[focus]:outline-white text-center mt-5">
                Join the waitlist!
            </Button>
            <div className="text-gray-500 max-w-[300px] mt-2">For any queries, reach out to use on social media!</div>
        </Form>
    </Formik>
}

export default WaitlistForm