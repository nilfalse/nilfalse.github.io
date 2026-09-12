import clsx from 'clsx';
import type { ButtonHTMLAttributes, CSSProperties } from 'react';
import { useId } from 'react';
import type { LinkProps } from 'react-router';
import { Link as ReactRouterLink } from 'react-router';

import classes from './Button.module.css';

interface AnchorProps extends LinkProps {
  children: string;
  ariaLabel?: string;
  primary?: boolean;
  accent?: string;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  ariaLabel?: string;
  primary?: boolean;
  accent?: string;
}

type Props = AnchorProps | ButtonProps;

export function Button({ primary, accent, ...props }: Props) {
  const maskId = useId();

  const className = clsx(classes['btn'], props.className);
  const style = { '--button-accent': accent ?? '#fff' } as CSSProperties;
  const content = primary ? (
    <>
      <span className={`${classes['spacer']} ${classes['txt']}`}>
        {props.children}
      </span>

      <svg
        className={classes['svg']}
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <defs>
          <mask id={maskId}>
            <rect width="100%" height="100%" fill="#fff" />
            <text
              className={`${classes['svg-txt']} ${classes['txt']}`}
              x="50%"
              y="50%"
            >
              {props.children}
            </text>
          </mask>
        </defs>
        <rect
          className={classes['decoration']}
          width="100%"
          height="100%"
          mask={`url(#${maskId})`}
        />
      </svg>
    </>
  ) : (
    <span className={classes['txt']}>{props.children}</span>
  );

  if (isAnchorProps(props)) {
    if (typeof props.to === 'string' && props.to.startsWith('#')) {
      return (
        <a
          {...props}
          href={props.to}
          className={className}
          aria-label={props.ariaLabel ?? props.children}
          style={style}
        >
          {content}
        </a>
      );
    } else {
      return (
        <ReactRouterLink
          {...props}
          className={className}
          aria-label={props.ariaLabel ?? props.children}
          style={style}
        >
          {content}
        </ReactRouterLink>
      );
    }
  } else {
    return (
      <button
        {...(props as ButtonProps)}
        className={className}
        aria-label={props.ariaLabel ?? props.children}
        style={style}
      >
        {content}
      </button>
    );
  }
}

function isAnchorProps(props: Props): props is AnchorProps {
  return 'to' in props;
}
