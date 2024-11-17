import Image from "next/image";
import Link from "next/link";
import { useBoundStore } from "~/hooks/useBoundStore";

type BottomBarItem = {
  name: Tab;
  href: string;
  icon: JSX.Element;
};

export type Tab = "Aprenda" | "Shop" | "Perfil" | "Leaderboards";

export const useBottomBarItems = () => {
  const loggedIn = useBoundStore((x) => x.loggedIn);

  const bottomBarItems: BottomBarItem[] = [
    {
      name: "Aprenda",
      href: "/learn",
      icon: (
        <Image
          width="50"
          height="50"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABgUlEQVR4nO2WvU7DMBSFzUNUqrD7ChTa8gQ8A2JmgJWBx2HnJ0B/qLChhDFCghcIQTA1kHhg7HpRI5UhbUjiuImL7pHOGOee810rIQSFQqH+pXi9XhOMWZyx4ajRWCerJEHprmBMCsYgMqXfnNJDsiqti9ngMRtNQ8RbT7JpNHhK60bTEFlbN40GV2z9D1vTM41q3W5uwuvlELzBCOzOdvU0eI7Wn/YPwH/7gkBOIvsfEl6Ojqu7GyJH66518zt43F7/Hux2pzwaPHfrn4nDl05DZGz9YaMJ7sUgdfA5Gr07eGy1l0dDZ+tJHr+HmWloDRC1ft5XHnyORlek0tAWYNr62PO1DR9kpFE4QNT6WU/74EGcxjUHe6ulN8CyWg9y0FAKwBkL3dPuwpes7Z0kWhuNq1vglPqqAaL/k6TDywgQyAnMvkVEVVUHIEWFASQSMGOF3J1aqoMy70BeYwBVIQGJK1RMuEKy4hVynkPQ4SwBnAXPYQAHCYS4QigUCkWM1Q9GwfaRrU8b4wAAAABJRU5ErkJggg=="
          alt="exterior"
        />
      ),
    },
    {
      name: "Perfil",
      href: loggedIn ? "/profile" : "/learn?sign-up",
      icon: (
        <Image
                  width="50"
          height="50"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIklEQVR4nO2Xa0wcVRTHF0ttsGqNiWlCY43UpI2mWiz1gyWpiu6d2e3ulO5cFmlERIoxqbGmgZ1ZMCi0YqNUrVhLFxGQhwoitAu2xgjM0EZNo1+0VmPSKqmNsYFS2BkehWPuLLu8dvbBzu42kZP8k83MueecH+eeOxedbsmWbMmiasUWw06O1Qsci4Z4TI1xLJrkWMorm4Wq0d3AtozHqJMUzWMK/In46G5Es1nTGJ5FE4EA5sFMTHfsJy7zSXOsGXQ2i3F/KACqYtEgl562JSYQRVZk1wRiRlM2TOVGFaLQYnhUY4gZPf3YtqiB8FjvihQIx6IJcnhEHsKCqiLWDeyF+TbiIBymQjqh5uutXBrezacDgFBTGOOECEKg8sUClGTR0HPQCBNOEwy2bIcD2f5heEwfjxgIj9FAqAD2DAqaCg1K8fCVyauLdduh2Kq+zobRWEQg8vM3rwoVovJFGv6sNc4BmK3TFcYAXUxL0hykAFMVwQKUPUPD6bcNMNnlG2C2Wu0G9VmxPFWnOQjHoj8CARRbaXC+ZgC5Y+428qdxpwne2e17XjhM/a09CEZj/iBq9tLwz6fBFT9fZIZ8zglLaX/BVAMof5aGc1XqcxAOCI8p0PTjWMwwG9USkSJmFzXyJQ3jTnUw8o74BAtiS0fGqNxyZ4MMtVJQbEyE6t3rVUEceevhVcMaGGqhggNhqQ81A+Ey6C+CARntMMD72eug056sCuLkN0Fl9n0wetwQFIidRb3agVios8FuLa1nxM5S57QDYakLaokaCsIHITFUT0QWXdIMhLegy2qJql6aO7iLUdUeP/culrqiGQiH0b9qiUqz0GS4ICSGn2/UVc1AyP/UqnsY66/316NFQ/xV746hCmKl3tAMxGbRn/EHYk55EIbbQp+Va21GIGt9grBoqgjrrTqtjd9J7+Pwwi3gASEabNwK0BUEUCcNA02pyhpfIBymxslHWBcpI1d5LoM+rwbS/MJqAMcKgM/uBziRthCAPCPvHCsUX98g9BDJo4uG8ay+lLTeJ8hR3YwIVM0qt8jvWe98gXAYXdRF2w48/8RqcsbzWH/dmJoKKTmvw+OF7wEci58L40vHliu+Kc+VgDF1K3AW/YQdo691sTKmV7o771DjZdTRD3FWB8Tv+hiG2/QAR+P8gMTBUDtSfMka1N4PeRUNl8x9rsSoA+Cf4WazIJUwguRiRBmIEnIblMI6PikA+HyjKgS0PATtDfsU31tyG5W1RGZRGjaJEr+tG+KjAyFcu8ssyIKnAI8S7SeV4sxv1roHu/VhZQt5IaqWA7Q9orwzldcpvmuKTs2JwbiBvsFnrt4ZUYgdffI6syhdmJ+cKKXmvPuvnFMPg86M6WOWAmhJBmhNBuhyX9uvnMiEhJx6xXdL7W8L4jCKpN+3i9LaiEAw3YN3kAS+E8tg6hmBlXlNSoHpB6e74kOebqzMawZTj0sFRCYwv5j74DbtQQS5Tj2ppyu/KkXelFkNL1d+sABiz+EjEJfpUHxIBwPFM4uSQ1OIHaJrMyNIU4ESEyWV9SqFEt3zSjPsqqhWtHZvs/d50n4hYByGiOTsG9mkGYhZlFuDSqwkl2FDxfewLOsjb+EekWcbDv2g+AQdT5SbNYGgvoPbGVGSQ0isCJ0cgAcO/wj3lvYoIr/RqYGQYjDurrhwN9wafjd6R40hJ9davTIKH0SQimINYhIlPnwQUToSaxBGkCrDBmEEucwsymdjKUaQy8IGWbIl+5/bf9f/VOBbTeJaAAAAAElFTkSuQmCC"
          alt="person-female"
        />
      ),
    },
  ];
  return bottomBarItems;
};

export const BottomBar = ({ selectedTab }: { selectedTab: Tab | null }) => {
  const bottomBarItems = useBottomBarItems();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t-2 border-[#e5e5e5] bg-white md:hidden">
      <ul className="flex h-[88px]">
        {bottomBarItems.map((item) => {
          return (
            <li
              key={item.href}
              className="flex flex-1 items-center justify-center"
            >
              <Link
                href={item.href}
                className={
                  item.name === selectedTab
                    ? "rounded-xl border-2 border-[#84d8ff] bg-[#ddf4ff] px-2 py-1"
                    : "px-2 py-1"
                }
              >
                {item.icon}
                <span className="sr-only">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
