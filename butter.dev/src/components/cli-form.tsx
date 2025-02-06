'use client';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/ui/button';
import { Form } from '~/components/ui/form';
import { FormFieldComponent } from './form-field';
import { parseHelp } from '~/lib/help-parser';
import { cn } from '~/lib/utils';

interface CliFormProps {
  helpText: string;
  onSubmit?: (data: any, cmd: string) => void;
  baseCmd?: string;
  columns?: number;
  maxHeight?: string | number;
  fieldClassName?: string;
}

export function CliForm({ helpText, onSubmit, baseCmd, columns = 1, maxHeight, fieldClassName }: CliFormProps) {
  const fields = parseHelp(helpText);
  const form = useForm({
    defaultValues: fields.reduce((acc, field) => ({
      ...acc,
      [field.name]: field.defaultValue || ''
    }), {})
  });
  const iOnSubmit = (data: any) => {
    const cmdParts: string[] = [baseCmd ?? ''];
    
    // Add positional arguments first
    fields
      .filter(field => field.isPositional)
      .forEach(field => {
        const value = data[field.name];
        if (value) {
          cmdParts.push(value);
        }
      });

    // Add other arguments
    fields
      .filter(field => !field.isPositional)
      .forEach(field => {
        const value = data[field.name];
        if (value === undefined || value === null) return;
        
        if (field.type === 'boolean') {
          if (value) {
            cmdParts.push(`--${field.name}`);
          } else {
            cmdParts.push(`--no-${field.name}`);
          }
        } else if (field.type === 'array') {
          if (Array.isArray(value) && value.length > 0) {
            value.forEach((item: string) => {
              cmdParts.push(`--${field.name} ${item}`);
            });
          }
        } else if (field.type === 'select' || field.type === 'string') {
          if (value) {
            cmdParts.push(`--${field.name} ${value}`);
          }
        }
      });

    const cmd = cmdParts.join(' ');
    onSubmit?.(data, cmd);
  }

  // Sort fields to ensure positional arguments come first
  const sortedFields = fields.sort((a, b) => {
    if (a.isPositional) return -1;
    if (b.isPositional) return 1;
    return 0;
  });

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(iOnSubmit)} 
        className={cn(
          "space-y-6",
          columns > 1 && `grid grid-cols-1 md:grid-cols-${columns} gap-6`
        )}
        style={{ 
          maxHeight: maxHeight ? typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight : undefined,
          overflowY: maxHeight ? 'auto' : undefined
        }}
      >
          <Button type="submit">as command</Button>
        {sortedFields.map((field, index) => (
          <FormFieldComponent 
            key={`${field.name}-${index}`}
            field={field} 
            control={form.control} 
            className={fieldClassName}
            description={field.description}
          />
        ))}
        <div className={cn(
          "col-span-full",
          columns > 1 && `md:col-span-${columns}`
        )}>
          <Button type="submit">as command</Button>
        </div>
      </form>
    </Form>
  );
} 