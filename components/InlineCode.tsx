type Props = {
    className: string,
    children: string
  };
  
  const InlineCode: React.FC<Props> = ({ className, children }: Props) => {    
    return (
      <span className={[className,'py-2', 'px-4', 'text-sm', 'bg-gray-200', 'rounded', 'text-gray-800', 'my-1', 'inline-block'].join(' ')}>
        {children}
      </span>
    )
  };
  
  export default InlineCode;
  