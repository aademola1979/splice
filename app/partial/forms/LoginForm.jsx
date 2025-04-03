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

  email: z.string({
    required_error: "Email is required."
  }).min(5, {
    message: "Email must contain at least five characters."
  }),

  password: z.string({ required_error: "Password is required." }).min(8, {
    message: "Password must contain at least 8 characters."
  }),

 
})

const LoginForm = () => {
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
          <form onSubmit={form.handleSubmit(myOnSubmit)} className="contact-form rounded shadow px-4 py-8 bg-myblue/90">
            <FormDescription className="text-white/80">Log in to Splice to get matched with co-renters</FormDescription>

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
            <Button disabled={isLoading} className="bg-orange-500 hover:bg-orange-400"> Login</Button>

          </form>
        </Form>
        <div className="">
          <span className="text-sm">New to CoRent?</span>
          <Link href={'/join'}>
            <Button variant='link' className="text-orange-500">
              Join
            </Button>
          </Link>
        </div>
      </div>
    </FormWrapper>
  )
}

export default LoginForm