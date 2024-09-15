"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

type Attribute = {
  name: string;
  value: string;
};

type FormData = {
  name: string;
  attributes: Attribute[];
};

export default function NewTargetForm() {
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      attributes: [{ name: "", value: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "attributes",
  });

  const onSubmit = (data: FormData) => {
    console.log({ data });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8r4">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>The full or partial name for the target</FormLabel>
              <FormControl>
                <Input placeholder="Michael Joseph Jackson" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="my-4" />
        {fields.map((field, index) => (
          <div
            key={`attributes.${index}`}
            className="flex items-center space-x-4 mb-4"
          >
            <div className="flex-grow">
              <FormField
                name={`attributes.${index}.name`}
                control={form.control}
                render={({ field: nameField }) => (
                  <FormItem>
                    <FormLabel className="sr-only">
                      Attribute {index + 1} Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...nameField}
                        id={`attribute-name-${index}`}
                        placeholder={`Attribute ${index + 1} Name`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-grow">
              <FormField
                name={`attributes.${index}.value`}
                control={form.control}
                render={({ field: valueField }) => (
                  <FormItem>
                    <FormLabel className="sr-only">
                      Attribute {index + 1} Value
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...valueField}
                        id={`attribute-value-${index}`}
                        placeholder={`Attribute ${index + 1} Value`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => remove(index)}
              className="flex-shrink-0"
            >
              <span className="sr-only">Remove</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </Button>
          </div>
        ))}
        <div className="flex gap-3 justify-end">
          <Button type="button" onClick={() => append({ name: "", value: "" })}>
            Add Attribute
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
