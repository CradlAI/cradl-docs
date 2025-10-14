export const Image = ({ size, style, ...rest }) => {
  let sizeStyle = { width: '75%' };
  if (size === 'small') {
    sizeStyle = { width: '45%' };
  }

  return <img {...rest} style={{...style, ...sizeStyle}} className="rounded-lg border border-gray-100" />
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