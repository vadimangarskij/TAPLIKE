import { TopBar } from '@/components/navigation/top-bar';

export const metadata = {
  title: 'Chats - CampusMatch',
  description: 'Message with other students',
};

export default function ChatsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar title="Chats" />
      
      <div className="px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No conversations yet
            </h3>
            <p className="text-gray-500">
              Start connecting with students to see your conversations here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}