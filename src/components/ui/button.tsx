"use client";

import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
}

const variantStyles = {
  primary:
    "bg-primary text-white hover:bg-primary/90 focus:ring-primary/50 shadow-lg shadow-primary/25",
  secondary:
    "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary/50 shadow-lg shadow-secondary/25",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/50",
  ghost:
    "text-primary hover:bg-primary/10 focus:ring-primary/50",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#128C7E] focus:ring-[#25D366]/50 shadow-lg shadow-[#25D366]/25",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      href,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed";

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      return (
        <a
          href={href}
          className={combinedStyles}
          tabIndex={0}
          aria-label={typeof children === "string" ? children : undefined}
        >
          {leftIcon}
          {children}
          {rightIcon}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedStyles}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
