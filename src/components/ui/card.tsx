import { forwardRef } from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered" | "gradient";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

const variantStyles = {
  default: "bg-white dark:bg-slate-800",
  elevated:
    "bg-white dark:bg-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50",
  bordered:
    "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700",
  gradient:
    "bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900",
};

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className = "",
      variant = "default",
      padding = "md",
      hover = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = "rounded-2xl";
    const hoverStyles = hover
      ? "transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      : "";

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = "", children, ...props }, ref) => (
    <div ref={ref} className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  )
);

CardHeader.displayName = "CardHeader";

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className = "", as: Tag = "h3", children, ...props }, ref) => (
    <Tag
      ref={ref}
      className={`text-xl font-bold text-slate-900 dark:text-white ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
);

CardTitle.displayName = "CardTitle";

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className = "", children, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-slate-600 dark:text-slate-400 ${className}`}
    {...props}
  >
    {children}
  </p>
));

CardDescription.displayName = "CardDescription";

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = "", children, ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
);

CardContent.displayName = "CardContent";

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = "", children, ...props }, ref) => (
    <div ref={ref} className={`mt-6 ${className}`} {...props}>
      {children}
    </div>
  )
);

CardFooter.displayName = "CardFooter";

export default Card;
