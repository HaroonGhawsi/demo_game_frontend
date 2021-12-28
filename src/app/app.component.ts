import { Component, OnInit } from '@angular/core';
import { GameOption } from './model/GameOption';
import { GameResponseDto } from './model/GameResponseDto';
import { GameResult } from './model/GameResult';
import { GameService } from './service/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'game-frontend';
  response: GameResponseDto;

  constructor(private service: GameService) {
    this.response = {
      gameOption: '',
      gameResult: '',
    };
  }

  ngOnInit(): void {
    this.getGameOptions();
  }

  private getGameOptions() {
    this.service.getGameOptions().subscribe((data) => {});
  }

  selectGameOption(gameOption: string) {
    if (gameOption) {
      this.service.addUserSelection(gameOption).subscribe((data) => {
        this.response = {
          gameOption: data.option,
          gameResult: data.result,
        };
      });
    }
  }
}
