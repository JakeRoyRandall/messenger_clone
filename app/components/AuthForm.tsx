"use client";
import { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";

const AuthForm = () => {
  const [varient, setVarient] = useState<"LOGIN" | "REGISTER">("LOGIN")
  const [loading, setLoading] = useState(false)

  const toggleVarient = useCallback(() => {
    setVarient(varient === "LOGIN" ? "REGISTER" : "LOGIN")
  }, [varient])

  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" }
  })

  const onSubmit: SubmitHandler<FieldValues> = useCallback(async (data) => {
    setLoading(true)
    console.log(data)
    if (varient === "LOGIN") {
      // Login
    } else if (varient === "REGISTER") {
      // Register
    }

    setLoading(false)
  }, [])

  return (
    <>Auth Form!</>
  )
}

export default AuthForm