export type CurrentProjectProps = {
  title?: string;
  items?: ItemProps[];
};

export type ItemProps = {
  image?: string;
  layoutLink?: string;
  codeLink?: string;
  projectTitle?: string;
  text?: string;
};
