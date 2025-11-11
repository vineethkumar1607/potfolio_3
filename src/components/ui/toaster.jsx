import PropTypes from "prop-types";
import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

/**
 * Global Toaster with position control and styling
 * @param {object} props
 * @param {"top-left"|"top-right"|"top-center"|"bottom-left"|"bottom-right"|"bottom-center"} [props.position="bottom-right"]
 * @param {string} [props.className] - Additional Tailwind classes
 */
export function Toaster({ position = "bottom-right", className }) {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport position={position} className={className} />
    </ToastProvider>
  );
}

// ✅ Add prop type validation
Toaster.propTypes = {
  position: PropTypes.oneOf([
    "top-left",
    "top-right",
    "top-center",
    "bottom-left",
    "bottom-right",
    "bottom-center",
  ]),
  className: PropTypes.string,
};
