import clsx from "clsx";

export default function Row(props) {
    return (
        <div className={clsx("flex ", props.className)}>
            {props.children}
        </div>
    );
}