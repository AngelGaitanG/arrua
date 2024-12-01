export interface Service {
    title: string;
    image: string;
    description: string;
    subServices: SubService[];
  }
  
export interface SubService {
    title: string;
    description: string;
  }