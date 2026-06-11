import type {
  Category,
  ChatMessage,
  FeaturedDeal,
  GroupBuyDeal,
  GroupMember,
  LocalDeal,
  ProfileStat,
  RecentPurchase,
} from '../types';

export const imageUrls = {
  userAvatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDbFrafJmmVIAGXC--XwoVR1t7swTRgRDY5mR6nWC-CnrXUGhO1_4NORfJfnMfwHlJ3JhVqi8I_zp9Q5SBg-v1MQT7-4ghn7w-OEt2TDRbS_KxwEw5FDZGYVlSNZaaz9C8MgZpc1jADcjYrGdZyzExv1qW2Y96k6kYedSy_uHxGgz-Tfh4wWaqAcDXefPOsl047nPMvyMeQcT9EN7T59O_qxyw3MD5G7vWZF1NeO0WKe40BtZyeXFwY2IKhnpVvF6YPcSa5liVANN0',
  profileAvatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAEV5-D4jT-3-r5bF9A_FzWj9R9H-P1Zc5oK8Iq9y3VqQJ_3I_R4hB9Y2lK-A2K8b-8gH6Z8Wc2I5H2K7R9y7F3J4M0L5v8o_x_C3E5T0N8S5A1J7g6Q4c8N8P0Q5Q3P0Q5A9J4G8L0E8Q0E0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0',
  smartHome:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBvBysmIp848sGcF4LaKhQeMOdpE9lpNOkd6exqrQv6zi3s_YhEabCvOfHY7oRJBLWPpsnP74ndQtfFLKJakOL-RrGrqEhvwOMj39Q7PsyKyTuZHg3CMMiCuAHlTCDOz7qsOlmc6wCfVL_t0yXWqwr5rn3_P-7l4h0RxC5raKbEMDWPsDQdbowPO_SAQK-Xtgc3RyYIOkawSUA-G7C7CK44HfhsD4TMTXYOV83zcqx5kxEIzrMNfg1idwz0dl12-t-NUEZz8N_iw2c',
  coffeeGrinder:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDWqkOhN08yuztUOOL1wPxInkPIYAnUDhI0PYFKv7NtwocUT8zXr5WFUyR8kM8MF1OuAdwbW9-Op3lOUCypgCppN4ZPfnN-H0a2OwFyRqLepllW2e6GieZxy_4gi2l7ExZmJRhAKxIQzWzc_X1gE7EBpv3c1_d7EaPUHLcZidz5UJ2bBpdwjJ-OE8s9Vu94Cbt4LjKPglbpyHpII528OhRcFIWVS8y5vO25Hwm20uw5RLP6vCWDCPtODdfHuG38HeCbTJwkDeOKEsU',
  keyboard:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAGYsEI_hskevDIZ3GNTB5wnekX4JmnMq2W_x2Aqzfp1z_xBRwL_ZxOdkBWqbpC9uYj0AWaRmDrNYlSvVpgxi78ddgCQ2pIpx7mAiTrnkDIMVSBGGX6FCLmJIoXFYFdJWHb7ex0enp_b07gLT5jeAYu7E_SalcZGrwO_xrLXCeqLD31HfeCVCNyGHnk7Vq2xbLMGwAstH6_QFcbkVMeLtDT0uL4ke0b1Ih0g8zIqABJdwuHKfDwoPKRzbZXQsKFJFQP_BV1PFm69G0',
  mapBackground:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAEV5-D4jT-3-r5bF9A_FzWj9R9H-P1Zc5oK8Iq9y3VqQJ_3I_R4hB9Y2lK-A2K8b-8gH6Z8Wc2I5H2K7R9y7F3J4M0L5v8o_x_C3E5T0N8S5A1J7g6Q4c8N8P0Q5Q3P0Q5A9J4G8L0E8Q0E0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0',
};

export const categories: Category[] = [
  { id: 'group-buys', name: 'Group Buys' },
  { id: 'flash-sales', name: 'Flash Sales' },
  { id: 'coupons', name: 'Coupons' },
  { id: 'bundles', name: 'Bundles' },
];

export const featuredDeal: FeaturedDeal = {
  title: 'ErgoPro X9 Mechanical Keyboard',
  imageUrl: imageUrls.keyboard,
  status: 'active',
  spotsLeft: 3,
  currentPrice: '$149.00',
  originalPrice: '$229.00',
  badge: 'Group Active',
};

