import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './components/features/features.component';
import { OverviewComponent } from './component/overview/overview.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { PlanComponent } from './component/plan/plan.component';
import { TeamComponent } from './team/team.component';
import { ReviewComponent } from './review/review.component';
import { FinishComponent } from './finish/finish.component';
import { StartComponent } from './start/start.component';
import { FooterComponent } from './footer/footer.component';
OverviewComponent
PricingComponent
PlanComponent
TeamComponent
ReviewComponent
FinishComponent
StartComponent
FooterComponent

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FeaturesComponent,OverviewComponent,PricingComponent,PlanComponent,TeamComponent,ReviewComponent,FinishComponent,StartComponent,FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tp1';
}
