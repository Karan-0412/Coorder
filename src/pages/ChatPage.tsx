import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChatBubble, Header } from '../components';
import { conversations, conversationMessages, imageUrls } from '../data/mockData';
import type { ChatMessage, Conversation } from '../types';

// ─── shared types ────────────────────────────────────────────────────────────

const FILTER_CHIPS = ['All', 'Unread', 'Orders', 'Requests'] as const;
type FilterChip = (typeof FILTER_CHIPS)[number];

// ─── Conversation list item ───────────────────────────────────────────────────

interface ConversationItemProps {
  conv: Conversation;
  isActive: boolean;
  onClick: () => void;
}

function ConversationItem({ conv, isActive, onClick }: ConversationItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left flex items-center px-gutter py-3 transition-colors duration-150 border-b border-surface-container-highest last:border-b-0
        ${isActive
          ? 'bg-primary/10 border-l-[3px] border-l-primary'
          : 'hover:bg-surface-container-low active:bg-surface-container-high border-l-[3px] border-l-transparent'
        }`}
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        {conv.avatarUrl ? (
          <img
            src={conv.avatarUrl}
            alt={conv.name}
            className="w-11 h-11 rounded-full object-cover border border-outline-variant"
          />
        ) : (
          <div className="w-11 h-11 rounded-full bg-tertiary-container border border-outline-variant flex items-center justify-center font-bold text-sm text-on-tertiary-container">
            {conv.initials}
          </div>
        )}
        {conv.online && (
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-surface rounded-full" />
        )}
      </div>

      {/* Text */}
      <div className="ml-3 flex-1 min-w-0">
        <div className="flex justify-between items-baseline">
          <span className={`text-[14px] font-semibold truncate ${isActive ? 'text-primary' : 'text-on-surface'}`}>
            {conv.name}
          </span>
          <span className={`font-label-sm text-label-sm shrink-0 ml-2 ${conv.unread > 0 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
            {conv.time}
          </span>
        </div>
        <p className={`text-[11px] truncate mt-0.5 ${conv.unread > 0 ? 'text-on-surface font-semibold' : 'text-on-surface-variant'}`}>
          {conv.lastMessage}
        </p>
      </div>

      {/* Unread badge */}
      {conv.unread > 0 && (
        <div className="ml-2 shrink-0 w-5 h-5 bg-primary text-on-primary text-[10px] font-bold flex items-center justify-center rounded-full">
          {conv.unread}
        </div>
      )}
    </button>
  );
}

// ─── Chat panel (right side) ──────────────────────────────────────────────────

interface ChatPanelProps {
  conv: Conversation;
  onBack?: () => void; // only passed on mobile
}

