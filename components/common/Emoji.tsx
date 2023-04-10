const Emoji = (props: EmojiPropsType) => {
  return (
    <span className='Emoji' role='img' aria-label={props.label ? props.label : ''} aria-hidden={props.label ? false : true}>
      {props.symbol}
    </span>
  );
};

interface EmojiPropsType {
  symbol: string;
  label?: string;
}

export default Emoji;
