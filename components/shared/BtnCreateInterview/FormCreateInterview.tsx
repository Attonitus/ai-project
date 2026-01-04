"use client"
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { formSchema } from "./FormCreateInterview.form"
import { difficulties, roles } from "./FormCreateInterview.data"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Interview } from "@/lib/generated/prisma/client"



export default function FormCreateInterview() {

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            rol: "",
            level: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);

        try {
            const response = await fetch("/api/create-interview", {
                method: "POST",
                body: JSON.stringify(values)
            });
            const createdInterview: Interview = await response.json();
            
            router.push(`/interview/${createdInterview.id}`);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-black">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name of the interview</FormLabel>
                            <FormControl>
                                <Input className="text-black" placeholder="Interview name" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="rol"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Select the role</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                value={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger className="w-full">
                                        <SelectValue className="text-black" placeholder="Select a role" />
                                    </SelectTrigger>
                                </FormControl>

                                <SelectContent>
                                    {
                                        roles.map((role) => (
                                            <SelectItem key={role.label} value={role.value}>
                                                <div className="flex items-center gap-2">
                                                    <span>{role.icon}</span>
                                                    <span>{role.label}</span>
                                                </div>
                                            </SelectItem>
                                        ))
                                    }

                                </SelectContent>

                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Select the difficulty</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                value={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a diffult" />
                                    </SelectTrigger>
                                </FormControl>

                                <SelectContent>
                                    {
                                        difficulties.map((difficulty) => (
                                            <SelectItem key={difficulty.label} value={difficulty.value}>
                                                <div className="flex items-center gap-2">
                                                    <span>{difficulty.label}</span>
                                                </div>
                                            </SelectItem>
                                        ))
                                    }

                                </SelectContent>

                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button disabled={isLoading} type="submit" className="w-full bg-indigo-800 font-bold py-3 px-6 rounded-lg hover:text-black">
                    Start interview
                </Button>
            </form>
        </Form>
    )
}
