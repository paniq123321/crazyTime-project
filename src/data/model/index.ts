interface ImageProps {
  uri: string;
  offsetX?: number;
  offsetY?: number;
  sizeMultiplier?: number;
  landscape?: boolean;
}

interface ImagePropsLocal extends ImageProps {
  _imageHTML?: HTMLImageElement;
}
interface StyleType {
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number | string;
  fontStyle?: string;
}

export type InputList = {
  id: string;
  option?: string;
  image?: ImagePropsLocal;
  style: StyleType;
};
