import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const CATEGORIES = ['Electronics', 'Home & Living', 'Fashion', 'Software', 'Food & Beverage', 'Sports'];

const FULFILLMENT_OPTIONS = [
  'Min participants reached (Auto-release)',
  'Admin manual confirmation',
  'Creator confirms arrival of goods',
];

const inputCls =
  'bg-surface-container-low border border-outline-variant rounded-lg p-sm text-body-lg font-body-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all';

const labelCls = 'font-label-bold text-label-bold text-on-surface-variant';

const sectionCls =
  'bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-md shadow-sm';

export default function PostDealPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('Electronics');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    productUrl: '',
    description: '',
    price: ''
  });

  useEffect(() => {
    const dataParam = searchParams.get('data');
    if (dataParam) {
      try {
        const scrapedData = JSON.parse(decodeURIComponent(dataParam));
        setFormData({
          title: scrapedData.title || '',
          productUrl: scrapedData.url || '',
          description: scrapedData.description || '',
          price: scrapedData.price || ''
        });
      } catch (error) {
        console.error('Error parsing scraped data:', error);
      }
    }
  }, [searchParams]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate('/'), 2000);
  }

  function handleInputChange(field: string, value: string) {
    setFormData(prev => ({ ...prev, [field]: value }));
  }

  return (
    <div className="min-h-screen bg-background text-on-surface transition-colors duration-300">

      {/* Header */}
      <header className="w-full top-0 sticky z-40 bg-surface border-b border-surface-container-highest flex justify-between items-center px-margin-mobile h-14">
        <div className="flex items-center gap-sm">
          <Link
            to="/"
            className="p-sm rounded-full hover:bg-surface-container transition-colors"
            aria-label="Go back"
          >
            <span className="material-symbols-outlined text-on-surface">arrow_back</span>
          </Link>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
            Post a Deal
          </h1>
        </div>
        <span
          className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors"
          title="How it works"
        >
          info
        </span>
      </header>

      <main className="max-w-[640px] mx-auto px-margin-mobile pt-md pb-xl">
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
          Start a new group purchase by providing the deal details. Funds will be held in escrow until the conditions are met.
        </p>

        {/* Success Banner */}
        {submitted && (
          <div className="mb-md flex items-center gap-sm bg-secondary-container/20 border border-secondary-container p-sm rounded-xl animate-pulse">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
            <p className="font-label-bold text-label-bold text-on-surface">
              Deal created! Redirecting to feed…
            </p>
          </div>
        )}

        <form className="space-y-md" onSubmit={handleSubmit} noValidate>

          {/* ── Section 1: Deal Info ── */}
          <section className={sectionCls}>
            <div className="flex items-center gap-sm mb-md">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                shopping_bag
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Deal Information</h2>
            </div>

            <div className="space-y-md">
              <div className="flex flex-col gap-xs">
                <label htmlFor="deal-title" className={labelCls}>Deal Title / Name</label>
                <input
                  id="deal-title"
                  type="text"
                  required
                  placeholder="e.g., Premium Mechanical Keyboard Bulk Buy"
                  className={inputCls}
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-xs">
                <label htmlFor="product-url" className={labelCls}>Product URL</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                    link
                  </span>
                  <input
                    id="product-url"
                    type="url"
                    placeholder="https://example.com/product"
                    className={`${inputCls} pl-10 w-full`}
                    value={formData.productUrl}
                    onChange={(e) => handleInputChange('productUrl', e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <span className={labelCls}>Category</span>
                <div className="flex flex-wrap gap-sm pt-xs">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-md py-sm rounded-full font-label-bold text-label-bold transition-colors duration-150 ${
                        selectedCategory === cat
                          ? 'bg-primary text-on-primary'
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <label htmlFor="description" className={labelCls}>Description</label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Describe the item, shipping details, and why others should join this deal..."
                  className={`${inputCls} resize-none`}
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* ── Section 2: Buying Conditions ── */}
          <section className={sectionCls}>
            <div className="flex items-center gap-sm mb-md">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                group
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Buying Conditions</h2>
            </div>

            <div className="grid grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs">
                <label htmlFor="min-participants" className={labelCls}>Min. Participants</label>
                <input id="min-participants" type="number" min={2} defaultValue={5} className={inputCls} />
              </div>
              <div className="flex flex-col gap-xs">
                <label htmlFor="max-cap" className={labelCls}>Max. Cap</label>
                <input id="max-cap" type="number" placeholder="No limit" className={inputCls} />
              </div>
              <div className="flex flex-col gap-xs">
                <label htmlFor="expiry-date" className={labelCls}>Expiry Date</label>
                <input id="expiry-date" type="date" className={inputCls} />
              </div>
              <div className="flex flex-col gap-xs">
                <label htmlFor="price-per-person" className={labelCls}>Price per Person</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-bold text-label-bold">$</span>
                  <input
                    id="price-per-person"
                    type="number"
                    step="0.01"
                    min={0}
                    placeholder="0.00"
                    className={`${inputCls} pl-8 w-full`}
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 3: Escrow & Verification ── */}
          <section className={sectionCls}>
            <div className="flex items-center gap-sm mb-md">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Escrow &amp; Verification</h2>
            </div>

            <div className="space-y-md">
              <div className="flex flex-col gap-xs">
                <label htmlFor="wallet-address" className={labelCls}>
                  Creator's Wallet Address (Solana/Ethereum)
                </label>
                <div className="flex gap-sm">
                  <input
                    id="wallet-address"
                    type="text"
                    readOnly
                    defaultValue="8p6k...4Zq9"
                    className="flex-1 bg-surface-container border border-outline-variant rounded-lg p-sm text-body-lg font-body-lg text-on-surface-variant italic cursor-not-allowed"
                  />
                  <button
                    type="button"
                    className="bg-surface-container p-sm rounded-lg hover:bg-surface-container-high transition-colors"
                    aria-label="Show QR code"
                  >
                    <span className="material-symbols-outlined text-on-surface-variant">qr_code_2</span>
                  </button>
                </div>
                <p className="text-label-sm font-label-sm text-on-surface-variant mt-1 italic">
                  Linked to your verified profile.
                </p>
              </div>

              <div className="flex flex-col gap-xs">
                <label htmlFor="fulfillment" className={labelCls}>Fulfillment Condition</label>
                <div className="relative">
                  <select
                    id="fulfillment"
                    className={`${inputCls} w-full appearance-none pr-10`}
                  >
                    {FULFILLMENT_OPTIONS.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Trust Banner */}
              <div className="bg-secondary-container/20 border border-secondary-container/40 p-sm rounded-lg flex gap-sm items-start">
                <span
                  className="material-symbols-outlined text-secondary text-[20px] mt-0.5 shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  shield_with_heart
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Coorder Escrow ensures your funds are only released to the seller or returned to
                  participants based on the conditions selected above.
                </p>
              </div>
            </div>
          </section>

          {/* ── CTA Footer ── */}
          <div className="flex flex-col gap-sm pt-md">
            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-primary text-on-primary py-md rounded-xl font-headline-md text-headline-md shadow-md hover:brightness-110 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitted ? 'Creating…' : 'Create Group Buy'}
            </button>
            <button
              type="button"
              className="w-full bg-surface-container text-on-surface-variant py-sm rounded-xl font-label-bold text-label-bold border border-outline-variant hover:bg-surface-container-high transition-all"
            >
              Save Draft
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
