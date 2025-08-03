import { Routes, RouterLink, RouterModule } from '@angular/router';

import { MainContentComponent } from './main-content/main-content.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MailSendComponent } from './mail-send/mail-send.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: "", component: MainContentComponent},
    { path: "impressum", component: ImpressumComponent },
    { path: "legal", component: LegalNoticeComponent },
    { path: "send", component: MailSendComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouttingModule { }
