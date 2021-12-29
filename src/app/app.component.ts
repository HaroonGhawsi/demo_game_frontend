import { Component, OnInit } from '@angular/core';
import { GameOption } from './model/GameOption';
import { GameResponseDto } from './model/GameResponseDto';
import { GameService } from './service/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'game-frontend';
  response: GameResponseDto;
  initialValues: GameOption[] = [];

  constructor(private service: GameService) {
    this.response = {
      option: '',
      result: '',
    };
  }

  ngOnInit(): void {
    this.getGameOptions();
  }

  private getGameOptions() {
    this.service.getGameOptions().subscribe((data) => {
      this.initialValues = data;
    });
  }

  selectGameOption(gameOption: string) {
    if (gameOption) {
      this.service
        .addUserSelection(gameOption)
        .subscribe((data: GameResponseDto) => {
          this.response = data;
        });
    }
  }
}
