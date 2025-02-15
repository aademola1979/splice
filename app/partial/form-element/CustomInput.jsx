import { useEffect, useImperativeHandle, useState, useRef, forwardRef } from "react";
import { get } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "@/lib/utility/Icons";


const CustomInput = forwardRef(
    ({ type, name, label, touched, required, errors, ...props }, ref) => {

        const inputRef = useRef(null)

        const [showPassword, setShowPassword] = useState(false)
        const [inputType, setInputType] = useState(type)

        useEffect(() => {
            if (type === "password" && showPassword) {
                setInputType("text")
            }

            if (type === "password" && !showPassword) {
                setInputType("password")
            }
        }, [type, showPassword])


        useImperativeHandle(ref, () => inputRef.current)
        const hasError = get(errors, name)

        return (
            <div>
                <div className="custom-input-container">
                    <input
                        type={inputType}
                        name={name}
                        placeholder=" "
                        className={cn(
                            "custom-input",
                            {
                                "input-error": hasError,
                            }
                        )}
                        ref={inputRef}
                        {...props}
                    />
                    <label
                        htmlFor={name}
                        onClick={() => inputRef.current?.focus()}
                        className={cn(
                            "input-label",
                            {
                                "input-label-error": hasError,
                            }
                        )}>
                        {label}
                        {required && <span className="required">*</span>}
                    </label>

                    {
                        type === "password" && (
                            <button type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="eye">
                                {showPassword ? <Eye /> : <EyeOff />}

                            </button>
                        )
                    }

                </div>
            </div>
        )
    }
)
CustomInput.displayName = "CustomInput"

export { CustomInput }
