import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChatBubble } from '../components';
import { conversations, conversationMessages, imageUrls } from '../data/mockData';
import type { ChatMessage } from '../types';

export default function ConversationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const convId = Number(id);

  const conv = conversations.find((c) => c.id === convId);
  const seedMessages = conversationMessages[convId] ?? [];

  const [messages, setMessages] = useState<ChatMessage[]>(seedMessages);
  const [inputValue, setInputValue] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMsg: ChatMessage = {
      id: messages.length + 1,
      sender: 'user',
      message: inputValue.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInputValue('');
  };

  if (!conv) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background text-on-surface">
        <span className="material-symbols-outlined text-[48px] text-on-surface-variant">
          chat_error
        </span>
        <p className="font-body-lg text-body-lg text-on-surface-variant">Conversation not found.</p>
        <Link to="/chat" className="text-primary font-label-bold text-label-bold underline">
          Back to Messages
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col transition-colors duration-300">
      {/* ── Sub-header ── */}
      <div className="w-full top-0 sticky z-30 bg-surface border-b border-surface-container-highest transition-colors duration-300">
        <div className="flex justify-between items-center px-gutter py-sm max-w-[800px] mx-auto">
          {/* Left: back + contact info */}
          <div className="flex items-center gap-sm">
            <Link
              to="/chat"
              className="text-on-surface-variant p-1 rounded-full hover:bg-surface-container-low hover:text-primary transition-colors"
              aria-label="Back to messages"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>

            <div className="flex items-center gap-sm">
              <div className="relative">
                {conv.avatarUrl ? (
                  <img
                    src={conv.avatarUrl}
                    alt={conv.name}
                    className="w-9 h-9 rounded-full object-cover border border-outline-variant"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-tertiary-container border border-outline-variant flex items-center justify-center font-bold text-sm text-on-tertiary-container">
                    {conv.initials}
                  </div>
                )}
                {conv.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-surface rounded-full" />
                )}
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-sm leading-tight">{conv.name}</span>
                <span className="text-[10px] font-medium text-primary leading-tight">
                  {conv.online ? 'Online' : 'Last seen ' + conv.time + ' ago'}
                </span>
              </div>
            </div>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-md">
            <button
              className="text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Search"
            >
              <span className="material-symbols-outlined">search</span>
            </button>
            <button
              className="text-on-surface-variant hover:text-primary transition-colors"
              aria-label="More options"
            >
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Main scrollable area ── */}
      <main className="flex-1 overflow-y-auto bg-background pb-24">
        {/* Deal context card */}
        <div className="sticky top-0 z-20 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 p-md max-w-[800px] mx-auto">
          <div className="flex gap-4 items-center bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/30 shadow-sm cursor-pointer hover:border-primary/30 transition-colors">
            <img
              alt="Product"
              className="w-16 h-16 rounded-lg object-cover shrink-0"
              src={imageUrls.smartHome}
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-label-bold text-label-bold line-clamp-1">
                Ultimate Smart Home Bundle
              </h4>
              <p className="text-[12px] text-on-surface-variant line-clamp-1">
                3 Spots Left | $59.00 / ea
              </p>
            </div>
            <Link
              to="/group/1"
              className="shrink-0 text-primary font-label-bold text-[12px] bg-primary/10 px-3 py-1.5 rounded-lg hover:bg-primary/20 transition-colors"
            >
              View
            </Link>
          </div>
        </div>

        {/* Messages */}
        <div className="p-md space-y-4 max-w-[800px] mx-auto mt-4">
          <div className="text-center">
            <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container-highest/30 px-3 py-1 rounded-full">
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

          {/* Invisible anchor for auto-scroll */}
          <div ref={bottomRef} />
        </div>
      </main>

      {/* ── Sticky input bar ── */}
      <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant/30 p-sm shadow-[0_-4px_12px_rgba(0,0,0,0.06)] z-30">
        <div className="max-w-[800px] mx-auto flex items-center gap-2">
          <button
            className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/20 rounded-full"
            aria-label="Attach"
          >
            <span className="material-symbols-outlined">add_circle</span>
          </button>

          <div className="flex-1 bg-surface-container-high rounded-full flex items-center px-4 py-2 border border-outline-variant/30 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all">
            <input
              type="text"
              placeholder="Message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              className="flex-1 bg-transparent font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant outline-none"
            />
            <button
              className="text-on-surface-variant hover:text-primary transition-colors ml-2"
              aria-label="Emoji"
            >
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
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              send
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
