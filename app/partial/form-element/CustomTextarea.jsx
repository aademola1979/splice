
import { useImperativeHandle, useRef, forwardRef } from "react";
import { get } from "react-hook-form";
import { cn } from "@/lib/utils";


const CustomTextarea = forwardRef(
    ({ className, errors, name, label, required, ...props }, ref) => {
        
        const inputRef = useRef(null)

        useImperativeHandle(ref, () => inputRef.current)
        const hasError = get(errors, name)

        return (
            <div>
                <div className="custom-input-container">
                    <textarea
                        placeholder=" "
                        name={name}
                        className={cn(
                            "custom-input",
                            {
                                "custom-input-error": hasError,
                            }
                        )}
                        ref={ref}
                        {...props}
                    />

                    <label
                        htmlFor={name}
                        onClick={() => inputRef.current?.focus()}
                        className={cn(
                            "input-label",
                            {
                                "input-error": hasError,
                            }
                        )}>
                        {label}
                        {required && <span className="required">*</span>}
                    </label>
                </div>

            </div>

        )
    }
)
CustomTextarea.displayName = "CustomTextarea"

export { CustomTextarea }
