import { Header } from '../components';
import { Link } from 'react-router-dom';

interface GroupMember {
  id: number;
  name: string;
  avatar: string;
  joinedAt: string;
  status: 'pending' | 'confirmed';
}

export default function GroupDetailsPage() {
  const members: GroupMember[] = [
    {
      id: 1,
      name: 'Sarah Chen',
      avatar: 'https://via.placeholder.com/40',
      joinedAt: 'Mar 15, 2024',
      status: 'confirmed',
    },
    {
      id: 2,
      name: 'Alex Rivera',
      avatar: 'https://via.placeholder.com/40',
      joinedAt: 'Mar 14, 2024',
      status: 'confirmed',
    },
    {
      id: 3,
      name: 'Jordan Lee',
      avatar: 'https://via.placeholder.com/40',
      joinedAt: 'Mar 13, 2024',
      status: 'pending',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header />

      <main className="max-w-[800px] mx-auto px-margin-mobile md:px-margin-desktop py-6">
        {/* Hero Section */}
        <div className="relative h-[300px] rounded-2xl overflow-hidden mb-6 shadow-sm">
          <img
            alt="Deal Hero"
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-white mb-2">
                Smart Home Bundle Mega Deal
              </h1>
              <div className="flex gap-2">
                <span className="bg-primary text-white text-[10px] px-2 py-1 rounded font-bold uppercase">
                  Group Active
                </span>
                <span className="bg-white/20 text-white text-[10px] px-2 py-1 rounded font-bold backdrop-blur">
                  7/10 members
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Deal Info */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4">
            <p className="text-label-sm text-on-surface-variant uppercase mb-2">Price Per Unit</p>
            <p className="font-headline-md text-headline-md text-primary">$59.00</p>
            <p className="text-[10px] text-on-surface-variant line-through">$120.00</p>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4">
            <p className="text-label-sm text-on-surface-variant uppercase mb-2">Total Saved</p>
            <p className="font-headline-md text-headline-md text-secondary">$427.00</p>
            <p className="text-[10px] text-on-surface-variant">For 7 members</p>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4">
            <p className="text-label-sm text-on-surface-variant uppercase mb-2">Spots Remaining</p>
            <p className="font-headline-md text-headline-md text-tertiary">3/10</p>
            <p className="text-[10px] text-on-surface-variant">Limited time</p>
          </div>
        </div>

        {/* Group Members */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-6 mb-6">
          <h2 className="font-headline-md text-headline-md mb-4">Group Members ({members.length})</h2>
          <div className="space-y-3">
            {members.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-3 bg-surface rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <img
                    alt={member.name}
                    src={member.avatar}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-label-bold text-label-bold">{member.name}</p>
                    <p className="text-[10px] text-on-surface-variant">Joined {member.joinedAt}</p>
                  </div>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-1 rounded ${
                    member.status === 'confirmed'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-surface-container text-on-surface-variant'
                  }`}
                >
                  {member.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-6">
          <h2 className="font-headline-md text-headline-md mb-4">About This Deal</h2>
          <p className="text-body-md text-on-surface-variant mb-4">
            This is an amazing smart home bundle that includes 4 smart plugs, a central hub, and
            complete installation guides. All items are brand new and factory sealed. Escrow
            protection ensures complete buyer security.
          </p>
          <div className="flex gap-3">
            <button className="flex-1 bg-primary text-on-primary px-4 py-2 rounded-lg font-label-bold hover:opacity-80 transition-opacity">
              Join Group
            </button>
            <Link
              to="/"
              className="flex-1 bg-surface-container border border-outline-variant text-on-surface px-4 py-2 rounded-lg font-label-bold hover:opacity-80 transition-opacity text-center"
            >
              Back to Feed
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
