import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Switch } from '~/components/ui/switch';

// Add this interface at the top of the file
interface FormFieldType {
  name: string;
  type: string;
  label?: string;
  choices?: string[];
  required?: boolean;
  defaultValue?: any;
  isPositional?: boolean;
}

export function FormFieldComponent({ field, control }: {
  field: FormFieldType;  // Changed from FormField to FormFieldType
  control: any;
}) {
  let frmLabel = field.label || field.name;
  if (field.type === 'array') {
    frmLabel = frmLabel + ' (comma separated list)';
  }
  return (
    <FormField
      control={control}
      name={field.name}
      render={({ field: formField }) => (
        <FormItem>
          <FormLabel>{frmLabel}</FormLabel>
          {field.type === 'boolean' ? (
            <FormControl>
              <Switch
                checked={formField.value}
                onCheckedChange={formField.onChange}
              />
            </FormControl>
          ) : field.type === 'select' ? (
            <Select onValueChange={formField.onChange} defaultValue={formField.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {field.choices?.map((choice) => (
                  <SelectItem key={choice} value={choice}>
                    {choice}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : field.type === 'array' ? (
            <Input
              {...formField}
              onChange={(e) => formField.onChange(e.target.value.split(','))}
            />
          ) : field.type === 'string' || field.isPositional ? (
            <Input
              {...formField}
              value={formField.value || ''}
              placeholder={field.label || field.name}
            />
          ) : (
            <Input {...formField} />
          )}
          <FormDescription>
            {field.required && 'Required'}
            {field.choices && `Options: ${field.choices.join(', ')}`}
          </FormDescription>
        </FormItem>
      )}
    />
  );
} 