function ChatPanel({ conv, onBack }: ChatPanelProps) {
  const seed = conversationMessages[conv.id] ?? [];
  const [messages, setMessages] = useState<ChatMessage[]>(seed);
  const [inputValue, setInputValue] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  // Reset messages when switching conversation
  useEffect(() => {
    setMessages(conversationMessages[conv.id] ?? []);
    setInputValue('');
  }, [conv.id]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: 'user',
        message: inputValue.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setInputValue('');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Sub-header */}
      <div className="shrink-0 flex justify-between items-center px-gutter h-14 border-b border-surface-container-highest bg-surface transition-colors duration-300">
        <div className="flex items-center gap-sm">
          {/* Back button – only shown on mobile overlay */}
          {onBack && (
            <button
              onClick={onBack}
              className="p-1 rounded-full hover:bg-surface-container-low text-on-surface-variant hover:text-primary transition-colors mr-1"
              aria-label="Back"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          )}

          <div className="relative">
            {conv.avatarUrl ? (
              <img src={conv.avatarUrl} alt={conv.name} className="w-9 h-9 rounded-full object-cover border border-outline-variant" />
            ) : (
              <div className="w-9 h-9 rounded-full bg-tertiary-container border border-outline-variant flex items-center justify-center font-bold text-sm text-on-tertiary-container">
                {conv.initials}
              </div>
            )}
            {conv.online && (
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-surface rounded-full" />
            )}
          </div>

          <div className="flex flex-col leading-tight">
            <span className="font-bold text-sm text-on-surface">{conv.name}</span>
            <span className="text-[10px] font-medium text-primary">
              {conv.online ? 'Online' : `Last seen ${conv.time} ago`}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-md">
          <button className="text-on-surface-variant hover:text-primary transition-colors" aria-label="Search">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors" aria-label="More">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
      </div>

      {/* Deal context card */}
      <div className="shrink-0 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 px-md py-2">
        <div className="flex gap-3 items-center bg-surface-container-lowest p-2.5 rounded-xl border border-outline-variant/30 shadow-sm cursor-pointer hover:border-primary/30 transition-colors">
          <img alt="Product" className="w-12 h-12 rounded-lg object-cover shrink-0" src={imageUrls.smartHome} />
          <div className="flex-1 min-w-0">
            <h4 className="font-label-bold text-label-bold line-clamp-1">Ultimate Smart Home Bundle</h4>
            <p className="text-[11px] text-on-surface-variant">3 Spots Left · $59.00 / ea</p>
          </div>
          <Link
            to="/group/1"
            className="shrink-0 text-primary font-label-bold text-[11px] bg-primary/10 px-2.5 py-1 rounded-lg hover:bg-primary/20 transition-colors"
          >
            View
          </Link>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-background">
        <div className="p-md space-y-4 max-w-[850px] mx-auto">
          <div className="text-center pt-2">
            <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container-highest/40 px-3 py-1 rounded-full">
              TODAY
            </span>
          </div>
          {messages.map((msg, index) => {
            const prevMsg = index > 0 ? messages[index - 1] : null;
            const showName = !prevMsg || prevMsg.sender !== msg.sender;
            return (
              <ChatBubble
                key={msg.id}
                sender={msg.sender}
                message={msg.message}
                timestamp={msg.timestamp}
                senderName={msg.senderName}
                avatar={msg.avatar}
                showName={showName}
              />
            );
          })}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input bar */}
      <div className="shrink-0 bg-surface border-t border-outline-variant/30 px-sm py-sm shadow-[0_-4px_12px_rgba(0,0,0,0.04)]">
        <div className="flex items-center gap-2 mx-auto">
          <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant/20 rounded-full transition-colors" aria-label="Attach">
            <span className="material-symbols-outlined">add_circle</span>
          </button>

          <div className="flex-1 bg-surface-container-high rounded-full flex items-center px-4 py-2 border border-outline-variant/30 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all">
            <input
              type="text"
              placeholder="Message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
              className="flex-1 bg-transparent font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant outline-none"
            />
            <button className="text-on-surface-variant hover:text-primary transition-colors ml-2" aria-label="Emoji">
              <span className="material-symbols-outlined text-[20px]">sentiment_satisfied</span>
            </button>
          </div>

          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            aria-label="Send"
            className={`p-3 rounded-full flex items-center justify-center transition-all shadow-sm ${
              inputValue.trim()
                ? 'bg-primary text-white hover:opacity-90 active:scale-95'
                : 'bg-surface-container text-on-surface-variant opacity-50 cursor-not-allowed'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Empty right-panel placeholder ───────────────────────────────────────────

function EmptyPane() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 text-on-surface-variant select-none">
      <span className="material-symbols-outlined text-[64px] opacity-20">forum</span>
      <p className="font-body-lg text-body-lg opacity-30">Select a conversation to start chatting</p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ChatPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterChip>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState<number | null>(conversations[0]?.id ?? null);

  const selectedConv = conversations.find((c) => c.id === selectedId) ?? null;

  const filtered = conversations.filter((c) => {
    const matchesSearch =
      searchQuery === '' ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.lastMessage.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === 'All' || (activeFilter === 'Unread' && c.unread > 0);
    return matchesSearch && matchesFilter;
  });

  // On mobile tapping a conversation navigates to the full-screen detail page
  const handleMobileSelect = (id: number) => navigate(`/chat/${id}`);

  return (
    <div className="flex flex-col h-screen bg-surface text-on-surface overflow-hidden transition-colors duration-300">

      {/* ── Top app bar (shared — carries desktop nav links + dark toggle) ── */}
      <Header />

      {/* ── Body (fills remaining height) ── */}
      <div className="flex flex-1 overflow-hidden min-h-0">

        {/* ═══ LEFT PANEL – conversation list ══════════════════════════════════
            Mobile:  full width, clicking navigates to /chat/:id
            Desktop: fixed 320px column, clicking updates right panel in-place  */}
        <aside className="
          w-full md:w-[400px] md:shrink-0
          flex flex-col
          border-r border-surface-container-highest
          overflow-hidden
          md:flex
          bg-surface transition-colors duration-300
        ">
          {/* Search */}
          <div className="shrink-0 px-margin-mobile pt-md pb-sm">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[20px]">search</span>
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface-container border-none rounded-xl py-2.5 pl-10 pr-4 font-body-lg text-body-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
          </div>

          {/* Filter chips */}
          <div className="shrink-0 flex px-margin-mobile gap-2 pb-sm overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {FILTER_CHIPS.map((chip) => (
              <button
                key={chip}
                onClick={() => setActiveFilter(chip)}
                className={`px-4 py-1 rounded-full font-label-bold text-label-bold whitespace-nowrap transition-colors ${
                  activeFilter === chip
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {chip}
              </button>
            ))}
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto pb-16 md:pb-0">
            {filtered.length > 0 ? (
              filtered.map((conv) => (
                /* Mobile: navigate away. Desktop: select in panel */
                <div key={conv.id} className="md:hidden">
                  <button
                    onClick={() => handleMobileSelect(conv.id)}
                    className="w-full text-left flex items-center px-gutter py-3 transition-colors duration-150 border-b border-surface-container-highest hover:bg-surface-container-low active:bg-surface-container-high border-l-[3px] border-l-transparent"
                  >
                    <MobileConvRow conv={conv} />
                  </button>
                </div>
              ))
            ) : null}

            {/* Desktop list (hidden on mobile) */}
            <div className="hidden md:block">
              {filtered.length > 0 ? (
                filtered.map((conv) => (
                  <ConversationItem
                    key={conv.id}
                    conv={conv}
                    isActive={conv.id === selectedId}
                    onClick={() => setSelectedId(conv.id)}
                  />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-xl text-on-surface-variant">
                  <span className="material-symbols-outlined text-[48px] mb-2 opacity-40">search_off</span>
                  <p className="font-body-lg text-body-lg opacity-40">No conversations found</p>
                </div>
              )}
            </div>

            {/* Mobile empty state */}
            {filtered.length === 0 && (
              <div className="md:hidden flex flex-col items-center justify-center py-xl text-on-surface-variant">
                <span className="material-symbols-outlined text-[48px] mb-2 opacity-40">search_off</span>
                <p className="font-body-lg text-body-lg opacity-40">No conversations found</p>
              </div>
            )}
          </div>

          {/* New message FAB (inside panel on desktop) */}
          <div className="shrink-0 hidden md:flex justify-end px-md py-3 border-t border-surface-container-highest">
            <button
              className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full font-label-bold text-label-bold shadow hover:opacity-90 active:scale-95 transition-all"
              aria-label="New message"
            >
              <span className="material-symbols-outlined text-[18px]">edit_square</span>
              New Message
            </button>
          </div>
        </aside>

        {/* ═══ RIGHT PANEL – chat view (desktop only) ══════════════════════════ */}
        <main className="hidden md:flex flex-col flex-1 overflow-hidden bg-background">
          {selectedConv ? <ChatPanel conv={selectedConv} /> : <EmptyPane />}
        </main>
      </div>

      {/* ── Mobile FAB ── */}
      <button
        className="md:hidden fixed bottom-20 right-4 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95 z-40"
        aria-label="New message"
      >
        <span className="material-symbols-outlined">edit_square</span>
      </button>
    </div>
  );
}

