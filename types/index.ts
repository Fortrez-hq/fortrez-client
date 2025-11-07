export interface Campaign {
  id: string;
  title: string;
  description: string;
  image: string;
  target: number;
  raised: number;
  percentage: number;
  category?: string;
}

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}
