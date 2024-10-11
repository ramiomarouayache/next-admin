'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
//import { FileUploader } from '@/components/file-uploader';

// const MAX_FILE_SIZE = 5000000;
// const ACCEPTED_IMAGE_TYPES = [
//   'image/jpeg',
//   'image/jpg',
//   'image/png',
//   'image/webp'
// ];

const formSchema = z.object({
  /*image: z
    .any()
    .refine((files) => files?.length == 1, 'Image is required.')
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    ),*/
  product: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'select at least one product.'
  }),
  variants: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'select at least one variant.'
  }),
  quantity: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'select at least one item.'
  }),
  status: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'select at least one status.'
  }),
  note: z.string().min(10, {
    message: 'Note must be at least 10 characters.'
  })
});

export default function OrderForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product: [],
      variants: [],
      quantity: [],
      status: [],
      note: ''
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle className="text-left text-2xl font-bold">
          Add New Order
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product</FormLabel>
                    <Select
                      onValueChange={(value) =>
                        field.onChange([...field.value, value])
                      }
                      value={field.value[field.value.length - 1]}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select product" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="#13508-Barmi-sol">#13508-Barmi-Sol</SelectItem>
                        <SelectItem value="#10901-Nuri-poli">#10901-Nuri-Poli</SelectItem>
                        <SelectItem value="#12202-Say-marmara">#12202-Say-Marmara</SelectItem>
                        <SelectItem value="#13380-Dra-Cola">#13380-Dra-Cola</SelectItem>
                        <SelectItem value="#11588-walffe-berien">
                          #11588-Walffe-Berien
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Selected product: {field.value.join(', ')}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="variants"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Variant</FormLabel>
                    <Select
                      onValueChange={(value) =>
                        field.onChange([...field.value, value])
                      }
                      value={field.value[field.value.length - 1]}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select variant" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Small">Small</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Large">Large</SelectItem>
                        <SelectItem value="Extra Large">Extra Large</SelectItem>
                        <SelectItem value="2x Extra Large">
                          2x Extra Large
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Selected variant: {field.value.join(', ')}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="variants"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Variant</FormLabel>
                    <Select
                      onValueChange={(value) =>
                        field.onChange([...field.value, value])
                      }
                      value={field.value[field.value.length - 1]}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select variant" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Small">Small</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Large">Large</SelectItem>
                        <SelectItem value="Extra Large">Extra Large</SelectItem>
                        <SelectItem value="2x Extra Large">
                          2x Extra Large
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Selected variant: {field.value.join(', ')}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <Select
                      onValueChange={(value) =>
                        field.onChange([...field.value, value])
                      }
                      value={field.value[field.value.length - 1]}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="1" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1 item</SelectItem>
                        <SelectItem value="2">2 items</SelectItem>
                        <SelectItem value="3">3 items</SelectItem>
                        <SelectItem value="4">4 items</SelectItem>
                        <SelectItem value="5">
                          5 items
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Selected quantity: {field.value.join(', ')}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter order note"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Add Order</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
