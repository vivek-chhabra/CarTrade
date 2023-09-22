import Image from "next/image";
import './CustomButton.scss'

type Button = {
    variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

export default function CustomButton({ variant, children, ...rest }: Button) {
    return (
        <button className={variant} {...rest}>
            {children}
        </button>
    );
}
