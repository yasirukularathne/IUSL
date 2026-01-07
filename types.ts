
export interface Faculty {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  courses: string[];
  imageUrl: string;
  icon: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  name: string;
  path: string;
}
