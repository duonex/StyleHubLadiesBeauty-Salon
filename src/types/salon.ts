export type ServiceCategoryId = 
  | 'all'
  | 'massage'
  | 'treatment'
  | 'hair-straightening'
  | 'hair-dye'
  | 'hair-cut'
  | 'kids'
  | 'threading'
  | 'bleach'
  | 'd-tan'
  | 'wax'
  | 'hair-wash-blow-dry'
  | 'spa'
  | 'facial'
  | 'bridal-makeup'
  | 'facial-service'
  | 'lice-remove'
  | 'ear-cobe'
  | 'hair-extension';

export type ServiceCategory = ServiceCategoryId;

export interface SalonCategoryMeta {
  id: ServiceCategoryId;
  name: string;
  order: number;
  description: string;
  icon: string;
  image: string;
  count: number;
}

export interface SalonService {
  id: string;
  name: string;
  category: ServiceCategoryId;
  categoryName: string;
  description: string;
  duration: string;
  price?: string;
  popular?: boolean;
  popularity?: number;
  tag?: string;
  image: string;
  features: string[];
}

export interface GoogleReview {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  timeAgo: string;
  content: string;
  serviceMentioned?: string;
  verified: boolean;
}

export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  price?: string;
  originalPrice?: string;
  duration: string;
  servicesIncluded: string[];
  description: string;
  popular?: boolean;
  image: string;
}

export interface BridalPackage {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  tagline: string;
  duration: string;
  inclusions: string[];
  description: string;
  image: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email?: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  notes?: string;
}

export interface SalonInfo {
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  address: {
    line1: string;
    plaza: string;
    road: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  social: {
    instagram: string;
    facebook: string;
    whatsapp: string;
  };
  hours: {
    display: string;
    openTime: string;
    closeTime: string;
    days: string;
  };
  googleMapsUrl: string;
}
