import { HTMLAttributes } from "react"

type ButtonProps = HTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
	return <button {...props} />
}
