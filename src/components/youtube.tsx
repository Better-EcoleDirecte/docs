import { Container } from "./container";
import cn from "clsx";

export interface YoutubeProps {
  code: string;
  title: string;
}

export function Youtube(props: YoutubeProps): JSX.Element {
  return (
    <Container>
      <figure className="relative nx-my-6 nx-group">
        <iframe
          src={`https://www.youtube.com/embed/${props.code}`}
          title={props.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          frameBorder={0}
          className={cn(
            "nx-w-full nx-aspect-video nx-max-w-screen-md 4xl:nx-max-w-screen-lg nx-mx-auto group-hover:nx-shadow-lg nx-rounded-xl",
            "nx-border nx-bg-gray-100 dark:nx-border-neutral-700"
          )}
        ></iframe>

        <figcaption className="nx-mx-auto">
          <hr className="nx-mx-auto nx-w-[40%] nx-border-t nx-border-primary nx-mt-5 nx-mb-3" />
          <h2
            className={cn(
              "nx-text-center nx-italic nx-mb-4 nx-leading-tight nx-tracking-tight",
              "dark:nx-text-neutral-300 group-hover:nx-text-primary-700",
              "dark:group-hover:nx-text-primary-500"
            )}
          >
            {props.title}
          </h2>
        </figcaption>
      </figure>
    </Container>
  );
}
