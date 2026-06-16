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

// Per-conversation seed messages keyed by conversation id
export const conversationMessages: Record<number, ChatMessage[]> = {
  1: [
    { id: 1, sender: 'peer', message: 'Hey! Are you still interested in the group buy for the mechanical keyboard?', timestamp: '2:10 PM', senderName: 'Alex Thompson' },
    { id: 2, sender: 'user', message: 'Yeah, still in! How many spots are left?', timestamp: '2:12 PM' },
    { id: 3, sender: 'peer', message: 'We need 2 more to unlock the bulk price. You in?', timestamp: '2:13 PM', senderName: 'Alex Thompson' },
    { id: 4, sender: 'user', message: 'Definitely. Send me the payment link once it fills.', timestamp: '2:15 PM' },
  ],
  2: [
    { id: 1, sender: 'peer', message: 'The package just arrived! Thanks for organizing this deal.', timestamp: '11:05 AM', senderName: 'Sarah Jenkins' },
    { id: 2, sender: 'user', message: "Awesome! Glad it got there safely 🎉", timestamp: '11:20 AM' },
    { id: 3, sender: 'peer', message: 'Everything was packaged perfectly. Would join another group buy for sure.', timestamp: '11:22 AM', senderName: 'Sarah Jenkins' },
  ],
  3: [
    { id: 1, sender: 'peer', message: 'Hey, can we split the shipping costs for the espresso machine?', timestamp: '9:00 AM', senderName: 'Marcus Knight' },
    { id: 2, sender: 'user', message: 'How much are we talking?', timestamp: '9:05 AM' },
    { id: 3, sender: 'peer', message: 'About $12 each, split across 4 of us.', timestamp: '9:06 AM', senderName: 'Marcus Knight' },
    { id: 4, sender: 'peer', message: "It's either that or the deal falls through — supplier won't cover intl shipping.", timestamp: '9:07 AM', senderName: 'Marcus Knight' },
    { id: 5, sender: 'user', message: "$12 is fine with me. Let's do it.", timestamp: '9:10 AM' },
    { id: 6, sender: 'peer', message: "Perfect! I'll collect and pay upfront. Sending escrow link now.", timestamp: '9:11 AM', senderName: 'Marcus Knight' },
  ],
  4: [
    { id: 1, sender: 'peer', message: 'I sent the payment via escrow. Check your dashboard!', timestamp: 'Yesterday', senderName: 'David Chen' },
    { id: 2, sender: 'user', message: "Got it, thanks! I'll confirm receipt once it clears.", timestamp: 'Yesterday' },
  ],
  5: [
    { id: 1, sender: 'peer', message: "Is the 'Smart Home' group buy still active for new members?", timestamp: '2d ago', senderName: 'Elena Rodriguez' },
    { id: 2, sender: 'user', message: 'Yes! We have 2 spots open. Join link is in the group page.', timestamp: '2d ago' },
    { id: 3, sender: 'peer', message: "Great, I'll join today.", timestamp: '2d ago', senderName: 'Elena Rodriguez' },
  ],
  6: [
    { id: 1, sender: 'peer', message: 'Let me know when the tracking number is available.', timestamp: '3d ago', senderName: 'Jordan Smith' },
    { id: 2, sender: 'user', message: "Will do — supplier said it ships Friday.", timestamp: '3d ago' },
  ],
};

