'use client';

import React, { useState } from 'react';
import { Download, Heart, ArrowRight } from 'lucide-react';
import { Button, type ButtonVariant, type ButtonSize } from '@/components';

const variants: ButtonVariant[] = ['primary', 'secondary', 'danger', 'ghost'];
const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

function CodeSnippet({ code }: { code: string }) {
  return (
    <pre className="mt-3 overflow-x-auto rounded border border-border bg-muted p-3 text-xs font-mono-data text-muted-foreground">
      <code>{code}</code>
    </pre>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      <div className="mt-4 flex flex-wrap items-center gap-4 rounded-lg border border-border bg-card p-6">
        {children}
      </div>
    </section>
  );
}

export default function ComponentsShowcasePage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10">
          <h1 className="text-3xl font-extrabold text-foreground">Component Showcase</h1>
          <p className="mt-2 text-muted-foreground">
            A living reference for TCoLDS UI components, starting with{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono-data text-sm">Button</code>.
          </p>
        </header>

        <Section
          title="Variants"
          description="Every visual style supported by the Button component."
        >
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </Section>
        <CodeSnippet
          code={`<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="danger">Danger</Button>\n<Button variant="ghost">Ghost</Button>`}
        />

        <Section title="Sizes" description="Small, medium, and large sizing options.">
          {sizes.map((size) => (
            <Button key={size} size={size}>
              {size.toUpperCase()} Button
            </Button>
          ))}
        </Section>
        <CodeSnippet
          code={`<Button size="sm">Small</Button>\n<Button size="md">Medium</Button>\n<Button size="lg">Large</Button>`}
        />

        <Section title="States" description="Loading, disabled, and active states.">
          <Button isLoading={isLoading} onClick={handleLoadingDemo}>
            {isLoading ? 'Loading…' : 'Click to load'}
          </Button>
          <Button disabled>Disabled</Button>
          <Button isActive>Active</Button>
        </Section>
        <CodeSnippet
          code={`<Button isLoading>Loading…</Button>\n<Button disabled>Disabled</Button>\n<Button isActive>Active</Button>`}
        />

        <Section
          title="Icons & full width"
          description="Buttons with leading/trailing icons or full container width."
        >
          <Button leftIcon={<Download className="h-4 w-4" />}>Download</Button>
          <Button variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
            Continue
          </Button>
          <Button variant="ghost" leftIcon={<Heart className="h-4 w-4" />} aria-label="Like" />
          <div className="w-full">
            <Button fullWidth variant="primary">
              Full Width Button
            </Button>
          </div>
        </Section>
        <CodeSnippet
          code={`<Button leftIcon={<Download className="h-4 w-4" />}>Download</Button>\n<Button variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>Continue</Button>\n<Button variant="ghost" leftIcon={<Heart className="h-4 w-4" />} aria-label="Like" />\n<Button fullWidth>Full Width Button</Button>`}
        />

        <section>
          <h2 className="text-xl font-bold text-foreground">Usage</h2>
          <CodeSnippet
            code={`import { Button } from '@/components';\n\nexport function Example() {\n  return (\n    <Button variant="primary" size="md" onClick={() => {}}>\n      Click me\n    </Button>\n  );\n}`}
          />
        </section>
      </div>
    </div>
  );
}
