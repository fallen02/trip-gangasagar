import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import toast, { Toaster } from "react-hot-toast";
import { LoaderCircle, SendHorizonal } from "lucide-react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );
  const formSchema = z.object({
    fullname: z.string().min(5).max(100),
    email: z.email(),
    phone: z.string().regex(phoneRegex, "invalid Number").min(10).max(13),
    message: z.string().max(600),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function HandleSubmit(values: z.infer<typeof formSchema>) {
    const { fullname, email, phone, message } = values;

    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname, email, phone, message }),
      });
      setLoading(false);

      if (response.status === 200) toast.success("Email sent successfully!");
      else toast.error("Something went wrong");
      reset();
    } catch (error) {
      // @ts-ignore
      toast.error(error.message);
      setLoading(false);
    }
  }

  return (
    <div className="w-full lg:w-3/4">
      <div className="px-5 py-2.5 lg:px-10 lg:py-5 bg-gray-50 rounded-2xl w-full">
        <h1 className="text-3xl lg:text-4xl font-medium font-catamaran text-heading">
          Email Us
        </h1>
        <form
          className="py-5 flex flex-col gap-3 lg:gap-5 w-full"
          onSubmit={handleSubmit(HandleSubmit)}
        >
          <div className="grid gap-1 lg:gap-2">
            <label
              htmlFor="fullname"
              className="text-sm lg:text-base text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Jhon Dao"
              className={cn(
                "form-input px-2 appearance-none p-1 w-full max-w-2xl rounded border-0 ring ring-gray-400 focus:ring-orange-400",
                errors.fullname?.message
                  ? "ring-red-500 text-red-400 placeholder:text-red-500"
                  : ""
              )}
              {...register("fullname", {
                required: true,
                minLength: 5,
                maxLength: 100,
              })}
            />
          </div>
          <div className="grid grid-flow-col gap-5 w-full">
            <div className="grid gap-1 lg:gap-2">
              <label
                htmlFor="email"
                className="text-sm lg:text-base text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder={
                  errors.email?.message
                    ? errors.email.message
                    : "jhondao@mail.com"
                }
                className={cn(
                  "form-input px-2 appearance-none p-1 w-full max-w-2xl rounded border-0 ring ring-gray-400 focus:ring-orange-400",
                  errors.email?.message
                    ? "ring-red-500 text-red-400 placeholder:text-red-500"
                    : ""
                )}
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </div>
            <div className="grid gap-1 lg:gap-2">
              <label
                htmlFor="phone"
                className="text-sm lg:text-base text-gray-700"
              >
                Phone No
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="9876543210"
                className={cn(
                  "form-input px-2 appearance-none p-1 w-full max-w-2xl rounded border-0 ring ring-gray-400 focus:ring-orange-400",
                  errors.phone?.message
                    ? "ring-red-500 text-red-400 placeholder:text-red-500"
                    : ""
                )}
                {...register("phone", {
                  required: true,
                  minLength: 6,
                  maxLength: 13,
                })}
              />
            </div>
          </div>
          <div className="grid gap-1 lg:gap-2">
            <label
              htmlFor="message"
              className="text-sm lg:text-base text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              aria-multiline={true}
              rows={3}
              placeholder="Your Message"
              className="form-textarea px-2 appearance-none p-1 w-full max-w-2xl rounded border-0 ring ring-gray-400 focus:ring-orange-400"
              {...register("message", { required: true, maxLength: 600 })}
            />
          </div>
          <button
            type="submit"
            className="bg-orange-600 w-fit px-8 py-1.5 lg:px-10 lg:py-3 rounded-2xl text-lg font-medium text-white cursor-pointer"
          >
            {loading ? (
              <span className="flex gap-4 items-center">
                <LoaderCircle className="animate-spin" />
                Please Wait
              </span>
            ) : (
              <span className="flex gap-4 items-center">
                <SendHorizonal />
                Sumbit
              </span>
            )}
          </button>
        </form>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
