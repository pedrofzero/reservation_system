import { Input } from "@/shadcn/ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcn/ui/form";

const TextInput = ({ name, form, label, placeholder, type = "text", description }) => {
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

const FileInput = ({ name, form, label, placeholder }) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
              type="file"
              className="mt-1"
              {...form.register(name)}
              onChange={(event) => {
                field.onChange(event.target?.files?.[0] ?? undefined);
              }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  )
}

export { FileInput };
export default TextInput;
