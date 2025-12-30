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
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { formSchema } from "./FormCreateInterview.form"
import { difficulties, roles } from "./FormCreateInterview.data"



export default function FormCreateInterview() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            rol: "",
            level: ""
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
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
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="rol"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Select the difficulty</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
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
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full bg-indigo-800 font-bold py-3 px-6 rounded-lg hover:text-black">
                    Start interview
                </Button>
            </form>
        </Form>
    )
}
