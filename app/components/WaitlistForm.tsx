"use client"

import { Field, Form, Formik } from "formik"
import clsx from "clsx"
import { Button } from "@headlessui/react"
import { createCustomer } from "@/app/actions"
import { CustomerSchema } from "@/app/lib/schemas"
import { useState, ReactNode } from "react"

const inputStyles = clsx(
    "block w-full rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-white",
    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
)

const CustomError = ({ children }: { children: ReactNode }) => {
    return <div className="text-xs text-red-600 text-start h-[16px] my-1">{children}</div>
}

const WaitlistForm = () => {
    const [submitError, setSubmitError] = useState("")
    const [success, setSuccess] = useState(false)

    return <Formik
        initialValues={{
            name: "",
            email: "",
        }}
        validationSchema={CustomerSchema}
        onSubmit={async (values, formikBag) => {
            const errors = await formikBag.validateForm()

            if (!errors.name && !errors.email) {
                createCustomer(values).then(() => {
                    setSuccess(true)
                }).catch(() => {
                    setSubmitError("There was a problem adding you to the waitlist.")
                })
            } else {
                setSubmitError("There was a problem with the name or email you entered. Please try again")
            }
        }}
    >
        {({ errors, touched, isValid }) => (
            <Form className="flex flex-col my-3 justify-stretch max-sm:w-[300px] sm:w-[400px]">
                <Field
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className={inputStyles}
                />
                <CustomError>
                    {errors.name && touched.name ? errors.name : null}
                </CustomError>
                <Field
                    id="email"
                    name="email"
                    placeholder="Your email"
                    type="email"
                    className={inputStyles}
                />
                <CustomError>
                    {errors.email && touched.email ? errors.email : null}
                </CustomError>
                <Button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md bg-zinc-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-zinc-700 data-[open]:bg-zinc-800 data-[focus]:outline-1 data-[focus]:outline-white text-center mt-2 flex justify-center"
                    disabled={!isValid}
                >
                    Join the waitlist!
                </Button>
                <div className="text-gray-500 max-w-[300px] my-3 mx-auto">
                    For any queries, reach out to us on social media!
                </div>
                <div className={`font-light bg-red-500/10 bg-red-700/25 rounded-lg w-100 px-3 py-1 m-1 justify-between flex ${submitError ? "flex" : "hidden"}`}>
                    <div>{submitError}</div>
                    <Button className="ms-3" onClick={() => setSubmitError("")}>𝗫</Button>
                </div>
                <div className={`font-light bg-green-500/10 bg-green-700/25 rounded-lg w-100 py-1 px-3 m-1 justify-between ${success ? "flex" : "hidden"}`}>
                    <div>You've successfully signed up for the waitlist.</div>
                    <Button className="ms-3" onClick={() => setSuccess(false)}>𝗫</Button>
                </div>
            </Form>
        )}
    </Formik>
}

export default WaitlistForm