type Props = {
    className: string,
    children: string
  };
  
  const InlineCode: React.FC<Props> = ({ className, children }: Props) => {    
    return (
      <span className={[className,'px-2', 'bg-gray-200', 'rounded', 'text-red-700', 'my-1', 'inline-block'].join(' ')}>
        {children}
      </span>
    )
  };
  
  export default InlineCode;
  