export const conversations: Conversation[] = [
  {
    id: 1,
    name: 'Alex Thompson',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDMvPDHXkeIWIQiUnXZgyLHIc25dXhvv0gdAseETNizlC3UNqlnwSfr-RG0tthu9hMrolb4HnWociNsvimlhms7ntWZi2-ufCj9XmxLJl5psoUBbGAnePrp5TqYHcX6NewXZuta2bwp0hsZmcNq5jEXvNNtAc9Y5CfQUvtXvqt4E4gshF5XCaZDB_mjRB7ou01XX7RfpdJqOWgp_n6ogyT_COUZFHAJwUN8LrembARBuXaowrC2AueA97IHEV7-aZbwgKisOdohYk',
    lastMessage: 'Hey, are you still interested in the group buy for the mechanical keyboard?',
    time: '2m',
    unread: 1,
    online: true,
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5--_wY7WYQUjRjZQSXkgb6U8VfY2KQyyCPJQKWxEPtLNczZtUj2V_AaGEt9WFuFV4ASZiTye8hwptotg3Z1gMnuSNJBTgHlKS6kFC8ccowa231Uq0kGZgv9sZih-CybWzzSO0ylBOblzJ6R6hc3LTSp6gDL1r50XqyoDtShK2pgaeckbP8Lnuz0eqW5T1stmtf7fXSZg15AHONqW1KOnUYPD6yrQsoLCoTCmLrvUIE5msnBpoe-IcrB94fZvFkkKOF4c92nmI1Bk',
    lastMessage: 'The package just arrived! Thanks for organizing this deal.',
    time: '1h',
    unread: 0,
  },
  {
    id: 3,
    name: 'Marcus Knight',
    initials: 'MK',
    lastMessage: 'Can we split the shipping costs for the espresso machine?',
    time: '3h',
    unread: 3,
  },
  {
    id: 4,
    name: 'David Chen',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3iuOBB_jHfhQgBZ9B1y_YEtScVgflv0jpfoCb7Y5CesoeiBwvnSXBtJQpG1UUfE7cd54U90zALqL77Tu_xgnwQQlzcxxeALOW385dJqVjFQ4BT0FpYqimU5GEG5NG9hHD6lrPZJIKa3v0xfljzz3dcrgl6s_W_qePlkvmYGjLH8eRyVo51yZMN6KFe2np0wXyLpRTiRZjhDb1jItVWUr_-2lwuRmqLfcAAtczrSYfxkG8Lr__1IZqS_wAUP-MAnA93We_Y1OMglc',
    lastMessage: 'I sent the payment via escrow. Check your dashboard!',
    time: 'Yesterday',
    unread: 0,
  },
  {
    id: 5,
    name: 'Elena Rodriguez',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIXl7-LV6XBV3PHxv6jR6IZc2dZsxOJXElLHry0He4N7lGAPjbDUEnpQsoqmySR4zPtabHFvxfV-JJkBVbwQCALkVcU8pNB7NiEp-YGPxOzKfOIl5L_wczyBCgG7jZu4AdhrlUVrsIXAy6Dv68uyUygwJx5V8SKj8tpJX3SqhMYVnkqdMCz_x4Wfbk55Lp88rPqbutPvELWZDnidPUhtjM-Psu6hYktjSrXpvsMHhkHd-abia4sFxqp0Ry9d55dJLeENcaIriER_g',
    lastMessage: "Is the 'Smart Home' group buy still active for new members?",
    time: '2d',
    unread: 0,
  },
  {
    id: 6,
    name: 'Jordan Smith',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBRZW2MPatLmL-1_o55FZqNXhkq1Ehj7DsNMUEU7Lpg9thKDJqc_admEZE0IJKCMYkAkoHg7b0vCI2Scxv02A7TCAaWhwI1efp6XqedPXVnogrl9a_dDhGH3bcE3rD3NU4coCqAigPwch9OiAtBtJgjsmADii86twYzXbt6775AuUrHvzrmjTVlRAMZJ3bhls6VYmM8GIfHn7zLRM3ey4mKnJ-vTDxO5jVtGlAJQPxIY9Ta89cJDeKhVAKz3wUXT1YF70AzxIc0fHc',
    lastMessage: 'Let me know when the tracking number is available.',
    time: '3d',
    unread: 0,
  },
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

export const userProfile = {
  name: 'Alex Thompson',
  username: '@athompson_trade',
  avatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDxYC82Njb3f2wX1hJny-Pos0z6y-WkR_duhzaGBQkrvZtTuyyO0gBHIuTOfC-M1Mljo7AasiL2kltY_9LWV0-pAy0t89t6BzH8gEKnJXLPg5KfuFrN_QYL2bhpUqpTaosDjAiviBhoF2_CtRsjCOxT49oada7w81EaD5lRejZvhc5mZ0X4OFozz6NXGqE7kLrfG3tkSJVhARa6b_rB06s_owCCO9HW9GyJCLGmbiYjXU03ezoZ9tzOX2OeSDdm4RQtBYSmXhKx364',
  karma: '1.2k',
  trustScore: '98%',
  groupBuys: 24,
  isVerified: true,
  isIdentityVerified: true,
};

export const escrowBalance = {
  total: '$1,240.50',
  pending: '$450.00',
};

export const activeGroupBuys = [
  {
    id: 1,
    title: 'Sony WH-1000XM5 Bundle',
    progress: 85,
    daysRemaining: 4,
    price: '$299.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHSzbjdhRI05YZAiYGmahjS6HZ0SE0dpWJcykcotTly_kckKImJqRvtvmhzdcAZU5WwzKfee5dVemv6hU-LaCFK9X03u8q72O54IcKjfAeLo8CjaIK9TNgZ2RkFfL3ZJ16kzWX3U9yNO1J5f_kfDn77dOIoycyD3gtJg7rpd36addZc0pH74YGzEifyhlEYokUuOYeElH9MTwMLBfTOdDBnSagQg-v1Tyx4ps0Mwb7DwwTnsitJfbpVH-u4u6JHpEkxUNg-2JmEm4',
  },
  {
    id: 2,
    title: 'Mechanical Keyboard v2',
    progress: 40,
    daysRemaining: 12,
    price: '$120.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSgcZ_Sbwa3oggIWxR44iJ8ijInUjBN_Q6U9AvEJBrvaeOn4uqvzGRPhiD676pAfTYPwXyoLVn4qJE9l60QaYJ-qURqKoVHmpnZFhl4IzVP-_6-1vvEBPhl3d7vdOzMhzDsB-Og-XfOziRd8P9F-aYtCsqrsSDnO007MOhhkQ3oI2SSjblAVLpX9MsRYc3-N2Fg5Y5i9Ic3HP12tgLRDEem2thYE8OOCagTJ0Tskw17fAHdk3GLeoJSxwzj7f4b1k_HG1YAmQCiY',
  },
];

export const savedDeals = [
  {
    id: 1,
    title: 'E-Scooter 300W',
    price: '$499.00',
  },
  {
    id: 2,
    title: '4K Monitor 27"',
    price: '$280.00',
  },
  {
    id: 3,
    title: 'Espresso Machine',
    price: '$150.00',
  },
];

export const transactions = [
  {
    id: 1,
    title: 'Order #8821 Complete',
    date: 'Aug 14, 2023',
    amount: '-$240.00',
    type: 'expense',
    icon: 'shopping_cart',
  },
  {
    id: 2,
    title: 'Wallet Top-up',
    date: 'Aug 10, 2023',
    amount: '+$1,000.00',
    type: 'income',
    icon: 'account_balance_wallet',
  },
];
