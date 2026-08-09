import classes from './Button.module.css';

interface Props {
  text: string;
}

export function Button(props: Props) {
  return (
    <button className={classes['button']}>
      <span>{props.text}</span>
    </button>
  );
}
