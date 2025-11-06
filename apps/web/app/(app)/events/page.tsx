import { TopBar } from '@/components/navigation/top-bar';

export const metadata = {
  title: 'Events - CampusMatch',
  description: 'Discover and join campus events',
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar title="Events" />
      
      <div className="px-4 py-6 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse mb-3"></div>
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
            </div>
            <div className="h-3 bg-gray-200 rounded w-full animate-pulse mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
}