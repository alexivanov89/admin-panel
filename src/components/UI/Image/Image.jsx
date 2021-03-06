import { useEffect, useState } from 'react';

const Image = ({ fallback, src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const onError = () => setImgSrc(fallback);
  return <img src={imgSrc ? imgSrc : fallback} alt={alt} onError={onError} {...props} />;
};

export default Image;
