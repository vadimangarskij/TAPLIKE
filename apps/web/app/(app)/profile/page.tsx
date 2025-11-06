import { TopBar } from '@/components/navigation/top-bar';

export const metadata = {
  title: 'Profile - CampusMatch',
  description: 'Manage your profile and settings',
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar title="Profile" />
      
      <div className="px-4 py-6 space-y-6">
        {/* Profile Header */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="flex-1">
              <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Profile Options */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="divide-y divide-gray-100">
            {[
              'Edit Profile',
              'Settings',
              'Privacy',
              'Notifications',
              'Help & Support',
            ].map((item) => (
              <button
                key={item}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-900">{item}</span>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}