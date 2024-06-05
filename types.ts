export type Category = "React" | "Node" | "JavaScript" | "Nest" | "TeamProject" | "All";

export interface Project {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type NavItemProps = {
  value: Category;
  handlerFilterCategory: (category: Category) => void;
  active: Category | "All";
};

export type ProjectsNavbarProps = {
  handlerFilterCategory: (category: Category) => void;
  active: Category | "All";
};
