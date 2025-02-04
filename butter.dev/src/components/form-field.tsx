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
  className?: string;
  description?: string;
}

export function FormFieldComponent({ field, control, className, description }: {
  field: FormFieldType;  // Changed from FormField to FormFieldType
  control: any;
  className?: string;
  description?: string;
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
        <FormItem className={className}>
          <FormLabel className='px-2'>{frmLabel}</FormLabel>
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
          <FormDescription className='px-2'>
            {field.required && 'Required, '}
            {field.choices && `Options: ${field.choices.join(', ')}.`}
            {description && description}
          </FormDescription>
        </FormItem>
      )}
    />
  );
} 