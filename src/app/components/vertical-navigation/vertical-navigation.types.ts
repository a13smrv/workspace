export enum ENavigationItems {
  Dashboard = 'Dashboard',
  Planner = 'Planner',
  Budget = 'Budget',
  Notepad = 'Notepad',
}

type TNavigationItem = ENavigationItems

export type TNavigationItems = Array<TNavigationItem>
