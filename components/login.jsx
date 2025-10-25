"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import { AtSign, Eye, EyeClosed, KeyRound } from "lucide-react";
import { useState } from "react";

export function LoginForm({ className, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <InputGroup>
            <InputGroupInput
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
            <InputGroupAddon>
              <AtSign />
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <InputGroup>
            <InputGroupInput
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
              required
            />
            <InputGroupAddon>
              <KeyRound />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                onClick={() => setShowPassword(!showPassword)}
                size="icon-xs"
                className="cursor-pointer"
              >
                {showPassword ? (
                  <EyeClosed className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600" />
                ) : (
                  <Eye className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600" />
                )}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <Button type="submit" className="cursor-pointer">
            Login
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
