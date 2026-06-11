import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, ChatBubble } from '../components';

interface Message {
  id: number;
  sender: 'user' | 'peer';
  message: string;
  timestamp: string;
  senderName?: string;
  avatar?: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'peer',
      message: "Hey! Are you interested in joining the group buy?",
      timestamp: '10:30 AM',
      senderName: 'Alex Rivera',
      avatar: 'https://via.placeholder.com/32',
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
      avatar: 'https://via.placeholder.com/32',
    },
    {
      id: 4,
      sender: 'user',
      message: "Perfect! Count me in. What's the final price?",
      timestamp: '10:34 AM',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      message: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col">
      <Header />

      <div className="sticky top-16 z-30 w-full bg-surface/90 blur-nav border-b border-surface-container-highest">
        <div className="flex justify-between items-center px-gutter py-sm max-w-full">
          <div className="flex items-center gap-sm">
            <Link to="/" className="text-on-surface-variant p-1 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div className="flex items-center gap-sm">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high border border-outline/10">
                <img
                  alt="User Profile"
                  src="https://via.placeholder.com/32"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm">Smart Home Group</span>
                <span className="text-[10px] font-medium text-primary">10 members online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-md">
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto bg-background pb-24">
        {/* Sticky Deal Context Card */}
        <div className="sticky top-0 z-20 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 p-md mx-auto max-w-[800px]">
          <div className="flex gap-4 items-center bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/30 shadow-sm cursor-pointer hover:border-primary/30 transition-colors">
            <img 
              alt="Product" 
              className="w-16 h-16 rounded-lg object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvBysmIp848sGcF4LaKhQeMOdpE9lpNOkd6exqrQv6zi3s_YhEabCvOfHY7oRJBLWPpsnP74ndQtfFLKJakOL-RrGrqEhvwOMj39Q7PsyKyTuZHg3CMMiCuAHlTCDOz7qsOlmc6wCfVL_t0yXWqwr5rn3_P-7l4h0RxC5raKbEMDWPsDQdbowPO_SAQK-Xtgc3RyYIOkawSUA-G7C7CK44HfhsD4TMTXYOV83zcqx5kxEIzrMNfg1idwz0dl12-t-NUEZz8N_iw2c" 
            />
            <div className="flex-1">
              <h4 className="font-label-bold text-label-bold line-clamp-1">Ultimate Smart Home Bundle</h4>
              <p className="text-[12px] text-on-surface-variant line-clamp-1">3 Spots Left • $59.00 / ea</p>
            </div>
            <button className="text-primary font-label-bold text-[12px] bg-primary/10 px-3 py-1.5 rounded-lg">View</button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="p-md space-y-4 max-w-[800px] mx-auto mt-4">
          <div className="text-center">
            <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container-highest/30 px-3 py-1 rounded-full">TODAY</span>
          </div>

          {messages.map((msg) => (
            <ChatBubble
              key={msg.id}
              sender={msg.sender}
              message={msg.message}
              timestamp={msg.timestamp}
              senderName={msg.senderName}
              avatar={msg.avatar}
            />
          ))}
        </div>
      </main>

      {/* Sticky Input Area */}
      <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant/30 p-sm pb-safe shadow-[0_-4px_12px_rgba(0,0,0,0.06)] z-30">
        <div className="max-w-[800px] mx-auto flex items-center gap-2">
          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/20 rounded-full">
            <span className="material-symbols-outlined">add_circle</span>
          </button>
          <div className="flex-1 bg-surface-container-high rounded-full flex items-center px-4 py-2 border border-outline-variant/30 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all">
            <input 
              type="text" 
              placeholder="Message group..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              className="flex-1 bg-transparent text-body-md text-on-surface placeholder:text-on-surface-variant outline-none" 
            />
            <button className="text-on-surface-variant hover:text-primary transition-colors ml-2">
              <span className="material-symbols-outlined text-[20px]">sentiment_satisfied</span>
            </button>
          </div>
          <button 
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className={`p-3 rounded-full flex items-center justify-center transition-all shadow-sm ${inputValue.trim() ? 'bg-primary text-white hover:opacity-90 active:scale-95' : 'bg-surface-container text-on-surface-variant opacity-50'}`}
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
