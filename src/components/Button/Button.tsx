'use client';

import React, { forwardRef } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button. */
  variant?: ButtonVariant;
  /** Size of the button. */
  size?: ButtonSize;
  /** Shows a loading spinner and disables interaction. */
  isLoading?: boolean;
  /** Marks the button as visually "active" (e.g. pressed/selected toggle state). */
  isActive?: boolean;
  /** Renders the button at full width of its container. */
  fullWidth?: boolean;
  /** Optional icon rendered before the label. */
  leftIcon?: React.ReactNode;
  /** Optional icon rendered after the label. */
  rightIcon?: React.ReactNode;
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded font-sans font-semibold ' +
  'transition-colors duration-150 ease-in-out select-none ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ' +
  'focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 border border-transparent',
  secondary:
    'bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80 border border-transparent',
  danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 border border-transparent',
  ghost: 'bg-transparent text-foreground border border-border hover:bg-muted active:bg-muted/70',
};

const activeVariantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary/80 ring-2 ring-ring ring-offset-2 ring-offset-background',
  secondary: 'bg-secondary/80 ring-2 ring-ring ring-offset-2 ring-offset-background',
  danger: 'bg-red-800 ring-2 ring-ring ring-offset-2 ring-offset-background',
  ghost: 'bg-muted ring-2 ring-ring ring-offset-2 ring-offset-background',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-6 text-lg',
};

function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

function Spinner({ size }: { size: ButtonSize }) {
  const dimension = size === 'sm' ? 'h-3.5 w-3.5' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4';
  return (
    <svg
      className={cx('animate-spin', dimension)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

/**
 * Button — a themed, accessible button component supporting multiple
 * variants, sizes, and interactive states (loading, disabled, active).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      isActive = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      disabled,
      className,
      children,
      type = 'button',
      'aria-label': ariaLabel,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type={type}
        className={cx(
          baseStyles,
          variantStyles[variant],
          isActive && activeVariantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        aria-pressed={isActive || undefined}
        aria-label={ariaLabel}
        {...rest}
      >
        {isLoading && <Spinner size={size} />}
        {!isLoading && leftIcon && (
          <span className="inline-flex shrink-0 items-center" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        {children && <span>{children}</span>}
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0 items-center" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
