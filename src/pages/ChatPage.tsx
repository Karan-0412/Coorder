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

      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto space-y-4">
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

      <footer className="bg-surface border-t border-surface-container-highest p-4">
        <div className="max-w-2xl mx-auto flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            className="flex-1 px-md py-sm rounded-lg bg-surface-container border border-outline-variant text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="px-4 py-sm bg-primary text-on-primary rounded-lg font-label-bold hover:opacity-80 transition-opacity disabled:opacity-50 flex items-center justify-center"
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
