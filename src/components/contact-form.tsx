'use client' // This form requires client-side interactivity

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea" // Import Textarea

// Define Zod schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Adınız en az 2 karakter olmalıdır." }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi girin." }),
  subject: z.string().min(5, { message: "Konu en az 5 karakter olmalıdır." }),
  message: z.string().min(10, { message: "Mesajınız en az 10 karakter olmalıdır." }),
})

export function ContactForm() {
  // Define form using react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // Define submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Implement actual form submission logic (e.g., send to API)
    console.log("Form Submitted:", values)
    // Optionally reset form after submission
    // form.reset();
    alert("Mesajınız başarıyla gönderildi!") // Simple feedback
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adınız Soyadınız</FormLabel>
              <FormControl>
                <Input placeholder="Adınız ve Soyadınız" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-posta Adresiniz</FormLabel>
              <FormControl>
                <Input type="email" placeholder="ornek@eposta.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Subject Field */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Konu</FormLabel>
              <FormControl>
                <Input placeholder="Mesajınızın konusu" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mesajınız</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Bize iletmek istediklerinizi buraya yazın..."
                  className="resize-none" // Prevent resizing
                  rows={5} // Set initial rows
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full">Mesajı Gönder</Button>
      </form>
    </Form>
  )
} 