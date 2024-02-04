export type ProjectProps = {
  title?: string;
  subtitle?: string;
  items?: ItemProps[];
};

export type ItemProps = {
  image?: string;
  layoutLink?: string;
  codeLink?: string;
  projectTitle?: string;
  text?: string;
};
