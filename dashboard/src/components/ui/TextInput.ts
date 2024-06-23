import { Input } from "@/shadcn/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcn/ui/form";
import { Controller, FieldValues, FieldPath, useFormContext } from "react-hook-form";

interface TextInputProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  form: any; // You might want to replace 'any' with a more specific type if you have one
  label: string;
  placeholder: string;
  type?: string; // Making type optional with '?'
  description?: string; // Making description optional with '?'
}

const TextInput = <TFieldValues extends FieldValues>({
  name,
  form,
  label,
  placeholder,
  type = "text",
  description,
}: TextInputProps<TFieldValues>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextInput;
