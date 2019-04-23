import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/shared/team/team.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {

  @Input() teamMember: any;

  constructor(
    private router: Router,
    private teamService: TeamService
  ) { }

  ngOnInit() {
  }

  setStyles() {
    const styles = {
      'background-image': 'url(' + this.teamMember.image + ')',
      'background-position': 'top',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
    };
    return styles;
  }

  navigateTo(): void {
    this.router.navigate(['/about/' + this.teamMember._id]);
  }
}
