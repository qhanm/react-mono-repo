import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const styles: React.CSSProperties = {
    padding: "8px 16px",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    background: variant === "primary" ? "#007bff" : "#6c757d",
    color: "#fff",
    fontSize: 14,
  };

  return (
    <button style={styles} {...props}>
      {children}
    </button>
  );
};
