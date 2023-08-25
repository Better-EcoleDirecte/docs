import type {PropsWithChildren} from "react";

export function Container (props: PropsWithChildren ): JSX.Element {
  return (
    <div className="nx-container nx-mx-auto nx-my-8">
        {props.children}
    </div>
  );
}