import * as React from 'react';
import './Tabs.css';
import Web from '@material-ui/icons/Web';
import Home from '@material-ui/icons/Home';
import OpenInNew from '@material-ui/icons/OpenInNew'; //https://material.io/resources/icons/?style=baseline
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import LiveHelp from '@material-ui/icons/LiveHelp';
import Help from '@material-ui/icons/Help';
import CraftingIcon from '@material-ui/icons/Work';
import Patreon from './Patreon';

import { openUrl } from '../../integration/integration';
import translate from '../../translations/EmbeddedTranslator';

export interface Props {
  activeTab: number;
  isDarkMode: boolean;
  showVideoGuide: boolean;
  setActiveTab(idx: number): void;
}

export default function Tabs({activeTab, setActiveTab, isDarkMode, showVideoGuide}: Props) {
  const renderTabEntry = (label: string, idx: number, icon: any, isActive?: boolean, feature?: string) =>
    <li className={'tab fancyTab ' + (isActive ? 'active' : '')} onClick={() => setActiveTab(idx)} data-feature={feature}>
      <div className="arrow-down">
        <div className="arrow-down-inner"></div>
      </div>
      <a id="tab0" href={'#tabBody' + idx} role="tab" aria-controls={'tabBody' + idx} aria-selected="true" data-toggle="tab" tabIndex={idx}>

        <span className="fa">
          {icon} <br/>
          <span className="hidden-xs">{label}</span>
        </span>
      </a>
      <div className="whiteBlock"></div>
    </li>;

  const renderLinkEntry = (label: string, idx: number, icon: any, url: string) =>
    <li className={'tab fancyTab'} onClick={() => openUrl(url)}>
      <div className="arrow-down">
        <div className="arrow-down-inner"></div>
      </div>
      <a id="tab0" href={'#tabBody' + idx} role="tab" aria-controls={'tabBody' + idx} aria-selected="true" data-toggle="tab" tabIndex={idx}>

        <span className="fa">
          {icon} <br/>
          <span className="hidden-xs">{label}</span>
        </span>

        <span className="external-link"><OpenInNew /></span>
      </a>
      <div className="whiteBlock"></div>
    </li>;


  var idx = 0;
  return <section id="fancyTabWidget" className="tabs t-tabs">
    <ul className="nav nav-tabs fancyTabs" role="tablist">

      {renderTabEntry(translate('app.tab.items'), idx++, <Home/>, activeTab === 0)}
      {renderTabEntry(translate('app.tab.collections'), idx++, <Web/>, activeTab === 1)}
      {renderTabEntry(translate('app.tab.help'), idx++, <Help/>, activeTab === 2, "HelpTab")}
      {renderLinkEntry(translate('app.tab.components'), idx++, <OpenInNew/>, 'https://grimdawn.evilsoft.net/enchantments/')}
      {showVideoGuide && translate('app.tab.videoGuide').length > 0 && renderLinkEntry(translate('app.tab.videoGuide'), idx++, <VideoLibrary/>, translate('app.tab.videoGuideUrl'))}

      {renderLinkEntry(translate('app.tab.discord'), idx++, <LiveHelp/>, 'https://discord.gg/5wuCPbB')}
      {renderLinkEntry('Patreon', idx++, <Patreon/>, 'https://www.patreon.com/itemassistant')}
    </ul>
  </section>;
} // TODO: Discord link should be hardcoded in C# - Not translateable nor duplicated.