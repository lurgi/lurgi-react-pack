import Compressor from "compressorjs";
import { ImgHTMLAttributes, useEffect, useState } from "react";

interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const ProgressiveImage = (props: IImageProps) => {
  const [imageSrc, setImageSrc] = useState("");
  const [loaded, setLoaded] = useState(false);

  // 고화질 이미지 로드 함수
  function loadHighResImage() {
    const highResImg = new Image();
    highResImg.src = props.src;
    highResImg.onload = () => {
      setImageSrc(props.src);
      setLoaded(true);
    };
  }

  useEffect(() => {
    fetch(props.src)
      .then((res) => res.blob())
      .then((blob) => {
        const fileSize = blob.size / 1024; // KB 단위로 변환

        if (fileSize > 100) {
          // 파일 크기가 100KB 이상이면 Progressive Loading 적용
          new Compressor(blob, {
            quality: 0.1, // 저화질 설정
            success(result) {
              const reader = new FileReader();
              reader.readAsDataURL(result);
              reader.onloadend = () => {
                if (reader.result) setImageSrc(reader.result.toString());
                loadHighResImage();
              };
            },
            error() {
              console.error("Progressive Loading Fail In Image Element");
              loadHighResImage();
            },
          });
        } else {
          // 파일 크기가 100KB 미만이면 바로 원본 이미지 사용
          loadHighResImage();
        }
      });
  }, [props.src]);

  return (
    <img
      {...props}
      src={imageSrc}
      style={{
        ...props.style,
        filter: loaded ? "none" : "blur(5px)",
      }}
    />
  );
};

export default ProgressiveImage;
