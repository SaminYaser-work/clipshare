import { AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss']
})
export class TabsContainerComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>;


  selectTab(tab: TabComponent) {
    this.tabs?.forEach(
      tab => {
        tab.active = false;
      }
    )

    tab.active = true;

    return false;
  }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter((tab) => tab.active);

    if (activeTabs?.length === 0 || !activeTabs) {
      this.selectTab(this.tabs!.first);
    }
  }



}
