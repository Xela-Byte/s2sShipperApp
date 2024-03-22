import {nanoid} from '@reduxjs/toolkit';
import ActiveBuildingIcon from '../../assets/svgs/ActiveBuildingIcon';
import InactiveBuildingIcon from '../../assets/svgs/InactiveBuildingIcon';
import ActiveChatIcon from '../../assets/svgs/ActiveChatIcon';
import InactiveChatIcon from '../../assets/svgs/InactiveChatIcon';
import ActiveWalletIcon from '../../assets/svgs/ActiveWalletIcon';
import InactiveWalletIcon from '../../assets/svgs/InactiveWalletIcon';
import InactiveProfileIcon from '../../assets/svgs/InactiveProfileIcon';

export interface BottomTabLinkType {
  key: string;
  linkText: string;
  activeLinkIcon: React.JSX.Element;
  inactiveLinkIcon: React.JSX.Element;
}

export const bottomTabLinks: BottomTabLinkType[] = [
  {
    key: nanoid(),
    activeLinkIcon: ActiveBuildingIcon({}),
    inactiveLinkIcon: InactiveBuildingIcon({}),
    linkText: 'Home',
  },
  {
    key: nanoid(),
    activeLinkIcon: ActiveChatIcon({}),
    inactiveLinkIcon: InactiveChatIcon({}),
    linkText: 'Chat',
  },
  {
    key: nanoid(),
    activeLinkIcon: ActiveWalletIcon({}),
    inactiveLinkIcon: InactiveWalletIcon({}),
    linkText: 'Wallet',
  },
  {
    key: nanoid(),
    activeLinkIcon: InactiveProfileIcon({}),
    inactiveLinkIcon: InactiveProfileIcon({}),
    linkText: 'Profile',
  },
];
