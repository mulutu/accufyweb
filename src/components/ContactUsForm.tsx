"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import Link from "next/link";
import { addSubscriber } from "@/actions/add.subscriber";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const contactFormSchema = z.object({
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
  comment: z.string().min(2).max(500),
});

export type myContactFormFields = z.infer<typeof contactFormSchema>;

// This can come from your database or API. Default values for the form fields.
const defaultValues: Partial<myContactFormFields> = {
  firstName: "",
  lastName: "",
  email: "",
  comment: "",
};

const ContactUsForm = () => {
  // Define the form
  const form = useForm<myContactFormFields>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  // testing use state
  const [loading, setLoading] = useState(false);

  // On Submit handler
  const onSubmit = async (data: myContactFormFields) => {
    toast({
      title: "Hold on!",
    });

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const { data: responseData } = await response.json();

      // Add toast here
      toast({
        variant: "default",
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });

      // set loading to false
      setLoading(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Message not sent!",
        description: "We'll fix the problem ASAP.",
      });
      // Handle error as needed
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => onSubmit(data))}>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              {/* Give a lable for the form field */}
              <FormLabel>First Name</FormLabel>

              {/* Input field */}
              <FormControl>
                <Input
                  type="text"
                  placeholder="Type your first name here"
                  autoComplete="true"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Type well remembered name, because we dont save your data{" "}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              {/* Give a lable for the form field */}
              <FormLabel>Last Name</FormLabel>

              {/* Input field */}
              <FormControl>
                <Input
                  type="text"
                  placeholder="Type your last name here"
                  autoComplete="true"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Type well remembered name, because we dont save your data{" "}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Type your email here"
                  autoComplete="true"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Use short and sweet email, we dont save your data
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here"
                  className="resize-none"
                  {...field}
                  autoComplete="true"
                />
              </FormControl>
              <FormDescription>
                Clearly describe your problem, cuz we dont have much time
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit button */}
        <div className="flex justify-end">
          <Button type="submit" disabled={loading}>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactUsForm;
