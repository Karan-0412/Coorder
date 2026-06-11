import { Header } from '../components';
import { Link } from 'react-router-dom';

interface GroupMember {
  id: number;
  name: string;
  avatar: string;
  joinedAt: string;
  status: 'confirmed' | 'pending';
  role?: string;
}

export default function GroupDetailsPage() {
  const members: GroupMember[] = [
    {
      id: 1,
      name: 'Alex Rivera',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbFrafJmmVIAGXC--XwoVR1t7swTRgRDY5mR6nWC-CnrXUGhO1_4NORfJfnMfwHlJ3JhVqi8I_zp9Q5SBg-v1MQT7-4ghn7w-OEt2TDRbS_KxwEw5FDZGYVlSNZaaz9C8MgZpc1jADcjYrGdZyzExv1qW2Y96k6kYedSy_uHxGgz-Tfh4wWaqAcDXefPOsl047nPMvyMeQcT9EN7T59O_qxyw3MD5G7vWZF1NeO0WKe40BtZyeXFwY2IKhnpVvF6YPcSa5liVANN0',
      joinedAt: 'Mar 15',
      status: 'confirmed',
      role: 'Group Leader'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEV5-D4jT-3-r5bF9A_FzWj9R9H-P1Zc5oK8Iq9y3VqQJ_3I_R4hB9Y2lK-A2K8b-8gH6Z8Wc2I5H2K7R9y7F3J4M0L5v8o_x_C3E5T0N8S5A1J7g6Q4c8N8P0Q5Q3P0Q5A9J4G8L0E8Q0E0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0',
      joinedAt: 'Mar 14',
      status: 'confirmed',
    },
    {
      id: 3,
      name: 'Jordan Lee',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEV5-D4jT-3-r5bF9A_FzWj9R9H-P1Zc5oK8Iq9y3VqQJ_3I_R4hB9Y2lK-A2K8b-8gH6Z8Wc2I5H2K7R9y7F3J4M0L5v8o_x_C3E5T0N8S5A1J7g6Q4c8N8P0Q5Q3P0Q5A9J4G8L0E8Q0E0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0C0B0A0',
      joinedAt: 'Mar 13',
      status: 'pending',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header />

      <main className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin-desktop py-6 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Hero & Bento Grid */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Breadcrumbs & Header */}
          <div>
            <Link to="/" className="text-primary hover:underline font-label-bold text-sm mb-2 inline-block flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Back to Feed
            </Link>
            <h1 className="font-headline-lg text-headline-lg mb-2">ErgoPro X9 Mechanical Keyboard</h1>
            <div className="flex items-center gap-2 text-on-surface-variant text-sm">
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold uppercase">Active</span>
              <span>•</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">verified_user</span> Escrow Protected</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-sm">
            <img 
              alt="ErgoPro X9" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGYsEI_hskevDIZ3GNTB5wnekX4JmnMq2W_x2Aqzfp1z_xBRwL_ZxOdkBWqbpC9uYj0AWaRmDrNYlSvVpgxi78ddgCQ2pIpx7mAiTrnkDIMVSBGGX6FCLmJIoXFYFdJWHb7ex0enp_b07gLT5jeAYu7E_SalcZGrwO_xrLXCeqLD31HfeCVCNyGHnk7Vq2xbLMGwAstH6_QFcbkVMeLtDT0uL4ke0b1Ih0g8zIqABJdwuHKfDwoPKRzbZXQsKFJFQP_BV1PFm69G0" 
            />
          </div>

          {/* Bento Grid Status */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 flex flex-col items-center justify-center text-center col-span-2 md:col-span-1 shadow-sm">
              <span className="material-symbols-outlined text-tertiary mb-2 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              <p className="font-headline-md text-headline-md text-tertiary mb-1">7/10</p>
              <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Members</p>
            </div>
            
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 flex flex-col items-center justify-center text-center shadow-sm">
              <span className="material-symbols-outlined text-primary mb-2 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
              <p className="font-headline-md text-headline-md text-primary mb-1">$149</p>
              <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Target Price</p>
            </div>

            <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 flex flex-col items-center justify-center text-center shadow-sm">
              <span className="material-symbols-outlined text-secondary mb-2 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>savings</span>
              <p className="font-headline-md text-headline-md text-secondary mb-1">35%</p>
              <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Total Saving</p>
            </div>

            <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 flex flex-col items-center justify-center text-center col-span-2 md:col-span-1 shadow-sm">
              <span className="material-symbols-outlined text-error mb-2 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
              <p className="font-headline-md text-headline-md text-error mb-1">48h</p>
              <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Remaining</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm">
            <h3 className="font-headline-sm text-headline-sm mb-3">About This Deal</h3>
            <p className="text-body-md text-on-surface-variant mb-4 leading-relaxed">
              We've secured a direct line with the manufacturer for the highly anticipated ErgoPro X9 Mechanical Keyboard. By buying in bulk (minimum 10 units), we bypass retail markup entirely.
            </p>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Specs:
              <br/>- Gateron Pro Yellow Switches (Pre-lubed)
              <br/>- PBT Double-shot Keycaps
              <br/>- Gasket Mount Design
              <br/>- Tri-mode connectivity (Wired/BT/2.4G)
            </p>
          </div>

          {/* Member Checklist */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-headline-sm text-headline-sm">Participants</h3>
              <span className="text-[12px] font-bold text-primary bg-primary-container/30 px-2 py-1 rounded">3 Spots Left</span>
            </div>
            
            <div className="space-y-3">
              {members.map(member => (
                <div key={member.id} className="flex items-center justify-between p-3 bg-surface rounded-lg border border-outline-variant/20 hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <img alt={member.name} className="w-10 h-10 rounded-full object-cover border border-outline-variant/30" src={member.avatar} />
                    <div>
                      <p className="font-label-bold text-label-bold flex items-center gap-2">
                        {member.name}
                        {member.role && <span className="bg-tertiary/10 text-tertiary text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">{member.role}</span>}
                      </p>
                      <p className="text-[10px] text-on-surface-variant">Joined {member.joinedAt}</p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${member.status === 'confirmed' ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant border border-outline-variant/30'}`}>
                    <span className="material-symbols-outlined text-[16px] font-bold">
                      {member.status === 'confirmed' ? 'check' : 'pending'}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Empty Slots */}
              {[...Array(3)].map((_, i) => (
                <div key={`empty-${i}`} className="flex items-center justify-between p-3 bg-surface-container-lowest border border-dashed border-outline-variant/50 rounded-lg opacity-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-outline-variant">person_add</span>
                    </div>
                    <div>
                      <p className="font-label-bold text-label-bold text-outline-variant">Empty Spot</p>
                      <p className="text-[10px] text-on-surface-variant">Waiting for member</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-outline-variant/30"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Action Card */}
        <div className="hidden lg:block relative">
          <div className="sticky top-24 bg-surface-container-lowest p-6 rounded-xl border border-primary/20 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <h3 className="font-headline-md text-headline-md mb-2">Join Group Buy</h3>
            <p className="text-sm text-on-surface-variant mb-6">Your funds will be held securely in escrow until the group reaches its goal.</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                <span className="text-on-surface-variant">Retail Price</span>
                <span className="line-through">$229.00</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                <span className="font-label-bold">Group Price</span>
                <span className="font-headline-md text-primary">$149.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant">Estimated Shipping</span>
                <span className="text-sm">May 15</span>
              </div>
            </div>

            <button className="w-full bg-primary text-white py-4 rounded-xl font-headline-sm text-headline-sm shadow-lg hover:opacity-90 active:scale-95 transition-all shimmer mb-4">
              Commit $149.00
            </button>
            <p className="text-center text-[11px] text-on-surface-variant flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              Secure Escrow Payment
            </p>
          </div>
        </div>

      </main>

      {/* Mobile Sticky Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant/30 p-4 pb-safe shadow-[0_-8px_24px_rgba(0,0,0,0.08)] z-50">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider mb-1">Group Price</p>
            <p className="font-headline-md text-primary">$149.00 <span className="text-sm text-on-surface-variant line-through font-normal">$229</span></p>
          </div>
          <button className="flex-1 bg-primary text-white py-3 px-6 rounded-xl font-label-bold text-label-bold shadow-lg active:scale-95 transition-transform shimmer">
            Commit Now
          </button>
        </div>
      </div>
    </div>
  );
}
