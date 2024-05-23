"use client"
import { useRef, useState } from "react"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"

import { toast } from "sonner"

export default function Home() {

  const inputRef = useRef(null);
  const [email, setEmail] = useState();

  function handleChange(e) {
    return setEmail(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://express-vev3.onrender.com/submission/add', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email})
      });

      if (res.ok) {
        toast("Email has been successfully added.");
        inputRef.current.value = '';
      } else {
        throw new Error("Fail to send data");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <main className="h-screen dark:bg-black grid place-items-center">
      <form 
        onSubmit={handleSubmit}
        className="w-fit p-40 rounded-xl border-dashed border-[1px] border-[#b2b4bb] dark:bg-black dark:border-dashed dark:border-[1px] dark:border-[#4a4b4e] max-md:border-none max-md:bg-transparent max-md:p-0 max-md:rounded-none max-md:dark:border-none"
      >
        <Label >Email</Label>
        <div className="flex items-center max-sm:flex-col max-sm:items-start">
        <Input 
          ref={inputRef}
          handleInput={handleChange}
          type={'email'} 
        />
        <Button type="submit" className={buttonVariants({ size: "sm" })}>Submit</Button>
        </div>
      </form>
     
    </main>
  )
}
