
export type Page = 'home' | 'portfolio' | 'technical' | 'contact' | 'ongoing' | 'upcoming' | 'completed' | 'blog';

export interface Project {
  id: number;
  title: string;
  location: string;
  status: 'Current' | 'Upcoming' | 'Completed';
  image: string;
  description: string;
  completionPercentage?: number;
  expectedDate?: string;
  brochure?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Material {
  brand: string;
  category: string;
  description: string;
  icon: string;
}


export interface Amenity {
  title: string;
  description: string;
  icon: string;
}

export interface Specification {
  category: string;
  details: string[];
  icon?: string;
}
