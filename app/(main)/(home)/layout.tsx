import { Metadata } from "next";

import { APP_NAME } from "@/src/common/utils/constants";
import HomeSidebar from "@/src/home/components/home-sidebar/home-sidebar";

export const metadata: Metadata = {
  title: `Home | ${APP_NAME}`,
  description: `Make the impossible, possible with ${APP_NAME}. The ultimate teamwork project management tool. Start up a board in seconds, automate tedious tasks, and collaborate anywhere, even on mobile.`,
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-screen-xlg m-auto px-4">
      <div className="grid grid-cols-12 py-10 gap-4">
        <aside className="col-span-3 sticky top-0">
          <HomeSidebar />
        </aside>
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
}
