export type LinksType = {
  id: number;
  label: string;
  link: string;
  icon?: React.ReactNode;
};

export type StoneImagesType = {
  id: number;
  image: string;
};

export type StoneCategorisType = Omit<StoneImagesType, 'alt'> & {
  text: string;
};

export type MultiLangText = {
  en: string;
  ar: string;
  de: string;
};

export type ProjectsSampleType = {
  id: number;
  image: string;
  projectName: MultiLangText;
  location: MultiLangText;
  stoneType: MultiLangText;
  description: MultiLangText;
};

export type SupportedLang = 'en' | 'ar' | 'de';
