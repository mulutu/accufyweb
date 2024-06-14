"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  firstName: z
    .string({ message: "First Name is required." })
    .min(2, { message: "Username must be at least 2 characters." })
    .max(50),
  lastName: z
    .string({ message: "Last Name is required." })
    .min(2, { message: "Username must be at least 2 characters." })
    .max(50),
  email: z
    .string({ message: "Email is required." })
    .email("Invalid email address")
    .min(2, { message: "Email is required." }),
  comment: z.string({ message: "Comment is required." }).min(2),
});

export type FormSchema = z.infer<typeof formSchema>;

const ContactUsForm = () => {
  // Define the form
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { firstName: "", lastName: "", email: "" , comment: ""},
  });

  // On Submit handler
  function onSubmit(data: FormSchema) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormDescription>Your first name is required.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormDescription>Your last name is required.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>Your email is required.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="comment">Comment</FormLabel><br/>
              <FormControl>
                <textarea placeholder="comment" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ContactUsForm;
