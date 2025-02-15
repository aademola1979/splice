'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm} from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormItem,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
} from "@/components/ui/form"
import {CustomInput} from '@/app/partial/form-element/CustomInput'
import {CustomTextarea} from '@/app/partial/form-element/CustomTextarea'
import { useState } from "react";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string({
        required_error: "Name is required",
    }).min(3, {
        message: "Name must be at least 3 characters.",
    }).trim(),

    email: z.string({ required_error: "Email is required" }).email(
        {
            message: "Email not valid.",
        }
    ).min(5, {
        message: "Email must be at least 5 characters.",
    }).trim(),

    content: z.string({ required_error: "Message is required" }),

})


const MessageForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    //const [message, setMessage] = useState();
    const [error, ] = useState({})

    async function myOnSubmit(){

        setIsLoading(true)

        console.log('hello')
        setIsLoading(false)
    }

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            content: "",

        },
    })
  return (
    <div className="w-full h-full">
        <div className=""></div>
        <div className="">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(myOnSubmit)} className="contact-form">
                    <FormDescription></FormDescription>
                    <FormField
                    control={form.control}
                    name="name"
                    render={({field})=>(
                        <FormItem>
                            <FormControl>
                                <CustomInput 
                                    label = "Full Name"
                                    required = {true}
                                    type="text"
                                    errors={error}
                                    {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    >
                    </FormField>
                    <FormField
                    control={form.control}
                    name="email"
                    render={({field})=>(
                        <FormItem>
                            <FormControl>
                                <CustomInput 
                                label="Email"
                                required={true}
                                type="email"
                                errors={error}
                                {...field}/>

                            </FormControl>
                        </FormItem>
                    )}>

                    </FormField>

                    <FormField
                    control={form.control}
                    name="content"
                    render={({field})=>(
                        <FormItem>
                            <FormControl>
                                <CustomTextarea 
                                
                                    className={""} 
                                    errors={error} 
                                    label="Enter your message"
                                    required={true}
                                    {...field}                                />
                            </FormControl>
                        </FormItem>

                    )}>

                    </FormField>

                    <Button disabled={isLoading} className={`${isLoading ? "bg-orange-200" : "bg-orange-500 hover:bg-orange-400 w-max px-8"}`}>Send</Button>
                

                </form>
            </Form>
        </div>
    
    </div>
  )
}

export default MessageForm