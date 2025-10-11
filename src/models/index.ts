export type LinksType = {
  id: number;
  label: string;
  link: string;
  icon?: React.ReactNode;
};

export type StoneImagesType = {
  id: number;
  image: string;
  alt: string;
};

export type StoneCategorisType = Omit<StoneImagesType, 'alt'> & {
  text: string;
};
