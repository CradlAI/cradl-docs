export const Image = ({ size, style, ...rest }) => {
  let sizeStyle = { width: '75%' };
  return <Frame><img {...rest} style={{...style, ...sizeStyle}} /></Frame>
}

export const Row = ({ children }) => {
  return <div className="flex gap-2">
    {children}
  </div>;
}

export const Col = ({ children }) => {
  return <div className="flex flex-col gap-2">
    {children}
  </div>;
}