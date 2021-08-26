import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    },
  },
  {
    name: 'Projects',
    url: '/projects',
    icon: 'icon-puzzle'
  },
  {
    name: 'Assigned To Me',
    url: '/assignedToMe',
    icon: 'icon-puzzle'
  },
  {
    name: 'Calls Made',
    url: '/callsMade',
    icon: 'icon-puzzle'
  },
  {
    name: 'Settings',
    url: '/settings',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'CallStatus',
        url: '/settings/callStatus',
        icon: 'icon-star'
      },
      {
        name: 'LogType',
        url: '/settings/logType',
        icon: 'icon-star'
      },
      {
        name: 'NextCallDate',
        url: '/settings/nextCallDate',
        icon: 'icon-star'
      },
      {
        name: 'Result',
        url: '/settings/result',
        icon: 'icon-star'
      }
    ]
  },
  
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  // {
  //   name: 'Disabled',
  //   url: '/dashboard',
  //   icon: 'icon-ban',
  //   badge: {
  //     variant: 'secondary',
  //     text: 'NEW'
  //   },
  //   attributes: { disabled: true },
  // },
];
