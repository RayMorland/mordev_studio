import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TeamService } from 'src/app/shared/team/team.service';

@Component({
  selector: 'app-team-member-page',
  templateUrl: './team-member-page.component.html',
  styleUrls: ['./team-member-page.component.scss']
})
export class TeamMemberPageComponent implements OnInit {
  @Input() teamMember: any;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBlogpost();
  }

  getBlogpost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.teamService.getTeamMember(id)
      .subscribe(teamMember => this.teamMember = teamMember);
  }

  goBack(): void {
    this.location.back();
  }
}