export const groupBuyDeals: GroupBuyDeal[] = [
  {
    id: 1,
    title: 'Ultimate Smart Home Bundle: 4x Smart Plugs + Hub',
    description:
      'Looking for 5 more members to unlock the bulk discount. Currently at 45% off MSRP! All orders handled via Coorder Escrow for guaranteed safety.',
    imageUrl: imageUrls.smartHome,
    communityIcon: 'T',
    communityName: 'r/TechGroup',
    username: 'u/DealFinder',
    timePosted: '2h ago',
    isEscrowProtected: true,
    groupStatus: 'active',
    currentPrice: '$59.00',
    originalPrice: '$120.00',
    spotsProgress: 70,
    totalSpots: 10,
    joinPrice: '59',
    likes: 1200,
    comments: 84,
  },
  {
    id: 2,
    title: 'Comandante C40 MK4 Grinder - Limited Liquid Amber',
    description: 'Secured a wholesale lot of 12 grinders. 9 already spoken for. Escrow protection enabled.',
    imageUrl: imageUrls.coffeeGrinder,
    communityIcon: 'C',
    communityName: 'r/CoffeeNerd',
    username: 'u/BaristaLife',
    timePosted: '5h ago',
    isEscrowProtected: true,
    groupStatus: 'active',
    currentPrice: '$240.00',
    originalPrice: '$320.00',
    spotsProgress: 75,
    totalSpots: 12,
    joinPrice: '240',
    likes: 452,
    comments: 12,
  },
];

export const initialChatMessages: ChatMessage[] = [
  {
    id: 1,
    sender: 'peer',
    message: 'Hey! Are you interested in joining the group buy?',
    timestamp: '10:30 AM',
    senderName: 'Alex Rivera',
    avatar: imageUrls.userAvatar,
  },
  {
    id: 2,
    sender: 'user',
    message: "Yeah, I'm interested! How many spots are left?",
    timestamp: '10:32 AM',
  },
  {
    id: 3,
    sender: 'peer',
    message: 'We have 3 spots left out of 10. Escrow is protected via Coorder.',
    timestamp: '10:33 AM',
    senderName: 'Alex Rivera',
    avatar: imageUrls.userAvatar,
  },
  {
    id: 4,
    sender: 'user',
    message: "Perfect! Count me in. What's the final price?",
    timestamp: '10:34 AM',
  },
];

export const groupMembers: GroupMember[] = [
  {
    id: 1,
    name: 'Alex Rivera',
    avatar: imageUrls.userAvatar,
    joinedAt: 'Mar 15',
    status: 'confirmed',
    role: 'Group Leader',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    avatar: imageUrls.profileAvatar,
    joinedAt: 'Mar 14',
    status: 'confirmed',
  },
  {
    id: 3,
    name: 'Jordan Lee',
    avatar: imageUrls.profileAvatar,
    joinedAt: 'Mar 13',
    status: 'pending',
  },
];

export const localDeals: LocalDeal[] = [
  {
    id: 1,
    title: 'Coffee Grinder Group Buy',
    location: 'Downtown Coffee Shop',
    members: 8,
    distance: '0.3 mi',
    image: imageUrls.coffeeGrinder,
    price: '$240',
    markerIcon: 'local_cafe',
    markerClassName: 'top-[30%] left-[40%]',
  },
  {
    id: 2,
    title: 'Smart Home Devices',
    location: 'Tech Hub Downtown',
    members: 5,
    distance: '1.2 mi',
    image: imageUrls.smartHome,
    price: '$59',
    markerIcon: 'router',
    markerClassName: 'top-[50%] left-[60%]',
  },
];

export const profileStats: ProfileStat[] = [
  { label: 'Active', value: 3, icon: 'bolt' },
  { label: 'Completed', value: 12, icon: 'check_circle' },
  { label: 'Saved', value: '$1.2k', icon: 'savings' },
  { label: 'Level', value: 4, icon: 'stars' },
];

export const recentPurchases: RecentPurchase[] = [
  {
    id: 1,
    title: 'ErgoPro X9 Keyboard',
    price: '$149.00',
    date: 'Mar 15, 2024',
    status: 'Escrow Locked',
    statusColor: 'text-tertiary',
    bgStatusColor: 'bg-tertiary/10',
  },
  {
    id: 2,
    title: 'Smart Home Bundle',
    price: '$59.00',
    date: 'Mar 12, 2024',
    status: 'In Transit',
    statusColor: 'text-secondary',
    bgStatusColor: 'bg-secondary/10',
  },
  {
    id: 3,
    title: 'Coffee Grinder',
    price: '$89.99',
    date: 'Mar 8, 2024',
    status: 'Delivered',
    statusColor: 'text-primary',
    bgStatusColor: 'bg-primary/10',
  },
];
