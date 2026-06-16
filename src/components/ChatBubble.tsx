interface ChatBubbleProps {
  message: string;
  sender: 'user' | 'peer';
  timestamp?: string;
  avatar?: string;
  senderName?: string;
  isLoading?: boolean;
  showName?: boolean;
}

export default function ChatBubble({
  message,
  sender,
  timestamp,
  senderName,
  isLoading = false,
  showName = true,
}: ChatBubbleProps) {
  const isUserMessage = sender === 'user';

  return (
    <div className={`flex flex-col max-w-[90%] ${isUserMessage ? 'items-end ml-auto' : 'items-start'}`}>
      {showName && (
        <div className={`flex items-center gap-xs mb-1 ${isUserMessage ? 'mr-1' : 'ml-1'}`}>
          {!isUserMessage ? (
            <span className="text-[11px] font-bold text-on-surface-variant">
              {senderName || 'Peer'}
            </span>
          ) : (
            <span className="text-[11px] font-bold text-primary">You</span>
          )}
        </div>
      )}

      <div
        className={`px-md py-sm rounded-xl ${
          isUserMessage
            ? 'bg-primary text-on-primary rounded-br-xs chat-bubble-user'
            : 'bg-surface-container-high text-on-surface rounded-bl-xs chat-bubble-peer'
        } reddit-card`}
      >
        {isLoading ? (
          <div className="flex gap-0.5 items-center justify-center py-1">
            <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"></div>
            <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: '-0.15s' }}></div>
            <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: '-0.3s' }}></div>
          </div>
        ) : (
          <p className="text-body-md whitespace-pre-wrap">
            {message}
            {timestamp && (
              <>
                {' '}
                <span className={`inline-block text-[10px] leading-none align-bottom ml-1 ${isUserMessage ? 'text-on-primary/60' : 'text-on-surface-variant'}`}>
                  {timestamp}
                </span>
              </>
            )}
          </p>
        )}
      </div>
    </div>
  );
}
