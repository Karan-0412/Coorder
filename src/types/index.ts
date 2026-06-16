export interface Category {
  id: string;
  name: string;
  icon?: string;
}

export interface GroupBuyDeal {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  communityIcon: string;
  communityName: string;
  username: string;
  timePosted: string;
  isEscrowProtected: boolean;
  groupStatus: 'active' | 'pending' | 'filled';
  currentPrice: string;
  originalPrice: string;
  spotsProgress: number;
  totalSpots: number;
  joinPrice: string;
  likes: number;
  comments: number;
}

export interface FeaturedDeal {
  title: string;
  imageUrl: string;
  status: 'active' | 'pending';
  spotsLeft: number;
  currentPrice: string;
  originalPrice: string;
  badge: string;
}

export interface ChatMessage {
  id: number;
  sender: 'user' | 'peer';
  message: string;
  timestamp: string;
  senderName?: string;
  avatar?: string;
}

export interface GroupMember {
  id: number;
  name: string;
  avatar: string;
  joinedAt: string;
  status: 'confirmed' | 'pending';
  role?: string;
}

export interface LocalDeal {
  id: number;
  title: string;
  location: string;
  members: number;
  distance: string;
  image: string;
  price: string;
  markerIcon: string;
  markerClassName: string;
}

export interface ProfileStat {
  label: string;
  value: number | string;
  icon: string;
}

export interface RecentPurchase {
  id: number;
  title: string;
  price: string;
  date: string;
  status: string;
  statusColor: string;
  bgStatusColor: string;
}

export interface Conversation {
  id: number;
  name: string;
  avatarUrl?: string;
  initials?: string;
  lastMessage: string;
  time: string;
  unread: number;
  online?: boolean;
}
