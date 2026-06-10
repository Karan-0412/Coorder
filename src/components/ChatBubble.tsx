interface ChatBubbleProps {
  message: string;
  sender: 'user' | 'peer';
  timestamp?: string;
  avatar?: string;
  senderName?: string;
  isLoading?: boolean;
}

export default function ChatBubble({
  message,
  sender,
  timestamp,
  avatar,
  senderName,
  isLoading = false,
}: ChatBubbleProps) {
  const isUserMessage = sender === 'user';

  return (
    <div
      className={`flex gap-2 ${isUserMessage ? 'justify-end' : 'justify-start'}`}
    >
      {!isUserMessage && avatar && (
        <img
          alt={senderName || 'User'}
          src={avatar}
          className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-1"
        />
      )}

      <div className={`flex flex-col ${isUserMessage ? 'items-end' : 'items-start'}`}>
        {!isUserMessage && senderName && (
          <span className="text-[12px] font-bold text-on-surface-variant mb-1 px-3">
            {senderName}
          </span>
        )}

        <div
          className={`max-w-xs lg:max-w-md px-3 py-2 rounded-lg text-body-md font-body-md break-words ${
            isUserMessage
              ? 'bg-primary text-on-primary chat-bubble-user'
              : 'bg-surface-container text-on-surface chat-bubble-peer'
          }`}
        >
          {isLoading ? (
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-on-surface rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-on-surface rounded-full animate-bounce animation-delay-200" />
              <span className="w-2 h-2 bg-on-surface rounded-full animate-bounce animation-delay-400" />
            </div>
          ) : (
            message
          )}
        </div>

        {timestamp && (
          <span className="text-[10px] text-on-surface-variant mt-1 px-3">
            {timestamp}
          </span>
        )}
      </div>

      {isUserMessage && avatar && (
        <img
          alt={senderName || 'User'}
          src={avatar}
          className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-1"
        />
      )}
    </div>
  );
}
