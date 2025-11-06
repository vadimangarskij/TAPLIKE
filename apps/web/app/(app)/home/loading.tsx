import { TopBar } from '@/components/navigation/top-bar';

export default function HomeLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar title="CampusMatch" />
      
      <div className="px-4 py-6 space-y-6">
        {/* Welcome Section Skeleton */}
        <div className="bg-gray-200 rounded-2xl h-32 animate-pulse"></div>

        {/* Quick Actions Skeleton */}
        <div className="grid grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Recent Activity Skeleton */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}