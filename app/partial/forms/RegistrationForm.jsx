'use client'
import FormWrapper from "../FormWrapper"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from 'zod';

import {
  Form,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
  FormField
} from '@/components/ui/form';

import { CustomInput } from "../form-element/CustomInput";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "../Logo";

const formSchema = z.object({
  fullName: z.string({
    required_error: "Name is required",
  }).min(3, {
    message: "Full name must contain at least three characters."
  }).trim(),

  email: z.string({
    required_error: "Email is required."
  }).min(5, {
    message: "Email must contain at least five characters."
  }),

  password: z.string({ required_error: "Password is required." }).min(8, {
    message: "Password must contain at least 8 characters."
  }),

  confirmPassword: z.string({ required_error: "Confirm password is required." }).min(8, {
    message: "Confirm password must contain at least 8 characters as the password"
  }),
})

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error,] = useState({})

  async function myOnSubmit(params) {
    setIsLoading(true);

    console.log('Registered')


    setIsLoading(false);

  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  })
  return (
    <FormWrapper className="bg-slate-100 grid gap-0">
      <div className="flex flex-col">

        <Form {...form}>
          <form onSubmit={form.handleSubmit(myOnSubmit)} className="contact-form rounded shadow py-8 px-4 bg-myblue/90 text-white/90">
            <FormDescription className="text-white/80">Join CoRent to get matched with co-renters</FormDescription>
           
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <CustomInput
                      label="Full Name"
                      required={true}
                      type="text"
                      errors={error}
                      {...field} />
                  </FormControl>
                </FormItem>

              )}>
            </FormField>

            <FormField
              control={form.control}
              name="email"
              render={(({ field }) => (
                <FormItem>
                  <FormControl>
                    <CustomInput
                      label="email"
                      required={true}
                      type="email"
                      errors={error}
                      {...field} />
                  </FormControl>
                </FormItem>
              ))}
            >

            </FormField>

            <div className="grid md:flex gap-4 md:gap-2">
            <FormField
              control={form.control}
              name="password"
              render={(({ field }) => (
                <FormItem>
                  <FormControl>
                    <CustomInput
                      label="password"
                      required={true}
                      type="password"
                      errors={error}
                      {...field} />
                  </FormControl>
                </FormItem>
              ))}
            >

            </FormField>

            <FormField
              control={form.control}
              name="confirmPassword"
              render={(({ field }) => (
                <FormItem>
                  <FormControl>
                    <CustomInput
                      label="Confirm password"
                      required={true}
                      type="password"
                      errors={error}
                      {...field} />
                  </FormControl>
                </FormItem>
              ))}
            >

            </FormField>
            </div>

            <Button disabled={isLoading} className="bg-orange-500 hover:bg-orange-400">Join</Button>

          </form>
        </Form>
        <div className="">
          <span className=" text-sm">Have an account?</span>
          <Link href={'/login'}>
            <Button variant='link' className="text-orange-500">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </FormWrapper>
  )
}

export default RegistrationForm