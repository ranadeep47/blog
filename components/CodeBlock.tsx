import Highlight, {defaultProps, Language} from 'prism-react-renderer'

type Props = {
    className: string,
    children: string
  };
  
  const CodeBlock: React.FC<Props> = ({ className, children }: Props) => {
    const language: Language = className ? className.replace(/language-/, '') as Language : 'javascript';

    return (
      <Highlight {...defaultProps} code={children} language={language}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <code className={className} style={{...style}}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </code>
        )}
      </Highlight>
    )
  };
  
  export default CodeBlock;
  