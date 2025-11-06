import { TabBar } from '@/components/navigation/tab-bar';
import { RouteGuard } from '../route-guard';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteGuard>
      <div className="mobile-container relative">
        <div className="pb-16">
          {children}
        </div>
        <TabBar />
      </div>
    </RouteGuard>
  );
}