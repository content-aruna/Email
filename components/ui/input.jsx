import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, handleInput, ...props }, ref) => {
  return (
    (<input
      onChange={handleInput}
      placeholder="@mail.com"
      type={type}
      className={cn(
        "flex h-10 w-80 rounded border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 placeholder-gray-100 placeholder-opacity-50 dark:border-slate-800 dark:bg-black dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-[#068FFF] max-[375px]:w-full",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