// Thin helper for the mobile list rows (avoids duplicating JSX)
function MobileConvRow({ conv }: { conv: Conversation }) {
  return (
    <>
      <div className="relative shrink-0">
        {conv.avatarUrl ? (
          <img src={conv.avatarUrl} alt={conv.name} className="w-11 h-11 rounded-full object-cover border border-outline-variant" />
        ) : (
          <div className="w-11 h-11 rounded-full bg-tertiary-container border border-outline-variant flex items-center justify-center font-bold text-sm text-on-tertiary-container">
            {conv.initials}
          </div>
        )}
        {conv.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-surface rounded-full" />}
      </div>
      <div className="ml-3 flex-1 min-w-0">
        <div className="flex justify-between items-baseline">
          <span className="text-[13px] font-semibold text-on-surface truncate">{conv.name}</span>
          <span className={`font-label-sm text-label-sm shrink-0 ml-2 ${conv.unread > 0 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>{conv.time}</span>
        </div>
        <p className={`text-[11px] truncate mt-0.5 ${conv.unread > 0 ? 'text-on-surface font-semibold' : 'text-on-surface-variant'}`}>
          {conv.lastMessage}
        </p>
      </div>
      {conv.unread > 0 && (
        <div className="ml-2 shrink-0 w-5 h-5 bg-primary text-on-primary text-[10px] font-bold flex items-center justify-center rounded-full">{conv.unread}</div>
      )}
    </>
  );
}
