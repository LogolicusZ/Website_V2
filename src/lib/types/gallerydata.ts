interface Keyboard {
  id: string;
  name: string;
  images: Image[];

}

// images array type
interface Image {
  alt: string;
  src: string;
  width: number;
  height: number;
}

// export interfaces as types
export type { Keyboard, Image };