export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export interface Campaign {
  id: string;
  title: string;
  target: number;
  raised: number;
  image?: string;
  description?: string;
  donors?: number;
  daysLeft?: number;
  category?: string;
}
