import { ReactNode } from "react";
import "./index.scss";

export default function Page({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`page ${className}`}>
      {children}
    </div>
  )
}