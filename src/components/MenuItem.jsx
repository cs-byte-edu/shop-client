import { memo, useMemo } from "react";
import { Menubar } from "radix-ui";
import { Link } from "react-router";
import { FireIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

// Рекурсивний MenuItem, який підтримує вкладені SubMenu
// isSub = false => верхній рівень (Menubar.Menu)
// isSub = true  => вкладений рівень (Menubar.Sub)

export const MenuItem = memo(({ item, isSub = false }) => {
  const hasChildren = item.items && item.items.length > 0;

  const icon = useMemo(() => {
    if (item.uiRouterKey === "promo")
      return <FireIcon className="size-8 text-[var(--c-red)]" />;
    if (item.uiRouterKey === "categories")
      return <Squares2X2Icon className="size-8 text-[var(--c-blue-500)]" />;
    return null;
  }, [item.uiRouterKey]);

  // Визначаємо, який компонент Radix використовувати
  const Wrapper = isSub ? Menubar.Sub : Menubar.Menu;
  const Trigger = isSub ? Menubar.SubTrigger : Menubar.Trigger;
  const Content = isSub ? Menubar.SubContent : Menubar.Content;

  return (
    <Wrapper
    //   open={open}
    //   onOpenChange={setOpen}
    //   onPointerEnter={handlePointerEnter}
    //   onPointerLeave={handlePointerLeave}
    >
      <Trigger
        asChild
        className={isSub ? "MenubarSubTrigger" : "MenubarTrigger"}
      >
        {hasChildren ? (
          <button className="MenubarTriggerButton">
            {icon}
            {item.title}
          </button>
        ) : (
          <Link to={item.path} className="MenubarTriggerButton">
            {icon}
            {item.title}
          </Link>
        )}
      </Trigger>

      {hasChildren && (
        <Menubar.Portal>
          <Content
            className={isSub ? "MenubarSubContent" : "MenubarContent"}
            align="start"
            sideOffset={4}
          >
            {item.items.map((sub) => (
              <MenuItem key={sub.id} item={sub} isSub={true} />
            ))}
          </Content>
        </Menubar.Portal>
      )}
    </Wrapper>
  );
});
