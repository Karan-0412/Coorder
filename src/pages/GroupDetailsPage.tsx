import { Link } from 'react-router-dom';
import { Header } from '../components';
import { groupMembers, imageUrls } from '../data/mockData';

const cardCls = 'bg-surface-container-lowest dark:bg-surface-container rounded-xl border border-outline-variant/30 dark:border-surface-container-high shadow-sm';

export default function GroupDetailsPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface transition-colors duration-300">
      <Header />

      <main className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin-desktop py-6 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ── Left Column ── */}
        <div className="lg:col-span-2 space-y-6">

          {/* Breadcrumb */}
          <div>
            <Link to="/" className="text-primary dark:text-primary-fixed-dim hover:underline font-label-bold text-sm mb-2 inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Back to Feed
            </Link>
            <h1 className="font-headline-lg text-headline-lg mb-2">ErgoPro X9 Mechanical Keyboard</h1>
            <div className="flex items-center gap-2 text-on-surface-variant dark:text-outline text-sm">
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold uppercase">Active</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                Escrow Protected
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-sm">
            <img alt="ErgoPro X9" className="w-full h-full object-cover" src={imageUrls.keyboard} />
          </div>

          {/* Bento Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: 'groups',   color: 'text-tertiary',   value: '7/10', label: 'Members' },
              { icon: 'payments', color: 'text-primary', value: '$149', label: 'Target Price' },
              { icon: 'savings',  color: 'text-secondary',  value: '35%',  label: 'Total Saving' },
              { icon: 'timer',    color: 'text-error',      value: '48h',  label: 'Remaining' },
            ].map((stat) => (
              <div key={stat.label} className={`${cardCls} p-4 flex flex-col items-center justify-center text-center`}>
                <span className={`material-symbols-outlined ${stat.color} mb-2 text-3xl`} style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
                <p className={`font-headline-md text-headline-md ${stat.color} mb-1`}>{stat.value}</p>
                <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className={`${cardCls} p-6`}>
            <h3 className="font-headline-md text-headline-md mb-3">About This Deal</h3>
            <p className="text-body-md text-on-surface-variant mb-4 leading-relaxed">
              We've secured a direct line with the manufacturer for the highly anticipated ErgoPro X9 Mechanical Keyboard. By buying in bulk (minimum 10 units), we bypass retail markup entirely.
            </p>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Specs:<br />
              - Gateron Pro Yellow Switches (Pre-lubed)<br />
              - PBT Double-shot Keycaps<br />
              - Gasket Mount Design<br />
              - Tri-mode connectivity (Wired/BT/2.4G)
            </p>
          </div>

          {/* Participants */}
          <div className={`${cardCls} p-6`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-headline-md text-headline-md">Participants</h3>
              <span className="text-[12px] font-bold text-primary bg-primary/10 px-2 py-1 rounded">3 Spots Left</span>
            </div>
            <div className="space-y-3">
              {groupMembers.map(member => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-3 bg-surface rounded-lg border border-outline-variant/20 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img alt={member.name} className="w-10 h-10 rounded-full object-cover border border-outline-variant/30" src={member.avatar} />
                    <div>
                      <p className="font-label-bold text-label-bold flex items-center gap-2">
                        {member.name}
                        {member.role && (
                          <span className="bg-tertiary/10 text-tertiary text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">{member.role}</span>
                        )}
                      </p>
                      <p className="text-[10px] text-on-surface-variant">Joined {member.joinedAt}</p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${member.status === 'confirmed' ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant border border-outline-variant/30'}`}>
                    <span className="material-symbols-outlined text-[16px]">
                      {member.status === 'confirmed' ? 'check' : 'pending'}
                    </span>
                  </div>
                </div>
              ))}

              {/* Empty slots */}
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
                  <div className="w-6 h-6 rounded-full border-2 border-outline-variant/30" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right Column: Action Card ── */}
        <div className="hidden lg:block relative">
          <div className={`sticky top-24 ${cardCls} p-6 border-primary/20 shadow-[0_8px_24px_rgba(0,0,0,0.08)]`}>
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
            <button className="w-full bg-primary text-white py-4 rounded-xl font-headline-md shadow-lg hover:opacity-90 active:scale-95 transition-all shimmer mb-4">
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
      <div className="lg:hidden fixed bottom-16 left-0 w-full bg-surface-container-lowest border-t border-outline-variant/30 p-4 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] z-40">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider mb-1">Group Price</p>
            <p className="font-headline-md text-primary">
              $149.00 <span className="text-sm text-on-surface-variant line-through font-normal">$229</span>
            </p>
          </div>
          <button className="flex-1 bg-primary text-white py-3 px-6 rounded-xl font-label-bold shadow-lg active:scale-95 transition-transform shimmer">
            Commit Now
          </button>
        </div>
      </div>
    </div>
  );
}
