'use client'

import { Plus, RotateCcw } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be atleast 2 characters"
  })
})

const ActionButtons = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="absolute bottom-4 left-1/2 z-50 bg-indigo-100 shadow-lg text-white py-2 px-4 flex justify-center items-center gap-2 rounded-full">
      <Sheet>
        <SheetTrigger 
          className="w-50 h-50 bg-indigo-700 hover:bg-indigo-800 transition-all rounded-full p-2"
        >
          <Plus className='w-6 h-6' />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create new Goal</SheetTitle>
            <SheetDescription>
              Please provide some additional information about your goal.
            </SheetDescription>
          </SheetHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Goal name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Type your message here." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-indigo-500 hover:bg-indigo-600">Create Goal</Button>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
      <button onClick={() => alert('reset names')} className="w-50 h-50 bg-indigo-700 hover:bg-indigo-800 transition-all rounded-full p-2"><RotateCcw className='w-6 h-6' /></button>
    </div>
  )
}

export default ActionButtons
