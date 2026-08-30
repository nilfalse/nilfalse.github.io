import clsx from 'clsx';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { useId } from 'react';

import classes from './Button.module.css';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: string;
  ariaLabel?: string;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  ariaLabel?: string;
}

type Props = AnchorProps | ButtonProps;

export function Button(props: Props) {
  const maskId = useId();

  const content = (
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
  );

  if (isAnchorProps(props)) {
    return (
      <a
        {...props}
        className={clsx(classes['btn'], props.className)}
        aria-label={props.ariaLabel ?? props.children}
      >
        {content}
      </a>
    );
  } else {
    return (
      <button
        {...props}
        className={clsx(classes['btn'], props.className)}
        aria-label={props.ariaLabel ?? props.children}
      >
        {content}
      </button>
    );
  }
}

function isAnchorProps(props: Props): props is AnchorProps {
  return 'href' in props;
}
